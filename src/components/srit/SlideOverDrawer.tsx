import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { HeroSolutionCard } from "../../data/blueprint/heroCardsData";

interface SlideOverDrawerProps {
  card: HeroSolutionCard | null;
  isOpen: boolean;
  onClose: () => void;
}

export function SlideOverDrawer({ card, isOpen, onClose }: SlideOverDrawerProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "suite" | "deployments">("overview");

  // Lock body scroll and Esc key listener
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) setActiveTab("overview");
  }, [isOpen, card]);

  if (!card) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
          />

          <div className="fixed inset-y-0 right-0 flex max-w-full pl-6 sm:pl-12">
            {/* Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="w-screen max-w-2xl bg-white shadow-xl flex flex-col sm:rounded-l-xl overflow-hidden border-l border-slate-200/80"
            >
              {/* Header */}
              <div className="border-b border-slate-200/80 bg-white px-6 pt-6 pb-0 sm:px-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="font-bold uppercase tracking-wider text-[#079fdf]">
                        {card.badge}
                      </span>
                      <span className="text-slate-300" aria-hidden="true">•</span>
                      <span className="font-medium text-[#172b4d]/55">
                        SRIT India Limited • Architecture Specification
                      </span>
                    </div>
                    <h2 className="mt-2 font-display text-2xl font-bold tracking-[-0.025em] text-[#102b50] sm:text-3xl leading-snug text-balance">
                      {card.title}
                    </h2>
                    <p className="mt-1.5 text-sm text-[#172b4d]/75 leading-relaxed">
                      {card.cardTeaser}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close drawer"
                    className="h-9 w-9 shrink-0 rounded-lg border border-slate-200/80 bg-[#fafbfc] hover:bg-slate-100 text-[#172b4d]/60 hover:text-[#102b50] transition-colors duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079fdf] flex items-center justify-center mt-1"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {/* Architectural Underline Tabs */}
                <div className="mt-6 flex gap-6 border-t border-slate-100 pt-1">
                  <button
                    type="button"
                    onClick={() => setActiveTab("overview")}
                    className={`relative -mb-px border-b-2 pb-3 pt-2.5 text-xs sm:text-sm font-semibold transition-colors duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079fdf] rounded-t-sm ${
                      activeTab === "overview"
                        ? "border-[#079fdf] text-[#102b50]"
                        : "border-transparent text-[#172b4d]/60 hover:text-[#102b50]"
                    }`}
                  >
                    Overview
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("suite")}
                    className={`relative -mb-px border-b-2 pb-3 pt-2.5 text-xs sm:text-sm font-semibold transition-colors duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079fdf] rounded-t-sm ${
                      activeTab === "suite"
                        ? "border-[#079fdf] text-[#102b50]"
                        : "border-transparent text-[#172b4d]/60 hover:text-[#102b50]"
                    }`}
                  >
                    Platform Suite
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("deployments")}
                    className={`relative -mb-px border-b-2 pb-3 pt-2.5 text-xs sm:text-sm font-semibold transition-colors duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079fdf] rounded-t-sm ${
                      activeTab === "deployments"
                        ? "border-[#079fdf] text-[#102b50]"
                        : "border-transparent text-[#172b4d]/60 hover:text-[#102b50]"
                    }`}
                  >
                    Deployments
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto px-6 py-7 sm:px-8 bg-white">
                {activeTab === "overview" && (
                  <div className="space-y-8">
                    <div>
                      <h4 className="font-display text-lg font-bold tracking-[-0.02em] text-[#102b50] leading-snug text-balance">
                        {card.drawer.headlineTitle}
                      </h4>
                      <p className="mt-3 text-[15px] leading-[1.65] text-[#172b4d]/75 text-pretty">
                        {card.drawer.strategicNarrative}
                      </p>
                    </div>

                    <div className="border-t border-slate-200/80 pt-6">
                      <div className="text-[#079fdf] font-bold text-xs uppercase tracking-wider">
                        Proven Scale &amp; Impact
                      </div>
                      <div className="mt-3 divide-y divide-slate-200/80 border-y border-slate-200/80">
                        {card.drawer.provenMetrics.map((metric, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3.5 py-3.5"
                          >
                            <span className="mt-2.5 h-px w-3 bg-[#079fdf] shrink-0" />
                            <span className="text-sm font-semibold tabular-nums text-[#102b50] leading-snug">
                              {metric}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "suite" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#172b4d]/55">
                        Proprietary Software Suites
                      </span>
                      <span className="text-xs text-[#079fdf] font-semibold tabular-nums">
                        {card.drawer.proprietarySuite.length} Platforms
                      </span>
                    </div>

                    <div className="divide-y divide-slate-200/80 border-y border-slate-200/80">
                      {card.drawer.proprietarySuite.map((product, idx) => (
                        <div
                          key={idx}
                          className="py-5 sm:grid sm:grid-cols-12 sm:gap-6"
                        >
                          <h4 className="sm:col-span-5 font-display text-[15px] font-bold text-[#102b50] leading-snug">
                            {product.name}
                          </h4>
                          <p className="mt-1.5 sm:mt-0 sm:col-span-7 text-sm leading-[1.6] text-[#172b4d]/75 text-pretty">
                            {product.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "deployments" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#172b4d]/55">
                        Spotlight Deployments
                      </span>
                      <span className="text-xs text-[#079fdf] font-semibold">
                        Population Scale
                      </span>
                    </div>

                    <div className="divide-y divide-slate-200/80 border-y border-slate-200/80">
                      {card.drawer.spotlightDeployments.map((dep, idx) => (
                        <div
                          key={idx}
                          className="py-5"
                        >
                          <h4 className="font-display text-base font-bold text-[#102b50] leading-snug">
                            {dep.client}
                          </h4>
                          <p className="mt-1.5 text-sm tabular-nums leading-[1.6] text-[#172b4d]/75 text-pretty">
                            {dep.details}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
