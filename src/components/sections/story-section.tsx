"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Flame, Compass, Cpu } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

export function StorySection() {
  const pillars = [
    {
      code: "01 // EXTRACTION",
      icon: Flame,
      title: "Precision Extraction Lab",
      description:
        "Every batch is calibrated at 93.5°C with digital brew scales and refractometer TDS metrics. Memastikan setiap tegukan mencapai sweet spot yang konsisten.",
    },
    {
      code: "02 // ORIGIN",
      icon: Compass,
      title: "Elevated Volcanic Soil",
      description:
        "Micro-lot Arabica dipanen dari ketinggian 1800m lereng Gunung Sindoro. Proses kurasi ketat yang membawa cita rasa kopi lokal naik kelas di pentas dunia.",
    },
    {
      code: "03 // ENVIRONMENT",
      icon: Cpu,
      title: "Nocturnal Deep-Work Flow",
      description:
        "Suasana temaram OLED yang menenangkan pikiran. Kursi ergonomis, stopkontak pribadi di tiap kursi, dan jaringan WiFi 100 Mbps simetris.",
    },
  ];

  return (
    <section id="cerita" className="py-16 md:py-28 border-t border-border scroll-mt-16 overflow-hidden bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="// 01. PHILOSOPHY & CRAFT"
          title="Bukan Sekadar Kedai. Ini Ruang Naik Kelas."
          subtitle="Menggabungkan sains seduh kopi presisi dengan ruang kerja temaram yang nyaman. Tempat di mana ide-ide besar dieksekusi dengan secangkir kopi terbaik."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-10 md:mt-12">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.12, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="bg-surface rounded-3xl border border-border hover:border-accent/50 p-6 sm:p-8 space-y-4 group transition-all shadow-lg hover:shadow-[0_0_24px_var(--color-cyber-glow)] cursor-default"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-accent bg-accent-subtle px-2 py-0.5 rounded border border-accent/20">
                    {pillar.code}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-surface-muted border border-border flex items-center justify-center text-primary group-hover:text-accent group-hover:border-accent/40 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-black text-primary group-hover:text-accent transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-secondary leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Highlight quote banner with cyber aesthetic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mt-12 md:mt-16 p-6 sm:p-8 md:p-12 rounded-3xl bg-surface border border-accent/30 shadow-[0_0_30px_rgba(0,0,0,0.8)] flex flex-col md:flex-row items-center gap-6 sm:gap-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 shrink-0 rounded-2xl overflow-hidden border border-accent/40 shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1497636577773-f1231844b336?q=80&w=400&auto=format&fit=crop"
              alt="Seduhan Kopi Sangkara Naik Kelas"
              fill
              sizes="128px"
              className="object-cover"
            />
          </div>
          <div className="space-y-2.5 text-center md:text-left relative z-10">
            <p className="text-sm sm:text-base md:text-lg font-bold text-primary leading-relaxed">
              &ldquo;Good coffee fuels your caffeine need. Great coffee shifts your perspective. Kopi Sangkara hadir agar setiap tegukan membawa standarmu naik kelas.&rdquo;
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 font-mono">
              <span className="text-[10px] sm:text-xs uppercase tracking-widest font-black text-accent bg-accent-subtle px-3 py-1 rounded-full inline-block border border-accent/30">
                — BARISTA & ROASTERY TEAM • NAIK KELAS
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
