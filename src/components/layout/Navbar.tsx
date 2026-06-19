"use client";

import { useState, useEffect } from "react";
import { motion} from "framer-motion";
import Link from "next/link";
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
} from "react-icons/fi";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

import { navigationItems } from "@/data/navigation";
import { SITE_CONFIG } from "@/utils/constants";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // ✅ Optimized scroll handler (RAF throttled)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* FIXED WRAPPER */}
      <div className="fixed top-0 left-0 right-0 z-[100]">
        {/* TOP BAR */}
        <motion.div
          className={`hidden lg:block transition-all duration-500 overflow-hidden ${
            isScrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
          }`}
          initial={{ y: -40 }}
          animate={{ y: 0 }}
        >
          <div className="bg-dark-950 text-white/80 text-xs border-b border-white/5">
            <div className="container-custom flex items-center justify-between py-2.5">

              {/* LEFT INFO */}
              <div className="flex items-center divide-x divide-white/10">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center gap-2 pr-4 hover:text-primary-400 transition-colors"
                >
                  <FiPhone className="w-3 h-3 text-primary-400" />
                  {SITE_CONFIG.phone}
                </a>

                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-2 px-4 hover:text-primary-400 transition-colors"
                >
                  <FiMail className="w-3 h-3 text-primary-400" />
                  {SITE_CONFIG.email}
                </a>

                <span className="flex items-center gap-2 px-4">
                  <FiClock className="w-3 h-3 text-primary-400" />
                  Mon - Sat: {SITE_CONFIG.workingHours.weekdays}
                </span>

                <a
                  href={SITE_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 pl-4 hover:text-primary-400 transition-colors"
                >
                  <FiMapPin className="w-3 h-3 text-primary-400" />
                  Wakad, Pune
                </a>
              </div>

              {/* SOCIAL */}
              <div className="flex items-center gap-4">
                <span className="text-white/40 mr-2">Follow Us:</span>

                {[
                  { icon: FaInstagram, href: SITE_CONFIG.social.instagram },
                  { icon: FaFacebookF, href: SITE_CONFIG.social.facebook },
                  { icon: FaYoutube, href: SITE_CONFIG.social.youtube },
                  { icon: FaTwitter, href: SITE_CONFIG.social.twitter },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-500 transition-all"
                  >
                    <social.icon className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* MAIN NAV */}
        <motion.header
          className={`transition-all duration-500 ${
            isScrolled
              ? "bg-white/95 backdrop-blur-xl shadow-premium py-2"
              : "bg-dark-950/30 backdrop-blur-md py-3 border-b border-white/5"
          }`}
        >
          <div className="container-custom">
            <div className="flex items-center justify-between">

              {/* LOGO */}
              <Link href="/">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                      isScrolled
                        ? "bg-primary-gradient"
                        : "bg-white/10 border border-white/20"
                    }`}
                  >
                    🦷
                  </div>

                  <div>
                    <h1
                      className={`text-xl font-bold ${
                        isScrolled ? "text-dark-900" : "text-white"
                      }`}
                    >
                      <span className="text-primary-500">Z</span>IRCON
                    </h1>
                    <p className="text-[10px] tracking-widest text-gold-400">
                      Dental Clinic
                    </p>
                  </div>
                </div>
              </Link>

              {/* NAV ITEMS */}
              <nav className="hidden lg:flex items-center gap-1">
                {navigationItems.map((item, index) => (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className="px-4 py-2 text-sm text-white/90 hover:text-white rounded-lg hover:bg-white/10 flex items-center gap-1"
                    >
                      {item.label}
                      {item.children && (
                        <FiChevronDown className="w-3 h-3" />
                      )}
                    </Link>

                    {/* DROPDOWN (stable, no mount/unmount flicker) */}
                    {item.children && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{
                          opacity:
                            activeDropdown === item.label ? 1 : 0,
                          y: activeDropdown === item.label ? 0 : 10,
                          pointerEvents:
                            activeDropdown === item.label
                              ? "auto"
                              : "none",
                        }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border mt-2"
                      >
                        <div className="p-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block px-4 py-2 text-sm hover:bg-primary-50 rounded-lg"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                ))}
              </nav>

              {/* CTA */}
              <div className="hidden lg:flex items-center gap-4">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center gap-2 text-sm text-white"
                >
                  <FiPhone />
                  {SITE_CONFIG.phone}
                </a>

                <Link
                  href="/contact"
                  className="px-5 py-2 bg-primary-600 text-white rounded-full text-xs font-semibold hover:bg-primary-700 transition"
                >
                  Book Appointment
                </Link>
              </div>

              {/* MOBILE */}
              <button
                className="lg:hidden"
                onClick={() =>
                  setIsMobileMenuOpen((prev) => !prev)
                }
              >
                {isMobileMenuOpen ? (
                  <FiX className="text-white w-6 h-6" />
                ) : (
                  <FiMenu className="text-white w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </motion.header>
      </div>

      {/* MOBILE MENU */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export default Navbar;