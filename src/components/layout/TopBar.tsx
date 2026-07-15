"use client";

import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { SITE_CONFIG } from "@/utils/constants";

const TopBar = () => {
  return (
    <motion.div
      className="hidden lg:block bg-dark-950 text-white/80 text-xs border-b border-white/5"
      initial={{ y: -40 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-custom flex items-center justify-between py-2.5">
        <div className="flex items-center divide-x divide-white/10">
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="flex items-center gap-2 pr-4 hover:text-gold-400 transition-colors"
          >
            <FiPhone className="w-3 h-3" />
            {SITE_CONFIG.phone}
          </a>
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="flex items-center gap-2 px-4 hover:text-gold-400 transition-colors"
          >
            <FiMail className="w-3 h-3" />
            {SITE_CONFIG.email}
          </a>
          <span className="flex items-center gap-2 px-4">
            <FiClock className="w-3 h-3 text-gold-400" />
            Mon - Sat: {SITE_CONFIG.workingHours.weekdays}
          </span>
          <a
            href={SITE_CONFIG.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 pl-4 hover:text-gold-400 transition-colors"
          >
            <FiMapPin className="w-3 h-3 text-gold-400" />
            Wakad, Pune (Opp. Phoenix Mall)
          </a>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-white/40 mr-2">Follow Us:</span>
          {[
            {
              icon: FaInstagram,
              href: SITE_CONFIG.social.instagram,
            },
            {
              icon: FaFacebookF,
              href: SITE_CONFIG.social.facebook,
            },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all duration-300"
            >
              <social.icon className="w-3 h-3" />
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TopBar;