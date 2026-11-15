import { useState } from "react";
import { Play } from "lucide-react";
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
      <section
        id="citizen-touchpoints"
        className="border-b border-gray-200 bg-[#fafbfc] py-24 text-[#172b4d] sm:py-28"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Asymmetric Header */}
          <div className="mb-12 flex flex-col gap-4 border-b border-gray-200 pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#079fdf]">
                Real-Life Impact
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#102b50] sm:text-4xl">
                Everyday Citizen Touchpoints
              </h2>
            </div>

            <p className="max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
              Public digital infrastructure operating quietly behind highway safety, fiber broadband, hospital care, civic portals, and rural banking access.
            </p>
          </div>

          {/* 6-Column Structured Bento Grid (2x 3-col top row, 3x 2-col bottom row) */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6">
            {CITIZEN_TOUCHPOINTS.map((tp, index) => {
              const spanClass = index < 2 ? "lg:col-span-3" : "lg:col-span-2";
              return (
                <button
                  type="button"
                  key={tp.id}
                  id={tp.id}
                  onClick={() => handleTouchpointClick(tp)}
                  className={`group flex cursor-pointer scroll-mt-28 flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 text-left transition-colors duration-200 hover:border-[#079fdf] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079fdf] ${spanClass}`}
                >
                  <div>
                    {/* Domain & Category Metadata */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-200 pb-3.5">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#079fdf]">
                        {tp.domain}
                      </span>
                      <span className="rounded-md border border-gray-200 bg-[#fafbfc] px-2 py-0.5 text-[11px] font-medium text-gray-600">
                        {tp.badge}
                      </span>
                    </div>

                    {/* Headline */}
                    <h3 className="mt-4 font-display text-lg font-bold leading-snug tracking-tight text-[#102b50] transition-colors duration-200 group-hover:text-[#079fdf]">
                      {tp.title}
                    </h3>

                    {/* Scannable Proof-Point Line */}
                    <p className="mt-2.5 max-w-3xl text-sm leading-relaxed text-gray-600">
                      {tp.proofPoints}
                    </p>
                  </div>

                  {/* Footer Action */}
                  <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-4 text-xs font-semibold text-gray-600 transition-colors duration-200 group-hover:text-[#079fdf]">
                    <span>Watch explainer</span>
                    <Play className="h-3.5 w-3.5" aria-hidden="true" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video & Script Modal */}
      <VideoModal
        touchpoint={selectedTouchpoint}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
