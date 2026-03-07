"use client";

import { motion } from "framer-motion";

const team = [
  { name: "Aarav Mehta", role: "Chief Creative Officer" },
  { name: "Sara Ali", role: "Head of Global Production" },
  { name: "Kabir Shah", role: "Director of Performance" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="section-padding bg-lux-bg-secondary"
    >
      <div className="mx-auto w-[min(1120px,100%-1.5rem)] space-y-12">
        <div className="grid gap-12 md:grid-cols-[1.2fr,0.8fr] md:items-start">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.28em] text-lux-gold-dark font-black">
              About
            </p>
            <h2 className="font-heading text-4xl text-black sm:text-6xl font-bold">
              Where Content Meets High Performance.
            </h2>
            <p className="text-sm leading-relaxed text-zinc-600 sm:text-lg">
              Imperium Studio is an elite marketing collective designed for 
              high-growth startups and visionary creators. We bridge the gap 
              between artistic cinematic production and rigorous growth strategy.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="glass rounded-2xl p-6 text-sm text-zinc-600 shadow-sm">
                <h3 className="text-[11px] font-black uppercase tracking-[0.24em] text-lux-gold-dark">
                  Vision
                </h3>
                <p className="mt-3 text-sm leading-relaxed">
                  To be the silent engine behind category-defining brands, both
                  online and on the street.
                </p>
              </div>
              <div className="glass rounded-2xl p-6 text-sm text-zinc-600 shadow-sm">
                <h3 className="text-[11px] font-black uppercase tracking-[0.24em] text-lux-gold-dark">
                  Philosophy
                </h3>
                <p className="mt-3 text-sm leading-relaxed">
                  Strategy before aesthetics, storytelling before spend,
                  relationships over retainers.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-zinc-600">
              Core Team
            </p>
            <div className="space-y-4">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: 0.1 + index * 0.08, duration: 0.5 }}
                  className="flex items-center justify-between glass px-5 py-4 text-sm hover:border-lux-gold/30 transition-colors"
                >
                  <div>
                    <p className="text-base font-bold text-black">{member.name}</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-lux-gold">{member.role}</p>
                  </div>
                  <span className="h-10 w-10 rounded-full border border-lux-gold/40 bg-gradient-to-tr from-lux-gold/20 to-transparent flex items-center justify-center text-[10px] text-lux-gold shadow-sm">★</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
