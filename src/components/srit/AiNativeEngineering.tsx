import { ChevronDown } from "lucide-react";
import { AI_NATIVE_DATA } from "../../data/blueprint/aiNativeData";

export function AiNativeEngineering() {
  return (
    <section
      id="ai-native-engineering"
      className="border-b border-gray-200 bg-white py-24 text-[#172b4d] sm:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Narrative & Progressive Disclosure */}
          <div className="lg:col-span-5">
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#102b50] sm:text-4xl">
              {AI_NATIVE_DATA.headline}
            </h2>

            <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-600">
              <strong className="font-semibold text-[#079fdf]">
                {AI_NATIVE_DATA.subheadline}
              </strong>{" "}
              {AI_NATIVE_DATA.intro}
            </p>

            {/* Pull-Quote Callout */}
            <blockquote className="mt-6 rounded-r-lg border-l-2 border-[#079fdf] bg-[#fafbfc] p-5 text-sm font-medium leading-relaxed text-[#102b50]">
              {AI_NATIVE_DATA.longFormNarrative.pullQuote}
            </blockquote>

            {/* Accordion / Progressive Disclosure for Secondary Narrative */}
            <details className="group mt-5 rounded-lg border border-gray-200 bg-[#fafbfc] px-4 py-3">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-[#102b50] transition-colors duration-200 hover:text-[#079fdf] [&::-webkit-details-marker]:hidden">
                <span>{AI_NATIVE_DATA.longFormNarrative.title}</span>
                <ChevronDown className="h-4 w-4 shrink-0 text-gray-500 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <div className="mt-3 space-y-3 border-t border-gray-200 pt-3 text-sm leading-relaxed text-gray-600">
                {AI_NATIVE_DATA.longFormNarrative.paragraphs.map((paragraph, idx) => (
                  <p key={idx} className="max-w-3xl">
                    {paragraph}
                  </p>
                ))}
              </div>
            </details>
          </div>

          {/* Right Column: 2x2 Bento Metrics Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7">
            {AI_NATIVE_DATA.metricsRibbon.map((metric, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-xl border border-gray-200 bg-[#fafbfc] p-6 transition-colors duration-200 hover:border-[#079fdf]/60"
              >
                <div>
                  <span className="block font-display text-3xl font-bold leading-none tracking-tight tabular-nums text-[#079fdf] sm:text-4xl">
                    {metric.value}
                  </span>
                  <h4 className="mt-4 font-display text-base font-bold tracking-tight text-[#102b50]">
                    {metric.label}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {metric.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-gray-200 pt-3.5 text-xs font-medium text-gray-600">
                  <span>{metric.benchmarkHighlight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
