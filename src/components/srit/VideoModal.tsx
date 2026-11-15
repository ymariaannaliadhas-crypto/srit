import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Play } from "lucide-react";
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
            transition={{ duration: 0.15 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex flex-col w-full max-w-2xl overflow-hidden rounded-xl bg-white border border-slate-200/80 shadow-xl text-[#172b4d]"
          >
            {/* Top Media Stage */}
            <div className="relative aspect-video bg-[#0a192f] flex flex-col justify-between p-5 sm:p-6 text-white border-b border-slate-200/80">
              <div className="flex items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="font-bold uppercase tracking-wider text-[#38bdf8]">
                    {touchpoint.domain}
                  </span>
                  <span className="text-white/25" aria-hidden="true">•</span>
                  <span className="font-medium text-slate-400">
                    SRIT Real-Life Impact Series
                  </span>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close modal"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white/80 transition-colors duration-150 ease-out hover:bg-white/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8]"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white">
                <Play className="h-5 w-5 fill-current ml-0.5" />
              </div>

              <div className="flex items-center justify-between text-[11px] font-medium uppercase tracking-wider text-slate-400">
                <span>Touchpoint Briefing • Video Placeholder</span>
              </div>
            </div>

            {/* Bottom Context Panel */}
            <div className="bg-white p-6 sm:p-7 space-y-4">
              <div>
                <h4 className="font-display text-lg sm:text-xl font-bold tracking-[-0.02em] text-[#102b50] leading-snug text-balance">
                  {touchpoint.title}
                </h4>
                <p className="mt-2 text-sm leading-[1.6] text-[#172b4d]/80 text-pretty">
                  {touchpoint.presenterScript}
                </p>
              </div>

              <div className="border-t border-slate-200/80 pt-4">
                <h5 className="text-xs font-bold uppercase tracking-wider text-[#079fdf]">
                  Reference Projects
                </h5>
                <p className="mt-1 text-xs sm:text-sm tabular-nums leading-[1.6] text-[#102b50] text-pretty">
                  {touchpoint.proofPoints}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
