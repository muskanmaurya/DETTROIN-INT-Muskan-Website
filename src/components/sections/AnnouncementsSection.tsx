"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { announcementsData } from "../../data/content";
import { cn } from "../../lib/cn";

export function AnnouncementsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress within the 300vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Maps scroll progress (0.0 to 1.0) across the 3 announcements
  const activeIndex = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 0, 1, 2]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-[#5c0017]">
      {/* Sticky Full-Viewport Stage with Glassmorphic Ambient Glow */}
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center px-6 sm:px-12 overflow-hidden">
    

        <div className="container-md relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
          
          {/* 1. Crest Logo (Fixed dimensioning prevents clipping behind top navbar) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white/95 p-3 shadow-2xl backdrop-blur-md border border-white/20"
          >
            <Image
              src="/assets/logo/no-bg-full-logo.png"
              alt="Vasant Valley Crest"
              width={64}
              height={64}
              className="h-full w-full object-contain"
              priority
            />
          </motion.div>

          {/* 2. Dynamic Sliding Content Frame */}
          <div className="relative min-h-[280px] sm:min-h-[240px] w-full flex items-center justify-center">
            {announcementsData.map((item, index) => (
              <AnnouncementCard
                key={item.id}
                item={item}
                index={index}
                activeIndex={activeIndex}
              />
            ))}
          </div>

          {/* 3. Progress Step Dots */}
          <div className="mt-8 flex items-center justify-center gap-3">
            {announcementsData.map((item, index) => (
              <ProgressDot
                key={item.id}
                index={index}
                activeIndex={activeIndex}
              />
            ))}
          </div>

          {/* 4. Subtle Scroll Cue */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            className="mt-6 text-[11px] font-semibold uppercase tracking-widest text-amber-200/70"
          >
            Scroll down to cycle announcements
          </motion.p>
        </div>
      </div>
    </section>
  );
}

// Sub-component handling clean text transitions & dark mode styling
function AnnouncementCard({
  item,
  index,
  activeIndex,
}: {
  item: (typeof announcementsData)[0];
  index: number;
  activeIndex: any;
}) {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    return activeIndex.on("change", (latest: number) => {
      setCurrentIdx(Math.round(latest));
    });
  }, [activeIndex]);

  const isActive = currentIdx === index;

  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute inset-0 flex flex-col items-center mt-35 justify-center"
        >

          {/* Main Title */}
          <h3 className="mt-4  font-display text-2xl sm:text-2xl lg:text-4xl md:min-w-xl sm:max-w-l font-bold tracking-tight text-white min-w-2xl leading-tight">
            {item.title}
          </h3>

          {/* Description Body */}
          <p className="mt-4 text-base mb-5 sm:text-md leading-relaxed text-white/85 min-w-2xl sm:max-w-l md:min-w-xl font-normal">
            {item.summary}
          </p>

          {/* Action Link */}
          {item.actionText && (
            <a
              href={item.href || "#"}
              className="mt-30  inline-flex items-center gap-2 font-bold text-xs sm:text-sm tracking-wider uppercase text-amber-300 hover:text-white transition-colors group"
            >
              <span className="transition-transform group-hover:translate-x-1">→</span>
              <span className="border-b border-amber-300/50 group-hover:border-white">
                {item.actionText}
              </span>
            </a>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Interactive step dot tracking active step
function ProgressDot({
  index,
  activeIndex,
}: {
  index: number;
  activeIndex: any;
}) {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    return activeIndex.on("change", (latest: number) => {
      setCurrentIdx(Math.round(latest));
    });
  }, [activeIndex]);

  const isActive = currentIdx === index;

  return (
    <div
      className={cn(
        "h-2.5 rounded-full transition-all duration-300",
        isActive ? "w-8 bg-amber-300 shadow-md shadow-amber-300/20" : "w-2.5 bg-white/30"
      )}
    />
  );
}