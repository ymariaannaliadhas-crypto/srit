import { ArrowUpRight } from "lucide-react";

export function CareersBanner() {
  return (
    <section
      id="careers"
      className="bg-white py-20 text-[#172b4d] sm:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-[#1e3a66] bg-[#102b50] p-7 text-white sm:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="space-y-3 lg:col-span-5">
              <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Build Digital Public Infrastructure with Us
              </h2>

              <p className="max-w-3xl text-sm leading-relaxed text-gray-200 sm:text-base">
                Join our CMMI Level 5 engineering organization building population-scale AI, healthcare, and governance systems.
              </p>
            </div>

            <div className="flex flex-col gap-3 border-y border-white/15 py-5 text-xs text-gray-200 sm:text-sm lg:col-span-4 lg:border-x lg:border-y-0 lg:px-8 lg:py-2">
              <div className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                <span>CMMI Level 5 Delivery Excellence</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                <span>Population-Scale Engineering Projects</span>
              </div>
            </div>

            <div className="flex flex-col items-start justify-end gap-3 sm:flex-row sm:items-center lg:col-span-3 lg:flex-col lg:items-end">
              <a
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-lg bg-[#079fdf] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#168bc4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                <span>Explore Open Roles</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <span className="text-xs text-gray-300">
                Bengaluru &bull; Hyderabad &bull; Delivery Centers
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
