
import React, { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useCart } from "./CartContext";

import gmango from "./gmango.webp";
import apple from "./apple.webp";
import orangeb1 from "./orangeb1.png";
import berry from "./berry.webp";
import orangebottle from "./orangebottle.png";
import mangob from "./mangob.webp";
import strawb from "./strawb.png";
import lemonb from "./lemonb.png";
import kiwib from "./kiwib.png";
import lemons from "./lemons.png";
import alpho from "./alpho.png";
import kiwii from "./kiwii.png";

const products = [
  {
    id: 1,
    name: "Orange Rush",
    price: 149,
    category: "Citrus",
    description: "Bright, refreshing orange juice with a juicy citrus finish.",
    image: orangebottle,
    color: "from-orange-500 to-red-600",
    fruit: "🍊",
    splash: "#ff9b25",
  },
  {
    id: 2,
    name: "Mango Gold",
    price: 169,
    category: "Tropical",
    description: "Rich and creamy mango flavor in every delicious sip.",
    image: mangob,
    color: "from-yellow-400 to-orange-500",
    fruit: "🥭",
    splash: "#ffc928",
  },
  {
    id: 3,
    name: "Strawberry Pop",
    price: 159,
    category: "Berry",
    description: "Sweet strawberry goodness with a fresh fruity taste.",
    image: strawb,
    color: "from-pink-500 to-rose-700",
    fruit: "🍓",
    splash: "#ff5d8f",
  },
  {
    id: 4,
    name: "Lemon Zest",
    price: 139,
    category: "Citrus",
    description: "A refreshing lemon drink with a bright citrus kick.",
    image: lemonb,
    color: "from-lime-300 to-green-500",
    fruit: "🍋",
    splash: "#d9ff45",
  },
  {
    id: 5,
    name: "Apple Fresh",
    price: 129,
    category: "Classic",
    description: "Crisp, naturally sweet apple flavor for any time of day.",
    image: apple,
    color: "from-red-400 to-red-700",
    fruit: "🍎",
    splash: "#ff514d",
  },
  {
    id: 6,
    name: "Kiwi Splash",
    price: 179,
    category: "Fresh",
    description: "A tangy kiwi blend with a tropical refreshing finish.",
    image: kiwib,
    color: "from-green-400 to-emerald-700",
    fruit: "🥝",
    splash: "#8cff55",
  },
  {
    id: 7,
    name: "Orange Crush",
    price: 159,
    category: "Citrus",
    description: "A smooth orange blend bursting with fruity flavor.",
    image: orangeb1,
    color: "from-orange-400 to-amber-600",
    fruit: "🍊",
    splash: "#ffad38",
  },
  {
    id: 8,
    name: "Golden Mango",
    price: 199,
    category: "Tropical",
    description: "A premium mango-inspired drink with a rich finish.",
    image: gmango,
    color: "from-amber-300 to-yellow-600",
    fruit: "🥭",
    splash: "#ffcf47",
  },
  {
    id: 9,
    name: "Lemon Spark",
    price: 149,
    category: "Citrus",
    description: "A lively lemon flavor with a refreshing finish.",
    image: lemons,
    color: "from-yellow-300 to-lime-500",
    fruit: "🍋",
    splash: "#edff62",
  },
  {
    id: 10,
    name: "Raw alphonsa",
    price: 189,
    category: "Tropical",
    description: "A colorful tropical-inspired fruit blend.",
    image: alpho,
    color: "from-orange-400 to-pink-600",
    fruit: "🥭",
    splash: "#ffab4b",
  },
  {
    id: 11,
    name: "Berry Burst",
    price: 179,
    category: "Berry",
    description: "A sweet berry-inspired drink bursting with color.",
    image: berry,
    color: "from-fuchsia-500 to-red-600",
    fruit: "🍓",
    splash: "#ff61c5",
  },
  {
    id: 12,
    name: "Green Energy",
    price: 189,
    category: "Fresh",
    description: "A vibrant green fruit blend with a tangy finish.",
    image: kiwii,
    color: "from-lime-400 to-green-700",
    fruit: "🥝",
    splash: "#a6ff65",
  },
];

export default function Shop() {
  const pageRef = useRef(null);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Prevent multiple clicks during transition
  const isNavigating = useRef(false);

  // Main GSAP animations
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();

      timeline
        .from(".loader-text", {
          y: 60,
          opacity: 0,
          scale: 0.8,
          duration: 0.7,
          ease: "power4.out",
        })
        .to(".loader-progress", {
          scaleX: 1,
          duration: 0.9,
          ease: "power2.inOut",
        })
        .to(".shop-loader", {
          yPercent: -100,
          duration: 1,
          ease: "power4.inOut",
        })
        .from(
          ".shop-nav",
          {
            y: -40,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.45"
        )
        .from(
          ".shop-eyebrow",
          {
            y: 25,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.3"
        )
        .from(
          ".shop-title-line",
          {
            yPercent: 110,
            opacity: 0,
            rotateX: -35,
            duration: 0.9,
            stagger: 0.15,
            ease: "power4.out",
          },
          "-=0.2"
        )
        .from(
          ".shop-description",
          {
            y: 25,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.4"
        )
        .from(
          ".shop-orb",
          {
            scale: 0,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        )
        .from(
          ".shop-card",
          {
            y: 75,
            opacity: 0,
            scale: 0.92,
            duration: 0.7,
            stagger: 0.075,
            ease: "power3.out",
          },
          "-=0.25"
        )
        .from(
          ".shop-footer",
          {
            y: 25,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.2"
        );

      // Floating fruits
      gsap.to(".shop-orb", {
        y: -22,
        rotation: 12,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        stagger: 0.4,
        ease: "sine.inOut",
      });

      // Floating bottles
      gsap.utils.toArray(".product-bottle").forEach((bottle, index) => {
        gsap.to(bottle, {
          y: -5,
          duration: 1.5 + (index % 3) * 0.25,
          repeat: -1,
          yoyo: true,
          delay: index * 0.08,
          ease: "sine.inOut",
        });
      });

      // Splash rings
      gsap.utils.toArray(".splash-ring").forEach((ring, index) => {
        gsap.to(ring, {
          scale: index % 2 === 0 ? 1.1 : 0.9,
          rotation: index % 2 === 0 ? 12 : -12,
          opacity: index % 2 === 0 ? 0.5 : 0.25,
          duration: 2 + (index % 3) * 0.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      gsap.from(".footer-content", {
        y: 25,
        opacity: 0,
        duration: 0.8,
        delay: 1,
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  // 3D tilt and fruit splash on hover
  const animateFruitSplash = (event, entering = true) => {
    const card = event.currentTarget;
    const splash = card.querySelector(".fruit-splash");
    const bottle = card.querySelector(".product-bottle");
    const drops = card.querySelectorAll(".splash-drop");
    const rings = card.querySelectorAll(".splash-ring");

    if (!splash || !bottle) return;

    if (entering) {
      gsap.killTweensOf([card, splash, ...drops, ...rings]);

      gsap.to(card, {
        y: -8,
        scale: 1.025,
        duration: 0.35,
        ease: "power3.out",
        overwrite: "auto",
      });

      gsap.to(splash, {
        scale: 1.45,
        opacity: 1,
        duration: 0.45,
        ease: "back.out(1.7)",
      });

      gsap.to(bottle, {
        z: 70,
        y: -18,
        rotationY: -8,
        rotationX: 4,
        rotationZ: 3,
        scale: 1.17,
        duration: 0.5,
        ease: "back.out(1.5)",
        overwrite: "auto",
      });

      gsap.to(rings, {
        scale: 1.3,
        rotation: "+=15",
        opacity: 0.75,
        duration: 0.5,
        stagger: 0.06,
        ease: "power2.out",
      });

      gsap.fromTo(
        drops,
        {
          x: 0,
          y: 0,
          scale: 0.2,
          opacity: 0,
        },
        {
          x: (i) =>
            Math.cos((i / drops.length) * Math.PI * 2) * 65,
          y: (i) =>
            Math.sin((i / drops.length) * Math.PI * 2) * 55,
          scale: (i) => (i % 2 === 0 ? 1.3 : 0.8),
          opacity: 1,
          duration: 0.6,
          stagger: 0.025,
          ease: "power2.out",
        }
      );
    } else {
      gsap.killTweensOf([card, splash, ...drops, ...rings]);

      gsap.to(card, {
        y: 0,
        scale: 1,
        rotationX: 0,
        rotationY: 0,
        duration: 0.45,
        ease: "power3.out",
      });

      gsap.to(bottle, {
        z: 0,
        y: -5,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scale: 1,
        duration: 0.5,
        ease: "power3.out",
        overwrite: "auto",
      });

      gsap.to(splash, {
        scale: 1,
        opacity: 0.7,
        duration: 0.45,
        ease: "power2.out",
      });

      gsap.to(rings, {
        scale: 1,
        rotation: 0,
        opacity: 0.3,
        duration: 0.45,
      });

      gsap.to(drops, {
        x: 0,
        y: 0,
        scale: 0.2,
        opacity: 0,
        duration: 0.3,
      });
    }
  };

  // Mouse-following 3D tilt
  const handleProductTilt = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    gsap.to(card, {
      rotationY: (x - 0.5) * 10,
      rotationX: (0.5 - y) * 7,
      duration: 0.3,
      ease: "power2.out",
      overwrite: "auto",
      transformPerspective: 1000,
    });

    const bottle = card.querySelector(".product-bottle");

    if (bottle) {
      gsap.to(bottle, {
        rotationY: (x - 0.5) * 16,
        rotationX: (0.5 - y) * 8,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
  };

  // ADD TO CART + FULL SCREEN ANIMATION
  const animateBuy = (event, product) => {
    if (isNavigating.current) return;

    isNavigating.current = true;

    const button = event.currentTarget;
    const card = button.closest(".shop-card");

    // Add selected product to cart
    addToCart(product);

    // Button animation
    gsap.timeline()
      .to(button, {
        scale: 0.9,
        duration: 0.12,
      })
      .to(button, {
        scale: 1.08,
        duration: 0.22,
        ease: "back.out(2)",
      })
      .to(button, {
        scale: 1,
        duration: 0.15,
      });

    // Fruit splash burst
    if (card) {
      const splash = card.querySelector(".fruit-splash");
      const drops = card.querySelectorAll(".splash-drop");

      if (splash) {
        gsap.fromTo(
          splash,
          { scale: 1, opacity: 0.7 },
          {
            scale: 1.7,
            opacity: 1,
            duration: 0.45,
            ease: "power2.out",
          }
        );
      }

      gsap.fromTo(
        drops,
        {
          x: 0,
          y: 0,
          scale: 0.2,
          opacity: 0,
        },
        {
          x: (i) =>
            Math.cos((i / drops.length) * Math.PI * 2) * 85,
          y: (i) =>
            Math.sin((i / drops.length) * Math.PI * 2) * 75,
          scale: 1.3,
          opacity: 1,
          duration: 0.6,
          stagger: 0.025,
          ease: "power2.out",
        }
      );
    }

    // Full-screen juice transition
    gsap.fromTo(
      ".cart-transition",
      {
        yPercent: 100,
        scale: 0.8,
        borderRadius: "50% 50% 0 0",
      },
      {
        yPercent: 0,
        scale: 1,
        borderRadius: "0%",
        duration: 0.9,
        ease: "power4.inOut",
        onComplete: () => navigate("/cart"),
      }
    );
  };

  return (
    <main
      ref={pageRef}
      className="juicy-shop relative min-h-screen overflow-hidden bg-[#770737] text-white"
    >
      <style>{`
        .juicy-shop {
          perspective: 1200px;
        }

        .shop-card {
          position: relative;
          transform-style: preserve-3d;
          transform-origin: center center;
          will-change: transform;
          transition: border-color .4s ease, box-shadow .4s ease;
        }

        .shop-card:hover {
          border-color: rgba(255,255,255,.55);
          box-shadow: 0 25px 65px rgba(0,0,0,.28);
        }

        .product-visual {
          position: relative;
          isolation: isolate;
          perspective: 1100px;
          transform-style: preserve-3d;
          overflow: hidden;
        }

        .fruit-splash {
          width: 190px;
          height: 190px;
          border-radius: 50%;
          filter: blur(2px);
          transform-style: preserve-3d;
          transform-origin: center center;
          will-change: transform, opacity;
          box-shadow: 0 0 55px var(--fruit-color);
        }

        .splash-ring {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 170px;
          height: 170px;
          border: 3px solid rgba(255,255,255,.48);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 2;
          will-change: transform, opacity;
        }

        .splash-ring-two {
          width: 125px;
          height: 125px;
          border-width: 2px;
          border-style: dashed;
          border-color: rgba(255,255,255,.4);
        }

        .splash-drop {
          position: absolute;
          left: 50%;
          top: 50%;
          border-radius: 50%;
          background: rgba(255,255,255,.95);
          box-shadow: 0 0 14px rgba(255,255,255,.85);
          z-index: 4;
          pointer-events: none;
          will-change: transform, opacity;
        }

        .product-bottle {
          transform-origin: center bottom;
          transform-style: preserve-3d;
          backface-visibility: visible;
          will-change: transform;
          filter: drop-shadow(0 12px 12px rgba(0,0,0,.2));
        }

        .shop-card:hover .product-bottle {
          filter:
            drop-shadow(0 25px 18px rgba(0,0,0,.35))
            drop-shadow(0 0 15px rgba(255,255,255,.15));
        }

        .shop-background-glow {
          animation: background-breathe 6s ease-in-out infinite alternate;
        }

        .buy-button {
          transition: box-shadow .3s ease, background .3s ease;
        }

        .shop-card:hover .buy-button {
          box-shadow: 0 0 24px rgba(255,155,37,.3);
        }

        .cart-transition {
          pointer-events: none;
        }

        @keyframes background-breathe {
          from { transform: scale(1); }
          to { transform: scale(1.18); }
        }

        @media (prefers-reduced-motion: reduce) {
          .shop-background-glow {
            animation: none;
          }
        }
      `}</style>

      {/* FULL SCREEN CART TRANSITION */}
      <div
        className="cart-transition fixed inset-0 z-[200] flex items-center justify-center bg-orange-500"
        style={{
          transform: "translateY(100%)",
          visibility: "hidden",
        }}
      >
        <div className="text-center">
          <div className="mb-5 animate-bounce text-8xl">🍹</div>

          <h1 className="text-6xl font-black tracking-tighter text-white md:text-8xl">
            JUICY<span className="text-[#770737]">.</span>
          </h1>

          <p className="mt-5 text-sm font-bold uppercase tracking-[0.5em] text-white">
            Preparing your freshness...
          </p>
        </div>
      </div>

      {/* ANIMATED BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(91,153,82,0.25),transparent_45%),radial-gradient(ellipse_at_80%_70%,rgba(160,190,80,0.12),transparent_40%)]" />

        <div className="shop-background-glow absolute -left-40 top-20 h-96 w-96 rounded-full bg-lime-400/10 blur-[120px]" />

        <div className="shop-background-glow absolute -right-40 top-1/2 h-[450px] w-[450px] rounded-full bg-emerald-300/10 blur-[140px]" />

        <div className="shop-background-glow absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-orange-400/10 blur-[110px]" />
      </div>

      {/* LOADING SCREEN */}
      <div className="shop-loader fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#123D2A]">
        <h1 className="loader-text text-6xl font-black tracking-tighter md:text-8xl">
          JUICY<span className="text-orange-400">.</span>
        </h1>

        <div className="mt-8 h-[3px] w-48 overflow-hidden rounded-full bg-white/10">
          <div className="loader-progress h-full w-full origin-left scale-x-0 bg-orange-400" />
        </div>

        <p className="mt-4 text-xs uppercase tracking-[0.5em] text-white/50">
          Freshness loading...
        </p>
      </div>

      {/* NAVBAR */}
      <nav className="shop-nav relative z-10 flex items-center justify-between px-6 py-6 md:px-12">
        <button
          onClick={() => navigate("/")}
          className="text-3xl font-black tracking-tighter"
        >
          JUICY<span className="text-orange-400">.</span>
        </button>

        <button
          onClick={() => navigate("/home")}
          className="rounded-full border border-white/30 px-5 py-3 transition duration-300 hover:border-orange-400 hover:bg-orange-400 hover:text-black"
        >
          ← HOME
        </button>
      </nav>

      {/* HERO */}
      <header className="relative px-6 pb-16 pt-16 text-center md:px-12 md:pt-24">
        <div className="shop-orb pointer-events-none absolute left-[12%] top-8 text-5xl">
          🍊
        </div>

        <div className="shop-orb pointer-events-none absolute right-[12%] top-20 text-5xl">
          🥭
        </div>

        <p className="shop-eyebrow mb-5 text-sm uppercase tracking-[0.5em] text-orange-400">
          Freshness delivered
        </p>

        <h1 className="text-6xl font-black tracking-tighter md:text-9xl">
          <span className="shop-title-line block">ALL THE</span>
          <span className="shop-title-line block text-orange-400">
            GOOD STUFF.
          </span>
        </h1>

        <p className="shop-description mx-auto mt-6 max-w-xl text-white/60">
          Discover your favorite fruity flavors. Pick your juice and enjoy
          a little burst of freshness.
        </p>
      </header>

      {/* PRODUCTS */}
      <section className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-7 px-6 pb-24 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <article
            key={product.id}
            onMouseEnter={(event) => animateFruitSplash(event, true)}
            onMouseMove={handleProductTilt}
            onMouseLeave={(event) => animateFruitSplash(event, false)}
            className="shop-card group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]"
          >
            {/* PRODUCT VISUAL */}
            <div
              className={`product-visual relative flex h-64 items-center justify-center bg-gradient-to-br ${product.color}`}
              style={{ "--fruit-color": product.splash }}
            >
              <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
                <div
                  className="fruit-splash opacity-70"
                  style={{
                    background: `radial-gradient(circle, ${product.splash} 0%, transparent 70%)`,
                  }}
                />
              </div>

              <div className="splash-ring" />
              <div className="splash-ring splash-ring-two" />

              {Array.from({ length: 8 }).map((_, i) => (
                <span
                  key={i}
                  className="splash-drop opacity-0"
                  style={{
                    width: i % 3 === 0 ? "14px" : "9px",
                    height: i % 3 === 0 ? "14px" : "9px",
                  }}
                />
              ))}

              <span className="pointer-events-none absolute bottom-5 left-4 z-[3] text-3xl opacity-70 transition-transform duration-500 group-hover:-translate-y-3 group-hover:rotate-12">
                {product.fruit}
              </span>

              <span className="pointer-events-none absolute right-5 top-16 z-[3] text-2xl opacity-60 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2">
                {product.fruit}
              </span>

              <span className="absolute right-4 top-4 z-20 rounded-full bg-black/25 px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                {product.category}
              </span>

              <img
                src={product.image}
                alt={product.name}
                loading={product.id > 4 ? "lazy" : "eager"}
                className="product-bottle relative z-10 h-[85%] w-[85%] object-contain drop-shadow-2xl"
              />

              <span className="pointer-events-none absolute -bottom-12 -left-8 h-36 w-36 rounded-full bg-white/20 blur-2xl" />
            </div>

            {/* PRODUCT INFORMATION */}
            <div className="p-6">
              <h2 className="text-2xl font-black transition-colors duration-300 group-hover:text-orange-300">
                {product.name}
              </h2>

              <p className="mt-3 min-h-12 text-sm leading-6 text-white/60">
                {product.description}
              </p>

              <div className="mt-6 flex items-center justify-between gap-3">
                <span className="text-2xl font-black">
                  ₹{product.price}
                </span>

                <button
                  disabled={isNavigating.current}
                  onMouseMove={(event) => {
                    const rect = event.currentTarget.getBoundingClientRect();

                    event.currentTarget.style.setProperty(
                      "--mouse-x",
                      `${event.clientX - rect.left}px`
                    );

                    event.currentTarget.style.setProperty(
                      "--mouse-y",
                      `${event.clientY - rect.top}px`
                    );
                  }}
                  onClick={(event) => animateBuy(event, product)}
                  className="buy-button group/button relative flex items-center gap-3 overflow-hidden rounded-full bg-white px-5 py-3 text-sm font-bold text-black hover:bg-neutral-900 hover:text-white disabled:opacity-70"
                >
                  <span
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/button:opacity-100"
                    style={{
                      background:
                        "radial-gradient(circle 90px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(249,115,22,.65), transparent 80%)",
                    }}
                  />

                  <span className="relative z-10">ADD TO CART</span>

                  <span className="relative z-10 text-xl transition-transform duration-300 group-hover/button:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* FOOTER */}
      <footer className="shop-footer relative z-10 border-t border-white/10 px-6 py-8 text-center text-sm text-white/40">
        <p className="footer-content">
          JUICY. — A little more freshness, every day.
        </p>
      </footer>
    </main>
  );
}
