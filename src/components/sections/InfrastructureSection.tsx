"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { infrastructureData } from "../../data/content";

export function InfrastructureSection() {
  return (
    <section className="relative bg-[#5c0017] py-10 sm:py-28 px-4 sm:px-8 overflow-hidden">
      {/* Soft Ambient Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#800020] opacity-30 blur-3xl pointer-events-none" />

      <div className="container-lg relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-10 items-center">
          
          {/* LEFT COLUMN: Narrative Content (Occupies 4/10 = 40% Space) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-4 space-y-6"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
              {infrastructureData.tag}
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              {infrastructureData.heading}
            </h2>
            <div className="mt-2 h-1 w-16 bg-amber-300 rounded-full" />
          </div>
          </div>

            {/* Sandstone Quote Highlight */}
            <p className="text-base sm:text-lg font-bold leading-relaxed text-amber-300 border-l-2 border-amber-300/40 pl-4 py-1">
              "{infrastructureData.highlightQuote}"
            </p>

            {/* Body Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-white/85 leading-relaxed font-normal">
              <p>{infrastructureData.paragraph1}</p>
              <p>{infrastructureData.paragraph2}</p>
            </div>

            {/* Action Links */}
            <div className="pt-4 flex flex-wrap items-center gap-6">
              <a
                href={infrastructureData.ctaHref}
                className="group inline-flex items-center gap-3 font-bold text-xs sm:text-sm tracking-wider uppercase text-amber-300 hover:text-white transition-colors"
              >
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
                <span className="border-b border-amber-300/40 pb-0.5 group-hover:border-white">
                  {infrastructureData.ctaText}
                </span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Vibrant Zigzag Stack (Occupies 6/10 = 60% Space) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-6 relative flex flex-col gap-6 sm:gap-8 py-4"
          >
            {infrastructureData.stackedImages.map((img, idx) => {
              const zigzagAlign = [
                "self-start mr-auto w-full sm:w-[90%]",
                "self-end ml-auto w-full sm:w-[90%]",
                "self-start mr-auto w-full sm:w-[90%]",
              ];

              return (
                <div
                  key={img.label}
                  className={`group relative h-52 sm:h-64 lg:h-72 overflow-hidden rounded-2xl border-2 border-white/20 shadow-2xl transition-all duration-500 hover:border-amber-300 hover:scale-[1.02] ${zigzagAlign[idx % 3]}`}
                >
                  {/* Clean Full-Color Image (No Dark Fades) */}
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 700px"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    priority={idx === 0}
                  />

                  {/* Subtle Bottom Vignette ONLY for Badge Readability */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />

                  {/* Badge Label Overlay */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-semibold text-white drop-shadow-md">
                    <span className="inline-block rounded-md bg-black/60 px-3 py-1.5 backdrop-blur-md border border-white/20 text-amber-300 font-bold">
                      {img.label}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-amber-300 shadow-sm shadow-amber-300" />
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}