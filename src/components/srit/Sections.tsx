import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Star,
  X,
} from "lucide-react";
import { PLAN_TABS, TESTIMONIALS } from "./data";
import { img } from "./assets";
import { BtnLink, Eyebrow, Heading, Reveal } from "./ui";

export function PerformanceDashboard() {
  const stats = [
    { number: "2000+", description: "Hospitals & OPD clinics in 20+ countries" },
    { number: "300 million+", description: "EMR experiences to date" },
    {
      number: "200,000+",
      description:
        "Active Users across HIS, EMR, PACS, ERP, Portal and Mobile App",
    },
  ];

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#0a192f] py-20 md:py-24">
      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 divide-y divide-white/10 px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6 lg:px-8">
        {stats.map((item, index) => (
          <Reveal
            key={item.number}
            delay={index * 0.06}
            className="py-6 first:sm:pl-0 last:sm:pr-0 sm:px-8 sm:py-0"
          >
            <div className="flex h-full flex-col">
              <h3 className="font-display text-4xl font-bold tracking-tight tabular-nums text-[#38bdf8] md:text-5xl">
                {item.number}
              </h3>
              <p className="mt-4 max-w-[320px] text-sm leading-relaxed text-gray-300 md:text-base">
                {item.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="relative overflow-hidden border-y border-gray-200 bg-[#fafbfc] py-24">
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal className="relative mx-auto w-full max-w-[540px] pb-10 pr-8">
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
            <img
              src={img("2026/03/watch-movie.jpg")}
              alt="Technology and digital services"
              className="aspect-[5/4] w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-2 right-0 w-[40%] overflow-hidden rounded-lg border border-gray-200 bg-white p-1">
            <img
              src={img("2026/03/26860.jpg")}
              alt="Digital technology"
              className="aspect-square w-full rounded-md object-cover"
            />
          </div>
        </Reveal>

        <Reveal>
          <Eyebrow>About SRIT</Eyebrow>
          <Heading pre="Making IT work better" hl="with AI" className="mt-3" />

          <p className="mt-6 max-w-3xl border-l-2 border-[#079fdf] pl-4 text-base font-medium leading-relaxed text-[#102b50]">
            For over two decades, SRIT has been dedicated to achieving
            excellence in our ICT offerings, with a vision to leverage
            technology to transform entire industries. Our focus spans
            key sectors such as healthcare, eGovernance, telecom, and
            other areas involving large-scale operations.
          </p>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-600">
            At SRIT, we harness the power of AI-driven solutions to
            automate business processes, improve decision-making,
            stabilize integrations with external systems, and streamline
            operations through the intelligent application of modern
            technologies.
          </p>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-600">
            We are committed to driving innovation and delivering impactful
            solutions that not only meet but exceed industry standards.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link
              to="/management"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#079fdf] px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#102b50] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079fdf]"
            >
              More About Us
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Features() {
  const features = [
    {
      k: "enterprise-ai",
      title: "Enterprise-Grade AI Engineering",
      desc: "We design and deploy secure AI platforms, intelligent automation, and scalable digital ecosystems that solve complex business challenges.",
    },
    {
      k: "domain-expertise",
      title: "Deep Domain Expertise",
      desc: "Extensive domain knowledge combined with advanced engineering and technology expertise.",
    },
    {
      k: "secure-future",
      title: "Secure & Future-Ready",
      desc: "From private AI deployments to enterprise knowledge platforms, our solutions are built for security, compliance, and long-term growth.",
    },
    {
      k: "proven-engineering",
      title: "20+ Years of Proven Engineering Delivery",
      desc: "Two decades of expertise delivering reliable, enterprise-ready solutions.",
    },
    {
      k: "engineering-excellence",
      title: "Engineering Excellence",
      desc: "AI-driven engineering and technology capabilities built to solve complex organizational challenges.",
    },
    {
      k: "trusted-industries",
      title: "Trusted Across Industries",
      desc: "Delivering AI-powered solutions for government, healthcare, transportation, telecom, financial services, and enterprise organizations.",
    },
    {
      k: "scale-confidence",
      title: "Scale with Confidence",
      desc: "Capabilities designed to support enterprise-scale transformation, growth and implementation.",
    },
    {
      k: "ai-first",
      title: "AI-First Approach",
      desc: "AI integrated across engineering, solutions, business transformation, and innovation effectively.",
    },
  ];

  return (
    <section className="relative overflow-hidden border-b border-gray-200 bg-white py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 border-b border-gray-200 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Eyebrow>AI-Driven</Eyebrow>
            <Heading pre="Our Special" hl="AI Features" className="mt-2" />
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
            Core engineering capabilities built for security, compliance, and long-term public and enterprise scale.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, index) => (
            <Reveal key={f.k} delay={index * 0.03}>
              <article className="flex h-full flex-col justify-between rounded-xl border border-gray-200 bg-[#fafbfc] p-6 transition-colors duration-200 hover:border-[#079fdf]/60">
                <div>
                  <h4 className="font-display text-lg font-semibold leading-snug tracking-tight text-[#102b50]">
                    {f.title}
                  </h4>
                  <p className="mt-2.5 text-sm leading-relaxed text-gray-600">
                    {f.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Entertainment() {
  return (
    <section
      id="entertainment"
      className="scroll-mt-24 border-y border-gray-200 bg-[#fafbfc] py-24"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <h3 className="font-display text-3xl font-bold tracking-tight text-[#102b50] md:text-4xl">
            Telecom &amp; <span className="text-[#079fdf]">Broadband</span>
          </h3>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">
            As a managed service provider for telecom networks &amp; high-speed broadband networks, we provide software and services for managing Networks, Subscribers &amp; Partners, Revenue Cycles, Operations, Customer Service and more, managing millions of subscribers across our projects.
          </p>
        </Reveal>
        <Reveal>
          <img
            src={img("telecom.jpg")}
            alt="Telecom & Broadband"
            className="w-full rounded-xl border border-gray-200 object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}

export function CyberSecurity() {
  return (
    <section
      id="cyber-security"
      className="scroll-mt-24 border-y border-gray-200 bg-[#fafbfc] py-24"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <img
            src={img("cyber.jpg")}
            alt="Cyber Security"
            className="w-full rounded-xl border border-gray-200 object-cover"
          />
        </Reveal>
        <Reveal>
          <h3 className="font-display text-3xl font-bold tracking-tight text-[#102b50] md:text-4xl">
            Cyber <span className="text-[#079fdf]">Security</span>
          </h3>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">
            Cybercrime is ever more prevalent, and in 2024 it&apos;s estimated to create losses amounting to $6 trillion. Business organizations and government agencies need to have a proactive approach for safeguarding from cyber threats. SRIT&apos;s Cyber Security Practice team helps you develop a strategy to staying ahead of threats and recover quickly from any that might succeed. We help establish cyber resiliency and implementing a cybersecurity strategy aligned with your priorities
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function PartnerAndPlans() {
  const [tab, setTab] = useState(0);

  return (
    <section id="e-governance" className="scroll-mt-24 relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 mx-2 overflow-hidden rounded-xl border border-white/10 md:mx-5">
        <img src={img("e-gov.jpg")} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#071B49]/90" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <Eyebrow center light>Our Solutions</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            E-Governance
          </h2>
        </Reveal>

        <div className="mt-12 flex gap-8 overflow-x-auto border-y border-white/15 py-5 md:justify-between">
          {PLAN_TABS.map((item, index) => (
            <button
              key={item.label}
              type="button"
              onClick={() => setTab(index)}
              className={`relative shrink-0 cursor-pointer pb-5 font-display text-lg font-bold uppercase transition-colors duration-200 md:text-xl ${
                tab === index ? "text-white" : "text-white/50 hover:text-white/85"
              }`}
            >
              {item.label}
              {tab === index && (
                <motion.span
                  layoutId="tabline"
                  className="absolute bottom-0 left-0 h-[2px] w-full bg-[#16bafa]"
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-14 max-w-3xl px-4 pb-10 sm:px-6"
          >
            {(PLAN_TABS[tab]?.plans ?? []).map((p) => (
              <p key={p.name} className="text-base leading-relaxed text-gray-200 md:text-lg">
                {p.description}
              </p>
            ))}

            {PLAN_TABS[tab]?.label === "Litigation Management Software" && (
              <a
                href="/litigation-management"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-[#16bafa] transition-colors duration-200 hover:text-white"
              >
                Learn More
                <ChevronRight className="h-4 w-4" />
              </a>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export function SearchPlans() {
  const [selectedPage, setSelectedPage] = useState("");

  const investorLinks = [
    { label: "Corporate Governance", href: "" },
    { label: "Codes & Policies", href: "" },
    { label: "Investors Information", href: "" },
    { label: "Annual Report", href: "" },
    { label: "IPO Documents", href: "#" },
  ];

  return (
    <section className="relative overflow-hidden border-y border-gray-200 bg-[#fafbfc]">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <Reveal>
          <div className="w-full rounded-xl border border-gray-200 bg-white px-7 py-10 text-left sm:px-10 lg:px-12">
            <p className="text-xs font-bold uppercase tracking-wider text-[#079fdf]">
              Investor Relations
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-[#102b50] md:text-4xl">
              Explore Investment Opportunities with SRIT
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">
              Access important investor information, corporate governance
              details, company policies, annual reports, and IPO documents.
            </p>

            <select
              value={selectedPage}
              onChange={(e) => setSelectedPage(e.target.value)}
              className="mt-7 block w-full rounded-lg border border-gray-200 bg-[#fafbfc] px-4 py-3 text-sm text-[#102b50] outline-none transition-colors duration-200 focus:border-[#079fdf] focus:bg-white"
            >
              <option value="">Select Investor Information</option>
              {investorLinks.map((item) => (
                <option key={item.label} value={item.href}>
                  {item.label}
                </option>
              ))}
            </select>

            <button
              type="button"
              onClick={() => {
                if (selectedPage) {
                  window.open(selectedPage, "_blank", "noopener,noreferrer");
                }
              }}
              className="mt-5 rounded-lg bg-[#079fdf] px-6 py-3 font-display text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#102b50] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Apply →
            </button>
          </div>
        </Reveal>

        <Reveal className="hidden self-end lg:block">
          <img src={img("investor.png")} alt="Investor Relations" className="w-full object-contain" />
        </Reveal>
      </div>
    </section>
  );
}

export function Testimonials() {
  const [i, setI] = useState(0);

  const nextReview = () => setI((c) => (c + 1) % TESTIMONIALS.length);
  const previousReview = () => setI((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  useEffect(() => {
    if (TESTIMONIALS.length <= 1) return;
    const timer = setInterval(() => setI((c) => (c + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(timer);
  }, []);

  if (TESTIMONIALS.length === 0) return null;
  const review = TESTIMONIALS[i];
  if (!review) return null;

  return (
    <section className="relative overflow-hidden border-y border-gray-200 bg-[#f8f7f3] py-20 md:py-24">
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-8">
        <Reveal>
          <span className="font-display text-xs font-bold uppercase tracking-wider text-[#079fdf]">
            Our Testimonials
          </span>

          <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-[#102b50] md:text-4xl">
            <span className="whitespace-nowrap">
              What People <span className="text-[#079fdf]">Talked</span>
            </span>
            <br />
            About Us
          </h2>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-gray-600 md:text-lg">
            Hear from our clients and partners about their experience with SRIT and our commitment to excellence.
          </p>

          <div className="mt-8 flex gap-3">
            <button
              type="button"
              onClick={previousReview}
              aria-label="Previous testimonial"
              className="grid h-11 w-11 cursor-pointer place-items-center rounded-lg border border-gray-200 bg-white text-[#102b50] transition-colors duration-200 hover:border-[#079fdf] hover:bg-[#079fdf] hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={nextReview}
              aria-label="Next testimonial"
              className="grid h-11 w-11 cursor-pointer place-items-center rounded-lg border border-gray-200 bg-white text-[#102b50] transition-colors duration-200 hover:border-[#079fdf] hover:bg-[#079fdf] hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <p className="mt-4 text-xs font-medium tabular-nums text-gray-600">
            Review {i + 1} of {TESTIMONIALS.length}
          </p>
        </Reveal>

        <div className="relative min-w-0">
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
            <AnimatePresence mode="wait" initial={false}>
              <motion.article
                key={i}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex min-h-[280px] flex-col justify-between bg-white md:min-h-[300px]"
              >
                <div className="p-6 md:p-8">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-[#079fdf] text-[#079fdf]" />
                    ))}
                  </div>
                  <div className="mt-5 min-h-[90px]">
                    <p className="max-h-[120px] max-w-3xl overflow-y-auto whitespace-pre-wrap break-words pr-3 text-base leading-relaxed text-[#172B4D] [scrollbar-width:thin] md:text-lg">
                      &ldquo;{review.q}&rdquo;
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-200 bg-[#fafbfc] px-6 py-5 md:px-8">
                  <h3 className="font-display text-base font-bold uppercase tracking-wide text-[#172B4D]">
                    {review.n}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-wider text-gray-600 sm:text-sm">
                    {review.r}
                  </p>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          <div className="mt-5 flex justify-center gap-2">
            {TESTIMONIALS.map((item, index) => (
              <button
                key={item.n + index}
                type="button"
                onClick={() => setI(index)}
                aria-label={`Page ${index + 1}`}
                aria-current={i === index ? "true" : undefined}
                className={`h-2 cursor-pointer rounded-full transition-colors duration-200 ${
                  i === index
                    ? "w-6 bg-[#079fdf]"
                    : "w-2 bg-gray-300 hover:bg-[#079fdf]/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function AIChatButton() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }[]>([
    { role: "bot", text: "Hi! I'm SRIT's AI assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;

    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Thanks for your message! A member of our team will be in touch shortly." },
      ]);
    }, 600);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-50 flex h-[440px] w-[340px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-xl border border-gray-200 bg-white"
          >
            <div className="flex items-center justify-between bg-[#102b50] px-4 py-3.5 text-white">
              <div>
                <p className="font-display text-sm font-semibold leading-tight text-white">
                  SRIT AI Assistant
                </p>
                <p className="mt-0.5 text-[11px] text-gray-300">
                  Enterprise &amp; Solution Desk
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="cursor-pointer rounded-lg p-1 text-white/75 transition-colors duration-200 hover:bg-white/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto bg-[#fafbfc] p-4 text-sm">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`max-w-[85%] rounded-lg px-3.5 py-2.5 leading-relaxed ${
                    m.role === "user"
                      ? "ml-auto bg-[#079fdf] text-white"
                      : "border border-gray-200 bg-white text-[#172b4d]"
                  }`}
                >
                  {m.text}
                </div>
              ))}
            </div>

            <form
              onSubmit={send}
              className="flex items-center gap-2 border-t border-gray-200 bg-white p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Inquire about solutions, deployments, or IR..."
                className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm text-[#172b4d] outline-none transition-colors duration-200 focus:border-[#079fdf]"
              />
              <button
                type="submit"
                className="grid h-9 w-9 cursor-pointer place-items-center rounded-lg bg-[#079fdf] text-white transition-colors duration-200 hover:bg-[#102b50]"
                aria-label="Send message"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close AI chat" : "Open AI chat"}
          className="grid h-12 w-12 cursor-pointer place-items-center rounded-xl border border-[#0688bd] bg-[#079fdf] text-white transition-colors duration-200 hover:bg-[#102b50] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079fdf]"
        >
          {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
        </button>
      </div>
    </>
  );
}

export function Blogs() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const totalPages = 1;

  const caseStudies = [
    {
      title: "Digitally Empowered Energy Efficiency",
      desc: "Energy-as-a-service — unlocking energy savings through digitalization",
    },
    {
      title: "Crafting a Digital Enterprise that Navigates to Next",
      desc: "Kraft Heinz company delivers a taste of the future with a transformational data hub",
    },
    {
      title: "AI-Driven Healthcare Transformation",
      desc: "Modernizing patient records with intelligent, secure, and scalable cloud ecosystems",
    },
  ];

  const nextSlide = () => setCurrentIndex((p) => (p >= totalPages ? 1 : p + 1));
  const prevSlide = () => setCurrentIndex((p) => (p <= 1 ? totalPages : p - 1));

  return (
    <section className="relative overflow-hidden bg-[#0a192f] py-24">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow light>
              Explore insights, success stories, and updates shared by our growing partner network.
            </Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Latest <span className="text-[#38bdf8]">Case Studies</span>
            </h2>
          </div>
          <BtnLink
            href="#"
            className="rounded-lg border border-white/15 bg-white/10 text-white hover:bg-white/20"
          >
            View All
          </BtnLink>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.2 }}
            className="grid gap-6 md:grid-cols-3"
          >
            {caseStudies.map((blog, index) => (
              <article
                key={index}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-gray-200 bg-white p-7 transition-colors duration-200 hover:border-[#079fdf]"
              >
                <div>
                  <span className="inline-block rounded-md bg-[#102b50] px-2.5 py-1 text-xs font-semibold tracking-wide text-white">
                    Case Study
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold leading-snug tracking-tight text-[#102b50]">
                    {blog.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{blog.desc}</p>
                </div>

                <div className="mt-8 flex justify-end">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#102b50] px-4 py-2 text-xs font-semibold text-white transition-colors duration-200 hover:bg-[#079fdf]"
                  >
                    I&apos;m Curious
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex items-center justify-center gap-3">
          <button
            onClick={prevSlide}
            className="grid h-10 w-10 cursor-pointer place-items-center rounded-lg border border-white/15 bg-white/5 text-white transition-colors duration-200 hover:bg-[#079fdf]"
            aria-label="Previous"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-1.5 px-2 font-display text-lg font-bold tabular-nums text-white">
            <span>{currentIndex}</span>
            <span className="text-gray-500">/</span>
            <span className="text-gray-400">{totalPages}</span>
          </div>
          <button
            onClick={nextSlide}
            className="grid h-10 w-10 cursor-pointer place-items-center rounded-lg border border-white/15 bg-white/5 text-white transition-colors duration-200 hover:bg-[#079fdf]"
            aria-label="Next"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

export function TrustedIndustries() {
  const clientLogos = [
    "srit c.png", "srit c1.png", "srit c2.png", "srit c3.png", "srit c4.png",
    "srit c5.png", "srit c6.png", "srit c7.png", "srit c8.png", "srit c9.png",
  ];
  const marqueeLogos = [...clientLogos, ...clientLogos];

  return (
    <>
      <style>{`
        @keyframes scroll-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: scroll-marquee 60s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <section className="relative flex h-[140px] w-full items-center overflow-hidden border-y border-gray-200 bg-white">
        <div className="flex w-max animate-marquee items-center gap-3">
          {marqueeLogos.map((logo, index) => (
            <div key={`${logo}-${index}`} className="flex w-[140px] shrink-0 items-center justify-center sm:w-[170px] md:w-[200px]">
              <img src={img(logo)} alt={`SRIT client ${index + 1}`} className="h-20 w-auto object-contain opacity-80 transition-opacity duration-200 hover:opacity-100" />
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />
      </section>
    </>
  );
}

export function Certifications() {
  const certifications = [
    "Trusted Engineering Excellence",
    "CMMI Level 5",
    "ISO 9001",
    "ISO 27001",
    "ISO 20000",
    "ISO 14001",
    "ISO 27034",
    "ISO 45001",
  ];

  return (
    <section className="border-b border-gray-200 bg-[#fafbfc] py-6">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex w-full flex-nowrap items-center gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] lg:justify-between lg:pb-0 [&::-webkit-scrollbar]:hidden">
          {certifications.map((cert) => (
            <div key={cert} className="shrink-0">
              <span className="inline-block whitespace-nowrap rounded-md border border-gray-200 bg-white px-3.5 py-1.5 text-xs font-semibold tabular-nums text-[#102b50] transition-colors duration-200 hover:border-[#079fdf]/50">
                {cert}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const blueprintLinks = [
    { label: "Our Next Technology Direction (Sovereign AI)", href: "/#ai-native-engineering" },
    { label: "Industries & Verticals", href: "/#industries" },
    { label: "The 4 Flagship Solutions", href: "/#solutions" },
    { label: "Our Future Projects", href: "/#future-projects" },
    { label: "AI-Native Engineering", href: "/#ai-native-engineering" },
  ];

  const knowledgeLinks = [
    { label: "Leadership & Management", href: "/management" },
    { label: "The Thinking Edge (7 Viewpoints)", href: "/#the-thinking-edge" },
    { label: "Top Stories & Newsroom", href: "/#newsroom" },
    { label: "Citizen Touchpoints", href: "/#citizen-touchpoints" },
    { label: "Client Roster", href: "/#clients" },
    { label: "Careers in DPI & AI", href: "/#careers" },
  ];

  const investorLinks = [
    { label: "NSE & BSE Listing Details", href: "/investor" },
    { label: "Corporate Governance", href: "/corporate-governance" },
    { label: "Financials & Filings", href: "/investors-information" },
    { label: "Annual Reports & Returns", href: "/annual-report" },
    { label: "IPO Documents", href: "/ipo-documents" },
    { label: "DPDP Act & Privacy Policy", href: "/privacy-policy" },
  ];

  const socialLinks = [
    {
      label: "Facebook",
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8h3.4Z" />
        </svg>
      ),
      href: "#",
    },
    {
      label: "Instagram",
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      ),
      href: "#",
    },
    {
      label: "LinkedIn",
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M5 3.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3.2 9h3.6v12H3.2V9Zm5.8 0h3.4v1.6h.1A3.8 3.8 0 0 1 16 8.7c3.6 0 4.3 2.3 4.3 5.2V21h-3.6v-6.3c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3V21H9V9Z" />
        </svg>
      ),
      href: "#",
    },
    {
      label: "X",
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M18.9 3H22l-6.8 7.8L23.2 21h-6.3l-4.9-6.4L6.4 21H3.2l7.3-8.4L2.8 3h6.5l4.4 5.9L18.9 3Zm-1.1 16h1.7L8.3 4.9H6.5L17.8 19Z" />
        </svg>
      ),
      href: "#",
    },
  ];

  const FooterHeading = ({ children }: { children: React.ReactNode }) => (
    <h3 className="mb-5 border-b border-white/15 pb-2.5 font-display text-sm font-semibold uppercase tracking-wider text-white">
      {children}
    </h3>
  );

  const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a
      href={href}
      className="block py-1 text-sm font-medium leading-relaxed text-gray-300 transition-colors duration-200 hover:text-white"
    >
      {children}
    </a>
  );

  return (
    <footer className="bg-hero text-gray-300">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:px-8 lg:py-20">
        <div>
          <h4 className="mb-5 border-b border-white/15 pb-2.5 font-display text-sm font-semibold uppercase tracking-wider text-white">
            Registered Office
          </h4>
          <address className="not-italic text-sm leading-relaxed tabular-nums text-gray-300">
            SRIT House, #. 113/1B
            <br />
            ITPL Main Road, Brookefield
            <br />
            Bangalore – 560 037
            <br />
            Karnataka
            <br />
            <a
              href="mailto:info@sritindia.com"
              className="mt-2 inline-block text-[#38bdf8] transition-colors duration-200 hover:text-white"
            >
              info@sritindia.com
            </a>
            <br />
            <span className="mt-2 inline-block text-gray-400">Phone:</span>
            <br />
            <a
              href="tel:+918041951999"
              className="text-gray-300 transition-colors duration-200 hover:text-white"
            >
              +91 80 41951999
            </a>
            <br />
            <a
              href="tel:+919449799510"
              className="text-gray-300 transition-colors duration-200 hover:text-white"
            >
              +91 9449799510
            </a>
            <br />
            Fax: +91 80 41523300
          </address>
        </div>

        <div>
          <FooterHeading>Enterprise Architecture</FooterHeading>
          <div className="space-y-1">
            {blueprintLinks.map((item) => (
              <FooterLink key={item.label} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </div>
        </div>

        <div>
          <FooterHeading>Knowledge &amp; Media</FooterHeading>
          <div className="space-y-1">
            {knowledgeLinks.map((item) => (
              <FooterLink key={item.label} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </div>
        </div>

        <div>
          <FooterHeading>Investor Relations</FooterHeading>
          <div className="space-y-1">
            {investorLinks.map((item) => (
              <FooterLink key={item.label} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </div>
          <h4 className="mb-3 mt-7 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Follow Us
          </h4>
          <div className="flex flex-wrap gap-2.5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 bg-white/5 text-gray-200 transition-colors duration-200 hover:border-[#079fdf] hover:bg-[#079fdf] hover:text-white"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl border-t border-white/10 px-4 py-6 sm:px-6 lg:px-8">
        <p className="text-xs font-medium tabular-nums text-gray-400">
          SRIT INDIA © 2026 - All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export function CompanyPage() {
  return (
    <main className="min-h-screen bg-white text-[#172b4d]">
      <section className="border-b border-gray-200 bg-[#102b50] text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-16 lg:px-8">
          <nav className="mb-4 flex items-center gap-2 text-xs font-medium text-cyan-200/80">
            <Link to="/" className="transition-colors duration-200 hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span className="font-semibold text-white">Company Overview</span>
          </nav>

          <p className="text-xs font-bold uppercase tracking-wider text-cyan-200">About SRIT</p>
          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Company Overview
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-200 sm:text-base">
            Over two decades of engineering enterprise software suites, digital public infrastructure, and sovereign cloud platforms for government, healthcare, telecom, and enterprise organizations.
          </p>
        </div>
      </section>

      <About />
      <PerformanceDashboard />
      <Features />
      <Certifications />
    </main>
  );
}

export function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    organization: "",
    email: "",
    domain: "Healthcare & Life Sciences",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim()) return;
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#fafbfc] text-[#172b4d]">
      <section className="border-b border-gray-200 bg-white pb-12 pt-14 sm:pb-14 sm:pt-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-4 flex items-center gap-2 text-xs font-medium text-gray-600">
            <Link to="/" className="transition-colors duration-200 hover:text-[#079fdf]">
              Home
            </Link>
            <span>/</span>
            <span className="font-semibold text-[#102b50]">Contact Us</span>
          </nav>

          <h1 className="font-display text-3xl font-bold tracking-tight text-[#102b50] sm:text-4xl lg:text-5xl">
            Contact Us
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-600">
            Corporate &amp; Regional Offices — connect with SRIT India Limited for sovereign infrastructure programs, enterprise solutions, investor disclosures, or careers.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:items-start lg:px-8">
          <div className="rounded-xl border border-gray-200 bg-white p-7 sm:p-8 lg:col-span-5">
            <h2 className="font-display text-xl font-bold tracking-tight text-[#102b50]">
              Registered Office
            </h2>

            <div className="mt-6 divide-y divide-gray-200 border-t border-gray-200 text-sm">
              <div className="py-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-600">
                  Corporate Headquarters
                </p>
                <address className="mt-1.5 not-italic leading-relaxed tabular-nums text-gray-600">
                  SRIT India Limited
                  <br />
                  SRIT House, #. 113/1B
                  <br />
                  ITPL Main Road, Brookefield
                  <br />
                  Bangalore – 560 037, Karnataka
                </address>
              </div>

              <div className="py-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-600">
                  Telephone &amp; Fax
                </p>
                <div className="mt-1.5 space-y-1 tabular-nums">
                  <p>
                    <a
                      href="tel:+918041951999"
                      className="font-medium text-[#102b50] transition-colors duration-200 hover:text-[#079fdf]"
                    >
                      +91 80 41951999
                    </a>
                  </p>
                  <p>
                    <a
                      href="tel:+919449799510"
                      className="font-medium text-[#102b50] transition-colors duration-200 hover:text-[#079fdf]"
                    >
                      +91 9449799510
                    </a>
                  </p>
                  <p className="text-gray-600">Fax: +91 80 41523300</p>
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-600">
                    General &amp; Enterprise Desk
                  </p>
                  <a
                    href="mailto:info@sritindia.com"
                    className="mt-1 inline-block font-medium text-[#079fdf] hover:underline"
                  >
                    info@sritindia.com
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-600">
                    Investor Compliance Desk
                  </p>
                  <a
                    href="mailto:compliance@sritindia.com"
                    className="mt-1 inline-block font-medium text-[#079fdf] hover:underline"
                  >
                    compliance@sritindia.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-7 sm:p-8 lg:col-span-7">
            <h2 className="font-display text-xl font-bold tracking-tight text-[#102b50]">
              Send an Inquiry
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">
              Share your requirements or partnership inquiry and our engineering or leadership office will respond.
            </p>

            {submitted ? (
              <div className="mt-6 rounded-lg border border-emerald-200 bg-emerald-50/70 p-6">
                <h3 className="font-display text-base font-bold text-emerald-900">
                  Inquiry Recorded
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-emerald-800">
                  Thank you, {formState.name}. Your message regarding {formState.domain} has been noted for our team.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({
                      name: "",
                      organization: "",
                      email: "",
                      domain: "Healthcare & Life Sciences",
                      message: "",
                    });
                  }}
                  className="mt-4 rounded-lg border border-emerald-300 bg-white px-4 py-2 text-xs font-semibold text-emerald-900 transition-colors duration-200 hover:bg-emerald-50"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-[#102b50]">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Full name"
                      className="mt-1.5 w-full rounded-lg border border-gray-200 bg-[#fafbfc] px-3.5 py-2.5 text-sm text-[#102b50] placeholder-gray-400 transition-colors duration-200 focus:border-[#079fdf] focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-org" className="block text-xs font-semibold text-[#102b50]">
                      Organization
                    </label>
                    <input
                      id="contact-org"
                      type="text"
                      value={formState.organization}
                      onChange={(e) => setFormState({ ...formState, organization: e.target.value })}
                      placeholder="Department, institution, or company"
                      className="mt-1.5 w-full rounded-lg border border-gray-200 bg-[#fafbfc] px-3.5 py-2.5 text-sm text-[#102b50] placeholder-gray-400 transition-colors duration-200 focus:border-[#079fdf] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-[#102b50]">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="name@organization.com"
                      className="mt-1.5 w-full rounded-lg border border-gray-200 bg-[#fafbfc] px-3.5 py-2.5 text-sm text-[#102b50] placeholder-gray-400 transition-colors duration-200 focus:border-[#079fdf] focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-domain" className="block text-xs font-semibold text-[#102b50]">
                      Domain
                    </label>
                    <select
                      id="contact-domain"
                      value={formState.domain}
                      onChange={(e) => setFormState({ ...formState, domain: e.target.value })}
                      className="mt-1.5 w-full rounded-lg border border-gray-200 bg-[#fafbfc] px-3.5 py-2.5 text-sm text-[#102b50] transition-colors duration-200 focus:border-[#079fdf] focus:bg-white focus:outline-none"
                    >
                      <option value="Healthcare & Life Sciences">Healthcare &amp; Life Sciences</option>
                      <option value="e-Governance & Urban Mobility">e-Governance &amp; Urban Mobility</option>
                      <option value="Telecom & Broadband Infrastructure">Telecom &amp; Broadband Infrastructure</option>
                      <option value="Cybersecurity & Sovereign Cloud">Cybersecurity &amp; Sovereign Cloud</option>
                      <option value="Investor & Statutory Disclosures">Investor &amp; Statutory Disclosures</option>
                      <option value="Careers & Engineering">Careers &amp; Engineering</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-[#102b50]">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Briefly describe your inquiry or project scope..."
                    className="mt-1.5 w-full rounded-lg border border-gray-200 bg-[#fafbfc] px-3.5 py-2.5 text-sm text-[#102b50] placeholder-gray-400 transition-colors duration-200 focus:border-[#079fdf] focus:bg-white focus:outline-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-[#102b50] px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#079fdf] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079fdf]"
                  >
                    Submit Inquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const f = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 grid h-11 w-11 cursor-pointer place-items-center rounded-lg border border-[#0688bd] bg-[#079fdf] text-white transition-colors duration-200 hover:bg-[#102b50]"
        >
          <ChevronRight className="h-5 w-5 -rotate-90" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
