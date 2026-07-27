"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { timelineEventsData } from "../../data/content";
import { cn } from "../../lib/cn";

export function TimeLineSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(
    timelineEventsData[0].id
  );

  return (
    <section className="relative bg-[#5c0017] py-20 sm:py-28 px-4 sm:px-8 overflow-hidden">
      {/* Soft Radial Backlight for Depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#800020] opacity-40 blur-3xl pointer-events-none" />

      <div className="container-lg relative z-10 mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
              CAMPUS CHRONICLES
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              A Timeline of Recent Events
            </h2>
            <div className="mt-2 h-1 w-16 bg-amber-300 rounded-full" />
          </div>

          {/* Archive Direct Links */}
          <div className="flex items-center gap-4 text-xs font-bold text-amber-200/90">
            <span className="uppercase tracking-widest text-amber-300/80">Browse Archives:</span>
            <a href="#june-2026" className="hover:text-white transition-colors">JUNE 2026 →</a>
            <a href="#may-2026" className="hover:text-white transition-colors">MAY 2026 →</a>
          </div>
        </div>

        {/* Timeline Stage with Real Connected Thread */}
        <div className="relative w-full pt-6">
          
          {/* 1. Horizontal Timeline Thread Line (Desktop & Tablet) */}
          <div className="hidden md:block absolute top-[112px] left-8 right-8 h-1 bg-amber-300/40 rounded-full z-0" />

          {/* 2. Vertical Timeline Thread Line (Mobile Only) */}
          <div className="md:hidden absolute top-0 bottom-0 left-6 w-1 bg-amber-300/40 rounded-full z-0" />

          {/* 3. Event Cards Stack / Flex Container */}
          <div className="relative z-10 flex flex-col md:flex-row items-stretch gap-6 md:gap-4 lg:gap-6">
            {timelineEventsData.map((event, index) => {
              const isHovered = hoveredId === event.id;

              return (
                <motion.div
                  key={event.id}
                  onMouseEnter={() => setHoveredId(event.id)}
                  onMouseLeave={() => setHoveredId(event.id)}
                  layout
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 24,
                  }}
                  className={cn(
                    "relative flex flex-col justify-between rounded-xl p-6 sm:p-7 transition-all duration-300 cursor-pointer overflow-hidden border shadow-xl",
                    // Light Canvas Card Styling on Dark Maroon Canvas
                    "bg-white text-slate-900 border-amber-200/60",
                    isHovered
                      ? "md:flex-[1.8] ring-4 ring-amber-300/40 shadow-2xl scale-[1.01]"
                      : "md:flex-[1] opacity-95 hover:opacity-100"
                  )}
                >
                  {/* Timeline Thread Connector Pin */}
                  <div className="hidden md:flex absolute -top-3 left-1/2 -translate-x-1/2 items-center justify-center">
                    <span className="h-4 w-4 rounded-full bg-amber-400 ring-4 ring-[#5c0017] shadow-md" />
                  </div>

                  <div>
                    {/* Header Row: Index & Category Pill */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-block rounded-full bg-[#800020]/10 border border-[#800020]/20 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#800020]">
                        {event.category}
                      </span>
                      <span className="font-display text-xl font-extrabold text-[#800020]/40">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Minimalist Modern Image Frame */}
                    <motion.div
                      animate={{ scale: isHovered ? 1.03 : 1 }}
                      transition={{ duration: 0.4 }}
                      className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden border border-slate-200/80 bg-slate-100 mb-5 shrink-0 shadow-sm"
                    >
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 384px"
                        className="object-cover object-center transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    </motion.div>

                    {/* Event Details */}
                    <div className="space-y-2">
                      <span className="text-xs font-semibold text-slate-500 block">
                        🗓️ {event.date}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-[#800020] leading-snug">
                        {event.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal pt-1">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Learn More Action Button */}
                  <div className="pt-5 mt-4 border-t border-slate-200/80 flex items-center justify-between">
                    <a
                      href={event.href}
                      className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#800020] hover:text-[#5c0017] transition-colors"
                    >
                      <span>Explore Event</span>
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </a>
                    <span className="h-2 w-2 rounded-full bg-[#800020]" />
                  </div>

                  {/* Top Accent Strip */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#800020]" />
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}