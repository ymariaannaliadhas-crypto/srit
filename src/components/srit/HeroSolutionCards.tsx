import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { HERO_SOLUTION_CARDS, HeroSolutionCard } from "../../data/blueprint/heroCardsData";
import { SlideOverDrawer } from "./SlideOverDrawer";
import { img } from "./assets";

export function HeroSolutionCards() {
  const [selectedCard, setSelectedCard] = useState<HeroSolutionCard | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleCardClick = (card: HeroSolutionCard) => {
    setSelectedCard(card);
    setDrawerOpen(true);
  };

  const getCardImage = (id: string) => {
    switch (id) {
      case "connected-care":
        return img("healthcare.webp");
      case "urban-mobility":
        return img("E-Governance.webp");
      case "digital-highways":
        return img("telecom.jpg");
      case "zero-trust-csoc":
        return img("cyber.jpg");
      default:
        return img("healthcare.webp");
    }
  };

  return (
    <>
      <section
        id="solutions"
        className="border-b border-gray-200 bg-white py-24 text-[#172b4d] sm:py-28"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            {/* Left Sticky Editorial Intro & Domain Index */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
              <p className="text-xs font-bold uppercase tracking-wider text-[#079fdf]">
                Core Architectures
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#102b50] sm:text-4xl">
                Flagship Solution Architectures
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-600">
                <strong className="font-semibold text-[#102b50]">
                  Proprietary software suites and carrier-grade infrastructure
                </strong>{" "}
                deployed at population scale across Indian state governments, healthcare institutions, and defense backbones.
              </p>

              {/* Quick-Jump Domain Index */}
              <nav
                aria-label="Flagship solution architectures index"
                className="mt-8 divide-y divide-gray-200 border-y border-gray-200"
              >
                {HERO_SOLUTION_CARDS.map((card) => (
                  <a
                    key={card.id}
                    href={`#${card.id}`}
                    className="flex items-center justify-between py-3 text-sm text-gray-600 transition-colors duration-200 hover:text-[#079fdf]"
                  >
                    <span className="min-w-0 truncate font-medium text-[#102b50]">
                      {card.badge}
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 shrink-0 text-gray-400" aria-hidden="true" />
                  </a>
                ))}
              </nav>
            </div>

            {/* Right 2x2 Structured Bento Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-8">
              {HERO_SOLUTION_CARDS.map((card) => (
                <button
                  key={card.id}
                  type="button"
                  id={card.id}
                  onClick={() => handleCardClick(card)}
                  className="group flex cursor-pointer scroll-mt-28 flex-col justify-between rounded-xl border border-gray-200 bg-[#fafbfc] p-5 text-left transition-colors duration-200 hover:border-[#079fdf] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079fdf]"
                >
                  <div>
                    {/* Top Metadata Row */}
                    <div className="mb-4 flex items-center justify-between gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#079fdf]">
                        {card.badge}
                      </span>
                    </div>

                    {/* Visual Imagery Window */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-100">
                      <img
                        src={getCardImage(card.id)}
                        alt={card.title}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* Card Content */}
                    <h3 className="mt-5 font-display text-lg font-bold leading-snug tracking-tight text-[#102b50] transition-colors duration-200 group-hover:text-[#079fdf]">
                      {card.title}
                    </h3>
                  </div>

                  {/* Clean Action Footer */}
                  <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-4 text-xs font-semibold text-gray-600 transition-colors duration-200 group-hover:text-[#079fdf]">
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deep Interactive Specification Drawer */}
      <SlideOverDrawer
        card={selectedCard}
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </>
  );
}
