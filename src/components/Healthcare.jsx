
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowLeft, ArrowRight } from "lucide-react";

const healthcareData = [
  {
    title: "Solutioning",
    description:
      "We have designed and deployed solutions for 250 to 1800 Bed Hospitals, for upto 150+ Hospital Chains, and 12-56 Module Stacks.",
    image:
      "https://i.pinimg.com/736x/71/0d/ec/710dec84425724ba0c0f666eadda70da.jpg",
  },
  {
    title: "Infrastructure",
    description:
      "We are actively managing more than 200 Servers with over 20 Million Patient Data that is more than 65TB in size. We have operated national networks in India (ex-Onconet), State and Country wide Data Centers and Disaster Recovery Networks.",
    image:
      "https://i.pinimg.com/1200x/3c/f3/b9/3cf3b908de562fa1afd9e7dc3324fd7d.jpg",
  },
  {
    title: "Data Migration",
    description:
      "We have successfully migrated 2 years to 18 years of legacy data consisting Demographics, Clinical & Financial Data in more than 8 Healthcare Enterprises.",
    image:
      "https://i.pinimg.com/736x/c0/e7/f1/c0e7f1ceb726c6690bd9df0e1a2d5d9d.jpg",
  },
  {
    title: "Analytics",
    description:
      "We have strong practices in Clinical, Population, Disease and Machine-Learning based Analytics.",
    image:
      "https://i.pinimg.com/1200x/78/30/43/783043b25f45b267d384a5e96866f179.jpg",
  },
];

export default function Healthcare() {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const busy = useRef(false);
  const activeRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const touchStart = useRef(0);

  const getMetrics = () => {
    const width = containerRef.current?.clientWidth || 0;
    const gap = window.innerWidth < 640 ? 8 : 14;
    const featured = width * 0.62;
    const preview = (width - featured - gap * 3) / 3;

    return {
      width,
      gap,
      featured,
      preview,
      positions: [
        0,
        featured + gap,
        featured + gap + preview + gap,
        featured + gap + (preview + gap) * 2,
      ],
    };
  };

  const positionCards = () => {
    const m = getMetrics();
    if (!m.width) return;

    cardRefs.current.forEach((card, i) => {
      if (!card) return;

      gsap.set(card, {
        x: i < 4 ? m.positions[i] : m.width + m.gap,
        width: i === 0 ? m.featured : m.preview,
        opacity: i < 4 ? 1 : 0,
        scale: 1,
      });
    });
  };

  useLayoutEffect(() => {
    positionCards();

    const handleResize = () => {
      if (!busy.current) positionCards();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex]);

  const changeSlide = (dir) => {
    if (busy.current) return;

    const m = getMetrics();
    if (!m.width) return;

    busy.current = true;
    setDirection(dir);

    const cards = cardRefs.current;
    const { width, gap, featured, preview, positions } = m;

    const nextIndex =
      (activeRef.current + dir + healthcareData.length) %
      healthcareData.length;

    const timeline = gsap.timeline({
      defaults: {
        duration: 1.15,
        ease: "power3.inOut",
      },
      onComplete: () => {
        activeRef.current = nextIndex;
        setActiveIndex(nextIndex);
        busy.current = false;
      },
    });

    if (dir === 1) {
      // Featured card exits left.
      timeline.to(cards[0], {
        x: -featured - gap,
        opacity: 0,
        scale: 0.96,
      }, 0);

      // Other cards move left.
      timeline.to(cards[1], {
        x: positions[0],
        width: featured,
      }, 0);

      timeline.to(cards[2], {
        x: positions[1],
        width: preview,
      }, 0);

      timeline.to(cards[3], {
        x: positions[2],
        width: preview,
      }, 0);

      // Incoming image enters from the right.
      timeline.set(cards[4], {
        x: width + gap,
        width: preview,
        opacity: 1,
      }, 0);

      timeline.to(cards[4], {
        x: positions[3],
        width: preview,
      }, 0);
    } else {
      // Previous image enters from the left.
      timeline.set(cards[4], {
        x: -preview - gap,
        width: preview,
        opacity: 1,
      }, 0);

      timeline.to(cards[4], {
        x: positions[0],
        width: featured,
      }, 0);

      timeline.to(cards[0], {
        x: positions[1],
        width: preview,
      }, 0);

      timeline.to(cards[1], {
        x: positions[2],
        width: preview,
      }, 0);

      timeline.to(cards[2], {
        x: positions[3],
        width: preview,
      }, 0);

      timeline.to(cards[3], {
        x: width + gap,
        opacity: 0,
        scale: 0.96,
      }, 0);
    }
  };

  const handleCardClick = (index) => {
    // Clicking the featured image advances the gallery.
    // Clicking a preview advances until that image is featured.
    if (index === 0) {
      changeSlide(1);
    } else {
      changeSlide(1);
    }
  };

  const getItem = (index) => {
    if (index === 4 && direction === -1) {
      return healthcareData[
        (activeIndex - 1 + healthcareData.length) %
          healthcareData.length
      ];
    }

    return healthcareData[
      (activeIndex + index) % healthcareData.length
    ];
  };

return (
  <section
    id="healthcare"
    className="scroll-mt-24 w-full overflow-hidden bg-[#f0f9ff] py-12"
  >
  {/* Section heading */}
  <div className="mx-auto mb-7 w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
    <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#079fdf]">
      Healthcare Technology
    </p>

<h2 className="max-w-4xl text-3xl font-bold leading-tight text-[#192d50] sm:text-4xl lg:text-5xl">
  Transforming <span className="text-[#079fdf]">Healthcare</span> Through
  Intelligent Technology
</h2>
  </div>

  {/* Navigation arrows */}
  <div className="mx-auto flex w-full max-w-[1300px] justify-end gap-3 px-4 pb-3 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => changeSlide(-1)}
          aria-label="Previous slide"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-sky-200 text-[#079fdf] transition duration-300 hover:bg-[#079fdf] hover:text-white"
        >
          <ArrowLeft size={21} />
        </button>

        <button
          type="button"
          onClick={() => changeSlide(1)}
          aria-label="Next slide"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-sky-200 text-[#079fdf] transition duration-300 hover:bg-[#079fdf] hover:text-white"
        >
          <ArrowRight size={21} />
        </button>
      </div>

      <div
        ref={containerRef}
        onTouchStart={(e) => {
          touchStart.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          const delta =
            touchStart.current - e.changedTouches[0].clientX;

          if (Math.abs(delta) > 45) {
            changeSlide(delta > 0 ? 1 : -1);
          }
        }}
        className="relative mx-auto h-[380px] w-full max-w-[1300px] overflow-hidden px-4 sm:h-[430px] sm:px-6 lg:h-[470px] lg:px-8"
      >
        {Array.from({ length: 5 }).map((_, index) => {
          const item = getItem(index);
          const featured = index === 0;

          return (
            <article
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              onClick={() => handleCardClick(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleCardClick(index);
                }
              }}
              className="absolute left-0 top-0 h-full cursor-pointer overflow-hidden rounded-2xl bg-[#102c4b] shadow-xl"
              style={{ willChange: "transform, width, opacity" }}
            >
              <img
                src={item.image}
                alt={item.title}
                draggable="false"
                className="pointer-events-none h-full w-full select-none object-cover"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061d35]/95 via-[#061d35]/10 to-transparent" />

              {featured && (
                <div className="pointer-events-none absolute bottom-0 left-0 max-w-2xl p-6 text-white sm:p-10">
                  <h2 className="mb-3 text-2xl font-bold sm:text-4xl">
                    {item.title}
                  </h2>

                  <p className="max-w-xl text-sm leading-7 text-white/90 sm:text-base">
                    {item.description}
                  </p>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
