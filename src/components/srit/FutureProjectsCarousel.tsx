import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { FUTURE_PROJECTS_DATA } from "../../data/blueprint/futureProjectsData";

export function FutureProjectsCarousel() {
  return (
    <section id="future-projects" className="py-20 bg-white text-[#172b4d]">
      <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-display text-3xl font-bold text-[#102b50] sm:text-4xl">
            Our Future Projects
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Upcoming initiatives across sovereign cloud hosting with L&T, indigenous database rollouts with IIT Pravartak, and next-gen ABDM health integrations.
          </p>
        </div>

        {/* 3 Project Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {FUTURE_PROJECTS_DATA.map((project, idx) => (
            <motion.div
              key={project.id}
              id={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.45 }}
              className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-slate-50/40 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#079fdf]/50 hover:bg-white hover:shadow-md scroll-mt-28"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded bg-sky-50 px-2 py-0.5 text-xs font-semibold text-[#079fdf]">
                    {project.badge}
                  </span>
                  <span className="rounded bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                    {project.status}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-lg font-bold text-[#102b50]">
                  {project.title}
                </h3>
                <h4 className="mt-1 text-xs font-semibold text-[#079fdf]">
                  {project.tagline}
                </h4>

                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                <span>Partner: <strong className="text-slate-800">{project.partner}</strong></span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
