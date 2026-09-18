"use client";

import * as React from "react";
import Image from "next/image";
import gsap from "gsap";
import { ArrowRight, MapPin, Clock, Coffee, Star, Sparkles } from "lucide-react";
import { CAFE_INFO } from "@/data/cafe-data";
import { PlayfulSticker } from "@/components/ui/playful-sticker";

declare global {
  interface Window {
    __timelines?: gsap.core.Timeline[];
  }
}

export function HeroSection() {
  const containerRef = React.useRef<HTMLElement>(null);
  const markerRef = React.useRef<HTMLSpanElement>(null);
  const glowRef = React.useRef<HTMLDivElement>(null);
  const stampRef = React.useRef<HTMLDivElement>(null);

  const count1Ref = React.useRef<HTMLSpanElement>(null);
  const count2Ref = React.useRef<HTMLSpanElement>(null);
  const count3Ref = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    if (!containerRef.current) return;

    // Single deterministic GSAP Timeline adhering to HyperFrames animation contract
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (typeof window !== "undefined") {
      window.__timelines = window.__timelines || [];
      window.__timelines.push(tl);
    }

    // 1. HyperFrames spring-pop-entrance for stickers
    tl.fromTo(
      ".hf-pop-sticker",
      { scale: 0, opacity: 0, y: 16 },
      { scale: 1, opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power3.out" },
      0.1
    );

    // 2. HyperFrames css-marker-patterns (Highlight Mode sweep behind "Merayakan Rasa")
    if (markerRef.current) {
      tl.to(
        markerRef.current,
        { scaleX: 1, duration: 0.65, ease: "power2.out" },
        0.35
      );
    }

    // 3. HyperFrames ambient-glow-bloom behind showcase card
    if (glowRef.current) {
      tl.fromTo(
        glowRef.current,
        { opacity: 0, scale: 0.85 },
        { opacity: 0.5, scale: 1, duration: 0.8, ease: "power2.out" },
        0.2
      );

      // Bounded idle breathe with sine phase
      const phase = { p: 0 };
      tl.to(
        phase,
        {
          p: Math.PI * 2 * 3,
          duration: 9,
          ease: "none",
          onUpdate: () => {
            if (!glowRef.current) return;
            const s = Math.sin(phase.p);
            glowRef.current.style.opacity = String(0.45 + s * 0.08);
            glowRef.current.style.transform = `scale(${1 + s * 0.04})`;
          },
        },
        1.0
      );
    }

    // 4. HyperFrames counting-dynamic-scale for metric cards
    const state1 = { val: 0 };
    const state2 = { val: 0 };
    const state3 = { val: 0 };

    // Metric 1: 100% Single Origin
    if (count1Ref.current) {
      tl.to(
        state1,
        {
          val: 100,
          duration: 1.2,
          ease: "power2.out",
          onUpdate: () => {
            if (count1Ref.current) count1Ref.current.textContent = String(Math.round(state1.val));
          },
        },
        0.5
      );
      tl.fromTo(
        count1Ref.current,
        { scale: 0.85 },
        { scale: 1, duration: 1.2, ease: "power2.out" },
        0.5
      );
    }

    // Metric 2: 100 Mbps WiFi
    if (count2Ref.current) {
      tl.to(
        state2,
        {
          val: 100,
          duration: 1.2,
          ease: "power2.out",
          onUpdate: () => {
            if (count2Ref.current) count2Ref.current.textContent = String(Math.round(state2.val));
          },
        },
        0.6
      );
      tl.fromTo(
        count2Ref.current,
        { scale: 0.85 },
        { scale: 1, duration: 1.2, ease: "power2.out" },
        0.6
      );
    }

    // Metric 3: 30+ Menu
    if (count3Ref.current) {
      tl.to(
        state3,
        {
          val: 30,
          duration: 1.2,
          ease: "power2.out",
          onUpdate: () => {
            if (count3Ref.current) count3Ref.current.textContent = String(Math.round(state3.val));
          },
        },
        0.7
      );
      tl.fromTo(
        count3Ref.current,
        { scale: 0.85 },
        { scale: 1, duration: 1.2, ease: "power2.out" },
        0.7
      );
    }

    // Suffixes slide in cleanly after numbers land
    tl.fromTo(
      ".hf-counter-suffix",
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.08, ease: "power3.out" },
      1.1
    );

    // Continuous circular stamp rotation
    if (stampRef.current) {
      gsap.to(stampRef.current, {
        rotation: 360,
        duration: 22,
        ease: "none",
        repeat: -1,
      });
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      {/* Playful Ambient Background Blobs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-warm-orange/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 -left-24 w-80 h-80 bg-warm-yellow/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Playful Stickers Row with spring-pop-entrance */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="hf-pop-sticker">
                <PlayfulSticker variant="yellow" rotate="left">
                  <Coffee className="w-3.5 h-3.5" />
                  <span>BREWED FRESH DAILY</span>
                </PlayfulSticker>
              </div>

              <div className="hf-pop-sticker">
                <PlayfulSticker variant="orange" rotate="right">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>LERENG SINDORO</span>
                </PlayfulSticker>
              </div>

              <div className="hf-pop-sticker hidden sm:flex items-center gap-1.5 text-xs font-bold text-secondary bg-surface px-3 py-1.5 rounded-full border border-border">
                <Clock className="w-3.5 h-3.5 text-accent" />
                <span>Buka Hari Ini • 08.00 - 22.00</span>
              </div>
            </div>

            {/* Headline with HyperFrames Marker Highlight Sweep */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary leading-[1.12]">
              Menyeduh Ketenangan,{" "}
              <span className="mh-highlight-wrap">
                <span ref={markerRef} className="mh-highlight-bar" />
                <span className="mh-highlight-text text-accent">
                  Merayakan Rasa
                </span>
              </span>
            </h1>

            <p className="text-base sm:text-lg text-secondary max-w-xl leading-relaxed font-medium">
              Sentuhan playful hangat dengan nuansa Nordic alami. Tempat bersantai, bekerja fokus, dan merayakan tiap tegukan kopi asli Temanggung.
            </p>

            {/* Action Buttons */}
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

            {/* Quick Metrics with HyperFrames counting-dynamic-scale */}
            <div className="pt-6 border-t-2 border-border/80 grid grid-cols-3 gap-4 max-w-lg">
              <div className="p-3 bg-surface rounded-2xl border-2 border-primary shadow-[3px_3px_0px_var(--color-shadow)]">
                <div className="flex items-baseline">
                  <span
                    ref={count1Ref}
                    className="text-2xl font-black text-primary tabular-nums inline-block"
                  >
                    0
                  </span>
                  <span className="hf-counter-suffix text-2xl font-black text-accent ml-0.5">
                    %
                  </span>
                </div>
                <span className="text-[11px] text-secondary font-bold block mt-0.5">
                  Single Origin Kopi
                </span>
              </div>

              <div className="p-3 bg-surface rounded-2xl border-2 border-primary shadow-[3px_3px_0px_var(--color-shadow)]">
                <div className="flex items-baseline">
                  <span
                    ref={count2Ref}
                    className="text-2xl font-black text-primary tabular-nums inline-block"
                  >
                    0
                  </span>
                  <span className="hf-counter-suffix text-sm font-black text-accent ml-1">
                    Mbps
                  </span>
                </div>
                <span className="text-[11px] text-secondary font-bold block mt-0.5">
                  WiFi Super Cepat
                </span>
              </div>

              <div className="p-3 bg-surface rounded-2xl border-2 border-primary shadow-[3px_3px_0px_var(--color-shadow)]">
                <div className="flex items-baseline">
                  <span
                    ref={count3Ref}
                    className="text-2xl font-black text-primary tabular-nums inline-block"
                  >
                    0
                  </span>
                  <span className="hf-counter-suffix text-2xl font-black text-accent ml-0.5">
                    +
                  </span>
                </div>
                <span className="text-[11px] text-secondary font-bold block mt-0.5">
                  Kudapan & Seduhan
                </span>
              </div>
            </div>
          </div>

          {/* Right Visual Showcase with HyperFrames ambient-glow-bloom */}
          <div className="lg:col-span-5 relative">
            <div className="bloom-stage relative mx-auto max-w-md lg:max-w-none">
              {/* HyperFrames ambient bloom layer */}
              <div ref={glowRef} className="bloom-glow" />

              {/* Rotating Circular Badge Stamp */}
              <div
                ref={stampRef}
                className="absolute -top-7 -right-4 z-20 w-20 h-20 rounded-full bg-primary text-surface border-2 border-dashed border-warm-yellow flex items-center justify-center p-2 shadow-[4px_4px_0px_var(--color-shadow)] select-none pointer-events-none"
              >
                <span className="text-[9px] font-black text-center uppercase tracking-widest leading-tight text-warm-yellow">
                  ORIGINAL<br />BLEND<br />★ 2026 ★
                </span>
              </div>

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
          </div>
        </div>
      </div>
    </section>
  );
}
