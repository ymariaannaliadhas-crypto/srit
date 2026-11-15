import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Search, ArrowRight } from "lucide-react";
import { SmartSearchModal } from "../../features/smart-search";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const PROMPT_SUGGESTIONS = [
  { label: "Connected Care", query: "Connected Care" },
  { label: "SAFE Kerala AI", query: "SAFE Kerala" },
  { label: "KFON Broadband", query: "KFON" },
  { label: "IPO Disclosures", query: "IPO" },
  { label: "Zero-Trust Defense", query: "Zero-Trust" },
];

export function Hero() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [initialSearchQuery, setInitialSearchQuery] = useState("");

  const handlePromptClick = (query: string) => {
    setInitialSearchQuery(query);
    setSearchOpen(true);
  };

  return (
    <>
      <section className="relative w-full overflow-hidden bg-black">
        <div className="relative flex min-h-[600px] items-center justify-center py-24 sm:min-h-[660px] sm:py-28 lg:min-h-[720px]">
          
          {/* Background video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 z-0 h-full w-full object-cover opacity-60"
          >
            <source src="/videos/srit blue video.mp4" type="video/mp4" />
          </video>

          {/* Dark overlay */}
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/85 via-black/50 to-black/30" />

          {/* Hero Content */}
          <div className="relative z-10 mx-auto w-full max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <div className="flex flex-col items-center">
              
              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 0.35, ease }}
                className="font-display text-3xl font-semibold tracking-tight leading-tight text-balance text-white sm:text-4xl md:text-5xl"
              >
                Meet ASK SRIT — Powering Digital India with Intelligence
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16, duration: 0.35, ease }}
                className="mt-4 max-w-2xl text-base leading-relaxed text-pretty text-gray-200"
              >
                Discover what SRIT can do. Explore our healthcare suites, public governance, broadband networks, and investor information.
              </motion.p>

              {/* Minimal ASK SRIT Search Bar */}
              <motion.div
                id="hero-search-bar"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24, duration: 0.35, ease }}
                className="mt-8 w-full max-w-xl"
              >
                <button
                  type="button"
                  onClick={() => {
                    setInitialSearchQuery("");
                    setSearchOpen(true);
                  }}
                  className="group flex w-full cursor-pointer items-center justify-between rounded-xl border border-white/20 bg-[#0a192f]/85 px-4 py-3.5 text-left transition-colors duration-200 hover:border-white/40 hover:bg-[#0a192f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079fdf]"
                >
                  <div className="flex items-center gap-3 text-left">
                    <Search className="h-4 w-4 text-white/70 transition-colors duration-200 group-hover:text-white" />
                    <span className="text-sm font-medium text-white/80 transition-colors duration-200 group-hover:text-white">
                      Ask SRIT anything...
                    </span>
                  </div>
                </button>

                {/* Clean prompt suggestions arranged neatly */}
                <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                  {PROMPT_SUGGESTIONS.map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => handlePromptClick(item.query)}
                      className="rounded-md border border-white/20 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-white/85 transition-colors duration-200 hover:border-white/40 hover:bg-white/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079fdf]"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>

          {/* Static announcement strip */}
          <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/15 bg-[#0a192f]/90 py-3.5 text-white">
            <div className="flex flex-wrap items-center justify-center gap-3 px-4 text-xs sm:text-sm font-medium">
              <span className="tabular-nums text-white/90">
                SRIT India Limited is officially listed on both the NSE and BSE, as of 6th October 2026.
              </span>
              <Link
                to="/investor"
                className="inline-flex items-center gap-1 rounded-sm font-semibold text-cyan-300 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079fdf]"
              >
                Investor Portal <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Smart Search Modal */}
      <SmartSearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        initialQuery={initialSearchQuery}
      />
    </>
  );
}
