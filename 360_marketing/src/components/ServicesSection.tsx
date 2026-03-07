"use client";

import { motion } from "framer-motion";
import { SplitText } from "./SplitText";
import {
  Camera,
  Video,
  Clapperboard,
  Scissors,
  PenTool,
  MonitorUp,
  Handshake,
  CreditCard,
  Megaphone,
  Palette,
  Linkedin
} from "lucide-react";

const services = [
  {
    title: "Digital & Physical Product Shoots",
    description: "High-quality photography that makes your products look irresistible online and offline.",
    icon: Camera,
  },
  {
    title: "Reels Creation",
    description: "Engaging short-form video content designed to go viral and capture attention.",
    icon: Video,
  },
  {
    title: "Event Photography / Videography",
    description: "Cinematic coverage of your important brand moments and corporate events.",
    icon: Clapperboard,
  },
  {
    title: "Video Editing",
    description: "Professional post-production to turn raw footage into polished masterpieces.",
    icon: Scissors,
  },
  {
    title: "Copywriting",
    description: "Persuasive and compelling copy that converts readers into loyal customers.",
    icon: PenTool,
  },
  {
    title: "Billboard Advertising",
    description: "Massive outdoor placements that guarantee your brand gets noticed.",
    icon: MonitorUp,
  },
  {
    title: "Brand Collaboration",
    description: "Strategic partnerships to expand your reach and build new audiences.",
    icon: Handshake,
  },
  {
    title: "Business Card Design",
    description: "Premium physical touchpoints that leave a lasting professional impression.",
    icon: CreditCard,
  },
  {
    title: "Outdoor Campaigns",
    description: "Creative activations in physical spaces to drive real-world engagement.",
    icon: Megaphone,
  },
  {
    title: "Graphic Design",
    description: "Stunning visual assets that communicate your brand's unique identity.",
    icon: Palette,
  },
  {
    title: "LinkedIn Management",
    description: "B2B authority building through consistent, insightful professional content.",
    icon: Linkedin,
  }
];

type ServiceCardProps = {
  service: typeof services[0];
  index: number;
};

function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: (index % 4) * 0.1,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex flex-col overflow-hidden rounded-[24px] bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(197,160,89,0.1)] border border-black/[0.03]"
    >
      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fdfcf8] transition-colors group-hover:bg-lux-gold/10">
        <Icon className="h-6 w-6 text-black transition-colors group-hover:text-[#c5a059]" />
      </div>
      <h3 className="mb-3 font-heading text-xl font-black text-black">
        {service.title}
      </h3>
      <p className="text-sm leading-relaxed text-zinc-600">
        {service.description}
      </p>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <section
      id="services"
      className="section-padding relative overflow-hidden bg-[#fdfcf8]"
    >
      {/* Abstract Background Decoration */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-30">
        <div className="absolute -left-20 top-40 h-[500px] w-[500px] rounded-full bg-lux-gold/5 blur-[120px]" />
        <div className="absolute -right-20 bottom-40 h-[500px] w-[500px] rounded-full bg-lux-gold/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto w-[min(1200px,100%-3rem)] space-y-16">
        <div className="flex flex-col items-center text-center space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-black uppercase tracking-[0.4em] text-lux-gold-dark"
          >
            Our Arsenal
          </motion.p>
          <SplitText
            text="Comprehensive Marketing Solutions"
            className="max-w-4xl font-heading text-4xl font-black text-black sm:text-6xl"
          />
          <p className="max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg font-medium">
            Everything you need to scale your brand across digital and physical domains.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Global CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-[32px] bg-black p-10 text-center sm:p-16 mt-20"
        >
          <h3 className="font-heading text-3xl font-black text-white sm:text-5xl">
            Ready to Build Your <span className="gold-gradient">Imperium?</span>
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-base text-zinc-400">
            Secure your bespoke marketing blueprint today. Focus on what you do best, we'll handle the rest.
          </p>
          <div className="mt-10 flex justify-center">
            <a
              href="#contact"
              className="rounded-full bg-lux-gold px-10 py-5 text-xs font-black uppercase tracking-[0.25em] text-black transition-all hover:bg-white hover:scale-105"
            >
              Get Started
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
