import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
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

  // Helper to render content with proper formatting for bullets and paragraphs
  const renderFormattedContent = (content: string) => {
    const paragraphs = content.split("\n\n");

    return (
      <div className="space-y-4">
        {paragraphs.map((p, pIdx) => {
          const lines = p.split("\n");
          const hasBullets = lines.some((l) => l.trim().startsWith("•") || /^\d+\.\s/.test(l.trim()));

          if (hasBullets) {
            return (
              <div key={pIdx} className="space-y-2.5 my-3 pl-1">
                {lines.map((line, lIdx) => {
                  const trimmed = line.trim();
                  if (trimmed.startsWith("•")) {
                    const cleanText = trimmed.replace(/^•\s*/, "");
                    const colonIndex = cleanText.indexOf(":");
                    
                    if (colonIndex > -1) {
                      const title = cleanText.substring(0, colonIndex);
                      const body = cleanText.substring(colonIndex + 1);
                      return (
                        <div key={lIdx} className="flex items-start gap-3 text-[15px] sm:text-[16px] text-[#172b4d]/80 leading-[1.65]">
                          <span className="mt-3 h-px w-3 shrink-0 bg-[#079fdf]" />
                          <p>
                            <strong className="text-[#102b50] font-semibold">{title}:</strong>
                            <span>{body}</span>
                          </p>
                        </div>
                      );
                    }

                    return (
                      <div key={lIdx} className="flex items-start gap-3 text-[15px] sm:text-[16px] text-[#172b4d]/80 leading-[1.65]">
                        <span className="mt-3 h-px w-3 shrink-0 bg-[#079fdf]" />
                        <p>{cleanText}</p>
                      </div>
                    );
                  } else if (/^\d+\.\s/.test(trimmed)) {
                    const match = trimmed.match(/^(\d+\.)\s*(.*)/);
                    const num = match ? match[1] : "";
                    const rest = match ? match[2] : trimmed;
                    const colonIndex = rest.indexOf(":");

                    if (colonIndex > -1) {
                      const title = rest.substring(0, colonIndex);
                      const body = rest.substring(colonIndex + 1);
                      return (
                        <div key={lIdx} className="flex items-start gap-3 text-[15px] sm:text-[16px] text-[#172b4d]/80 leading-[1.65]">
                          <span className="font-mono font-semibold tabular-nums text-[#079fdf] text-xs pt-1 shrink-0 min-w-[20px]">{num}</span>
                          <p>
                            <strong className="text-[#102b50] font-semibold">{title}:</strong>
                            <span>{body}</span>
                          </p>
                        </div>
                      );
                    }

                    return (
                      <div key={lIdx} className="flex items-start gap-3 text-[15px] sm:text-[16px] text-[#172b4d]/80 leading-[1.65]">
                        <span className="font-mono font-semibold tabular-nums text-[#079fdf] text-xs pt-1 shrink-0 min-w-[20px]">{num}</span>
                        <p>{rest}</p>
                      </div>
                    );
                  }

                  return (
                    <p key={lIdx} className="text-[15px] sm:text-[16px] text-[#172b4d]/80 leading-[1.65]">
                      {line}
                    </p>
                  );
                })}
              </div>
            );
          }

          return (
            <p key={pIdx} className="text-[15px] sm:text-[16px] text-[#172b4d]/80 leading-[1.65]">
              {p}
            </p>
          );
        })}
      </div>
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/45 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex flex-col max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-xl bg-white shadow-xl border border-slate-200/80"
          >
            {/* Top Navigation Bar */}
            <div className="border-b border-slate-200/80 bg-white px-6 py-4 sm:px-10 flex items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="font-medium text-[#172b4d]/55">
                  The Thinking Edge • Executive Viewpoint
                </span>
                <span className="text-slate-300" aria-hidden="true">•</span>
                <span className="font-semibold uppercase tracking-wider text-[#079fdf]">
                  {article.categoryBadge}
                </span>
                <span className="text-slate-300" aria-hidden="true">•</span>
                <span className="tabular-nums text-[#172b4d]/55 font-medium">
                  {article.readTime}
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close article"
                className="h-9 w-9 shrink-0 rounded-lg border border-slate-200/80 bg-[#fafbfc] hover:bg-slate-100 text-[#172b4d]/60 hover:text-[#102b50] transition-colors duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079fdf] flex items-center justify-center"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Reading Content Area */}
            <div className="flex-1 overflow-y-auto px-6 py-8 sm:px-10 sm:py-10 space-y-7 text-[#172b4d]">
              {/* Article Headline */}
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-[-0.025em] text-[#102b50] leading-snug text-balance">
                  {article.topicHeadline}
                </h2>
              </div>

              {/* Editorial Standfirst */}
              <p className="border-b border-slate-200/80 pb-6 text-base sm:text-[17px] leading-[1.65] text-[#172b4d]/85 text-pretty">
                {article.shortDescription}
              </p>

              {/* Formatted Subsections */}
              <div className="space-y-8 pt-1">
                {article.sections.map((sec, idx) => (
                  <div key={idx} className="space-y-3">
                    <h3 className="font-display text-lg sm:text-xl font-bold tracking-[-0.02em] text-[#102b50] text-balance">
                      {sec.heading.replace(/^\d+\.\s*/, "")}
                    </h3>
                    {renderFormattedContent(sec.content)}
                  </div>
                ))}
              </div>

              {/* Strategic Takeaway */}
              <div className="border-t-2 border-[#102b50] pt-6">
                <div className="text-[#079fdf] font-bold text-xs uppercase tracking-wider">
                  Strategic Takeaway
                </div>
                <p className="mt-2.5 font-display text-base sm:text-lg font-semibold text-[#102b50] leading-[1.6] text-pretty">
                  {article.keyTakeaway}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
