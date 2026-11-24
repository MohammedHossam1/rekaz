"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProjectGalleryProps {
  title: string;
  images: string[];
}

export function ProjectGallery({ title, images }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const mainImage = images[activeIndex] ?? images[0];

  return (
    <div className="space-y-5">
      {/* Main showcase image with smooth cross-fade */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[28px] border border-border/60 bg-black">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${mainImage}-${activeIndex}`}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-full w-full"
          >
            <Image
              src={mainImage}
              alt={title}
              fill
              priority
              sizes="(max-width: 1240px) 100vw, 1240px"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 5 thumbnails strip */}
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-5 sm:gap-4">
        {images.map((src, index) => {
          const active = index === activeIndex;
          return (
            <button
              key={`${src}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`${title} ${index + 1}`}
              className={cn(
                "relative aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-2xl border-2 transition-all duration-200 hover:scale-[1.02]",
                active
                  ? "border-primary ring-2 ring-primary/30"
                  : "border-transparent opacity-75 hover:opacity-100"
              )}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="220px"
                className="object-cover"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
