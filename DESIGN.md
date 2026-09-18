---
version: alpha
name: Kopi Sangkara Nocturnal Lab
description: Nocturnal coffee lab and cyber roastery design system with OLED dark theme, electric amber accents, and precision telemetry typography for Kopi Sangkara Naik Kelas.
colors:
  primary: "#F4F4F5"
  secondary: "#A1A1AA"
  tertiary: "#F97316"
  neutral: "#09090B"
  surface: "#141418"
  surface-muted: "#1E1E24"
  border: "#27272A"
  accent: "#F97316"
  accent-hover: "#EA580C"
  accent-subtle: "#341D12"
typography:
  h1:
    fontFamily: Plus Jakarta Sans
    fontSize: 3.5rem
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  h2:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.25rem
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  h3:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.5rem
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.125rem
    lineHeight: 1.6
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1rem
    lineHeight: 1.5
  caption:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.75rem
    fontWeight: 600
    letterSpacing: "0.05em"
rounded:
  sm: 6px
  md: 10px
  lg: 16px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.full}"
    padding: 14px
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
    textColor: "{colors.neutral}"
  button-secondary:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: 14px
  card-menu:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.lg}"
    padding: 20px
  badge-tag:
    backgroundColor: "{colors.accent-subtle}"
    textColor: "{colors.accent}"
    rounded: "{rounded.full}"
    padding: 6px
---

## Overview

Nocturnal Coffee Lab & Cyber Roastery visual identity for Kopi Sangkara "Naik Kelas". An OLED dark aesthetic featuring deep charcoal zinc surfaces, crisp silver-white typography, electric tangerine amber glow, and telemetry metadata.

## Colors

- **Canvas / Neutral (#09090B):** Deep OLED pitch black providing cinematic contrast on mobile displays.
- **Surface (#141418):** Precision dark zinc for card bodies and elevated panels.
- **Primary (#F4F4F5):** High-contrast crisp silver-white for headlines and primary text.
- **Secondary (#A1A1AA):** Technical slate grey for descriptions and metadata.
- **Tertiary / Accent (#F97316):** Glowing electric amber / tangerine for CTAs, neon accents, and active highlights.
- **Border (#27272A):** Precision dark hairline dividers.

## Typography

Plus Jakarta Sans for primary interface copy, supplemented by monospace telemetry tags and Didone serif arch accents for the "Naik Kelas" seal.

## Do's and Don'ts

- **DO** define all palette tokens in CSS variables (`--color-canvas`, `--color-surface`, `--color-primary`, `--color-accent`).
- **DO** use Tailwind semantic class utilities (`bg-canvas`, `text-primary`, `border-border`).
- **DON'T** use hardcoded arbitrary hex values inside component markup.
