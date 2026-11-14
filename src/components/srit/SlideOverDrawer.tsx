import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2, Building2, TrendingUp, Layers } from "lucide-react";
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
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
          />

          <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
            {/* Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="w-screen max-w-2xl bg-white shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="border-b border-slate-200 bg-[#102b50] px-6 py-6 text-white sm:px-8">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="inline-block rounded-md bg-white/10 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-cyan-300">
                      {card.badge}
                    </span>
                    <h2 className="mt-2.5 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      {card.title}
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-lg p-2 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Tabs */}
                <div className="mt-6 flex border-b border-white/15 text-sm">
                  <button
                    type="button"
                    onClick={() => setActiveTab("overview")}
                    className={`pb-3 font-medium transition-colors border-b-2 mr-6 ${
                      activeTab === "overview"
                        ? "border-[#079fdf] text-white"
                        : "border-transparent text-white/60 hover:text-white"
                    }`}
                  >
                    Overview
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("suite")}
                    className={`pb-3 font-medium transition-colors border-b-2 mr-6 ${
                      activeTab === "suite"
                        ? "border-[#079fdf] text-white"
                        : "border-transparent text-white/60 hover:text-white"
                    }`}
                  >
                    Products & Technology
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("deployments")}
                    className={`pb-3 font-medium transition-colors border-b-2 ${
                      activeTab === "deployments"
                        ? "border-[#079fdf] text-white"
                        : "border-transparent text-white/60 hover:text-white"
                    }`}
                  >
                    Deployments
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 bg-slate-50/60">
                {activeTab === "overview" && (
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-display text-lg font-bold text-[#102b50]">
                        {card.drawer.headlineTitle}
                      </h4>
                      <p className="mt-3 text-base leading-relaxed text-slate-700">
                        {card.drawer.strategicNarrative}
                      </p>
                    </div>

                    {/* Delivery Metrics */}
                    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                      <div className="flex items-center gap-2 text-[#079fdf] font-semibold text-sm">
                        <TrendingUp className="h-4 w-4" /> Proven Scale & Impact
                      </div>
                      <div className="mt-4 space-y-3">
                        {card.drawer.provenMetrics.map((metric, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="text-sm font-medium text-slate-800">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "suite" && (
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                      <Layers className="h-4 w-4 text-[#079fdf]" /> Proprietary Platforms
                    </h3>
                    <div className="grid gap-3.5">
                      {card.drawer.proprietarySuite.map((product, idx) => (
                        <div
                          key={idx}
                          className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                        >
                          <h4 className="font-display font-bold text-[#102b50] text-base">
                            {product.name}
                          </h4>
                          <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                            {product.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "deployments" && (
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-[#079fdf]" /> Key State & National Deployments
                    </h3>
                    <div className="grid gap-3.5">
                      {card.drawer.spotlightDeployments.map((dep, idx) => (
                        <div
                          key={idx}
                          className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                        >
                          <span className="inline-block rounded bg-sky-50 px-2 py-0.5 text-xs font-semibold text-[#079fdf]">
                            {dep.client}
                          </span>
                          <p className="mt-2 text-sm leading-relaxed text-slate-700">
                            {dep.details}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="border-t border-slate-200 bg-white px-6 py-4 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  SRIT India Limited
                </span>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-lg bg-[#102b50] px-4 py-2 text-xs font-semibold text-white hover:bg-[#092b55] transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
