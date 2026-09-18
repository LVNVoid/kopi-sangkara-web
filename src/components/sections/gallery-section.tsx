"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ZoomIn } from "lucide-react";
import { GALLERY_ITEMS } from "@/data/cafe-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { GalleryItem } from "@/types/cafe";
import { GalleryLightboxModal } from "@/components/ui/gallery-lightbox-modal";

export function GallerySection() {
  const [selectedGalleryItem, setSelectedGalleryItem] = React.useState<GalleryItem | null>(null);

  return (
    <section id="suasana" className="py-16 md:py-28 border-t border-border/70 scroll-mt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Ruang & Suasana"
          title="Kenyamanan Menetap, Suasana Berbicara"
          subtitle="Didesain dengan jendela kaca lebar untuk menangkap hangatnya cahaya alami dan hembusan udara segar. Ketuk foto untuk memperbesar."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-10 md:mt-12">
          {GALLERY_ITEMS.map((item: GalleryItem, idx: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedGalleryItem(item)}
              className="relative group rounded-3xl overflow-hidden border-2 border-primary bg-surface shadow-[6px_6px_0px_var(--color-shadow)] transition-all duration-300 hover:shadow-[8px_8px_0px_var(--color-shadow)] active:shadow-[2px_2px_0px_var(--color-shadow)] cursor-pointer"
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

                {/* Visible Tap / Zoom Indicator for Mobile and Desktop */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="w-9 h-9 rounded-full bg-warm-yellow border-2 border-primary text-primary flex items-center justify-center shadow-[2px_2px_0px_var(--color-shadow)] group-hover:scale-110 group-active:scale-95 transition-transform">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 text-surface space-y-1">
                <span className="text-[10px] sm:text-[11px] uppercase tracking-widest font-black text-primary bg-warm-yellow px-3 py-1 rounded-full border border-primary shadow-[2px_2px_0px_var(--color-shadow)] inline-block">
                  {item.category}
                </span>
                <h3 className="text-base sm:text-xl font-extrabold pt-1 sm:pt-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-surface-muted/90 line-clamp-1 font-medium">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
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
