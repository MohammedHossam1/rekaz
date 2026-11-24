"use client";

import * as React from "react";
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

const LUXURY_EASE = [0.22, 1, 0.36, 1] as const;

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  distance?: number;
  scale?: number;
}

/**
 * RSC-safe scroll reveal wrapper. Server Components pass server-rendered JSX as children.
 */
export function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.7,
  distance = 28,
  scale = 1,
}: RevealProps) {
  const initialOffset = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  }[direction];

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: initialOffset.x,
        y: initialOffset.y,
        scale,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration,
        delay,
        ease: LUXURY_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Hero immediate entrance (animates on mount without waiting for scroll).
 */
export function HeroReveal({
  children,
  className,
  delay = 0,
  y = 24,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay, ease: LUXURY_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Staggered grid/list orchestrator (RSC-safe).
 */
export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.09,
  delayChildren = 0.05,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24, scale: 0.98 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.65, ease: LUXURY_EASE },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Subtle GPU-composited floating/breathing animation for golden 3D decorative swirls & globes.
 */
export function FloatAmbient({
  children,
  className,
  yRange = 10,
  duration = 6,
  rotateRange = 2,
}: {
  children: React.ReactNode;
  className?: string;
  yRange?: number;
  duration?: number;
  rotateRange?: number;
}) {
  return (
    <motion.div
      animate={{
        y: [0, -yRange, 0],
        rotate: [0, rotateRange, 0, -rotateRange, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Subtle scroll-linked parallax depth for showcase visuals.
 */
export function ParallaxBox({
  children,
  className,
  offset = 24,
}: {
  children: React.ReactNode;
  className?: string;
  offset?: number;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}

/**
 * Luxury spring-animated number counter (e.g., 10+, 4.8).
 */
export function AnimatedCounter({
  value,
  decimals = 0,
  className,
}: {
  value: number;
  decimals?: number;
  className?: string;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = React.useState(decimals > 0 ? value.toFixed(decimals) : String(value));

  React.useEffect(() => {
    if (!isInView) return;
    let frame = 0;
    const totalFrames = 36;
    const startVal = 0;

    const tick = () => {
      frame += 1;
      const progress = 1 - Math.pow(1 - frame / totalFrames, 3);
      const current = startVal + (value - startVal) * progress;
      setDisplay(decimals > 0 ? current.toFixed(decimals) : String(Math.round(current)));
      if (frame < totalFrames) {
        requestAnimationFrame(tick);
      }
    };

    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [isInView, value, decimals]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

/**
 * Ultra-thin luxury gold reading progress indicator at top of viewport.
 */
export function ScrollProgressBar({ className }: { className?: string }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className={cn(
        "pointer-events-none fixed inset-x-0 top-0 z-50 h-[2.5px] origin-start bg-gradient-to-r from-brand-dark via-primary to-brand-light",
        className
      )}
    />
  );
}
