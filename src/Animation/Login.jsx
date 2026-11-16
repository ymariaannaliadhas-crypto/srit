
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import apple from "./apple.webp";
import orange from "./orange.png";
import mango from "./mango.png";
import juice from "./Juice-Definition.webp";

const Login = () => {
  const navigate = useNavigate();

  const pageRef = useRef(null);
  const cardRef = useRef(null);
  const juiceRef = useRef(null);
  const glowRef = useRef(null);

  const fruitsRef = useRef([]);
  const bubblesRef = useRef([]);

  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // =========================================
  // PAGE LOAD ANIMATION
  // =========================================

  useEffect(() => {
    const ctx = gsap.context(() => {

      const tl = gsap.timeline();

      tl.from(".navbar", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      })

        .from(".small-title", {
          y: 40,
          opacity: 0,
          duration: 0.7,
        })

        .from(".main-title", {
          y: 100,
          opacity: 0,
          scale: 0.8,
          duration: 1,
          ease: "back.out(1.7)",
        })

        .from(".description", {
          y: 30,
          opacity: 0,
          duration: 0.7,
        })

        .from(
          cardRef.current,
          {
            x: 150,
            opacity: 0,
            rotationY: 30,
            scale: 0.8,
            duration: 1.2,
            ease: "power4.out",
          },
          "-=0.5"
        )

        .from(
          juiceRef.current,
          {
            scale: 0,
            rotation: -180,
            opacity: 0,
            duration: 1.5,
            ease: "back.out(1.7)",
          },
          "-=0.8"
        );

      // =========================================
      // BOTTLE FLOAT
      // =========================================

      gsap.to(juiceRef.current, {
        y: -25,
        rotation: 5,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // =========================================
      // FLOATING FRUITS
      // =========================================

      fruitsRef.current.forEach((fruit, index) => {

        if (!fruit) return;

        gsap.to(fruit, {
          y: index % 2 === 0 ? -35 : 35,
          x: index % 2 === 0 ? 20 : -20,
          rotation: index % 2 === 0 ? 20 : -20,
          duration: 2 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

      });

      // =========================================
      // CARD GLOW
      // =========================================

      gsap.to(cardRef.current, {
        boxShadow:
          "0 0 40px rgba(255,140,0,0.25), 0 0 100px rgba(255,80,0,0.15)",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // =========================================
      // BUBBLES
      // =========================================

      bubblesRef.current.forEach((bubble, index) => {

        if (!bubble) return;

        gsap.fromTo(
          bubble,
          {
            y: 0,
            opacity: 0,
            scale: 0.5,
          },
          {
            y: -window.innerHeight - 100,
            opacity: 0.7,
            scale: 1,
            duration: 5 + index,
            repeat: -1,
            delay: index * 0.5,
            ease: "none",
          }
        );

      });

    }, pageRef);

    return () => ctx.revert();

  }, []);

  // =========================================
  // MOUSE GLOW
  // =========================================

  const handleMouseMove = (e) => {

    const x = e.clientX;
    const y = e.clientY;

    gsap.to(glowRef.current, {
      x: x - 150,
      y: y - 150,
      duration: 0.5,
      ease: "power3.out",
    });

    gsap.to(juiceRef.current, {
      x: (x - window.innerWidth / 2) * 0.03,
      y: (y - window.innerHeight / 2) * 0.03,
      duration: 0.8,
      ease: "power3.out",
    });

  };

  // =========================================
  // LOGIN
  // =========================================

  const handleLogin = (e) => {

    e.preventDefault();

    setIsLoading(true);

    // Stop bottle animation
    gsap.killTweensOf(juiceRef.current);

    // =========================================
    // LOGIN CARD EXIT
    // =========================================

    const tl = gsap.timeline({
      onComplete: () => {
        navigate("/home");
      },
    });

    tl.to(cardRef.current, {
      scale: 0.7,
      opacity: 0,
      rotationY: 90,
      duration: 0.5,
      ease: "power3.in",
    })

      .to(
        juiceRef.current,
        {
          scale: 2,
          rotation: 360,
          opacity: 0,
          duration: 0.8,
          ease: "power3.in",
        },
        "-=0.3"
      )

      .to(
        pageRef.current,
        {
          scale: 1.3,
          opacity: 0,
          duration: 0.8,
          ease: "power3.inOut",
        },
        "-=0.5"
      );

  };

  // =========================================
  // LOGIN / SIGNUP SWITCH
  // =========================================

  const switchForm = () => {

    gsap.to(cardRef.current, {

      scale: 0.85,
      opacity: 0,
      rotationY: 90,
      duration: 0.35,

      onComplete: () => {

        setIsSignup(!isSignup);

        gsap.fromTo(
          cardRef.current,
          {
            scale: 0.85,
            opacity: 0,
            rotationY: -90,
          },
          {
            scale: 1,
            opacity: 1,
            rotationY: 0,
            duration: 0.6,
            ease: "back.out(1.5)",
          }
        );

      },

    });

  };

  return (
    <div
      ref={pageRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden bg-[#180600] text-white"
    >

      {/* ========================================= */}
      {/* BACKGROUND */}
      {/* ========================================= */}

      <div className="absolute inset-0">

        <div className="absolute inset-0 bg-gradient-to-br from-[#160500] via-[#5c1d00] to-[#ff7300]" />

        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-orange-500/30 blur-[120px] animate-pulse" />

        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-yellow-400/30 blur-[120px] animate-pulse" />

        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/20 blur-[120px]" />

      </div>

      {/* ========================================= */}
      {/* MOUSE GLOW */}
      {/* ========================================= */}

      <div
        ref={glowRef}
        className="pointer-events-none fixed z-10 h-[300px] w-[300px] rounded-full bg-orange-400/20 blur-[100px]"
      />

      {/* ========================================= */}
      {/* NAVBAR */}
      {/* ========================================= */}

      <nav className="navbar relative z-30 flex items-center justify-between px-6 py-6 md:px-12">

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-2xl shadow-lg shadow-orange-500/50">
            🍊
          </div>

          <h1 className="text-2xl font-black tracking-wider">
            JUICY<span className="text-yellow-300">.</span>
          </h1>

        </div>

        <div className="hidden gap-8 text-sm font-bold md:flex">

          <a
            href="/home"
            className="transition hover:text-yellow-300"
          >
            HOME
          </a>

          <a
            href="#juices"
            className="transition hover:text-yellow-300"
          >
            JUICES
          </a>

          <a
            href="#about"
            className="transition hover:text-yellow-300"
          >
            ABOUT
          </a>

          <a
            href="#contact"
            className="transition hover:text-yellow-300"
          >
            CONTACT
          </a>

        </div>

      </nav>

      {/* ========================================= */}
      {/* BUBBLES */}
      {/* ========================================= */}

      {[...Array(20)].map((_, index) => (

        <div
          key={index}
          ref={(el) => (bubblesRef.current[index] = el)}
          className="absolute bottom-[-50px] z-10 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${8 + Math.random() * 20}px`,
            height: `${8 + Math.random() * 20}px`,
          }}
        />

      ))}

      {/* ========================================= */}
      {/* MAIN */}
      {/* ========================================= */}

      <main className="relative z-20 mx-auto flex min-h-[calc(100vh-96px)] max-w-7xl items-center px-6 pb-16 md:px-12">

        <div className="grid w-full items-center gap-12 lg:grid-cols-2">

          {/* ========================================= */}
          {/* LEFT */}
          {/* ========================================= */}

          <div>

            <p className="small-title mb-5 text-sm font-bold uppercase tracking-[0.5em] text-yellow-300">
              Fresh • Natural • Delicious
            </p>

            <h2 className="main-title max-w-2xl text-6xl font-black leading-[0.9] md:text-8xl">

              Taste
              <br />

              <span className="bg-gradient-to-r from-orange-300 via-yellow-300 to-orange-500 bg-clip-text text-transparent">
                Happiness.
              </span>

            </h2>

            <p className="description mt-8 max-w-lg text-lg leading-8 text-white/70">

              Fresh fruits. Real flavor. A little happiness in every bottle.
              Welcome back to your favorite juice experience.

            </p>

            {/* ========================================= */}
            {/* JUICE AREA */}
            {/* ========================================= */}

            <div className="relative mt-8 h-[330px]">

              <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/30 blur-[70px]" />

              <img
                ref={juiceRef}
                src={orange}
                alt="Orange Juice"
                className="absolute left-1/2 top-1/2 z-20 h-[300px] w-auto -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_30px_30px_rgba(0,0,0,0.5)]"
              />

              {/* Apple */}

              <img
                ref={(el) => (fruitsRef.current[0] = el)}
                src={apple}
                alt="Apple"
                className="absolute left-[5%] top-[15%] z-30 h-20 w-20 object-contain drop-shadow-xl"
              />

              {/* Mango */}

              <img
                ref={(el) => (fruitsRef.current[1] = el)}
                src={mango}
                alt="Mango"
                className="absolute right-[8%] top-[20%] z-30 h-24 w-24 object-contain drop-shadow-xl"
              />

              {/* Orange */}

              <img
                ref={(el) => (fruitsRef.current[2] = el)}
                src={orange}
                alt="Orange"
                className="absolute bottom-[5%] left-[20%] z-30 h-16 w-16 object-contain"
              />

            </div>

          </div>

          {/* ========================================= */}
          {/* LOGIN CARD */}
          {/* ========================================= */}

          <div
            ref={cardRef}
            className="relative mx-auto w-full max-w-md overflow-hidden rounded-[35px] border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-2xl md:p-10"
            style={{
              perspective: "1000px",
            }}
          >

            <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-orange-400/30 blur-3xl" />

            <div className="relative z-10">

              {/* LOGO */}

              <div className="mb-8 text-center">

                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 shadow-lg shadow-orange-500/40 overflow-hidden">
  <img
    src={juice}
    alt="Juice"
    className="h-full w-full object-contain p-2"
  />
</div>

                <h3 className="text-3xl font-black">

                  {isSignup
                    ? "Join JUICY"
                    : "Welcome Back"}

                </h3>

                <p className="mt-2 text-sm text-white/50">

                  {isSignup
                    ? "Create your fresh juice account"
                    : "Login to continue your juicy journey"}

                </p>

              </div>

              {/* ========================================= */}
              {/* FORM */}
              {/* ========================================= */}

              <form
                onSubmit={handleLogin}
                className="space-y-5"
              >

                {/* NAME */}

                {isSignup && (

                  <div>

                    <label className="mb-2 block text-sm font-semibold">
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="Your name"
                      required
                      className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 outline-none transition duration-300 placeholder:text-white/30 focus:border-orange-400 focus:bg-orange-400/10 focus:ring-4 focus:ring-orange-400/10"
                    />

                  </div>

                )}

                {/* EMAIL */}

                <div>

                  <label className="mb-2 block text-sm font-semibold">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 outline-none transition duration-300 placeholder:text-white/30 focus:border-orange-400 focus:bg-orange-400/10 focus:ring-4 focus:ring-orange-400/10"
                  />

                </div>

                {/* PASSWORD */}

                <div>

                  <label className="mb-2 block text-sm font-semibold">
                    Password
                  </label>

                  <div className="relative">

                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      required
                      className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 pr-14 outline-none transition duration-300 placeholder:text-white/30 focus:border-orange-400 focus:bg-orange-400/10 focus:ring-4 focus:ring-orange-400/10"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-xl transition hover:scale-125"
                    >
                      {showPassword ? "🐵" : "🙈"}
                    </button>

                  </div>

                </div>

                {/* FORGOT */}

                {!isSignup && (

                  <div className="flex justify-end">

                    <button
                      type="button"
                      className="text-sm font-semibold text-yellow-300 transition hover:text-yellow-200"
                    >
                      Forgot Password?
                    </button>

                  </div>

                )}

                {/* ========================================= */}
                {/* LOGIN BUTTON */}
                {/* ========================================= */}

         <button
  onClick={() => navigate("/home")}
  type="button"
  disabled={isLoading}
  className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 py-4 font-black text-black shadow-lg shadow-orange-500/30 transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-orange-500/60 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
>
  <span className="relative z-10 flex items-center justify-center gap-3">
    {isLoading
      ? "ENTERING..."
      : isSignup
      ? "CREATE ACCOUNT"
      : "LOGIN"}

    {!isLoading && (
      <span className="text-xl transition duration-300 group-hover:translate-x-2">
        →
      </span>
    )}
  </span>

  <div className="absolute inset-0 -translate-x-full bg-white/40 transition duration-500 group-hover:translate-x-full" />
</button>

              </form>

              {/* ========================================= */}
              {/* DIVIDER */}
              {/* ========================================= */}

              <div className="my-7 flex items-center gap-4">

                <div className="h-px flex-1 bg-white/10" />

                <span className="text-xs text-white/40">
                  OR CONTINUE WITH
                </span>

                <div className="h-px flex-1 bg-white/10" />

              </div>

              {/* GOOGLE */}

              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 py-4 font-semibold transition duration-300 hover:-translate-y-1 hover:bg-white/10"
              >

                <span className="text-xl">
                  G
                </span>

                Continue with Google

              </button>

              {/* SWITCH */}

              <div className="mt-7 text-center text-sm text-white/50">

                {isSignup
                  ? "Already have an account?"
                  : "Don't have an account?"}

                <button
                  type="button"
                  onClick={switchForm}
                  className="ml-2 font-bold text-yellow-300 transition hover:text-yellow-200"
                >

                  {isSignup
                    ? "Login"
                    : "Sign Up"}

                </button>

              </div>

            </div>

          </div>

        </div>

      </main>

      {/* ========================================= */}
      {/* BOTTOM */}
      {/* ========================================= */}

      <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-orange-950/50 to-transparent" />

      <div className="absolute bottom-5 left-1/2 z-30 -translate-x-1/2 text-xs tracking-[0.4em] text-white/30">
        FRESHNESS IN EVERY DROP
      </div>

    </div>
  );
};

export default Login;
