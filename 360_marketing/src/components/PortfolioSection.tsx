"use client";

import { motion } from "framer-motion";

const cases = [
  {
    tag: "Digital Presence",
    title: "Cinematic Product Launch",
    img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=700&q=80&auto=format",
  },
  {
    tag: "Physical Presence",
    title: "Urban OOH Domination",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&q=80&auto=format",
  },
  {
    tag: "Authority",
    title: "Global Founder Strategy",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80&auto=format",
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" style={{ padding: '6rem 0', background: '#f5f3ef' }}>
      <div style={{ margin: '0 auto', width: 'min(1120px, calc(100% - 3rem))' }}>

        {/* Header row */}
        <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: '1fr', marginBottom: '3.5rem' }}>
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ fontSize: 11, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.28em', color: '#8a6b1f', marginBottom: 14 }}
            >
              Portfolio
            </motion.p>
            <h2 className="font-heading" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: 900, color: '#0a0a0a', lineHeight: 1.1, margin: '0 0 1rem' }}>
              Selected Case Studies
            </h2>
            <p style={{ maxWidth: 440, fontSize: '1rem', lineHeight: 1.65, color: '#52525b', margin: 0 }}>
              A curated look at our most ambitious work. We design ecosystems
              that live at the intersection of cinematic craft and measurable ROI.
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))' }}>
          {cases.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.65 }}
              style={{ position: 'relative', height: 340, borderRadius: 24, overflow: 'hidden', cursor: 'pointer' }}
              onMouseEnter={e => {
                const img = (e.currentTarget as HTMLElement).querySelector('img');
                if (img) (img as HTMLElement).style.transform = 'scale(1.07)';
              }}
              onMouseLeave={e => {
                const img = (e.currentTarget as HTMLElement).querySelector('img');
                if (img) (img as HTMLElement).style.transform = 'scale(1)';
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 60%)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '1.5rem' }}>
                <p style={{ fontSize: 10, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#c5a059', margin: '0 0 6px' }}>
                  {item.tag}
                </p>
                <h3 className="font-heading" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', lineHeight: 1.25, margin: 0 }}>
                  {item.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
