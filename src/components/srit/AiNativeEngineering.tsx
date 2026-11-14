import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { AI_NATIVE_DATA } from "../../data/blueprint/aiNativeData";

export function AiNativeEngineering() {
  return (
    <section id="ai-native-engineering" className="relative isolate overflow-hidden bg-[#050A1F] py-20 text-white">
      {/* Background ambient lighting matching original PerformanceDashboard */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-[10%] h-[500px] w-[500px] rounded-full bg-[#079fdf]/25 blur-[120px]" />
        <div className="absolute top-0 right-[10%] h-[400px] w-[500px] rounded-full bg-indigo-500/20 blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="max-w-3xl mb-14">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            AI-Native Engineering
          </h2>
          <p className="mt-3 text-lg font-medium text-cyan-200">
            Moving from reactive software to proactive intelligence.
          </p>
          <p className="mt-2 text-base leading-relaxed text-slate-300">
            We engineer resilient, low-latency AI backbones natively integrated into healthcare, governance, and telecom infrastructure.
          </p>
        </div>

        {/* 4-Metric Proof Ribbon */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 pt-4 border-t border-slate-800">
          {AI_NATIVE_DATA.metricsRibbon.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="flex flex-col justify-between"
            >
              <div>
                <span className="font-display text-4xl font-bold tracking-tight md:text-5xl bg-gradient-to-r from-[#079fdf] via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                  {metric.value}
                </span>
                <h4 className="mt-3 font-display text-base font-semibold text-white">
                  {metric.label}
                </h4>
                <p className="mt-1 text-sm text-slate-400">
                  {metric.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-cyan-300">
                <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                <span>{metric.benchmarkHighlight}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
