"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, Menu, X, ArrowUpRight } from "lucide-react";
import { CAFE_INFO } from "@/data/cafe-data";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { label: "Tentang Kami", href: "#cerita" },
    { label: "Menu Pilihan", href: "#menu" },
    { label: "Suasana & Galeri", href: "#suasana" },
    { label: "Lokasi & Jam Buka", href: "#lokasi" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-canvas/90 backdrop-blur-md border-b border-border/70 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-surface transition-all">
            <Coffee className="w-5 h-5 transition-transform group-hover:scale-110" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-primary leading-none">
              {CAFE_INFO.name}
            </span>
            <span className="text-xs text-secondary font-medium tracking-wide mt-1">
              Artisan Space & Roastery
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-secondary hover:text-accent transition-colors"
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
            <button className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-black text-xs text-surface bg-accent border-2 border-primary shadow-[2.5px_2.5px_0px_var(--color-shadow)] hover:shadow-[4px_4px_0px_var(--color-shadow)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[1px_1px_0px_var(--color-shadow)] transition-all cursor-pointer">
              <span>Hubungi Kafe</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </a>
        </div>

        {/* Mobile Menu Toggle - Min 44x44px Touch Target */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-11 h-11 flex items-center justify-center rounded-xl bg-surface border-2 border-primary shadow-[2px_2px_0px_var(--color-shadow)] text-primary hover:bg-surface-muted transition-colors active:scale-95 cursor-pointer"
            aria-label="Buka Menu"
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
            className="md:hidden bg-surface border-b-2 border-primary px-6 py-6 space-y-4 shadow-[0px_8px_0px_var(--color-shadow)] overflow-hidden"
          >
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-extrabold text-primary py-3 px-3 rounded-xl hover:bg-surface-muted transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-secondary font-bold">→</span>
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
                <Button variant="accent" size="lg" className="w-full justify-center min-h-[48px]">
                  <span>Hubungi Kafe via WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
