"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FiChevronDown, FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { navigationItems } from "@/data/navigation";
import { SITE_CONFIG } from "@/utils/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-dark-950/60 backdrop-blur-sm z-[90]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-md bg-white z-[95] overflow-y-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className="p-6 pt-20">
              {/* Logo */}
              <div className="mb-8 pb-6 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-primary-gradient flex items-center justify-center">
                    <span className="text-lg">🦷</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-heading font-bold">
                      <span className="text-primary-500">Z</span>IRCON
                    </h2>
                    <p className="text-[8px] text-gold-600 tracking-[0.2em] uppercase">
                      Dental & Implant Clinic
                    </p>
                  </div>
                </div>
              </div>

              {/* Nav Items */}
              <nav className="space-y-1 mb-8">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.children ? (
                      <div>
                        <button
                          className="w-full flex items-center justify-between py-3 px-4 text-dark-900 hover:text-primary-500 hover:bg-primary-50 rounded-xl transition-all font-medium"
                          onClick={() =>
                            setExpandedItem(
                              expandedItem === item.label
                                ? null
                                : item.label
                            )
                          }
                        >
                          {item.label}
                          <FiChevronDown
                            className={`w-4 h-4 transition-transform ${
                              expandedItem === item.label
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {expandedItem === item.label && (
                            <motion.div
                              className="pl-4 overflow-hidden"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  onClick={onClose}
                                  className="flex items-center gap-3 py-2.5 px-4 text-sm text-gray-600 hover:text-primary-500 transition-colors"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary-300" />
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="block py-3 px-4 text-dark-900 hover:text-primary-500 hover:bg-primary-50 rounded-xl transition-all font-medium"
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>

              {/* CTA */}
              <div className="space-y-3 mb-8">
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="btn-primary w-full text-center"
                >
                  Book Appointment
                </Link>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 pt-6 border-t border-gray-100">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center gap-3 text-sm text-gray-600 hover:text-primary-500"
                >
                  <FiPhone className="w-4 h-4" />
                  {SITE_CONFIG.phone}
                </a>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-3 text-sm text-gray-600 hover:text-primary-500"
                >
                  <FiMail className="w-4 h-4" />
                  {SITE_CONFIG.email}
                </a>
                <a
                  href={SITE_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-gray-600 hover:text-primary-500"
                >
                  <FiMapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>{SITE_CONFIG.shortAddress}</span>
                </a>
              </div>

              {/* Social */}
              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-100">
                {[FaInstagram, FaFacebookF, FaYoutube].map(
                  (Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary-500 hover:text-white transition-all"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;