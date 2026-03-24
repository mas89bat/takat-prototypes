'use client';
/*
  TAKAT.AI FLOATING BANNER
  Brand Identity: takat.ai playbook
  Colors: Coral #FF6B5A, Midnight #0A0A0F, Charcoal #151520, Surface #1C1C2A,
          Indigo #5B3FD4, Cream #FFF5EE, Muted #9A95A8
  Typography: Instrument Serif (display), DM Sans (body), JetBrains Mono (labels)
  Gradient: linear-gradient(135deg, #FF6B5A, #F5A882, #FFB347)

  Behavior:
  - Small "powered by takat.ai" pill in bottom-left, always visible
  - After 10 seconds OR on pill click, a floating modal slides up
  - User can dismiss it; it won't reappear for that session
*/
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Calendar, ArrowRight, Sparkles } from "lucide-react";

const TAKAT_LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028599722/QmSvXAMTYyZkkYKg5USrWC/takat-ai-logo_60f32ada.png";
const TAKAT_WHATSAPP = "33781543166";

export default function TakatBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [timerFired, setTimerFired] = useState(false);

  // Auto-show after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimerFired(true);
      if (!dismissed) {
        setShowBanner(true);
      }
    }, 10000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  const handleDismiss = useCallback(() => {
    setShowBanner(false);
    setDismissed(true);
  }, []);

  const handlePillClick = useCallback(() => {
    if (!showBanner) {
      setShowBanner(true);
    }
  }, [showBanner]);

  return (
    <>
      {/* Small "powered by takat.ai" pill — always visible in bottom-left */}
      <motion.button
        onClick={handlePillClick}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="fixed bottom-6 left-6 z-40 flex items-center gap-2 px-3.5 py-2 rounded-full border transition-all duration-300 cursor-pointer group"
        style={{
          background: "rgba(10, 10, 15, 0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderColor: "rgba(255, 255, 255, 0.08)",
        }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        <Sparkles size={12} style={{ color: "#FF6B5A" }} />
        <span
          className="text-[11px] tracking-wide"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 500,
            color: "#9A95A8",
          }}
        >
          powered by{" "}
          <span style={{ color: "#FFF5EE", fontWeight: 600 }}>
            takat
          </span>
          <span style={{ color: "#FF6B5A", fontWeight: 600 }}>.ai</span>
        </span>
      </motion.button>

      {/* Floating Banner Modal */}
      <AnimatePresence>
        {showBanner && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleDismiss}
              className="fixed inset-0 z-[60]"
              style={{ background: "rgba(10, 10, 15, 0.6)", backdropFilter: "blur(4px)" }}
            />

            {/* Banner Card */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 60, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed z-[70] bottom-6 left-6 right-6 sm:left-auto sm:right-auto sm:bottom-8 sm:left-1/2 sm:-translate-x-1/2 w-auto sm:w-[520px] max-w-[calc(100vw-3rem)] overflow-hidden"
              style={{
                background: "#0A0A0F",
                borderRadius: "16px",
                border: "1px solid rgba(255, 255, 255, 0.06)",
                boxShadow: "0 16px 50px rgba(0, 0, 0, 0.6)",
              }}
            >
              {/* Top gradient band */}
              <div
                className="h-1 w-full"
                style={{ background: "linear-gradient(135deg, #FF6B5A, #F5A882, #FFB347)" }}
              />

              {/* Close button */}
              <button
                onClick={handleDismiss}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200 cursor-pointer"
                style={{ background: "rgba(255, 255, 255, 0.06)" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.12)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)")}
              >
                <X size={14} style={{ color: "#9A95A8" }} />
              </button>

              {/* Content */}
              <div className="px-6 pt-6 pb-5 sm:px-8 sm:pt-8 sm:pb-6">
                {/* Header with logo */}
                <div className="flex items-center gap-3 mb-5">
                  <img
                    src={TAKAT_LOGO}
                    alt="takat.ai"
                    className="h-7 w-auto"
                  />
                  <div
                    className="px-2.5 py-1 rounded-full text-[10px] tracking-widest uppercase"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 600,
                      background: "rgba(255, 107, 90, 0.15)",
                      color: "#FF6B5A",
                    }}
                  >
                    Digital Studio
                  </div>
                </div>

                {/* Headline — Instrument Serif italic per brand */}
                <h3
                  className="text-2xl sm:text-3xl leading-tight mb-3"
                  style={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontWeight: 400,
                    fontStyle: "italic",
                    color: "#FFF5EE",
                  }}
                >
                  Imagine your brand at its{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, #FF6B5A, #F5A882, #FFB347)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    best
                  </span>
                </h3>

                {/* Body — DM Sans per brand */}
                <p
                  className="text-sm leading-relaxed mb-6 max-w-md"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 400,
                    color: "#9A95A8",
                  }}
                >
                  We build digital experiences that don&apos;t just look good — they convert, engage,
                  and grow your business. Your next website could look just like this one.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  {/* Primary CTA — Coral button per brand */}
                  <a
                    href={`https://wa.me/${TAKAT_WHATSAPP}?text=${encodeURIComponent("Hi takat.ai! I saw your work and I'd love to discuss how you can help transform my digital presence.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm transition-all duration-200 group"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 600,
                      background: "#FF6B5A",
                      color: "#FFFFFF",
                      border: "2px solid #FF6B5A",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#E55A4A";
                      e.currentTarget.style.borderColor = "#E55A4A";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#FF6B5A";
                      e.currentTarget.style.borderColor = "#FF6B5A";
                    }}
                  >
                    <MessageCircle size={16} />
                    Chat to us
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  {/* Secondary CTA — Ghost button per brand */}
                  <a
                    href="https://calendly.com/takat-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm transition-all duration-200"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 600,
                      background: "transparent",
                      color: "#FFF5EE",
                      border: "2px solid rgba(255, 255, 255, 0.15)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#FFF5EE";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
                    }}
                  >
                    <Calendar size={16} />
                    Book a Call
                  </a>
                </div>
              </div>

              {/* Bottom micro-bar */}
              <div
                className="px-6 py-3 sm:px-8 flex items-center justify-between"
                style={{
                  borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                }}
              >
                <p
                  className="text-[10px]"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 500,
                    color: "rgba(154, 149, 168, 0.5)",
                    letterSpacing: "1px",
                  }}
                >
                  AI-POWERED DIGITAL EXPERIENCES
                </p>
                <a
                  href="https://takat.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] transition-colors duration-200"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 500,
                    color: "#9A95A8",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FFF5EE")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#9A95A8")}
                >
                  takat<span style={{ color: "#FF6B5A" }}>.</span>ai →
                </a>
              </div>

              {/* Decorative gradient orb */}
              <div
                className="absolute -bottom-20 -right-20 w-48 h-48 rounded-full pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, #FF6B5A, #F5A882, #FFB347)",
                  opacity: 0.04,
                }}
              />
              <div
                className="absolute -top-16 -left-16 w-32 h-32 rounded-full pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, #5B3FD4, #8B7AE8)",
                  opacity: 0.04,
                }}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
