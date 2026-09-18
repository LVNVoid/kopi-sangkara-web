import * as React from "react";
import Image from "next/image";
import { GALLERY_ITEMS } from "@/data/cafe-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { GalleryItem } from "@/types/cafe";

export function GallerySection() {
  return (
    <section id="suasana" className="py-20 md:py-28 border-t border-border/70 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Ruang & Suasana"
          title="Kenyamanan Menetap, Suasana Berbicara"
          subtitle="Didesain dengan jendela kaca lebar untuk menangkap hangatnya cahaya alami dan hembusan udara segar."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {GALLERY_ITEMS.map((item: GalleryItem) => (
            <div
              key={item.id}
              className="relative group rounded-3xl overflow-hidden border border-border bg-surface shadow-xs transition-all duration-300 hover:shadow-md"
            >
              <div className="aspect-16/10 relative overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[11px] uppercase tracking-widest font-bold text-accent-subtle bg-primary/40 px-2.5 py-0.5 rounded-full backdrop-blur-xs">
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
      </div>
    </section>
  );
}
