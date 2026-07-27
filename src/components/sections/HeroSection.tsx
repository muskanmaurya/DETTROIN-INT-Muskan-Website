"use client";

import { motion } from "framer-motion";

export function HeroSection() {


    return (
        <section className="relative flex min-h-screen items-center overflow-hidden bg-black pt-[120px]">
            <div className="absolute inset-0 top-[67px] z-0">
                <video
                    className="h-full w-full object-cover object-center"
                    playsInline
                    muted
                    autoPlay
                    loop
                    preload="auto"
                >
                    <source src="/videos/herovideo.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/15 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-500/60 via-transparent to-gray-400/30" />
            </div>

            <div className="container-lg relative z-10 flex h-screen flex-col justify-center pt-32 pb-20">
                <div className="max-w-3xl space-y-6">

                    {/* Subtle Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#800020]/30 bg-[#800020]/10 px-4 py-1.5 backdrop-blur-md">
                        <span className="h-2 w-2 rounded-full bg-[#800020] animate-pulse" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#800020]">
                            36+ Years of Educational Excellence
                        </span>
                    </div>

                    {/* Clean Main Headline */}
                    <h1 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
                        Nurturing Independent Minds, <br />
                        <span className="text-[#800020]">Excellence in Deed.</span>
                    </h1>

                    {/* Subheading/Quote */}
                    <p className="text-base text-white/85 sm:text-lg leading-relaxed max-w-2xl font-normal">
                        Vasant Valley School encourages students to push the boundaries of current understanding and set benchmarks in the field of education—inculcating ethical values, original thinking, and global citizenship.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-4 pt-4">
                        <a
                            href="#about"
                            className="rounded-full bg-[#800020] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#5c0017] hover:shadow-red-900/30 hover:scale-105"
                        >
                            Explore Our Vision →
                        </a>
                    
                    </div>

                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
            >
            </motion.div>
        </section>
    );
}