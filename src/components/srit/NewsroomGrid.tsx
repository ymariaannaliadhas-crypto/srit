import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { NEWSROOM_STORIES } from "../../data/blueprint/newsroomData";

export function NewsroomGrid() {
  const featuredStory = NEWSROOM_STORIES[0]; // IPO Listing
  const topStories = NEWSROOM_STORIES.slice(1, 4); // Top 3 curated stories

  return (
    <section
      id="newsroom"
      className="border-b border-gray-200 bg-white py-24 text-[#172b4d] sm:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-4 border-b border-gray-200 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#079fdf]">
              Corporate Highlights
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#102b50] sm:text-4xl">
              Top Stories &amp; Newsroom
            </h2>
          </div>

          <Link
            to="/investor?tab=financials"
            className="inline-flex items-center gap-1.5 self-start text-xs font-semibold text-[#079fdf] transition-colors duration-200 hover:text-[#102b50] sm:self-auto sm:text-sm"
          >
            <span>All Corporate Disclosures</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* 12-Column Asymmetric Split Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
          {/* Left: Featured Milestone Card (5 cols) */}
          <div className="flex flex-col justify-between rounded-xl border border-gray-200 bg-[#fafbfc] p-7 sm:p-8 lg:col-span-5">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#079fdf]">
                  {featuredStory.category}
                </span>
                <span className="text-gray-300">&bull;</span>
                <span className="text-xs font-medium text-gray-500">
                  {featuredStory.date}
                </span>
              </div>

              <h3 className="mt-4 font-display text-xl font-bold leading-snug tracking-tight text-[#102b50] sm:text-2xl">
                {featuredStory.displayHeadline}
              </h3>

              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-600 sm:text-base">
                {featuredStory.summarySnippet}
              </p>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-6">
              <div className="mb-5 border-l-2 border-[#079fdf] pl-4">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-500">
                  Capital Raised
                </span>
                <span className="font-display text-2xl font-bold tracking-tight tabular-nums text-[#102b50]">
                  ₹218.40 Cr
                </span>
              </div>

              <Link
                to="/investor"
                className="inline-flex items-center gap-2 rounded-lg bg-[#102b50] px-4 py-2.5 text-xs font-semibold text-white transition-colors duration-200 hover:bg-[#079fdf] sm:text-sm"
              >
                <span>View IPO Disclosures</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right: Divided Editorial Ledger of Top 3 Secondary Stories (7 cols) */}
          <div className="flex flex-col justify-between divide-y divide-gray-200 overflow-hidden rounded-xl border border-gray-200 bg-white lg:col-span-7">
            {topStories.map((story) => (
              <article
                key={story.id}
                className="group flex flex-1 flex-col justify-between p-6 transition-colors duration-200 hover:bg-[#fafbfc] sm:p-7"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="font-bold uppercase tracking-wider text-[#079fdf]">
                      {story.category.split("/")[0].trim()}
                    </span>
                    <span className="font-medium text-gray-500">
                      {story.date}
                    </span>
                  </div>

                  <h4 className="mt-3 font-display text-lg font-bold leading-snug tracking-tight text-[#102b50] transition-colors duration-200 group-hover:text-[#079fdf]">
                    {story.displayHeadline}
                  </h4>

                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">
                    {story.summarySnippet}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs font-semibold text-gray-600 transition-colors duration-200 group-hover:text-[#079fdf]">
                  <span>Read announcement</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
