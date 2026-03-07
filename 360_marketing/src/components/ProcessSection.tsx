"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Discovery Call",
    description:
      "We map where your brand is today, your growth goals, and your runway for experimentation.",
  },
  {
    title: "Strategy Creation",
    description:
      "Channel mix, creative angles, and media plan built into a single 360° campaign blueprint.",
  },
  {
    title: "Campaign Execution",
    description:
      "Production, placement, and optimization handled end-to-end with weekly performance rituals.",
  },
  {
    title: "Growth & Optimization",
    description:
      "We compound what works, sunset what does not, and build always-on growth systems.",
  },
];

export function ProcessSection() {
  return (
    <section
      aria-label="Process"
      className="section-padding bg-lux-bg"
    >
      <div className="mx-auto w-[min(1120px,100%-1.5rem)] space-y-12">
        <div className="max-w-2xl space-y-6">
          <p className="text-xs uppercase tracking-[0.28em] text-lux-gold font-bold">
            Process
          </p>
          <h2 className="font-heading text-4xl text-black sm:text-6xl font-bold">
            How We Architect Growth
          </h2>
          <p className="text-sm leading-relaxed text-zinc-600 sm:text-lg">
            A 4-step system designed for speed, scale, and radical transparency.
          </p>
        </div>
        <div className="relative mt-8">
          <div className="space-y-6 md:grid md:grid-cols-4 md:gap-6 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  delay: 0.1 + index * 0.08,
                  duration: 0.6,
                }}
                className="glass relative flex flex-col gap-6 p-8 shadow-sm hover:border-lux-gold/30 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lux-gold/10 text-xs font-bold text-lux-gold">
                  0{index + 1}
                </div>
                <div className="space-y-3">
                  <h3 className="font-heading text-xl font-bold text-black">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-600">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
