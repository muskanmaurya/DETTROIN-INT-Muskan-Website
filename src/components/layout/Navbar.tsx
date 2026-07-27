"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "../../data/content";
import { cn } from "../../lib/cn";
import { IoCall } from "react-icons/io5";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[#5c0017]/50 backdrop-blur-xl shadow-xl border-b border-white/10"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent"
      )}
    >
      {/* Top Banner Branding */}
      <div className="border-b border-white/10 bg-[#800020]/95 backdrop-blur-md px-4 py-2.5">
        <div className="container-lg flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="#" className="relative flex items-center gap-2 group">
              <Image
                src="/assets/logo/white-bg-full-logo.png"
                alt="Vasant Valley Logo"
                width={140}
                height={32}
                className="h-10 w-auto rounded bg-white/90 p-1 transition-transform duration-300 group-hover:scale-105"
                priority
              />
              <span className="text-xl font-bold tracking-tight text-white font-display">
                Vasant Valley <span className="text-amber-300 text-xs uppercase tracking-widest block font-sans font-normal opacity-90">School</span>
              </span>
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-sm transition-all hover:border-amber-300 hover:bg-amber-300/20 md:flex"
            >
              <span> <IoCall/>  </span>
              Contact Us
            </a>

            <button
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                {mobileOpen ? (
                  <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="2" />
                ) : (
                  <path d="M2 5h16M2 10h16M2 15h16" stroke="currentColor" strokeWidth="2" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Primary Navigation Bar */}
      <nav className="hidden border-b border-white/10 md:block">
        <div className="container-lg flex items-center justify-between py-3">
          <ul className="flex items-center gap-7">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="group flex items-center gap-1.5 text-sm font-medium text-white/90 transition-colors hover:text-amber-300 py-1"
                >
                  <span className="relative">
                    {item.label}
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-amber-300 transition-all duration-300 group-hover:w-full" />
                  </span>
                  {item.subItems && (
                    <svg
                      width="10"
                      height="7"
                      viewBox="0 0 10 7"
                      className="opacity-70 transition-transform group-hover:rotate-180"
                    >
                      <path d="M1 1l4 5 4-5" stroke="currentColor" fill="none" strokeWidth="1.5" />
                    </svg>
                  )}
                </a>

                {/* Glassmorphic Dropdown */}
                <AnimatePresence>
                  {activeDropdown === item.label && item.subItems && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute left-0 top-full z-50 mt-2 w-72 rounded-2xl border border-white/20 bg-[#5c0017]/80 p-5 shadow-2xl backdrop-blur-xl ring-1 ring-black/10"
                    >
                      <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-amber-300/90">
                        {item.label} Section
                      </p>
                      <ul className="space-y-1">
                        {item.subItems.map((sub) => (
                          <li key={sub.label}>
                            <a
                              href={sub.href}
                              className="block rounded-lg px-3 py-2 text-sm text-white/85 transition-all hover:bg-white/15 hover:text-white hover:translate-x-1"
                            >
                              {sub.label}
                            </a>
                          </li>
                        ))}
                      </ul>

                      {item.featured && (
                        <div className="mt-4 border-t border-white/10 pt-3">
                          <div className="rounded-xl bg-amber-400/10 border border-amber-300/20 p-3 backdrop-blur-sm">
                            <p className="text-[10px] uppercase font-bold text-amber-300 tracking-wider">Highlight</p>
                            <p className="mt-1 text-xs font-medium text-white/90">{item.featured}</p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-white/10 bg-[#5c0017]/95 backdrop-blur-2xl md:hidden overflow-hidden"
          >
            <ul className="container-lg space-y-1 py-4 px-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="block rounded-lg px-4 py-2.5 text-base font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-amber-300"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}