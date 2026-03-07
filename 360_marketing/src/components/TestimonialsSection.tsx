"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Imperium didn't just give us a campaign; they gave us a category-defining identity. Our Series B was oversubscribed within weeks of the launch.",
    name: "Ishaan Malhotra",
    role: "CEO, Nexa Systems",
  },
  {
    quote:
      "The cinematic quality of their production is unmatched. They turned our brand story into a cultural moment that resonated globally.",
    name: "Mira Kapoor",
    role: "Global Creative Lead",
  },
  {
    quote:
      "Their 360° approach is surgical. From OOH takeovers to digital funnels, every touchpoint felt cohesive and high-conversion.",
    name: "Arjun Singh",
    role: "Founder, Zenith D2C",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="section-padding bg-lux-bg-secondary/50 overflow-hidden"
    >
      <div className="mx-auto w-[min(1120px,100%-1.5rem)] space-y-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.28em] text-lux-gold-dark font-black">
              Testimonials
            </p>
            <h2 className="font-heading text-4xl text-black sm:text-6xl font-black">
              Client Success Stories
            </h2>
          </div>
        </div>
        <div className="relative mt-8">
          <motion.div
            drag="x"
            dragConstraints={{ left: -600, right: 0 }}
            className="flex cursor-grab gap-6 active:cursor-grabbing"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                className="glass min-w-[320px] flex-1 space-y-6 p-8 shadow-sm sm:min-w-[400px]"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lux-gold">
                      ★
                    </span>
                  ))}
                </div>
                <p className="font-heading text-xl font-medium leading-relaxed text-black italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4 border-t border-black/[0.05] pt-6">
                  <div className="h-12 w-12 rounded-full bg-lux-gold/10 flex items-center justify-center font-heading text-lux-gold font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-base font-bold text-black">{t.name}</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-lux-gold-dark">
                      {t.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
