"use client";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
} from "@/utils/animations";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiSend,
  FiNavigation,
  FiExternalLink,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { SITE_CONFIG } from "@/utils/constants";
import SectionTitle from "@/components/ui/SectionTitle";

export default function ContactPage() {
  const phoneHref = "tel:" + SITE_CONFIG.phone;
  const mailHref = "mailto:" + SITE_CONFIG.email;
  const waHref = "https://wa.me/" + SITE_CONFIG.whatsapp;
  const waHrefWithText = "https://wa.me/" + SITE_CONFIG.whatsapp + "?text=" + encodeURIComponent("Hello! I'd like to book an appointment at Zircon Dental.");

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-dark-950 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2000"
            alt="Contact"
            fill
            sizes="100vw"
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/60 to-dark-950" />
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="blur-blob w-[400px] h-[400px] bg-primary-500/8 -top-32 -right-32" />
        </div>

        <div className="container-custom relative text-center">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <FiMapPin className="w-3 h-3 text-primary-400" />
            <span className="text-xs text-white/80 font-medium tracking-wider uppercase">
              Wakad, Pune â€” Opp. Phoenix Mall Road
            </span>
          </motion.div>

          <motion.h1
            className="heading-xl text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h1>

          <motion.p
            className="text-gray-400 max-w-2xl mx-auto text-lg font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Visit our state-of-the-art clinic at Wakad or reach out to
            us. We&apos;d love to hear from you!
          </motion.p>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-12 bg-white -mt-10 relative z-10">
        <div className="container-custom">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 -mt-20"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Call */}
            <motion.a
              href={phoneHref}
              variants={staggerItem}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-premium hover:shadow-premium-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary-gradient flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <FiPhone className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading font-bold text-dark-900 mb-1">
                  Call Us
                </h3>
                <p className="text-primary-600 font-semibold text-sm">
                  {SITE_CONFIG.phone}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Available Mon-Sun
                </p>
              </div>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href={waHrefWithText}
              target="_blank"
              rel="noopener noreferrer"
              variants={staggerItem}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-premium hover:shadow-premium-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 text-center">
                <div className="w-14 h-14 rounded-2xl bg-green-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <FaWhatsapp className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading font-bold text-dark-900 mb-1">
                  WhatsApp
                </h3>
                <p className="text-green-600 font-semibold text-sm">
                  {SITE_CONFIG.phone}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Instant Response
                </p>
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              href={mailHref}
              variants={staggerItem}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-premium hover:shadow-premium-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 text-center">
                <div className="w-14 h-14 rounded-2xl bg-blue-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <FiMail className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading font-bold text-dark-900 mb-1">
                  Email Us
                </h3>
                <p className="text-blue-600 font-semibold text-sm break-all">
                  {SITE_CONFIG.email}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  24hr Response
                </p>
              </div>
            </motion.a>

            {/* Visit */}
            <motion.a
              href={SITE_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              variants={staggerItem}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-premium hover:shadow-premium-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 text-center">
                <div className="w-14 h-14 rounded-2xl bg-gold-gradient flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <FiMapPin className="w-6 h-6 text-dark-900" />
                </div>
                <h3 className="font-heading font-bold text-dark-900 mb-1">
                  Visit Us
                </h3>
                <p className="text-gold-700 font-semibold text-sm">
                  Wakad, Pune
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Opp. Phoenix Mall
                </p>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            subtitle="Book Appointment"
            title='Schedule Your <span class="text-gradient">Visit</span> Today'
            description="Fill out the form below and our team will get back to you within 2 hours."
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info Panel */}
            <motion.div
              className="lg:col-span-2"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="bg-dark-950 rounded-2xl p-8 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl" />

                <h3 className="text-xl font-heading font-bold text-white mb-2">
                  Contact Information
                </h3>
                <p className="text-gray-500 text-sm mb-8">
                  Reach out to us â€” we&apos;re here to help!
                </p>

                <div className="space-y-5 relative">
                  {/* Phone */}
                  <a
                    href={phoneHref}
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/30 transition-colors">
                      <FiPhone className="w-5 h-5 text-primary-400" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold mb-0.5">
                        Call Us
                      </p>
                      <p className="text-white font-semibold text-sm">
                        {SITE_CONFIG.phone}
                      </p>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-green-500/10 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/30 transition-colors">
                      <FaWhatsapp className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold mb-0.5">
                        WhatsApp
                      </p>
                      <p className="text-white font-semibold text-sm">
                        {SITE_CONFIG.phone}
                      </p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={mailHref}
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-blue-500/10 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/30 transition-colors">
                      <FiMail className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold mb-0.5">
                        Email Us
                      </p>
                      <p className="text-white font-semibold text-sm">
                        {SITE_CONFIG.email}
                      </p>
                    </div>
                  </a>

                  {/* Address */}
                  <a
                    href={SITE_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/30 transition-colors">
                      <FiMapPin className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold mb-0.5">
                        Visit Us
                      </p>
                      <p className="text-white text-sm leading-relaxed">
                        Shop No. 72, Western Avenue,
                        <br />
                        Opp. Phoenix Mall Road,
                        <br />
                        Wakad, Pune - 411057
                      </p>
                    </div>
                  </a>

                  {/* Hours */}
                  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <FiClock className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold mb-0.5">
                        Working Hours
                      </p>
                      <div className="text-white text-sm space-y-0.5">
                        <p>
                          Mon-Fri:{" "}
                          <span className="text-gray-400">
                            {SITE_CONFIG.workingHours.weekdays}
                          </span>
                        </p>
                        <p>
                          Saturday:{" "}
                          <span className="text-gray-400">
                            {SITE_CONFIG.workingHours.saturday}
                          </span>
                        </p>
                        <p>
                          Sunday:{" "}
                          <span className="text-gray-400">
                            {SITE_CONFIG.workingHours.sunday}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-3"
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-dark-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-900 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-900 mb-2">
                    Treatment Interest *
                  </label>
                  <select
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-gray-500"
                    required
                  >
                    <option value="">Select a treatment</option>
                    <option>Dental Implants</option>
                    <option>Advanced Implants / All-on-4</option>
                    <option>Root Canal</option>
                    <option>Smile Design / Veneers</option>
                    <option>Teeth Whitening</option>
                    <option>Crowns & Bridges</option>
                    <option>Orthodontics / Braces</option>
                    <option>Oral Surgery</option>
                    <option>General Checkup & Cleaning</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-900 mb-2">
                    Preferred Date & Time
                  </label>
                  <input
                    type="datetime-local"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-900 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your dental concerns..."
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="btn-primary w-full md:w-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiSend className="w-4 h-4 mr-2" />
                  Book Appointment
                </motion.button>

                <p className="text-xs text-gray-400">
                  ✅ Free Consultation • ✅ We&apos;ll confirm within 2
                  hours • ✅ No obligation
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* iOS-Style Map Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            badge="Find Us Easily"
            subtitle="Our Location"
            title='Visit <span class="text-gradient">Zircon Dental</span> at Wakad, Pune'
            description="Conveniently located opposite Phoenix Mall Road in Wakad, Pimpri-Chinchwad."
          />

          {/* iOS-Style Map Card */}
          <motion.div
            className="max-w-5xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Map Container - iOS Style */}
            <div className="bg-white rounded-[2rem] shadow-premium-lg overflow-hidden border border-gray-200">
              {/* Map */}
              <div className="relative h-[400px] md:h-[500px]">
                <iframe
                  src={SITE_CONFIG.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />

                {/* iOS-style floating card on map */}
                <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-[360px]">
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-premium-lg p-5 border border-gray-100">
                    <div className="flex items-start gap-4">
                      {/* Logo */}
                      <div className="w-12 h-12 rounded-xl bg-primary-gradient flex items-center justify-center flex-shrink-0 shadow-primary">
                        <span className="text-xl">🦷</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-heading font-bold text-dark-900 text-sm">
                          Zircon Dental & Implant Clinic
                        </h3>
                        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                          Shop No. 72, Western Avenue,
                          <br />
                          Opp. Phoenix Mall Road, Wakad
                        </p>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex gap-0.5">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <span
                                key={i}
                                className="text-gold-400 text-xs"
                              >
                                ★
                              </span>
                            ))}
                          </div>
                          <span className="text-xs font-bold text-dark-900">
                            4.9
                          </span>
                          <span className="text-xs text-gray-400">
                            (500+ reviews)
                          </span>
                        </div>

                        {/* Status */}
                        <div className="flex items-center gap-2 mt-2">
                          <span className="w-2 h-2 rounded-full bg-green-500" />
                          <span className="text-xs font-medium text-green-600">
                            Open Now
                          </span>
                          <span className="text-xs text-gray-400">
                            • Closes 9 PM
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons - iOS style */}
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      <a
                        href={SITE_CONFIG.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-1 p-2.5 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
                      >
                        <FiNavigation className="w-4 h-4 text-blue-600" />
                        <span className="text-[10px] font-semibold text-blue-600">
                          Directions
                        </span>
                      </a>
                      <a
                        href={phoneHref}
                        className="flex flex-col items-center gap-1 p-2.5 bg-green-50 rounded-xl hover:bg-green-100 transition-colors"
                      >
                        <FiPhone className="w-4 h-4 text-green-600" />
                        <span className="text-[10px] font-semibold text-green-600">
                          Call
                        </span>
                      </a>
                      <a
                        href={SITE_CONFIG.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-1 p-2.5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                      >
                        <FiExternalLink className="w-4 h-4 text-gray-600" />
                        <span className="text-[10px] font-semibold text-gray-600">
                          Website
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Info Bar - iOS style */}
              <div className="p-5 bg-white border-t border-gray-100">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                      <FiMapPin className="w-5 h-5 text-primary-500" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-dark-900">
                        Near Phoenix Mall, Wakad
                      </p>
                      <p className="text-xs text-gray-500">
                        Pune, Maharashtra 411057
                      </p>
                    </div>
                  </div>
                  <a
                    href={SITE_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-full hover:bg-primary-700 transition-colors"
                  >
                    <FiNavigation className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Landmarks */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: "🏬",
                  name: "Phoenix Mall",
                  distance: "Opposite",
                },
                {
                  icon: "🚗",
                  name: "Free Parking",
                  distance: "Available",
                },
                {
                  icon: "🚌",
                  name: "Bus Stop",
                  distance: "2 min walk",
                },
                {
                  icon: "🚇",
                  name: "Hinjewadi",
                  distance: "10 min drive",
                },
              ].map((landmark, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm"
                >
                  <span className="text-2xl">{landmark.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-dark-900">
                      {landmark.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {landmark.distance}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}