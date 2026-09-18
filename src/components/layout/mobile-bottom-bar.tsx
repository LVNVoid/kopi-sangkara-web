"use client";

import * as React from "react";
import { UtensilsCrossed, MapPin, MessageCircle, Sparkles } from "lucide-react";
import { CAFE_INFO } from "@/data/cafe-data";

export function MobileBottomBar() {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      // Show after user scrolls down 150px
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-4 inset-x-4 z-40 pointer-events-none animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="mx-auto max-w-sm bg-surface/92 backdrop-blur-2xl rounded-2xl border border-accent/40 shadow-[0_10px_35px_rgba(0,0,0,0.9)] p-1.5 flex items-center justify-between gap-1 pointer-events-auto">
        <a
          href="#cerita"
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl text-secondary hover:text-accent hover:bg-surface-muted active:scale-95 transition-all text-center min-h-[44px]"
        >
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-[10px] font-mono font-bold mt-0.5 tracking-tight">Story</span>
        </a>

        <a
          href="#menu"
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl text-secondary hover:text-accent hover:bg-surface-muted active:scale-95 transition-all text-center min-h-[44px]"
        >
          <UtensilsCrossed className="w-4 h-4 text-accent" />
          <span className="text-[10px] font-mono font-bold mt-0.5 tracking-tight">Menu Lab</span>
        </a>

        <a
          href="#lokasi"
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl text-secondary hover:text-accent hover:bg-surface-muted active:scale-95 transition-all text-center min-h-[44px]"
        >
          <MapPin className="w-4 h-4 text-accent" />
          <span className="text-[10px] font-mono font-bold mt-0.5 tracking-tight">Coords</span>
        </a>

        <a
          href={CAFE_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1.3 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-accent text-canvas shadow-[0_0_15px_var(--color-cyber-glow)] active:scale-95 transition-all min-h-[44px]"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="text-xs font-mono font-black tracking-tight">Order WA</span>
        </a>
      </div>
    </div>
  );
}
