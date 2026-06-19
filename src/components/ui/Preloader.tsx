"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) return;
  
    let start: number | null = null;
    let frame: number;
  
    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
  
      const progress = Math.min((timestamp - start) / 20, 100);
  
      setProgress(progress);
  
      if (progress < 100) {
        frame = requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setIsLoading(false);
          sessionStorage.setItem("zircon-preloader-shown", "true");
        }, 300);
      }
    };
  
    frame = requestAnimationFrame(animate);
  
    return () => cancelAnimationFrame(frame);
  }, [isLoading]);

  return (
    <AnimatePresence mode="wait">
    {isLoading && (
      <motion.div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-dark-950"
        exit={{
          clipPath: "circle(0% at 50% 50%)",
          transition: { duration: 1, ease: [0.77, 0, 0.175, 1] },
        }}
      >
          <div className="absolute inset-0 overflow-hidden">
            <div className="blur-blob w-96 h-96 bg-primary-500 top-1/4 left-1/4 animate-blob" />
            <div className="blur-blob w-96 h-96 bg-cta-600 bottom-1/4 right-1/4 animate-blob animation-delay-400" />
          </div>

          <motion.div
            className="relative z-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="w-20 h-20 rounded-2xl bg-primary-gradient flex items-center justify-center mx-auto mb-6 shadow-primary"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "backOut" }}
            >
              <span className="text-4xl">🦷</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-heading font-bold text-white mb-2"
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, letterSpacing: "0.2em" }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="text-primary-400">Z</span>IRCON
            </motion.h1>

            <motion.p
              className="text-primary-400/60 text-sm tracking-[0.3em] uppercase font-light mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Dental & Implant Clinic
            </motion.p>

            <div className="w-64 h-[2px] bg-white/10 rounded-full overflow-hidden mx-auto">
              <motion.div
                className="h-full bg-primary-gradient rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            <motion.p
              className="text-white/40 text-xs mt-4 tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {progress}%
            </motion.p>

            <motion.p
              className="text-white/20 text-xs mt-6 tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Wakad, Pune
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;