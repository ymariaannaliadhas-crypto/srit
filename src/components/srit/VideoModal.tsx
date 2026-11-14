import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Play, Award } from "lucide-react";
import { CitizenTouchpoint } from "../../data/blueprint/touchpointsData";

interface VideoModalProps {
  touchpoint: CitizenTouchpoint | null;
  isOpen: boolean;
  onClose: () => void;
}

export function VideoModal({ touchpoint, isOpen, onClose }: VideoModalProps) {
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

  if (!touchpoint) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-10 flex flex-col w-full max-w-2xl overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-2xl text-slate-800"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200 bg-[#102b50] px-6 py-5 text-white">
              <span className="rounded bg-white/10 px-2.5 py-0.5 text-xs font-semibold text-cyan-300">
                {touchpoint.domain}
              </span>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg p-1.5 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Video Placeholder Area */}
            <div className="relative aspect-video bg-slate-900 flex flex-col items-center justify-center text-center px-6">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#079fdf] text-white shadow-md">
                <Play className="h-6 w-6 fill-current ml-0.5" />
              </div>
              <h4 className="mt-3 font-display text-base font-bold text-white">
                {touchpoint.title}
              </h4>
              <p className="mt-1 text-xs text-slate-300">
                Touchpoint Explainer
              </p>
            </div>

            {/* Content & Script */}
            <div className="p-6 space-y-4">
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Concept & Citizen Scenario
                </h5>
                <p className="mt-1.5 text-sm sm:text-base leading-relaxed text-slate-700">
                  "{touchpoint.presenterScript}"
                </p>
              </div>

              <div className="rounded-xl border border-sky-100 bg-sky-50/50 p-4">
                <h5 className="text-xs font-bold uppercase tracking-wider text-[#079fdf] flex items-center gap-1.5">
                  <Award className="h-3.5 w-3.5" /> Reference Projects
                </h5>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-700">
                  {touchpoint.proofPoints}
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-slate-200 bg-slate-50 px-6 py-3.5 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                SRIT Real-Life Impact Series
              </span>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg bg-[#102b50] px-4 py-1.5 text-xs font-semibold text-white hover:bg-[#092b55] transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
