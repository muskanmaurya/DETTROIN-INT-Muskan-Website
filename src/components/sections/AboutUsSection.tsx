"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { aboutData } from "../../data/content";

export function AboutUsSection() {
  return (
    <section id="about" className="bg-[#FAFAF8] py-20 sm:py-28 px-4 sm:px-8">
      <div className="container-lg mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Vertical Leadership Cards (5 Cols on Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {aboutData.leadership.map((person, idx) => (
              <div
                key={person.name}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:border-[#800020]/40"
              >
                {/* 1. TOP 5/8 (62.5%) SECTION: Tall Vertical Image Frame */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 250px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle Gradient Fade Over Image Base */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
                  
                  {/* Badge */}
                  <span className="absolute top-3 left-3 rounded-full bg-[#800020]/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-300 backdrop-blur-sm shadow-sm">
                    {idx === 0 ? "Chairperson" : "Founder"}
                  </span>
                </div>

                {/* 2. BOTTOM 3/8 SECTION: Leadership Meta Info */}
                <div className="flex flex-col justify-between p-5 bg-white flex-1 space-y-1">
                  <div>
                    <h4 className="font-display text-lg font-bold text-slate-900 group-hover:text-[#800020] transition-colors leading-snug">
                      {person.name}
                    </h4>
                    <p className="text-xs text-slate-500 font-normal leading-relaxed mt-1">
                      {person.role}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-[#800020]">
                    <span>Vasant Valley Leadership</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>

                {/* Left Border Brand Highlight */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#800020] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            ))}
          </motion.div>

          {/* RIGHT COLUMN: About Copy (7 Cols on Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="lg:col-span-7 space-y-6"
          >

            {/* Main Title */}
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#800020] leading-tight tracking-tight">
              {aboutData.mainQuote}
            </h2>

            {/* History Brief */}
            <p className="text-base sm:text-lg leading-relaxed text-slate-700 font-normal">
              {aboutData.brief}
            </p>

            {/* Vision Block */}
            <p className="text-sm sm:text-base leading-relaxed text-slate-600 font-normal border-l-2 border-[#800020]/20 pl-4 py-1">
              {aboutData.visionPhilosophy}
            </p>

            {/* Link Trigger */}
            <div className="pt-4">
              <a
                href={aboutData.ctaHref}
                className="group inline-flex items-center gap-3 font-bold text-xs sm:text-sm tracking-wider uppercase text-slate-900 transition-colors hover:text-[#800020]"
              >
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
                <span className="relative">
                  {aboutData.ctaText}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#800020] transition-all duration-300 group-hover:w-full" />
                </span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}