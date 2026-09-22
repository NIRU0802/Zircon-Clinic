"use client";

import { motion } from "framer-motion";

import SectionTitle from "@/components/ui/SectionTitle";

import { fadeInLeft, fadeInRight } from "@/utils/animations";

import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiSend,
} from "react-icons/fi";

import { FaWhatsapp } from "react-icons/fa";

import { SITE_CONFIG } from "@/utils/constants";

const ContactSection = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <SectionTitle
          badge="Wakad, Pune — Opp. Phoenix Mall"
          subtitle="Appointment Request"
          title='Connect With <span class="text-gradient">Zircon Dental</span>'
          description="Visit our state-of-the-art clinic in Wakad or get in touch with our team to schedule your dental consultation."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* =====================================================
              CONTACT INFORMATION
          ===================================================== */}
          <motion.div
            className="lg:col-span-2"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-dark-950 rounded-2xl p-8 h-full relative overflow-hidden">
              {/* Decorative glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl" />

              <div className="relative">
                <h3 className="text-xl font-heading font-bold text-white mb-2">
                  Contact Our Clinic
                </h3>

                <p className="text-gray-400 text-sm mb-8">
                  Our team is here to assist you with your dental care needs.
                </p>

                <div className="space-y-6">
                  {/* =================================================
                      PHONE
                  ================================================= */}
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="flex items-start gap-4 text-gray-400 text-sm hover:text-primary-400 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/10 transition-colors">
                      <FiPhone className="w-5 h-5 text-primary-400" />
                    </div>

                    <div>
                      <p className="text-white text-xs font-semibold uppercase tracking-wider mb-1">
                        Call Our Clinic
                      </p>

                      <p>{SITE_CONFIG.phone}</p>
                    </div>
                  </a>

                  {/* =================================================
                      WHATSAPP
                  ================================================= */}
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 text-gray-400 text-sm hover:text-green-400 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/10 transition-colors">
                      <FaWhatsapp className="w-5 h-5 text-green-400" />
                    </div>

                    <div>
                      <p className="text-white text-xs font-semibold uppercase tracking-wider mb-1">
                        WhatsApp
                      </p>

                      <p>Chat with our team instantly</p>
                    </div>
                  </a>

                  {/* =================================================
                      EMAIL
                  ================================================= */}
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="flex items-start gap-4 text-gray-400 text-sm hover:text-primary-400 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/10 transition-colors">
                      <FiMail className="w-5 h-5 text-primary-400" />
                    </div>

                    <div>
                      <p className="text-white text-xs font-semibold uppercase tracking-wider mb-1">
                        Email
                      </p>

                      <p>{SITE_CONFIG.email}</p>
                    </div>
                  </a>

                  {/* =================================================
                      LOCATION
                  ================================================= */}
                  <a
                    href={SITE_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 text-gray-400 text-sm hover:text-primary-400 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/10 transition-colors">
                      <FiMapPin className="w-5 h-5 text-primary-400" />
                    </div>

                    <div>
                      <p className="text-white text-xs font-semibold uppercase tracking-wider mb-1">
                        Clinic Location
                      </p>

                      <p className="text-gray-300 text-sm leading-relaxed">
                        <span className="font-semibold text-white">
                          Zircon Dental & Implant Studio
                        </span>
                        <br />
                        Shop No. 72, Western Avenue,
                        <br />
                        Opp. Phoenix Mall Road,
                        <br />
                        Wakad, Pune 411057
                      </p>
                    </div>
                  </a>

                  {/* =================================================
                      CLINIC HOURS
                  ================================================= */}
                  <div className="flex items-start gap-4 text-gray-400 text-sm">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                      <FiClock className="w-5 h-5 text-primary-400" />
                    </div>

                    <div>
                      <p className="text-white text-xs font-semibold uppercase tracking-wider mb-1">
                        Clinic Hours
                      </p>

                      <p>
                        Mon-Fri: {SITE_CONFIG.workingHours.weekdays}
                        <br />
                        Sat: {SITE_CONFIG.workingHours.saturday}
                        <br />
                        Sun: {SITE_CONFIG.workingHours.sunday}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              APPOINTMENT FORM
          ===================================================== */}
          <motion.div
            className="lg:col-span-3"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div>
              <div className="mb-8">
                <p className="text-primary-600 text-xs font-semibold uppercase tracking-[0.18em] mb-2">
                  Appointment Details
                </p>

                <h3 className="text-2xl md:text-3xl font-heading font-bold text-dark-900">
                  Schedule Your Dental Consultation
                </h3>

                <p className="text-gray-500 text-sm mt-3 max-w-xl">
                  Fill out the form below and our team will get back to you
                  within 2 hours.
                </p>
              </div>

              <form className="space-y-6">
                {/* =================================================
                    FULL NAME
                ================================================= */}
                <div>
                  <label
                    htmlFor="contact-full-name"
                    className="block text-sm font-medium text-dark-900 mb-2"
                  >
                    Full Name <span className="text-primary-600">*</span>
                  </label>

                  <input
                    id="contact-full-name"
                    name="full_name"
                    type="text"
                    placeholder="Enter your full name"
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                  />
                </div>

                {/* =================================================
                    PHONE NUMBER
                ================================================= */}
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-sm font-medium text-dark-900 mb-2"
                  >
                    Phone Number{" "}
                    <span className="text-primary-600">*</span>
                  </label>

                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    required
                    minLength={10}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                  />
                </div>

                {/* =================================================
                    EMAIL
                ================================================= */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-dark-900 mb-2"
                  >
                    Email
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                  />
                </div>

                {/* =================================================
                    TREATMENT
                ================================================= */}
                <div>
                  <label
                    htmlFor="contact-treatment"
                    className="block text-sm font-medium text-dark-900 mb-2"
                  >
                    Treatment Interest{" "}
                    <span className="text-primary-600">*</span>
                  </label>

                  <select
                    id="contact-treatment"
                    name="treatment_interest"
                    required
                    defaultValue=""
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-gray-500"
                  >
                    <option value="" disabled>
                      Select a treatment
                    </option>

                    <option value="Dental Implants">
                      Dental Implants
                    </option>

                    <option value="Advanced Implants / All-on-4">
                      Advanced Implants / All-on-4
                    </option>

                    <option value="Root Canal">
                      Root Canal
                    </option>

                    <option value="Smile Design / Veneers">
                      Smile Design / Veneers
                    </option>

                    <option value="Teeth Whitening">
                      Teeth Whitening
                    </option>

                    <option value="Crowns & Bridges">
                      Crowns & Bridges
                    </option>

                    <option value="Orthodontics / Braces">
                      Orthodontics / Braces
                    </option>

                    <option value="Oral Surgery">
                      Oral Surgery
                    </option>

                    <option value="General Checkup & Cleaning">
                      General Checkup & Cleaning
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>

                {/* =================================================
                    PREFERRED DATE & TIME
                ================================================= */}
                <div>
                  <label
                    htmlFor="contact-preferred-date-time"
                    className="block text-sm font-medium text-dark-900 mb-2"
                  >
                    Preferred Date & Time
                  </label>

                  <input
                    id="contact-preferred-date-time"
                    name="preferred_date_time"
                    type="datetime-local"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-gray-600"
                  />

                  <p className="mt-2 text-xs text-gray-500">
                    Your preferred time is only a request. Our team will
                    contact you to confirm availability.
                  </p>
                </div>

                {/* =================================================
                    MESSAGE
                ================================================= */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-dark-900 mb-2"
                  >
                    Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Tell us anything you'd like our team to know..."
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all resize-none"
                  />
                </div>

                {/* =================================================
                    SUBMIT
                ================================================= */}
                <motion.button
                  type="submit"
                  className="btn-primary w-full md:w-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiSend className="w-4 h-4 mr-2" />
                  Book Appointment
                </motion.button>

                {/* =================================================
                    APPOINTMENT NOTE
                ================================================= */}
                <p className="text-xs text-gray-500 leading-relaxed">
                  ✅ Free Consultation • ✅ We'll confirm within 2 hours • ✅
                  No obligation
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;