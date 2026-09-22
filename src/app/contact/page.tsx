"use client";

import Image from "next/image";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
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
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { SITE_CONFIG } from "@/utils/constants";
import SectionTitle from "@/components/ui/SectionTitle";

type ContactFormData = {
  first_name: string;
  phone: string;
  email?: string;
  treatment_interest: string;
  preferred_date_time?: string;
  message?: string;
  botcheck?: string;
};

type FormStatus = "idle" | "success" | "error";

const FORMSUBMIT_ENDPOINT =
  "https://formsubmit.co/ajax/zircondental77@gmail.com";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [responseMessage, setResponseMessage] = useState("");

  const phoneHref = `tel:${SITE_CONFIG.phone}`;
  const mailHref = `mailto:${SITE_CONFIG.email}`;

  const waHref = `https://wa.me/${SITE_CONFIG.whatsapp}`;

  const waHrefWithText =
    `https://wa.me/${SITE_CONFIG.whatsapp}?text=` +
    encodeURIComponent(
      "Hello! I'd like to book an appointment at Zircon Dental."
    );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    mode: "onTouched",
  });

  // ============================================================
  // EMAIL FORMATTERS
  // ============================================================

  const formatAppointmentDate = (value?: string) => {
    if (!value) return "Not specified";

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
      return "Not specified";
    }

    return new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  const formatAppointmentTime = (value?: string) => {
    if (!value) return "Not specified";

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
      return "Not specified";
    }

    return new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).format(date);
  };

  const formatPhoneForEmail = (value?: string) => {
    if (!value) return "Not provided";

    const cleaned = value.replace(/\s+/g, "").trim();

    // +919850865194 → +91 98508 65194
    if (/^\+91\d{10}$/.test(cleaned)) {
      return `+91 ${cleaned.slice(3, 8)} ${cleaned.slice(8)}`;
    }

    // 9850865194 → 98508 65194
    if (/^\d{10}$/.test(cleaned)) {
      return `${cleaned.slice(0, 5)} ${cleaned.slice(5)}`;
    }

    return value;
  };

  // ============================================================
  // FORM SUBMIT
  // ============================================================

  const handleFormSubmit = async (data: ContactFormData) => {
    setFormStatus("idle");
    setResponseMessage("");

    // Honeypot protection
    if (data.botcheck) {
      return;
    }

    try {
      const appointmentDate = formatAppointmentDate(
        data.preferred_date_time
      );

      const appointmentTime = formatAppointmentTime(
        data.preferred_date_time
      );

      const phoneForEmail = formatPhoneForEmail(data.phone);

      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // ====================================================
          // FORMSUBMIT SETTINGS
          // ====================================================

          _subject:
            "New Appointment Enquiry — Zircon Dental & Implant Studio",

          _template: "table",

          _captcha: "false",

          _url:
            typeof window !== "undefined"
              ? window.location.href
              : "https://www.zircondentalandimplantstudio.com/contact",

          // ====================================================
          // PROFESSIONAL EMAIL FIELDS
          // ====================================================

          Name: data.first_name || "Not provided",

          "Phone Number": phoneForEmail,

          "Email Address": data.email || "Not provided",

          "Treatment Interest":
            data.treatment_interest || "Not specified",

          "Preferred Date": appointmentDate,

          "Preferred Time": appointmentTime,

          Message: data.message || "No additional message",

          Clinic: "Zircon Dental & Implant Studio",

          Location: "Wakad, Pune",
        }),
      });

      const contentType =
        response.headers.get("content-type") || "";

      let result: {
        success?: boolean | string;
        message?: string;
      } | null = null;

      if (contentType.includes("application/json")) {
        result = await response.json();
      } else {
        const text = await response.text();

        result = {
          success: response.ok,
          message: text,
        };
      }

      console.log("FormSubmit status:", response.status);
      console.log("FormSubmit response:", result);

      if (!response.ok) {
        throw new Error(
          result?.message ||
            `FormSubmit returned status ${response.status}`
        );
      }

      setFormStatus("success");

      setResponseMessage(
        "Thank you! Your appointment enquiry has been sent successfully. Our team will contact you shortly."
      );

      reset();
    } catch (error) {
      console.error("FormSubmit error:", error);

      setFormStatus("error");

      setResponseMessage(
        "We could not send your enquiry right now. Please try again or contact us directly by phone or WhatsApp."
      );
    }
  };

  return (
    <Layout>
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=2000&q=85"
          alt="Zircon Dental & Implant Studio"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 container mx-auto px-6 py-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeInUp}
              className="text-white/80 uppercase tracking-[0.2em] text-sm font-semibold mb-4"
            >
              Zircon Dental & Implant Studio
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Contact & Appointments
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/90 max-w-2xl"
            >
              Book your dental consultation or get in touch
              with our team. We are here to help you achieve a
              healthier, confident smile.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          QUICK CONTACT CARDS
      ========================================================= */}

      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Call */}
            <motion.a
              variants={staggerItem}
              href={phoneHref}
              className="group p-6 rounded-2xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                <FiPhone className="text-primary-600 text-xl" />
              </div>

              <h3 className="font-semibold text-lg text-gray-900 mb-1">
                Call Us
              </h3>

              <p className="text-gray-600">
                {SITE_CONFIG.phone}
              </p>
            </motion.a>

            {/* Email */}
            <motion.a
              variants={staggerItem}
              href={mailHref}
              className="group p-6 rounded-2xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                <FiMail className="text-primary-600 text-xl" />
              </div>

              <h3 className="font-semibold text-lg text-gray-900 mb-1">
                Email Us
              </h3>

              <p className="text-gray-600 break-all">
                {SITE_CONFIG.email}
              </p>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              variants={staggerItem}
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-4">
                <FaWhatsapp className="text-green-600 text-xl" />
              </div>

              <h3 className="font-semibold text-lg text-gray-900 mb-1">
                WhatsApp
              </h3>

              <p className="text-gray-600">
                Chat with our team
              </p>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          APPOINTMENT + CONTACT INFORMATION
      ========================================================= */}

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* ===================================================
                APPOINTMENT FORM
            =================================================== */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100"
            >
              <SectionTitle
                eyebrow="Appointment Request"
                title="Schedule Your Dental Consultation"
                description="Share your details with us and our team will contact you to confirm your appointment."
                align="left"
              />

              <form
                onSubmit={handleSubmit(handleFormSubmit)}
                className="mt-8 space-y-6"
              >
                {/* Honeypot */}
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  {...register("botcheck")}
                />

                {/* Full Name */}
                <div>
                  <label
                    htmlFor="first_name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>

                  <input
                    id="first_name"
                    type="text"
                    placeholder="Enter your full name"
                    className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
                      errors.first_name
                        ? "border-red-400 focus:ring-2 focus:ring-red-100"
                        : "border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                    }`}
                    {...register("first_name", {
                      required: "Please enter your name",
                    })}
                  />

                  {errors.first_name && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.first_name.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number *
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
                      errors.phone
                        ? "border-red-400 focus:ring-2 focus:ring-red-100"
                        : "border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                    }`}
                    {...register("phone", {
                      required: "Please enter your phone number",
                      minLength: {
                        value: 10,
                        message:
                          "Please enter a valid phone number",
                      },
                    })}
                  />

                  {errors.phone && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
                      errors.email
                        ? "border-red-400 focus:ring-2 focus:ring-red-100"
                        : "border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                    }`}
                    {...register("email", {
                      pattern: {
                        value:
                          /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message:
                          "Please enter a valid email address",
                      },
                    })}
                  />

                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Treatment */}
                <div>
                  <label
                    htmlFor="treatment_interest"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Treatment Interest *
                  </label>

                  <select
                    id="treatment_interest"
                    className={`w-full rounded-xl border px-4 py-3 outline-none transition bg-white ${
                      errors.treatment_interest
                        ? "border-red-400 focus:ring-2 focus:ring-red-100"
                        : "border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                    }`}
                    {...register("treatment_interest", {
                      required:
                        "Please select a treatment",
                    })}
                  >
                    <option value="">
                      Select a treatment
                    </option>

                    <option value="General Consultation">
                      General Consultation
                    </option>

                    <option value="Dental Implants">
                      Dental Implants
                    </option>

                    <option value="Advanced Implants / All-on-4">
                      Advanced Implants / All-on-4
                    </option>

                    <option value="Smile Design">
                      Smile Design
                    </option>

                    <option value="Root Canal Treatment">
                      Root Canal Treatment
                    </option>

                    <option value="Child Dentistry">
                      Child Dentistry
                    </option>

                    <option value="Teeth Whitening">
                      Teeth Whitening
                    </option>

                    <option value="Orthodontics">
                      Orthodontics
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>

                  {errors.treatment_interest && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.treatment_interest.message}
                    </p>
                  )}
                </div>

                {/* Preferred Date & Time */}
                <div>
                  <label
                    htmlFor="preferred_date_time"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Preferred Date & Time
                  </label>

                  <input
                    id="preferred_date_time"
                    type="datetime-local"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                    {...register("preferred_date_time")}
                  />

                  <p className="mt-2 text-xs text-gray-500">
                    Your preferred time is only a request. Our
                    team will contact you to confirm availability.
                  </p>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us anything you'd like our team to know..."
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100 resize-none"
                    {...register("message")}
                  />
                </div>

                {/* Status */}
                {formStatus !== "idle" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-start gap-3 rounded-xl p-4 ${
                      formStatus === "success"
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                  >
                    {formStatus === "success" ? (
                      <FiCheckCircle className="mt-0.5 shrink-0" />
                    ) : (
                      <FiAlertCircle className="mt-0.5 shrink-0" />
                    )}

                    <p className="text-sm leading-6">
                      {responseMessage}
                    </p>
                  </motion.div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary-600 px-6 py-3.5 font-semibold text-white transition hover:bg-primary-700 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-5 w-5 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend />
                      Request Appointment
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* ===================================================
                CONTACT INFORMATION
            =================================================== */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="space-y-6"
            >
              <SectionTitle
                eyebrow="Contact Our Clinic"
                title="We're Here to Help"
                description="Get in touch with Zircon Dental & Implant Studio or visit us at our Wakad, Pune clinic."
                align="left"
              />

              {/* Address */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                    <FiMapPin className="text-primary-600" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Clinic Address
                    </h3>

                    <p className="text-gray-600 leading-6">
                      Shop No. 72, Western Avenue,
                      <br />
                      Opp. Phoenix Mall Road,
                      <br />
                      Wakad, Pune - 411057
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <a
                href={phoneHref}
                className="block bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition"
              >
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                    <FiPhone className="text-primary-600" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Phone
                    </h3>

                    <p className="text-gray-600">
                      {SITE_CONFIG.phone}
                    </p>
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href={mailHref}
                className="block bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition"
              >
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                    <FiMail className="text-primary-600" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Email
                    </h3>

                    <p className="text-gray-600 break-all">
                      {SITE_CONFIG.email}
                    </p>
                  </div>
                </div>
              </a>

              {/* Hours */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                    <FiClock className="text-primary-600" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Clinic Hours
                    </h3>

                    <p className="text-gray-600 leading-6">
                      Monday - Saturday
                      <br />
                      10:00 AM - 8:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href={waHrefWithText}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full rounded-2xl bg-green-600 hover:bg-green-700 text-white px-6 py-4 font-semibold transition"
              >
                <FaWhatsapp className="text-xl" />
                Chat With Us on WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAP
      ========================================================= */}

      <section className="relative h-[500px] bg-gray-100 overflow-hidden">
        <iframe
          title="Zircon Dental & Implant Studio Location"
          src="https://www.google.com/maps?q=Zircon%20Dental%20%26%20Implant%20Studio%2C%20Wakad%2C%20Pune&output=embed"
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <div className="absolute top-6 left-6 md:left-10 bg-white rounded-2xl shadow-xl p-5 max-w-sm">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
              <FiMapPin className="text-primary-600 text-xl" />
            </div>

            <div>
              <h3 className="font-bold text-gray-900">
                Zircon Dental & Implant Studio
              </h3>

              <p className="text-sm text-gray-600 mt-1">
                Wakad, Pune — Opp. Phoenix Mall Road
              </p>

              <div className="flex items-center gap-2 mt-3">
                <span className="text-yellow-500">★</span>

                <span className="font-semibold text-gray-900">
                  4.9
                </span>

                <span className="text-sm text-gray-500">
                  Google Rating
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Zircon%20Dental%20%26%20Implant%20Studio%2C%20Wakad%2C%20Pune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary-600 text-white px-3 py-2 text-sm font-medium hover:bg-primary-700 transition"
                >
                  <FiNavigation />
                  Directions
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Zircon%20Dental%20%26%20Implant%20Studio%2C%20Wakad%2C%20Pune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-200 text-gray-700 px-3 py-2 text-sm font-medium hover:bg-gray-50 transition"
                >
                  <FiExternalLink />
                  Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LANDMARKS
      ========================================================= */}

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle
            eyebrow="Getting Here"
            title="Nearby Landmarks"
            description="Our clinic is conveniently located near some of Wakad's popular landmarks."
          />

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              "Phoenix Mall",
              "Wakad Bridge",
              "Hinjewadi",
              "Mumbai-Bangalore Highway",
            ].map((landmark) => (
              <div
                key={landmark}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-5 text-center"
              >
                <FiMapPin className="mx-auto text-primary-600 text-xl mb-3" />

                <h3 className="font-semibold text-gray-900">
                  {landmark}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}