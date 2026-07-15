"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  FiPhone, FiMail, FiMapPin, FiArrowRight, FiSend, FiClock,
} from "react-icons/fi";
import {
  FaInstagram, FaFacebookF, FaYoutube, FaTwitter, FaLinkedinIn, FaWhatsapp,
} from "react-icons/fa";
import { SITE_CONFIG } from "@/utils/constants";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animations";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const phoneHref = "tel:" + SITE_CONFIG.phone;
  const mailHref = "mailto:" + SITE_CONFIG.email;
  const whatsappHref = "https://wa.me/" + SITE_CONFIG.whatsapp;

  const quickLinks = [
    { label: "About Us", href: "/about" },
    { label: "Treatments", href: "/treatments" },
    { label: "Pricing", href: "/pricing" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const treatmentLinks = [
    { label: "Dental Implants", href: "/treatments/dental-implants" },
    { label: "Advanced Implants", href: "/treatments/advanced-implants" },
    { label: "Root Canal", href: "/treatments/root-canal" },
    { label: "Smile Design", href: "/treatments/smile-design" },
    { label: "Teeth Whitening", href: "/treatments/teeth-whitening" },
    { label: "Crowns & Bridges", href: "/treatments/crowns-bridges" },
    { label: "Orthodontics", href: "/treatments/orthodontics" },
    { label: "Oral Surgery", href: "/treatments/oral-surgery" },
  ];

  const socials = [
    { icon: FaInstagram, href: SITE_CONFIG.social.instagram, label: "Instagram" },
    { icon: FaFacebookF, href: SITE_CONFIG.social.facebook, label: "Facebook" },
  ];

  return (
    <footer className="relative bg-dark-950 text-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blur-blob w-[500px] h-[500px] bg-primary-500/5 -top-64 -right-64" />
        <div className="blur-blob w-[400px] h-[400px] bg-gold-500/5 -bottom-32 -left-32" />
      </div>

      {/* Newsletter */}
      <div className="relative border-b border-white/5">
        <div className="container-custom py-16">
          <motion.div
            className="flex flex-col lg:flex-row items-center justify-between gap-8"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2">
                Subscribe to <span className="text-gold-400">Zircon Dental</span>
              </h3>
              <p className="text-gray-400 text-sm">Get dental tips, offers, and appointment reminders.</p>
            </div>
            <div className="flex w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-l-full text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
              />
              <button className="px-8 py-4 bg-primary-600 hover:bg-primary-700 rounded-r-full transition-colors flex items-center gap-2 text-sm font-semibold">
                <FiSend className="w-4 h-4" /> Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div variants={staggerItem} className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <Image
                src="/images/Logo-white (1).png"
                alt="Zircon Dental and Implant Clinic"
                width={140}
                height={44}
                className="h-11 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Pune&apos;s premier dental clinic at Wakad, offering world-class dental implants,
              cosmetic dentistry &amp; comprehensive dental care. Located opposite Phoenix Mall Road.
            </p>
            <div className="flex gap-3">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary-500 hover:border-primary-500 hover:text-white transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={staggerItem}>
            <h4 className="text-lg font-heading font-semibold mb-6 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-primary-500" /> Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-primary-400 transition-colors flex items-center gap-2 group"
                  >
                    <FiArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Treatments */}
          <motion.div variants={staggerItem}>
            <h4 className="text-lg font-heading font-semibold mb-6 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-primary-500" /> Treatments
            </h4>
            <ul className="space-y-3">
              {treatmentLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-primary-400 transition-colors flex items-center gap-2 group"
                  >
                    <FiArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={staggerItem}>
            <h4 className="text-lg font-heading font-semibold mb-6 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-primary-500" /> Visit Us
            </h4>
            <div className="space-y-4">

              <a
                href={phoneHref}
                className="flex items-start gap-4 text-gray-400 text-sm hover:text-primary-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/10 transition-colors">
                  <FiPhone className="w-4 h-4 text-primary-400" />
                </div>
                <div>
                  <p className="text-white text-xs font-semibold uppercase tracking-wider mb-1">Call Us</p>
                  {SITE_CONFIG.phone}
                </div>
              </a>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 text-gray-400 text-sm hover:text-green-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/10 transition-colors">
                  <FaWhatsapp className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <p className="text-white text-xs font-semibold uppercase tracking-wider mb-1">WhatsApp</p>
                  Chat with us
                </div>
              </a>

              <a
                href={mailHref}
                className="flex items-start gap-4 text-gray-400 text-sm hover:text-primary-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/10 transition-colors">
                  <FiMail className="w-4 h-4 text-primary-400" />
                </div>
                <div>
                  <p className="text-white text-xs font-semibold uppercase tracking-wider mb-1">Email</p>
                  {SITE_CONFIG.email}
                </div>
              </a>

              <a
                href={SITE_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 text-gray-400 text-sm hover:text-primary-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/10 transition-colors">
                  <FiMapPin className="w-4 h-4 text-primary-400" />
                </div>
                <div>
                  <p className="text-white text-xs font-semibold uppercase tracking-wider mb-1">Location</p>
                  Shop No. 72, Western Avenue,<br />
                  Opp. Phoenix Mall Road,<br />
                  Wakad, Pune - 411057
                </div>
              </a>

              <div className="flex items-start gap-4 text-gray-400 text-sm">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                  <FiClock className="w-4 h-4 text-primary-400" />
                </div>
                <div>
                  <p className="text-white text-xs font-semibold uppercase tracking-wider mb-1">Hours</p>
                  Mon-Fri: {SITE_CONFIG.workingHours.weekdays}<br />
                  Sat: {SITE_CONFIG.workingHours.saturday}<br />
                  Sun: {SITE_CONFIG.workingHours.sunday}
                </div>
              </div>

            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {currentYear} Zircon Dental &amp; Implant Clinic. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <Link href="/privacy" className="hover:text-primary-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;