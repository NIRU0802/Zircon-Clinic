"use client";

import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <Layout>
      <section className="relative pt-32 pb-20 bg-dark-950">
        <div className="container-custom text-center">
          <motion.h1 className="heading-xl text-white mb-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            Terms of <span className="text-gradient">Service</span>
          </motion.h1>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <p className="text-sm text-gray-400 mb-8">Last updated: January 2025</p>
          <h2 className="text-2xl font-heading font-bold mb-4">Terms & Conditions</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">By using Zircon Dental & Implant Clinic&apos;s website and services, you agree to these terms. Please read carefully before booking any appointment.</p>
          <h3 className="text-xl font-heading font-bold mb-3">Appointments</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">Appointments are subject to availability. We request 24 hours notice for cancellations. Repeated no-shows may require a booking deposit.</p>
          <h3 className="text-xl font-heading font-bold mb-3">Treatment Consent</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">All treatments require informed consent. Our doctors explain the procedure, risks, and expected outcomes before proceeding. You may ask questions and refuse treatment at any time.</p>
          <h3 className="text-xl font-heading font-bold mb-3">Pricing</h3>
          <p className="text-gray-600 leading-relaxed">All prices are indicative and may vary based on individual case complexity. Final pricing is provided after consultation. EMI options are subject to bank approval.</p>
        </div>
      </section>
    </Layout>
  );
}