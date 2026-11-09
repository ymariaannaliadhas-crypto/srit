
import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1];

export function Hero() {
  return (
    <section className="relative mx-2 overflow-hidden rounded-[40px] bg-black md:mx-4">
      <div className="relative flex min-h-[380px] items-center sm:min-h-[420px] lg:min-h-[450px]">

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

        {/* Dark overlay */}
        <div className="absolute inset-0 z-0 bg-white/20" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto w-full max-w-[1300px] px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-5xl">

            <motion.p
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease }}
              className="mb-6 flex items-center gap-4 text-sm font-bold uppercase tracking-[0.25em] text-[#142B50] md:text-base"
            >
              <span className="h-3 w-7 rounded-full border-2 border-white" />
              Healthcare Innovation Since 1999
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease }}
              className="font-display text-3xl font-bold leading-tight text-[#142B50] sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Revolutionizing Healthcare and Beyond:
              <span className="mt-2 block text-[#142B50] [text-shadow:0_1px_8px_rgba(255,255,255,0.35)]">
  Excellence Recognized by NABH
</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8, ease }}
             className="mt-6 max-w-4xl text-sm leading-relaxed text-[#142B50] sm:text-base md:text-lg"
            >
              Since 1999, SRIT has been at the forefront of innovation,
              transforming industries such as Healthcare, eGovernance, and
              Telecoms. We are proud to announce that our flagship products -
              the Hospital Management Information Suite (HMIS/HIS) and the
              Electronic Medical Record (EMR) - have recently received
              certification from the National Accreditation Board for
              Hospitals (NABH) under the esteemed Government of India. This
              endorsement underscores our commitment to delivering exceptional
              quality and improving healthcare delivery across the nation.
            </motion.p>

          </div>
        </div>
      </div>
{/* Scrolling announcement strip */}
<div className="relative z-10 overflow-hidden bg-[#142B50] py-5 text-white">
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
    </section>
  );
}
