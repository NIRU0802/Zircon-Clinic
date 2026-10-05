"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useState } from "react";

import SectionTitle from "@/components/ui/SectionTitle";
import { beforeAfterCases } from "@/data/beforeAfter";
import {
  staggerContainer,
  staggerItem,
} from "@/utils/animations";

interface BeforeAfterRevealProps {
  image: string;
  title: string;
}

function BeforeAfterReveal({
  image,
  title,
}: BeforeAfterRevealProps) {
  const [position, setPosition] = useState(50);
  const [isInteracting, setIsInteracting] = useState(false);

  const updatePosition = (
    clientX: number,
    element: HTMLDivElement
  ) => {
    const rect = element.getBoundingClientRect();

    const nextPosition =
      ((clientX - rect.left) / rect.width) * 100;

    setPosition(
      Math.max(
        0,
        Math.min(100, nextPosition)
      )
    );
  };

  const handlePointerEnter = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    if (event.pointerType === "mouse") {
      setIsInteracting(true);

      updatePosition(
        event.clientX,
        event.currentTarget
      );
    }
  };

  const handlePointerMove = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    if (
      event.pointerType === "mouse" ||
      event.pointerType === "touch" ||
      event.pointerType === "pen"
    ) {
      updatePosition(
        event.clientX,
        event.currentTarget
      );
    }

    if (
      event.pointerType === "touch" ||
      event.pointerType === "pen"
    ) {
      setIsInteracting(true);
    }
  };

  const handlePointerDown = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    if (
      event.pointerType === "touch" ||
      event.pointerType === "pen"
    ) {
      event.preventDefault();

      setIsInteracting(true);

      event.currentTarget.setPointerCapture(
        event.pointerId
      );

      updatePosition(
        event.clientX,
        event.currentTarget
      );
    }
  };

  const handlePointerUp = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    if (
      event.pointerType === "touch" ||
      event.pointerType === "pen"
    ) {
      setIsInteracting(false);

      try {
        event.currentTarget.releasePointerCapture(
          event.pointerId
        );
      } catch {
        // Pointer capture may already be released.
      }
    }
  };

  const handlePointerLeave = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    if (event.pointerType === "mouse") {
      setIsInteracting(false);
    }
  };

  return (
    <div
      className={`group/reveal relative aspect-[16/10] w-full touch-none select-none overflow-hidden ${
        isInteracting
          ? "cursor-none"
          : "cursor-crosshair"
      }`}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onPointerLeave={handlePointerLeave}
      role="slider"
      aria-label={`Reveal transformation result for ${title}`}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();

          setPosition((current) =>
            Math.max(0, current - 5)
          );
        }

        if (event.key === "ArrowRight") {
          event.preventDefault();

          setPosition((current) =>
            Math.min(100, current + 5)
          );
        }

        if (event.key === "Home") {
          event.preventDefault();
          setPosition(0);
        }

        if (event.key === "End") {
          event.preventDefault();
          setPosition(100);
        }
      }}
    >
      {/* Sharp base image */}
      <Image
        src={image}
        alt={`${title} before and after dental transformation`}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        quality={95}
        draggable={false}
        className="pointer-events-none object-cover"
      />

      {/* Blurred right side */}
      <div
        className="pointer-events-none absolute inset-0 z-10 overflow-hidden"
        style={{
          clipPath: `inset(0 0 0 ${position}%)`,
        }}
      >
        <Image
          src={image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={95}
          draggable={false}
          className="scale-[1.04] object-cover blur-[14px]"
        />

        <div className="absolute inset-0 bg-white/10" />
      </div>

      {/* Before label */}
      <div className="pointer-events-none absolute left-5 top-5 z-20">
        <span className="rounded-sm bg-black/45 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.22em] text-white shadow-sm backdrop-blur-md">
          Before
        </span>
      </div>

      {/* After label */}
      <div className="pointer-events-none absolute right-5 top-5 z-20">
        <span className="rounded-sm bg-primary-700/80 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.22em] text-white shadow-sm backdrop-blur-md">
          After
        </span>
      </div>

      {/* Reveal indicator */}
      <motion.div
        className="pointer-events-none absolute top-1/2 z-30 -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${position}%`,
        }}
        animate={{
          opacity: isInteracting ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
      >
        <div className="h-20 w-px bg-white/90 shadow-[0_0_10px_rgba(0,0,0,0.35)]" />

        <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_0_3px_rgba(0,0,0,0.15)]" />
      </motion.div>

      {/* First interaction hint */}
      <motion.div
        className="pointer-events-none absolute bottom-5 left-1/2 z-20 -translate-x-1/2"
        initial={{ opacity: 1 }}
        animate={{
          opacity: isInteracting ? 0 : 1,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        <div className="rounded-full bg-black/40 px-4 py-2 shadow-sm backdrop-blur-md">
          <span className="text-[8px] font-medium uppercase tracking-[0.2em] text-white/90">
            Move to reveal
          </span>
        </div>
      </motion.div>
    </div>
  );
}

const BeforeAfterSection = () => {
  const featuredCases = beforeAfterCases.slice(0, 4);

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f5fafc_18%,#eef7f8_55%,#f8fcfc_100%)] py-20 sm:py-24 lg:py-28">
      {/* Premium ambient lighting */}
      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] -translate-x-1/3 -translate-y-1/3 rounded-full bg-primary-200/25 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] translate-x-1/3 translate-y-1/3 rounded-full bg-cyan-200/20 blur-[120px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/60 blur-[120px]" />

      <div className="container-custom relative z-10">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle
            badge="Real Transformations"
            subtitle="Before & After"
            title='See the <span class="text-gradient">Difference</span>'
            description="Explore real treatment transformations achieved with personalized dental care at Zircon Dental & Implant Studio."
          />
        </div>

        {/* Cases */}
        <motion.div
          className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:mt-14 lg:gap-x-10 lg:gap-y-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
        >
          {featuredCases.map((item, index) => (
            <motion.article
              key={item.id}
              variants={staggerItem}
              className="group"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-[26px] border border-primary-100/80 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.07)] transition-all duration-500 group-hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
                <BeforeAfterReveal
                  image={item.image}
                  title={item.title}
                />
              </div>

              {/* Content */}
              <div className="px-1 pt-5">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-600">
                      {item.treatment}
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
                      {item.title}
                    </h3>
                  </div>

                  <span className="hidden pt-1 text-xs font-medium tracking-wider text-slate-400 sm:block">
                    {String(index + 1).padStart(2, "0")}{" "}
                    /{" "}
                    {String(
                      featuredCases.length
                    ).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Disclaimer */}
        <div className="mx-auto mt-16 max-w-2xl text-center">
          <p className="text-xs leading-6 text-slate-400">
            Individual results may vary. Treatment outcomes
            depend on each patient's dental condition,
            treatment plan, oral health, and response to
            care.
          </p>
        </div>

        {/* CTAs */}
        <motion.div
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <Link
            href="/before-after"
            className="group inline-flex items-center gap-3 border-b border-primary-600 pb-1 text-sm font-semibold text-primary-700 transition-colors hover:text-primary-900"
          >
            Explore All Transformations

            <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <span className="hidden h-5 w-px bg-primary-200 sm:block" />

          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-primary-700 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-800"
          >
            Discuss Your Smile Goals

            <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;