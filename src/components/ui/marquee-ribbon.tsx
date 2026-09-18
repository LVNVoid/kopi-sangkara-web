import * as React from "react";
import { Coffee, Sparkles, Wifi, Flame, Cpu, Terminal } from "lucide-react";

export function MarqueeRibbon() {
  const items = [
    { icon: Coffee, text: "1800M ASL SINDORO BEANS" },
    { icon: Flame, text: "93.5°C PRECISION EXTRACTION" },
    { icon: Sparkles, text: "SEDUHAN NAIK KELAS" },
    { icon: Cpu, text: "NOCTURNAL COFFEE LAB" },
    { icon: Wifi, text: "100 MBPS ULTRA-FAST WIFI" },
    { icon: Terminal, text: "NEXT-GEN ROASTERY" },
  ];

  return (
    <div className="w-full overflow-hidden bg-surface border-y border-border py-3 select-none font-mono">
      <div className="flex gap-8 whitespace-nowrap animate-marquee">
        {[...items, ...items, ...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="inline-flex items-center gap-2.5 text-xs font-bold tracking-widest text-primary">
              <Icon className="w-3.5 h-3.5 text-accent shrink-0" />
              <span>{item.text}</span>
              <span className="text-accent/60 ml-3 text-sm">•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
