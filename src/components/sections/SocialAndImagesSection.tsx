"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { socialGalleryData, SocialGalleryItem } from "../../data/content";
import { cn } from "../../lib/cn";

export function SocialAndImagesSection() {
  const row1 = [...socialGalleryData, ...socialGalleryData];
  const row2 = [
    ...socialGalleryData.slice().reverse(),
    ...socialGalleryData.slice().reverse(),
  ];

  return (
    <section className="relative bg-amber-300/20 py-16 sm:py-20 lg:py-24 px-4 sm:px-8 overflow-hidden">
      
      {/* Header Container */}
      <div className="mb-8 sm:mb-12 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 text-left">
        <span className="text-xs font-semibold uppercase tracking-widest text-amber-500">
          #LifeAtVasantValley
        </span>
        <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-[#800020]">
          Life, Learning & Community
        </h2>

        <div className="mt-2 h-1 w-16 bg-[#800020] rounded-full" />
        <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal max-w-2xl">
          A glimpse into the daily moments, achievements, and vibrant campus experience of our students.
        </p>
      </div>

      {/* Horizontal Floating Marquee Stage */}
      <div className="relative mx-auto w-full max-w-7xl overflow-hidden py-4 sm:py-6">

        {/* Responsive Side Vignette Overlays */}
        <div className="absolute inset-y-0 left-0 z-20 w-12 sm:w-24 lg:w-36 bg-gradient-to-r from-amber-300/20 via-amber-300/10 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 z-20 w-12 sm:w-24 lg:w-36 bg-gradient-to-l from-amber-300/20 via-amber-300/10 to-transparent pointer-events-none" />

        {/* Marquee Container with Dual Rows */}
        <div className="flex flex-col gap-2 sm:gap-3">

          {/* Row 1: Right to Left */}
          <HorizontalMarqueeRow items={row1} duration={35} reverse={false} />

          {/* Row 2: Left to Right */}
          <HorizontalMarqueeRow items={row2} duration={42} reverse={true} />

        </div>
      </div>

      {/* Social Follow CTA */}
      <div className="mt-10 sm:mt-12 text-center">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#800020] px-6 sm:px-8 py-3 sm:py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#800020]/20 transition-all hover:bg-[#5c0017] hover:scale-105"
        >
          <span>📷 Follow Us On Instagram</span>
        </a>
      </div>
    </section>
  );
}

function HorizontalMarqueeRow({
  items,
  duration = 35,
  reverse = false,
}: {
  items: SocialGalleryItem[];
  duration?: number;
  reverse?: boolean;
}) {
  return (
    <div className="relative flex w-full overflow-hidden">
      <motion.div
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration: duration,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex shrink-0 gap-2 sm:gap-2 lg:gap-3 pr-3 sm:pr-5 lg:pr-6"
      >
        {items.map((item, idx) => (
          <GalleryCard key={`${item.id}-${idx}`} item={item} />
        ))}
      </motion.div>
    </div>
  );
}

// Individual Photo Card Component with Precise Breakpoint Sizing
function GalleryCard({ item }: { item: SocialGalleryItem }) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-md border border-slate-200/80 bg-white shadow-md transition-all duration-500 hover:shadow-xl hover:border-[#800020]/40 shrink-0",
        
        "w-56 h-64",
        
        "sm:w-72 sm:h-80",
        
        "lg:w-96 lg:h-96"
      )}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(max-width: 640px) 224px, (max-width: 1024px) 288px, 384px"
        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
      />

      {/* Hover Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Caption Overlay */}
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 lg:p-6 text-white transform translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="font-display text-xs sm:text-base lg:text-lg font-bold leading-tight">
          {item.caption}
        </p>

        {item.likes && (
          <div className="mt-2 flex items-center justify-between text-xs text-amber-300 font-semibold">
            <span>❤️ {item.likes} Likes</span>
            <span className="text-[10px] uppercase text-white/80">#VasantValley</span>
          </div>
        )}
      </div>
    </div>
  );
}