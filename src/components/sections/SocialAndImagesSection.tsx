// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { socialGalleryData, SocialGalleryItem } from "../../data/content";
// import { cn } from "../../lib/cn";

// export function SocialAndImagesSection() {
//   // Split gallery items into 3 columns for balanced masonry flow
//   const col1 = [...socialGalleryData, ...socialGalleryData];
//   const col2 = [
//     ...socialGalleryData.slice().reverse(),
//     ...socialGalleryData.slice().reverse(),
//   ];
//   const col3 = [...socialGalleryData, ...socialGalleryData];

//   return (
//     <section className="relative bg-[#FAFAF8] py-24 px-4 sm:px-8 overflow-hidden">
//       {/* Top Section Header */}
//       <div className="container-lg mx-auto mb-12 text-center max-w-2xl">
//         <span className="inline-block rounded-full bg-[#800020]/10 border border-[#800020]/20 px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#800020]">
//           #LifeAtVasantValley
//         </span>
//         <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
//           Life, Learning & Community
//         </h2>
//         <p className="mt-3 text-base text-slate-600 font-normal">
//           A glimpse into the daily moments, achievements, and vibrant campus experience of our students.
//         </p>
//       </div>

//       {/* Floating Masonry Gallery Stage */}
//       <div className="relative mx-auto max-w-6xl h-[680px] overflow-hidden rounded-3xl border border-slate-200/80 bg-white/50 p-2 shadow-2xl backdrop-blur-sm">

//         {/* Subtle Top & Bottom Vignette Fade Overlays */}
//         <div className="absolute inset-x-0 top-0 z-20 h-24 bg-gradient-to-b from-[#FAFAF8] via-[#FAFAF8]/80 to-transparent pointer-events-none" />
//         <div className="absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-[#FAFAF8] via-[#FAFAF8]/80 to-transparent pointer-events-none" />

//         {/* Responsive Column Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-full">

//           {/* Column 1 (Visible on all screens) */}
//           <FloatingColumn items={col1} duration={28} reverse={false} />

//           {/* Column 2 (Visible on Tablet & Up) */}
//           <div className="hidden sm:block h-full">
//             <FloatingColumn items={col2} duration={34} reverse={true} />
//           </div>

//           {/* Column 3 (Visible on Desktop & Up) */}
//           <div className="hidden lg:block h-full">
//             <FloatingColumn items={col3} duration={30} reverse={false} />
//           </div>

//         </div>
//       </div>

//       {/* Social Follow CTA Banner */}
//       <div className="mt-10 text-center">
//         <a
//           href="https://instagram.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-flex items-center gap-2 rounded-full bg-[#800020] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#800020]/20 transition-all hover:bg-[#5c0017] hover:scale-105"
//         >
//           <span>📷 Follow Us On Instagram</span>
//         </a>
//       </div>
//     </section>
//   );
// }

// // Sub-component handling infinite vertical scroll animation
// function FloatingColumn({
//   items,
//   duration = 30,
//   reverse = false,
// }: {
//   items: SocialGalleryItem[];
//   duration?: number;
//   reverse?: boolean;
// }) {
//   return (
//     <div className="relative h-full overflow-hidden">
//       <motion.div
//         animate={{
//           y: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
//         }}
//         transition={{
//           duration: duration,
//           ease: "linear",
//           repeat: Infinity,
//         }}
//         className="flex flex-col gap-4"
//       >
//         {items.map((item, idx) => (
//           <GalleryCard key={`${item.id}-${idx}`} item={item} />
//         ))}
//       </motion.div>
//     </div>
//   );
// }

// // Individual Photo Card with Smooth Hover Overlay
// function GalleryCard({ item }: { item: SocialGalleryItem }) {
//   return (
//     <div
//       className={cn(
//         "group relative w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-md transition-all duration-500 hover:shadow-xl hover:border-[#800020]/40",
//         item.aspect
//       )}
//     >
//       <Image
//         src={item.src}
//         alt={item.alt}
//         fill
//         sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//         className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
//       />

//       {/* Dark Hover Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

//       {/* Caption & Info Popup */}
//       <div className="absolute inset-x-0 bottom-0 p-4 text-white transform translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
//         <p className="font-display text-sm font-bold leading-tight">{item.caption}</p>

//         {item.likes && (
//           <div className="mt-2 flex items-center justify-between text-xs text-amber-300 font-semibold">
//             <span>❤️ {item.likes} Likes</span>
//             <span className="text-[10px] uppercase text-white/80">#VasantValley</span>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { socialGalleryData, SocialGalleryItem } from "../../data/content";
import { cn } from "../../lib/cn";

export function SocialAndImagesSection() {
    // Duplicate arrays to guarantee seamless infinite loop seamlessly
    const row1 = [...socialGalleryData, ...socialGalleryData];
    const row2 = [
        ...socialGalleryData.slice().reverse(),
        ...socialGalleryData.slice().reverse(),
    ];

    return (
        <section className="relative bg-[#FAFAF8] py-20 px-4 sm:px-8 overflow-hidden">
            
            <div className="mb-8 sm:mb-12 px-[12%] text-left">
                <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
                    #LifeAtVasantValley
                </span>
                <h2 className="mt-2 text-2xl sm:text-4xl font-display font-extrabold text-[#800020]">
                    Life, Learning & Community 
               </h2>

                <div className="mt-2 h-1 w-16 bg-[#800020] rounded-full" />
                <p className="mt-3 text-base text-slate-600 font-normal">
                    A glimpse into the daily moments, achievements, and vibrant campus experience of our students.
                </p>
            </div>

            {/* Horizontal Floating Marquee Stage */}
            <div className="relative mx-auto w-full max-w-7xl overflow-hidden py-6">

                {/* Subtle Left & Right Gradient Vignette Overlay */}
                <div className="absolute inset-y-0 left-0 z-20 w-18 sm:w-35 bg-gradient-to-r from-[#FAFAF8] via-[#FAFAF8]/80 to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 z-20 w-18 sm:w-35 bg-gradient-to-l from-[#FAFAF8] via-[#FAFAF8]/80 to-transparent pointer-events-none" />

                {/* Marquee Container with Dual Rows */}
                <div className="flex flex-col gap-6">

                    {/* Row 1: Right to Left */}
                    <HorizontalMarqueeRow items={row1} duration={35} reverse={false} />

                    {/* Row 2: Left to Right */}
                    <HorizontalMarqueeRow items={row2} duration={40} reverse={true} />

                </div>
            </div>

            {/* Social Follow CTA */}
            <div className="mt-12 text-center">
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#800020] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#800020]/20 transition-all hover:bg-[#5c0017] hover:scale-105"
                >
                    <span>📷 Follow Us On Instagram</span>
                </a>
            </div>
        </section>
    );
}

// Sub-component handling infinite horizontal translation
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
                className="flex shrink-0 gap-4 sm:gap-6 pr-4 sm:pr-6"
            >
                {items.map((item, idx) => (
                    <GalleryCard key={`${item.id}-${idx}`} item={item} />
                ))}
            </motion.div>
        </div>
    );
}

// Individual Photo Card Component
function GalleryCard({ item }: { item: SocialGalleryItem }) {
    return (
        <div
            className={cn(
                "group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-md transition-all duration-500 hover:shadow-xl hover:border-[#800020]/40 shrink-0",
                // Responsive Widths & Heights
                "w-64 sm:w-80 h-72 sm:h-80"
            )}
        >
            <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 256px, 320px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />

            {/* Hover Dark Gradient Mask */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Caption Overlay */}
            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 text-white transform translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="font-display text-sm sm:text-base font-bold leading-tight">
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