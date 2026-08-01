"use client";

import { motion } from "framer-motion";
import { testimonialsData } from "../../data/content";

export function ReviewsSection() {
  return (
    <section className="relative bg-[#5c0017] py-20 sm:py-28 px-4 sm:px-8 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#800020] opacity-30 blur-3xl pointer-events-none" />

      <div className="container-lg relative z-10 mx-auto max-w-6xl">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
              VOICES OF OUR COMMUNITY
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              What Parents & Alumni Say
            </h2>
            <div className="mt-2 h-1 w-16 bg-amber-300 rounded-full" />
          </div>
        </div>

        {/* Testimonials Grid Stage */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {testimonialsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              /* Added overflow-hidden below */
              className="group relative flex flex-col justify-between rounded-xl border border-amber-200/60 bg-[#FAFAF8] p-6 sm:p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-amber-300 hover:scale-[1.01] overflow-hidden"
            >
              <div>
                {/* Header Row: Rating Stars & Category Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <span key={i} className="text-sm">★</span>
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#800020] bg-[#800020]/10 border border-[#800020]/20 px-3 py-1 rounded-full">
                    {item.batchOrRelation}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal italic relative z-10">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Details Footer */}
              <div className="pt-5 mt-6 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <h3 className="font-display text-base font-bold text-[#800020] leading-snug">
                    {item.author}
                  </h3>
                  <p className="text-xs text-slate-500 font-normal mt-0.5">
                    {item.role}
                  </p>
                </div>

                {/* Quote Icon */}
                <span className="font-serif text-3xl font-bold text-[#800020]/20 group-hover:text-[#800020]/40 transition-colors">
                  “
                </span>
              </div>

              {/* Top Accent Highlight */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#800020] rounded-t-3xl" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}