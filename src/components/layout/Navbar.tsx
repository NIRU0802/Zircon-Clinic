"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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
} from "react-icons/fa";
import { navigationItems } from "@/data/navigation";
import { SITE_CONFIG } from "@/utils/constants";
import GradientButton from "@/components/ui/GradientButton";
import MobileMenu from "./MobileMenu";

// Categorized structure for the Treatments mega menu.
// Match these labels against your existing navigationItems "Treatments" children.
const treatmentCategories = [
  {
    title: "Implant Solutions",
    emoji: "🦷",
    items: [
      { label: "Immediate Load Implants", href: "/treatments/immediate-load-implants" },
      { label: "Dental Implants", href: "/treatments/dental-implants" },
      { label: "Advanced Implants", href: "/treatments/advanced-implants" },
    ],
  },
  {
    title: "Cosmetic Dentistry",
    emoji: "✨",
    items: [
      { label: "Smile Design", href: "/treatments/smile-design" },
      { label: "Teeth Whitening", href: "/treatments/teeth-whitening" },
    ],
  },
  {
    title: "Restorative Care",
    emoji: "🦷",
    items: [
      { label: "Root Canal", href: "/treatments/root-canal" },
      { label: "Crowns & Bridges", href: "/treatments/crowns-bridges" },
    ],
  },
  {
    title: "General Care",
    emoji: "👨‍👩‍👧",
    items: [
      { label: "Orthodontics", href: "/treatments/orthodontics" },
      { label: "Child Dentistry", href: "/treatments/child-dentistry" },
      { label: "Oral Surgery", href: "/treatments/oral-surgery" },
    ],
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const phoneHref = "tel:" + SITE_CONFIG.phone;
  const mailHref = "mailto:" + SITE_CONFIG.email;

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[100]">

        {/* TOP BAR */}
        <motion.div
          className={
            "hidden lg:block transition-all duration-500 overflow-hidden " +
            (isScrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100")
          }
          initial={{ y: -40 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-dark-950 text-white/80 text-xs border-b border-white/5">
            <div className="container-custom flex items-center justify-between py-2.5">
              <div className="flex items-center divide-x divide-white/10">


                <a
                  href={phoneHref}
                  className="flex items-center gap-2 pr-4 hover:text-primary-400 transition-colors"
                >
                  <FiPhone className="w-3 h-3 text-primary-400" />
                  {SITE_CONFIG.phone}
                </a>


                <a
                  href={mailHref}
                  className="flex items-center gap-2 px-4 hover:text-primary-400 transition-colors"
                >
                  <FiMail className="w-3 h-3 text-primary-400" />
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
                  className="flex items-center gap-2 pl-4 hover:text-primary-400 transition-colors"
                >
                  <FiMapPin className="w-3 h-3 text-gold-400" />
                  Wakad, Pune (Opp. Phoenix Mall)
                </a>

              </div>

              <div className="flex items-center gap-4">
                <span className="text-white/40 mr-2">Follow Us:</span>
                {[
                  { icon: FaInstagram, href: SITE_CONFIG.social.instagram },
                  { icon: FaFacebookF, href: SITE_CONFIG.social.facebook },
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
            </div >
          </div >
        </motion.div >

        {/* MAIN NAVBAR */}
        < motion.header
          className={
            "transition-all duration-500 " +
            (isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-3")
          }
          initial={{ y: -60 }
          }
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="container-custom">
            <div className="flex items-center justify-between">

              {/* LOGO */}
              <Link href="/" className="relative z-10">
                <motion.div
                  className="flex items-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <Image
                    src={isScrolled ? "/images/Logo.png" : "/images/Logo-white (1).png"}
                    alt="Zircon Dental and Implant Clinic"
                    width={160}
                    height={48}
                    className={
                      "object-contain transition-all duration-500 " +
                      (isScrolled ? "h-10 w-auto" : "h-12 w-auto")
                    }
                    priority
                  />
                </motion.div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-0.5">
                {navigationItems.map((item) => {
                  const isTreatments = item.label === "Treatments";

                  return (
                    <div
                      key={item.label}
                      className="relative group"
                      onMouseEnter={() =>
                        item.children
                          ? setActiveDropdown(item.label)
                          : setActiveDropdown(null)
                      }
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <Link
                        href={item.href}
                        className={
                          "flex items-center gap-1 px-3 xl:px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg " +
                          (isScrolled
                            ? "text-gray-800 hover:text-primary-600 hover:bg-primary-50"
                            : "text-white hover:text-white hover:bg-white/10")
                        }
                      >
                        {item.label}
                        {item.children && (
                          <FiChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                        )}
                      </Link>

                      {item.children && (
                        <AnimatePresence>
                          {activeDropdown === item.label && (
                            isTreatments ? (
                              /* ===== 2-COLUMN MEGA MENU (Treatments) ===== */
                              <motion.div
                                className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[640px] bg-white rounded-2xl shadow-premium-lg overflow-hidden border border-gray-100"
                                initial={{ opacity: 0, y: 10, scale: 0.97 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.97 }}
                                transition={{ duration: 0.2 }}
                              >
                                {/* Header */}
                                <div className="px-6 py-5 border-b border-gray-100 text-center">
                                  <h3 className="text-xl font-semibold tracking-tight text-gray-900">
                                    Our Treatments
                                  </h3>

                                  <p className="mt-1 text-sm text-gray-500">
                                    Find the right treatment for your smile
                                  </p>
                                </div>

                                {/* 2-column grid of categories */}
                                <div className="grid grid-cols-2 divide-x divide-gray-100">
                                  {treatmentCategories.map((category) => (
                                    <div
                                      key={category.title}
                                      className="p-5 border-b border-gray-100"
                                    >
                                      <div className="flex items-center gap-2 mb-3">
                                        <span className="text-lg leading-none">
                                          {category.emoji}
                                        </span>
                                        <span className="text-xs font-bold uppercase tracking-wide text-gray-500">
                                          {category.title}
                                        </span>
                                      </div>
                                      <div className="flex flex-col gap-1">
                                        {category.items.map((child) => (
                                          <Link
                                            key={child.label}
                                            href={child.href}
                                            className="flex items-center gap-2 px-2 py-2 text-sm text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200 group/item"
                                          >
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary-200 group-hover/item:bg-primary-500 group-hover/item:scale-125 transition-all" />
                                            {child.label}
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  ))}
                                </div>

                                {/* CTA footer */}
                                <div className="bg-primary-50 px-6 py-4 border-t border-primary-100 flex items-center justify-center">
                                  <Link
                                    href="/contact"
                                    className="text-xs font-semibold text-primary-600 hover:text-primary-700 transition-colors flex items-center gap-1"
                                  >
                                    Book a Consultation
                                    <FiChevronDown className="w-3 h-3 -rotate-90" />
                                  </Link>
                                </div>
                              </motion.div>
                            ) : (
                              /* ===== SIMPLE DROPDOWN (other nav items) ===== */
                              <motion.div
                                className="absolute top-full left-0 mt-1 w-64 bg-white rounded-2xl shadow-premium-lg overflow-hidden border border-gray-100"
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                              >
                                <div className="p-2">
                                  {item.children.map((child) => (
                                    <Link
                                      key={child.label}
                                      href={child.href}
                                      className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-200 group/item"
                                    >
                                      <span className="w-2 h-2 rounded-full bg-primary-200 group-hover/item:bg-primary-500 group-hover/item:scale-125 transition-all" />
                                      {child.label}
                                    </Link>
                                  ))}
                                </div>
                                <div className="bg-primary-50 px-4 py-3 border-t border-primary-100">
                                  <Link
                                    href={item.href}
                                    className="text-xs font-semibold text-primary-600 hover:text-primary-700 transition-colors flex items-center gap-1"
                                  >
                                    View All {item.label}
                                    <FiChevronDown className="w-3 h-3 -rotate-90" />
                                  </Link>
                                </div>
                              </motion.div>
                            )
                          )}
                        </AnimatePresence>
                      )}
                    </div>
                  );
                })}
              </nav>

              {/* CTA Buttons */}
              <div className="hidden lg:flex items-center gap-3">

                <a
                  href={phoneHref}
                  className={
                    "flex items-center gap-2 text-sm font-medium transition-colors " +
                    (isScrolled
                      ? "text-gray-800 hover:text-primary-600"
                      : "text-white hover:text-primary-300")
                  }
                >
                  <div
                    className={
                      "w-8 h-8 rounded-full flex items-center justify-center " +
                      (isScrolled ? "bg-primary-50" : "bg-white/10")
                    }
                  >
                    <FiPhone className="w-3.5 h-3.5" />
                  </div>
                  <span className="hidden xl:inline">Call Us</span>
                </a>

                <Link
                  href="/contact"
                  className="relative inline-flex items-center justify-center px-6 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-primary-600 rounded-full overflow-hidden transition-all duration-500 hover:bg-primary-700 hover:shadow-primary hover:-translate-y-0.5 group"
                >
                  <span className="relative z-10">Book Appointment</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden relative z-10 w-10 h-10 flex items-center justify-center rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <FiX
                    className={
                      "w-6 h-6 " +
                      (isScrolled ? "text-gray-900" : "text-white")
                    }
                  />
                ) : (
                  <FiMenu
                    className={
                      "w-6 h-6 " +
                      (isScrolled ? "text-gray-900" : "text-white")
                    }
                  />
                )}
              </button>

            </div>
          </div >
        </motion.header >
      </div >

      {/* Mobile Menu */}
      < MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export default Navbar;