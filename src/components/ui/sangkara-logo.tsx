"use client";

import * as React from "react";

interface SangkaraLogoProps {
  className?: string;
  size?: number;
}

export function SangkaraLogo({ className = "w-10 h-10 text-accent", size = 40 }: SangkaraLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Kopi Sangkara Naik Kelas Logo"
    >
      {/* Outer Dashed Border */}
      <circle cx="60" cy="60" r="56" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
      {/* Outer Solid Ring */}
      <circle cx="60" cy="60" r="51" stroke="currentColor" strokeWidth="2.5" />
      {/* Inner Thin Ring */}
      <circle cx="60" cy="60" r="39" stroke="currentColor" strokeWidth="1" opacity="0.5" />

      {/* Center Arch Portal Frame */}
      <path
        d="M44 76 V 52 A 16 16 0 0 1 76 52 V 76 Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        fillOpacity="0.06"
      />

      {/* Sunburst Rays - Top */}
      <line x1="60" y1="24" x2="60" y2="34" stroke="currentColor" strokeWidth="1.5" />
      <line x1="42" y1="29" x2="48" y2="37" stroke="currentColor" strokeWidth="1.5" />
      <line x1="78" y1="29" x2="72" y2="37" stroke="currentColor" strokeWidth="1.5" />
      <line x1="30" y1="42" x2="38" y2="46" stroke="currentColor" strokeWidth="1.5" />
      <line x1="90" y1="42" x2="82" y2="46" stroke="currentColor" strokeWidth="1.5" />

      {/* Sunburst Rays - Bottom */}
      <line x1="60" y1="96" x2="60" y2="86" stroke="currentColor" strokeWidth="1.5" />
      <line x1="44" y1="91" x2="49" y2="84" stroke="currentColor" strokeWidth="1.5" />
      <line x1="76" y1="91" x2="71" y2="84" stroke="currentColor" strokeWidth="1.5" />

      {/* Steaming Coffee Cup */}
      {/* Saucer */}
      <ellipse cx="60" cy="71" rx="11" ry="2.2" stroke="currentColor" strokeWidth="1.5" />
      {/* Cup Body */}
      <path
        d="M51 60 H 69 V 65 C 69 68.5 65 70 60 70 C 55 70 51 68.5 51 65 Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      {/* Cup Handle */}
      <path d="M69 62 C 72 62 73 66 69 67" stroke="currentColor" strokeWidth="1.2" />
      {/* Steam Wisps */}
      <path
        d="M57 56 C 56 53 58 51 57 48"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M62 57 C 63 54 61 52 63 49"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* Curved Text along path - Top: KOPI SANGKARA */}
      <path id="textPathTop" d="M 22 60 A 38 38 0 0 1 98 60" fill="none" />
      <text fill="currentColor" fontSize="8.5" fontWeight="900" letterSpacing="0.22em" textAnchor="middle">
        <textPath href="#textPathTop" startOffset="50%">
          KOPI SANGKARA
        </textPath>
      </text>

      {/* Curved Text along path - Bottom: NAIK KELAS */}
      <path id="textPathBottom" d="M 96 64 A 38 38 0 0 1 24 64" fill="none" />
      <text fill="currentColor" fontSize="8" fontWeight="900" letterSpacing="0.24em" textAnchor="middle">
        <textPath href="#textPathBottom" startOffset="50%">
          ★ NAIK KELAS ★
        </textPath>
      </text>
    </svg>
  );
}
