"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { pillarsData } from "../../data/content";
import { cn } from "../../lib/cn";

export function ExpandablePillars() {
  const [activeId, setActiveId] = useState<string>(pillarsData[0].id);

  return (
    <section className="bg-amber-300/20 py-10 sm:py-14 px-4 sm:px-8 overflow-hidden">
      <div className="container-lg mx-auto">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 text-left">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
            Pillars of Excellence
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-display font-extrabold text-[#800020]">
            Our Foundation & Philosophy
          </h2>
          <div className="mt-2 h-1 w-16 bg-[#800020] rounded-full" />
        </div>

        {/* Accordion Container */}
        <div className="flex flex-col lg:flex-row h-auto lg:h-[620px] w-full gap-1 rounded-2xl p-1 bg-[#800020]/40 backdrop-blur-md border border-amber-300/30 shadow-2xl">
          {pillarsData.map((item) => {
            const isActive = activeId === item.id;
            const isMaroonBg = item.bgColor.includes("800020");

            return (
              <motion.div
                key={item.id}
                layout
                onClick={() => setActiveId(item.id)}
                onMouseEnter={() => setActiveId(item.id)}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 26,
                  mass: 0.8,
                }}
                className={cn(
                  "relative flex flex-col justify-between rounded-xl p-5 sm:p-8 cursor-pointer overflow-hidden transition-all duration-500 border",
                  item.bgColor,
                  isActive
                    ? "lg:flex-[3.5] flex-1 border-white/20 shadow-xl"
                    : "lg:flex-[0.9] flex-none border-transparent hover:border-white/10"
                )}
              >
                {!isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="hidden lg:flex h-full flex-col justify-between items-center py-6"
                  >
                    <span
                      className={cn(
                        "font-display text-2xl font-bold tracking-tight rotate-180 [writing-mode:vertical-lr]",
                        isMaroonBg ? "text-white" : "text-slate-800"
                      )}
                    >
                      “{item.motto}”
                    </span>
                    <div
                      className={cn(
                        "flex h-9 w-9 items-center justify-center rounded-full border font-bold text-sm",
                        isMaroonBg
                          ? "border-white/30 text-white"
                          : "border-slate-400 text-slate-800"
                      )}
                    >
                      +
                    </div>
                  </motion.div>
                )}

                {!isActive && (
                  <div className="flex lg:hidden items-center justify-between py-2">
                    <span
                      className={cn(
                        "font-display text-lg font-bold truncate pr-4",
                        isMaroonBg ? "text-white" : "text-slate-900"
                      )}
                    >
                      “{item.motto}”
                    </span>
                    <span
                      className={cn(
                        "font-bold text-xl shrink-0",
                        isMaroonBg ? "text-amber-300" : "text-[#800020]"
                      )}
                    >
                      +
                    </span>
                  </div>
                )}

                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 15 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="relative z-10 flex flex-col md:flex-row justify-between h-full w-full gap-6 lg:gap-8"
                    >
                      <div className="flex flex-col justify-between h-full flex-1 max-w-xl">
                        <div className="space-y-4">
                          <span
                            className={cn(
                              "inline-block rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider",
                              isMaroonBg
                                ? "bg-amber-400/20 text-amber-300 border border-amber-300/30"
                                : "bg-[#800020]/10 text-[#800020] border border-[#800020]/20"
                            )}
                          >
                            {item.tag}
                          </span>

                          <h3
                            className={cn(
                              "font-display text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight",
                              isMaroonBg ? "text-amber-300" : "text-[#800020]"
                            )}
                          >
                            “{item.motto}”
                          </h3>

                          <p
                            className={cn(
                              "text-sm sm:text-base lg:text-lg leading-relaxed font-normal",
                              isMaroonBg ? "text-white/90" : "text-slate-700"
                            )}
                          >
                            {item.description}
                          </p>
                        </div>

                        <div className="pt-6">
                          <a
                            href={item.href}
                            className={cn(
                              "group inline-flex items-center gap-2.5 font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all",
                              isMaroonBg
                                ? "text-white hover:text-amber-300"
                                : "text-slate-900 hover:text-[#800020]"
                            )}
                          >
                            <span className="transition-transform group-hover:translate-x-1">→</span>
                            <span className="relative">
                              {item.linkText}
                              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-current transition-all duration-300 group-hover:w-full" />
                            </span>
                          </a>
                        </div>
                      </div>

                      {item.image && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.96 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                          className="relative h-48 sm:h-64 md:h-full w-full md:w-64 lg:w-72 rounded-xl overflow-hidden border border-white/20 shadow-2xl shrink-0 group"
                        >
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 256px, 288px"
                            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                            priority
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                          
                          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-medium text-white/90 drop-shadow">
                            <span>{item.title}</span>
                            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div
                  className={cn(
                    "absolute -right-10 -bottom-10 h-56 w-56 rounded-full blur-3xl pointer-events-none transition-opacity duration-500",
                    isActive ? "opacity-30" : "opacity-0",
                    isMaroonBg ? "bg-amber-300" : "bg-[#800020]"
                  )}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}