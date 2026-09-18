"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart, Eye } from "lucide-react";
import { MENU_ITEMS } from "@/data/cafe-data";
import { MenuCategory, MenuItem } from "@/types/cafe";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { MenuDetailModal } from "@/components/ui/menu-detail-modal";
import { cn } from "@/utils/cn";

export function MenuSection() {
  const [activeCategory, setActiveCategory] = React.useState<MenuCategory>("all");
  const [selectedItem, setSelectedItem] = React.useState<MenuItem | null>(null);

  const categories: { id: MenuCategory; label: string }[] = [
    { id: "all", label: "Semua Menu" },
    { id: "signature", label: "Signature" },
    { id: "espresso", label: "Espresso" },
    { id: "manual-brew", label: "Manual Brew" },
    { id: "non-coffee", label: "Tea & Others" },
    { id: "food", label: "Bites & Pastry" },
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
    <section id="menu" className="py-20 md:py-28 border-t border-border/70 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Katalog Pilihan"
          title="Menu Seduhan & Kudapan Unggulan"
          subtitle="Diracik dengan bahan pilihan segar, tanpa pewarna atau perisa sintesis. Klik menu untuk detail komposisi dan pemesanan."
          centered
        />

        {/* Category Pills Filter with Smooth Sliding Pill */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "relative px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer border border-transparent",
                  isActive
                    ? "text-surface"
                    : "text-secondary hover:text-primary hover:bg-surface-muted/60"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePillIndicator"
                    className="absolute inset-0 bg-primary rounded-full shadow-xs -z-10"
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
                onClick={() => setSelectedItem(item)}
                className="cursor-pointer"
              >
                <Card className="overflow-hidden hover:border-accent/50 hover:shadow-lg transition-all duration-300 flex flex-col group h-full">
                  {/* Image thumbnail */}
                  {item.image && (
                    <div className="relative aspect-16/10 overflow-hidden bg-surface-muted">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                        {item.isSignature && (
                          <Badge variant="accent" className="text-[10px] py-0.5 px-2">
                            <Sparkles className="w-3 h-3 mr-1" />
                            Signature
                          </Badge>
                        )}
                        {item.isPopular && !item.isSignature && (
                          <Badge variant="default" className="text-[10px] py-0.5 px-2">
                            <Heart className="w-3 h-3 mr-1 text-accent" />
                            Favorit
                          </Badge>
                        )}
                      </div>

                      {/* Subtle hover overlay hint */}
                      <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-primary/80 backdrop-blur-xs px-3.5 py-1.5 rounded-full shadow-sm">
                          <Eye className="w-3.5 h-3.5" />
                          <span>Lihat Detail</span>
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-1.5">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-bold text-base text-primary group-hover:text-accent transition-colors">
                          {item.name}
                        </h3>
                        <span className="font-extrabold text-sm text-primary shrink-0">
                          {formatIDR(item.price)}
                        </span>
                      </div>
                      <p className="text-xs text-secondary leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 pt-1">
                        {item.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-medium text-secondary bg-surface-muted px-2 py-0.5 rounded-md"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Card>
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
