"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Coffee, Compass, Feather } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

export function StorySection() {
  const pillars = [
    {
      icon: Coffee,
      title: "Biji Kopi Pilihan Petani Lokal",
      description:
        "Bekerja sama langsung dengan petani kopi lereng Gunung Sindoro dan Sumbing untuk menghadirkan biji kopi berkualitas tinggi melalui proses kurasi ketat.",
    },
    {
      icon: Feather,
      title: "Filosofi Nordic & Kenyamanan",
      description:
        "Desain interior mengutamakan kesederhanaan, pencahayaan matahari alami, material kayu hangat, dan kelegaan ruang untuk istirahat pikiran.",
    },
    {
      icon: Compass,
      title: "Kalibrasi Harian & Slow Brew",
      description:
        "Setiap pagi barista kami mengkalibrasi mesin espresso dan menguji profil seduhan manual brew untuk memastikan rasa terbaik di setiap tegukan.",
    },
  ];

  return (
    <section id="cerita" className="py-16 md:py-28 border-t border-border/70 scroll-mt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Cerita Di Balik Cangkir"
          title="Menghargai Waktu, Menghidupkan Kembali Kesederhanaan"
          subtitle="Kopi Sangkara lahir dari keinginan menghadirkan ruang teduh di tengah kesibukan harian. Tempat di mana aroma kopi segar berpadu dengan ketenangan."
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
                className="bg-surface rounded-3xl border-2 border-primary shadow-[4px_4px_0px_var(--color-shadow)] hover:shadow-[7px_7px_0px_var(--color-shadow)] transition-all p-6 sm:p-8 space-y-4 group cursor-default"
              >
                <div className="w-12 h-12 rounded-2xl bg-warm-yellow text-primary border-2 border-primary shadow-[2px_2px_0px_var(--color-shadow)] flex items-center justify-center group-hover:scale-110 group-active:scale-95 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-primary group-hover:text-accent transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-secondary leading-relaxed font-medium">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Highlight quote banner with scroll reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mt-12 md:mt-16 p-6 sm:p-8 md:p-12 rounded-3xl bg-surface border-2 border-primary shadow-[6px_6px_0px_var(--color-shadow)] flex flex-col md:flex-row items-center gap-6 sm:gap-8"
        >
          <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 shrink-0 rounded-2xl overflow-hidden border-2 border-primary shadow-[3px_3px_0px_var(--color-shadow)]">
            <Image
              src="https://images.unsplash.com/photo-1497636577773-f1231844b336?q=80&w=400&auto=format&fit=crop"
              alt="Seduhan Kopi Sangkara"
              fill
              sizes="128px"
              className="object-cover"
            />
          </div>
          <div className="space-y-2.5 text-center md:text-left">
            <p className="text-sm sm:text-base md:text-lg font-bold italic text-primary leading-relaxed">
              &ldquo;Secangkir kopi yang baik bukan sekadar pengusir kantuk, melainkan jeda berharga untuk menyelaraskan kembali pikiran dengan hari.&rdquo;
            </p>
            <span className="text-[11px] sm:text-xs uppercase tracking-widest font-black text-accent bg-accent-subtle px-3 py-1 rounded-full inline-block border border-accent/20">
              — Tim Barista Kopi Sangkara
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
