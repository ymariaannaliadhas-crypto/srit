import { motion } from "motion/react";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Hero() {
  return (
    <section className="relative mx-2 overflow-hidden rounded-[40px] bg-black md:mx-4">
      {/* Hero Section with content aligned to the bottom */}
      <div className="relative flex min-h-[600px] items-end justify-center pb-20 sm:min-h-[700px] lg:min-h-[750px] lg:pb-24">
        
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 z-0 h-full w-full object-cover"
        >
          <source src="/videos/srit blue video.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay - gradient ensures bottom text is readable */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

        {/* Hero content - Bottom Centered - Increased max-width to 1300px */}
        <div className="relative z-10 mx-auto w-full max-w-[1300px] px-4 text-center sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease }}
              className="font-display text-2xl font-semibold tracking-tight text-white drop-shadow-md sm:text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-tight"
            >
              Revolutionizing Healthcare and Beyond
            </motion.h1>

            {/* Subtext is now full width (removed max-w-3xl) */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease }}
              className="mt-5 w-full text-sm leading-relaxed text-white/80 sm:text-base md:leading-7"
            >
              Since 1999, SRIT has been at the forefront of innovation,
              transforming industries such as Healthcare, eGovernance, and
              Telecoms. We are proud to announce that our flagship products – the
              Hospital Management Information Suite (HMIS/HIS) and the
              Electronic Medical Record (EMR) – are certified by the National
              Accreditation Board for Hospitals (NABH) under the esteemed
              Government of India. This endorsement underscores our commitment
              to delivering exceptional quality solutions and improving
              healthcare delivery across the nation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease }}
              className="mt-8"
            >
              <button
                type="button"
                className="rounded-md border border-white/20 bg-[#142B50] px-8 py-3 text-sm font-semibold tracking-wide text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0f203d] hover:shadow-xl"
              >
                Explore AI Solutions
              </button>
            </motion.div>

          </div>
        </div>

        {/* Scrolling announcement strip - Added /80 opacity and backdrop-blur */}
        <div className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden border-t border-white/10 bg-[#142B50]/80 py-4 text-white backdrop-blur-md">
          <div className="hero-marquee-track flex w-max items-center">
            {[1, 2].map((item) => (
              <div
                key={item}
                className="flex shrink-0 items-center gap-5 px-8"
              >
                <span className="text-sm font-bold uppercase tracking-wide text-[#38BDF8] sm:text-base">
                  Celebrating a defining milestone.
                </span>

                <span className="text-sm font-semibold sm:text-base">
                  Building a stronger future!
                </span>

                <span className="h-2 w-2 shrink-0 rounded-full bg-[#38BDF8]" />

                <span className="text-sm font-medium sm:text-base">
                  SRIT India Limited is now officially listed on both the NSE and BSE,
                  as of 6th October 2026.
                </span>

                <span className="h-2 w-2 shrink-0 rounded-full bg-[#38BDF8]" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}