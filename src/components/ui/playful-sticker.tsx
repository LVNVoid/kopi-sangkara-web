import * as React from "react";
import { cn } from "@/utils/cn";

export interface PlayfulStickerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "yellow" | "orange" | "accent" | "surface";
  rotate?: "left" | "right" | "none";
}

export function PlayfulSticker({
  className,
  variant = "yellow",
  rotate = "left",
  children,
  ...props
}: PlayfulStickerProps) {
  const variantStyles = {
    yellow: "bg-warm-yellow text-primary border-primary",
    orange: "bg-warm-orange text-primary border-primary",
    accent: "bg-accent-subtle text-accent border-accent",
    surface: "bg-surface text-primary border-primary",
  };

  const rotateStyles = {
    left: "-rotate-3 hover:-rotate-1",
    right: "rotate-3 hover:rotate-1",
    none: "rotate-0",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border-2 font-extrabold text-xs tracking-wide shadow-[3px_3px_0px_var(--color-shadow)] transition-transform duration-200 cursor-default select-none",
        variantStyles[variant],
        rotateStyles[rotate],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
