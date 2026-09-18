import * as React from "react";
import { cn } from "@/utils/cn";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-3 mb-12", centered && "text-center mx-auto max-w-2xl", className)}>
      {badge && (
        <span className="inline-block text-xs font-bold tracking-widest uppercase text-accent bg-accent-subtle px-3 py-1 rounded-full border border-accent/20">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-secondary font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
