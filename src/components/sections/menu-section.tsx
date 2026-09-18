"use client";

import * as React from "react";
import Image from "next/image";
import { Sparkles, Heart } from "lucide-react";
import { MENU_ITEMS } from "@/data/cafe-data";
import { MenuCategory, MenuItem } from "@/types/cafe";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/utils/cn";

export function MenuSection() {
  const [activeCategory, setActiveCategory] = React.useState<MenuCategory>("all");

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
          subtitle="Diracik dengan bahan pilihan segar, tanpa pewarna atau perisa sintesis."
          centered
        />

        {/* Category Pills Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer border",
                  isActive
                    ? "bg-primary text-surface border-primary shadow-xs"
                    : "bg-surface text-secondary border-border hover:border-accent hover:text-primary"
                )}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item: MenuItem) => (
            <Card
              key={item.id}
              className="overflow-hidden hover:border-accent/50 hover:shadow-md transition-all duration-300 flex flex-col group"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}
