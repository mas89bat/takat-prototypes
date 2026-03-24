'use client';
/*
  TakatStrip: Lead generation strip for takat.ai
  Appears at the bottom of every page, below the site footer.
  Features: takat.ai wordmark with colored dot, WhatsApp chat, Calendly booking, marketing CTA
*/
import { motion } from "framer-motion";
import { MessageCircle, Calendar, ArrowRight, Sparkles } from "lucide-react";

const TAKAT_LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028599722/QmSvXAMTYyZkkYKg5USrWC/takat-ai-logo_60f32ada.png";
const TAKAT_WHATSAPP = "33781543166";

export default function TakatStrip() {
  return (
    <div className="relative overflow-hidden">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#6C5CE7] to-transparent" />

      {/* Main strip */}
      <div className="bg-[#0a0a14] relative">
        {/* Subtle animated gradient background */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#6C5CE7] rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#E8593A] rounded-full blur-[120px]" />
        </div>

        {/* Top bar: Logo + Contact options */}
        <div className="relative z-10 border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Takat logo wordmark */}
            <a
              href="https://takat.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group"
            >
              <img
                src={TAKAT_LOGO}
                alt="takat.ai"
                className="h-7 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </a>

            {/* Contact options */}
            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href={`https://wa.me/${TAKAT_WHATSAPP}?text=${encodeURIComponent("Hi takat.ai! I saw your work and I'd love to discuss how you can help transform my digital presence.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] text-xs sm:text-sm font-medium rounded-full hover:bg-[#25D366]/20 transition-all duration-300"
              >
                <MessageCircle size={15} />
                <span>Chat to us</span>
              </a>
              <a
                href="https://calendly.com/takat-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#6C5CE7]/10 border border-[#6C5CE7]/20 text-[#6C5CE7] text-xs sm:text-sm font-medium rounded-full hover:bg-[#6C5CE7]/20 transition-all duration-300"
              >
                <Calendar size={15} />
                <span>Book a Call</span>
              </a>
            </div>
          </div>
        </div>

        {/* Marketing CTA section */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/[0.04] border border-white/[0.08] rounded-full mb-6">
                <Sparkles size={13} className="text-[#6C5CE7]" />
                <span className="text-[11px] sm:text-xs text-white/50 font-medium tracking-wider uppercase">
                  Crafted by takat.ai
                </span>
              </div>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4"
            >
              Imagine a world where your brand is the{" "}
              <span className="bg-gradient-to-r from-[#6C5CE7] to-[#E8593A] bg-clip-text text-transparent">
                best version of itself
              </span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-white/40 leading-relaxed max-w-xl mx-auto mb-8"
            >
              We build digital experiences that don&apos;t just look good — they convert, engage, and grow your business.
              Your next website could look just like this one.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <a
                href={`https://wa.me/${TAKAT_WHATSAPP}?text=${encodeURIComponent("Hi takat.ai! I'd love to discuss how you can help build a professional website for my business.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#6C5CE7] to-[#5A4BD1] text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-[#6C5CE7]/25 transition-all duration-300 group"
              >
                Get Your Dream Website
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://takat.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-white/50 text-sm font-medium hover:text-white/70 transition-colors duration-300"
              >
                See our portfolio
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom micro-bar */}
        <div className="relative z-10 border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-center">
            <p className="text-[10px] sm:text-xs text-white/20">
              &copy; {new Date().getFullYear()} takat.ai — AI-powered digital experiences for forward-thinking businesses
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
