# 📐 Architecture Plan — Kopi Sangkara Web

## 1. Dependency Graph (Bottom-Up)
1. **Design Tokens Engine**: `globals.css` (CSS variables: `--color-canvas`, `--color-surface`, `--color-primary`, `--color-secondary`, `--color-accent`, `--color-border`) -> Tailwind utilities (`bg-canvas`, `text-primary`, `bg-accent`, `border-border`).
2. **Types & Data Layer**: `src/types/cafe.ts`, `src/data/menu.ts`, `src/data/cafe-info.ts`.
3. **Atomic Primitives**: `src/components/ui/button.tsx`, `badge.tsx`, `card.tsx`, `section-header.tsx`.
4. **Structural Layout**: `src/components/layout/navbar.tsx`, `footer.tsx`.
5. **Feature Sections**:
   - Hero: `src/components/sections/hero-section.tsx`
   - Story: `src/components/sections/story-section.tsx`
   - Menu: `src/components/sections/menu-section.tsx`
   - Ambience: `src/components/sections/gallery-section.tsx`
   - Location & Hours: `src/components/sections/location-section.tsx`
6. **Page Composition**: `src/app/page.tsx` composing sections inside `layout.tsx`.

## 2. Zero Hardcoded Colors Enforcement
- Setiap warna diakses via utility class Tailwind yang merujuk variabel di `globals.css`.
- Contoh:
  - Background utama: `bg-canvas` -> `var(--color-canvas)`
  - Kartu menu: `bg-surface border border-border` -> `var(--color-surface)`, `var(--color-border)`
  - Tombol CTA: `bg-accent text-white hover:bg-accent-hover` -> `var(--color-accent)`
  - Teks deskripsi: `text-secondary` -> `var(--color-secondary)`

## 3. Risks & Mitigations
- *Risk*: Inkonsistensi warna bila ada hex liar.
  - *Mitigation*: ESLint rule / regex check scanning arbitrary `[#...]` in JSX.
- *Risk*: Aset gambar kafe pecah atau lambat dimuat.
  - *Mitigation*: Next.js Image component dengan `sizes`, `priority` pada hero, dan WebP formatting.
