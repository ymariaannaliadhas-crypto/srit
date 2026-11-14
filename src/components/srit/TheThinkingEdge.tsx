import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Clock } from "lucide-react";
import { VIEWPOINTS_DATA, ViewpointArticle } from "../../data/blueprint/viewpointsData";
import { ArticleReaderModal } from "./ArticleReaderModal";

export function TheThinkingEdge() {
  const [selectedArticle, setSelectedArticle] = useState<ViewpointArticle | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleReadClick = (article: ViewpointArticle) => {
    setSelectedArticle(article);
    setModalOpen(true);
  };

  return (
    <>
      <section id="the-thinking-edge" className="py-20 bg-slate-50/60 text-[#172b4d]">
        <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <h2 className="font-display text-3xl font-bold text-[#102b50] sm:text-4xl">
              The Thinking Edge
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Perspectives on enterprise AI, edge compute architectures, health data standards, and the growth of India’s digital public infrastructure.
            </p>
          </div>

          {/* 3-Column Card Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VIEWPOINTS_DATA.map((article, idx) => (
              <motion.div
                key={article.id}
                id={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06, duration: 0.45 }}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#079fdf]/50 hover:shadow-md scroll-mt-28"
              >
                <div>
                  {/* Category and Read time */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-md bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-700">
                      {article.categoryBadge}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-400">
                      <Clock className="h-3.5 w-3.5 text-slate-400" />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="mt-4 font-display text-lg font-bold leading-snug text-[#102b50] group-hover:text-[#079fdf] transition-colors">
                    {article.topicHeadline}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 line-clamp-3">
                    {article.shortDescription}
                  </p>
                </div>

                {/* Read Viewpoint button */}
                <div className="mt-6 pt-5 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => handleReadClick(article)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#079fdf] hover:text-[#092b55] transition-colors"
                  >
                    <span>Read Viewpoint</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Article Reader Modal */}
      <ArticleReaderModal
        article={selectedArticle}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
