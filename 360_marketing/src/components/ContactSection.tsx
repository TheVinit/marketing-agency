"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type FormState = "idle" | "submitting" | "success" | "error";

const servicesList = [
  "Product Shoots",
  "Reels Creation",
  "Event Videography",
  "Video Editing",
  "LinkedIn Management",
  "Copywriting",
  "Graphic Design",
  "Billboard Advertising",
  "Brand Collaboration",
  "Outdoor Campaigns",
  "Business Card Design"
];

const businessScales = [
  "Small Business",
  "Startup",
  "Medium Business",
  "Large Brand",
  "Personal Brand"
];

const contactMethods = [
  "Phone Call",
  "Email",
  "WhatsApp"
];

export function ContactSection() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (formState === "submitting") return;
    setFormState("submitting");
    setErrorMessage(null);

    // Simulate submission
    setTimeout(() => {
      setFormState("success");
      (event.target as HTMLFormElement).reset();
    }, 1500);
  }

  return (
    <section
      id="contact"
      className="section-padding bg-[#fdfcf8]"
    >
      <div className="mx-auto grid w-[min(1120px,100%-1.5rem)] gap-16 md:grid-cols-[1fr,1.3fr]">
        <div className="space-y-8">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.28em] text-lux-gold-dark font-black">
              Get Started
            </p>
            <h2 className="font-heading text-4xl text-black sm:text-6xl font-black">
              Let's Build Your Brand.
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-zinc-600 sm:text-lg">
              Ready to take the next step? Fill out the form to help us understand your needs,
              and we'll craft a bespoke marketing strategy for you.
            </p>
          </div>
          <div className="space-y-4 text-sm text-zinc-600 sm:text-base font-medium">
            <div className="flex items-center gap-4">
              <span className="h-10 w-10 rounded-full border border-lux-gold/20 flex items-center justify-center text-lux-gold font-bold shadow-sm">✉</span>
              <p>
                Email:{" "}
                <a
                  href="mailto:hello@360marketing.com"
                  className="text-lux-gold font-bold underline-offset-4 hover:underline"
                >
                  hello@360marketing.com
                </a>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="h-10 w-10 rounded-full border border-lux-gold/20 flex items-center justify-center text-lux-gold font-bold shadow-sm">📍</span>
              <p>Location: Operating across major cities & remotely.</p>
            </div>
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="bg-white space-y-10 rounded-[32px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] sm:p-12 border border-black/[0.03]"
        >
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="space-y-2 text-sm">
              <label className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500">
                Full Name *
              </label>
              <input
                name="name"
                required
                className="h-12 w-full border-b border-black/20 bg-transparent text-sm text-black outline-none ring-0 transition focus:border-lux-gold placeholder:text-zinc-400"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2 text-sm">
              <label className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                className="h-12 w-full border-b border-black/20 bg-transparent text-sm text-black outline-none ring-0 transition focus:border-lux-gold placeholder:text-zinc-400"
                placeholder="you@company.com"
              />
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <label className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500">
              Contact Number *
            </label>
            <input
              name="phone"
              type="tel"
              required
              className="h-12 w-full border-b border-black/20 bg-transparent text-sm text-black outline-none ring-0 transition focus:border-lux-gold placeholder:text-zinc-400"
              placeholder="+1 (555) 000-0000"
            />
          </div>

          <div className="space-y-4 text-sm pt-4 border-t border-black/5">
            <label className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500">
              Which services do you need?
            </label>
            <div className="grid gap-4 sm:grid-cols-2">
              {servicesList.map(service => (
                <label key={service} className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center shrink-0">
                    <input type="checkbox" name="services" value={service} className="peer sr-only" />
                    <div className="h-5 w-5 rounded border border-black/20 bg-transparent transition-colors peer-checked:border-lux-gold-dark peer-checked:bg-lux-gold group-hover:border-lux-gold" />
                    <svg className="absolute w-3 h-3 text-black opacity-0 transition-opacity peer-checked:opacity-100 pointer-events-none" viewBox="0 0 14 10" fill="none">
                      <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-zinc-600 transition-colors group-hover:text-black">{service}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2 text-sm pt-4 border-t border-black/5">
            <label className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500">
              Scale of your business or project
            </label>
            <select
              name="businessScale"
              defaultValue=""
              className="h-12 w-full border-b border-black/20 bg-transparent text-sm font-medium text-zinc-700 outline-none ring-0 transition focus:border-lux-gold hover:cursor-pointer"
            >
              <option value="" disabled>Select scale...</option>
              {businessScales.map(scale => (
                <option key={scale} value={scale} className="text-black">{scale}</option>
              ))}
            </select>
          </div>

          <div className="space-y-3 text-sm pt-4 border-t border-black/5">
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500">
                Tell us about your business or project
              </label>
              <p className="text-xs text-zinc-400">Include industry, target audience, and marketing challenges.</p>
            </div>
            <textarea
              name="projectDetails"
              rows={4}
              className="w-full border-b border-black/20 bg-transparent py-2 text-sm text-black outline-none ring-0 transition focus:border-lux-gold placeholder:text-zinc-400 resize-y"
              placeholder="Give us a brief overview..."
            />
          </div>

          <div className="space-y-4 text-sm pt-4 border-t border-black/5">
            <label className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500">
              Preferred Contact Method
            </label>
            <div className="flex flex-wrap gap-8">
              {contactMethods.map(method => (
                <label key={method} className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center shrink-0">
                    <input type="radio" name="contactMethod" value={method} className="peer sr-only" required />
                    <div className="h-[18px] w-[18px] rounded-full border border-black/30 bg-transparent transition-colors peer-checked:border-lux-gold-dark group-hover:border-lux-gold" />
                    <div className="absolute h-2.5 w-2.5 rounded-full bg-lux-gold-dark opacity-0 transition-opacity peer-checked:opacity-100 pointer-events-none" />
                  </div>
                  <span className="text-sm font-medium text-zinc-600 transition-colors group-hover:text-black">{method}</span>
                </label>
              ))}
            </div>
          </div>

          {formState === "success" && (
            <div className="rounded-2xl bg-emerald-500/10 p-5 border border-emerald-500/20">
              <p className="text-sm font-bold text-emerald-700">
                Thank you! Your information has been received. We'll be in touch soon.
              </p>
            </div>
          )}

          {formState === "error" && errorMessage && (
            <div className="rounded-2xl bg-rose-500/10 p-5 border border-rose-500/20">
              <p className="text-sm font-bold text-rose-700">{errorMessage}</p>
            </div>
          )}

          <div className="pt-4">
            <button
              type="submit"
              disabled={formState === "submitting"}
              className="w-full rounded-full bg-black py-5 px-8 text-[11px] font-black uppercase tracking-[0.25em] text-white shadow-xl transition-all hover:bg-lux-gold hover:text-black hover:-translate-y-1 disabled:opacity-50 disabled:hover:translate-y-0"
            >
              {formState === "submitting" ? "Sending Details..." : "Submit Information"}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
