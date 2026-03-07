
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black pt-24 pb-12 text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] translate-x-1/4 translate-y-1/4 rounded-full bg-lux-gold/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-0 left-0 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lux-gold/5 blur-[100px]" />

      <div className="mx-auto w-[min(1200px,100%-3rem)]">
        <div className="grid gap-16 lg:grid-cols-[1.5fr,1fr,1fr,1.2fr]">
          {/* Brand Column */}
          <div className="space-y-8">
            <a
              href="/"
              className="font-heading text-2xl font-black tracking-[0.25em] uppercase transition-opacity hover:opacity-80"
            >
              IMPERIUM <span className="gold-gradient">STUDIO</span>
            </a>
            <p className="max-w-xs text-base leading-relaxed text-zinc-400">
              An elite marketing collective architecting demand through
              cinematic craft and high-performance strategy. We make brands unmissable.
            </p>
            <div className="flex gap-4">
              {["Li", "Ig", "Tw", "Be"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-sm font-bold transition-all hover:border-lux-gold hover:bg-lux-gold hover:text-black"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-lux-gold-dark">
              Navigation
            </h3>
            <nav className="flex flex-col gap-4 text-sm font-bold text-zinc-400">
              <a href="#hero" className="transition-colors hover:text-white">The Studio</a>
              <a href="#services" className="transition-colors hover:text-white">Our Arsenal</a>
              <a href="#portfolio" className="transition-colors hover:text-white">Gallery</a>
              <a href="#about" className="transition-colors hover:text-white">Philosophy</a>
              <a href="#contact" className="transition-colors hover:text-white">Contact</a>
            </nav>
          </div>

          {/* Services Column */}
          <div className="space-y-8">
            <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-lux-gold-dark">
              Expertise
            </h3>
            <ul className="flex flex-col gap-4 text-sm font-bold text-zinc-400">
              <li className="hover:text-white cursor-default transition-colors">Cinematic Films</li>
              <li className="hover:text-white cursor-default transition-colors">Growth Engineering</li>
              <li className="hover:text-white cursor-default transition-colors">Physical Domination</li>
              <li className="hover:text-white cursor-default transition-colors">Founder Authority</li>
              <li className="hover:text-white cursor-default transition-colors">Web Ecosystems</li>
            </ul>
          </div>

          {/* Newsletter/CTA Column */}
          <div className="space-y-8 rounded-[32px] bg-white/[0.03] p-8 ring-1 ring-inset ring-white/5">
            <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-lux-gold-dark">
              Inquiries
            </h3>
            <p className="text-sm font-medium leading-relaxed text-zinc-300">
              Interested in category dominance? Reach out directly.
            </p>
            <a
              href="mailto:hello@imperium.studio"
              className="block text-lg font-black text-white hover:text-lux-gold transition-colors underline underline-offset-8 decoration-lux-gold/30"
            >
              hello@imperium.studio
            </a>
            <div className="space-y-2">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                Operating Globally
              </p>
              <p className="text-xs font-bold text-zinc-400">Mumbai • Bangalore • Remote</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-24 flex flex-col items-center justify-between gap-8 border-t border-white/5 pt-12 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 sm:flex-row">
          <div className="flex items-center gap-6">
            <p>© {new Date().getFullYear()} Imperium Studio</p>
            <div className="h-4 w-px bg-white/10" />
            <p>All Rights Reserved</p>
          </div>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <p className="gold-gradient">Built for visionaries</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

