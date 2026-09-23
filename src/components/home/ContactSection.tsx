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
  FiCalendar,
  FiChevronDown,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";

import { FaWhatsapp } from "react-icons/fa";
import { SITE_CONFIG } from "@/utils/constants";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

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

/* ============================================================
   TIME OPTIONS — 15 MINUTE INTERVALS
============================================================ */

const TIME_OPTIONS = Array.from({ length: 24 * 4 }, (_, index) => {
  const totalMinutes = index * 15;

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  const value = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}`;

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

  return {
    value,
    label,
  };
});

/* ============================================================
   DATE HELPERS
============================================================ */

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

/* ============================================================
   COMPONENT
============================================================ */

const ContactSection = () => {
  const [formStatus, setFormStatus] =
    useState<FormStatus>("idle");

  const [responseMessage, setResponseMessage] =
    useState("");

  /* ============================================================
     APPOINTMENT PICKER STATE
  ============================================================ */

  const [appointmentDate, setAppointmentDate] =
    useState<Date | undefined>();

  const [appointmentTime, setAppointmentTime] =
    useState("");

  const [appointmentPickerOpen, setAppointmentPickerOpen] =
    useState(false);

  const [pickerNow, setPickerNow] = useState(
    () => new Date()
  );

  /* ============================================================
     KEEP CURRENT TIME UPDATED
  ============================================================ */

  useEffect(() => {
    const updateNow = () => {
      setPickerNow(new Date());
    };

    const interval = window.setInterval(
      updateNow,
      60 * 1000
    );

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  /* ============================================================
     REACT HOOK FORM
  ============================================================ */

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    clearErrors,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<ContactFormData>({
    mode: "onTouched",
  });

  /* ============================================================
     FORM SUBMIT
  ============================================================ */

  const handleFormSubmit = async (
    data: ContactFormData
  ) => {
    setFormStatus("idle");
    setResponseMessage("");

    /* ----------------------------------------------------------
       FINAL DATE/TIME VALIDATION
    ---------------------------------------------------------- */

    if (data.preferred_date_time) {
      const selectedDate = new Date(
        data.preferred_date_time
      );

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

    /* ----------------------------------------------------------
       FORMSUBMIT
    ---------------------------------------------------------- */

    try {
      const response = await fetch(
        FORMSUBMIT_ENDPOINT,
        {
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
              data.email ||
              "zircondental77@gmail.com",

            Name: data.first_name,

            Phone: data.phone,

            Email:
              data.email ||
              "Not provided",

            "Treatment Interest":
              data.treatment_interest ||
              "Not specified",

            "Preferred Date & Time":
              data.preferred_date_time
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

            Message:
              data.message ||
              "No message provided",
          }),
        }
      );

      const result = await response.json();

      console.log(
        "FormSubmit response:",
        result
      );

      /* --------------------------------------------------------
         SUCCESS
      -------------------------------------------------------- */

      if (response.ok) {
        setFormStatus("success");

        setResponseMessage(
          "Your appointment enquiry has been sent successfully. Our clinic team will contact you shortly."
        );

        reset();

        setAppointmentDate(undefined);
        setAppointmentTime("");

        setAppointmentPickerOpen(false);

        window.scrollTo({
          top:
            document
              .getElementById("contact-section")
              ?.getBoundingClientRect()
              .top ??
            window.scrollY,
          behavior: "smooth",
        });
      } else {
        setFormStatus("error");

        setResponseMessage(
          result?.message ||
          "We could not send your enquiry. Please try again or contact us directly."
        );
      }
    } catch (error) {
      console.error(
        "FormSubmit error:",
        error
      );

      setFormStatus("error");

      setResponseMessage(
        "Something went wrong. Please try again or contact us directly."
      );
    }
  };

  return (
    <section
      id="contact-section"
      className="section-padding bg-white relative overflow-hidden"
    >
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

                      <p>
                        {SITE_CONFIG.phone}
                      </p>
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

                      <p>
                        Chat with our team instantly
                      </p>
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

                      <p>
                        {SITE_CONFIG.email}
                      </p>
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
                        Mon-Fri:{" "}
                        {SITE_CONFIG.workingHours.weekdays}

                        <br />

                        Sat:{" "}
                        {SITE_CONFIG.workingHours.saturday}

                        <br />

                        Sun:{" "}
                        {SITE_CONFIG.workingHours.sunday}
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

              {/* ===================================================
                  FORM
              =================================================== */}

              <form
                onSubmit={handleSubmit(
                  handleFormSubmit
                )}
                className="space-y-6"
                noValidate
              >

                {/* =================================================
    FULL NAME + PHONE — SAME ROW
================================================= */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  {/* FULL NAME */}
                  <div>
                    <label
                      htmlFor="contact-full-name"
                      className="block text-sm font-medium text-dark-900 mb-2"
                    >
                      Full Name{" "}
                      <span className="text-primary-600">*</span>
                    </label>

                    <input
                      id="contact-full-name"
                      type="text"
                      placeholder="Enter your full name"
                      autoComplete="name"
                      className={`w-full px-4 py-3.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all ${errors.first_name
                        ? "border-red-500"
                        : "border-gray-200"
                        }`}
                      {...register("first_name", {
                        required: "Please enter your full name.",
                        maxLength: {
                          value: 100,
                          message:
                            "Name cannot exceed 100 characters.",
                        },
                      })}
                    />

                    {errors.first_name && (
                      <p className="mt-1.5 text-xs text-red-500">
                        {errors.first_name.message}
                      </p>
                    )}
                  </div>

                  {/* PHONE NUMBER */}
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
                      type="tel"
                      placeholder="Enter your phone number"
                      autoComplete="tel"
                      className={`w-full px-4 py-3.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all ${errors.phone
                        ? "border-red-500"
                        : "border-gray-200"
                        }`}
                      {...register("phone", {
                        required: "Please enter your phone number.",
                        pattern: {
                          value: /^[+()\-\s\d]{10,20}$/,
                          message:
                            "Please enter a valid phone number.",
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
                    type="email"
                    placeholder="Enter your email address"
                    autoComplete="email"
                    className={`w-full px-4 py-3.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all ${errors.email
                      ? "border-red-500"
                      : "border-gray-200"
                      }`}
                    {...register("email", {
                      pattern: {
                        value:
                          /^\S+@\S+\.\S+$/,
                        message:
                          "Please enter a valid email address.",
                      },
                    })}
                  />

                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.email.message}
                    </p>
                  )}

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
                    <span className="text-primary-600">
                      *
                    </span>
                  </label>

                  <select
                    id="contact-treatment"
                    defaultValue=""
                    className={`w-full px-4 py-3.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-gray-500 ${errors.treatment_interest
                      ? "border-red-500"
                      : "border-gray-200"
                      }`}
                    {...register(
                      "treatment_interest",
                      {
                        required:
                          "Please select a treatment.",
                      }
                    )}
                  >

                    <option
                      value=""
                      disabled
                    >
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

                  {errors.treatment_interest && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.treatment_interest.message}
                    </p>
                  )}

                </div>

                {/* =================================================
                    PREFERRED DATE & TIME
                ================================================= */}

                <div>

                  <label
                    htmlFor="contact-preferred-date-time"
                    className="block text-sm font-medium text-dark-900 mb-2"
                  >
                    Preferred Date &amp; Time
                  </label>

                  {/* Hidden RHF field */}

                  <input
                    id="contact-preferred-date-time"
                    type="hidden"
                    {...register("preferred_date_time", {
                      validate: (value) => {
                        if (!appointmentDate) {
                          return true;
                        }

                        if (!appointmentTime) {
                          return "Please select a time for your appointment.";
                        }

                        if (!value) {
                          return "Please select a valid date and time.";
                        }

                        const selectedDate = new Date(value);
                        const now = new Date();

                        if (Number.isNaN(selectedDate.getTime())) {
                          return "Please select a valid date and time.";
                        }

                        if (selectedDate <= now) {
                          return "Please select a future date and time for your appointment.";
                        }

                        return true;
                      },
                    })}
                  />

                  {/* =================================================
                      PICKER TRIGGER
                  ================================================= */}

                  <Popover
                    open={
                      appointmentPickerOpen
                    }
                    onOpenChange={
                      setAppointmentPickerOpen
                    }
                  >

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
                                  minute:
                                    "2-digit",
                                  hour12:
                                    true,
                                }
                              )}`
                              : " • Select time"
                            }`
                            : "Select a date & time"}

                        </span>

                        <FiChevronDown className="w-4 h-4 text-gray-400 shrink-0" />

                      </span>

                    </PopoverTrigger>

                    {/* =================================================
                        PICKER CONTENT
                    ================================================= */}

                    <PopoverContent
                      align="start"
                      sideOffset={8}
                      className="w-[min(760px,calc(100vw-1rem))] max-w-[calc(100vw-1rem)] max-h-[calc(100vh-1.5rem)] overflow-hidden rounded-2xl border border-gray-200 bg-white p-0 shadow-premium-lg"
                    >

                      <div className="flex max-h-[calc(100vh-1.5rem)] flex-col">

                        {/* =================================================
                            HEADER
                        ================================================= */}

                        <div className="shrink-0 border-b border-gray-100 p-4 sm:p-5">

                          <div className="flex items-center justify-center gap-3 text-center">

                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-50">
                              <FiCalendar className="h-4 w-4 text-primary-600" />
                            </div>

                            <div>

                              <p className="text-sm font-semibold text-dark-900">
                                Choose appointment
                              </p>

                              <p className="mt-0.5 text-xs text-gray-400">
                                Pick a date &amp; time for your preferred visit
                              </p>

                            </div>

                          </div>

                        </div>

                        {/* =================================================
                            DATE + TIME — EXACTLY 50 / 50
                        ================================================= */}

                        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">

                          <div className="grid min-w-[620px] grid-cols-2 divide-x divide-gray-100">

                            {/* =================================================
                                DATE
                            ================================================= */}

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
                                  selected={
                                    appointmentDate
                                  }
                                  onSelect={(
                                    date
                                  ) => {

                                    setAppointmentDate(
                                      date
                                    );

                                    if (!date) {

                                      setAppointmentTime(
                                        ""
                                      );

                                      setValue(
                                        "preferred_date_time",
                                        "",
                                        {
                                          shouldDirty:
                                            true,
                                          shouldTouch:
                                            true,
                                          shouldValidate:
                                            true,
                                        }
                                      );

                                      return;
                                    }

                                    let nextTime =
                                      appointmentTime;

                                    /* ---------------------------------
                                       If changing to TODAY and
                                       selected time is already past,
                                       clear it.
                                    --------------------------------- */

                                    if (
                                      isSameCalendarDay(
                                        date,
                                        pickerNow
                                      ) &&
                                      appointmentTime
                                    ) {

                                      const [
                                        hours,
                                        minutes,
                                      ] =
                                        appointmentTime
                                          .split(":")
                                          .map(
                                            Number
                                          );

                                      const selected =
                                        new Date(
                                          date.getFullYear(),
                                          date.getMonth(),
                                          date.getDate(),
                                          hours,
                                          minutes
                                        );

                                      if (
                                        selected <=
                                        pickerNow
                                      ) {

                                        nextTime =
                                          "";

                                        setAppointmentTime(
                                          ""
                                        );

                                      }

                                    }

                                    setValue(
                                      "preferred_date_time",
                                      nextTime
                                        ? toDateTimeLocal(
                                          date,
                                          nextTime
                                        )
                                        : "",
                                      {
                                        shouldDirty:
                                          true,
                                        shouldTouch:
                                          true,
                                        shouldValidate:
                                          true,
                                      }
                                    );

                                  }}

                                  disabled={(
                                    date
                                  ) => {

                                    const today =
                                      new Date(
                                        pickerNow
                                      );

                                    today.setHours(
                                      0,
                                      0,
                                      0,
                                      0
                                    );

                                    const checkDate =
                                      new Date(
                                        date
                                      );

                                    checkDate.setHours(
                                      0,
                                      0,
                                      0,
                                      0
                                    );

                                    return (
                                      checkDate <
                                      today
                                    );

                                  }}

                                  className="w-full max-w-[320px]"
                                />

                              </div>

                            </div>

                            {/* =================================================
                                TIME
                            ================================================= */}

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

                                    {TIME_OPTIONS.map(
                                      (
                                        option
                                      ) => {

                                        const [
                                          hours,
                                          minutes,
                                        ] =
                                          option.value
                                            .split(
                                              ":"
                                            )
                                            .map(
                                              Number
                                            );

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
                                          ) <=
                                          pickerNow;

                                        const selected =
                                          appointmentTime ===
                                          option.value;

                                        return (

                                          <button
                                            key={
                                              option.value
                                            }
                                            type="button"
                                            disabled={
                                              disabled
                                            }
                                            onClick={() => {

                                              if (
                                                disabled
                                              ) {
                                                return;
                                              }

                                              setAppointmentTime(
                                                option.value
                                              );

                                              setValue(
                                                "preferred_date_time",
                                                toDateTimeLocal(
                                                  appointmentDate,
                                                  option.value
                                                ),
                                                {
                                                  shouldDirty:
                                                    true,
                                                  shouldTouch:
                                                    true,
                                                  shouldValidate:
                                                    true,
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
                                            {
                                              option.label
                                            }
                                          </button>

                                        );

                                      }
                                    )}

                                  </div>

                                </div>

                              )}

                            </div>

                          </div>

                        </div>

                        {/* =================================================
                            PICKER FOOTER
                        ================================================= */}

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
                        errors
                          .preferred_date_time
                          .message
                      }
                    </p>
                  )}

                  <p className="mt-2 text-xs text-gray-500">
                    Your preferred time is only a request. Our team will contact you to confirm availability.
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
                    rows={5}
                    placeholder="Tell us anything you'd like our team to know..."
                    className={`w-full px-4 py-3.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all resize-none ${errors.message
                      ? "border-red-500"
                      : "border-gray-200"
                      }`}
                    {...register("message", {
                      maxLength: {
                        value: 2000,
                        message:
                          "Message cannot exceed 2000 characters.",
                      },
                    })}
                  />

                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.message.message}
                    </p>
                  )}

                </div>

                {/* =================================================
                    SUCCESS / ERROR
                ================================================= */}

                {formStatus === "success" && (

                  <div className="flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-3">

                    <FiCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />

                    <p className="text-sm leading-5 text-green-700">
                      {responseMessage}
                    </p>

                  </div>

                )}

                {formStatus === "error" && (

                  <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3">

                    <FiAlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />

                    <p className="text-sm leading-5 text-red-700">
                      {responseMessage}
                    </p>

                  </div>

                )}

                {/* =================================================
                    SUBMIT
                ================================================= */}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full md:w-auto disabled:cursor-not-allowed disabled:opacity-60"
                  whileHover={
                    !isSubmitting
                      ? { scale: 1.02 }
                      : undefined
                  }
                  whileTap={
                    !isSubmitting
                      ? { scale: 0.98 }
                      : undefined
                  }
                >

                  <FiSend className="w-4 h-4 mr-2" />

                  {isSubmitting
                    ? "Sending..."
                    : "Book Appointment"}

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