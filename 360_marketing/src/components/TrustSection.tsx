"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SplitText } from "./SplitText";

type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

const stats: Stat[] = [
  { label: "Revenue Generated", value: 250, suffix: "M+" },
  { label: "Global Partners", value: 85, suffix: "+" },
  { label: "Viral Reach", value: 500, suffix: "M+" },
];

function useCountUp(target: number, active: boolean, duration = 1.6) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let frame: number;
    const start = performance.now();
    const animate = (time: number) => {
      const progress = Math.min(1, (time - start) / (duration * 1000));
      setValue(Math.floor(target * progress));
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration]);
  return value;
}

function StatCard({ stat, delay }: { stat: Stat; delay: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const value = useCountUp(stat.value, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6, ease: [0.26, 0.9, 0.33, 1] }}
      className="glass flex flex-1 flex-col gap-3 p-6 shadow-sm"
    >
      <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-zinc-500">
        {stat.label}
      </p>
      <div className="flex items-baseline gap-1 font-heading text-4xl font-bold text-black sm:text-5xl">
        <span>{value}</span>
        {stat.suffix && (
          <span className="text-2xl text-lux-gold">
            {stat.suffix}
          </span>
        )}
      </div>
      <p className="text-xs leading-relaxed text-zinc-500">
        Crafted strategies across performance, brand, and experiential campaigns.
      </p>
    </motion.div>
  );
}

export function TrustSection() {
  return (
    <section
      aria-label="Social proof"
      className="relative overflow-hidden bg-lux-bg-secondary/50 py-24 sm:py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-lux-gold/5 blur-[100px]" />

      <div className="relative mx-auto flex w-[min(1200px,100%-3rem)] flex-col gap-16 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl space-y-8">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-black uppercase tracking-[0.4em] text-lux-gold-dark"
          >
            Proof Of Execution
          </motion.p>
          <SplitText
            text="Measurable Impact Over Empty Promises."
            className="font-heading text-4xl font-black text-black sm:text-6xl"
          />
          <p className="max-w-md text-lg leading-relaxed text-zinc-600 font-medium">
            We've architected growth for unicorn startups and category leaders. 
            Our systems turn attention into equity.
          </p>
        </div>
        
        <div className="grid flex-1 gap-6 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              stat={stat}
              delay={0.1 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
