"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { CAFE_INFO } from "@/data/cafe-data";
import { SangkaraLogo } from "@/components/ui/sangkara-logo";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { label: "01. Story", href: "#cerita" },
    { label: "02. Menu Lab", href: "#menu" },
    { label: "03. Ambience", href: "#suasana" },
    { label: "04. Coordinates", href: "#lokasi" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-canvas/90 backdrop-blur-xl border-b border-border transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo with Official Sangkara Seal */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="w-11 h-11 rounded-full bg-surface border border-accent/30 flex items-center justify-center text-accent group-hover:border-accent group-hover:shadow-[0_0_15px_var(--color-cyber-glow)] transition-all">
            <SangkaraLogo size={32} className="text-accent group-hover:scale-105 transition-transform" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-sm font-black tracking-wider text-primary uppercase">
                {CAFE_INFO.name}
              </span>
              <span className="hidden sm:inline-flex text-[9px] font-mono font-bold text-accent bg-accent-subtle px-1.5 py-0.5 rounded border border-accent/30">
                NAIK KELAS
              </span>
            </div>
            <span className="text-[11px] text-secondary font-mono tracking-wider mt-1">
              NOCTURNAL ROASTERY LAB
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-mono">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold text-secondary hover:text-accent transition-colors tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={CAFE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-extrabold text-xs text-canvas bg-accent hover:bg-accent-hover active:scale-95 shadow-[0_0_20px_var(--color-cyber-glow)] transition-all cursor-pointer">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ORDER VIA WA</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
            </button>
          </a>
        </div>

        {/* Mobile Menu Toggle - Min 44x44px Touch Target */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-11 h-11 flex items-center justify-center rounded-xl bg-surface border border-border text-primary hover:border-accent hover:text-accent transition-all active:scale-95 cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer with Smooth Motion Transition */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden bg-surface/98 backdrop-blur-2xl border-b border-border px-6 py-6 space-y-4 shadow-2xl overflow-hidden"
          >
            <nav className="flex flex-col space-y-2 font-mono">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-bold text-primary py-3 px-3 rounded-xl hover:bg-surface-muted hover:text-accent transition-colors flex items-center justify-between border-b border-border/40"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-accent">→</span>
                </a>
              ))}
            </nav>

            <div className="pt-2 flex flex-col gap-3">
              <a
                href={CAFE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <button className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-black text-xs text-canvas bg-accent hover:bg-accent-hover min-h-[48px] shadow-[0_0_20px_var(--color-cyber-glow)] transition-all">
                  <Sparkles className="w-4 h-4" />
                  <span>ORDER VIA WHATSAPP (NAIK KELAS)</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
