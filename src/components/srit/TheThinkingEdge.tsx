import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { VIEWPOINTS_DATA, ViewpointArticle } from "../../data/blueprint/viewpointsData";
import { ArticleReaderModal } from "./ArticleReaderModal";

export function TheThinkingEdge() {
  const [selectedArticle, setSelectedArticle] = useState<ViewpointArticle | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const handleReadClick = (article: ViewpointArticle) => {
    setSelectedArticle(article);
    setModalOpen(true);
  };

  // Show top 4 by default, or all 7 when expanded
  const displayedArticles = showAll ? VIEWPOINTS_DATA : VIEWPOINTS_DATA.slice(0, 4);
  const featuredArticle = displayedArticles[0];
  const secondaryArticles = displayedArticles.slice(1);

  return (
    <>
      <section
        id="the-thinking-edge"
        className="border-b border-gray-200 bg-[#fafbfc] py-24 text-[#172b4d] sm:py-28"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Asymmetric Section Header */}
          <div className="mb-12 flex flex-col gap-6 border-b border-gray-200 pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-wider text-[#079fdf]">
                Executive Viewpoints
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#102b50] sm:text-4xl">
                The Thinking Edge
              </h2>
              <p className="mt-3 text-base leading-relaxed text-gray-600">
                Architectural perspectives on sovereign AI, edge compute, Digital Public Infrastructure, and population-scale system integration.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="inline-flex cursor-pointer items-center gap-2 self-start rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-xs font-semibold text-[#102b50] transition-colors duration-200 hover:border-[#079fdf] hover:text-[#079fdf] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079fdf] sm:text-sm lg:self-auto"
            >
              <span>{showAll ? "Show Top 4" : "View All 7 Perspectives"}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Main Asymmetric Editorial Split */}
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
            {/* Left: Featured Editorial Lead */}
            {featuredArticle && (
              <div className="lg:col-span-5">
                <button
                  type="button"
                  id={featuredArticle.id}
                  onClick={() => handleReadClick(featuredArticle)}
                  className="group flex w-full cursor-pointer scroll-mt-28 flex-col justify-between rounded-xl border border-gray-200 bg-white p-7 text-left transition-colors duration-200 hover:border-[#079fdf] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079fdf] sm:p-8"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#079fdf]">
                        {featuredArticle.categoryBadge}
                      </span>
                      <span className="text-xs font-medium text-gray-500">
                        {featuredArticle.readTime}
                      </span>
                    </div>

                    <h3 className="mt-6 font-display text-2xl font-bold leading-snug tracking-tight text-[#102b50] transition-colors duration-200 group-hover:text-[#079fdf]">
                      {featuredArticle.topicHeadline}
                    </h3>

                    <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-600">
                      {featuredArticle.shortDescription}
                    </p>

                    {/* Editorial Pull-Quote Callout */}
                    <blockquote className="my-6 rounded-r-lg border-l-2 border-[#079fdf] bg-[#fafbfc] py-3 pl-4 pr-3 text-sm font-medium leading-relaxed text-[#102b50]">
                      {featuredArticle.keyTakeaway}
                    </blockquote>
                  </div>

                  <div className="mt-2 flex items-center justify-between border-t border-gray-200 pt-4 text-xs font-semibold text-gray-600 transition-colors duration-200 group-hover:text-[#079fdf]">
                    <span>Read perspective</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </button>
              </div>
            )}

            {/* Right: Scannable Viewpoints Ledger */}
            <div className="lg:col-span-7">
              <div className="divide-y divide-gray-200 overflow-hidden rounded-xl border border-gray-200 bg-white">
                {secondaryArticles.map((article) => (
                  <button
                    type="button"
                    key={article.id}
                    id={article.id}
                    onClick={() => handleReadClick(article)}
                    className="group block w-full cursor-pointer scroll-mt-28 p-6 text-left transition-colors duration-200 hover:bg-[#fafbfc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#079fdf] sm:p-7"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#079fdf]">
                        {article.categoryBadge}
                      </span>
                      <span className="text-xs font-medium text-gray-500">
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="mt-3 font-display text-lg font-bold leading-snug tracking-tight text-[#102b50] transition-colors duration-200 group-hover:text-[#079fdf] sm:text-xl">
                      {article.topicHeadline}
                    </h3>

                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-600">
                      {article.shortDescription}
                    </p>

                    <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-gray-600 transition-colors duration-200 group-hover:text-[#079fdf]">
                      <span>Read perspective</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Distraction-Free Article Reader Modal */}
      <ArticleReaderModal
        article={selectedArticle}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
