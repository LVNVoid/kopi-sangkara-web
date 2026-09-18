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
            <Card className="overflow-hidden">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-accent">
                      <MapPin className="w-5 h-5" />
                      <span className="text-xs font-bold uppercase tracking-wider">
                        Alamat Lengkap
                      </span>
                    </div>

                    <button
                      onClick={handleCopyAddress}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary hover:text-accent bg-surface-muted px-2.5 py-1 rounded-full border border-border transition-colors cursor-pointer"
                      title="Salin Alamat"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-accent" />
                          <span className="text-accent">Tersalin!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Salin</span>
                        </>
                      )}
                    </button>
                  </div>

                  <h3 className="text-xl font-bold text-primary">
                    {CAFE_INFO.name}
                  </h3>
                  <p className="text-sm text-secondary leading-relaxed">
                    {CAFE_INFO.address}
                  </p>
                </div>

                <div className="pt-4 border-t border-border space-y-4">
                  <div className="flex items-center gap-2 text-accent">
                    <Clock className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Jadwal Seduh & Buka
                    </span>
                  </div>

                  <div className="space-y-3">
                    {OPERATING_HOURS.map((sched, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-surface-muted border border-border/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
                      >
                        <div>
                          <span className="font-bold text-sm text-primary block">
                            {sched.days}
                          </span>
                          <span className="text-xs text-secondary">{sched.note}</span>
                        </div>
                        <span className="text-sm font-extrabold text-accent shrink-0">
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
                    <Button variant="primary" size="md">
                      <span>Buka di Google Maps</span>
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>
                  <a
                    href={CAFE_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="md">
                      <MessageCircle className="w-4 h-4 text-accent" />
                      <span>Tanya Reservasi</span>
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Fasilitas Kafe */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-lg font-bold text-primary px-1">
              Fasilitas Kenyamanan Pengunjung
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CAFE_FACILITIES.map((fac) => {
                const IconComponent = facilityIcons[fac.iconName] || Coffee;
                return (
                  <Card key={fac.id} className="hover:border-accent/40 transition-colors">
                    <CardContent className="p-5 space-y-2">
                      <div className="w-9 h-9 rounded-xl bg-accent-subtle text-accent flex items-center justify-center">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-primary">
                        {fac.name}
                      </h4>
                      <p className="text-xs text-secondary leading-relaxed">
                        {fac.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
