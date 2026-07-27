"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonialsData } from "../../data/content";
import { cn } from "../../lib/cn";

export function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative bg-[#5c0017] py-20 sm:py-28 px-4 sm:px-8 overflow-hidden">
      {/* Soft Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#800020] opacity-50 blur-3xl pointer-events-none" />

      <div className="container-lg relative z-10 mx-auto max-w-6xl">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col justify-between rounded-3xl border border-white/15 bg-white/5 p-6 sm:p-8 backdrop-blur-md shadow-xl transition-all duration-300 hover:border-amber-300/40 hover:bg-[#800020]/40"
            >
              <div>
                {/* Header Row: Rating Stars & Category Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-300">
                    {[...Array(item.rating)].map((_, i) => (
                      <span key={i} className="text-sm">★</span>
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300/90 bg-amber-400/10 border border-amber-300/20 px-2.5 py-0.5 rounded-full">
                    {item.batchOrRelation}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base leading-relaxed text-white/90 font-normal italic relative z-10">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Details Footer */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-display text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.author}
                  </h4>
                  <p className="text-xs text-white/70 font-normal mt-0.5">
                    {item.role}
                  </p>
                </div>

                {/* Quote Mark Icon */}
                <span className="font-serif text-3xl font-bold text-amber-300/30 group-hover:text-amber-300/60 transition-colors">
                  “
                </span>
              </div>

              {/* Subtle Top Accent Highlight */}
              <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-amber-300/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}