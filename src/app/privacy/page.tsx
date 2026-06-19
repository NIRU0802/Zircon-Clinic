"use client";

import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <Layout>
      <section className="relative pt-32 pb-20 bg-dark-950">
        <div className="container-custom text-center">
          <motion.h1 className="heading-xl text-white mb-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            Privacy <span className="text-gradient">Policy</span>
          </motion.h1>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <p className="text-sm text-gray-400 mb-8">Last updated: January 2025</p>
          <h2 className="text-2xl font-heading font-bold mb-4">Your Privacy Matters</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">At Zircon Dental & Implant Clinic, Wakad, Pune, we are committed to protecting your personal information. This policy describes how we collect, use, and safeguard your data.</p>
          <h3 className="text-xl font-heading font-bold mb-3">Information We Collect</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">We collect information you provide when booking appointments, filling forms, or contacting us — including name, email, phone, and dental history relevant to treatment.</p>
          <h3 className="text-xl font-heading font-bold mb-3">How We Use Your Information</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">Your information is used solely for providing dental services, scheduling appointments, sending reminders, and improving our services. We never sell your data.</p>
          <h3 className="text-xl font-heading font-bold mb-3">Data Security</h3>
          <p className="text-gray-600 leading-relaxed">We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure.</p>
        </div>
      </section>
    </Layout>
  );
}