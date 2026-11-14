import { useState } from "react";
import { motion } from "motion/react";
import { CLIENT_ROSTER, CLIENT_ROSTER_CATEGORIES } from "../../data/blueprint/clientsData";

export function ClientLogoWall() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Clients");

  const filteredClients =
    selectedCategory === "All Clients"
      ? CLIENT_ROSTER
      : CLIENT_ROSTER.filter((c) => c.category === selectedCategory);

  return (
    <section id="clients" className="py-20 bg-slate-50/60 text-[#172b4d]">
      <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <h2 className="font-display text-3xl font-bold text-[#102b50] sm:text-4xl">
            Key Clients & Public Institutions
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Powering critical public infrastructure, statewide connectivity highways, and multi-tier hospital networks.
          </p>
        </div>

        {/* Minimal Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CLIENT_ROSTER_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-lg px-4 py-1.5 text-xs font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-[#102b50] text-white shadow-sm"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Client Cards Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filteredClients.map((client, idx) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 8) * 0.03, duration: 0.35 }}
              className="flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#079fdf]/50 hover:shadow-md"
            >
              <div>
                <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#079fdf]">
                  {client.category}
                </span>
                <h4 className="mt-1.5 font-display text-sm font-bold text-[#102b50]">
                  {client.name}
                </h4>
              </div>

              {client.shortDescription && (
                <p className="mt-3 text-xs leading-relaxed text-slate-500 border-t border-slate-100 pt-2.5">
                  {client.shortDescription}
                </p>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
