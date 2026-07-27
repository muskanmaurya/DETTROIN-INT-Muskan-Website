"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqData } from "../../data/content";
import { cn } from "../../lib/cn";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [submitResult, setSubmitResult] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult("idle");

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY as string;

    if (!accessKey) {
      console.error("Missing NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY environment variable");
      setSubmitResult("error");
      setIsSubmitting(false);
      return;
    }

    formData.append("access_key", accessKey);
    formData.append("from_name", "Vasant Valley School Web Portal");

    const queryType = formData.get("inquiry_type") || "General Inquiry";
    formData.append("subject", `New Web Inquiry: ${queryType}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        console.error("Web3Forms responded with status", response.status);
        setSubmitResult("error");
        return;
      }

      const data: { success: boolean; message?: string } = await response.json();

      if (data && data.success) {
        setSubmitResult("success");
        formElement.reset();
      } else {
        console.error("Web3Forms error response:", data);
        setSubmitResult("error");
      }
    } catch (error: unknown) {
      console.error("Form transmission fault:", error);
      setSubmitResult("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-amber-300/20 py-20 sm:py-28 px-4 sm:px-8">
      <div className="container-lg mx-auto max-w-6xl">

        {/* Section Header */}
        <div className="mb-8 sm:mb-12 text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-[#800020]">
            GET IN TOUCH
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-display font-extrabold text-[#800020]">
            Frequently Asked Questions & Contact
          </h2>
          <div className="mt-2 h-1 w-16 bg-[#800020] rounded-full" />
        </div>

        <div className="grid gap-10 lg:grid-cols-12 items-start">
          
          {/* Left Column: Glassmorphic Contact Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-white/80 bg-white/70 p-6 sm:p-8 shadow-xl shadow-amber-900/5 backdrop-blur-md">
              <div className="mb-6 space-y-1">
                <span className="inline-block rounded-full bg-[#800020]/10 border border-[#800020]/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#800020]">
                  Admissions & Help Desk
                </span>
                <h3 className="font-display text-2xl font-bold text-slate-900">
                  Connect with Our Desk
                </h3>
                <p className="text-xs text-slate-600 font-normal">
                  Have specific queries about admissions or school life? Send us a message.
                </p>
              </div>

              <form onSubmit={handleSubmit} id="contact-form" className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Parent / Guardian Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. Ananya Sharma"
                      required
                      className="w-full rounded-xl border border-slate-200/80 bg-white/60 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none backdrop-blur-sm transition-all focus:border-[#800020] focus:bg-white focus:ring-1 focus:ring-[#800020]"
                    />
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Contact Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+91 98765 43210"
                        required
                        className="w-full rounded-xl border border-slate-200/80 bg-white/60 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none backdrop-blur-sm transition-all focus:border-[#800020] focus:bg-white focus:ring-1 focus:ring-[#800020]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="parent@example.com"
                        required
                        className="w-full rounded-xl border border-slate-200/80 bg-white/60 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none backdrop-blur-sm transition-all focus:border-[#800020] focus:bg-white focus:ring-1 focus:ring-[#800020]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Inquiry Category *
                    </label>
                    <select
                      name="inquiry_type"
                      required
                      className="w-full rounded-xl border border-slate-200/80 bg-white/60 px-4 py-3 text-sm text-slate-900 outline-none backdrop-blur-sm transition-all focus:border-[#800020] focus:bg-white focus:ring-1 focus:ring-[#800020]"
                    >
                      <option value="">Select Category</option>
                      <option value="Admissions 2026-27">Admissions Inquiry</option>
                      <option value="Special Needs Education">Special Education Needs (SEN)</option>
                      <option value="Transfer & Marksheets">Transfer & Marksheets</option>
                      <option value="General Information">General Campus Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Write your query here..."
                      className="w-full rounded-xl border border-slate-200/80 bg-white/60 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none backdrop-blur-sm transition-all focus:border-[#800020] focus:bg-white focus:ring-1 focus:ring-[#800020]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 w-full rounded-full bg-[#800020] py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md shadow-[#800020]/20 transition-all hover:bg-[#5c0017] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Submitting Inquiry..." : "Submit Inquiry →"}
                </button>

                {submitResult === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-3 rounded-xl bg-emerald-50 border border-emerald-200 p-3.5 text-xs font-medium text-emerald-800"
                  >
                    ✓ Thank you! Your inquiry has been transmitted to Vasant Valley admissions.
                  </motion.div>
                )}
                {submitResult === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-3 rounded-xl bg-rose-50 border border-rose-200 p-3.5 text-xs font-medium text-rose-800"
                  >
                    ✕ Transmission failed. Please verify your connection or call us directly.
                  </motion.div>
                )}
              </form>
            </div>
          </div>

          {/* Right Column: Glassmorphic FAQ Accordion Items */}
          <div className="lg:col-span-7 space-y-4">
            {faqData.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={cn(
                    "overflow-hidden rounded-2xl border backdrop-blur-md transition-all duration-300 shadow-sm",
                    isOpen
                      ? "border-[#800020]/30 bg-[#800020]/5 shadow-md ring-1 ring-[#800020]/10"
                      : "border-white/80 bg-white/60 hover:bg-white/80 hover:border-slate-300/80"
                  )}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="font-mono text-sm font-bold shrink-0 text-[#800020]">
                        [{String(index + 1).padStart(2, "0")}]
                      </span>
                      <h3 className="font-display font-bold text-base sm:text-lg leading-snug text-slate-900">
                        {faq.question}
                      </h3>
                    </div>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0 text-2xl font-light text-[#800020]"
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence mode="wait">
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <p className="border-t border-[#800020]/10 px-6 pb-6 pt-4 text-xs sm:text-sm leading-relaxed text-slate-700 ml-9 font-normal">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}