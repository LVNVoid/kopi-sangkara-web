import * as React from "react";
import Image from "next/image";
import { Coffee, Compass, Feather } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";

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
    <section id="cerita" className="py-20 md:py-28 border-t border-border/70 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Cerita Di Balik Cangkir"
          title="Menghargai Waktu, Menghidupkan Kembali Kesederhanaan"
          subtitle="Kopi Sangkara lahir dari keinginan menghadirkan ruang teduh di tengah kesibukan harian. Tempat di mana aroma kopi segar berpadu dengan ketenangan."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-surface rounded-3xl border-2 border-primary shadow-[4px_4px_0px_var(--color-shadow)] hover:shadow-[7px_7px_0px_var(--color-shadow)] hover:-translate-y-1 transition-all p-8 space-y-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-warm-yellow text-primary border-2 border-primary shadow-[2px_2px_0px_var(--color-shadow)] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-primary group-hover:text-accent transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-secondary leading-relaxed font-medium">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Highlight quote banner */}
        <div className="mt-16 p-8 md:p-12 rounded-3xl bg-surface border-2 border-primary shadow-[6px_6px_0px_var(--color-shadow)] flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 shrink-0 rounded-2xl overflow-hidden border-2 border-primary shadow-[3px_3px_0px_var(--color-shadow)]">
            <Image
              src="https://images.unsplash.com/photo-1497636577773-f1231844b336?q=80&w=400&auto=format&fit=crop"
              alt="Seduhan Kopi Sangkara"
              fill
              sizes="128px"
              className="object-cover"
            />
          </div>
          <div className="space-y-2 text-center md:text-left">
            <p className="text-base sm:text-lg font-bold italic text-primary">
              &ldquo;Secangkir kopi yang baik bukan sekadar pengusir kantuk, melainkan jeda berharga untuk menyelaraskan kembali pikiran dengan hari.&rdquo;
            </p>
            <p className="text-xs uppercase tracking-widest font-black text-accent bg-accent-subtle px-3 py-1 rounded-full inline-block border border-accent/20">
              — Tim Barista Kopi Sangkara
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
