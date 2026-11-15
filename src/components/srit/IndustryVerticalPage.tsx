import { Link, useParams } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  ExternalLink,
  FileText,
  ShieldCheck,
} from "lucide-react";
import {
  INDUSTRIES_DATA,
  type IndustryVertical,
} from "../../data/blueprint/industriesData";

interface IndustryVerticalPageProps {
  defaultVerticalId?: string;
}

export function IndustryVerticalPage({
  defaultVerticalId,
}: IndustryVerticalPageProps) {
  const { verticalId } = useParams<{ verticalId: string }>();
  const targetId = verticalId ?? defaultVerticalId ?? INDUSTRIES_DATA[0].id;

  const vertical: IndustryVertical =
    INDUSTRIES_DATA.find((item) => item.id === targetId) ?? INDUSTRIES_DATA[0];

  const otherVerticals = INDUSTRIES_DATA.filter(
    (item) => item.id !== vertical.id
  );

  return (
    <main className="min-h-screen bg-white text-[#172b4d]">
      {/* Hero & Vertical Switcher */}
      <section className="border-b border-gray-200 bg-[#102b50] text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-2 text-xs font-medium text-sky-200/80"
          >
            <Link
              to="/"
              className="rounded-sm transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079fdf]"
            >
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-white/40" aria-hidden="true" />
            <Link
              to="/#industries"
              className="rounded-sm transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079fdf]"
            >
              Industries &amp; Services
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-white/40" aria-hidden="true" />
            <span className="font-semibold text-white">{vertical.name}</span>
          </nav>

          {/* Cross-Vertical Switcher Bar */}
          <nav
            aria-label="Industry Verticals"
            className="mb-10 flex items-center gap-2 overflow-x-auto border-b border-white/15 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {INDUSTRIES_DATA.map((item) => {
              const isCurrent = item.id === vertical.id;
              return (
                <Link
                  key={item.id}
                  to={`/industries/${item.id}`}
                  aria-current={isCurrent ? "page" : undefined}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-lg border px-3.5 py-2 text-xs font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079fdf] ${
                    isCurrent
                      ? "border-[#079fdf] bg-[#079fdf]/20 font-semibold text-white"
                      : "border-white/10 bg-white/5 text-gray-300 hover:border-white/25 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Overview Layout */}
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#079fdf]">
                Core Scope &amp; Delivery Focus
              </p>

              <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
                {vertical.name}
              </h1>

              <p className="mt-5 border-l-2 border-[#079fdf] pl-4 text-sm font-medium leading-relaxed text-sky-100 text-pretty sm:text-base">
                {vertical.blueprintScope}
              </p>

              <p className="mt-5 max-w-3xl text-sm leading-relaxed text-gray-200 text-pretty sm:text-base">
                {vertical.officialSummary}
              </p>
            </div>

            {(vertical.accreditations?.length || vertical.brochureUrl) && (
              <div className="flex shrink-0 flex-col gap-3 rounded-xl border border-white/15 bg-white/5 p-5 lg:w-80">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-300">
                  Verification &amp; Literature
                </span>

                {vertical.accreditations?.map((item) => (
                  <a
                    key={item.url}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between gap-2.5 rounded-lg border border-white/15 bg-white/10 px-3.5 py-2.5 text-xs font-medium text-white transition-colors duration-200 hover:border-[#079fdf]/70 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079fdf]"
                  >
                    <span className="inline-flex items-center gap-2 text-left leading-snug">
                      <ShieldCheck
                        className="h-4 w-4 shrink-0 text-[#079fdf]"
                        aria-hidden="true"
                      />
                      <span>{item.label}</span>
                    </span>
                    <ExternalLink
                      className="h-3.5 w-3.5 shrink-0 text-gray-300"
                      aria-hidden="true"
                    />
                  </a>
                ))}

                {vertical.brochureUrl && (
                  <a
                    href={vertical.brochureUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between gap-2.5 rounded-lg border border-[#079fdf]/45 bg-[#079fdf]/15 px-3.5 py-2.5 text-xs font-semibold text-white transition-colors duration-200 hover:border-[#079fdf] hover:bg-[#079fdf]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079fdf]"
                  >
                    <span className="inline-flex items-center gap-2">
                      <FileText
                        className="h-4 w-4 shrink-0 text-[#079fdf]"
                        aria-hidden="true"
                      />
                      <span>Download Vertical Brochure (PDF)</span>
                    </span>
                    <ArrowUpRight
                      className="h-3.5 w-3.5 shrink-0 text-sky-200"
                      aria-hidden="true"
                    />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Platforms, Suites & Brochures */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-gray-200 pb-6">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-[#102b50] text-balance sm:text-3xl">
                Platforms, Suites &amp; Brochures
              </h2>
            </div>
            <span className="rounded-md border border-gray-200 bg-[#fafbfc] px-3 py-1 text-xs font-semibold tabular-nums text-[#102b50]">
              {vertical.subProducts.length} Solutions
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {vertical.subProducts.map((spec) => (
              <article
                key={spec.id}
                className="flex flex-col justify-between rounded-xl border border-gray-200 bg-[#fafbfc] p-6 transition-colors duration-200 hover:border-[#079fdf]/60"
              >
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#079fdf]">
                    {spec.subtitle}
                  </p>
                  <h3 className="mt-1.5 font-display text-lg font-bold tracking-tight text-[#102b50] text-balance">
                    {spec.name}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-gray-600 text-pretty">
                    {spec.description}
                  </p>
                </div>

                {spec.brochureUrl && (
                  <div className="mt-6 border-t border-gray-200 pt-4">
                    <a
                      href={spec.brochureUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-sm text-xs font-semibold text-[#102b50] transition-colors duration-200 hover:text-[#079fdf] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079fdf]"
                    >
                      <FileText
                        className="h-3.5 w-3.5 shrink-0 text-[#079fdf]"
                        aria-hidden="true"
                      />
                      <span>Download Brochure (PDF)</span>
                      <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Practice & Delivery Highlights */}
      <section className="border-t border-gray-200 bg-[#fafbfc] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="font-display text-2xl font-bold tracking-tight text-[#102b50] text-balance sm:text-3xl">
              Practice &amp; Delivery Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-4">
            {vertical.practiceHighlights.map((highlight) => (
              <div key={highlight.title} className="bg-white p-6">
                <h3 className="font-display text-base font-bold tracking-tight text-[#172b4d] text-balance">
                  {highlight.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 text-pretty">
                  {highlight.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Other Verticals & Inquiry Strip */}
      <section className="border-t border-gray-200 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
            <div className="flex flex-col gap-5 lg:col-span-4">
              <div>
                <h2 className="font-display text-2xl font-bold tracking-tight text-[#102b50] text-balance">
                  Other SRIT Industry Verticals
                </h2>
              </div>

              <Link
                to="/contact-us"
                className="inline-flex w-fit items-center justify-center gap-2 rounded-lg bg-[#102b50] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#079fdf] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079fdf]"
              >
                <span>Schedule a Domain Consultation</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:col-span-8">
              {otherVerticals.map((item) => (
                <Link
                  key={item.id}
                  to={`/industries/${item.id}`}
                  className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-[#fafbfc] p-6 transition-colors duration-200 hover:border-[#079fdf]/60 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079fdf]"
                >
                  <div>
                    <span className="text-xs font-semibold tabular-nums text-[#079fdf]">
                      {item.subProducts.length} Solutions
                    </span>
                    <h3 className="mt-1.5 font-display text-lg font-bold tracking-tight text-[#102b50] transition-colors duration-200 group-hover:text-[#079fdf]">
                      {item.name}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-gray-600 text-pretty sm:text-sm">
                      {item.blueprintScope}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-[#102b50] transition-colors duration-200 group-hover:text-[#079fdf]">
                    <span>View Vertical Page</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
