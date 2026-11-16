
import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

const healthcareData = [
  {
    title: "Solutioning",
    description:
      "We have designed and deployed solutions for 250 to 1800 Bed Hospitals, for upto 150+ Hospital Chains, and 12-56 Module Stacks.",
    image:
      "https://i.pinimg.com/736x/71/0d/ec/710dec84425724ba0c0f666eadda70da.jpg",
    number: "01",
  },
  {
    title: "Infrastructure",
    description:
      "We are actively managing more than 200 Servers with over 20 Million Patient Data that is more than 65TB in size. We have operated national networks in India (ex-Onconet), State and Country wide Data Centers and Disaster Recovery Networks.",
    image:
      "https://i.pinimg.com/1200x/3c/f3/b9/3cf3b908de562fa1afd9e7dc3324fd7d.jpg",
    number: "02",
  },
  {
    title: "Data Migration",
    description:
      "We have successfully migrated 2 years to 18 years of legacy data consisting Demographics, Clinical & Financial Data in more than 8 Healthcare Enterprises.",
    image:
      "https://i.pinimg.com/736x/c0/e7/f1/c0e7f1ceb726c6690bd9df0e1a2d5d9d.jpg",
    number: "03",
  },
  {
    title: "Analytics",
    description:
      "We have strong practices in Clinical, Population, Disease and Machine-Learning based Analytics.",
    image:
      "https://i.pinimg.com/1200x/78/30/43/783043b25f45b267d384a5e96866f179.jpg",
    number: "04",
  },
 
];

export default function Healthcare() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const contentsRef = useRef([]);
  const imagesRef = useRef([]);
  const smallTitlesRef = useRef([]);

  const [activeIndex, setActiveIndex] = useState(null);

  // PAGE LOAD ANIMATION
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".health-heading",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
        }
      );

      gsap.fromTo(
        cardsRef.current,
        {
          opacity: 0,
          y: 100,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          stagger: 0.12,
          ease: "power4.out",
          delay: 0.3,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // EXPAND AND COLLAPSE ANIMATION
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;
      const contents = contentsRef.current;
      const images = imagesRef.current;
      const smallTitles = smallTitlesRef.current;

      if (activeIndex === null) {
        gsap.to(cards, {
          flexGrow: 1,
          duration: 0.9,
          ease: "power4.inOut",
          overwrite: "auto",
        });

        gsap.to(contents, {
          autoAlpha: 0,
          y: 35,
          duration: 0.35,
          ease: "power2.in",
          overwrite: "auto",
        });

        gsap.to(smallTitles, {
          autoAlpha: 1,
          duration: 0.5,
          delay: 0.25,
          overwrite: "auto",
        });

        gsap.to(images, {
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          overwrite: "auto",
        });

        return;
      }

      const tl = gsap.timeline({
        defaults: {
          overwrite: "auto",
        },
      });

      // Expand selected card and shrink others
      tl.to(
        cards,
        {
          flexGrow: (i) => (i === activeIndex ? 7 : 0.65),
          duration: 1.1,
          ease: "power4.inOut",
          stagger: 0.035,
        },
        0
      );

      // Hide small titles
      tl.to(
        smallTitles,
        {
          autoAlpha: 0,
          duration: 0.25,
        },
        0
      );

      // Show selected content
      tl.to(
        contents,
        {
          autoAlpha: (i) => (i === activeIndex ? 1 : 0),
          y: (i) => (i === activeIndex ? 0 : 30),
          duration: 0.65,
          stagger: 0.03,
          ease: "power3.out",
        },
        0.45
      );

      // Zoom selected background image
      tl.to(
        images,
        {
          scale: (i) => (i === activeIndex ? 1.12 : 1.02),
          duration: 1.2,
          ease: "power2.out",
        },
        0
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [activeIndex]);

  const handleClick = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen w-full overflow-hidden bg-[#f4f7f5] px-5 py-12 text-[#102c2b] sm:px-8 md:px-12 lg:px-16 lg:py-16"
    >
      {/* HEADER */}

      <div className="health-heading mb-10 flex flex-col justify-between gap-6 md:mb-12 md:flex-row md:items-end">

        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-emerald-600"></span>
            <span className="text-[10px] font-extrabold tracking-[4px] text-emerald-700">
              HEALTHCARE EXPERIENCE
            </span>
          </div>

          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-[-3px] sm:text-6xl lg:text-7xl">
            Your health.
            <br />
            <span className="text-[#91a39c]">
              Our priority.
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-7 text-gray-500 sm:text-base">
            Discover a smarter way to experience healthcare.
            Explore our services and take the first step towards
            a healthier future.
          </p>
        </div>

        <div className="flex items-center gap-3 md:pb-3">
          <span className="text-4xl font-bold text-emerald-600">
            {activeIndex === null
              ? "00"
              : healthcareData[activeIndex].number}
          </span>

          <span className="text-gray-300">/</span>

          <span className="text-lg font-semibold text-gray-400">
            04
          </span>
        </div>
      </div>

      {/* IMAGE GALLERY */}

      <div className="flex h-[520px] w-full gap-2 overflow-hidden rounded-xl sm:gap-3 md:h-[560px] lg:h-[580px]">

        {healthcareData.map((item, index) => (
          <div
            key={item.number}
            ref={(el) => (cardsRef.current[index] = el)}
            onClick={() => handleClick(index)}
            className="group relative min-w-0 flex-1 cursor-pointer overflow-hidden rounded-lg bg-[#183d36] shadow-sm"
          >

            {/* BACKGROUND IMAGE */}

            <img
              ref={(el) => (imagesRef.current[index] = el)}
              src={item.image}
              alt={item.title}
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* DARK GRADIENT */}

            <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/10 to-[#071e1a]/90"></div>

            {/* TOP NUMBER */}

            <div className="absolute right-4 top-5 z-10 text-xs font-bold tracking-widest text-white/80">
              {item.number}
            </div>

            {/* COLLAPSED TITLE */}

            <div
              ref={(el) => (smallTitlesRef.current[index] = el)}
              className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center gap-4 px-2 pb-7 text-white"
            >
              <span className="text-[10px] font-bold tracking-widest text-emerald-200">
                {item.number}
              </span>

              <h3 className="text-xs font-bold tracking-wide [writing-mode:vertical-rl] rotate-180 sm:text-sm">
                {item.title}
              </h3>

              <span className="text-xl font-light text-white/80 transition-transform duration-300 group-hover:scale-125">
                +
              </span>
            </div>

            {/* EXPANDED CONTENT */}

            <div
              ref={(el) => (contentsRef.current[index] = el)}
              className="invisible absolute bottom-10 left-5 z-20 w-[calc(100%-40px)] translate-y-8 text-white sm:bottom-12 sm:left-9 sm:w-[min(440px,calc(100%-72px))] lg:bottom-16 lg:left-12"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-emerald-300"></span>

                <span className="text-[9px] font-extrabold tracking-[3px] text-emerald-200 sm:text-[11px]">
                  {item.tag}
                </span>
              </div>

              <h2 className="mb-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-6xl">
                {item.title}
              </h2>

              

              <p className="mb-7 max-w-md text-2xl leading-7 text-white/100 sm:text-sm sm:leading-8">
                {item.description}
              </p>

          
            </div>

          </div>
        ))}
      </div>

      {/* FOOTER */}

      <div className="mt-6 flex flex-col justify-between gap-3 border-t border-gray-200 pt-5 text-[9px] font-extrabold tracking-[2px] text-gray-400 sm:flex-row sm:items-center">
        <span>HEALTHCARE FOR A BETTER TOMORROW</span>

       
      </div>

    </section>
  );
}
