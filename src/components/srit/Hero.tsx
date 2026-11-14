import { useState } from "react";
import { motion } from "motion/react";
import { Search, ArrowRight } from "lucide-react";
import { SmartSearchModal } from "../../features/smart-search";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const PROMPT_SUGGESTIONS = [
  { label: "Connected Care & ABHA", query: "Connected Care" },
  { label: "SAFE Kerala AI", query: "SAFE Kerala" },
  { label: "KFON Broadband", query: "KFON" },
  { label: "NSE & BSE Listing", query: "IPO" },
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
      <section className="relative mx-2 overflow-hidden rounded-[36px] bg-black md:mx-4">
        <div className="relative flex min-h-[580px] items-center justify-center py-20 sm:min-h-[640px] lg:min-h-[700px]">
          
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
          <div className="relative z-10 mx-auto w-full max-w-[1100px] px-4 text-center sm:px-6 lg:px-8">
            <div className="flex flex-col items-center">
              
              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.8, ease }}
                className="font-display text-3xl font-semibold tracking-tight text-white drop-shadow-md sm:text-4xl md:text-5xl lg:text-[2.75rem] lg:leading-tight"
              >
                Meet ASK SRIT — Powering Digital India with Intelligence
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease }}
                className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base"
              >
                Discover what SRIT can do. Explore our healthcare suites, public governance, broadband networks, and investor information.
              </motion.p>

              {/* Minimal ASK SRIT Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.8, ease }}
                className="mt-7 w-full max-w-xl"
              >
                <div
                  onClick={() => {
                    setInitialSearchQuery("");
                    setSearchOpen(true);
                  }}
                  className="group flex cursor-pointer items-center justify-between rounded-full border border-white/20 bg-white/10 px-5 py-3 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/15"
                >
                  <div className="flex items-center gap-3 text-left">
                    <Search className="h-5 w-5 text-white/70 group-hover:text-white transition-colors" />
                    <span className="text-sm font-medium text-white/80 group-hover:text-white">
                      Ask SRIT anything...
                    </span>
                  </div>

                  <span className="hidden rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 text-xs font-medium text-white/70 sm:inline-block">
                    Ctrl + K
                  </span>
                </div>

                {/* Clean prompt suggestions */}
                <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                  {PROMPT_SUGGESTIONS.map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => handlePromptClick(item.query)}
                      className="rounded-full border border-white/15 bg-black/25 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm transition-colors hover:border-white/30 hover:bg-white/15 hover:text-white"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>

          {/* Static announcement strip */}
          <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-[#142B50]/50 py-3.5 text-white backdrop-blur-md">
            <div className="flex flex-wrap items-center justify-center gap-3 px-4 text-xs sm:text-sm font-medium">
              <span className="text-white/90">
                SRIT India Limited is officially listed on both the NSE and BSE, as of 6th October 2026.
              </span>
              <a
                href="/investor"
                className="inline-flex items-center gap-1 font-semibold text-cyan-300 hover:text-white transition-colors"
              >
                Investor Portal <ArrowRight className="h-3.5 w-3.5" />
              </a>
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
