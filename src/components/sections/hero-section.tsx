"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Sparkles, Clock, Coffee, Star } from "lucide-react";
import { CAFE_INFO } from "@/data/cafe-data";
import { PlayfulSticker } from "@/components/ui/playful-sticker";

export function HeroSection() {
  return (
    <section className="relative pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      {/* Playful Ambient Background Blobs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-warm-orange/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 -left-24 w-80 h-80 bg-warm-yellow/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Playful Stickers Row */}
            <div className="flex flex-wrap items-center gap-3">
              <PlayfulSticker variant="yellow" rotate="left">
                <Coffee className="w-3.5 h-3.5" />
                <span>BREWED FRESH DAILY</span>
              </PlayfulSticker>

              <PlayfulSticker variant="orange" rotate="right">
                <Sparkles className="w-3.5 h-3.5" />
                <span>LERENG SINDORO</span>
              </PlayfulSticker>

              <div className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-secondary bg-surface px-3 py-1.5 rounded-full border border-border">
                <Clock className="w-3.5 h-3.5 text-accent" />
                <span>Buka Hari Ini • 08.00 - 22.00</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary leading-[1.12]">
              Menyeduh Ketenangan,{" "}
              <span className="text-accent underline decoration-warm-yellow decoration-wavy decoration-4">
                Merayakan Rasa
              </span>
            </h1>

            <p className="text-base sm:text-lg text-secondary max-w-xl leading-relaxed font-medium">
              Sentuhan playful hangat dengan nuansa Nordic alami. Tempat bersantai, bekerja fokus, dan merayakan tiap tegukan kopi asli Temanggung.
            </p>

            {/* Action Buttons with Playful Hard Shadow */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#menu">
                <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-extrabold text-sm text-surface bg-accent border-2 border-primary shadow-[4px_4px_0px_var(--color-shadow)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[6px_6px_0px_var(--color-shadow)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_var(--color-shadow)] transition-all cursor-pointer">
                  <span>Jelajahi Menu Pilihan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </a>

              <a
                href={CAFE_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-extrabold text-sm text-primary bg-surface border-2 border-primary shadow-[4px_4px_0px_var(--color-shadow)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[6px_6px_0px_var(--color-shadow)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_var(--color-shadow)] transition-all cursor-pointer">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>Petunjuk Arah</span>
                </button>
              </a>

              <div className="flex items-center gap-1.5 text-xs font-bold text-primary pl-1">
                <div className="flex text-amber-500">
                  <Star className="w-4 h-4 fill-current text-warm-yellow stroke-primary stroke-1" />
                </div>
                <span>4.9/5 dari 300+ Pelanggan</span>
              </div>
            </div>

            {/* Quick Metrics Cards */}
            <div className="pt-6 border-t-2 border-border/80 grid grid-cols-3 gap-4 max-w-lg">
              <div className="p-3 bg-surface rounded-2xl border-2 border-border shadow-[3px_3px_0px_var(--color-shadow)]">
                <span className="block text-2xl font-black text-primary">100%</span>
                <span className="text-[11px] text-secondary font-bold">Single Origin Kopi</span>
              </div>
              <div className="p-3 bg-surface rounded-2xl border-2 border-border shadow-[3px_3px_0px_var(--color-shadow)]">
                <span className="block text-2xl font-black text-primary">100 Mbps</span>
                <span className="text-[11px] text-secondary font-bold">WiFi Super Cepat</span>
              </div>
              <div className="p-3 bg-surface rounded-2xl border-2 border-border shadow-[3px_3px_0px_var(--color-shadow)]">
                <span className="block text-2xl font-black text-primary">30+</span>
                <span className="text-[11px] text-secondary font-bold">Kudapan & Seduhan</span>
              </div>
            </div>
          </motion.div>

          {/* Visual Showcase with Playful Stamp */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Rotating Circular Badge Stamp */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute -top-7 -right-4 z-20 w-20 h-20 rounded-full bg-primary text-surface border-2 border-dashed border-warm-yellow flex items-center justify-center p-2 shadow-[4px_4px_0px_var(--color-shadow)]"
              >
                <span className="text-[9px] font-black text-center uppercase tracking-widest leading-tight text-warm-yellow">
                  ORIGINAL<br />BLEND<br />★ 2026 ★
                </span>
              </motion.div>

              {/* Main Photo Frame */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-primary bg-surface shadow-[8px_8px_0px_var(--color-shadow)] transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="aspect-4/5 relative">
                  <Image
                    src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1000&auto=format&fit=crop"
                    alt="Suasana Hangat Kafe Kopi Sangkara"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                </div>

                {/* Floating Highlight Card */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-surface border-2 border-primary shadow-[4px_4px_0px_var(--color-shadow)]">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="inline-block text-[10px] font-black uppercase tracking-wider text-accent bg-accent-subtle px-2 py-0.5 rounded-md border border-accent/20">
                        Signature Brew
                      </span>
                      <h3 className="text-base font-extrabold text-primary mt-1">
                        Sangkara Palm Latte
                      </h3>
                    </div>
                    <span className="text-xs font-black text-primary bg-warm-yellow px-3 py-1.5 rounded-full border-2 border-primary shadow-[2px_2px_0px_var(--color-shadow)]">
                      Rp 24.000
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
