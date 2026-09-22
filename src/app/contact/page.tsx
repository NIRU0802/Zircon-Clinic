"use client";

import Image from "next/image";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
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
  FiCalendar,
  FiChevronDown,
} from "react-icons/fi";

import { FaWhatsapp } from "react-icons/fa";
import { SITE_CONFIG } from "@/utils/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type ContactFormData = {
  first_name: string;
  phone: string;
  email?: string;
  treatment_interest: string;
  preferred_date_time?: string;
  message?: string;
};

type FormStatus = "idle" | "success" | "error";

const FORMSUBMIT_ENDPOINT =
  "https://formsubmit.co/ajax/zircondental77@gmail.com";

const TIME_OPTIONS = Array.from({ length: 24 * 4 }, (_, index) => {
  const totalMinutes = index * 15;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  const value = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}`;

  const label = new Date(
    2000,
    0,
    1,
    hours,
    minutes
  ).toLocaleTimeString("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return { value, label };
});

const toDateTimeLocal = (date: Date, time: string) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}T${time}`;
};

const isSameCalendarDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [responseMessage, setResponseMessage] = useState("");

  const [appointmentDate, setAppointmentDate] = useState<Date | undefined>();
  const [appointmentTime, setAppointmentTime] = useState("");
  const [appointmentPickerOpen, setAppointmentPickerOpen] = useState(false);

  const [pickerNow, setPickerNow] = useState(() => new Date());

  const phoneHref = "tel:" + SITE_CONFIG.phone;
  const mailHref = "mailto:" + SITE_CONFIG.email;

  const waHrefWithText =
    "https://wa.me/" +
    SITE_CONFIG.whatsapp +
    "?text=" +
    encodeURIComponent(
      "Hello! I'd like to book an appointment at Zircon Dental."
    );

  useEffect(() => {
    const updateNow = () => {
      setPickerNow(new Date());
    };

    const interval = window.setInterval(updateNow, 60 * 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    mode: "onTouched",
  });

  const handleFormSubmit = async (data: ContactFormData) => {
    setFormStatus("idle");
    setResponseMessage("");

    if (data.preferred_date_time) {
      const selectedDate = new Date(data.preferred_date_time);
      const now = new Date();

      if (
        Number.isNaN(selectedDate.getTime()) ||
        selectedDate <= now
      ) {
        setFormStatus("error");
        setResponseMessage(
          "Please select a future date and time for your appointment."
        );
        return;
      }
    }

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject:
            "New Appointment Enquiry — Zircon Dental & Implant Studio",

          _template: "table",

          _captcha: "false",

          _replyto:
            data.email || "zircondental77@gmail.com",

          Name: data.first_name,

          Phone: data.phone,

          Email: data.email || "Not provided",

          "Treatment Interest":
            data.treatment_interest || "Not specified",

          "Preferred Date & Time": data.preferred_date_time
            ? new Date(
              data.preferred_date_time
            ).toLocaleString("en-IN", {
              day: "2-digit",
              month: "long",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })
            : "Not specified",

          Message: data.message || "No message provided",
        }),
      });

      const result = await response.json();

      console.log("FormSubmit response:", result);

      if (response.ok) {
        setFormStatus("success");

        setResponseMessage(
          "Your appointment enquiry has been sent successfully. Our clinic team will contact you shortly."
        );

        reset();

        setAppointmentDate(undefined);
        setAppointmentTime("");
        setAppointmentPickerOpen(false);
      } else {
        setFormStatus("error");

        setResponseMessage(
          result?.message ||
          "We could not send your enquiry. Please try again or contact us directly."
        );
      }
    } catch (err) {
      console.error("FormSubmit error:", err);

      setFormStatus("error");

      setResponseMessage(
        "Something went wrong. Please try again or contact us directly."
      );
    }
  };

  return (
    <Layout>
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative pt-32 pb-20 bg-dark-950 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2000"
            alt="Zircon Dental & Implant Studio"
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
              Wakad, Pune - Opp. Phoenix Mall Road
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

      {/* =========================================================
          QUICK CONTACT CARDS
      ========================================================= */}

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
                  We reply promptly
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
                <div className="w-14 h-14 rounded-2xl bg-purple-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <FiMapPin className="w-6 h-6 text-white" />
                </div>

                <h3 className="font-heading font-bold text-dark-900 mb-1">
                  Visit Us
                </h3>

                <p className="text-purple-600 font-semibold text-sm">
                  Wakad, Pune
                </p>

                <p className="text-xs text-gray-400 mt-1">
                  Opp. Phoenix Mall Road
                </p>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          CONTACT / APPOINTMENT
      ========================================================= */}

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            badge="Book Appointment"
            subtitle="Schedule Your Visit"
            title='Schedule Your <span class="text-gradient">Visit</span> Today'
            description="Fill out the form below and our team will get back to you within 2 hours."
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
            {/* =====================================================
                CONTACT INFO
            ===================================================== */}

            <motion.div
              className="lg:col-span-2"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="bg-dark-950 rounded-[2rem] p-7 sm:p-8 text-white h-full">
                <p className="text-primary-400 text-xs uppercase tracking-[0.2em] font-semibold mb-3">
                  Contact Zircon
                </p>

                <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-8">
                  We&apos;re here to help.
                </h2>

                <div className="space-y-6">
                  {/* Phone */}

                  <a
                    href={phoneHref}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary-500/10 transition-colors">
                      <FiPhone className="w-4 h-4 text-primary-400" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                        Phone
                      </p>

                      <p className="text-sm font-medium text-white group-hover:text-primary-400 transition-colors">
                        {SITE_CONFIG.phone}
                      </p>
                    </div>
                  </a>

                  {/* WhatsApp */}

                  <a
                    href={waHrefWithText}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-green-500/10 transition-colors">
                      <FaWhatsapp className="w-4 h-4 text-green-400" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                        WhatsApp
                      </p>

                      <p className="text-sm font-medium text-white group-hover:text-green-400 transition-colors">
                        Chat with us
                      </p>
                    </div>
                  </a>

                  {/* Email */}

                  <a
                    href={mailHref}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/10 transition-colors">
                      <FiMail className="w-4 h-4 text-blue-400" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                        Email
                      </p>

                      <p className="text-sm font-medium text-white break-all group-hover:text-blue-400 transition-colors">
                        {SITE_CONFIG.email}
                      </p>
                    </div>
                  </a>

                  {/* Address */}

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <FiMapPin className="w-4 h-4 text-primary-400" />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                        Address
                      </p>

                      <p className="text-sm leading-6 text-gray-300">
                        Zircon Dental &amp; Implant Studio
                        <br />
                        Shop No. 72, Western Avenue,
                        <br />
                        Opp. Phoenix Mall Road,
                        <br />
                        Wakad, Pune 411057
                      </p>
                    </div>
                  </div>

                  {/* Working Hours */}

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <FiClock className="w-4 h-4 text-primary-400" />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                        Working Hours
                      </p>

                      <div className="space-y-1 text-sm">
                        <p>
                          <span className="text-gray-500">
                            Mon - Fri:
                          </span>{" "}
                          <span className="text-gray-300">
                            {SITE_CONFIG.workingHours.weekdays}
                          </span>
                        </p>

                        <p>
                          <span className="text-gray-500">
                            Saturday:
                          </span>{" "}
                          <span className="text-gray-300">
                            {SITE_CONFIG.workingHours.saturday}
                          </span>
                        </p>

                        <p>
                          <span className="text-gray-500">
                            Sunday:
                          </span>{" "}
                          <span className="text-gray-300">
                            {SITE_CONFIG.workingHours.sunday}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-xs text-gray-500 leading-5">
                    Prefer WhatsApp? Send us a message anytime and our
                    team will get back to you as soon as possible.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =====================================================
                APPOINTMENT FORM
            ===================================================== */}

            <motion.div
              className="lg:col-span-3 min-w-0"
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <form
                onSubmit={handleSubmit(handleFormSubmit)}
                className="space-y-5"
                noValidate
              >
                {/* Full Name + Phone */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Full Name */}

                  <div className="min-w-0">
                    <label
                      htmlFor="first_name"
                      className="block text-sm font-medium text-dark-900 mb-2"
                    >
                      Full Name *
                    </label>

                    <input
                      id="first_name"
                      type="text"
                      placeholder="Enter your full name"
                      className={`w-full min-w-0 px-4 py-3.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${errors.first_name
                          ? "border-red-500 focus:ring-red-500/20"
                          : "border-gray-200 focus:ring-primary-500/20 focus:border-primary-500"
                        }`}
                      {...register("first_name", {
                        required: "Please enter your name",
                        maxLength: {
                          value: 100,
                          message: "Name is too long",
                        },
                      })}
                    />

                    {errors.first_name && (
                      <p className="mt-1.5 text-xs text-red-500">
                        {errors.first_name.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}

                  <div className="min-w-0">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-dark-900 mb-2"
                    >
                      Phone *
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      placeholder="+91 98XXXXXXXX"
                      className={`w-full min-w-0 px-4 py-3.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${errors.phone
                          ? "border-red-500 focus:ring-red-500/20"
                          : "border-gray-200 focus:ring-primary-500/20 focus:border-primary-500"
                        }`}
                      {...register("phone", {
                        required: "Please enter your phone number",
                        pattern: {
                          value: /^[+()\-\s\d]{10,20}$/,
                          message: "Please enter a valid phone number",
                        },
                      })}
                    />

                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-red-500">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

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
                    placeholder="you@example.com"
                    className={`w-full px-4 py-3.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${errors.email
                        ? "border-red-500 focus:ring-red-500/20"
                        : "border-gray-200 focus:ring-primary-500/20 focus:border-primary-500"
                      }`}
                    {...register("email", {
                      pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: "Please enter a valid email address",
                      },
                    })}
                  />

                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Treatment */}

                <div>
                  <label
                    htmlFor="treatment_interest"
                    className="block text-sm font-medium text-dark-900 mb-2"
                  >
                    Treatment Interest *
                  </label>

                  <select
                    id="treatment_interest"
                    className={`w-full px-4 py-3.5 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 transition-all ${errors.treatment_interest
                        ? "border-red-500 focus:ring-red-500/20"
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

                    <option value="Smile Design / Veneers">
                      Smile Design / Veneers
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

                    <option value="General Checkup & Cleaning">
                      General Checkup &amp; Cleaning
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>

                  {errors.treatment_interest && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.treatment_interest.message}
                    </p>
                  )}
                </div>

                {/* =================================================
                    PREFERRED DATE & TIME
                ================================================= */}

                <div className="min-w-0">
                  <label
                    htmlFor="preferred_date_time"
                    className="block text-sm font-medium text-dark-900 mb-2"
                  >
                    Preferred Date &amp; Time
                  </label>

                  {/* Hidden RHF field */}

                  <input
                    id="preferred_date_time"
                    type="hidden"
                    {...register("preferred_date_time", {
                      validate: (value) => {
                        if (!appointmentDate) {
                          return true;
                        }

                        if (!appointmentTime) {
                          return "Please select a time for your appointment.";
                        }

                        const selectedDate = new Date(value);
                        const now = new Date();

                        if (
                          Number.isNaN(
                            selectedDate.getTime()
                          )
                        ) {
                          return "Please select a valid date and time.";
                        }

                        if (selectedDate <= now) {
                          return "Please select a future date and time for your appointment.";
                        }

                        return true;
                      },
                    })}
                  />

                  <Popover
                    open={appointmentPickerOpen}
                    onOpenChange={setAppointmentPickerOpen}
                  >
                    {/* IMPORTANT:
                        Do NOT use asChild here.
                        Your installed Base UI PopoverTrigger
                        already renders a button.
                    */}

                    <PopoverTrigger>
                      <span
                        className={`w-full flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl border text-sm text-left bg-white transition-all cursor-pointer ${errors.preferred_date_time
                            ? "border-red-500"
                            : "border-gray-200"
                          }`}
                      >
                        <span
                          className={
                            appointmentDate
                              ? "text-dark-900"
                              : "text-gray-400"
                          }
                        >
                          {appointmentDate
                            ? `${appointmentDate.toLocaleDateString(
                              "en-IN",
                              {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              }
                            )}${appointmentTime
                              ? ` • ${new Date(
                                2000,
                                0,
                                1,
                                Number(
                                  appointmentTime.slice(
                                    0,
                                    2
                                  )
                                ),
                                Number(
                                  appointmentTime.slice(
                                    3,
                                    5
                                  )
                                )
                              ).toLocaleTimeString(
                                "en-IN",
                                {
                                  hour: "numeric",
                                  minute: "2-digit",
                                  hour12: true,
                                }
                              )}`
                              : " • Select time"
                            }`
                            : "Select a date & time"}
                        </span>

                        <FiChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                      </span>
                    </PopoverTrigger>

                    <PopoverContent
                      align="start"
                      sideOffset={8}
                      className="w-[min(720px,calc(100vw-1rem))] max-w-[calc(100vw-1rem)] max-h-[calc(100vh-1.5rem)] overflow-hidden rounded-2xl border border-gray-200 bg-white p-0 shadow-premium-lg"
                    >
                      <div className="flex max-h-[calc(100vh-1.5rem)] flex-col">
                        {/* Header */}

                        <div className="shrink-0 border-b border-gray-100 p-4 sm:p-5">
                          <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-50">
                              <FiCalendar className="h-4 w-4 text-primary-600" />
                            </div>

                            <div className="min-w-0">
                              <p className="text-sm font-semibold text-dark-900">
                                Choose appointment
                              </p>

                              <p className="mt-0.5 text-xs text-gray-400">
                                Pick a date and time for your preferred
                                visit
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* DATE + TIME SIDE BY SIDE — EQUAL WIDTH */}
                        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
                          <div className="grid min-w-[620px] grid-cols-2 divide-x divide-gray-100">

                            {/* DATE PICKER */}
                            <div className="min-w-0 p-4 sm:p-5">
                              <div className="mb-3 flex items-center gap-2 px-1">
                                <FiCalendar className="h-4 w-4 text-gray-500" />
                                <span className="text-xs font-semibold uppercase tracking-wider text-dark-900">
                                  Date
                                </span>
                              </div>

                              <div className="flex min-h-[330px] items-start justify-center">
                                <Calendar
                                  mode="single"
                                  selected={appointmentDate}
                                  onSelect={(date) => {
                                    setAppointmentDate(date);

                                    if (!date) {
                                      setAppointmentTime("");

                                      setValue("preferred_date_time", "", {
                                        shouldDirty: true,
                                        shouldTouch: true,
                                        shouldValidate: true,
                                      });

                                      return;
                                    }

                                    let nextTime = appointmentTime;

                                    if (
                                      isSameCalendarDay(date, pickerNow) &&
                                      appointmentTime
                                    ) {
                                      const [hours, minutes] = appointmentTime
                                        .split(":")
                                        .map(Number);

                                      const selected = new Date(
                                        date.getFullYear(),
                                        date.getMonth(),
                                        date.getDate(),
                                        hours,
                                        minutes
                                      );

                                      if (selected <= pickerNow) {
                                        nextTime = "";
                                        setAppointmentTime("");
                                      }
                                    }

                                    setValue(
                                      "preferred_date_time",
                                      nextTime
                                        ? toDateTimeLocal(date, nextTime)
                                        : "",
                                      {
                                        shouldDirty: true,
                                        shouldTouch: true,
                                        shouldValidate: true,
                                      }
                                    );
                                  }}
                                  disabled={(date) => {
                                    const today = new Date(pickerNow);
                                    today.setHours(0, 0, 0, 0);

                                    const checkDate = new Date(date);
                                    checkDate.setHours(0, 0, 0, 0);

                                    return checkDate < today;
                                  }}
                                  className="w-full max-w-[320px]"
                                  initialFocus
                                />
                              </div>
                            </div>

                            {/* TIME PICKER */}
                            <div className="min-w-0 p-4 sm:p-5">
                              <div className="mb-3 flex items-center justify-between gap-2 px-1">
                                <div className="flex items-center gap-2">
                                  <FiClock className="h-4 w-4 shrink-0 text-gray-500" />

                                  <span className="text-xs font-semibold uppercase tracking-wider text-dark-900">
                                    Time
                                  </span>
                                </div>

                                <span className="text-[10px] text-gray-400">
                                  15 min
                                </span>
                              </div>

                              {!appointmentDate ? (
                                <div className="flex min-h-[330px] items-center justify-center rounded-xl border border-gray-100 bg-gray-50 px-3 text-center">
                                  <p className="text-xs leading-5 text-gray-400">
                                    Select a date first
                                  </p>
                                </div>
                              ) : (
                                <div className="h-[330px] overflow-y-auto overscroll-contain pr-1">
                                  <div className="grid grid-cols-2 gap-2">
                                    {TIME_OPTIONS.map((option) => {
                                      const [hours, minutes] = option.value
                                        .split(":")
                                        .map(Number);

                                      const disabled =
                                        isSameCalendarDay(
                                          appointmentDate,
                                          pickerNow
                                        ) &&
                                        new Date(
                                          appointmentDate.getFullYear(),
                                          appointmentDate.getMonth(),
                                          appointmentDate.getDate(),
                                          hours,
                                          minutes
                                        ) <= pickerNow;

                                      const selected =
                                        appointmentTime === option.value;

                                      return (
                                        <button
                                          key={option.value}
                                          type="button"
                                          disabled={disabled}
                                          onClick={() => {
                                            if (disabled) return;

                                            setAppointmentTime(option.value);

                                            setValue(
                                              "preferred_date_time",
                                              toDateTimeLocal(
                                                appointmentDate,
                                                option.value
                                              ),
                                              {
                                                shouldDirty: true,
                                                shouldTouch: true,
                                                shouldValidate: true,
                                              }
                                            );

                                            clearErrors(
                                              "preferred_date_time"
                                            );
                                          }}
                                          className={`min-h-10 w-full rounded-lg border px-2 py-2 text-xs font-medium transition-all ${selected
                                              ? "border-primary-600 bg-primary-600 text-white shadow-sm"
                                              : disabled
                                                ? "cursor-not-allowed border-gray-100 bg-gray-50 text-gray-300"
                                                : "border-gray-200 bg-white text-gray-600 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-600"
                                            }`}
                                        >
                                          {option.label}
                                        </button>
                                      );
                                    })}
                                  </div>
                                </div>
                              )}
                            </div>

                          </div>
                        </div>

                        {/* Footer */}

                        <div className="shrink-0 border-t border-gray-100 bg-gray-50/70 p-3 sm:p-4">
                          <div className="flex items-center justify-between gap-3">
                            <p className="min-w-0 text-[10px] leading-4 text-gray-400 sm:text-[11px]">
                              Past dates and times are unavailable.
                            </p>

                            <button
                              type="button"
                              disabled={
                                !appointmentDate ||
                                !appointmentTime
                              }
                              onClick={() =>
                                setAppointmentPickerOpen(
                                  false
                                )
                              }
                              className="shrink-0 rounded-lg bg-primary-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-40"
                            >
                              Done
                            </button>
                          </div>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>

                  {errors.preferred_date_time && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {
                        errors.preferred_date_time
                          .message
                      }
                    </p>
                  )}

                  <p className="mt-2 text-xs text-gray-400">
                    Your preferred date and time is a request.
                    Our team will contact you to confirm
                    availability.
                  </p>
                </div>

                {/* Message */}

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
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all resize-none"
                    {...register("message", {
                      maxLength: {
                        value: 2000,
                        message: "Message is too long",
                      },
                    })}
                  />

                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* SUCCESS */}

                {formStatus === "success" && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="flex items-start gap-3 rounded-xl bg-green-50 border border-green-200 px-4 py-4 text-green-700"
                  >
                    <FiCheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />

                    <div>
                      <p className="font-semibold text-sm">
                        Appointment enquiry sent successfully!
                      </p>

                      <p className="text-xs text-green-600 mt-1">
                        {responseMessage ||
                          "Thank you for contacting Zircon Dental. Our team will get back to you shortly."}
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* ERROR */}

                {formStatus === "error" && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="flex items-start gap-3 rounded-xl bg-red-50 border border-red-200 px-4 py-4 text-red-700"
                  >
                    <FiAlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />

                    <div>
                      <p className="font-semibold text-sm">
                        Unable to send your enquiry
                      </p>

                      <p className="text-xs text-red-600 mt-1">
                        {responseMessage ||
                          "Please try again or contact us directly by phone or WhatsApp."}
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Submit */}

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
                    className={`w-4 h-4 mr-2 ${isSubmitting
                        ? "animate-pulse"
                        : ""
                      }`}
                  />

                  {isSubmitting
                    ? "Sending..."
                    : "Book Appointment"}
                </motion.button>

                <p className="text-xs text-gray-400">
                  Free Consultation • We&apos;ll confirm within
                  2 hours • No obligation
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAP SECTION
      ========================================================= */}

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            badge="Find Us Easily"
            subtitle="Our Location"
            title='Visit <span class="text-gradient">Zircon Dental</span> at Wakad, Pune'
            description="Conveniently located opposite Phoenix Mall Road in Wakad, Pimpri-Chinchwad."
          />

          <motion.div
            className="max-w-5xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
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
                  title="Zircon Dental & Implant Studio location map"
                />

                {/* Floating Map Card */}

                <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-[360px]">
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-premium-lg p-5 border border-gray-100">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary-gradient flex items-center justify-center flex-shrink-0 shadow-primary">
                        <span className="text-xl">
                          🦷
                        </span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="font-heading font-bold text-dark-900 text-sm">
                          Zircon Dental &amp; Implant Clinic
                        </h3>

                        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                          Shop No. 72, Western Avenue,
                          <br />
                          Opp. Phoenix Mall Road, Wakad
                        </p>

                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex gap-0.5">
                            {Array.from({
                              length: 5,
                            }).map((_, i) => (
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

                    {/* Map Actions */}

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

              {/* Bottom Info */}

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
              ].map((landmark) => (
                <motion.div
                  key={landmark.name}
                  variants={staggerItem}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm"
                >
                  <span className="text-2xl">
                    {landmark.icon}
                  </span>

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