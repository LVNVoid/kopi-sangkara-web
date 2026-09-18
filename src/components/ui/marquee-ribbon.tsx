import * as React from "react";
import { Coffee, Sparkles, Wifi, Heart, Flame } from "lucide-react";

export function MarqueeRibbon() {
  const items = [
    { icon: Coffee, text: "SANGKARA SPECIALTY BEANS" },
    { icon: Sparkles, text: "ROASTED IN TEMANGGUNG" },
    { icon: Flame, text: "SLOW BREW BAR" },
    { icon: Heart, text: "FRESH BAKED CROFFLE" },
    { icon: Wifi, text: "100 MBPS FAST WORKSPACE" },
  ];

  return (
    <div className="w-full overflow-hidden bg-primary text-surface py-3.5 border-y-2 border-primary shadow-[0_4px_0_var(--color-shadow)] select-none">
      <div className="flex gap-8 whitespace-nowrap animate-marquee">
        {[...items, ...items, ...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold tracking-wider">
              <Icon className="w-4 h-4 text-warm-yellow shrink-0" />
              <span>{item.text}</span>
              <span className="text-accent ml-4 font-black text-base">•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
