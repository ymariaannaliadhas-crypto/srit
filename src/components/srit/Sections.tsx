
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Award,
  Bell,
  BookOpen,
  Check,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
  Gamepad2,
  Globe,
  GraduationCap,
  Hexagon,
  MessageCircle,
  Minus,
  Newspaper,
  PhoneCall,
  Play,
  Plus,
  Puzzle,
  Router,
  ShoppingCart,
  Signal,
  Store,
  Train,
  Trophy,
  User,
  Users,
  Wifi,
  Star,
  X,
} from "lucide-react";
import { BLOGS, FAQS, LINKS, PLAN_TABS, STATES, TESTIMONIALS } from "./data";
import { img } from "./assets";
import { BtnLink, Eyebrow, Heading, Reveal } from "./ui";

export function PerformanceDashboard() {
  const stats = [
    {
      number: "2000+",
      description: "Hospitals & OPD clinics in 20+ countries",
    },
    {
      number: "300 million+",
      description: "EMR experiences to date",
    },
    {
      number: "200,000+",
      description:
        "Active Users across HIS, EMR, PACS, ERP, Portal and Mobile App",
    },
  ];

  return (
    <section className="relative isolate mt-10 overflow-hidden bg-hero py-20 md:mt-14 md:py-24">
      {/* Blue and cyan background waves */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[230px] overflow-hidden">
        <div className="absolute -top-40 left-[15%] h-[300px] w-[75%] rotate-[12deg] rounded-[50%] border-t border-primary/50 blur-[1px]" />

        <div className="absolute -top-44 left-[10%] h-[330px] w-[85%] rotate-[12deg] rounded-[50%] border-t border-primary/40" />

        <div className="absolute -top-48 left-[5%] h-[360px] w-[95%] rotate-[12deg] rounded-[50%] border-t border-cyan-400/30" />

        <div className="absolute -top-36 left-[20%] h-[280px] w-[70%] rotate-[12deg] rounded-[50%] border-t border-primary/30 blur-sm" />

        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto grid w-full max-w-[1300px] grid-cols-1 gap-12 px-4 sm:grid-cols-3 sm:px-6 lg:gap-16 lg:px-8">
        {stats.map((item, index) => (
          <Reveal key={item.number} delay={index * 0.12}>
            <div className="flex h-full flex-col">
              <h3 className="font-display text-4xl font-bold tracking-tight text-primary md:text-5xl">
                {item.number}
              </h3>

              <p className="mt-5 max-w-[320px] text-base leading-7 text-primary-foreground/90 md:text-lg">
                {item.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function PortalCards() {
  const [showSubscriber, setShowSubscriber] = useState(false);
  const [subscriberState, setSubscriberState] = useState("");

const items = [
  { t: "Healthcare", img: img("healthcare.webp"), h: "#healthcare" },
  { t: "E-Governance", img: img("E-Governance.webp"), h: "#e-governance" },
  { t: "Telecom & Broadband", img: img("telecom.jpg"), h: "#telecom" },
  { t: "Cyber Security", img: img("cybersecurity.jpeg"), h: "#cyber-security" },
];

  const subscriberStateLinks: Record<string, string> = {
    "Andhra Pradesh": "https://ap.railwire.co.in/",
    Assam: "https://as.railwire.co.in/",
    Bihar: "https://bh.railwire.co.in/",
    Chhattisgarh: "https://ch.railwire.co.in/",
    Delhi: "https://dl.railwire.co.in/",
    Gujarat: "https://gj.railwire.co.in/",
    Haryana: "https://hr.railwire.co.in/",
    "Himachal Pradesh": "https://hp.railwire.co.in/",
    "Jammu & Kashmir": "https://jk.railwire.co.in/",
    Jharkhand: "https://jh.railwire.co.in/",
    Karnataka: "https://ka.railwire.co.in/",
    Kerala: "https://kl.railwire.co.in/",
    "Madhya Pradesh": "https://mp.railwire.co.in/",
    "Maharashtra & Goa": "https://mh.railwire.co.in/",
    "Mizoram, Meghalaya & Tripura": "https://ne1.railwire.co.in/",
    "Manipur, Nagaland & Arunachal Pradesh": "https://ne2.railwire.co.in/",
    Odisha: "https://od.railwire.co.in/",
    Punjab: "https://pb.railwire.co.in/",
    Rajasthan: "https://rj.railwire.co.in/",
    "Tamil Nadu": "https://tn.railwire.co.in/",
    Telangana: "https://ts.railwire.co.in/",
    "UP East": "https://upeast.railwire.co.in/",
    "UP West": "https://up.railwire.co.in/",
    "West Bengal": "https://wb.railwire.co.in/",
  };

  return (
    <>
      <section className="mx-auto w-full max-w-[1300px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {items.map((it, n) => (
            <Reveal key={it.t} delay={n * 0.1}>
              {it.t === "Subscribers" ? (
                <button
                  type="button"
                  onClick={() => {
                    setShowSubscriber(true);
                    setSubscriberState("");
                  }}
                  className="group block w-full overflow-hidden rounded-2xl bg-card text-center shadow-soft"
                >
                  <div className="overflow-hidden">
                    <img
                      src={it.img}
                      alt={it.t}
                      className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="py-4 font-display text-xl font-semibold text-ink group-hover:text-primary">
                    Subscriber
                  </h3>
                </button>
              ) : (
                <a
                  href={it.h}
                  className="group block overflow-hidden rounded-2xl bg-card text-center shadow-soft"
                >
                  <div className="overflow-hidden">
                    <img
                      src={it.img}
                      alt={it.t}
                      className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="py-4 font-display text-xl font-semibold text-ink group-hover:text-primary">
                    {it.t}
                  </h3>
                </a>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      {showSubscriber && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 px-4">
          <div className="relative w-full max-w-2xl rounded-lg bg-white px-8 py-6 shadow-2xl">
            <button
              type="button"
              onClick={() => {
                setShowSubscriber(false);
                setSubscriberState("");
              }}
              className="absolute right-4 top-4 rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-black"
              aria-label="Close subscriber modal"
            >
              <X className="h-6 w-6" />
            </button>

            <h3 className="mb-4 text-lg font-medium text-gray-800">
              Select Your State
            </h3>

            <select
              value={subscriberState}
              onChange={(e) => setSubscriberState(e.target.value)}
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-700 outline-none focus:border-[#1db8fa] focus:ring-1 focus:ring-[#1db8fa]"
            >
              <option value="">Choose Your State</option>
              {STATES.filter((state) => state !== "Lakshadweep").map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>

            <button
              type="button"
              disabled={!subscriberState}
              onClick={() => {
                const redirectUrl = subscriberStateLinks[subscriberState];

                if (redirectUrl) {
                  window.location.href = redirectUrl;
                } else {
                  alert(
                    `The subscriber portal link for ${subscriberState} has not been added yet.`,
                  );
                }
              }}
              className="mt-4 w-full rounded-md bg-[#1db8fa] py-3 font-semibold text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </>
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
<Reveal
  x={-60}
  y={0}
  className="relative mx-auto w-full max-w-[540px] pb-12 pr-10"
>
  {/* AI Powered badge */}
  <div className="absolute -top-5 -left-20 z-20 rounded-xl bg-[#079fdf] px-5 py-3 font-display text-white shadow-lg">
    <div className="text-center text-sm">AI</div>
    <div className="text-xl font-bold">Powered</div>
  </div>

  {/* Main image */}
  <div className="overflow-hidden rounded-3xl shadow-xl">
    <img
      src={img("2026/03/watch-movie.jpg")}
      alt="Technology and digital services"
      className="aspect-[5/4] w-full object-cover transition-transform duration-700 hover:scale-105"
    />
  </div>

  {/* Second image */}
  <div className="absolute -bottom-2 right-0 w-[42%] overflow-hidden rounded-2xl border-[6px] border-white shadow-xl">
    <img
      src={img("2026/03/26860.jpg")}
      alt="Digital technology"
      className="aspect-square w-full object-cover"
    />
  </div>
</Reveal>
        <Reveal x={60} y={0}>
<Eyebrow>About Our Company</Eyebrow>

<Heading
  pre="Making IT work better"
  hl="with AI"
  className="mt-4"
/>

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

{/*export function Features() {
  const left = [
    {
      i: Award,
      k: "navratna",
      title: "Navratna PSU Status",
      desc: "Backed by RailTel, a prestigious Navratna Public Sector Enterprise under the Government of India.",
    },
    {
      i: Train,
      k: "ministry",
      title: "Ministry Of Railways",
      desc: "Operating under the Ministry of Railways with a commitment to nationwide digital connectivity",
    },
    {
      i: Users,
      k: "millions",
      title: "Millions Of Subscribers",
      desc: "Serving a rapidly growing customer base with reliable and high-speed broadband services",
    },
  ];

  const right = [
    {
      i: Globe,
      k: "pan",
      title: "PAN-India Coverage",
      desc: "Connecting thousands of towns and villages through an extensive optical fibre network.",
    },
    {
      i: Router,
      k: "reliable",
      title: "Reliable Network Performance",
      desc: "Delivering stable connectivity with high network availability and dependable service quality.",
    },
    {
      i: Wifi,
      k: "rural",
      title: "Rural Digital Empowerment",
      desc: "Bridging the digital divide by bringing affordable broadband to rural and underserved communities.",
    },
  ];

  const Item = ({
    f,
    r,
  }: {
    f: (typeof left)[0] | (typeof right)[0];
    r?: boolean;
  }) => (
    <div
      className={`group flex gap-6 border-b border-border py-8 ${r ? "flex-row-reverse text-right" : ""}`}
    >
      <span className="grid h-[72px] w-[72px] shrink-0 place-items-center rounded-full bg-secondary text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
        <f.i className="h-8 w-8" />
      </span>
      <div>
        <h4 className="font-display text-xl font-semibold text-ink">
          {f.title}
        </h4>
        <p className="mt-2 leading-7 text-muted-foreground">{f.desc}</p>
      </div>
    </div>
  );

  return (
    <section className="relative overflow-hidden py-20">
      <img
        src={img("2025/04/feature-bg.png")}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="relative mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <Eyebrow center both>Why Choose RailWire?</Eyebrow>
          <Heading pre="Our Special" hl="Features" className="mt-4" />
        </Reveal>
        <div className="mt-12 grid items-end gap-8 lg:grid-cols-[1fr_360px_1fr]">
          <div>
            {left.map((f, n) => (
              <Reveal key={f.k} delay={n * 0.12} x={-40} y={0}>
                <Item f={f} />
              </Reveal>
            ))}
          </div>
          <Reveal className="relative mx-auto">
            <img
              src={img("2025/04/feature-1-shape-1.png")}
              alt=""
              className="absolute bottom-0 left-1/2 w-full -translate-x-1/2"
            />
            <img
              src={img("2026/03/social-image.png")}
              alt="Happy RailWire user"
              className="relative w-[360px]"
            />
          </Reveal>
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
}*/}

export function Entertainment() {
  return (
    <section
  id="telecom"
  className="scroll-mt-24 bg-secondary py-20"
>
      <div className="mx-auto grid w-full max-w-[1300px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal x={-50} y={0}>
          <h3 className="font-display text-4xl font-bold text-ink md:text-5xl">
            Telecom &{" "}
            <span className="text-primary">Broadband</span>
          </h3>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            As a managed service provider for telecom networks & high-speed broadband networks, we provide software and services for managing Networks, Subscribers & Partners, Revenue Cycles, Operations, Customer Service and more, managing millions of subscribers across our projects.
          </p>
        </Reveal>
        <Reveal x={50} y={0}>
          <img
            src={img(
              "telecom.jpg",
            )}
            alt="OTT entertainment"
            className="w-full rounded-3xl shadow-soft"
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
  className="scroll-mt-24 bg-secondary py-20"
>
      <div className="mx-auto grid w-full max-w-[1300px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">

        {/* Left side - Image */}
        <Reveal x={-50} y={0}>
          <img
            src={img("cyber.jpg")}
            alt="Cyber Security"
            className="w-full rounded-3xl shadow-soft"
          />
        </Reveal>

        {/* Right side - Content */}
        <Reveal x={50} y={0}>
          <h3 className="font-display text-4xl font-bold text-ink md:text-5xl">
            Cyber <span className="text-primary">Security</span>
          </h3>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
Cybercrime is ever more prevalent, and in 2024 it’s estimated to create losses amounting to $6 trillion. Business organizations and government agencies need to have a proactive approach for safeguarding from cyber threats. SRIT’s Cyber Security Practice team helps you develop a strategy to staying ahead of threats and recover quickly from any that might succeed. We help establish cyber resiliency and implementing a cybersecurity strategy aligned with your priorities
          </p>
        </Reveal>

      </div>
    </section>
  );
}


export function PartnerAndPlans() {
  const [tab, setTab] = useState(0);

  return (
    <section
  id="e-governance"
  className="scroll-mt-24 relative overflow-hidden py-20"
>
{/* E-Governance background image */}
<div className="absolute inset-0 mx-2 overflow-hidden rounded-[40px] md:mx-5">
  <img
    src={img("e-gov.jpg")}
    alt=""
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* Dark blue overlay */}
  <div className="absolute inset-0 bg-[#071B49]/85" />
</div>

      <div className="relative mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <Reveal className="text-center">
          <Eyebrow center both>Our Solutions</Eyebrow>

          <h2 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl">
            E-Governance
          </h2>
        </Reveal>

        {/* Product Tabs */}
        <div className="mt-12 flex gap-8 overflow-x-auto border-y border-white/15 py-5 md:justify-between">
          {PLAN_TABS.map((item, index) => (
            <button
              key={item.label}
              type="button"
              onClick={() => setTab(index)}
              className={`relative shrink-0 pb-5 font-display text-lg font-bold uppercase transition-colors duration-300 md:text-xl ${
                tab === index
                  ? "text-white"
                  : "text-white/40 hover:text-white/80"
              }`}
            >
              {item.label}

              {tab === index && (
                <motion.span
                  layoutId="tabline"
                  className="absolute bottom-0 left-0 h-[3px] w-full bg-[#16bafa]"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                  }}
                />
              )}
            </button>
          ))}
        </div>

{/* Selected Product Description */}
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
      <p
        key={p.name}
        className="text-base leading-8 text-gray-300 md:text-lg"
      >
        {p.description}
      </p>
    ))}

    {PLAN_TABS[tab]?.label === "Litigation Management Software" && (
      <a
        href="/litigation-management"
        className="mt-6 inline-flex items-center gap-2 font-semibold text-[#16bafa] transition hover:text-white"
      >
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
    {
      label: "Corporate Governance",
      href: "",
    },
    {
      label: "Codes & Policies",
      href: "",
    },
    {
      label: "Investors Information",
      href: "",
    },
    {
      label: "Annual Report",
      href: "",
    },
    {
      label: "IPO Documents",
      href:"#"
    },
  ];

  return (
    <section className="relative overflow-hidden bg-muted">
      <div className="mx-auto grid w-full max-w-[1300px] items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">

        {/* Investor Relations Content */}
        <Reveal x={-50} y={0}>
          <div className="w-full rounded-3xl bg-card px-8 py-12 text-left shadow-soft sm:px-12 lg:px-14">

            <p className="font-display font-semibold text-primary">
              Investor Relations
            </p>

            <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight text-ink-blue md:text-4xl">
              Explore Investment Opportunities with SRIT
            </h2>

            <p className="mt-6 text-base leading-8 text-muted-foreground md:text-lg">
              Access important investor information, corporate governance
              details, company policies, annual reports, and IPO documents.
            </p>

            {/* Investor Information Dropdown */}
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

        {/* Investor Image */}
        <Reveal x={50} y={0} className="hidden self-end lg:block">
          <img
            src={img("2026/05/2019-Picsart-BackgroundRemover-e1778829369912.png")}
            alt="Investor Relations"
            className="w-full object-contain"
          />
        </Reveal>

      </div>
    </section>
  );
}


{/*export function Achievers() {
  return (
    <section id="achiever" className="relative overflow-hidden bg-cosmic py-24">
      <svg
        className="pointer-events-none absolute bottom-0 left-0 h-48 w-full text-primary/40"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
      >
        {Array.from({ length: 14 }).map((_, n) => (
          <path
            key={n}
            d={`M0 ${120 + n * 4} C 360 ${20 + n * 8}, 1080 ${200 - n * 6}, 1440 ${60 + n * 6}`}
            stroke="currentColor"
            fill="none"
            strokeWidth="1"
          />
        ))}
      </svg>
      <div className="relative mx-auto grid w-full max-w-[1300px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <Eyebrow>Our Achievers</Eyebrow>
          <h3 className="mt-4 font-display text-5xl font-bold leading-tight text-primary-foreground/80">
            Achievers of the Month
          </h3>
          <p className="mt-6 max-w-md leading-7 text-primary-foreground/90">
            Recognizing outstanding performance across our network.
            Celebrating partners who go the extra mile to connect communities.
          </p>
          <div className="mt-8">
            <BtnLink href="/achievers">View All Achievers</BtnLink>
          </div>
        </Reveal>
        <Reveal x={60} y={0} className="lg:justify-self-end">
          <div className="w-[370px] max-w-full rounded-xl border-4 border-primary bg-card pb-10 text-center">
            <h4 className="flex items-center gap-3 rounded-br-xl bg-primary px-4 py-3 text-2xl font-medium text-primary-foreground md:mr-12">
              <Trophy className="h-7 w-7 text-accent-gold" /> Achiever of the
              Month
            </h4>
            <img
              src={img("2026/03/review-3-e1774512974456-150x150.jpg")}
              alt="Rajesh Kumar"
              className="mx-auto mt-3 h-36 w-36 border border-ink object-cover"
            />
            <h3 className="mt-5 text-3xl font-bold text-ink-blue">
              Rajesh Kumar
            </h3>
            <p className="font-medium text-ink">ANP – Mumbai</p>
            <hr className="mx-10 my-3 border-ink/50" />
            <p className="px-8 text-muted-foreground">
              Connected 150+ new customers and delivered exceptional service
              this month.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}*/}

export function Testimonials() {
  const [i, setI] = useState(0);

  const nextReview = () => {
    setI((current) => (current + 1) % TESTIMONIALS.length);
  };

  const previousReview = () => {
    setI((current) => (current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    if (TESTIMONIALS.length <= 1) return;

    const timer = setInterval(() => {
      setI((current) => (current + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  if (TESTIMONIALS.length === 0) return null;

  const review = TESTIMONIALS[i];

  if (!review) return null;

  return (
    <section className="relative overflow-hidden bg-[#f8f7f3] py-8 md:py-10">
      {/*<img
        src={img("Smiling Man with Laptop and Thumbs-Up.png")}
        alt=""
        className="pointer-events-none absolute bottom-0 left-0 z-0 w-[220px] object-contain md:w-[350px]"
      />*/}

      <img
        src={img("Minimal Tech.png")}
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
  What People{" "}
  <span className="text-[#079fdf]">Talked</span>
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
                      <Star
                        key={star}
                        className="h-5 w-5 fill-[#0ea5e9] text-[#0ea5e9]"
                      />
                    ))}
                  </div>

                  <div className="mt-5 min-h-[90px]">
                    <p className="max-h-[110px] overflow-y-auto whitespace-pre-wrap break-words pr-3 text-base leading-7 text-[#172B4D] [scrollbar-width:thin] md:text-lg">
                      “{review.q}”
                    </p>
                  </div>
                </div>

                <div
                  className="relative mt-0 flex min-h-[120px] w-[88%] items-center gap-4 bg-[#E7E3DA] px-5 py-4 md:min-h-[130px] md:w-[75%] md:gap-5 md:px-8"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 88% 100%, 0 100%)",
                  }}
                >
                 {/* <img
                    src={review.img}
                    alt={review.n}
                    className="h-16 w-16 shrink-0 rounded-full border-2 border-white object-cover md:h-20 md:w-20"
                  />*/}

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
                  i === index
                    ? "w-8 bg-primary"
                    : "w-2.5 bg-gray-300 hover:bg-primary/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

{/*export function DigitalPlatform() {
  const cards = [
    {
      c: "tone-sky",
      i: GraduationCap,
      k: "student",
      href: "/student-corner",
      l: [Newspaper, Bell, BookOpen],
      title: "Student Corner",
      desc: "Stay updated with the latest exam notifications, scholarships, career guidance, and learning resources for students across India.",
      items: ["Educational News", "Job Alert", "Study Resources"],
      btn: "Explore Student Zone",
    },
    {
      c: "tone-orange",
      i: Newspaper,
      k: "news",
      href: "/news-updates",
      l: [Newspaper, Train, Bell],
      title: "News & Updates",
      desc: "Stay connected with local news, railway updates, government announcements, Technology & Digital Updates around your region.",
      items: ["Local Area News", "Railway Updates", "Technology Updates"],
      btn: "View Updates",
    },
    {
      c: "tone-violet",
      i: Gamepad2,
      k: "zone",
      href: "/entertainment-zone",
      l: [Puzzle, MessageCircle, Puzzle],
      title: "Entertainment Zone",
      desc: "Enjoy fun quizzes, cricket predictions, puzzles, and interactive games designed for students, families, and everyday users.",
      items: ["Memory Match", "Daily Quiz Games", "Puzzle & Brain Games"],
      btn: "Play & Explore",
    },
    {
      c: "tone-green",
      i: Store,
      k: "business",
      href: "#",
      l: [Store, Users, ShoppingCart],
      title: "Local Business Connect",
      desc: "Discover trusted local businesses, services, restaurants, shops, tuition centers, and more from your nearby communities.",
      items: ["Nearby Businesses", "Local Services", "Featured Shops"],
      btn: "Explore Businesses",
    },
  ];

  return (
    <section className="relative overflow-hidden py-20">
      <img
        src={img("Abstract Blue Wave Technology Background.png")}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
      />

      <div className="relative mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 text-center">
          <Eyebrow center both>Beyond Broadband</Eyebrow>
          <Heading
            pre="Your Everyday"
            hl="Digital Platform"
            className="mt-4"
          />
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, n) => (
            <Reveal key={c.k} delay={n * 0.1}>
              <div
                className={`${c.c} flex h-full flex-col rounded-2xl border border-card bg-card/80 p-4 shadow-soft backdrop-blur transition hover:-translate-y-2`}
              >
                <div className="flex items-center gap-5 border-b-2 border-[var(--tone)] pb-3">
                  <span className="grid h-16 w-16 shrink-0 place-items-center rounded bg-[var(--tone)] text-[#0ea5e9]-foreground">
                    <c.i className="h-8 w-8" />
                  </span>
                  <h4 className="text-2xl font-medium leading-tight text-ink">
                    {c.title}
                  </h4>
                </div>
                <p className="mt-4 leading-7 text-muted-foreground">
                  {c.desc}
                </p>
                <ul className="mt-6 space-y-2 text-muted-foreground">
                  {c.l.map((I, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <I className="h-4 w-4 text-[var(--tone)]" />
                      {c.items[idx]}
                    </li>
                  ))}
                </ul>
                {c.href.startsWith("/") ? (
                 <a
  href={c.href}
  className="mx-auto mt-auto inline-block bg-[var(--tone-soft)] px-6 py-2.5 pt-2.5 text-[var(--tone)] transition hover:bg-[var(--tone)] hover:text-primary-foreground"
  style={{ marginTop: 28 }}
>
  {c.btn}
</a>
                ) : (
                  <a
                    href={c.href}
                    className="mx-auto mt-auto inline-block bg-[var(--tone-soft)] px-6 py-2.5 pt-2.5 text-[var(--tone)] transition hover:bg-[var(--tone)] hover:text-primary-foreground"
                    style={{ marginTop: 28 }}
                  >
                    {c.btn}
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20">
      <div className="mx-auto grid w-full max-w-[1300px] gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="space-y-5">
          {FAQS.map((f, n) => (
            <Reveal key={f.q} delay={n * 0.08}>
              <div className="rounded-[40px] bg-secondary p-3">
                <button
                  onClick={() => setOpen(open === n ? null : n)}
                  className="flex w-full items-center gap-5 text-left"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-ink text-primary-foreground">
                    {open === n ? (
                      <Minus className="h-5 w-5" />
                    ) : (
                      <Plus className="h-5 w-5" />
                    )}
                  </span>
                  <span className="font-display font-semibold capitalize text-ink">
                    {f.q}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open === n && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden px-6 text-muted-foreground"
                    >
                      <span className="block py-4">{f.a}</span>
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal x={50} y={0}>
          <Eyebrow>Find quick answers to common questions</Eyebrow>
          <h3 className="mt-4 font-display text-6xl font-bold text-ink">
            FAQ
          </h3>
          <div className="mt-10 flex gap-6">
            <span className="grid h-[72px] w-[72px] shrink-0 place-items-center rounded-full bg-secondary text-primary">
              <Router className="h-8 w-8" />
            </span>
            <div>
              <h5 className="font-display text-xl font-semibold text-ink">
                OTT activation
              </h5>
              <p className="mt-2 text-muted-foreground">
                Watch this video to know how to activate your OTT
              </p>
            </div>
          </div>
          <div className="mt-10">
            <BtnLink href="/faq" variant="primary">
              View All
            </BtnLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ShareKnowledge() {
  return (
    <section className="px-2 md:px-5">
      <Reveal>
        <div className="relative overflow-hidden rounded-[40px] bg-hero px-6 py-20 text-center">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full border-[40px] border-primary/20" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full border-[40px] border-primary/20" />
          <h2 className="relative font-display text-4xl font-bold text-primary-foreground md:text-6xl">
            Share Your <span className="text-primary">Knowledge.</span>
          </h2>
          <h5 className="relative mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
            Contribute your knowledge, experiences, and marketing ideas to help
            others grow and get recognized across the network.
          </h5>
          <div className="relative mt-10">
            <BtnLink href="#">Submit Your Content</BtnLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Blogs() {
  const [i, setI] = useState(0);
  const pages = Math.ceil(BLOGS.length / 3);

  return (
    <section className="bg-sky-wave py-20">
      <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>
              Explore insights, success stories, and updates shared by our
              growing partner network.
            </Eyebrow>
            <Heading pre="Latest" hl="Blogs" className="mt-4" />
          </div>
          <BtnLink href="#">View All Blog</BtnLink>
        </Reveal>
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.5 }}
            className="mt-12 grid gap-7 md:grid-cols-3"
          >
            {BLOGS.slice(i * 3, i * 3 + 3).map((b) => {
              const title = b.t;

              return (
                <article key={b.t} className="group bg-card/90 p-5 shadow-soft">
                  <div className="relative overflow-hidden">
                    <img
                      src={b.img}
                      alt={title}
                      className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    <span className="absolute left-5 top-0 bg-primary px-3 py-1 font-display font-semibold text-primary-foreground">
                      {b.d}
                    </span>
                    <div className="absolute bottom-0 left-0 flex gap-6 bg-primary px-5 py-2.5 text-sm text-primary-foreground">
                      <span className="flex items-center gap-2">
                        <User className="h-3.5 w-3.5" />
                        Railwireadmin
                      </span>
                      {b.c && (
                        <span className="flex items-center gap-2">
                          <MessageCircle className="h-3.5 w-3.5" />
                          {b.c}
                        </span>
                      )}
                    </div>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-medium leading-8 text-ink">
                    {b.href.startsWith("/") ? (
                      <a href={b.href} className="hover:text-primary">
  {title}
</a>
                    ) : (
                      <a href={b.href} className="hover:text-primary">
                        {title}
                      </a>
                    )}
                  </h3>
                  {b.href.startsWith("/") ? (
                    <a
  href={b.href}
  aria-label="Read more"
  className="mt-6 grid h-10 w-10 place-items-center rounded-full bg-secondary text-primary transition hover:bg-primary hover:text-primary-foreground"
>
  <ChevronsRight className="h-4 w-4" />
</a>
                  ) : (
                    <a
                      href={b.href}
                      aria-label="Read more"
                      className="mt-6 grid h-10 w-10 place-items-center rounded-full bg-secondary text-primary transition hover:bg-primary hover:text-primary-foreground"
                    >
                      <ChevronsRight className="h-4 w-4" />
                    </a>
                  )}
                </article>
              );
            })}
          </motion.div>
        </AnimatePresence>
        <div className="mt-10 flex justify-center gap-4">
          <button
            aria-label="Previous"
            onClick={() => setI((x) => (x - 1 + pages) % pages)}
            className="grid h-14 w-14 place-items-center rounded-full border border-border text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            aria-label="Next"
            onClick={() => setI((x) => (x + 1) % pages)}
            className="grid h-14 w-14 place-items-center rounded-full border border-border text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-6 flex justify-center gap-3">
          {Array.from({ length: pages }).map((_, n) => (
            <button
              key={n}
              aria-label={`Page ${n + 1}`}
              onClick={() => setI(n)}
              className={`h-2.5 w-2.5 rounded-full ${n === i ? "bg-primary ring-4 ring-primary/20" : "bg-border"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}*/}

export function TrustedIndustries() {
  const clientLogos = [
    "srit c.png",
    "srit c1.png",
    "srit c2.png",
    "srit c3.png",
    "srit c4.png",
    "srit c5.png",
    "srit c6.png",
    "srit c7.png",
    "srit c8.png",
    "srit c9.png",
  ];

  return (
    <section className="overflow-hidden bg-white py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1700px] px-5 sm:px-8 lg:px-12">

        {/* Section Title */}
        <Reveal className="text-center">
          <Eyebrow center both>Our Trusted Network</Eyebrow>

          <h2 className="mt-4 font-display text-3xl font-bold text-ink md:text-5xl">
            Trusted by stalwarts across{" "}
            <span className="text-primary">industries</span>
          </h2>
        </Reveal>

        {/* Client Logos */}
        <div className="mt-16 grid grid-cols-2 items-center gap-x-8 gap-y-20 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-12 lg:gap-y-32">
          {clientLogos.map((logo, index) => (
            <Reveal key={logo} delay={index * 0.05}>
              <div className="flex h-[130px] items-center justify-center px-2">
                <img
                  src={img(logo)}
                  alt={`SRIT client ${index + 1}`}
                  className="max-h-[110px] max-w-full object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>
            </Reveal>
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
    { label: "Telecom & Broadband", href: "#telecom" },
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

const FooterHeading = ({ children }) => (
  <h3 className="mb-8 inline-block border-b-2 border-destructive pb-2 font-display text-xl font-semibold tracking-tight text-primary-foreground">
    {children}
  </h3>
);

const FooterLink = ({ href, children }) => (
  <a
    href={href}
    className="block text-[17px] font-semibold leading-[2.2] text-primary-foreground/85 transition-colors duration-300 hover:text-primary"
  >
    {children}
  </a>
);

  return (
    <footer className="bg-hero text-primary-foreground/85">
      <div className="mx-auto grid w-full max-w-[1620px] grid-cols-1 gap-10 px-6 py-14 sm:px-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:px-10 lg:py-20">

        {/* Reach Out */}
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

            <a
              href="mailto:info@sritindia.com"
              className="text-primary transition hover:text-primary-foreground"
            >
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

        {/* Solutions */}
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

        {/* Projects */}
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
            <a
              href="#"
              className="block text-xl font-medium text-primary-foreground/85 transition hover:text-primary"
            >
              Media
            </a>

            <a
              href="#"
              className="block text-xl font-medium text-primary-foreground/85 transition hover:text-primary"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* About Us */}
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

      {/* Copyright */}
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
