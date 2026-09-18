"use client";

import * as React from "react";
import Image from "next/image";
import { X, Sparkles, Heart, Utensils, MessageCircle, Check } from "lucide-react";
import { MenuItem } from "@/types/cafe";
import { CAFE_INFO } from "@/data/cafe-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
        className="fixed inset-0 bg-primary/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg bg-surface rounded-3xl border-2 border-primary shadow-[8px_8px_0px_var(--color-shadow)] overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-surface border-2 border-primary text-primary hover:bg-warm-yellow flex items-center justify-center shadow-[2px_2px_0px_var(--color-shadow)] transition-all cursor-pointer"
          aria-label="Tutup"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Thumbnail Hero */}
        {item.image && (
          <div className="relative aspect-16/9 w-full bg-surface-muted overflow-hidden border-b-2 border-primary">
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="(max-width: 640px) 100vw, 512px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 flex gap-1.5">
              {item.isSignature && (
                <span className="text-xs font-black px-3 py-1 rounded-full bg-warm-yellow text-primary border-2 border-primary shadow-[2px_2px_0px_var(--color-shadow)] flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-accent" />
                  Signature
                </span>
              )}
              {item.isPopular && !item.isSignature && (
                <span className="text-xs font-black px-3 py-1 rounded-full bg-surface text-primary border-2 border-primary shadow-[2px_2px_0px_var(--color-shadow)] flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 text-accent" />
                  Paling Favorit
                </span>
              )}
            </div>
          </div>
        )}

        {/* Details Content */}
        <div className="p-6 space-y-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary">
                {item.name}
              </h3>
              <p className="text-xs text-secondary font-medium capitalize mt-0.5">
                Kategori: {item.category.replace("-", " ")}
              </p>
            </div>
            <span className="text-lg sm:text-xl font-extrabold text-accent bg-accent-subtle/60 px-3 py-1 rounded-full border border-accent/20 shrink-0">
              {formatIDR(item.price)}
            </span>
          </div>

          <p className="text-sm text-secondary leading-relaxed">
            {item.description}
          </p>

          {/* Tasting Notes */}
          {item.tastingNotes && item.tastingNotes.length > 0 && (
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-primary block">
                Tasting Notes & Profil Rasa
              </span>
              <div className="flex flex-wrap gap-1.5">
                {item.tastingNotes.map((note, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium text-primary bg-surface-muted border border-border px-3 py-1 rounded-full flex items-center gap-1"
                  >
                    <Check className="w-3 h-3 text-accent" />
                    {note}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Ingredients & Pairing Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-border">
            {item.ingredients && (
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1.5">
                  Bahan Utama
                </span>
                <ul className="text-xs text-secondary space-y-1">
                  {item.ingredients.map((ing, idx) => (
                    <li key={idx}>• {ing}</li>
                  ))}
                </ul>
              </div>
            )}

            {item.pairing && (
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1.5">
                  Saran Pairing
                </span>
                <div className="flex items-center gap-1.5 text-xs text-secondary bg-surface-muted/80 p-2 rounded-xl border border-border">
                  <Utensils className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span className="font-medium text-primary">{item.pairing}</span>
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
              <button className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-extrabold text-sm text-surface bg-accent border-2 border-primary shadow-[4px_4px_0px_var(--color-shadow)] hover:shadow-[6px_6px_0px_var(--color-shadow)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_var(--color-shadow)] transition-all cursor-pointer">
                <MessageCircle className="w-4 h-4" />
                <span>Pesan / Tanya via WhatsApp</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
