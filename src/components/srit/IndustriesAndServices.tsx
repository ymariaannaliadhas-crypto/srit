import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import {
  INDUSTRIES_DATA,
  type IndustryVertical,
} from "../../data/blueprint/industriesData";

export function IndustriesAndServices() {
  const [activeId, setActiveId] = useState<string>(INDUSTRIES_DATA[0].id);

  const activeIndex = Math.max(
    0,
    INDUSTRIES_DATA.findIndex((vertical) => vertical.id === activeId)
  );
  const currentVertical: IndustryVertical = INDUSTRIES_DATA[activeIndex];

  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="border-b border-gray-200 bg-white py-24 text-[#172b4d] sm:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Compact Section Header */}
        <div className="mb-12 flex flex-col gap-4 border-b border-gray-200 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#079fdf]">
              Domain Coverage
            </p>
            <h2
              id="industries-heading"
              className="mt-2 font-display text-3xl font-bold tracking-tight text-[#102b50] text-balance sm:text-4xl"
            >
              Industries &amp; Services
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-gray-600 text-pretty sm:text-base">
            Specialized software suites and system integration across four core
            national infrastructure domains.
          </p>
        </div>

        {/* Balanced 3-Part 12-Column Split Ledger */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch">
          {/* Left Interactive Vertical Selector (4 cols) */}
          <div
            role="tablist"
            aria-label="SRIT Industry Verticals"
            aria-orientation="vertical"
            className="flex flex-col justify-between gap-2.5 lg:col-span-4"
          >
            {INDUSTRIES_DATA.map((vertical) => {
              const isActive = vertical.id === currentVertical.id;
              return (
                <button
                  key={vertical.id}
                  type="button"
                  role="tab"
                  id={`industry-tab-${vertical.id}`}
                  aria-selected={isActive}
                  aria-controls={`industry-panel-${vertical.id}`}
                  onClick={() => setActiveId(vertical.id)}
                  className={`group flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl border px-5 py-4 text-left transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079fdf] ${
                    isActive
                      ? "border-[#079fdf] bg-[#f4fafe]"
                      : "border-gray-200 bg-white hover:border-gray-300 hover:bg-[#fafbfc]"
                  }`}
                >
                  <span
                    className={`min-w-0 truncate font-display text-base font-semibold tracking-tight ${
                      isActive
                        ? "text-[#102b50]"
                        : "text-[#172b4d] group-hover:text-[#102b50]"
                    }`}
                  >
                    {vertical.name}
                  </span>

                  <div className="flex shrink-0 items-center gap-2">
                    <span
                      className={`rounded-md px-2 py-0.5 text-xs font-medium tabular-nums ${
                        isActive
                          ? "border border-gray-200 bg-white text-[#102b50]"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {vertical.subProducts.length} suites
                    </span>
                    <ChevronRight
                      className={`h-4 w-4 transition-colors duration-200 ${
                        isActive
                          ? "text-[#079fdf]"
                          : "text-gray-400 group-hover:text-gray-600"
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Center Overview & 2-Column Platforms Grid (5 cols) */}
          <div
            role="tabpanel"
            id={`industry-panel-${currentVertical.id}`}
            aria-labelledby={`industry-tab-${currentVertical.id}`}
            className="flex flex-col justify-between rounded-xl border border-gray-200 bg-[#fafbfc] p-6 sm:p-7 lg:col-span-5"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-600">
                Domain Overview
              </p>

              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#102b50] text-balance">
                {currentVertical.name}
              </h3>

              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600 text-pretty">
                {currentVertical.blueprintScope}
              </p>

              {/* Compact 2-Column Key Platforms & Suites Grid */}
              <div className="mt-6 border-t border-gray-200 pt-5">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-600">
                  Key Platforms &amp; Suites
                </p>
                <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {currentVertical.subProducts.map((spec) => (
                    <div
                      key={spec.id}
                      className="flex flex-col justify-center rounded-lg border border-gray-200 bg-white px-3.5 py-2.5"
                    >
                      <span className="text-xs font-semibold text-[#102b50]">
                        {spec.name}
                      </span>
                      <span className="mt-0.5 line-clamp-1 text-[11px] text-gray-600">
                        {spec.subtitle}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Practice Pillars & Actions Card (3 cols) */}
          <div className="flex flex-col justify-between rounded-xl border border-[#102b50] bg-[#102b50] p-6 text-white lg:col-span-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-cyan-300">
                Practice Pillars
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {currentVertical.practiceHighlights.map((highlight) => (
                  <span
                    key={highlight.title}
                    className="inline-flex items-center rounded-md border border-white/15 bg-white/10 px-2.5 py-1 text-xs font-medium text-white"
                  >
                    {highlight.title}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-white/15 pt-5">
              <Link
                to={`/industries/${currentVertical.id}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#079fdf] px-4 py-2.5 text-xs font-semibold text-white transition-colors duration-200 hover:bg-[#168bc4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:text-sm"
              >
                <span>Explore Page</span>
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
