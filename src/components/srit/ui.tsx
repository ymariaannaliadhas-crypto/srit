import { motion } from "motion/react";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

export function Reveal({
  children,
  delay = 0,
  y = 8,
  x: _x = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  className?: string;
}) {
  const subtleY = Math.min(Math.max(y, 0), 10);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: subtleY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.3, delay: Math.min(delay, 0.15), ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function Pill() {
  return <span className="inline-block h-px w-6 bg-[#079fdf]" aria-hidden="true" />;
}

export function Eyebrow({
  children,
  center,
  both: _both,
  light,
}: {
  children: ReactNode;
  center?: boolean;
  both?: boolean;
  light?: boolean;
}) {
  return (
    <div
      className={`flex items-center font-display text-xs font-bold uppercase tracking-wider ${
        light ? "text-cyan-300" : "text-[#079fdf]"
      } ${center ? "justify-center" : ""}`}
    >
      {children}
    </div>
  );
}

export function Heading({
  pre,
  hl,
  className = "",
  light,
}: {
  pre: string;
  hl?: string;
  className?: string;
  light?: boolean;
}) {
  return (
    <h2
      className={`font-display text-3xl font-bold tracking-tight leading-tight sm:text-4xl ${
        light ? "text-white" : "text-[#102b50]"
      } ${className}`}
    >
      {pre}{" "}
      {hl && <span className="text-[#079fdf]">{hl}</span>}
    </h2>
  );
}

export function BtnLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "white";
  className?: string;
}) {
  const cls =
    variant === "white"
      ? "bg-white text-[#102b50] hover:bg-gray-100"
      : "bg-[#079fdf] text-white hover:bg-[#102b50]";
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2.5 rounded-lg px-6 py-3 font-display text-sm font-semibold transition-colors duration-200 ${cls} ${className}`}
    >
      {children}
      <ChevronRight className="h-4 w-4" />
    </a>
  );
}
