"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  ExternalLink,
  Wifi,
  Zap,
  Coffee,
  Armchair,
  HeartHandshake,
  Sun,
  MessageCircle,
  Copy,
  Check,
  Navigation,
} from "lucide-react";
import { CAFE_INFO, OPERATING_HOURS, CAFE_FACILITIES } from "@/data/cafe-data";
import { SectionHeading } from "@/components/ui/section-heading";

const facilityIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Wifi,
  Zap,
  Coffee,
  Armchair,
  HeartHandshake,
  Sun,
  Clock,
};

export function LocationSection() {
  const [copied, setCopied] = React.useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CAFE_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="lokasi" className="py-16 md:py-28 border-t border-border scroll-mt-16 overflow-hidden bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="// 04. PHYSICAL COORDINATES & SCHEDULE"
          title="Lokasi Roastery & Jam Operasional"
          subtitle="Berlokasi di pusat kota Temanggung dengan atmosfer temaram yang tenang dan bersahabat untuk kerja fokus maupun kumpul akhir pekan."
          centered
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mt-10 md:mt-12">
          {/* Address & Hours Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="bg-surface rounded-3xl border border-border p-6 sm:p-8 space-y-6 overflow-hidden shadow-xl">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-accent font-mono text-xs font-bold">
                    <Navigation className="w-4 h-4" />
                    <span className="tracking-widest">// COORDINATES: {CAFE_INFO.coordinates}</span>
                  </div>

                  {/* Copy Address Button */}
                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-accent bg-accent-subtle px-3.5 py-1.5 rounded-full border border-accent/30 hover:border-accent active:scale-95 transition-all cursor-pointer min-h-[44px]"
                    title="Salin Alamat Lengkap"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>COPIED TO CLIPBOARD</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>COPY ADDRESS</span>
                      </>
                    )}
                  </button>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-primary">
                  {CAFE_INFO.name}
                </h3>
                <p className="text-sm text-secondary leading-relaxed font-normal">
                  {CAFE_INFO.address}
                </p>
              </div>

              <div className="pt-4 border-t border-border/80 space-y-4">
                <div className="flex items-center gap-2 text-accent font-mono text-xs font-bold">
                  <Clock className="w-4 h-4" />
                  <span className="tracking-widest">// BREW & ROAST SCHEDULE</span>
                </div>

                <div className="space-y-3">
                  {OPERATING_HOURS.map((sched, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-surface-muted border border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
                    >
                      <div>
                        <span className="font-mono font-bold text-sm text-primary block">
                          {sched.days}
                        </span>
                        <span className="text-xs text-secondary font-normal">{sched.note}</span>
                      </div>
                      <span className="text-xs font-mono font-black text-accent bg-accent-subtle px-3 py-1 rounded-full border border-accent/30 shrink-0 self-start sm:self-auto">
                        {sched.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3 font-mono">
                <a
                  href={CAFE_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-bold text-xs text-canvas bg-accent hover:bg-accent-hover shadow-[0_0_20px_var(--color-cyber-glow)] active:scale-95 transition-all cursor-pointer min-h-[48px]">
                    <MapPin className="w-4 h-4" />
                    <span>OPEN IN GOOGLE MAPS</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </a>

                <a
                  href={CAFE_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-bold text-xs text-primary bg-surface border border-border hover:border-accent hover:text-accent active:scale-95 transition-all cursor-pointer min-h-[48px]">
                    <MessageCircle className="w-4 h-4 text-accent" />
                    <span>RESERVATION / INQUIRY</span>
                  </button>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Facilities Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-6 space-y-4"
          >
            <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-secondary px-1">
              // LAB WORKSPACE & GUEST AMENITIES
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {CAFE_FACILITIES.map((fac) => {
                const IconComponent = facilityIcons[fac.iconName] || Coffee;
                return (
                  <div
                    key={fac.id}
                    className="bg-surface rounded-3xl border border-border hover:border-accent/40 p-5 space-y-2.5 transition-all hover:shadow-[0_0_18px_var(--color-cyber-glow)] active:scale-98"
                  >
                    <div className="w-9 h-9 rounded-xl bg-surface-muted border border-border flex items-center justify-center text-accent">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-black text-primary">
                      {fac.name}
                    </h4>
                    <p className="text-xs text-secondary leading-relaxed font-normal">
                      {fac.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
