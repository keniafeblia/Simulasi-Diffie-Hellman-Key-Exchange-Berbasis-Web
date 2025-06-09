// Bilangan Primanya
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Bilangan Prima Random
function getRandomPrime(min = 20, max = 50) {
  let prime;
  do {
    prime = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (!isPrime(prime));
  return prime;
}

// Mencari Akar Primitif Untuk Auto
function findPrimitiveRoot(p) {
  for (let g = 2; g < p; g++) {
    let powers = new Set();
    for (let i = 1; i < p; i++) {
      powers.add(modPow(g, i, p));
    }
    if (powers.size === p - 1) {
      return g;
    }
  }
  return -1;
}

// fungsi Modpow untuk menghitung modulo
function modPow(base, exponent, modulus) {
  if (modulus === 1) return 0;
  let result = 1;
  base = base % modulus;
  while (exponent > 0) {
    if (exponent % 2 === 1) result = (result * base) % modulus;
    exponent = Math.floor(exponent / 2);
    base = (base * base) % modulus;
  }
  return result;
}

function showManual() {
  document.getElementById("manualForm").style.display = "block";
  document.getElementById("autoForm").style.display = "none";
  document.getElementById("output").innerText = "";
}

function showAuto() {
  document.getElementById("manualForm").style.display = "none";
  document.getElementById("autoForm").style.display = "block";
  document.getElementById("output").innerText = "";
}

// Fungsi enkripsi
function encryptMessage(message, key) {
  let encrypted = "";
  for (let i = 0; i < message.length; i++) {
    encrypted += String.fromCharCode(message.charCodeAt(i) ^ (key % 256));
  }
  return encrypted;
}

// Fungsi dekripsi
function decryptMessage(encryptedMessage, key) {
  let decrypted = "";
  for (let i = 0; i < encryptedMessage.length; i++) {
    decrypted += String.fromCharCode(encryptedMessage.charCodeAt(i) ^ (key % 256));
  }
  return decrypted;
}

function runManual() {
  const p = parseInt(document.getElementById("p").value);
  const g = parseInt(document.getElementById("g").value);
  const a = parseInt(document.getElementById("a").value);
  const b = parseInt(document.getElementById("b").value);
  const message = document.getElementById("message_manual").value || "";

  if (!isPrime(p)) {
    alert("Nilai harus bilangan prima!");
    return;
  }

  const A = modPow(g, a, p);
  const B = modPow(g, b, p);
  const sharedA = modPow(B, a, p);
  const sharedB = modPow(A, b, p);

  const encryptedMsg = encryptMessage(message, sharedA);
  const decryptedMsg = decryptMessage(encryptedMsg, sharedA);
  displayResult(p, g, a, b, A, B, sharedA, sharedB, message, encryptedMsg, decryptedMsg);
}

function runAuto() {
  const p = getRandomPrime(50, 100);
  const g = findPrimitiveRoot(p);
  const a = Math.floor(Math.random() * (p - 2)) + 2;
  const b = Math.floor(Math.random() * (p - 2)) + 2;
  const message = document.getElementById("message_auto").value || "";

  document.getElementById("p_auto").value = p;
  document.getElementById("g_auto").value = g;
  document.getElementById("a_auto").value = a;
  document.getElementById("b_auto").value = b;

  const A = modPow(g, a, p);
  const B = modPow(g, b, p);
  const sharedA = modPow(B, a, p);
  const sharedB = modPow(A, b, p);

  const encryptedMsg = encryptMessage(message, sharedA);
  const decryptedMsg = decryptMessage(encryptedMsg, sharedA);
  displayResult(p, g, a, b, A, B, sharedA, sharedB, message, encryptedMsg, decryptedMsg);
}

function displayResult(p, g, a, b, A, B, sharedA, sharedB, message, encryptedMsg, decryptedMsg) {
  const output = `
Nilai yang digunakan:
Bilangan Prima = ${p}
Akar Primitif = ${g}
Private A = ${a}
Private B = ${b}

Public key A (g^a mod p) = ${A}
Public key B (g^b mod p) = ${B}

Shared key dihitung A: ${sharedA}
Shared key dihitung B: ${sharedB}

${sharedA === sharedB ? "Kunci bersama berhasil dibentuk!" : "Kunci bersama tidak cocok."}

Pesan Rahasia: ${message}
Pesan Terenkripsi (XOR dengan shared key): ${encryptedMsg}
Pesan Setelah Dekripsi Kembali: ${decryptedMsg}
  `;
  document.getElementById("output").innerText = output;
}