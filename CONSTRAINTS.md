# 🛡️ Quality Bar & Engineering Constraints

## 1. Zero Hardcoded Colors (User Mandatory Rule)
- **Constraint**: Dilarang keras menulis kode warna hardcoded hex/rgb/hsl langsung di dalam komponen JSX/TSX (misal: `bg-[#fdfbf7]`, `text-[#c2410c]`, atau style inline `color: #1c1917`).
- **Enforcement**: Seluruh warna wajib didefinisikan sebagai token CSS variables di `globals.css` / Tailwind `@theme` (`--canvas`, `--surface`, `--primary`, `--secondary`, `--accent`, `--border`, dll.) dan dikonsumsi melalui utility class semantik (`bg-canvas`, `text-primary`, `bg-accent`, `border-border`, dll.).

## 2. Zero `any` Policy
- Dilarang menulis keyword `any`, `@ts-ignore`, atau `@ts-nocheck`.
- Semua data menu, review, lokasi, dan galeri wajib memiliki kontrak TypeScript eksplisit dan validasi Zod.

## 3. Simple Scalable Architecture
- Folder terstruktur di `src/`:
  - `src/app/`: Shell routing App Router (Server Component default).
  - `src/components/ui/`: Atomic visual primitives ber-token variabel.
  - `src/components/sections/`: Blok seksional halaman (Hero, Story, Menu, Gallery, Location, Footer).
  - `src/data/`: Data statis menu & profil cafe terstruktur.
  - `src/types/`: Definisi interface dan contracts.
- Zero business logic di komponen UI.

## 4. Performance & Accessibility
- WCAG AA contrast ratio (> 4.5:1 untuk teks normal).
- Next.js Image Optimization untuk seluruh foto galeri & menu.
- Fast interactive load (LCP < 1.5s, zero cumulative layout shift).
