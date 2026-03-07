"use client";


import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-40 flex justify-center"
    >
      <div
        className={`mt-4 flex w-[min(1120px,100%-1.5rem)] items-center justify-between rounded-full border border-black/[0.05] px-6 py-3 backdrop-blur-xl transition-all duration-500 ${scrolled
          ? "bg-white/90 shadow-2xl shadow-lux-gold/10"
          : "bg-white/40"
          }`}
      >
        <a
          href="/"
          className="transition-opacity hover:opacity-80"
        >
          <img src="/marketspark_logo1.png" alt="360° Marketing Logo" className="h-8 md:h-10 w-auto object-contain" />
        </a>
        <nav className="hidden items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-600 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative transition-colors hover:text-lux-gold"
            >
              <span>{item.label}</span>
              <span className="absolute inset-x-0 -bottom-1 h-[2px] origin-left scale-x-0 bg-lux-gold transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full bg-black px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-lg transition hover:bg-lux-gold hover:text-black hover:scale-105 md:inline-flex"
        >
          Start Your Imperium
        </a>
        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-xs text-zinc-200 md:hidden"
          aria-label="Open navigation"
        >
          <span className="block h-[1px] w-4 bg-zinc-300" />
        </button>
      </div>
    </motion.header>
  );
}
