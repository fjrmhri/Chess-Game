<p align="center">
  <img src="https://img.shields.io/github/stars/fjrmhri/Pomo-Pixel?style=for-the-badge&logo=github&color=8b5cf6" alt="Stars"/>
  <img src="https://img.shields.io/github/license/fjrmhri/Pomo-Pixel?style=for-the-badge&color=10b981" alt="License"/>
  <img src="https://img.shields.io/badge/Next.js-15.3.3-black?style=for-the-badge&logo=next.js" alt="Next.js"/>
  <img src="https://img.shields.io/badge/TailwindCSS-3.4.1-38bdf8?style=for-the-badge&logo=tailwind-css" alt="TailwindCSS"/>
</p>

# Chess Game

Chess Game adalah aplikasi catur real-time berbasis Next.js dengan dua mode permainan: multiplayer sinkron dan latihan melawan bot minimax lokal. Proyek ini menonjolkan UI ringkas berbasis shadcn/ui serta sinkronisasi giliran dan chat melalui backend real-time.

## Fitur Utama

- **Ruang Multiplayer**: Buat atau gabung room, duduki kursi otomatis, dan sinkronisasi papan berstatus giliran.
- **Bot Lokal**: Bermain melawan minimax client-side tanpa layanan eksternal.
- **Chat Real-time**: Pesan per-ruang tersimpan di backend real-time dan otomatis menggulir ke pesan terbaru.
- **Validasi Langkah**: `chess.js` memastikan legalitas langkah, check, checkmate, stalemate, dan resign.
- **UI Konsisten**: Layout papan, action bar, info game, dan chat tetap familiar di kedua mode.

## Teknologi

- **Frontend**: Next.js (App Router), React, TypeScript, Tailwind CSS, shadcn/ui.
- **Backend**: Cloud datastore + anonymous auth (konfigurasi via environment).
- **AI/Bot**: Mesin minimax internal pada `src/utils/botEngine.ts`.

## Instalasi & Menjalankan Proyek

1. Pastikan Node.js 18+ terpasang.
2. Pasang dependensi:
   ```bash
   npm install
   ```
3. Salin berkas contoh environment dan isi kredensial backend real-time Anda:
   ```bash
   cp .env.local.example .env.local
   ```
4. Jalankan dalam mode pengembangan:
   ```bash
   npm run dev
   ```
   Aplikasi tersedia di http://localhost:9002.

## Konfigurasi Lingkungan

Isi variabel berikut pada `.env.local` sesuai proyek backend Anda:

```
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

## Struktur Direktori Singkat

- `src/app/` – Halaman Next.js (`/`, `/game/[gameId]`, `/bot`).
- `src/components/game/` – Komponen papan, info game, chat, action bar, dialog game over, dan saran langkah.
- `src/hooks/` – Logika efek untuk multiplayer (`useGameRoom`) dan bot lokal (`useBotGame`).
- `src/config/` & `src/lib/` – Konfigurasi dan inisialisasi backend realtime.
- `src/utils/` – Evaluasi dan pencarian langkah bot.
- `src/types/` – Definisi tipe berbagi.

## Lisensi

Proyek ini menggunakan lisensi MIT. Silakan ajukan isu atau pull request bila ingin berkontribusi.
