"use client";

import * as React from "react";
import Image from "next/image";
import { X, Sparkles } from "lucide-react";
import { GalleryItem } from "@/types/cafe";
import { Badge } from "@/components/ui/badge";

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
        className="fixed inset-0 bg-primary/70 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Lightbox Dialog */}
      <div className="relative w-full max-w-4xl bg-surface rounded-3xl border border-border shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-surface/90 border border-border text-secondary hover:text-primary hover:bg-surface flex items-center justify-center transition-all cursor-pointer"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative aspect-16/10 w-full bg-primary overflow-hidden">
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-surface">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="accent" className="text-xs uppercase">
                <Sparkles className="w-3 h-3 mr-1" />
                {item.category}
              </Badge>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-primary">
              {item.title}
            </h3>
            <p className="text-sm text-secondary mt-1">
              {item.subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
