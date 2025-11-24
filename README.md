<p align="center">
  <img src="https://img.shields.io/github/stars/fjrmhri/Pomo-Pixel?style=for-the-badge&logo=github&color=8b5cf6" alt="Stars"/>
  <img src="https://img.shields.io/github/license/fjrmhri/Pomo-Pixel?style=for-the-badge&color=10b981" alt="License"/>
  <img src="https://img.shields.io/badge/Next.js-15.3.4-black?style=for-the-badge&logo=next.js" alt="Next.js"/>
  <img src="https://img.shields.io/badge/Firebase-12.1.0-FFCA28?style=for-the-badge&logo=firebase" alt="Firebase"/>
  <img src="https://img.shields.io/badge/TailwindCSS-4-38bdf8?style=for-the-badge&logo=tailwind-css" alt="TailwindCSS"/>
</p>

# Chess Game

Chess Game adalah aplikasi catur real-time berbasis Next.js dan Firebase. Pemain dapat membuat atau bergabung ke ruang multipemain, berbagi papan dan histori langkah lewat Firestore, atau berlatih melawan bot minimax lokal dengan UI yang sama.

## Fitur
- **Multiplayer sinkron**: Membuat/bergabung ke room, kursi pemain otomatis, dan status giliran selalu terbarui.
- **Bot lokal**: Bermain melawan bot minimax tanpa layanan eksternal.
- **Aturan lengkap**: Validasi langkah menggunakan `chess.js`, dukungan check, checkmate, stalemate, dan resign.
- **Chat langsung**: Obrolan per-ruang tersimpan di Firestore dan otomatis scroll ke pesan terbaru.
- **UI ringkas**: Tata letak responsif menjaga papan, kontrol, dan chat tetap terlihat di layar desktop umum.

## Teknologi
- **Frontend**: Next.js (App Router), React, TypeScript, Tailwind CSS, shadcn/ui.
- **Backend**: Firebase Firestore & Firebase Auth (anonim) untuk sinkronisasi dan identitas pemain.
- **Logika catur**: `chess.js` untuk aturan & validasi, minimax kustom untuk bot.

## Prasyarat
- Node.js 18+
- Proyek Firebase dengan Firestore dan Anonymous Authentication aktif.

## Instalasi
```bash
npm install
cp .env.local.example .env.local
```

Isi `.env.local` dengan kredensial Firebase Anda:
```
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

## Menjalankan Secara Lokal
```bash
npm run dev
```
Buka http://localhost:9002 untuk bermain.

## Deployment
1. Push repo ini ke GitHub.
2. Buat proyek baru di Vercel dan impor repo.
3. Tambahkan variabel lingkungan Firebase yang sama di Project Settings Vercel.
4. Deploy — tidak perlu server kustom.

## Cara Pakai
### Mode Multiplayer
1. Di halaman awal, klik **Start Multiplayer Room** untuk membuat ruang baru atau masukkan ID undangan untuk bergabung.
2. Bagikan tautan/ID game ke teman.
3. Mainkan giliran pada papan yang tersinkron, status dan giliran tercatat di Firestore.
4. Gunakan panel chat untuk berkomunikasi; pesan muncul secara real-time.
5. Tekan resign dari action bar jika ingin menyerah.

### Mode Bot
1. Dari menu utama pilih **Practice vs Bot**.
2. Pilih warna bidak dan mulai bermain; bot minimax akan merespons segera.
3. Gunakan kontrol untuk restart atau berpindah warna.

## Struktur Proyek
- `src/app/` – Halaman Next.js (`/`, `/game/[gameId]`, `/bot`).
- `src/components/game/` – UI papan, info game, chat, aksi, dialog game over, dan saran langkah.
- `src/hooks/` – Manajemen state & efek (`useGameRoom` untuk Firestore, `useBotGame` untuk bot lokal).
- `src/config/` & `src/lib/` – Konfigurasi dan inisialisasi Firebase.
- `src/utils/` – Helper evaluasi bot.
- `src/types/` – Tipe bersama untuk game, chat, dan status pemain.

## Kontribusi
Pull request dan isu sangat dipersilakan. Jaga komponen tetap presentasional dan utamakan hooks untuk logika serta pemanggilan Firebase.

## Lisensi
MIT
