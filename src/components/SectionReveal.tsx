"use client";

import { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  threshold?: number;
}

/**
 * Componente wrapper para animaciones de entrada de secciones
 * Usa IntersectionObserver para revelar contenido al hacer scroll
 */
export default function SectionReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  threshold = 0.1,
}: SectionRevealProps) {
  const [ref, isInView] = useInView({ threshold, triggerOnce: true });

  const directionOffset =
    direction === "up"
      ? "translate-y-12"
      : direction === "left"
        ? "-translate-x-12"
        : direction === "right"
          ? "translate-x-12"
          : "";

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-700 ease-out ${
        isInView
          ? "opacity-100 translate-y-0 translate-x-0"
          : `opacity-0 ${directionOffset}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
