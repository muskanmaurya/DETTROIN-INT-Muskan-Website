"use client";

import Image from "next/image";
import { footerData } from "../../data/content";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#5c0017]/95 text-white/80 backdrop-blur-xl overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-[#800020] opacity-40 blur-3xl pointer-events-none" />

      {/* Main Footer Container */}
      <div className="container-lg relative z-10 mx-auto px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          
          {/* Column 1: Brand Info & Contact Details */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-white/95 p-1.5 shadow-md">
                <Image
                  src="/assets/logo/white-bg-full-logo.png"
                  alt="Vasant Valley Logo"
                  width={36}
                  height={36}
                  className="h-9 w-auto object-contain"
                />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white tracking-tight">
                  {footerData.brand.name}
                </h3>
                <p className="text-[10px] uppercase font-semibold text-amber-300 tracking-widest">
                  {footerData.brand.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-white/70 font-normal">
              {footerData.brand.description}
            </p>

            {/* Direct Contact Details */}
            <div className="space-y-1.5 pt-2 text-xs text-white/80">
              <p className="flex items-center gap-2">
                <span className="text-amber-300">📍</span>
                <span>{footerData.brand.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-amber-300">📞</span>
                <a href={`tel:${footerData.brand.phone}`} className="hover:text-amber-300 transition-colors">
                  {footerData.brand.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-amber-300">✉️</span>
                <a href={`mailto:${footerData.brand.email}`} className="hover:text-amber-300 transition-colors">
                  {footerData.brand.email}
                </a>
              </p>
            </div>
          </div>

          {/* Columns 2-5: Organized Categorized Links */}
          {footerData.columns.map((col) => (
            <div key={col.title} className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300/90 border-b border-white/10 pb-2">
                {col.title}
              </h4>
              <ul className="space-y-2 text-xs">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="inline-block text-white/75 transition-all duration-200 hover:text-white hover:translate-x-1"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Bar: Copyright & Social Icons */}
        <div className="mt-14 border-t border-white/10 pt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-white/60">
          <p>© {new Date().getFullYear()} Vasant Valley School. All rights reserved.</p>

          {/* Social Icons Container */}
          <div className="flex items-center gap-4">
            {footerData.socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all hover:border-amber-300 hover:bg-amber-300/20 hover:text-white"
                aria-label={social.name}
              >
                {social.icon === "Facebook" && <FaFacebook className="h-4 w-4" />}
                {social.icon === "Instagram" && <BsInstagram className="h-4 w-4" />}
                {social.icon === "LinkedIn" && <LiaLinkedin className="h-4 w-4" />}
                {social.icon === "YouTube" && <BsYoutube className="h-4 w-4" />}
              </a>
            ))}
          </div>

          <div className="flex gap-4 text-white/50">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#statutory" className="hover:text-white transition-colors">Statutory Compliances</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
