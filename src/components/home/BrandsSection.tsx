"use client";

import { motion } from "framer-motion";

const brands = ["NOBEL BIOCARE", "STRAUMANN", "DENTSPLY", "3M", "IVOCLAR", "OSSTEM", "INVISALIGN", "KERR"];

const BrandsSection = () => {
  return (
    <section className="py-16 bg-white border-y border-gray-100 overflow-hidden">
      <div className="container-custom mb-8">
        <motion.div className="text-center" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-sm text-gray-400 uppercase tracking-[0.25em] font-medium">
            We Use Only <span className="text-primary-500 font-semibold">Premium</span> International Brands
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        <motion.div className="flex gap-16 items-center whitespace-nowrap" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
          {[...brands, ...brands].map((brand, index) => (
            <div key={index} className="text-2xl md:text-3xl font-heading font-bold text-gray-200 hover:text-primary-300 transition-colors cursor-default flex-shrink-0">{brand}</div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandsSection;