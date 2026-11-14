import { useState } from "react";
import { motion } from "motion/react";
import { Activity, Landmark, Network, ShieldCheck, ArrowRight } from "lucide-react";
import { HERO_SOLUTION_CARDS, HeroSolutionCard } from "../../data/blueprint/heroCardsData";
import { SlideOverDrawer } from "./SlideOverDrawer";

export function HeroSolutionCards() {
  const [selectedCard, setSelectedCard] = useState<HeroSolutionCard | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleCardClick = (card: HeroSolutionCard) => {
    setSelectedCard(card);
    setDrawerOpen(true);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Activity":
        return <Activity className="h-6 w-6 text-[#079fdf]" />;
      case "Landmark":
        return <Landmark className="h-6 w-6 text-[#079fdf]" />;
      case "Network":
        return <Network className="h-6 w-6 text-[#079fdf]" />;
      case "ShieldAlert":
        return <ShieldCheck className="h-6 w-6 text-[#079fdf]" />;
      default:
        return <Activity className="h-6 w-6 text-[#079fdf]" />;
    }
  };

  return (
    <>
      <section id="solutions" className="py-20 bg-white text-[#172b4d]">
        <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <h2 className="font-display text-3xl font-bold text-[#102b50] sm:text-4xl">
              Flagship Solution Architectures
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Proven, standards-compliant digital platforms deployed across healthcare, governance, broadband networks, and cybersecurity.
            </p>
          </div>

          {/* 4-Card Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HERO_SOLUTION_CARDS.map((card, idx) => (
              <motion.div
                key={card.id}
                id={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#079fdf]/50 hover:shadow-md scroll-mt-28"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-[#079fdf]">
                      {getIcon(card.iconName)}
                    </div>
                    <span className="rounded-md bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-lg font-bold leading-snug text-[#102b50] group-hover:text-[#079fdf] transition-colors">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {card.cardTeaser}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => handleCardClick(card)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#079fdf] hover:text-[#092b55] transition-colors"
                  >
                    <span>Know More</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Slide-over detail drawer */}
      <SlideOverDrawer
        card={selectedCard}
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </>
  );
}
