import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { NEWSROOM_STORIES } from "../../data/blueprint/newsroomData";

export function NewsroomGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Capital Markets / IPO",
    "e-Governance / Awards",
    "Digital Health / Quality",
    "Strategic Alliances / Cloud & AI",
    "Telecom Infrastructure",
    "AI & Smart Mobility",
  ];

  const filteredStories =
    selectedCategory === "All"
      ? NEWSROOM_STORIES
      : NEWSROOM_STORIES.filter((s) => s.category.includes(selectedCategory) || selectedCategory.includes(s.category));

  return (
    <section id="newsroom" className="py-20 bg-slate-50/60 text-[#172b4d]">
      <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <h2 className="font-display text-3xl font-bold text-[#102b50] sm:text-4xl">
            Top Stories & Newsroom
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Corporate announcements, public listing milestones, national e-governance awards, and strategic partnerships.
          </p>
        </div>

        {/* Minimal Category Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-[#102b50] text-white shadow-sm"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 9-Story Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredStories.map((story, idx) => (
            <motion.article
              key={story.id}
              id={story.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.45 }}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#079fdf]/50 hover:shadow-md scroll-mt-28"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="rounded bg-sky-50 px-2 py-0.5 font-semibold text-[#079fdf]">
                    {story.category}
                  </span>
                  {story.date && (
                    <span className="text-slate-400">
                      {story.date}
                    </span>
                  )}
                </div>

                <h3 className="mt-4 font-display text-base font-bold leading-snug text-[#102b50] group-hover:text-[#079fdf] transition-colors">
                  {story.displayHeadline}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-600">
                  {story.summarySnippet}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#079fdf]">
                <span className="inline-flex items-center gap-1 group-hover:underline">
                  Read Release <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
