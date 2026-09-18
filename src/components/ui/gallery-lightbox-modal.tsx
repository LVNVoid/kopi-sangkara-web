"use client";

import * as React from "react";
import Image from "next/image";
import { X, Sparkles } from "lucide-react";
import { GalleryItem } from "@/types/cafe";

interface GalleryLightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export function GalleryLightboxModal({ item, onClose }: GalleryLightboxModalProps) {
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Lightbox Dialog */}
      <div className="relative w-full max-w-4xl bg-surface rounded-3xl border border-accent/40 shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-surface/90 border border-border text-secondary hover:border-accent hover:text-accent flex items-center justify-center transition-all cursor-pointer shadow-lg"
          aria-label="Tutup Preview"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative aspect-16/10 w-full bg-surface-muted overflow-hidden">
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-surface border-t border-border">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono">
              <span className="text-[10px] font-bold uppercase tracking-widest text-accent bg-accent-subtle px-2.5 py-0.5 rounded border border-accent/30 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                // {item.category}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-primary">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-secondary mt-1">
              {item.subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
