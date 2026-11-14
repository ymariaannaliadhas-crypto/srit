import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Clock, Quote } from "lucide-react";
import { ViewpointArticle } from "../../data/blueprint/viewpointsData";

interface ArticleReaderModalProps {
  article: ViewpointArticle | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ArticleReaderModal({ article, isOpen, onClose }: ArticleReaderModalProps) {
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

  if (!article) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
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
            className="relative z-10 flex flex-col max-h-[88vh] w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="border-b border-slate-200 bg-[#102b50] px-6 py-6 text-white sm:px-8">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <span className="rounded bg-white/10 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-cyan-300">
                    {article.categoryBadge}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-white/70">
                    <Clock className="h-3.5 w-3.5 text-white/70" />
                    {article.readTime}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-lg p-1.5 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <h2 className="mt-3.5 font-display text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                {article.topicHeadline}
              </h2>
            </div>

            {/* Reading Content Area */}
            <div className="flex-1 overflow-y-auto px-6 py-8 sm:px-8 space-y-6 text-slate-800">
              
              {/* Lead paragraph */}
              <p className="text-base font-medium leading-relaxed text-slate-600 border-l-3 border-[#079fdf] pl-4">
                {article.shortDescription}
              </p>

              {/* Formatted Subsections */}
              <div className="space-y-6 pt-2">
                {article.sections.map((sec, idx) => (
                  <div key={idx} className="space-y-2">
                    <h3 className="font-display text-lg font-bold text-[#102b50]">
                      {sec.heading}
                    </h3>
                    <div className="text-sm sm:text-base leading-relaxed text-slate-700 whitespace-pre-line space-y-3">
                      {sec.content}
                    </div>
                  </div>
                ))}
              </div>

              {/* Key Takeaway Box */}
              <div className="rounded-xl border border-sky-100 bg-sky-50/60 p-6">
                <div className="flex items-center gap-1.5 text-[#079fdf] font-bold text-xs uppercase tracking-wider">
                  <Quote className="h-3.5 w-3.5" /> Key Takeaway
                </div>
                <p className="mt-2 font-display text-base font-semibold italic text-[#102b50] leading-snug">
                  "{article.keyTakeaway}"
                </p>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="border-t border-slate-100 bg-slate-50 px-6 py-4 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                SRIT Thought Leadership
              </span>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg bg-[#102b50] px-4 py-2 text-xs font-semibold text-white hover:bg-[#092b55] transition-colors"
              >
                Close Article
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
