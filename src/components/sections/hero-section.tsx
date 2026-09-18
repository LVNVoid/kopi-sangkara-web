import * as React from "react";
import Image from "next/image";
import { ArrowRight, MapPin, Sparkles, Clock } from "lucide-react";
import { CAFE_INFO } from "@/data/cafe-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2">
              <Badge variant="accent" className="px-3 py-1 text-xs">
                <Sparkles className="w-3.5 h-3.5 mr-1" />
                <span>Specialty Coffee & Slow Living</span>
              </Badge>
              <div className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-secondary">
                <Clock className="w-3.5 h-3.5 text-accent" />
                <span>Buka Hari Ini • 08.00 - 22.00</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary leading-[1.15]">
              Menyeduh Ketenangan,{" "}
              <span className="text-accent underline decoration-accent/30 decoration-wavy decoration-2">
                Merayakan Rasa
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-secondary max-w-xl leading-relaxed">
              Ruang kafe berkonsep Nordic Minimalist di lereng Temanggung. Nikmati seduhan kopi pilihan, udara sejuk, dan kenyamanan sudut kerja dengan pencahayaan alami.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#menu">
                <Button variant="primary" size="lg">
                  <span>Lihat Menu Pilihan</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>

              <a
                href={CAFE_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>Petunjuk Arah</span>
                </Button>
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="pt-8 border-t border-border/80 grid grid-cols-3 gap-6 max-w-md">
              <div>
                <span className="block text-2xl font-bold text-primary">100%</span>
                <span className="text-xs text-secondary font-medium">Biji Kopi Asli Lokal</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-primary">100 Mbps</span>
                <span className="text-xs text-secondary font-medium">Koneksi WiFi Cepat</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-primary">30+</span>
                <span className="text-xs text-secondary font-medium">Menu & Pastry Hangat</span>
              </div>
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Background ambient halo */}
              <div className="absolute -inset-2 rounded-3xl bg-accent/10 blur-xl opacity-70 pointer-events-none" />

              <div className="relative rounded-3xl overflow-hidden border border-border bg-surface shadow-md">
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

                {/* Overlay Floating Card */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-surface/95 backdrop-blur-md border border-border shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                        Signature Brew
                      </p>
                      <h3 className="text-base font-bold text-primary">
                        Sangkara Palm Latte
                      </h3>
                    </div>
                    <span className="text-sm font-extrabold text-primary bg-surface-muted px-2.5 py-1 rounded-full border border-border">
                      Rp 24.000
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
