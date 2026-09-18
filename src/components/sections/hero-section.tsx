"use client";

import * as React from "react";
import Image from "next/image";
import gsap from "gsap";
import { ArrowRight, MapPin, Sparkles, Terminal, Activity, Zap } from "lucide-react";
import { CAFE_INFO } from "@/data/cafe-data";
import { SangkaraLogo } from "@/components/ui/sangkara-logo";

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

    // 1. HyperFrames spring-pop-entrance for telemetry badges
    tl.fromTo(
      ".hf-pop-badge",
      { scale: 0.9, opacity: 0, y: 16 },
      { scale: 1, opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power3.out" },
      0.1
    );

    // 2. HyperFrames css-marker-patterns (Highlight Mode sweep on "Naik Kelas")
    if (markerRef.current) {
      tl.to(
        markerRef.current,
        { scaleX: 1, duration: 0.65, ease: "power2.out" },
        0.35
      );
    }

    // 3. HyperFrames ambient-glow-bloom behind cyber showcase card
    if (glowRef.current) {
      tl.fromTo(
        glowRef.current,
        { opacity: 0, scale: 0.85 },
        { opacity: 0.6, scale: 1, duration: 0.8, ease: "power2.out" },
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
            glowRef.current.style.opacity = String(0.5 + s * 0.12);
            glowRef.current.style.transform = `scale(${1 + s * 0.04})`;
          },
        },
        1.0
      );
    }

    // 4. HyperFrames counting-dynamic-scale for laboratory metrics
    const state1 = { val: 0 };
    const state2 = { val: 0 };
    const state3 = { val: 0 };

    // Metric 1: 1800m ASL
    if (count1Ref.current) {
      tl.to(
        state1,
        {
          val: 1800,
          duration: 1.4,
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
        { scale: 1, duration: 1.4, ease: "power2.out" },
        0.5
      );
    }

    // Metric 2: 93.5°C Extraction Temp
    if (count2Ref.current) {
      tl.to(
        state2,
        {
          val: 93.5,
          duration: 1.4,
          ease: "power2.out",
          onUpdate: () => {
            if (count2Ref.current) count2Ref.current.textContent = state2.val.toFixed(1);
          },
        },
        0.6
      );
      tl.fromTo(
        count2Ref.current,
        { scale: 0.85 },
        { scale: 1, duration: 1.4, ease: "power2.out" },
        0.6
      );
    }

    // Metric 3: 100 Mbps Symmetrical WiFi
    if (count3Ref.current) {
      tl.to(
        state3,
        {
          val: 100,
          duration: 1.4,
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
        { scale: 1, duration: 1.4, ease: "power2.out" },
        0.7
      );
    }

    // Suffixes slide in cleanly after numbers land
    tl.fromTo(
      ".hf-counter-suffix",
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.08, ease: "power3.out" },
      1.2
    );

    // Continuous circular stamp rotation
    if (stampRef.current) {
      gsap.to(stampRef.current, {
        rotation: 360,
        duration: 25,
        ease: "none",
        repeat: -1,
      });
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative pt-8 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-cyber-lines">
      {/* Nocturnal Cyber Ambient Glow Blobs */}
      <div className="absolute -top-32 -right-32 w-[32rem] h-[32rem] bg-accent/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 -left-32 w-96 h-96 bg-accent-subtle/60 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Cyber Telemetry Badges */}
            <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs">
              <div className="hf-pop-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-accent/40 text-accent shadow-[0_0_12px_var(--color-cyber-glow)]">
                <Terminal className="w-3.5 h-3.5" />
                <span className="font-bold tracking-wider">// ELEVATION: 1800M ASL</span>
              </div>

              <div className="hf-pop-badge inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface border border-border text-secondary">
                <Activity className="w-3.5 h-3.5 text-accent animate-pulse" />
                <span className="font-semibold tracking-wide">CALIBRATED DAILY</span>
              </div>
            </div>

            {/* Catchy Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-primary leading-[1.12]">
              Next-Gen Coffee Roastery.{" "}
              <span className="block mt-1">
                Menyeduh Kopi{" "}
                <span className="mh-highlight-wrap">
                  <span ref={markerRef} className="mh-highlight-bar" />
                  <span className="mh-highlight-text text-accent">
                    Naik Kelas.
                  </span>
                </span>
              </span>
            </h1>

            {/* Catchy Bilingual Subtitle */}
            <p className="text-base sm:text-lg text-secondary max-w-xl leading-relaxed font-normal">
              Where mountain single-origins meet precision laboratory extraction. Ruang fokus temaram OLED, 100 Mbps WiFi, dan seduhan artisanal yang membawa standarmu naik kelas.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#menu">
                <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-black text-sm text-canvas bg-accent hover:bg-accent-hover shadow-[0_0_24px_var(--color-cyber-glow)] hover:shadow-[0_0_32px_var(--color-cyber-glow)] active:scale-95 transition-all cursor-pointer">
                  <span>JELAJAHI MENU LAB</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </a>

              <a
                href={CAFE_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm text-primary bg-surface border border-border hover:border-accent hover:text-accent active:scale-95 transition-all cursor-pointer">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>KOORDINAT KAFE</span>
                </button>
              </a>

              <div className="flex items-center gap-2 text-xs font-mono text-secondary pl-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>OPEN DAILY • 08.00 - 22.00</span>
              </div>
            </div>

            {/* Laboratory Telemetry Counters */}
            <div className="pt-6 border-t border-border grid grid-cols-3 gap-3.5 sm:gap-4 max-w-lg font-mono">
              <div className="p-3.5 bg-surface rounded-2xl border border-border/80 hover:border-accent/40 transition-colors">
                <div className="flex items-baseline">
                  <span
                    ref={count1Ref}
                    className="text-xl sm:text-2xl font-black text-primary tabular-nums inline-block tracking-tight"
                  >
                    0
                  </span>
                  <span className="hf-counter-suffix text-xs font-bold text-accent ml-1">
                    m ASL
                  </span>
                </div>
                <span className="text-[10px] text-secondary font-medium block mt-1 uppercase tracking-wider">
                  Mountain Elevation
                </span>
              </div>

              <div className="p-3.5 bg-surface rounded-2xl border border-border/80 hover:border-accent/40 transition-colors">
                <div className="flex items-baseline">
                  <span
                    ref={count2Ref}
                    className="text-xl sm:text-2xl font-black text-primary tabular-nums inline-block tracking-tight"
                  >
                    0
                  </span>
                  <span className="hf-counter-suffix text-xs font-bold text-accent ml-1">
                    °C
                  </span>
                </div>
                <span className="text-[10px] text-secondary font-medium block mt-1 uppercase tracking-wider">
                  Brew Extraction
                </span>
              </div>

              <div className="p-3.5 bg-surface rounded-2xl border border-border/80 hover:border-accent/40 transition-colors">
                <div className="flex items-baseline">
                  <span
                    ref={count3Ref}
                    className="text-xl sm:text-2xl font-black text-primary tabular-nums inline-block tracking-tight"
                  >
                    0
                  </span>
                  <span className="hf-counter-suffix text-xs font-bold text-accent ml-1">
                    Mbps
                  </span>
                </div>
                <span className="text-[10px] text-secondary font-medium block mt-1 uppercase tracking-wider">
                  Ultra WiFi Speed
                </span>
              </div>
            </div>
          </div>

          {/* Right Visual Showcase with Arch Portal Frame & Rotating Logo Seal */}
          <div className="lg:col-span-5 relative">
            <div className="bloom-stage relative mx-auto max-w-md lg:max-w-none">
              {/* HyperFrames ambient cyber bloom layer */}
              <div ref={glowRef} className="bloom-glow" />

              {/* Rotating Official Sangkara Logo Seal */}
              <div
                ref={stampRef}
                className="absolute -top-7 -right-5 z-20 w-24 h-24 rounded-full bg-surface border border-accent text-accent flex items-center justify-center p-2 shadow-[0_0_24px_var(--color-cyber-glow)] select-none pointer-events-none"
              >
                <SangkaraLogo size={74} className="text-accent" />
              </div>

              {/* Arch Portal Photo Frame inspired by the Logo's Arch */}
              <div className="relative rounded-[32px] sm:rounded-t-[140px] sm:rounded-b-[32px] overflow-hidden border-2 border-accent/40 bg-surface shadow-[0_20px_50px_rgba(0,0,0,0.9)] group">
                <div className="aspect-4/5 relative">
                  <Image
                    src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1000&auto=format&fit=crop"
                    alt="Kopi Sangkara Nocturnal Coffee Roastery"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/30 to-transparent" />
                </div>

                {/* Floating Telemetry Highlight Card */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-surface/90 backdrop-blur-xl border border-accent/30 shadow-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-widest text-accent bg-accent-subtle px-2 py-0.5 rounded border border-accent/20">
                          // SIGNATURE EXTRACT
                        </span>
                        <span className="text-[10px] font-mono text-secondary">
                          LOT #04
                        </span>
                      </div>
                      <h3 className="text-base font-black text-primary mt-1">
                        Sangkara Reserve Palm Latte
                      </h3>
                    </div>
                    <span className="text-xs font-mono font-black text-accent bg-surface px-3 py-1.5 rounded-full border border-accent/40 shadow-sm">
                      Rp 24K
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
