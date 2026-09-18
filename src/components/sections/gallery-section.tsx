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
    <section id="suasana" className="py-16 md:py-28 border-t border-border scroll-mt-16 overflow-hidden bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="// 03. NOCTURNAL AMBIENCE & LAB"
          title="Fokus Menetap, Suasana Berbicara"
          subtitle="Didesain dengan pencahayaan hangat temaram (OLED-friendly) untuk menunjang deep work, kolaborasi santai, dan eksplorasi seduhan manual brew."
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
              className="relative group rounded-3xl overflow-hidden border border-border bg-surface transition-all duration-300 hover:border-accent/60 shadow-lg hover:shadow-[0_0_24px_var(--color-cyber-glow)] cursor-pointer"
            >
              <div className="aspect-16/10 relative overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Visible Tap / Zoom Indicator for Mobile and Desktop */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="w-10 h-10 rounded-full bg-surface/90 border border-border text-primary flex items-center justify-center group-hover:border-accent group-hover:text-accent group-hover:shadow-[0_0_12px_var(--color-cyber-glow)] transition-all">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 text-primary space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-accent bg-accent-subtle px-2.5 py-0.5 rounded border border-accent/30 inline-block">
                  // {item.category}
                </span>
                <h3 className="text-base sm:text-lg font-black pt-1">
                  {item.title}
                </h3>
                <p className="text-xs text-secondary line-clamp-1 font-normal">
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
