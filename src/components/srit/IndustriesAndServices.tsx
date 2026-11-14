import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { INDUSTRIES_DATA } from "../../data/blueprint/industriesData";
import { img } from "./assets";

export function IndustriesAndServices() {
  const [activeTab, setActiveTab] = useState(0);
  const currentVertical = INDUSTRIES_DATA[activeTab];

  return (
    <section id="industries" className="py-20 bg-white text-[#172b4d]">
      <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-display text-3xl font-bold text-[#102b50] sm:text-4xl">
            Industries & Services
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Over two decades of proven domain delivery across national healthcare networks, state municipal governance, telecom fiber backbones, and cyber defense.
          </p>
        </div>

        {/* Minimal Tab Buttons */}
        <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-4">
          {INDUSTRIES_DATA.map((vertical, index) => {
            const isSelected = activeTab === index;
            return (
              <button
                key={vertical.id}
                type="button"
                onClick={() => setActiveTab(index)}
                className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                  isSelected
                    ? "bg-[#102b50] text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                {vertical.name}
              </button>
            );
          })}
        </div>

        {/* Content Showcase */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentVertical.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center rounded-2xl border border-slate-200/90 bg-slate-50/50 p-7 sm:p-10"
            >
              {/* Left Column: Details */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <h3 className="font-display text-2xl font-bold text-[#102b50]">
                    {currentVertical.name}
                  </h3>
                  <p className="mt-1.5 text-base font-semibold text-[#079fdf]">
                    {currentVertical.tagline}
                  </p>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
                    {currentVertical.description}
                  </p>
                </div>

                {/* Products */}
                <div className="pt-3 border-t border-slate-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Proprietary Software Suites
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentVertical.products.map((prod, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                        <CheckCircle2 className="h-4 w-4 text-[#079fdf] shrink-0" />
                        <span>{prod}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Outcomes */}
                <div className="pt-3 border-t border-slate-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                    Scale & Delivery Metrics
                  </h4>
                  <div className="space-y-1.5">
                    {currentVertical.keyOutcomes.map((outcome, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                        <ChevronRight className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Visual */}
              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-soft aspect-[4/3]">
                  <img
                    src={img(currentVertical.imageAsset)}
                    alt={currentVertical.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
