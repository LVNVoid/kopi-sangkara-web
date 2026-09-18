# 📋 Actionable Tasks — Kopi Sangkara Landing Page

- [x] **Task 1: Project Scaffolding & Configuration**
  - Setup Next.js 16 + TypeScript + Tailwind CSS di `/home/ubuntu/projects/kopi-sangkara-web`.
  - Install dependency: `lucide-react`, `clsx`, `tailwind-merge`.
  - Verification: `npm run build` sukses.

- [x] **Task 2: Design Token Engine & Typography**
  - Konfigurasi CSS variables tema Nordic Minimalist di `src/app/globals.css`.
  - Setup Plus Jakarta Sans font & utility classes semantik (`bg-canvas`, `text-primary`, `bg-accent`, dll.).
  - Verification: `npx tsc --noEmit` & zero arbitrary hex regex scan.

- [x] **Task 3: Shared Types & Cafe Data Layer**
  - Buat `src/types/cafe.ts` dan data statis `src/data/cafe-data.ts` (menu item, kategori, jam buka, galeri, fasilitas).
  - Verification: Unit check tipe data TypeScript lolos.

- [x] **Task 4: Atomic UI Primitives & Navigation Shell**
  - Bangun `Button`, `Badge`, `Card`, `SectionHeading` di `src/components/ui/`.
  - Bangun `Navbar` (sticky dengan efek blur + mobile drawer) & `Footer`.
  - Verification: Render preview navbar dan primitives.

- [x] **Task 5: Core Sections Implementation**
  - Implementasi `HeroSection` (headline hangat + CTA + quick badge).
  - Implementasi `StorySection` (filosofi Kopi Sangkara).
  - Implementasi `MenuSection` (interactive category filter).
  - Implementasi `GallerySection` (grid foto estetika cafe).
  - Implementasi `LocationSection` (maps link, jam operasional, fasilitas).
  - Verification: Semua komponen terintegrasi di `src/app/page.tsx`.

- [x] **Task 6: Verification, Performance & Hardcoded Color Audit**
  - Audit seluruh file `src/` untuk memastikan ZERO hex color hardcoded (hanya ada di `:root` `globals.css`).
  - Jalankan `npx tsc --noEmit` & `npm run build` (lulus tanpa warning/error).
  - Preview visual halaman via screenshot Playwright (full page & hero).

- [x] **Task 7: Obsidian Vault Sync & Logging**
  - Catat log sesi di `01 - Projects/Kopi-Sangkara-Web/` dan update `Active Projects.md`.
  - Git commit repo lokal & push ke vault GitHub.
