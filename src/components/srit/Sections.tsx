import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Award,
  BookOpen,
  Check,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Globe,
  Hexagon,
  MessageCircle,
  Minus,
  Plus,
  Router,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  X,
} from "lucide-react";
import { FAQS, PLAN_TABS, TESTIMONIALS } from "./data";
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
    <section className="relative isolate overflow-hidden bg-[#050A1F] py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-[10%] h-[600px] w-[600px] rounded-full bg-[#079fdf]/40 blur-[130px]" />
        <div className="absolute top-0 right-[10%] h-[500px] w-[600px] rounded-full bg-indigo-500/30 blur-[130px]" />
        <div className="absolute -bottom-40 left-1/3 h-[400px] w-[500px] rounded-full bg-cyan-400/20 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-[1300px] grid-cols-1 gap-12 px-4 sm:grid-cols-3 sm:px-6 lg:gap-16 lg:px-8">
        {stats.map((item, index) => (
          <Reveal key={item.number} delay={index * 0.12}>
            <div className="flex h-full flex-col">
              <h3 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
                <span className="bg-gradient-to-r from-[#079fdf] via-cyan-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(7,159,223,0.5)]">
                  {item.number}
                </span>
              </h3>
              <p className="mt-5 max-w-[320px] text-base leading-7 text-slate-100 md:text-lg">
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
    <section className="relative overflow-hidden bg-network py-20">
      <img
        src={img("2024/08/about-1-bg.png")}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="relative mx-auto grid w-full max-w-[1300px] items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal x={-60} y={0} className="relative mx-auto w-full max-w-[540px] pb-12 pr-10">
          <div className="absolute -top-5 -left-20 z-20 rounded-xl bg-[#079fdf] px-5 py-3 font-display text-white shadow-lg">
            <div className="text-center text-sm">AI</div>
            <div className="text-xl font-bold">Powered</div>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img
              src={img("2026/03/watch-movie.jpg")}
              alt="Technology and digital services"
              className="aspect-[5/4] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="absolute -bottom-2 right-0 w-[42%] overflow-hidden rounded-2xl border-[6px] border-white shadow-xl">
            <img
              src={img("2026/03/26860.jpg")}
              alt="Digital technology"
              className="aspect-square w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal x={60} y={0}>
          <Eyebrow>About SRIT</Eyebrow>
          <Heading pre="Making IT work better" hl="with AI" className="mt-4" />

          <p className="mt-6 leading-relaxed text-muted-foreground">
            For over two decades, SRIT has been dedicated to achieving
            excellence in our ICT offerings, with a vision to leverage
            technology to transform entire industries. Our focus spans
            key sectors such as healthcare, eGovernance, telecom, and
            other areas involving large-scale operations.
          </p>

          <p className="mt-4 leading-relaxed text-muted-foreground">
            At SRIT, we harness the power of AI-driven solutions to
            automate business processes, improve decision-making,
            stabilize integrations with external systems, and streamline
            operations through the intelligent application of modern
            technologies.
          </p>

          <p className="mt-4 leading-relaxed text-muted-foreground">
            We are committed to driving innovation and delivering impactful
            solutions that not only meet but exceed industry standards.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-8">
            <button
              type="button"
              className="inline-flex h-16 items-center justify-center gap-5 rounded-lg bg-[#079fdf] px-9 text-lg font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#078bc4] hover:shadow-lg"
            >
              More About Us
              <ChevronRight className="h-7 w-7 stroke-[3px]" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Features() {
  const left = [
    {
      i: Cpu,
      k: "enterprise-ai",
      title: "Enterprise-Grade AI Engineering",
      desc: "We design and deploy secure AI platforms, intelligent automation, and scalable digital ecosystems that solve complex business challenges.",
    },
    {
      i: BookOpen,
      k: "domain-expertise",
      title: "Deep Domain Expertise",
      desc: "Extensive domain knowledge combined with advanced engineering and technology expertise.",
    },
    {
      i: ShieldCheck,
      k: "secure-future",
      title: "Secure & Future-Ready",
      desc: "From private AI deployments to enterprise knowledge platforms, our solutions are built for security, compliance, and long-term growth.",
    },
    {
      i: Award,
      k: "proven-engineering",
      title: "20+ Years of Proven Engineering Delivery",
      desc: "Two decades of expertise delivering reliable, enterprise-ready solutions.",
    },
  ];

  const right = [
    {
      i: Hexagon,
      k: "engineering-excellence",
      title: "Engineering Excellence",
      desc: "AI-driven engineering and technology capabilities built to solve complex organizational challenges.",
    },
    {
      i: Globe,
      k: "trusted-industries",
      title: "Trusted Across Industries",
      desc: "Delivering AI-powered solutions for government, healthcare, transportation, telecom, financial services, and enterprise organizations.",
    },
    {
      i: TrendingUp,
      k: "scale-confidence",
      title: "Scale with Confidence",
      desc: "Capabilities designed to support enterprise-scale transformation, growth and implementation.",
    },
    {
      i: Sparkles,
      k: "ai-first",
      title: "AI-First Approach",
      desc: "AI integrated across engineering, solutions, business transformation, and innovation effectively.",
    },
  ];

  const Item = ({ f, r }: { f: (typeof left)[0] | (typeof right)[0]; r?: boolean }) => (
    <div className={`group flex gap-6 border-b border-border py-4 lg:py-6 ${r ? "flex-row-reverse" : ""}`}>
      <span className="grid h-[72px] w-[72px] shrink-0 place-items-center rounded-full bg-secondary text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
        <f.i className="h-8 w-8" />
      </span>
      <div className={`min-w-0 flex-1 ${r ? "text-right" : "text-left"}`}>
        <h4 className="font-display text-xl font-semibold text-ink">{f.title}</h4>
        <p className="mt-2 leading-7 text-muted-foreground">{f.desc}</p>
      </div>
    </div>
  );

  return (
    <section className="relative overflow-hidden py-12">
      <img
        src={img("bg feature.png")}
        alt=""
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-center opacity-70"
      />
      <div className="relative z-10 mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <motion.div
          animate={{ y: [0, -12, 0], scale: [1, 1.02, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="text-center"
        >
          <Eyebrow center both>AI-Driven</Eyebrow>
          <Heading pre="Our Special" hl="AI Features" className="mt-4" />
        </motion.div>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1fr_440px_1fr] lg:gap-12">
          <div>
            {left.map((f, n) => (
              <Reveal key={f.k} delay={n * 0.12} x={-40} y={0}>
                <Item f={f} />
              </Reveal>
            ))}
          </div>

          <div className="hidden lg:flex justify-center">
            <Reveal className="relative mx-auto w-full flex justify-center">
              <img src={img("ai-feature.png")} alt="AI Feature" className="relative w-[440px] rounded-3xl object-cover opacity-60" />
            </Reveal>
          </div>

          <div>
            {right.map((f, n) => (
              <Reveal key={f.k} delay={n * 0.12} x={40} y={0}>
                <Item f={f} r />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Entertainment() {
  return (
    <section id="entertainment" className="scroll-mt-24 bg-secondary py-20">
      <div className="mx-auto grid w-full max-w-[1300px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal x={-50} y={0}>
          <h3 className="font-display text-4xl font-bold text-ink md:text-5xl">
            Telecom & <span className="text-primary">Broadband</span>
          </h3>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            As a managed service provider for telecom networks & high-speed broadband networks, we provide software and services for managing Networks, Subscribers & Partners, Revenue Cycles, Operations, Customer Service and more, managing millions of subscribers across our projects.
          </p>
        </Reveal>
        <Reveal x={50} y={0}>
          <img src={img("telecom.jpg")} alt="Telecom & Broadband" className="w-full rounded-3xl shadow-soft" />
        </Reveal>
      </div>
    </section>
  );
}

export function CyberSecurity() {
  return (
    <section id="cyber-security" className="scroll-mt-24 bg-secondary py-20">
      <div className="mx-auto grid w-full max-w-[1300px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal x={-50} y={0}>
          <img src={img("cyber.jpg")} alt="Cyber Security" className="w-full rounded-3xl shadow-soft" />
        </Reveal>
        <Reveal x={50} y={0}>
          <h3 className="font-display text-4xl font-bold text-ink md:text-5xl">
            Cyber <span className="text-primary">Security</span>
          </h3>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Cybercrime is ever more prevalent, and in 2024 it's estimated to create losses amounting to $6 trillion. Business organizations and government agencies need to have a proactive approach for safeguarding from cyber threats. SRIT's Cyber Security Practice team helps you develop a strategy to staying ahead of threats and recover quickly from any that might succeed. We help establish cyber resiliency and implementing a cybersecurity strategy aligned with your priorities
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function PartnerAndPlans() {
  const [tab, setTab] = useState(0);

  return (
    <section id="e-governance" className="scroll-mt-24 relative overflow-hidden py-20">
      <div className="absolute inset-0 mx-2 overflow-hidden rounded-[40px] md:mx-5">
        <img src={img("e-gov.jpg")} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#071B49]/85" />
      </div>

      <div className="relative mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <Eyebrow center both>Our Solutions</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl">
            E-Governance
          </h2>
        </Reveal>

        <div className="mt-12 flex gap-8 overflow-x-auto border-y border-white/15 py-5 md:justify-between">
          {PLAN_TABS.map((item, index) => (
            <button
              key={item.label}
              type="button"
              onClick={() => setTab(index)}
              className={`relative shrink-0 pb-5 font-display text-lg font-bold uppercase transition-colors duration-300 md:text-xl ${
                tab === index ? "text-white" : "text-white/40 hover:text-white/80"
              }`}
            >
              {item.label}
              {tab === index && (
                <motion.span
                  layoutId="tabline"
                  className="absolute bottom-0 left-0 h-[3px] w-full bg-[#16bafa]"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="mx-auto mt-16 max-w-4xl px-6 pb-12"
          >
            {(PLAN_TABS[tab]?.plans ?? []).map((p) => (
              <p key={p.name} className="text-base leading-8 text-gray-300 md:text-lg">
                {p.description}
              </p>
            ))}

            {PLAN_TABS[tab]?.label === "Litigation Management Software" && (
              <a href="/litigation-management" className="mt-6 inline-flex items-center gap-2 font-semibold text-[#16bafa] transition hover:text-white">
                Learn More
                <ChevronRight className="h-5 w-5" />
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
    <section className="relative overflow-hidden bg-muted">
      <div className="mx-auto grid w-full max-w-[1300px] items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <Reveal x={-50} y={0}>
          <div className="w-full rounded-3xl bg-card px-8 py-12 text-left shadow-soft sm:px-12 lg:px-14">
            <p className="font-display font-semibold text-primary">Investor Relations</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight text-ink-blue md:text-4xl">
              Explore Investment Opportunities with SRIT
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground md:text-lg">
              Access important investor information, corporate governance
              details, company policies, annual reports, and IPO documents.
            </p>

            <select
              value={selectedPage}
              onChange={(e) => setSelectedPage(e.target.value)}
              className="mt-8 block w-full rounded-xl border-2 border-border bg-card px-5 py-4 text-ink outline-none transition focus:border-primary"
            >
              <option value="">Select Investor Information</option>
              {investorLinks.map((item) => (
                <option key={item.href} value={item.href}>
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
              className="mt-5 rounded-lg bg-gradient-to-r from-primary to-ink-blue px-10 py-4 font-display font-semibold text-primary-foreground transition hover:-translate-y-1 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Apply →
            </button>
          </div>
        </Reveal>

        <Reveal x={50} y={0} className="hidden self-end lg:block">
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
    <section className="relative overflow-hidden bg-[#f8f7f3] py-8 md:py-10">
      <img
        src={img("icarkno-bg.png")}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
      />

      <div className="relative mx-auto grid w-full max-w-[1300px] items-center gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:px-8">
        <Reveal x={-40} y={0}>
          <div className="flex items-center gap-3">
            <span className="h-3 w-8 rounded-full bg-primary" />
            <span className="font-display text-sm font-bold uppercase tracking-wide text-primary">
              Our Testimonials
            </span>
          </div>

          <h2 className="font-display text-4xl font-bold leading-tight text-[#142B50] md:text-6xl">
            <span className="whitespace-nowrap">
              What People <span className="text-[#079fdf]">Talked</span>
            </span>
            <br />
            About Us
          </h2>

          <p className="mt-7 max-w-lg text-base leading-8 text-muted-foreground md:text-lg">
            Hear from our clients and partners about their experience with SRIT and our commitment to excellence.
          </p>

          <div className="mt-9 flex gap-4">
            <button
              type="button"
              onClick={previousReview}
              aria-label="Previous testimonial"
              className="grid h-14 w-14 place-items-center rounded-full border border-border bg-white text-primary shadow-sm transition hover:border-[#0ea5e9] hover:bg-[#0ea5e9] hover:text-white"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={nextReview}
              aria-label="Next testimonial"
              className="grid h-14 w-14 place-items-center rounded-full border border-border bg-white text-primary shadow-sm transition hover:border-[#0ea5e9] hover:bg-[#0ea5e9] hover:text-white"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <p className="mt-5 text-sm text-muted-foreground">
            Review {i + 1} of {TESTIMONIALS.length}
          </p>
        </Reveal>

        <div className="relative min-w-0">
          <div className="overflow-hidden rounded-[30px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.article
                key={i}
                initial={{ opacity: 0, x: 70 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -70 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="relative min-h-[280px] overflow-hidden rounded-[30px] [clip-path:polygon(0_0,100%_0,100%_88%,92%_100%,0_100%)] border border-[#E7E3DA] bg-white shadow-sm md:min-h-[320px]"
              >
                <div className="p-6 pb-5 md:p-8 md:pb-5">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-[#0ea5e9] text-[#0ea5e9]" />
                    ))}
                  </div>
                  <div className="mt-5 min-h-[90px]">
                    <p className="max-h-[110px] overflow-y-auto whitespace-pre-wrap break-words pr-3 text-base leading-7 text-[#172B4D] [scrollbar-width:thin] md:text-lg">
                      "{review.q}"
                    </p>
                  </div>
                </div>

                <div
                  className="relative mt-0 flex min-h-[120px] w-[88%] items-center gap-4 bg-[#E7E3DA] px-5 py-4 md:min-h-[130px] md:w-[75%] md:gap-5 md:px-8"
                  style={{ clipPath: "polygon(0 0, 100% 0, 88% 100%, 0 100%)" }}
                >
                  <div className="min-w-0">
                    <h3 className="font-display text-base font-bold uppercase text-[#172B4D] md:text-xl">
                      {review.n}
                    </h3>
                    <p className="mt-2 text-sm uppercase text-[#64748B] md:text-base">
                      {review.r}
                    </p>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {TESTIMONIALS.map((item, index) => (
              <button
                key={item.n + index}
                type="button"
                onClick={() => setI(index)}
                aria-label={`Page ${index + 1}`}
                aria-current={i === index ? "true" : undefined}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-primary" : "w-2.5 bg-gray-300 hover:bg-primary/60"
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
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 flex h-[440px] w-[340px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between bg-[#079fdf] px-4 py-3 text-white">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                <span className="font-display text-sm font-semibold">SRIT AI Assistant</span>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="rounded-full p-1 transition hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto bg-slate-50 p-4 text-sm">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`max-w-[85%] rounded-xl px-3 py-2 leading-relaxed ${
                    m.role === "user" ? "ml-auto bg-[#079fdf] text-white" : "bg-white text-slate-700 shadow-sm"
                  }`}
                >
                  {m.text}
                </div>
              ))}
            </div>

            <form onSubmit={send} className="flex items-center gap-2 border-t border-slate-200 bg-white p-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-[#079fdf]"
              />
              <button
                type="submit"
                className="grid h-9 w-9 place-items-center rounded-lg bg-[#079fdf] text-white transition hover:bg-[#078bc4]"
                aria-label="Send message"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2">
        {!open && (
          <motion.span
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.4 }}
            className="rounded-full bg-[#142B50] px-3 py-1 text-[11px] font-semibold tracking-wide text-white shadow-md"
          >
            AI Chat
          </motion.span>
        )}

        <motion.button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close AI chat" : "Open AI chat"}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="grid h-14 w-14 place-items-center rounded-full bg-[#079fdf] text-white shadow-lg shadow-[#079fdf]/40 transition hover:bg-[#078bc4]"
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <X className="h-6 w-6" />
              </motion.span>
            ) : (
              <motion.span key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <MessageCircle className="h-6 w-6" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
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
    <section className="relative overflow-hidden bg-[#0a1128] py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/4 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#079fdf]/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-indigo-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Explore insights, success stories, and updates shared by our growing partner network.</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl">
              Latest <span className="text-[#079fdf]">Case Studies</span>
            </h2>
          </div>
          <BtnLink href="#" className="bg-white/10 text-white hover:bg-white/20 border-none">
            View All
          </BtnLink>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
            className="grid gap-6 md:grid-cols-3"
          >
            {caseStudies.map((blog, index) => (
              <article
                key={index}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-white p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#079fdf]/20"
              >
                <div>
                  <span className="inline-block rounded-md bg-[#142B50] px-3 py-1.5 text-xs font-bold tracking-wide text-white">
                    Case Study
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-bold leading-tight text-[#142B50]">
                    {blog.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-500">{blog.desc}</p>
                </div>

                <div className="mt-8 flex justify-end">
                  <a
                    href="#"
                    className="group/btn inline-flex items-center gap-2 rounded-md bg-[#1a1a1a] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-black"
                  >
                    I'm Curious
                    <svg className="h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 flex items-center justify-center gap-3">
          <button onClick={prevSlide} className="grid h-10 w-10 place-items-center rounded-md bg-[#1e293b] text-white transition-colors hover:bg-[#079fdf]" aria-label="Previous">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-1.5 px-2 font-display text-xl font-bold text-white">
            <span>{currentIndex}</span>
            <span className="text-slate-500">/</span>
            <span className="text-slate-400">{totalPages}</span>
          </div>
          <button onClick={nextSlide} className="grid h-10 w-10 place-items-center rounded-md bg-[#1e293b] text-white transition-colors hover:bg-[#079fdf]" aria-label="Next">
            <ChevronRight className="h-5 w-5" />
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

      <section className="relative flex h-[140px] w-full items-center overflow-hidden border-y border-gray-100 bg-white">
        <div className="flex w-max animate-marquee items-center gap-3">
          {marqueeLogos.map((logo, index) => (
            <div key={`${logo}-${index}`} className="flex w-[140px] sm:w-[170px] md:w-[200px] shrink-0 items-center justify-center">
              <img src={img(logo)} alt={`SRIT client ${index + 1}`} className="h-20 w-auto object-contain transition-transform duration-500 hover:scale-110" />
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
    <section className="border-y border-slate-100 bg-[#f8fafc] py-6">
      <div className="mx-auto w-full max-w-[1700px] px-4 sm:px-6 lg:px-8">
        <div className="flex w-full flex-nowrap items-center gap-4 overflow-x-auto pb-2 sm:gap-6 lg:justify-between lg:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {certifications.map((cert) => (
            <div key={cert} className="shrink-0">
              <div className="group flex items-center gap-2.5 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm transition-all duration-300 hover:border-[#079fdf] hover:shadow-md">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#eaf7fc] text-[#079fdf] transition-colors duration-300 group-hover:bg-[#079fdf] group-hover:text-white">
                  <ShieldCheck className="h-3.5 w-3.5" />
                </div>
                <span className="whitespace-nowrap text-xs font-bold text-[#142B50] sm:text-sm">
                  {cert}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const solutions = [
    { label: "Healthcare", href: "#healthcare" },
    { label: "e-Governance", href: "#e-governance" },
    { label: "Telecom & Broadband", href: "#entertainment" },
    { label: "Cyber Security", href: "#cyber-security" },
    { label: "Insurance", href: "#" },
    { label: "Brochures", href: "#" },
  ];

  const projects = [
    { label: "Projects & Wins", href: "#" },
    { label: "Clients", href: "#" },
  ];

  const aboutLinks = [
    { label: "Company", href: "#" },
    { label: "Management", href: "#" },
    { label: "Recognition", href: "#" },
    { label: "Invest/Partner", href: "#" },
  ];

  const socialLinks = [
    {
      label: "Facebook",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
          <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8h3.4Z" />
        </svg>
      ),
      href: "#",
    },
    {
      label: "Instagram",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
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
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
          <path d="M5 3.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3.2 9h3.6v12H3.2V9Zm5.8 0h3.4v1.6h.1A3.8 3.8 0 0 1 16 8.7c3.6 0 4.3 2.3 4.3 5.2V21h-3.6v-6.3c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3V21H9V9Z" />
        </svg>
      ),
      href: "#",
    },
    {
      label: "X",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
          <path d="M18.9 3H22l-6.8 7.8L23.2 21h-6.3l-4.9-6.4L6.4 21H3.2l7.3-8.4L2.8 3h6.5l4.4 5.9L18.9 3Zm-1.1 16h1.7L8.3 4.9H6.5L17.8 19Z" />
        </svg>
      ),
      href: "#",
    },
  ];

  const FooterHeading = ({ children }: { children: React.ReactNode }) => (
    <h3 className="mb-8 inline-block border-b-2 border-destructive pb-2 font-display text-xl font-semibold tracking-tight text-primary-foreground">
      {children}
    </h3>
  );

  const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href} className="block text-[17px] font-semibold leading-[2.2] text-primary-foreground/85 transition-colors duration-300 hover:text-primary">
      {children}
    </a>
  );

  return (
    <footer className="bg-hero text-primary-foreground/85">
      <div className="mx-auto grid w-full max-w-[1620px] grid-cols-1 gap-10 px-6 py-14 sm:px-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:px-10 lg:py-20">
        <div>
          <h4 className="mb-6 inline-block border-b-2 border-destructive pb-2 font-display text-xl font-semibold text-primary-foreground">
            Registered Office
          </h4>
          <address className="not-italic text-[17px] leading-[1.8] text-primary-foreground/85">
            SRIT House, #. 113/1B
            <br />
            ITPL Main Road, Brookefield
            <br />
            Bangalore – 560 037
            <br />
            Karnataka
            <br />
            <a href="mailto:info@sritindia.com" className="text-primary transition hover:text-primary-foreground">
              info@sritindia.com
            </a>
            <br />
            Phone:
            <br />
            <a href="tel:+918041951999" className="text-primary-foreground/85 transition hover:text-primary">
              +91 80 41951999
            </a>
            <br />
            <a href="tel:+919449799510" className="text-primary-foreground/85 transition hover:text-primary">
              +91 9449799510
            </a>
            <br />
            Fax: +91 80 41523300
          </address>
        </div>

        <div>
          <FooterHeading>Solutions</FooterHeading>
          <div>
            {solutions.map((item) => (
              <FooterLink key={item.label} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </div>
        </div>

        <div>
          <FooterHeading>Projects</FooterHeading>
          <div>
            {projects.map((item) => (
              <FooterLink key={item.label} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </div>
          <div className="mt-6 space-y-4">
            <a href="#" className="block text-xl font-medium text-primary-foreground/85 transition hover:text-primary">
              Media
            </a>
            <a href="#" className="block text-xl font-medium text-primary-foreground/85 transition hover:text-primary">
              Contact Us
            </a>
          </div>
        </div>

        <div>
          <FooterHeading>About Us</FooterHeading>
          <div>
            {aboutLinks.map((item) => (
              <FooterLink key={item.label} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </div>
          <h4 className="block text-xl font-medium text-primary-foreground/85 transition hover:text-primary">
            Follow Us
          </h4>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="grid h-[54px] w-[54px] place-items-center rounded-xl bg-white text-primary shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1620px] px-6 pb-10 sm:px-10 lg:px-10">
        <p className="text-base font-semibold text-[#a5a9b1]">
          SRIT INDIA © 2026 - All Rights Reserved
        </p>
      </div>
    </footer>
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg"
        >
          <ChevronRight className="h-5 w-5 -rotate-90" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}