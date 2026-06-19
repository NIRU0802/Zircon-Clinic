"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { SITE_CONFIG } from "@/utils/constants";

const FloatingWhatsApp = () => {
  const message = encodeURIComponent(
    "Hi! I'd like to book an appointment at Zircon Dental & Implant Clinic, Wakad."
  );

  return (
    <motion.a
      href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-28 right-8 z-50 w-14 h-14 rounded-full bg-green-500 text-white shadow-lg flex items-center justify-center group hover:bg-green-600 transition-colors hover:scale-110"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <FaWhatsapp className="w-7 h-7" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full" />
      <span className="absolute right-full mr-3 px-3 py-2 bg-dark-900 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Book on WhatsApp!
        <span className="absolute top-1/2 -translate-y-1/2 -right-1 w-2 h-2 bg-dark-900 rotate-45" />
      </span>
    </motion.a>
  );
};

export default FloatingWhatsApp;