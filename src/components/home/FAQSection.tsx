"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { faqs } from "@/data/faq";
import SectionTitle from "@/components/ui/SectionTitle";
import { FiPlus, FiMinus } from "react-icons/fi";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <SectionTitle
          subtitle="Got Questions?"
          title='Frequently Asked <span class="text-gradient">Questions</span>'
          description="Find answers to common questions about dental treatments, pricing, and what to expect at Zircon Dental, Wakad, Pune."
        />

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div key={faq.id} className="mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
              <button
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${activeIndex === index ? "bg-primary-50 border border-primary-100" : "bg-gray-50 border border-transparent hover:bg-gray-100"}`}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${activeIndex === index ? "bg-primary-500 text-white" : "bg-white text-gray-400"}`}>
                      <span className="text-xs font-bold">{String(index + 1).padStart(2, "0")}</span>
                    </span>
                    <h3 className={`text-base font-semibold transition-colors ${activeIndex === index ? "text-primary-600" : "text-dark-900"}`}>{faq.question}</h3>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${activeIndex === index ? "bg-primary-500 text-white" : "bg-gray-200 text-gray-500"}`}>
                    {activeIndex === index ? <FiMinus className="w-4 h-4" /> : <FiPlus className="w-4 h-4" />}
                  </div>
                </div>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <p className="text-gray-500 text-sm leading-relaxed mt-4 pl-12">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;