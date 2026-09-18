import * as React from "react";
import Link from "next/link";
import { MessageCircle, MapPin, ExternalLink, Terminal } from "lucide-react";
import { CAFE_INFO, OPERATING_HOURS } from "@/data/cafe-data";
import { SangkaraLogo } from "@/components/ui/sangkara-logo";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-surface border-t border-border mt-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-surface-muted border border-accent/30 flex items-center justify-center text-accent">
                <SangkaraLogo size={32} className="text-accent" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-black tracking-wider text-primary uppercase">
                    {CAFE_INFO.name}
                  </span>
                  <span className="text-[9px] font-mono font-bold text-accent bg-accent-subtle px-1.5 py-0.5 rounded border border-accent/30">
                    NAIK KELAS
                  </span>
                </div>
                <span className="text-xs font-mono text-secondary">
                  NOCTURNAL COFFEE LAB & ROASTERY
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-secondary leading-relaxed max-w-sm font-normal">
              {CAFE_INFO.shortDescription}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={CAFE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-surface-muted border border-border flex items-center justify-center text-secondary hover:text-accent hover:border-accent transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href={CAFE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-surface-muted border border-border flex items-center justify-center text-secondary hover:text-accent hover:border-accent transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-accent" />
              <span>BREW LAB HOURS</span>
            </h3>
            <ul className="space-y-3 text-xs font-mono text-secondary">
              {OPERATING_HOURS.map((item, idx) => (
                <li key={idx} className="flex flex-col">
                  <span className="font-bold text-primary">{item.days}</span>
                  <span className="text-accent">{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Coordinates & Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              <span>COORDINATES & ACCESS</span>
            </h3>
            <div className="text-xs text-secondary leading-relaxed">
              <span>{CAFE_INFO.address}</span>
            </div>
            <div className="pt-1">
              <a
                href={CAFE_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-accent hover:underline"
              >
                <span>OPEN GOOGLE MAPS</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 mt-12 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-secondary">
          <p>© {currentYear} {CAFE_INFO.name}. All systems operational. Naik Kelas.</p>
          <div className="flex items-center gap-4">
            <Link
              href={CAFE_INFO.posSystemUrl}
              target="_blank"
              className="inline-flex items-center gap-1 text-secondary hover:text-accent transition-colors"
            >
              <span>PORTAL POS KASIR</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
