"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart, Eye } from "lucide-react";
import { MENU_ITEMS } from "@/data/cafe-data";
import { MenuCategory, MenuItem } from "@/types/cafe";
import { SectionHeading } from "@/components/ui/section-heading";
import { MenuDetailModal } from "@/components/ui/menu-detail-modal";
import { cn } from "@/utils/cn";

export function MenuSection() {
  const [activeCategory, setActiveCategory] = React.useState<MenuCategory>("all");
  const [selectedItem, setSelectedItem] = React.useState<MenuItem | null>(null);

  const categories: { id: MenuCategory; label: string }[] = [
    { id: "all", label: "ALL LOTS" },
    { id: "signature", label: "SIGNATURES" },
    { id: "espresso", label: "ESPRESSO LAB" },
    { id: "manual-brew", label: "FILTER & DRIP" },
    { id: "non-coffee", label: "BOTANICAL & MATCHA" },
    { id: "food", label: "BAKERY & BITES" },
  ];

  const filteredItems = React.useMemo(() => {
    if (activeCategory === "all") return MENU_ITEMS;
    return MENU_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const formatIDR = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section id="menu" className="py-16 md:py-28 border-t border-border scroll-mt-16 bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="// 02. CURATED EXTRACTION CATALOG"
          title="Katalog Seduhan & Kudapan Naik Kelas"
          subtitle="Setiap menu dikalibrasi rasio bahan dan ekstraksinya. Ketuk kartu untuk tasting notes lengkap dan pesan instan via WhatsApp."
          centered
        />

        {/* Category Filter Pills - Horizontally Scrollable & Touch Friendly */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center scrollbar-none font-mono">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "relative px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer border shrink-0 min-h-[44px] flex items-center justify-center select-none active:scale-95 tracking-wider",
                  isActive
                    ? "text-canvas border-accent"
                    : "text-secondary hover:text-primary hover:bg-surface border-border"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePillIndicator"
                    className="absolute inset-0 bg-accent rounded-full shadow-[0_0_15px_var(--color-cyber-glow)] -z-10"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Animated Menu Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item: MenuItem) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.25 }}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedItem(item)}
                className="cursor-pointer group"
              >
                <div className="bg-surface border border-border group-hover:border-accent/50 rounded-3xl transition-all flex flex-col h-full overflow-hidden shadow-lg group-hover:shadow-[0_0_24px_var(--color-cyber-glow)]">
                  {/* Image thumbnail */}
                  {item.image && (
                    <div className="relative aspect-16/10 overflow-hidden bg-surface-muted border-b border-border">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />

                      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                        {item.isSignature && (
                          <span className="text-[10px] font-mono font-bold py-0.5 px-2.5 rounded-full bg-accent text-canvas flex items-center gap-1 shadow-[0_0_10px_var(--color-cyber-glow)]">
                            <Sparkles className="w-3 h-3" />
                            SIGNATURE
                          </span>
                        )}
                        {item.isPopular && !item.isSignature && (
                          <span className="text-[10px] font-mono font-bold py-0.5 px-2.5 rounded-full bg-surface/90 backdrop-blur-md text-primary border border-border flex items-center gap-1">
                            <Heart className="w-3 h-3 text-accent" />
                            FAVORITE
                          </span>
                        )}
                      </div>

                      {/* Tap / Hover Overlay */}
                      <div className="absolute inset-0 bg-canvas/60 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                        <span className="inline-flex items-center gap-2 text-xs font-mono font-black text-canvas bg-accent px-4 py-2 rounded-full shadow-[0_0_16px_var(--color-cyber-glow)]">
                          <Eye className="w-3.5 h-3.5" />
                          <span>VIEW TASTING NOTES</span>
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-1.5">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-extrabold text-base text-primary group-hover:text-accent transition-colors">
                          {item.name}
                        </h3>
                        <span className="font-mono font-black text-xs text-accent bg-accent-subtle px-2.5 py-1 rounded-full border border-accent/30 shrink-0">
                          {formatIDR(item.price)}
                        </span>
                      </div>
                      <p className="text-xs text-secondary leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    {item.tastingNotes && item.tastingNotes.length > 0 && (
                      <div className="pt-2 border-t border-border/50">
                        <div className="flex flex-wrap items-center justify-between gap-1.5">
                          <div className="flex flex-wrap gap-1">
                            {item.tastingNotes.slice(0, 2).map((note, idx) => (
                              <span
                                key={idx}
                                className="text-[10px] font-mono text-secondary bg-surface-muted border border-border/60 px-2 py-0.5 rounded"
                              >
                                {note}
                              </span>
                            ))}
                          </div>
                          <span className="text-[10px] font-mono font-bold text-accent group-hover:underline">
                            Details →
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Detail Pop-up */}
        <MenuDetailModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      </div>
    </section>
  );
}
