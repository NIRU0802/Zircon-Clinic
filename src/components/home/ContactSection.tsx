"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { motion } from "framer-motion";

import SectionTitle from "@/components/ui/SectionTitle";
import { fadeInLeft, fadeInRight } from "@/utils/animations";

import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";

import { FaWhatsapp } from "react-icons/fa";
import { SITE_CONFIG } from "@/utils/constants";

type ContactFormData = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  treatment_interest: string;
  message: string;
  botcheck?: boolean;
};

const ContactSection = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitSuccessful,
      isSubmitting,
    },
  } = useForm<ContactFormData>({
    mode: "onTouched",
  });

  const accessKey =
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,

    settings: {
      from_name: "Zircon Dental & Implant Studio",
      subject: "New Dental Enquiry - Zircon Dental & Implant Studio",
    },

    onSuccess: (message) => {
      console.log("Web3Forms success:", message);

      setIsSuccess(true);
      setResponseMessage(
        message || "Message sent successfully!"
      );

      reset();
    },

    onError: (message) => {
      console.error("Web3Forms error:", message);

      setIsSuccess(false);
      setResponseMessage(
        message || "Something went wrong. Please try again."
      );
    },
  });

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
          {/* =========================================================
              CONTACT INFORMATION
          ========================================================= */}
          <motion.div
            className="lg:col-span-2"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-dark-950 rounded-2xl p-8 h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl" />

              <h3 className="text-xl font-heading font-bold text-white mb-2">
                Contact Information
              </h3>

              <p className="text-gray-400 text-sm mb-8">
                Reach out to us — we&apos;re here to help!
              </p>

              <div className="space-y-6 relative">
                {/* Phone */}
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-start gap-4 text-gray-400 text-sm hover:text-primary-400 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                    <FiPhone className="w-5 h-5 text-primary-400" />
                  </div>

                  <div>
                    <p className="text-white text-xs font-semibold uppercase tracking-wider mb-1">
                      Call Us
                    </p>

                    {SITE_CONFIG.phone}
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 text-gray-400 text-sm hover:text-green-400 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                    <FaWhatsapp className="w-5 h-5 text-green-400" />
                  </div>

                  <div>
                    <p className="text-white text-xs font-semibold uppercase tracking-wider mb-1">
                      WhatsApp
                    </p>

                    Chat with us instantly
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-start gap-4 text-gray-400 text-sm hover:text-primary-400 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                    <FiMail className="w-5 h-5 text-primary-400" />
                  </div>

                  <div>
                    <p className="text-white text-xs font-semibold uppercase tracking-wider mb-1">
                      Email
                    </p>

                    {SITE_CONFIG.email}
                  </div>
                </a>

                {/* Address */}
                <a
                  href={SITE_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 text-gray-400 text-sm hover:text-primary-400 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="w-5 h-5 text-primary-400" />
                  </div>

                  <div>
                    <p className="text-white text-xs font-semibold uppercase tracking-wider mb-1">
                      Visit Us
                    </p>

                    <p className="text-gray-300 text-sm leading-relaxed">
                      <span className="font-semibold text-white">
                        Zircon Dental &amp; Implant Studio
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

                {/* Working Hours */}
                <div className="flex items-start gap-4 text-gray-400 text-sm">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                    <FiClock className="w-5 h-5 text-primary-400" />
                  </div>

                  <div>
                    <p className="text-white text-xs font-semibold uppercase tracking-wider mb-1">
                      Hours
                    </p>

                    Mon-Fri: {SITE_CONFIG.workingHours.weekdays}
                    <br />
                    Sat: {SITE_CONFIG.workingHours.saturday}
                    <br />
                    Sun: {SITE_CONFIG.workingHours.sunday}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =========================================================
              CONTACT FORM
          ========================================================= */}
          <motion.div
            className="lg:col-span-3"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
              noValidate
            >
              {/* =====================================================
                  HONEYPOT SPAM PROTECTION
              ===================================================== */}
              <input
                type="checkbox"
                className="hidden"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
                {...register("botcheck")}
              />

              {/* =====================================================
                  FIRST NAME / LAST NAME
              ===================================================== */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-dark-900 mb-2"
                  >
                    First Name
                  </label>

                  <input
                    id="first-name"
                    type="text"
                    placeholder="John"
                    autoComplete="given-name"
                    className={`w-full px-4 py-3.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.first_name
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                        : "border-gray-200 focus:ring-primary-500/20 focus:border-primary-500"
                    }`}
                    {...register("first_name", {
                      required: "First name is required",
                      maxLength: {
                        value: 50,
                        message: "First name is too long",
                      },
                    })}
                  />

                  {errors.first_name && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.first_name.message}
                    </p>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-dark-900 mb-2"
                  >
                    Last Name
                  </label>

                  <input
                    id="last-name"
                    type="text"
                    placeholder="Doe"
                    autoComplete="family-name"
                    className={`w-full px-4 py-3.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.last_name
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                        : "border-gray-200 focus:ring-primary-500/20 focus:border-primary-500"
                    }`}
                    {...register("last_name", {
                      required: "Last name is required",
                      maxLength: {
                        value: 50,
                        message: "Last name is too long",
                      },
                    })}
                  />

                  {errors.last_name && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.last_name.message}
                    </p>
                  )}
                </div>
              </div>

              {/* =====================================================
                  EMAIL / PHONE
              ===================================================== */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-dark-900 mb-2"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    autoComplete="email"
                    className={`w-full px-4 py-3.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                        : "border-gray-200 focus:ring-primary-500/20 focus:border-primary-500"
                    }`}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Please enter a valid email address",
                      },
                    })}
                  />

                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-dark-900 mb-2"
                  >
                    Phone
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    autoComplete="tel"
                    className={`w-full px-4 py-3.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.phone
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                        : "border-gray-200 focus:ring-primary-500/20 focus:border-primary-500"
                    }`}
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[+()\-\s\d]{10,20}$/,
                        message: "Please enter a valid phone number",
                      },
                    })}
                  />

                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              {/* =====================================================
                  TREATMENT INTEREST
              ===================================================== */}
              <div>
                <label
                  htmlFor="treatment"
                  className="block text-sm font-medium text-dark-900 mb-2"
                >
                  Treatment Interest
                </label>

                <select
                  id="treatment"
                  defaultValue=""
                  className={`w-full px-4 py-3.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${
                    errors.treatment_interest
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                      : "border-gray-200 focus:ring-primary-500/20 focus:border-primary-500"
                  }`}
                  {...register("treatment_interest", {
                    required: "Please select a treatment",
                  })}
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

                  <option value="Smile Design">
                    Smile Design
                  </option>

                  <option value="Teeth Whitening">
                    Teeth Whitening
                  </option>

                  <option value="Crowns & Bridges">
                    Crowns &amp; Bridges
                  </option>

                  <option value="Orthodontics / Braces">
                    Orthodontics / Braces
                  </option>

                  <option value="Oral Surgery">
                    Oral Surgery
                  </option>

                  <option value="General Checkup">
                    General Checkup
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>

                {errors.treatment_interest && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.treatment_interest.message}
                  </p>
                )}
              </div>

              {/* =====================================================
                  MESSAGE
              ===================================================== */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-dark-900 mb-2"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your dental concerns..."
                  className={`w-full px-4 py-3.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all resize-none ${
                    errors.message
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                      : "border-gray-200 focus:ring-primary-500/20 focus:border-primary-500"
                  }`}
                  {...register("message", {
                    required: "Please enter your message",
                    maxLength: {
                      value: 2000,
                      message: "Message is too long",
                    },
                  })}
                />

                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* =====================================================
                  SUCCESS MESSAGE
              ===================================================== */}
              {isSubmitSuccessful && isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-3 rounded-xl bg-green-50 border border-green-200 px-4 py-3 text-green-700 text-sm"
                >
                  <FiCheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />

                  <div>
                    <p className="font-semibold">
                      Message sent successfully!
                    </p>

                    <p className="text-green-600 mt-1">
                      {responseMessage ||
                        "Thank you for contacting Zircon Dental. Our team will get back to you shortly."}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* =====================================================
                  ERROR MESSAGE
              ===================================================== */}
              {isSubmitSuccessful && !isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-3 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-red-700 text-sm"
                >
                  <FiAlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />

                  <div>
                    <p className="font-semibold">
                      Unable to send your message.
                    </p>

                    <p className="text-red-600 mt-1">
                      {responseMessage ||
                        "Please try again or contact us directly by phone or WhatsApp."}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* =====================================================
                  SUBMIT BUTTON
              ===================================================== */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full md:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
                whileHover={
                  !isSubmitting
                    ? {
                        scale: 1.02,
                      }
                    : undefined
                }
                whileTap={
                  !isSubmitting
                    ? {
                        scale: 0.98,
                      }
                    : undefined
                }
              >
                <FiSend
                  className={`w-4 h-4 mr-2 ${
                    isSubmitting ? "animate-pulse" : ""
                  }`}
                />

                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;