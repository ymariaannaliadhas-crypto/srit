import { useState } from "react";
import { motion } from "motion/react";
import { Play, ArrowRight } from "lucide-react";
import { CITIZEN_TOUCHPOINTS, CitizenTouchpoint } from "../../data/blueprint/touchpointsData";
import { VideoModal } from "./VideoModal";

export function CitizenTouchpoints() {
  const [selectedTouchpoint, setSelectedTouchpoint] = useState<CitizenTouchpoint | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleTouchpointClick = (tp: CitizenTouchpoint) => {
    setSelectedTouchpoint(tp);
    setModalOpen(true);
  };

  return (
    <>
      <section id="citizen-touchpoints" className="py-20 bg-white text-[#172b4d]">
        <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <h2 className="font-display text-3xl font-bold text-[#102b50] sm:text-4xl">
              Everyday Citizen Impact
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Everyday touchpoints powered by SRIT platforms—from highway safety vision to statewide public broadband and hospital care.
            </p>
          </div>

          {/* 5-Card Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CITIZEN_TOUCHPOINTS.map((tp, idx) => (
              <motion.div
                key={tp.id}
                id={tp.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06, duration: 0.45 }}
                onClick={() => handleTouchpointClick(tp)}
                className="group cursor-pointer flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-slate-50/40 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#079fdf]/50 hover:bg-white hover:shadow-md scroll-mt-28"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded bg-sky-50 px-2 py-0.5 text-xs font-semibold text-[#079fdf]">
                      {tp.badge}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-lg font-bold text-[#102b50] group-hover:text-[#079fdf] transition-colors">
                    {tp.domain}
                  </h3>
                  <h4 className="mt-1 text-sm font-semibold text-slate-700">
                    {tp.title}
                  </h4>

                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-600">
                    {tp.presenterScript}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-semibold text-[#079fdf]">
                  <span className="flex items-center gap-1.5">
                    <Play className="h-3.5 w-3.5 fill-current" /> View Details
                  </span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        touchpoint={selectedTouchpoint}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
