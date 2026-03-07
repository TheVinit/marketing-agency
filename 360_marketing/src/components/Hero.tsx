"use client";

import type * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SplitText } from "./SplitText";

function MarketingOrb({ scrollFactor }: { scrollFactor: number }) {
  const group = useRef<THREE.Group | null>(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    const { x, y } = state.mouse;
    const intensity = 1 + scrollFactor * 2;
    group.current.rotation.y += 0.3 * delta * intensity;
    group.current.rotation.x = 0.2 + scrollFactor * 0.8 + y * 0.15;
    group.current.rotation.z += x * 0.05;

    // Scale and position based on scroll
    const s = 1.2 + scrollFactor * 2.5;
    group.current.scale.set(s, s, s);
    group.current.position.y = -scrollFactor * 3;
    group.current.position.x = scrollFactor * 1;
  });

  const labels = [
    { text: "Growth", pos: [2.5, 0, 0] },
    { text: "Strategy", pos: [-2.5, 1, 0] },
    { text: "Content", pos: [0, -2.5, 1] },
    { text: "Performance", pos: [1, 2.5, -1] },
  ];

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={0.8} floatIntensity={2}>
        <mesh>
          <sphereGeometry args={[1.8, 64, 64]} />
          <meshStandardMaterial
            metalness={0.95}
            roughness={0.05}
            color="#1a1a1a"
            envMapIntensity={2}
          />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 8]}>
          <torusGeometry args={[2.4, 0.02, 32, 256]} />
          <meshBasicMaterial color="#d4af37" transparent opacity={0.6} />
        </mesh>
        <mesh rotation={[Math.PI / 3, 0, -Math.PI / 6]}>
          <torusGeometry args={[2.2, 0.015, 32, 256]} />
          <meshBasicMaterial color="#c5a059" transparent opacity={0.4} />
        </mesh>
        <mesh rotation={[Math.PI / 1.5, Math.PI / 4, 0]}>
          <torusGeometry args={[2.0, 0.01, 32, 256]} />
          <meshBasicMaterial color="#8a6b1f" transparent opacity={0.3} />
        </mesh>

        {labels.map((label, i) => (
          <Html
            key={i}
            position={label.pos as any}
            center
            distanceFactor={6}
            className="pointer-events-none select-none"
          >
            <div className="rounded-full border border-lux-gold/20 bg-white/40 px-3 py-1 backdrop-blur-md">
              <p className="whitespace-nowrap text-[10px] font-black uppercase tracking-[0.2em] text-lux-gold">
                {label.text}
              </p>
            </div>
          </Html>
        ))}
      </Float>
      <pointLight position={[5, 5, 5]} intensity={160} color="#d4af37" />
      <pointLight position={[-5, -5, -5]} intensity={80} color="#ffffff" />
      <ambientLight intensity={1.2} />
    </group>
  );
}

export function Hero() {
  const [scrollFactor, setScrollFactor] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const max = 1000;
      const y = window.scrollY;
      setScrollFactor(Math.max(0, Math.min(1, y / max)));
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[120vh] overflow-visible"
    >
      {/* Fullscreen 3D Background */}
      <div className="fixed inset-0 z-0 h-screen w-full">
        <div className="absolute inset-0 bg-radial" />
        <Canvas
          camera={{ position: [0, 0, 8], fov: 45 }}
          className="h-full w-full"
        >
          <MarketingOrb scrollFactor={scrollFactor} />
        </Canvas>
        {/* Cinematic Overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-lux-bg" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,#fdfcf8_100%)] opacity-60" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 mx-auto flex min-h-screen w-[min(1120px,100%-1.5rem)] flex-col items-center justify-center pt-32 text-center">
        <div className="flex max-w-4xl flex-col items-center gap-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-lux-gold-dark"
          >
            <span className="h-px w-8 bg-lux-gold/40" />
            Premium 360° Marketing Studio
            <span className="h-px w-8 bg-lux-gold/40" />
          </motion.p>

          <div className="relative flex justify-center">
            <SplitText
              text="Grow Your Brand with 360° Marketing Solutions"
              className="font-heading text-5xl leading-[1.05] sm:text-7xl lg:text-8xl font-black text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] text-center"
            />
            <div className="absolute inset-0 -z-10 blur-[120px] opacity-20 bg-black scale-125" />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="max-w-2xl text-base leading-relaxed text-white sm:text-xl font-medium drop-shadow-md"
          >
            We don't just run ads. We architect demand through cinematic content,
            high-performance digital strategy, and unforgettable physical experiences.
            Welcome to the new era of brand building.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col gap-6 sm:flex-row sm:items-center"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-black px-10 py-5 text-[11px] font-black uppercase tracking-[0.25em] text-white shadow-2xl transition hover:bg-lux-gold hover:text-black hover:scale-105"
            >
              Get Your Free Marketing Strategy
            </a>
            <a
              href="#portfolio"
              className="glass inline-flex items-center justify-center rounded-full px-10 py-5 text-[11px] font-black uppercase tracking-[0.2em] text-black shadow-sm transition hover:border-lux-gold hover:bg-lux-gold/5 hover:scale-105"
            >
              Start Your Growth Journey
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-12 flex flex-col items-center gap-4"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-zinc-100" />
              ))}
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
              Trusted by <span className="text-black">50+ Global Brands</span>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom spacer to allow scroll effect visibility */}
      <div className="h-[40vh]" />
    </section>
  );
}
