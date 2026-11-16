import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Search, Sparkles, ArrowRight } from "lucide-react";
import { SmartSearchModal } from "../features/smart-search";
import { useNavigate } from "react-router-dom";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const SUGGESTIONS = [
  "HMIS / HIS Healthcare Suite",
  "AgniPermit e-Governance",
  "KFON Broadband OSS/BSS",
  "EMR — NABH Certified",
  "SAFE Kerala AI Traffic",
  "Investor Relations",
];

export function Hero() {
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [showHeroContent, setShowHeroContent] = useState(false);

  // Rotate suggestion text every 2.4s
  useEffect(() => {
    const t = setInterval(() => {
      setActiveSuggestion((prev) => (prev + 1) % SUGGESTIONS.length);
    }, 2400);
    return () => clearInterval(t);
  }, []);

useEffect(() => {
  const timer = setTimeout(() => {
    setShowHeroContent(true);
  }, 5000);

  return () => clearTimeout(timer);
}, []);

  // Global Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === "k" || e.key === "K")) {
        e.preventDefault();
        setSearchOpen((p) => !p);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <section className="relative mx-2 overflow-hidden rounded-[40px] bg-black md:mx-4">
        {/* Hero Section with content aligned to the bottom */}
        <div className="relative flex min-h-[600px] items-end justify-center pb-20 sm:min-h-[700px] lg:min-h-[750px] lg:pb-24">

          {/* Background video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 z-0 h-full w-full object-cover"
          >
            <source src="/videos/srit blue video.mp4" type="video/mp4" />
          </video>

          {/* Dark overlay */}
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20" />

{/* Hero content */}
{/* Hero content */}
<div className="relative z-10 mx-auto w-full max-w-[1300px] px-4 text-center sm:px-6 lg:px-8">
  <div className="flex flex-col items-center">

    {/* Hero Heading */}
<motion.h1
  initial={{ opacity: 0, y: 35 }}
  animate={showHeroContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
  transition={{ duration: 1.5, ease }}
  className="font-display text-2xl font-semibold tracking-tight text-white drop-shadow-md sm:text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-tight"
>
      Revolutionizing Healthcare and Beyond
    </motion.h1>

    {/* Hero Description */}
<motion.p
  initial={{ opacity: 0, y: 35 }}
  animate={showHeroContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
  transition={{ duration: 1.5, delay: 1.5, ease }}
  className="mt-2 w-full text-sm leading-relaxed text-white/80 md:leading-7"
>
      Since 1999, SRIT has been at the forefront of innovation,
      transforming industries such as Healthcare, eGovernance, and
      Telecoms. We are proud to announce that our flagship products –
      the Hospital Management Information Suite (HMIS/HIS) and the
      Electronic Medical Record (EMR) – are certified by the National
      Accreditation Board for Hospitals (NABH) under the esteemed
      Government of India. This endorsement underscores our commitment
      to delivering exceptional quality solutions and improving
      healthcare delivery across the nation.
    </motion.p>

              {/* ── AI SEARCH BAR ── */}
              <motion.div
  initial={{ opacity: 0, y: 35 }}
  animate={showHeroContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
  transition={{ duration: 1.5, delay: 3, ease }}
  className="mt-7 w-full max-w-[680px]"
>
                {/* Glow ring behind the bar */}
                <div className="relative">
                  <div className="pointer-events-none absolute -inset-[3px] rounded-2xl bg-gradient-to-r from-[#079fdf]/60 via-[#38bdf8]/40 to-[#079fdf]/60 blur-sm opacity-70" />

                  {/* The clickable search bar */}
                  <button
                    type="button"
                    onClick={() => setSearchOpen(true)}
                    className="relative flex w-full items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-3.5 text-left backdrop-blur-xl transition-all duration-300 hover:bg-white/15 hover:border-white/35 focus:outline-none sm:px-5 sm:py-4"
                  >
                    {/* Sparkles AI badge */}
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#079fdf] to-[#0369a1] shadow-lg shadow-[#079fdf]/30">
                      <Sparkles className="h-4.5 w-4.5 text-white" style={{ width: 18, height: 18 }} />
                    </div>

                    {/* Animated rotating suggestion text */}
                    <div className="flex-1 overflow-hidden">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold uppercase tracking-widest text-[#79d4f7]">
                          AI Search
                        </span>
                        <span className="h-3 w-px bg-white/20" />
                        <div className="relative h-5 flex-1 overflow-hidden">
                          {SUGGESTIONS.map((s, i) => (
                            <span
                              key={s}
                              className="absolute inset-0 flex items-center text-sm text-white/70 transition-all duration-500"
                              style={{
                                opacity: i === activeSuggestion ? 1 : 0,
                                transform: i === activeSuggestion ? "translateY(0)" : "translateY(8px)",
                              }}
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right: Search icon + kbd hint */}
                    <div className="flex shrink-0 items-center gap-2">
                      <kbd className="hidden rounded-lg border border-white/20 bg-white/10 px-2 py-1 text-[10px] font-semibold text-white/60 sm:block">
                        Ctrl K
                      </kbd>
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#079fdf] shadow-md">
                        <Search className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </button>
                </div>

                {/* Quick-access chips below bar */}
                <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
                  <span className="text-[11px] font-semibold text-white/40 uppercase tracking-wider">Try:</span>
                  {["HMIS", "EMR", "KFON", "Investors", "AI Traffic"].map((chip) => (
                    <button
                      key={chip}
                      type="button"
                      onClick={() => setSearchOpen(true)}
                      className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/8 px-3 py-1 text-[11px] font-medium text-white/65 backdrop-blur-sm transition-all duration-200 hover:border-[#079fdf]/60 hover:bg-[#079fdf]/15 hover:text-white"
                    >
                      <ArrowRight className="h-2.5 w-2.5" />
                      {chip}
                    </button>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>

          {/* Static announcement strip */}
          <div className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden border-t border-white/10 bg-[#142B50]/30 py-4 text-white backdrop-blur-md">
            <div className="flex items-center justify-center gap-5 px-4 sm:px-8">
              <span className="text-sm font-medium sm:text-base">
                SRIT India Limited is now officially listed on both the NSE and BSE,
                as of 6th October 2026.
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Smart Search Modal — shared state, opened from hero bar */}
      <SmartSearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        navigate={navigate}
      />
    </>
  );
}