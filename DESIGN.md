---
version: alpha
name: Kopi Sangkara Nordic
description: Nordic minimalist & natural light design system for Kopi Sangkara cafe landing page.
colors:
  primary: "#1C1917"
  secondary: "#78716C"
  tertiary: "#C2410C"
  neutral: "#FDFBF7"
  surface: "#FFFFFF"
  surface-muted: "#F5F5F4"
  border: "#E7E5E4"
  accent: "#C2410C"
  accent-hover: "#9A3412"
  accent-subtle: "#FFEDD5"
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
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.full}"
    padding: 14px
  button-primary-hover:
    backgroundColor: "{colors.accent}"
    textColor: "#FFFFFF"
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

Nordic Minimalist & Natural Light visual identity for Kopi Sangkara. Clean Scandinavian aesthetics with warm paper canvas, crisp white surfaces, deep charcoal typography, and terracotta clay accents.

## Colors

- **Canvas / Neutral (#FDFBF7):** Warm off-white paper tone providing airy daylight ambiance.
- **Surface (#FFFFFF):** Elevated card surfaces and navigation shells.
- **Primary (#1C1917):** Deep roasted charcoal for high-contrast legible typography and primary buttons.
- **Secondary (#78716C):** Warm stone grey for descriptions, secondary metadata, and inactive elements.
- **Tertiary / Accent (#C2410C):** Terracotta clay for highlight badges, focus states, and warm CTAs.
- **Border (#E7E5E4):** Light sandstone hairline dividers.

## Typography

Plus Jakarta Sans across all display headings, body prose, and UI microcopy.

## Layout

Generous whitespace (max width 1200px container), responsive 12-column grid, modular cards with 16px borders.

## Components

All buttons, cards, badges, and headers derive styling exclusively from CSS variables. Hardcoded arbitrary hex/rgb in JSX components is strictly prohibited.

## Do's and Don'ts

- **DO** define all palette tokens in CSS variables (`--color-canvas`, `--color-surface`, `--color-primary`, `--color-accent`, etc.).
- **DO** use Tailwind semantic class utilities (`bg-canvas`, `text-primary`, `border-border`).
- **DON'T** use hardcoded arbitrary hex values (e.g. `bg-[#FDFBF7]` or `text-[#C2410C]`) inside component markup.
- **DON'T** clutter layouts with heavy shadows or dark overlays; maintain airy natural light feel.
