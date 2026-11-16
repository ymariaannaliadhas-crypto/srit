
import React, { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useCart } from "./CartContext";

export default function Cart() {
  const pageRef = useRef(null);
  const navigate = useNavigate();

  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    total,
    cartCount,
  } = useCart();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".cart-heading", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      })
        .from(
          ".cart-subtitle",
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.5"
        )
        .from(
          ".cart-product",
          {
            x: -100,
            opacity: 0,
            scale: 0.9,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.5)",
          },
          "-=0.3"
        )
        .from(
          ".cart-summary",
          {
            x: 80,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.6"
        );

      gsap.to(".cart-orb", {
        y: -25,
        rotation: 20,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        stagger: 0.4,
        ease: "sine.inOut",
      });

      gsap.to(".cart-bottle", {
        y: -12,
        rotation: 3,
        duration: 2,
        repeat: -1,
        yoyo: true,
        stagger: 0.2,
        ease: "sine.inOut",
      });
    }, pageRef);

    return () => ctx.revert();
  }, [cartItems.length]);

  const animateRemove = (id, event) => {
    const card = event.currentTarget.closest(".cart-product");

    if (!card) {
      removeFromCart(id);
      return;
    }

    gsap.to(card, {
      x: 100,
      opacity: 0,
      scale: 0.85,
      duration: 0.4,
      ease: "power3.in",
      onComplete: () => removeFromCart(id),
    });
  };

  const animateQuantity = (event) => {
    gsap.fromTo(
      event.currentTarget,
      { scale: 0.8 },
      {
        scale: 1,
        duration: 0.35,
        ease: "back.out(2)",
      }
    );
  };

  return (
    <main
      ref={pageRef}
      className="relative min-h-screen overflow-hidden bg-[#770737] px-5 py-8 text-white md:px-12"
    >
      <style>{`
        .cart-product {
          transform-style: preserve-3d;
          transition: border-color .3s, box-shadow .3s;
        }

        .cart-product:hover {
          border-color: rgba(255,255,255,.5);
          box-shadow: 0 20px 55px rgba(0,0,0,.25);
        }

        .cart-bottle {
          filter: drop-shadow(0 15px 15px rgba(0,0,0,.3));
          transform-style: preserve-3d;
        }

        .cart-glow {
          animation: cartGlow 5s ease-in-out infinite alternate;
        }

        @keyframes cartGlow {
          from { transform: scale(1); opacity: .3; }
          to { transform: scale(1.3); opacity: .7; }
        }

        .cart-action {
          transition: all .3s ease;
        }

        .cart-action:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(255,150,30,.25);
        }
      `}</style>

      {/* Animated background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="cart-glow absolute -left-40 top-20 h-96 w-96 rounded-full bg-orange-400/20 blur-[120px]" />
        <div className="cart-glow absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-pink-400/20 blur-[120px]" />
        <div className="cart-glow absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-lime-400/10 blur-[120px]" />
      </div>

      {/* Floating fruit decorations */}
      <div className="cart-orb pointer-events-none fixed left-[5%] top-[30%] text-5xl">
        🍊
      </div>
      <div className="cart-orb pointer-events-none fixed right-[8%] top-[20%] text-5xl">
        🥭
      </div>
      <div className="cart-orb pointer-events-none fixed bottom-[10%] right-[15%] text-5xl">
        🍓
      </div>

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between">
        <h1 className="text-3xl font-black tracking-tighter">
          JUICY<span className="text-orange-400">.</span>
        </h1>

        <button
          onClick={() => navigate("/shop")}
          className="rounded-full border border-white/30 px-6 py-3 font-bold transition hover:border-orange-400 hover:bg-orange-400 hover:text-black"
        >
          ← CONTINUE SHOPPING
        </button>
      </nav>

      {/* Heading */}
      <header className="relative z-10 mb-14 mt-16 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.5em] text-orange-400">
          Freshness is waiting
        </p>

        <h1 className="cart-heading text-6xl font-black tracking-tighter md:text-8xl">
          YOUR <span className="text-orange-400">CART.</span>
        </h1>

        <p className="cart-subtitle mt-5 text-white/60">
          {cartCount} delicious item{cartCount !== 1 ? "s" : ""} selected.
          Freshness delivered to you.
        </p>
      </header>

      {/* Cart content */}
      {cartItems.length === 0 ? (
        <section className="relative z-10 mx-auto max-w-xl py-16 text-center">
          <div className="mb-8 text-8xl">🛒</div>

          <h2 className="text-4xl font-black">
            YOUR CART IS EMPTY!
          </h2>

          <p className="mt-4 text-white/60">
            Looks like you haven't picked your favorite juice yet.
          </p>

          <button
            onClick={() => navigate("/shop")}
            className="cart-action mt-8 rounded-full bg-orange-400 px-9 py-4 font-black text-black"
          >
            EXPLORE JUICES →
          </button>
        </section>
      ) : (
        <section className="relative z-10 mx-auto grid max-w-7xl gap-10 pb-20 lg:grid-cols-[1fr_380px]">

          {/* Product list */}
          <div className="space-y-6">
            {cartItems.map((item) => (
              <article
                key={item.id}
                className="cart-product flex flex-col gap-5 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl sm:flex-row sm:items-center"
              >
                {/* Bottle image */}
                <div
                  className={`relative flex h-52 w-full shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${item.color} sm:w-48`}
                >
                  <div className="absolute h-36 w-36 rounded-full bg-white/30 blur-3xl" />

                  <span className="absolute left-3 top-3 text-3xl">
                    {item.fruit}
                  </span>

                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-bottle relative z-10 h-[85%] w-[85%] object-contain"
                  />
                </div>

                {/* Details */}
                <div className="flex-1">
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-orange-400">
                    {item.category}
                  </span>

                  <h2 className="mt-2 text-3xl font-black">
                    {item.name}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-white/50">
                    {item.description}
                  </p>

                  <p className="mt-4 text-2xl font-black">
                    ₹{item.price}
                  </p>

                  {/* Quantity */}
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-4 rounded-full border border-white/20 px-4 py-2">
                      <button
                        onClick={(event) => {
                          animateQuantity(event);
                          decreaseQuantity(item.id);
                        }}
                        className="text-xl font-bold text-orange-400"
                      >
                        −
                      </button>

                      <span className="min-w-5 text-center font-bold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={(event) => {
                          animateQuantity(event);
                          increaseQuantity(item.id);
                        }}
                        className="text-xl font-bold text-orange-400"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={(event) =>
                        animateRemove(item.id, event)
                      }
                      className="text-sm font-bold text-red-300 transition hover:text-red-500"
                    >
                      REMOVE ✕
                    </button>
                  </div>
                </div>

                {/* Item total */}
                <div className="text-left sm:text-right">
                  <p className="text-xs uppercase tracking-widest text-white/40">
                    Subtotal
                  </p>
                  <p className="mt-2 text-2xl font-black text-orange-400">
                    ₹{item.price * item.quantity}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Summary */}
          <aside className="cart-summary h-fit rounded-[2rem] border border-white/10 bg-white/[0.07] p-7 backdrop-blur-xl lg:sticky lg:top-8">
            <h2 className="text-3xl font-black">
              ORDER <span className="text-orange-400">SUMMARY.</span>
            </h2>

            <div className="mt-8 flex justify-between text-white/60">
              <span>Total items</span>
              <span>{cartCount}</span>
            </div>

            <div className="mt-5 flex justify-between text-white/60">
              <span>Delivery</span>
              <span className="font-bold text-green-400">FREE</span>
            </div>

            <div className="my-7 border-t border-white/10" />

            <div className="flex items-center justify-between">
              <span className="text-lg font-bold">TOTAL</span>

              <span className="text-3xl font-black text-orange-400">
                ₹{total}
              </span>
            </div>

            <button
              onClick={() => alert("Your order is ready for checkout!")}
              className="cart-action mt-8 w-full rounded-full bg-orange-400 py-4 font-black tracking-wider text-black"
            >
              PROCEED TO CHECKOUT →
            </button>

            <button
              onClick={clearCart}
              className="mt-5 w-full text-sm font-bold text-white/40 transition hover:text-red-400"
            >
              CLEAR ENTIRE CART
            </button>

            <p className="mt-8 text-center text-xs text-white/40">
              FRESH JUICE. FRESH HAPPINESS. 🍊
            </p>
          </aside>
        </section>
      )}

      <footer className="relative z-10 border-t border-white/10 py-8 text-center text-sm text-white/40">
        JUICY. — A little more freshness, every day.
      </footer>
    </main>
  );
}
