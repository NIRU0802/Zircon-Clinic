"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

interface GradientButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "gold" | "white" | "cta";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  className?: string;
}

const GradientButton = ({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon,
  className = "",
}: GradientButtonProps) => {
  const baseStyles =
    "relative inline-flex items-center justify-center font-semibold tracking-wider uppercase rounded-full overflow-hidden transition-all duration-500 group";

  const variants = {
    primary:
      "bg-primary-600 text-white hover:shadow-primary hover:-translate-y-0.5 hover:bg-primary-700",
    cta: "bg-cta-600 text-white hover:shadow-cta hover:-translate-y-0.5 hover:bg-cta-700",
    outline:
      "border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white hover:-translate-y-0.5",
    gold: "bg-gold-gradient text-dark-900 hover:shadow-gold hover:-translate-y-0.5",
    white:
      "bg-white text-dark-900 hover:shadow-premium hover:-translate-y-0.5",
  };

  const sizes = {
    sm: "px-6 py-3 text-xs",
    md: "px-8 py-4 text-sm",
    lg: "px-10 py-5 text-base",
  };

  const buttonContent = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && (
          <motion.span
            className="inline-block"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            {icon}
          </motion.span>
        )}
      </span>
      {variant === "primary" && (
        <span className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
      )}
      {variant === "cta" && (
        <span className="absolute inset-0 bg-gradient-to-r from-cta-700 to-cta-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
      )}
      {variant === "gold" && (
        <span className="absolute inset-0 bg-gradient-to-r from-gold-600 to-gold-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
      )}
    </>
  );

  const combinedClass = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClass}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <motion.button
      className={combinedClass}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
    >
      {buttonContent}
    </motion.button>
  );
};

export default GradientButton;