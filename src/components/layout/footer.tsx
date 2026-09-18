import * as React from "react";
import Link from "next/link";
import { Coffee, MessageCircle, MapPin, ExternalLink } from "lucide-react";
import { CAFE_INFO, OPERATING_HOURS } from "@/data/cafe-data";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-surface border-t border-border mt-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                <Coffee className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-primary">
                {CAFE_INFO.name}
              </span>
            </div>
            <p className="text-sm text-secondary leading-relaxed max-w-sm">
              {CAFE_INFO.shortDescription}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={CAFE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-surface-muted border border-border flex items-center justify-center text-secondary hover:text-accent hover:border-accent transition-all"
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
                className="w-9 h-9 rounded-full bg-surface-muted border border-border flex items-center justify-center text-secondary hover:text-accent hover:border-accent transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Jam Operasional */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary">
              Jam Operasional
            </h3>
            <ul className="space-y-3 text-sm text-secondary">
              {OPERATING_HOURS.map((item, idx) => (
                <li key={idx} className="flex flex-col">
                  <span className="font-semibold text-primary">{item.days}</span>
                  <span>{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Lokasi & Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary">
              Alamat & Akses
            </h3>
            <div className="flex items-start gap-2.5 text-sm text-secondary">
              <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <span>{CAFE_INFO.address}</span>
            </div>
            <div className="pt-2">
              <a
                href={CAFE_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
              >
                <span>Buka Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-12 mt-12 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-secondary">
          <p>© {currentYear} {CAFE_INFO.name}. Hak cipta dilindungi undang-undang.</p>
          <div className="flex items-center gap-4">
            <Link
              href={CAFE_INFO.posSystemUrl}
              target="_blank"
              className="inline-flex items-center gap-1 text-secondary hover:text-primary transition-colors"
            >
              <span>Portal POS Kasir</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
