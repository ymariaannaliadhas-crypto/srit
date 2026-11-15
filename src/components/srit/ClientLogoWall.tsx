import { img } from "./assets";

const SRIT_CLIENT_LOGOS = [
  { name: "Kerala Fibre Optic Network (KFON)", asset: "srit c.webp" },
  { name: "Govt. of Andhra Pradesh (Health, Medical & Family Welfare)", asset: "srit c1.webp" },
  { name: "Employees' State Insurance Corporation (ESIC)", asset: "srit c4.webp" },
  { name: "RailTel Corporation of India (RailWire)", asset: "srit c9.webp" },
  { name: "Boston Consulting Group (BCG)", asset: "srit c6.webp" },
  { name: "Baxter International", asset: "srit c8.webp" },
  { name: "National Kidney and Transplant Institute, Philippines", asset: "srit c2.webp" },
  { name: "Ooredoo Qatar", asset: "srit c3.webp" },
  { name: "Al Salam Specialist Hospital", asset: "srit c5.webp" },
  { name: "PIMS Medical & Education Charitable Society", asset: "srit c7.webp" },
];

const MARQUEE_LOGOS = [...SRIT_CLIENT_LOGOS, ...SRIT_CLIENT_LOGOS];

export function ClientLogoWall() {
  return (
    <section
      id="clients"
      className="border-b border-gray-200 bg-white py-20 text-[#172b4d] sm:py-24"
    >
      <style>{`
        @keyframes client-marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-client-marquee {
          animation: client-marquee-scroll 38s linear infinite;
        }
        .animate-client-marquee:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-client-marquee {
            animation: none;
          }
        }
      `}</style>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-wider text-[#079fdf]">
            Institutional Partnerships
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#102b50] text-balance sm:text-4xl">
            Trusted by Sovereign Governments &amp; Enterprises
          </h2>
        </div>

        {/* Continuous Full-Colour Logo Marquee */}
        <div className="w-full rounded-xl border border-gray-200 bg-[#fafbfc] p-2">
          <div className="relative overflow-hidden rounded-lg bg-white py-5 sm:py-6">
            <div className="flex w-max animate-client-marquee items-center">
              {MARQUEE_LOGOS.map((logo, index) => (
                <div
                  key={`${logo.asset}-${index}`}
                  className="flex h-20 w-[200px] shrink-0 items-center justify-center px-8 sm:h-24 sm:w-[240px] sm:px-10"
                  title={logo.name}
                  aria-hidden={index >= SRIT_CLIENT_LOGOS.length ? true : undefined}
                >
                  <img
                    src={img(logo.asset)}
                    alt={index >= SRIT_CLIENT_LOGOS.length ? "" : logo.name}
                    className="h-16 w-auto max-w-full object-contain sm:h-20"
                  />
                </div>
              ))}
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent sm:w-16" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent sm:w-16" />
          </div>
        </div>
      </div>
    </section>
  );
}
