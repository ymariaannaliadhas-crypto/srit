import { FUTURE_PROJECTS_DATA } from "../../data/blueprint/futureProjectsData";

export function FutureProjectsCarousel() {
  return (
    <section
      id="future-projects"
      className="border-b border-gray-200 bg-[#fafbfc] py-24 text-[#172b4d] sm:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left Sticky Header Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <p className="text-xs font-bold uppercase tracking-wider text-[#079fdf]">
              Strategic Roadmap
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#102b50] text-balance sm:text-4xl">
              Our Future Projects
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-600 text-pretty">
              <strong className="font-semibold text-[#102b50]">
                Co-engineering sovereign cloud, indigenous database, and clinical AI infrastructure
              </strong>{" "}
              with national deep-tech partners.
            </p>

            <blockquote className="mt-6 rounded-r-lg border-l-2 border-[#079fdf] bg-white py-3 pl-4 pr-3 text-sm font-medium leading-relaxed text-[#102b50]">
              Advancing indigenous sovereign R&amp;D across domestic DC-DR cloud infrastructure, defense-grade databases, and population-scale clinical interoperability.
            </blockquote>
          </div>

          {/* Right Structured Horizon Projects Stack */}
          <div className="space-y-4 lg:col-span-8">
            {FUTURE_PROJECTS_DATA.map((project) => (
              <article
                key={project.id}
                id={project.id}
                className="scroll-mt-28 rounded-xl border border-gray-200 bg-white p-6 transition-colors duration-200 hover:border-[#079fdf]/60 sm:p-7"
              >
                {/* Top Metadata Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 pb-4">
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="font-bold uppercase tracking-wider text-[#079fdf]">
                      {project.badge}
                    </span>
                    <span className="text-gray-300">&bull;</span>
                    <span className="font-semibold text-[#102b50]">
                      {project.partner}
                    </span>
                  </div>

                  <span className="shrink-0 rounded-md border border-emerald-200 bg-emerald-50/70 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">
                    {project.status}
                  </span>
                </div>

                {/* Main Content */}
                <div className="mt-5">
                  <h3 className="font-display text-xl font-bold leading-snug tracking-tight text-[#102b50]">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-[#079fdf]">
                    {project.tagline}
                  </p>

                  <p className="mt-2.5 max-w-3xl text-sm leading-relaxed text-gray-600">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
