import React from "react";

type HighlightCardProps = {
  variant?: "primary" | "gold";
  title?: string;
  subtitle?: string;
  description: string;
  footerText?: string;
  quoteSize?: "sm" | "lg";
};

export default function HighlightCard({
  variant = "primary",
  title,
  subtitle,
  description,
  footerText,
  quoteSize = "lg",
}: HighlightCardProps) {
  const styles =
    variant === "gold"
      ? "from-gold-500 via-amber-500 to-yellow-500 text-dark-900"
      : "from-primary-600 via-primary-500 to-primary-700 text-white";

  return (
    <div
      className={`relative overflow-hidden rounded-3xl bg-gradient-to-r ${styles} p-8 shadow-xl`}
    >
      {/* blobs */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
      <div className="pointer-events-none absolute -left-10 -bottom-10 h-28 w-28 rounded-full bg-white/10 blur-xl" />

      <div className="relative">
        <div
          className={`mb-4 leading-none ${
            quoteSize === "lg" ? "text-6xl" : "text-5xl"
          } opacity-60`}
        >
          &ldquo;
        </div>

        <p
          className={`text-lg leading-8 ${
            variant === "gold" ? "font-medium text-dark-900/90" : "text-white/95"
          }`}
        >
          {description}
        </p>

        <div className={`mt-6 h-px w-16 ${variant === "gold" ? "bg-dark-900/30" : "bg-white/30"}`} />

        {(title || subtitle || footerText) && (
          <div className="mt-5">
            {title && (
              <p
                className={`text-xs font-semibold uppercase tracking-[0.25em] ${
                  variant === "gold" ? "text-dark-900/80" : "text-primary-100"
                }`}
              >
                {title}
              </p>
            )}

            {subtitle && (
              <p
                className={`mt-1 text-sm ${
                  variant === "gold" ? "text-dark-900/60" : "text-white/80"
                }`}
              >
                {subtitle}
              </p>
            )}

            {footerText && (
              <p
                className={`mt-1 text-xs ${
                  variant === "gold" ? "text-dark-900/60" : "text-white/70"
                }`}
              >
                {footerText}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}