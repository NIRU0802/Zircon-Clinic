// src/components/home/Particles.tsx
"use client";

import { motion } from "framer-motion";

// ✅ Generated once at module level — stable across re-renders
const PARTICLES = Array.from({ length: 20 }).map(() => ({
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: 3 + Math.random() * 5,
  delay: Math.random() * 5,
}));

export default function Particles() {
  return (
    <>
      {PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-gold-400/30"
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
          }}
        />
      ))}
    </>
  );
}