"use client";

import * as React from "react";
import Image from "next/image";
import { ZoomIn } from "lucide-react";
import { GALLERY_ITEMS } from "@/data/cafe-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { GalleryItem } from "@/types/cafe";
import { GalleryLightboxModal } from "@/components/ui/gallery-lightbox-modal";

export function GallerySection() {
  const [selectedGalleryItem, setSelectedGalleryItem] = React.useState<GalleryItem | null>(null);

  return (
    <section id="suasana" className="py-20 md:py-28 border-t border-border/70 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Ruang & Suasana"
          title="Kenyamanan Menetap, Suasana Berbicara"
          subtitle="Didesain dengan jendela kaca lebar untuk menangkap hangatnya cahaya alami dan hembusan udara segar. Klik foto untuk memperbesar."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {GALLERY_ITEMS.map((item: GalleryItem) => (
            <div
              key={item.id}
              onClick={() => setSelectedGalleryItem(item)}
              className="relative group rounded-3xl overflow-hidden border border-border bg-surface shadow-xs transition-all duration-300 hover:shadow-lg cursor-pointer"
            >
              <div className="aspect-16/10 relative overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Center zoom icon on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-primary/80 backdrop-blur-xs text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[11px] uppercase tracking-widest font-bold text-accent-subtle bg-primary/50 px-2.5 py-0.5 rounded-full backdrop-blur-xs border border-white/10">
                  {item.category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold pt-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-surface-muted/90 line-clamp-1 font-light">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Pop-up */}
        <GalleryLightboxModal
          item={selectedGalleryItem}
          onClose={() => setSelectedGalleryItem(null)}
        />
      </div>
    </section>
  );
}
