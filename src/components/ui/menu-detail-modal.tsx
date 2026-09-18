"use client";

import * as React from "react";
import Image from "next/image";
import { X, Sparkles, Heart, Utensils, MessageCircle, Check, Terminal } from "lucide-react";
import { MenuItem } from "@/types/cafe";
import { CAFE_INFO } from "@/data/cafe-data";

interface MenuDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export function MenuDetailModal({ item, onClose }: MenuDetailModalProps) {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (item) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  const formatIDR = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const whatsappOrderUrl = `${CAFE_INFO.whatsappUrl}%20-%20Saya%20tertarik%20dengan%20menu%20*${encodeURIComponent(
    item.name
  )}*%20(${formatIDR(item.price)}).`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg bg-surface rounded-3xl border border-accent/40 shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button - Min 44px Touch Area */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-surface/90 border border-border text-secondary hover:border-accent hover:text-accent flex items-center justify-center transition-all cursor-pointer shadow-lg"
          aria-label="Tutup Detail"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Thumbnail Hero */}
        {item.image && (
          <div className="relative aspect-16/9 w-full bg-surface-muted overflow-hidden border-b border-border">
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="(max-width: 640px) 100vw, 512px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 flex gap-1.5 font-mono">
              {item.isSignature && (
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-accent text-canvas flex items-center gap-1 shadow-[0_0_12px_var(--color-cyber-glow)]">
                  <Sparkles className="w-3.5 h-3.5" />
                  SIGNATURE
                </span>
              )}
              {item.isPopular && !item.isSignature && (
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-surface/90 backdrop-blur-md text-primary border border-border flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 text-accent" />
                  FAVORITE
                </span>
              )}
            </div>
          </div>
        )}

        {/* Details Content */}
        <div className="p-6 space-y-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono text-accent uppercase tracking-widest block mb-1">
                // CATEGORY: {item.category.replace("-", " ")}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-primary">
                {item.name}
              </h3>
            </div>
            <span className="text-base sm:text-lg font-mono font-black text-accent bg-accent-subtle px-3 py-1 rounded-full border border-accent/30 shrink-0">
              {formatIDR(item.price)}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-secondary leading-relaxed font-normal">
            {item.description}
          </p>

          {/* Tasting Notes */}
          {item.tastingNotes && item.tastingNotes.length > 0 && (
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-accent" />
                <span>EXTRACTION TASTING PROFILE</span>
              </span>
              <div className="flex flex-wrap gap-1.5 font-mono">
                {item.tastingNotes.map((note, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold text-secondary bg-surface-muted border border-border px-3 py-1 rounded-lg flex items-center gap-1"
                  >
                    <Check className="w-3 h-3 text-accent" />
                    {note}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Ingredients & Pairing Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-border/60">
            {item.ingredients && (
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary block mb-1.5">
                  Composition Spec
                </span>
                <ul className="text-xs text-secondary space-y-1 font-mono">
                  {item.ingredients.map((ing, idx) => (
                    <li key={idx}>• {ing}</li>
                  ))}
                </ul>
              </div>
            )}

            {item.pairing && (
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary block mb-1.5">
                  Optimal Pairing
                </span>
                <div className="flex items-center gap-2 text-xs text-secondary bg-surface-muted p-2.5 rounded-xl border border-border">
                  <Utensils className="w-4 h-4 text-accent shrink-0" />
                  <span className="font-semibold text-primary">{item.pairing}</span>
                </div>
              </div>
            )}
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <a
              href={whatsappOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block"
            >
              <button className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-black text-xs sm:text-sm text-canvas bg-accent hover:bg-accent-hover shadow-[0_0_24px_var(--color-cyber-glow)] active:scale-95 transition-all cursor-pointer min-h-[48px]">
                <MessageCircle className="w-4 h-4" />
                <span>ORDER VIA WHATSAPP (NAIK KELAS)</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
