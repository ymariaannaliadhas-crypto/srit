import React, {
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import apple from "./apple.png";
import applebottle from "./applebottle.png";

import orange from "./orange.png";
import orangebottle from "./orangebottle.png";

import strawberry from "./strawberry.png";
import strawberrybottle from "./strawberrybottle.png";

import kiwi from "./kiwi.webp";
import kiwibottle from "./kiwibottle.png";

import papaya from "./papaya.png";
import papayabottle from "./papayabottle.png";

import grapes from "./grapes.png";
import grapesbottle from "./grapesbottle.png";

import mango from "./mango.png";
import mangobottle from "./mangobottle.png";

import blueberry from "./blueberry.png";
import blueberrybottle from "./blueberrybottle.png";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const mainRef = useRef(null);

  const bottleRef = useRef(null);
  const fruitRefs = useRef([]);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const counterRef = useRef(null);

  const navigate = useNavigate();

  const [activeFlavor, setActiveFlavor] = useState(0);
  const activeFlavorRef = useRef(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  /*
  ==========================================
  FLAVORS
  ==========================================
  */

  const flavors = [
    {
      name: "APPLE",
      small: "CRISP • FRESH • NATURAL",
      description:
        "Crisp, naturally sweet apple juice made from fresh juicy apples.",
      bottle: applebottle,
      fruit: apple,
      bg: "#ff836f",
      accent: "#ff4d35",
      text: "#ffffff",
    },

    {
      name: "ORANGE",
      small: "SUNNY • CITRUS • FRESH",
      description:
        "Bright and refreshing orange juice packed with natural vitamin C.",
      bottle: orangebottle,
      fruit: orange,
      bg: "#ff8a00",
      accent: "#ffbd00",
      text: "#ffffff",
    },

    {
      name: "STRAWBERRY",
      small: "SWEET • JUICY • BERRY",
      description:
        "Sweet strawberry juice made from fresh, ripe strawberries.",
      bottle: strawberrybottle,
      fruit: strawberry,
      bg: "#ed4770",
      accent: "#ff1744",
      text: "#ffffff",
    },

    {
      name: "KIWI",
      small: "TANGY • GREEN • FRESH",
      description:
        "A deliciously tangy kiwi blend with a refreshing tropical finish.",
      bottle: kiwibottle,
      fruit: kiwi,
      bg: "#8ac926",
      accent: "#d7ff43",
      text: "#ffffff",
    },

    {
      name: "PAPAYA",
      small: "TROPICAL • GOLDEN • SMOOTH",
      description:
        "Smooth tropical papaya juice with a naturally sweet golden taste.",
      bottle: papayabottle,
      fruit: papaya,
      bg: "#ff7043",
      accent: "#ffca28",
      text: "#ffffff",
    },

    {
      name: "GRAPES",
      small: "JUICY • DARK • REFRESHING",
      description:
        "Rich grape juice bursting with deep fruity flavor and freshness.",
      bottle: grapesbottle,
      fruit: grapes,
      bg: "#7650b8",
      accent: "#c084fc",
      text: "#ffffff",
    },

    {
      name: "MANGO",
      small: "TROPICAL • CREAMY • GOLDEN",
      description:
        "Rich and creamy mango juice bringing summer straight to your glass.",
      bottle: mangobottle,
      fruit: mango,
      bg: "#ffb300",
      accent: "#ffe082",
      text: "#ffffff",
    },

    {
      name: "BLUEBERRY",
      small: "BOLD • BERRY • COOL",
      description:
        "Bold blueberry juice with a rich berry taste and refreshing finish.",
      bottle: blueberrybottle,
      fruit: blueberry,
      bg: "#3867d6",
      accent: "#74b9ff",
      text: "#ffffff",
    },
  ];

  /*
  ==========================================
  FLOATING FRUIT POSITIONS
  ==========================================
  */

  const fruitPositions = [
    {
      top: "15%",
      left: "8%",
      size: "150px",
      rotation: -20,
    },

    {
      top: "18%",
      right: "9%",
      size: "125px",
      rotation: 25,
    },

    {
      bottom: "12%",
      left: "15%",
      size: "120px",
      rotation: 15,
    },

    {
      bottom: "14%",
      right: "13%",
      size: "145px",
      rotation: -30,
    },
  ];

  /*
  ==========================================
  CHANGE FLAVOR
  ==========================================
  */

  const changeFlavor = (index) => {
    const flavor = flavors[index];

    setActiveFlavor(index);
    activeFlavorRef.current = index;

    /*
    Change background
    */

    gsap.to(mainRef.current, {
      backgroundColor: flavor.bg,
      duration: 0.8,
      ease: "power2.out",
    });

    /*
    Bottle rotation
    */

    gsap.timeline()
      .to(bottleRef.current, {
        rotationY: 180,
        rotationZ: 8,
        scale: 0.9,
        duration: 0.35,
        ease: "power2.in",
      })
      .set(bottleRef.current, {
        attr: {
          src: flavor.bottle,
        },
      })
      .to(bottleRef.current, {
        rotationY: 360,
        rotationZ: 0,
        scale: 1,
        duration: 0.55,
        ease: "back.out(1.7)",
      });

    /*
    ==========================================
    TEXT ANIMATION
    ==========================================
    */

    gsap
      .timeline()
      .to(
        [titleRef.current, subtitleRef.current],
        {
          y: 30,
          opacity: 0,
          duration: 0.2,
        }
      )
      .set(titleRef.current, {
        textContent: flavor.name,
      })
      .set(subtitleRef.current, {
        textContent: flavor.small,
      })
      .to(
        [titleRef.current, subtitleRef.current],
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "back.out(1.7)",
        }
      );

    /*
    ==========================================
    FRUIT ANIMATION
    ==========================================
    */

    fruitRefs.current.forEach((fruit, fruitIndex) => {
      if (!fruit) return;

      const position =
        fruitPositions[fruitIndex];

      gsap
        .timeline()
        .to(fruit, {
          scale: 0,
          opacity: 0,
          rotation: 180,
          duration: 0.2,
          ease: "power2.in",
        })
        .set(fruit, {
          attr: {
            src: flavor.fruit,
          },
        })
        .set(fruit, {
          top:
            position.top || "auto",

          left:
            position.left || "auto",

          right:
            position.right || "auto",

          bottom:
            position.bottom || "auto",

          width:
            position.size,

          height:
            position.size,
        })
        .to(fruit, {
          scale: 1,
          opacity: 0.95,
          rotation:
            position.rotation,
          duration: 0.6,
          ease: "back.out(1.5)",
        });
    });

    /*
    ==========================================
    COUNTER
    ==========================================
    */

    if (counterRef.current) {
      counterRef.current.textContent =
        `0${index + 1}`;
    }
  };

  /*
  ==========================================
  GSAP SCROLL
  ==========================================
  */

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /*
      ========================================
      INITIAL ANIMATION
      ========================================
      */

      gsap.from(".nav-item", {
        y: -30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".hero-content", {
        scale: 0.7,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
      });

      gsap.from(bottleRef.current, {
        y: 300,
        opacity: 0,
        scale: 0.5,
        rotation: -20,
        duration: 1.5,
        delay: 0.3,
        ease: "back.out(1.7)",
      });

      /*
      ========================================
      BOTTLE IDLE FLOAT
      ========================================
      */

      gsap.to(bottleRef.current, {
        y: -18,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /*
      ========================================
      FLOATING FRUIT IDLE
      ========================================
      */

      fruitRefs.current.forEach((fruit, index) => {
        gsap.to(fruit, {
          y: index % 2 === 0 ? -25 : 25,
          rotation:
            index % 2 === 0 ? 15 : -15,
          duration:
            2.5 + index * 0.3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      /*
      ========================================
      MAIN SCROLL TIMELINE
      ========================================
      */

      const flavorTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-scroll",
          start: "top top",
          end: "+=8000",
          scrub: 1,
          pin: ".flavor-stage",
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          id: "flavor-scroll",

          onUpdate: (self) => {
            const progress = self.progress;

            const index = Math.min(
              flavors.length - 1,
              Math.floor(
                progress * flavors.length
              )
            );

            if (index !== activeFlavorRef.current) {
              changeFlavor(index);
            }

            /*
            Continuous bottle rotation
            */

            gsap.set(
              bottleRef.current,
              {
                rotation:
                  progress * 360 * 8,
              }
            );

            /*
            Bottle zoom
            */

            const scale =
              1 +
              Math.sin(progress * Math.PI * 8) *
                0.04;

            gsap.set(
              bottleRef.current,
              {
                scale,
              }
            );

            /*
            Fruits orbit around bottle
            */

            fruitRefs.current.forEach(
              (fruit, fruitIndex) => {
                const angle =
                  progress *
                    Math.PI *
                    2 *
                    4 +
                  fruitIndex *
                    (Math.PI / 2);

                const radius = 40 + fruitIndex * 12;

                gsap.set(fruit, {
                  x:
                    Math.cos(angle) *
                    radius,

                  y:
                    Math.sin(angle) *
                    radius,

                  rotation:
                    progress *
                      360 *
                      (fruitIndex + 1),
                });
              }
            );
          },
        },
      });

      /*
      ========================================
      SCROLL CAMERA EFFECT
      ========================================
      */

      flavorTimeline.to(
        ".background-circle",
        {
          scale: 2.5,
          rotation: 360,
          ease: "none",
        },
        0
      );

      flavorTimeline.to(
        ".hero-content",
        {
          scale: 1.05,
          ease: "none",
        },
        0
      );

      /*
      ========================================
      PARTICLES
      ========================================
      */

      gsap.utils.toArray(".particle").forEach(
        (particle, index) => {
          gsap.to(particle, {
            x:
              index % 2 === 0
                ? 300
                : -300,

            y:
              index % 3 === 0
                ? -400
                : 400,

            rotation:
              index * 180,

            scrollTrigger: {
              trigger:
                ".flavor-scroll",
              start: "top top",
              end: "+=8000",
              scrub: 2,
            },
          });
        }
      );

      /*
      ========================================
      NAVBAR
      ========================================
      */

      gsap.to(".navbar", {
        backgroundColor:
          "rgba(0,0,0,0.18)",
        backdropFilter:
          "blur(18px)",
        scrollTrigger: {
          trigger:
            ".flavor-scroll",
          start: "top top",
          end: "+=8000",
          scrub: true,
        },
      });

      /*
      ========================================
      REFRESH
      ========================================
      */

      ScrollTrigger.refresh();
    }, mainRef);

    return () => ctx.revert();
    // GSAP timelines and ScrollTriggers are initialized once on mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main
      ref={mainRef}
      className="min-h-screen overflow-x-clip text-white"
      style={{
        backgroundColor:
          flavors[activeFlavor].bg,
      }}
    >
      {/* =====================================
          NAVBAR
      ===================================== */}

{/* =====================================
    NAVBAR
===================================== */}

<nav className="navbar fixed top-0 left-0 w-full z-[100] px-4 md:px-10 py-4">
  <div className="max-w-7xl mx-auto">

    <div className="flex items-center justify-between rounded-full border border-white/30 bg-white/15 backdrop-blur-2xl shadow-xl px-5 md:px-8 py-3">

      {/* LOGO */}
      <button
        onClick={() => navigate("/")}
        className="nav-item text-2xl md:text-3xl font-black tracking-tighter"
      >
        Juicy<span className="text-yellow-200">.</span>
      </button>

      {/* DESKTOP NAV */}
      <div className="hidden md:flex items-center gap-7 lg:gap-9">
 <button
          onClick={() => navigate("/login")}
          className="nav-item text-xs lg:text-sm font-bold uppercase tracking-widest hover:text-yellow-200 transition-colors"
        >
          Login
        </button>
        {/* HOME */}
        <button
          onClick={() => navigate("/home")}
          className="nav-item text-xs lg:text-sm font-bold uppercase tracking-widest hover:text-yellow-200 transition-colors"
        >
          Home
        </button>

        {/* PRODUCTS DROPDOWN */}
        <div className="relative">

          <button
            onClick={() => setProductsOpen((open) => !open)}
            className="nav-item flex items-center gap-1 text-xs lg:text-sm font-bold uppercase tracking-widest hover:text-yellow-200 transition-colors"
          >
            Products
            <span
              className={`text-xs transition-transform duration-300 ${
                productsOpen ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>

          {/* DROPDOWN */}
          <div
            className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 rounded-2xl border border-white/20 bg-black/90 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-300 ${
              productsOpen
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-3 pointer-events-none"
            }`}
          >

            <button
              onClick={() => {
                setProductsOpen(false);
                navigate("/shop");
              }}
              className="w-full text-left px-5 py-4 text-xs font-bold tracking-widest hover:bg-white/10 hover:text-yellow-300 transition-all"
            >
              ALL JUICES
            </button>

            <button
              onClick={() => {
                setProductsOpen(false);
                navigate("/shop");
              }}
              className="w-full text-left px-5 py-4 text-xs font-bold tracking-widest hover:bg-white/10 hover:text-yellow-300 transition-all"
            >
              FRUIT JUICES
            </button>

            <button
              onClick={() => {
                setProductsOpen(false);
                navigate("/shop");
              }}
              className="w-full text-left px-5 py-4 text-xs font-bold tracking-widest hover:bg-white/10 hover:text-yellow-300 transition-all"
            >
              BEST SELLERS
            </button>

          </div>
        </div>

        {/* SHOP NOW */}
        <button
          onClick={() => navigate("/shop")}
          className="nav-item text-xs lg:text-sm font-bold uppercase tracking-widest hover:text-yellow-200 transition-colors"
        >
          Shop Now
        </button>

        {/* ABOUT */}
        <button
          onClick={() => {
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" });

            setProductsOpen(false);
          }}
          className="nav-item text-xs lg:text-sm font-bold uppercase tracking-widest hover:text-yellow-200 transition-colors"
        >
          About
        </button>

        {/* CONTACT */}
        <button
          onClick={() => {
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" });

            setProductsOpen(false);
          }}
          className="nav-item text-xs lg:text-sm font-bold uppercase tracking-widest hover:text-yellow-200 transition-colors"
        >
          Contact
        </button>

      </div>

      {/* RIGHT BUTTONS */}
      <div className="hidden md:flex items-center gap-3">

        <button
          onClick={() => navigate("/login")}
          className="nav-item px-5 lg:px-6 py-3 rounded-full border border-white/70 text-white text-xs font-black tracking-widest hover:bg-white hover:text-black transition-all duration-300"
        >
          LOGIN
        </button>

        <button
          onClick={() => navigate("/shop")}
          className="nav-item px-6 lg:px-7 py-3 rounded-full bg-white text-black text-xs font-black tracking-widest shadow-lg hover:bg-yellow-200 hover:scale-105 transition-all duration-300"
        >
          SHOP NOW ↗
        </button>

      </div>

      {/* MOBILE MENU BUTTON */}
      <button
        type="button"
        onClick={() => setMenuOpen((open) => !open)}
        className="md:hidden text-white text-2xl font-bold w-10 h-10 flex items-center justify-center"
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? "×" : "☰"}
      </button>

    </div>

    {/* MOBILE MENU */}
    <div
      className={`md:hidden overflow-hidden transition-all duration-500 ${
        menuOpen
          ? "max-h-[600px] opacity-100 mt-3"
          : "max-h-0 opacity-0"
      }`}
    >
      <div className="rounded-3xl border border-white/20 bg-black/90 backdrop-blur-2xl p-6 flex flex-col gap-4 shadow-2xl">

        {/* HOME */}
        <button
          onClick={() => {
            setMenuOpen(false);
            navigate("/");
          }}
          className="text-left font-bold tracking-widest hover:text-yellow-300"
        >
          HOME
        </button>

        {/* MOBILE PRODUCTS */}
        <button
          onClick={() => setProductsOpen((open) => !open)}
          className="flex items-center justify-between text-left font-bold tracking-widest hover:text-yellow-300"
        >
          PRODUCTS
          <span
            className={`transition-transform duration-300 ${
              productsOpen ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </button>

        {productsOpen && (
          <div className="ml-4 flex flex-col gap-3 border-l border-white/20 pl-4">

            <button
              onClick={() => {
                setMenuOpen(false);
                setProductsOpen(false);
                navigate("/shop");
              }}
              className="text-left text-sm text-white/70 hover:text-yellow-300"
            >
              ALL JUICES
            </button>

            <button
              onClick={() => {
                setMenuOpen(false);
                setProductsOpen(false);
                navigate("/shop");
              }}
              className="text-left text-sm text-white/70 hover:text-yellow-300"
            >
              FRUIT JUICES
            </button>

            <button
              onClick={() => {
                setMenuOpen(false);
                setProductsOpen(false);
                navigate("/shop");
              }}
              className="text-left text-sm text-white/70 hover:text-yellow-300"
            >
              BEST SELLERS
            </button>

          </div>
        )}

        {/* SHOP NOW */}
        <button
          onClick={() => {
            setMenuOpen(false);
            navigate("/shop");
          }}
          className="text-left font-bold tracking-widest hover:text-yellow-300"
        >
          SHOP NOW
        </button>

        {/* ABOUT */}
        <button
          onClick={() => {
            setMenuOpen(false);
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="text-left font-bold tracking-widest hover:text-yellow-300"
        >
          ABOUT
        </button>

        {/* CONTACT */}
        <button
          onClick={() => {
            setMenuOpen(false);
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="text-left font-bold tracking-widest hover:text-yellow-300"
        >
          CONTACT
        </button>

        {/* LOGIN */}
        <button
          onClick={() => {
            setMenuOpen(false);
            navigate("/login");
          }}
          className="text-left font-bold tracking-widest hover:text-yellow-300"
        >
          LOGIN
        </button>

        {/* MOBILE SHOP BUTTON */}
        <button
          onClick={() => {
            setMenuOpen(false);
            navigate("/shop");
          }}
          className="bg-white text-black rounded-full py-3 font-black"
        >
          SHOP NOW ↗
        </button>

      </div>
    </div>

  </div>
</nav>
      {/* =====================================
          SCROLL AREA
      ===================================== */}

      <section
        id="home"
        className="flavor-scroll relative w-full"
      >

        {/* ===================================
            STICKY STAGE
        =================================== */}

        <div id="flavors" className="flavor-stage h-screen min-h-[650px] w-full overflow-hidden relative flex items-center justify-center">

          {/* BACKGROUND GLOW */}

          <div
            className="background-circle absolute w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full opacity-30 blur-3xl"
            style={{
              backgroundColor:
                flavors[activeFlavor].accent,
            }}
          />

          {/* =================================
              GIANT BACKGROUND TEXT
          ================================= */}

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

            <h1
              className="hero-content text-[24vw] md:text-[20vw] font-black tracking-[-0.08em] opacity-20 uppercase whitespace-nowrap"
            >
              {flavors[activeFlavor].name}
            </h1>

          </div>

          {/* =================================
              LEFT TEXT
          ================================= */}

          <div className="hero-content absolute z-20 left-[6%] md:left-[9%] top-[32%] max-w-md">

            <p ref={subtitleRef} className="text-xs md:text-sm tracking-[0.45em] uppercase font-bold mb-5">
              {flavors[activeFlavor].small}
            </p>

            <h2
              ref={titleRef}
              className="text-6xl md:text-[8rem] font-black leading-[0.78] tracking-[-0.06em]"
            >
              APPLE
            </h2>

            <p className="mt-8 max-w-sm text-sm md:text-base text-white/80 leading-relaxed">
              {flavors[activeFlavor].description}
            </p>

            <button
              onClick={() => navigate("/shop")}
              className="mt-8 bg-white text-black px-7 py-4 rounded-full font-black text-sm hover:scale-110 transition-transform shadow-2xl"
            >
              SHOP THIS FLAVOR →
            </button>

          </div>

          {/* =================================
              CENTER BOTTLE
          ================================= */}

          <div className="absolute z-30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

            <img
              ref={bottleRef}
              src={flavors[0].bottle}
              alt="Juice bottle"
              className="w-[260px] md:w-[380px] lg:w-[450px] max-h-[70vh] object-contain drop-shadow-[0_40px_35px_rgba(0,0,0,0.35)]"
            />

          </div>

          {/* =================================
              FLOATING FRUITS
          ================================= */}

          {fruitPositions.map(
            (position, index) => (
              <img
                key={index}
                ref={(element) => {
                  fruitRefs.current[index] =
                    element;
                }}
                src={flavors[0].fruit}
                alt="Floating fruit"
                className="absolute z-20 object-contain pointer-events-none drop-shadow-2xl"
                style={{
                  top:
                    position.top ||
                    "auto",

                  left:
                    position.left ||
                    "auto",

                  right:
                    position.right ||
                    "auto",

                  bottom:
                    position.bottom ||
                    "auto",

                  width:
                    position.size,

                  height:
                    position.size,

                  transform:
                    `rotate(${position.rotation}deg)`,
                }}
              />
            )
          )}

          {/* =================================
              EXTRA FLOATING PARTICLES
          ================================= */}

          <div className="particle absolute left-[20%] top-[25%] w-4 h-4 bg-white/60 rounded-full" />

          <div className="particle absolute right-[25%] top-[30%] w-3 h-3 bg-white/50 rounded-full" />

          <div className="particle absolute left-[35%] bottom-[20%] w-5 h-5 bg-white/40 rounded-full" />

          <div className="particle absolute right-[15%] bottom-[25%] w-6 h-6 bg-white/30 rounded-full" />

          {/* =================================
              FLAVOR COUNTER
          ================================= */}

          <div className="absolute right-[6%] bottom-[15%] z-40">

            <div className="flex items-end gap-2">

              <span
                ref={counterRef}
                className="text-5xl font-black"
              >
                01
              </span>

              <span className="text-white/50 text-sm mb-2">
                / 08
              </span>

            </div>

            <div className="mt-3 w-32 h-[2px] bg-white/30">

              <div
                className="h-full bg-white transition-all duration-500"
                style={{
                  width:
                    `${((activeFlavor + 1) / 8) * 100}%`,
                }}
              />

            </div>

          </div>

          {/* =================================
              SCROLL INDICATOR
          ================================= */}

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 text-center">

            <p className="text-[10px] tracking-[0.5em] uppercase mb-3">
              Scroll to change flavor
            </p>

            <div className="w-[1px] h-12 bg-white/70 mx-auto animate-pulse" />

          </div>

          {/* =================================
              SIDE FLAVOR LIST
          ================================= */}

          <div className="hidden lg:flex absolute right-[5%] top-1/2 -translate-y-1/2 z-40 flex-col gap-3">

            {flavors.map(
              (flavor, index) => (
                <button
                  key={flavor.name}
                  onClick={() => {
                    const trigger = ScrollTrigger.getById("flavor-scroll");
                    if (trigger) {
                      const scrollPosition =
                        trigger.start + (index / flavors.length) * (trigger.end - trigger.start);
                      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
                    }
                  }}
                  className={`text-right text-xs tracking-[0.25em] font-bold transition-all duration-300 ${
                    activeFlavor === index
                      ? "text-white scale-110"
                      : "text-white/40 hover:text-white/80"
                  }`}
                >
                  {flavor.name}
                </button>
              )
            )}

          </div>

        </div>

      </section>

      {/* =====================================
          AFTER FLAVOR SECTION
      ===================================== */}

      <section
        id="about"
        className="relative z-10 min-h-screen w-full bg-[#080808] flex items-center justify-center px-6 py-28 md:py-32 overflow-hidden"
      >
        <div className="absolute w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[150px] top-10 left-[-150px] pointer-events-none" />
        <div className="absolute w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[150px] bottom-0 right-[-100px] pointer-events-none" />

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <p className="text-orange-400 tracking-[0.5em] uppercase text-xs md:text-sm mb-8 font-bold">
            Freshness in every bottle
          </p>

          <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.95]">
            8 FLAVORS.
            <br />
            <span className="text-white/30">ONE JUICY</span>
            <br />
            EXPERIENCE.
          </h2>

          <p className="max-w-xl mx-auto mt-8 text-white/50 text-sm md:text-lg leading-relaxed">
            Discover the natural taste of fresh fruits. Every bottle brings you a delicious burst of freshness, energy and happiness.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate("/shop")}
              className="bg-white text-black px-9 py-4 rounded-full font-black text-sm hover:bg-orange-400 hover:scale-105 transition-all duration-300"
            >
              EXPLORE JUICES ↗
            </button>
            <button
              onClick={() => navigate("/login")}
              className="border border-white/40 text-white px-9 py-4 rounded-full font-bold text-sm hover:bg-white hover:text-black transition-all duration-300"
            >
              LOGIN →
            </button>
          </div>

          <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-5">
            <h3 className="text-2xl font-black">Fruity<span className="text-orange-400">.</span></h3>
            <p className="text-white/40 text-xs tracking-widest">FRESHNESS YOU CAN TASTE.</p>
            <p className="text-white/30 text-xs">© 2026 FRUITY. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </section>
    </main>
  );
}