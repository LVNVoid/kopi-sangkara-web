"use client";

import * as React from "react";
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
} from "lucide-react";
import { CAFE_INFO, OPERATING_HOURS, CAFE_FACILITIES } from "@/data/cafe-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const facilityIcons = {
  Wifi,
  Zap,
  Coffee,
  Armchair,
  HeartHandshake,
  Sun,
  Clock,
  ShieldCheck: Clock,
};

export function LocationSection() {
  const [copied, setCopied] = React.useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CAFE_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="lokasi" className="py-20 md:py-28 border-t border-border/70 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Kunjungi Kafe"
          title="Temukan Kami & Rasakan Sendiri"
          subtitle="Berlokasi strategis di pusat kota yang tenang dan ramah untuk santai maupun bekerja."
          centered
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
          {/* Alamat & Jam Buka */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-surface rounded-3xl border-2 border-primary shadow-[6px_6px_0px_var(--color-shadow)] p-8 space-y-6 overflow-hidden">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-accent">
                      <MapPin className="w-5 h-5" />
                      <span className="text-xs font-black uppercase tracking-wider">
                        Alamat Lengkap
                      </span>
                    </div>

                    <button
                      onClick={handleCopyAddress}
                      className="inline-flex items-center gap-1.5 text-xs font-black text-primary bg-warm-yellow px-3 py-1 rounded-full border-2 border-primary shadow-[2px_2px_0px_var(--color-shadow)] transition-all cursor-pointer"
                      title="Salin Alamat"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-accent" />
                          <span>Tersalin!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Salin Alamat</span>
                        </>
                      )}
                    </button>
                  </div>

                  <h3 className="text-2xl font-black text-primary">
                    {CAFE_INFO.name}
                  </h3>
                  <p className="text-sm text-secondary leading-relaxed font-medium">
                    {CAFE_INFO.address}
                  </p>
                </div>

                <div className="pt-4 border-t-2 border-border space-y-4">
                  <div className="flex items-center gap-2 text-accent">
                    <Clock className="w-5 h-5" />
                    <span className="text-xs font-black uppercase tracking-wider">
                      Jadwal Seduh & Buka
                    </span>
                  </div>

                  <div className="space-y-3">
                    {OPERATING_HOURS.map((sched, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-surface-muted border-2 border-primary shadow-[3px_3px_0px_var(--color-shadow)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
                      >
                        <div>
                          <span className="font-extrabold text-sm text-primary block">
                            {sched.days}
                          </span>
                          <span className="text-xs text-secondary font-medium">{sched.note}</span>
                        </div>
                        <span className="text-xs font-black text-primary bg-warm-yellow px-2.5 py-1 rounded-full border border-primary shrink-0 self-start sm:self-auto">
                          {sched.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-3">
                  <a
                    href={CAFE_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-extrabold text-xs text-surface bg-accent border-2 border-primary shadow-[3px_3px_0px_var(--color-shadow)] hover:shadow-[5px_5px_0px_var(--color-shadow)] transition-all cursor-pointer">
                      <span>Buka di Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </a>
                  <a
                    href={CAFE_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-extrabold text-xs text-primary bg-surface border-2 border-primary shadow-[3px_3px_0px_var(--color-shadow)] hover:shadow-[5px_5px_0px_var(--color-shadow)] transition-all cursor-pointer">
                      <MessageCircle className="w-3.5 h-3.5 text-accent" />
                      <span>Tanya Reservasi</span>
                    </button>
                  </a>
                </div>
            </div>
          </div>

          {/* Fasilitas Kafe */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-lg font-black text-primary px-1">
              Fasilitas Kenyamanan Pengunjung
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CAFE_FACILITIES.map((fac) => {
                const IconComponent = facilityIcons[fac.iconName] || Coffee;
                return (
                  <div
                    key={fac.id}
                    className="bg-surface rounded-3xl border-2 border-primary shadow-[4px_4px_0px_var(--color-shadow)] p-5 space-y-2 hover:-translate-y-0.5 transition-transform"
                  >
                    <div className="w-9 h-9 rounded-xl bg-warm-yellow text-primary border-2 border-primary shadow-[2px_2px_0px_var(--color-shadow)] flex items-center justify-center">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-extrabold text-primary">
                      {fac.name}
                    </h4>
                    <p className="text-xs text-secondary leading-relaxed font-medium">
                      {fac.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
