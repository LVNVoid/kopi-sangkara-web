# 📄 SPEC.md — Kopi Sangkara Landing Page

## 1. Objective
Membangun website publik dan landing page modern, elegan, dan informatif untuk **Kopi Sangkara** menggunakan tema **Nordic Minimalist & Natural Light** berbasis Next.js 16 App Router, TypeScript, dan Tailwind CSS.

## 2. Tech Stack & Commands
- **Framework**: Next.js 16 (App Router + React 19)
- **Styling**: Tailwind CSS dengan CSS Custom Properties Token Engine
- **Icons**: Lucide React
- **Quality Gates**:
  - Dev: `npm run dev`
  - Typecheck: `npx tsc --noEmit`
  - Lint: `npm run lint`
  - Build: `npm run build`

## 3. Project Structure
```
kopi-sangkara-web/
├── DESIGN.md                  # Token spesifikasi desain resmi
├── CONSTRAINTS.md             # Aturan tanpa warna hardcoded & zero-any
├── SPEC.md                    # Dokumen spesifikasi teknis
├── tasks/
│   ├── plan.md                # Rencana teknis arsitektur
│   └── todo.md                # Actionable task breakdown (S/M)
├── public/                    # Aset statis & foto kafe
├── src/
│   ├── app/
│   │   ├── globals.css        # CSS Custom Properties / @theme token mapping
│   │   ├── layout.tsx         # Root layout + Plus Jakarta Sans font
│   │   └── page.tsx           # Landing page composition
│   ├── components/
│   │   ├── layout/            # Navbar, Mobile Menu, Footer
│   │   ├── sections/          # Hero, About, MenuShowcase, Ambience, Location
│   │   └── ui/                # Button, Badge, Card, Modal, SectionHeader
│   ├── data/                  # Menu items, cafe schedule, gallery assets
│   ├── types/                 # TypeScript interfaces
│   └── utils/                 # cn() helper
└── package.json
```

## 4. Key Sections & Content Flow
1. **Header & Navigation**: Logo Kopi Sangkara, link anchors (Story, Menu, Ambience, Location), tombol CTA WhatsApp / Reservasi.
2. **Hero Section**: Headline puitis hangat *"Menyeduh Ketenangan, Merayakan Rasa"*, sub-headline, jam buka hari ini, tombol *"Lihat Menu"* & *"Kunjungi Kafe"*.
3. **Philosophy & Story Section**: Cerita pemilihan biji kopi lokal, metode seduh manual, dan suasana ramah kafe.
4. **Signature Menu Showcase**: Grid kategori (Signature Coffee, Manual Brew, Artisanal Tea, Comfort Bites) dengan filter kategori responsif dan harga.
5. **Ambience & Space Gallery**: Grid foto estetika indoor, outdoor, sudut kerja/laptop, dan slow bar.
6. **Location, Map & Operating Hours**: Alamat lengkap, integrasi Google Maps direct link, jadwal jam buka per hari, dan info fasilitas (WiFi kencang, colokan tiap meja, mushola, smoking/non-smoking area).
7. **Footer**: Social media links, copyright, dan tautan internal POS kasir (`kopi-sangkara-pos.vercel.app`).
