<p align="center">
  <img src="https://img.shields.io/github/stars/fjrmhri/Pomo-Pixel?style=for-the-badge&logo=github&color=8b5cf6" alt="Stars"/>
  <img src="https://img.shields.io/github/license/fjrmhri/Pomo-Pixel?style=for-the-badge&color=10b981" alt="License"/>
  <img src="https://img.shields.io/badge/Next.js-15.3.3-black?style=for-the-badge&logo=next.js" alt="Next.js"/>
  <img src="https://img.shields.io/badge/Firebase-11.9.1-FFCA28?style=for-the-badge&logo=firebase" alt="Firebase"/>
  <img src="https://img.shields.io/badge/TailwindCSS-3.4.1-38bdf8?style=for-the-badge&logo=tailwind-css" alt="TailwindCSS"/>
</p>

# Firebase Chess Royale

Aplikasi catur multipemain waktu nyata berbasis Next.js, Firebase, dan Tailwind CSS. Pemain dapat membuat atau bergabung ke ruang permainan, bertanding secara sinkron, dan mengirim pesan melalui chat bawaan tanpa mengubah tampilan antarmuka yang sudah ada.

## Fitur Utama
- Membuat dan bergabung ke ruang permainan baru dengan kode unik.
- Sinkronisasi papan catur dan status permainan secara real-time menggunakan Firestore.
- Validasi langkah catur menggunakan `chess.js` termasuk deteksi skakmat, remis, dan giliran pemain.
- Sistem chat in-game yang menampilkan histori pesan kronologis.
- Saran langkah berbasis Genkit yang dapat dipanggil langsung dari UI.
- Antarmuka modern dengan komponen `shadcn/ui` dan gaya Tailwind.

## Prasyarat
- Node.js 18 atau lebih baru.
- Akun Firebase dengan Firestore dan Authentication (Anonymous) aktif.

## Instalasi & Menjalankan Proyek
1. Pasang dependensi:
   ```bash
   npm install
   ```
2. Salin berkas contoh environment lalu isi nilai yang sesuai:
   ```bash
   cp .env.local.example .env.local
   ```
3. Jalankan server pengembangan:
   ```bash
   npm run dev
   ```
4. Buka `http://localhost:9002` di peramban untuk mulai bermain.

## Konfigurasi Lingkungan
Berkas `.env.local` memerlukan konfigurasi Firebase berikut:
- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`

Pastikan Authentication mode Anonymous diaktifkan dan Firestore sudah dibuat.

## Struktur Proyek Singkat
- `src/app/` – Halaman dan layout Next.js App Router.
- `src/components/` – Komponen UI umum dan komponen permainan catur.
- `src/hooks/` – Hook khusus seperti `useGameRoom` untuk sinkronisasi game.
- `src/lib/` – Inisialisasi Firebase.
- `src/types/` – Definisi tipe bersama.

## Lisensi
Proyek ini dirilis di bawah lisensi MIT. Lihat berkas lisensi di repositori untuk detail lebih lanjut.
