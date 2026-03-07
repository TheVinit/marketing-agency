"use client";

import { motion } from "framer-motion";
import { SplitText } from "./SplitText";

const items = [1, 2, 3];

function PortfolioCard({ index }: { index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: 0.1 + index * 0.08, duration: 0.6 }}
      className="group relative h-[320px] w-[260px] flex items-center justify-center shrink-0 snap-center overflow-hidden rounded-[32px] bg-black shadow-xl sm:h-[400px] sm:w-[320px] border border-white/10"
    >
      <div className="text-center p-8">
        <h3 className="font-heading text-2xl font-bold text-white leading-tight">
          Portfolio Coming Soon
        </h3>
        <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.25em] text-lux-gold">
          Imperium 360°
        </p>
      </div>
    </motion.article>
  );
}

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="section-padding bg-lux-bg-secondary"
    >
      <div className="mx-auto w-[min(1120px,100%-1.5rem)] space-y-16">
        <div className="flex flex-col items-center justify-center text-center space-y-6">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-lux-gold-dark">
            Portfolio
          </p>
          <SplitText
            text="Selected Case Studies"
            className="font-heading text-4xl text-black sm:text-6xl"
          />
          <p className="max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-lg">
            We are currently curating our most ambitious work. Check back soon for detailed case studies.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          className="relative flex justify-center"
        >
          <div className="flex flex-wrap items-center justify-center gap-6 pb-8 pt-2">
            {items.map((item, index) => (
              <PortfolioCard key={item} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
