"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { fadeInLeft, fadeInRight } from "@/utils/animations";
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { SITE_CONFIG } from "@/utils/constants";

const ContactSection = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <SectionTitle
          badge="Wakad, Pune — Opp. Phoenix Mall"
          subtitle="Book Appointment"
          title='Get In <span class="text-gradient">Touch</span> With Zircon Dental'
          description="Visit our state-of-the-art clinic at Wakad or call us to book your appointment. Free consultation available."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div className="lg:col-span-2" variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="bg-dark-950 rounded-2xl p-8 h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl" />
              <h3 className="text-xl font-heading font-bold text-white mb-2">Contact Information</h3>
              <p className="text-gray-400 text-sm mb-8">Reach out to us — we&apos;re here to help!</p>
              <div className="space-y-6 relative">
                <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-start gap-4 text-gray-400 text-sm hover:text-primary-400 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0"><FiPhone className="w-5 h-5 text-primary-400" /></div>
                  <div><p className="text-white text-xs font-semibold uppercase tracking-wider mb-1">Call Us</p>{SITE_CONFIG.phone}</div>
                </a>
                <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 text-gray-400 text-sm hover:text-green-400 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0"><FaWhatsapp className="w-5 h-5 text-green-400" /></div>
                  <div><p className="text-white text-xs font-semibold uppercase tracking-wider mb-1">WhatsApp</p>Chat with us instantly</div>
                </a>
                <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-start gap-4 text-gray-400 text-sm hover:text-primary-400 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0"><FiMail className="w-5 h-5 text-primary-400" /></div>
                  <div><p className="text-white text-xs font-semibold uppercase tracking-wider mb-1">Email</p>{SITE_CONFIG.email}</div>
                </a>
                <a href={SITE_CONFIG.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 text-gray-400 text-sm hover:text-primary-400 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0"><FiMapPin className="w-5 h-5 text-primary-400" /></div>
                  <div><p className="text-white text-xs font-semibold uppercase tracking-wider mb-1">Visit Us</p>Shop No. 72, Western Avenue,<br />Opp. Phoenix Mall Road, Wakad, Pune</div>
                </a>
                <div className="flex items-start gap-4 text-gray-400 text-sm">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0"><FiClock className="w-5 h-5 text-primary-400" /></div>
                  <div><p className="text-white text-xs font-semibold uppercase tracking-wider mb-1">Hours</p>Mon-Fri: {SITE_CONFIG.workingHours.weekdays}<br />Sat: {SITE_CONFIG.workingHours.saturday}<br />Sun: {SITE_CONFIG.workingHours.sunday}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div className="lg:col-span-3" variants={fadeInRight} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><label className="block text-sm font-medium text-dark-900 mb-2">First Name</label><input type="text" placeholder="John" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all" /></div>
                <div><label className="block text-sm font-medium text-dark-900 mb-2">Last Name</label><input type="text" placeholder="Doe" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all" /></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><label className="block text-sm font-medium text-dark-900 mb-2">Email</label><input type="email" placeholder="john@example.com" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all" /></div>
                <div><label className="block text-sm font-medium text-dark-900 mb-2">Phone</label><input type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all" /></div>
              </div>
              <div><label className="block text-sm font-medium text-dark-900 mb-2">Treatment Interest</label>
                <select className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-gray-500">
                  <option value="">Select a treatment</option>
                  <option>Dental Implants</option><option>Advanced Implants / All-on-4</option><option>Root Canal</option><option>Smile Design</option><option>Teeth Whitening</option><option>Crowns & Bridges</option><option>Orthodontics / Braces</option><option>Oral Surgery</option><option>General Checkup</option><option>Other</option>
                </select>
              </div>
              <div><label className="block text-sm font-medium text-dark-900 mb-2">Message</label><textarea rows={4} placeholder="Tell us about your dental concerns..." className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all resize-none" /></div>
              <motion.button type="submit" className="btn-primary w-full md:w-auto" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <FiSend className="w-4 h-4 mr-2" /> Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;