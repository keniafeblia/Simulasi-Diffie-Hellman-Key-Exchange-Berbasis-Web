# 💡 Diffie-Hellman Key Exchange Web Simulator

Simulasi interaktif algoritma *Diffie-Hellman Key Exchange (DHKE)* berbasis web, dirancang untuk memvisualisasikan proses pembentukan kunci rahasia bersama antara dua pihak dan penerapannya dalam enkripsi dan dekripsi pesan teks sederhana. Proyek ini dibuat sebagai bagian dari tugas akhir mata kuliah **Kriptografi**.

## 🔍 Fitur Utama

- ✅ Mode **Input Manual** dan **Generate Otomatis**
- 🔐 Perhitungan Public Key dan Shared Key
- 🧠 Enkripsi dan Dekripsi pesan dengan metode XOR menggunakan shared key
- 💻 Dibuat dengan HTML, CSS, dan JavaScript murni (tanpa library eksternal)
- 📱 Responsif dan dapat dijalankan langsung di browser tanpa backend

## 🚀 Cara Menjalankan

1. Clone repositori ini:

   ```bash
   git clone https://github.com/username/dhke-simulator.git
   cd dhke-simulator

2. Buka file `index.html` di browser:

   * Klik dua kali `index.html` **atau**
   * Jalankan live server dari text editor seperti VS Code

## 🧪 Contoh Pengujian

| Parameter        | Nilai    |
| ---------------- | -------- |
| Prime (p)        | 23       |
| Primitive root g | 5        |
| Private Key A    | 6        |
| Private Key B    | 15       |
| Shared Key       | 2        |
| Pesan            | HASUGIAN |
| Enkripsi (XOR)   | JCUWIKCP |
| Dekripsi         | HASUGIAN |

> Hasil pengujian menunjukkan bahwa shared key berhasil dibentuk secara identik oleh kedua pihak, dan pesan dapat dikembalikan ke bentuk semula dengan benar.

## 📚 Latar Belakang

Proyek ini dikembangkan untuk membantu visualisasi konsep kriptografi kunci publik menggunakan algoritma *Diffie-Hellman*. Pendekatan ini didasarkan pada penelitian oleh Sarah Sagala (2024), yang sebelumnya mengimplementasikan DHKE dalam bentuk program Python.

Proyek ini melengkapi pendekatan tersebut dengan antarmuka web interaktif yang lebih mudah dipahami dan diakses oleh pengguna dari berbagai latar belakang.

## ⚠️ Keterbatasan

* Bilangan prima yang digunakan masih kecil (di bawah 100) demi kecepatan dan kemudahan visualisasi.
* XOR digunakan sebagai metode enkripsi sederhana (tidak aman untuk penerapan nyata).
* Tidak mencakup validasi integritas seperti hashing atau digital signature.

## 🔧 Rencana Pengembangan

* Penerapan bilangan prima dan eksponen berukuran besar
* Implementasi algoritma enkripsi simetris yang lebih kuat (seperti AES)
* Penambahan validasi integritas pesan (SHA-256, signature)
* Tampilan mobile-friendly dan mode offline (PWA)
* Simulasi algoritma kriptografi lainnya seperti RSA dan ElGamal

## 🙋‍♀️ Tentang Proyek

Dikembangkan oleh mahasiswa Program Studi Informatika – Universitas Bengkulu  
Mata Kuliah: Kriptografi  
Dosen Pengampu: **Ir. Kurnia Anggriani, S.T., M.T., Ph.D.**

### 👥 Anggota Kelompok

| No | Nama Lengkap            | NPM         |
|----|--------------------------|-------------|
| 1  | Kenia Nurma Feblia       | G1A023004   |
| 2  | Hesi Desta Lestari       | G1A023006   |
| 3  | Yovanza Villareal        | G1A023054   |
| 4  | Arrafi Andersont         | G1A023090   |
| 5  | M. Dimas Al Shiddiq      | G1A023092   |

---

> 📬 Jika Anda merasa proyek ini bermanfaat, jangan lupa beri ⭐ dan fork untuk pengembangan lebih lanjut!

---
