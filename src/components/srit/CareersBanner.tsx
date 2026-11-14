import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export function CareersBanner() {
  return (
    <section id="careers" className="py-20 bg-slate-50/60 text-[#172b4d]">
      <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#102b50] p-8 sm:p-12 text-white shadow-soft">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8 space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Build Digital Public Infrastructure with Us
              </h2>

              <p className="max-w-2xl text-sm sm:text-base text-white/80 leading-relaxed">
                Join our CMMI Level 5 engineering organization. We are looking for software engineers, AI architects, and cloud infrastructure leads committed to building population-scale platforms.
              </p>

              <div className="flex flex-wrap gap-4 pt-1 text-xs sm:text-sm text-white/90">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-300" /> CMMI Level 5 Delivery Excellence
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-300" /> Population-Scale Projects
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-2.5 justify-end items-start lg:items-end">
              <a
                href="/company#careers"
                className="inline-flex items-center gap-2 rounded-xl bg-[#079fdf] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#168bc4]"
              >
                <span>Explore Open Roles</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <span className="text-xs text-white/60">
                Bengaluru • Hyderabad • Delivery Centers
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
