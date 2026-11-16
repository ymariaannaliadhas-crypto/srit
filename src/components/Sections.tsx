import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Activity,
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  ChevronLeft,
  ChevronRight,
  Clock,
  Cpu,
  Globe,
  MessageCircle,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Wifi,
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

export function PortalCards() {
  const items = [
    { t: "Healthcare", img: img("healthcare.webp"), h: "#healthcare" },
    { t: "E-Governance", img: img("E-Governance.webp"), h: "#e-governance" },
    { t: "Telecom & Broadband", img: img("telecom.jpg"), h: "#telecom" },
    { t: "Cyber Security", img: img("cybersecurity.jpeg"), h: "#cyber-security" },
  ];

  return (
    <section className="mx-auto w-full max-w-[1300px] px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {items.map((it, n) => (
          <Reveal key={it.t} delay={n * 0.1}>
            <a
              href={it.h}
              className="group block overflow-hidden rounded-2xl bg-white text-center shadow-md border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#079fdf]/50"
            >
              <div className="overflow-hidden">
                <img
                  src={it.img}
                  alt={it.t}
                  className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="py-4 font-display text-lg font-bold text-[#102b50] group-hover:text-primary transition-colors">
                {it.t}
              </h3>
            </a>
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

interface ThinkingEdgeArticle {
  i: React.ComponentType<{ className?: string }>;
  k: string;
  category: string;
  title: string;
  readTime: string;
  lead: string;
  sections: {
    heading: string;
    content: string;
  }[];
  keyTakeaway: string;
}

export function Features() {
  const [selectedArticle, setSelectedArticle] = useState<ThinkingEdgeArticle | null>(null);

  useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setSelectedArticle(null);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [selectedArticle]);

  const left: ThinkingEdgeArticle[] = [
    {
      i: BrainCircuit,
      k: "industry-perspective",
      category: "INDUSTRY PERSPECTIVE",
      title: "From Linear Headcount to Cognitive Code: How Enterprise AI is Reshaping IT Services",
      readTime: "3 Min Read",
      lead: "Traditional T&M models face disruption as AI automates coding and QA workflows. Growth now belongs to platform-led integrators with proprietary vertical intellectual property.",
      sections: [
        {
          heading: "1. Breaking the Traditional IT Pyramid",
          content: "For over three decades, the global IT services industry relied on a linear staffing pyramid: large cohorts of entry-level engineers handling routine development, software testing, and application maintenance under time-and-materials (T&M) contracts. Generative and agentic AI have compressed those routine workloads by 30% to 50%. Enterprise buyers are rapidly moving away from paying for billable hours toward demanding outcome-linked pricing, fixed-fee automation, and licensed platforms.",
        },
        {
          heading: "2. The Shift from Maintenance Vendors to Platform Architects",
          content: "Pure-play outsourcing firms face margin pressure when AI shrinks the number of seats required to support legacy code. Conversely, technology companies that own their intellectual property benefit directly from AI-driven efficiency. By embedding intelligent automation into existing software suites, IP owners accelerate delivery timelines, reduce implementation costs, and expand operating margins without cannibalizing core revenue.",
        },
        {
          heading: "3. How SRIT Operates Beyond the Headcount Trap",
          content: "Rather than competing on commodity offshore staffing, SRIT’s business model is anchored in proprietary, domain-specific software platforms paired with large-scale system integration:\n\n• Healthcare IP (RHES & EMR): NABH-certified clinical suites managing hospital workflows, radiology imaging, and state-wide insurance claims.\n• Telecom OSS/BSS (R-Converge): Carrier-grade subscriber management, provisioning, and multi-tier revenue settlement engines.\n\nBy engineering AI natively into these core products, SRIT transforms artificial intelligence from a defensive cost-cutting measure into a scalable, high-margin revenue multiplier.",
        },
      ],
      keyTakeaway: "In the post-linear IT era, competitive advantage is no longer measured by headcount scale—it is defined by intellectual capital, deep domain mastery, and AI-native product architecture.",
    },
    {
      i: Cpu,
      k: "ai-architecture",
      category: "AI ARCHITECTURE",
      title: "Why the Next Wave of Enterprise AI Belongs to Edge Compute, Not Public Cloud LLMs",
      readTime: "4 Min Read",
      lead: "In heavily regulated sectors like healthcare and state administration, compliance, data sovereignty, and real-time edge processing take precedence over generic chatbots.",
      sections: [
        {
          heading: "1. The Limitations of Public Cloud Wrappers",
          content: "While consumer-facing generative AI chatbots run seamlessly on public cloud APIs, deploying external cloud models inside public infrastructure or hospital networks introduces critical operational bottlenecks:\n\n• Data Sovereignty & Regulatory Compliance: Citizen health records, forensic evidence, and municipal tax registries are governed by strict data residency mandates and India’s Digital Personal Data Protection (DPDP) Act. Sending sensitive payloads to external endpoints is a non-starter.\n• Deterministic Latency & Offline Resilience: Roadside traffic enforcement and bedside clinical alerts cannot afford network round-trip delays or connectivity blackouts.",
        },
        {
          heading: "2. Architecting for the Sovereign Edge",
          content: "The next phase of enterprise AI moves intelligence directly to where data is generated—inside private data centers, local hospital servers, and ruggedized edge nodes:\n\n• Edge Computer Vision: High-throughput inference models running locally on highway camera networks detect traffic infractions and vehicle anomalies in milliseconds without streaming raw video over strained wide-area links.\n• Air-Gapped Clinical Models: Localized natural language processing and clinical decision support engines assist doctors inside hospital premises while keeping patient records completely isolated.",
        },
        {
          heading: "3. Proven Edge-AI Execution at Population Scale",
          content: "SRIT’s deployments demonstrate how sovereign, edge-first architectures deliver immediate public impact without compromising data privacy.",
        },
      ],
      keyTakeaway: "Enterprise AI must be secure, local, and sovereign. True mission-critical reliability is forged at the network edge, not in public cloud wrapper APIs.",
    },
    {
      i: TrendingUp,
      k: "strategy-growth",
      category: "STRATEGY & GROWTH",
      title: "Capitalizing on the DPI Wave: How Proprietary IP and Post-Listing Capital Drive Future Scale",
      readTime: "4 Min Read",
      lead: "Following its NSE and BSE listing, SRIT is embedding autonomous machine intelligence into population-scale platforms across ABDM health grids, telecom OSS/BSS, and smart mobility.",
      sections: [
        {
          heading: "1. The Next Frontier of Digital Public Infrastructure",
          content: "India's DPI revolution began with identity (Aadhaar) and payments (UPI). The current wave is transforming healthcare (Ayushman Bharat Digital Mission - ABDM), urban governance, and unified logistics. These population-scale networks demand high-throughput, secure, and compliant architectures capable of processing billions of transactions.",
        },
        {
          heading: "2. Transforming Enterprise Operations Through AI",
          content: "With capital access from its public listing on NSE and BSE, SRIT is reinvesting into next-generation AI accelerators. By integrating autonomous triage, predictive bed management, and real-time claims validation directly into our platforms, we eliminate manual bottlenecks and accelerate service delivery across public and private sectors.",
        },
        {
          heading: "3. Long-Term Value Creation",
          content: "By combining proprietary intellectual property, strategic academic partnerships, and enterprise-grade integration capabilities, SRIT is uniquely positioned to lead the monetization of India's second-generation DPI transformation.",
        },
      ],
      keyTakeaway: "Post-listing capital paired with mission-critical intellectual property positions SRIT at the center of India's autonomous digital public infrastructure.",
    },
    {
      i: Activity,
      k: "digital-health-ai",
      category: "DIGITAL HEALTH AI",
      title: "From Passive Records to Predictive Care: How AI Transforms Interoperable Hospital Ecosystems",
      readTime: "4 Min Read",
      lead: "Embedding clinical AI inside NABH-certified EMRs turns patient data into proactive triage, automated risk stratification, and zero-leakage claims processing.",
      sections: [
        {
          heading: "1. From Static Digitization to Active Intelligence",
          content: "Most hospital information systems function as passive digital file cabinets—recording patient history without delivering actionable real-time clinical guidance. With medical staff facing unprecedented patient volumes, passive systems fail to prevent clinical errors, readmissions, or diagnostic delays.",
        },
        {
          heading: "2. Real-Time Clinical Decision Support",
          content: "SRIT’s RHES (Integrated Hospital Information Suite) embeds specialized clinical intelligence directly into the physician workflow:\n\n• Predictive Triage: AI algorithms flag critical laboratory values, sepsis risk indicators, and drug-drug interactions before prescriptions are dispensed.\n• Automated Diagnostics: Integrated PACS and AI radiology engines pre-screen chest X-rays and CT scans, accelerating emergency department turnaround times.",
        },
        {
          heading: "3. Fraud-Proof Claims & Payer Automation",
          content: "On the administrative side, automated claim adjudication engines pre-scrutinize insurance documentation against state health scheme rules, slashing rejection rates from 18% to under 2% while eliminating fraudulent claim leakage.",
        },
      ],
      keyTakeaway: "Clinical AI creates lasting impact only when natively embedded in daily point-of-care workflows, turning passive patient data into proactive life-saving interventions.",
    },
  ];

  const right: ThinkingEdgeArticle[] = [
    {
      i: Wifi,
      k: "telecom-oss-bss",
      category: "TELECOM & OSS/BSS",
      title: "Self-Healing Networks: How AI Automates Statewide Broadband & Last-Mile Connectivity",
      readTime: "3 Min Read",
      lead: "Managing millions of fiber subscribers requires autonomous fault detection, zero-touch provisioning, and dynamic load routing across statewide digital highways.",
      sections: [
        {
          heading: "1. The Operational Complexity of Statewide Fiber Grids",
          content: "Managing thousands of route kilometers of optical fiber across rural and urban landscapes presents massive operational overhead. Unscheduled fiber cuts, localized power outages, and sudden congestion spikes can degrade quality of service across entire districts.",
        },
        {
          heading: "2. Autonomous Network Operation Centers",
          content: "SRIT’s carrier-grade OSS/BSS platforms incorporate predictive telemetry and machine learning models that monitor physical and logical network layers in real time:\n\n• Automated Fault Localization: Optical time-domain telemetry identifies fiber break coordinates within seconds, automatically dispatching field maintenance teams.\n• Zero-Touch Subscriber Provisioning: Automated service activation pipelines instantly configure ONT devices, IP routing, and bandwidth tiers without manual intervention.",
        },
        {
          heading: "3. Dynamic Revenue Assurance",
          content: "Real-time AI reconciliation monitors billing pipelines, preventing unmetered traffic leakage and ensuring accurate revenue sharing across multi-tier franchisee networks.",
        },
      ],
      keyTakeaway: "Autonomous, self-healing network operations are the foundation of affordable, high-reliability statewide broadband connectivity.",
    },
    {
      i: ShieldCheck,
      k: "cyber-resilience",
      category: "CYBER RESILIENCE",
      title: "Securing the Sovereign Backbone: Zero-Trust Defense in an Era of Automated Cyber Threats",
      readTime: "3 Min Read",
      lead: "As threat actors deploy automated attacks, critical utilities and public registries need 24/7 AI-driven CSOC monitoring and micro-segmented Zero-Trust defense.",
      sections: [
        {
          heading: "1. The Rising Threat to Sovereign Data",
          content: "Critical infrastructure networks—ranging from power grids and hospital clusters to state data centers—face sophisticated, automated attack vectors. Traditional perimeter-based security is no longer sufficient against zero-day exploits and insider threats.",
        },
        {
          heading: "2. Implementing Zero-Trust Architecture",
          content: "SRIT integrates comprehensive Zero-Trust principles across every deployment layer:\n\n• Continuous Verification: Every user, device, and API request is authenticated and authorized dynamically based on context, behavior, and risk posture.\n• Micro-Segmentation: Restricting lateral movement ensures that a localized breach inside an administrative terminal cannot penetrate core health registries or SCADA networks.",
        },
        {
          heading: "3. 24/7 Cognitive Security Operations",
          content: "Our CSOC infrastructure leverages machine learning threat correlation to detect anomalous lateral movement, automated brute-force attacks, and data exfiltration patterns within milliseconds.",
        },
      ],
      keyTakeaway: "In public digital infrastructure, cybersecurity is not an add-on feature—it is the bedrock of citizen trust and operational continuity.",
    },
    {
      i: Globe,
      k: "national-ai-ecosystem",
      category: "NATIONAL AI ECOSYSTEM",
      title: "Co-Engineering Sovereign AI: Bridging Deep-Tech Research and Population-Scale Execution",
      readTime: "4 Min Read",
      lead: "As the IndiaAI Mission accelerates indigenous AI across healthcare, governance, and regional languages, established system integrators provide the execution backbone to move AI from lab pilots to state deployments.",
      sections: [
        {
          heading: "1. Bridging the Prototype-to-Production Gap",
          content: "While academic institutions and deep-tech startups produce groundbreaking models, deploying those innovations inside statewide governance networks requires battle-tested engineering, high availability (99.9%+), and CMMI Level 5 operational discipline.",
        },
        {
          heading: "2. Academic Co-Innovation & Sovereign Platforms",
          content: "Through strategic collaborations with premier research institutions like IIT Madras Pravartak Technologies Foundation, SRIT commercializes indigenous core technologies—such as ShaktiDB (#IndiaDB)—while deploying sovereign enterprise cloud infrastructure alongside industrial leaders.",
        },
        {
          heading: "3. Vernacular Access & Last-Mile Public Impact",
          content: "Embedding regional speech-to-text and vernacular NLP into state service portals enables millions of citizens across Tier-2, Tier-3, and rural regions to access public services in their mother tongue.",
        },
      ],
      keyTakeaway: "Breakthrough research sparks innovation, but disciplined engineering delivers public impact. SRIT turns India’s sovereign AI vision into everyday reality.",
    },
  ];

  const Item = ({ f, r }: { f: ThinkingEdgeArticle; r?: boolean }) => (
    <div className={`group flex gap-6 border-b border-border py-4 lg:py-6 ${r ? "flex-row-reverse" : ""}`}>
      <span className="grid h-[72px] w-[72px] shrink-0 place-items-center rounded-full bg-secondary text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
        <f.i className="h-8 w-8" />
      </span>
      <div className={`min-w-0 flex-1 ${r ? "text-right" : "text-left"}`}>
        <span className="text-[11px] font-bold tracking-wider uppercase text-primary/80 block mb-1">
          {f.category}
        </span>
        <h4 className="font-display text-xl font-semibold text-ink leading-snug group-hover:text-primary transition-colors">
          {f.title}
        </h4>
        <button
          type="button"
          onClick={() => setSelectedArticle(f)}
          className={`mt-2.5 inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-all duration-300 hover:text-primary/80 group-hover:underline ${
            r ? "flex-row-reverse" : ""
          }`}
        >
          <span>Read more</span>
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
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
          <Heading pre="The Thinking" hl="Edge" className="mt-4" />
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

      {/* Article Reader Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative z-10 flex flex-col max-h-[88vh] w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            >
              {/* Modal Header */}
              <div className="border-b border-slate-200 bg-[#102b50] px-6 py-6 text-white sm:px-8">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <span className="rounded bg-white/10 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-cyan-300">
                      {selectedArticle.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-white/70">
                      <Clock className="h-3.5 w-3.5 text-white/70" />
                      {selectedArticle.readTime}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedArticle(null)}
                    className="rounded-lg p-1.5 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <h2 className="mt-3.5 font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
                  {selectedArticle.title}
                </h2>
              </div>

              {/* Modal Content */}
              <div className="flex-1 overflow-y-auto px-6 py-8 sm:px-8 space-y-6 text-slate-800">
                <p className="text-base font-medium leading-relaxed text-slate-600 border-l-4 border-primary pl-4">
                  {selectedArticle.lead}
                </p>

                <div className="space-y-6 pt-2">
                  {selectedArticle.sections.map((sec, idx) => (
                    <div key={idx} className="space-y-2">
                      <h3 className="font-display text-lg font-bold text-[#102b50]">
                        {sec.heading}
                      </h3>
                      <div className="text-sm sm:text-base leading-relaxed text-slate-700 whitespace-pre-line">
                        {sec.content}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl border border-sky-100 bg-sky-50/60 p-6">
                  <div className="flex items-center gap-1.5 text-primary font-bold text-xs uppercase tracking-wider">
                    <Quote className="h-3.5 w-3.5" /> Key Takeaway
                  </div>
                  <p className="mt-2 font-display text-base font-semibold italic text-[#102b50] leading-snug">
                    "{selectedArticle.keyTakeaway}"
                  </p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="border-t border-slate-100 bg-slate-50 px-6 py-4 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  SRIT Thought Leadership
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="rounded-lg bg-[#102b50] px-4 py-2 text-xs font-semibold text-white hover:bg-[#092b55] transition-colors"
                >
                  Close Article
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export function AiNativeEngineering() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setIsDrawerOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isDrawerOpen]);

  const stats = [
    {
      value: "<20ms",
      label: "Edge Inference Speed",
      desc: "Edge Inference Response Time",
      highlight: "Ultra-low latency edge compute",
      icon: Cpu,
    },
    {
      value: "350,000+",
      label: "Computer Vision Scale",
      desc: "Autonomous CV Events in 72 Hours",
      highlight: "SAFE Kerala highway benchmark",
      icon: Activity,
    },
    {
      value: "99%+",
      label: "Document Intelligence",
      desc: "Structured Extraction Accuracy",
      highlight: "IDP on complex public & clinical records",
      icon: BookOpen,
    },
    {
      value: "100%",
      label: "Security & Residency",
      desc: "Private On-Premise & Sovereign Cloud",
      highlight: "DPDP Act & sovereign isolation",
      icon: ShieldCheck,
    },
  ];

  return (
    <>
      <section id="ai-native-engineering" className="relative overflow-hidden bg-slate-50 py-20">
        <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(#079fdf_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-[#079fdf]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-[#102b50]/10 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal x={-40} y={0}>
              <Eyebrow center both>AI-Native Engineering</Eyebrow>

              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#102b50] sm:text-4xl lg:text-5xl lg:leading-[1.15]">
                Moving from Reactive Software to{" "}
                <span className="text-[#079fdf]">Proactive Intelligence</span>
              </h2>

              <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-600">
                We engineer resilient, low-latency AI backbones natively integrated into healthcare, governance, and telecom infrastructure. Rather than layering AI as an afterthought, our platforms embed cognitive intelligence directly into the system layer.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsDrawerOpen(true)}
                  className="inline-flex items-center gap-3 rounded-xl bg-[#079fdf] px-7 py-3.5 font-display text-sm font-bold text-white shadow-md shadow-[#079fdf]/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#078bc4] hover:shadow-lg cursor-pointer"
                >
                  <span>Know More</span>
                  <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
                </button>

                <span className="text-xs font-medium text-slate-500">
                  Explore architectural framework & case narrative
                </span>
              </div>
            </Reveal>

            <Reveal x={40} y={0}>
              <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xl shadow-slate-200/50">
                <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#102b50] text-cyan-300">
                      <Cpu className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-[#102b50]">
                        System-Layer AI Paradigm
                      </h3>
                      <p className="text-xs text-slate-500">Autonomous Execution Architecture</p>
                    </div>
                  </div>
                </div>

                <blockquote className="mt-6 border-l-4 border-[#079fdf] bg-slate-50/80 p-4 rounded-r-xl">
                  <p className="font-display text-sm font-semibold italic text-[#102b50] leading-snug">
                    "In an era of cognitive automation, adding an AI feature on top of legacy code is no longer enough. SRIT builds intelligence directly into the system layer."
                  </p>
                </blockquote>

                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-3 rounded-lg border border-slate-100 bg-white p-3 shadow-xs">
                    <Activity className="h-4 w-4 text-[#079fdf] mt-0.5 shrink-0" />
                    <div className="text-xs">
                      <strong className="text-[#102b50]">Edge Computer Vision:</strong>
                      <span className="text-slate-600 ml-1">Real-time inference tracking state highway networks with zero round-trip lag.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-slate-100 bg-white p-3 shadow-xs">
                    <BrainCircuit className="h-4 w-4 text-[#079fdf] mt-0.5 shrink-0" />
                    <div className="text-xs">
                      <strong className="text-[#102b50]">Clinical Decision Engines:</strong>
                      <span className="text-slate-600 ml-1">Continuous learning triage assisting doctors across 2,000+ hospital ecosystems.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-slate-100 bg-white p-3 shadow-xs">
                    <ShieldCheck className="h-4 w-4 text-[#079fdf] mt-0.5 shrink-0" />
                    <div className="text-xs">
                      <strong className="text-[#102b50]">100% Data Sovereignty:</strong>
                      <span className="text-slate-600 ml-1">Zero-leakage security engineered for India's DPDP Act and on-premise governance.</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500">SRIT Technology Architecture</span>
                  <button
                    type="button"
                    onClick={() => setIsDrawerOpen(true)}
                    className="text-xs font-bold text-[#079fdf] hover:underline cursor-pointer"
                  >
                    Read full narrative →
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative isolate w-full overflow-hidden bg-[#050A1F] py-20 md:py-24 text-white">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 left-[10%] h-[600px] w-[600px] rounded-full bg-[#079fdf]/40 blur-[130px]" />
          <div className="absolute top-0 right-[10%] h-[500px] w-[600px] rounded-full bg-indigo-500/30 blur-[130px]" />
          <div className="absolute -bottom-40 left-1/3 h-[400px] w-[500px] rounded-full bg-cyan-400/20 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-12 px-4 sm:grid-cols-2 lg:grid-cols-4 sm:px-6 lg:gap-12 lg:px-8">
          {stats.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.12}>
              <div className="flex h-full flex-col">
                <span className="text-xs font-bold uppercase tracking-wider text-[#079fdf] mb-1">
                  {item.label}
                </span>
                <h3 className="font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                  <span className="bg-gradient-to-r from-[#079fdf] via-cyan-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(7,159,223,0.5)]">
                    {item.value}
                  </span>
                </h3>
                <p className="mt-5 text-base font-semibold text-slate-100 leading-snug md:text-lg">
                  {item.desc}
                </p>
                <p className="mt-1.5 text-xs text-slate-300/80 leading-relaxed">
                  {item.highlight}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {isDrawerOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-end p-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDrawerOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative z-10 flex h-full w-full max-w-2xl flex-col bg-white shadow-2xl"
            >
              <div className="border-b border-slate-200 bg-[#102b50] p-6 text-white sm:px-8">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 rounded-full bg-cyan-400/20 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-cyan-300">
                    <Sparkles className="h-3 w-3" />
                    <span>Executive Architecture Brief</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsDrawerOpen(false)}
                    className="rounded-lg p-1.5 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Rethinking Enterprise Architecture Around Machine Intelligence
                </h3>
                <p className="mt-1 text-xs text-cyan-200">
                  SRIT AI-Native Engineering Paradigm & Sovereign Infrastructure
                </p>
              </div>

              <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-slate-700">
                <div className="rounded-2xl border border-sky-100 bg-sky-50/70 p-6 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#079fdf]">
                    <Quote className="h-4 w-4" />
                    <span>Executive Thesis</span>
                  </div>
                  <blockquote className="mt-3 font-display text-base sm:text-lg font-semibold leading-relaxed text-[#102b50]">
                    "In an era of cognitive automation, adding an AI feature on top of legacy code is no longer enough. SRIT’s AI-Native Engineering paradigm builds intelligence directly into the system layer. From automated edge computer-vision cameras tracking state highway networks to deep-learning clinical decision engines assisting doctors across 2,000+ hospitals, our platforms continuously learn, self-correct, and optimize."
                  </blockquote>
                </div>

                <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                  <p>
                    Traditional enterprise software architecture was designed around relational databases and human manual data entry. In contrast, SRIT’s <strong>AI-Native Engineering</strong> treats machine intelligence, event streaming, and edge inferencing as foundational primitives.
                  </p>
                  <p className="font-medium text-[#102b50]">
                    "Designed with 100% data residency and strict zero-leakage security, our architectures enable public and private enterprises to scale autonomous operations without compromising data sovereignty or system resilience."
                  </p>
                </div>

                <div className="border-t border-slate-200 pt-6">
                  <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#102b50] mb-4">
                    Production Proof Benchmarks
                  </h4>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                      <div className="font-display text-2xl font-bold text-[#079fdf]">&lt;20ms</div>
                      <div className="text-xs font-semibold text-slate-800 mt-1">Edge Response Time</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">Real-time bedside & roadside inference</div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                      <div className="font-display text-2xl font-bold text-[#079fdf]">350K+</div>
                      <div className="text-xs font-semibold text-slate-800 mt-1">CV Events in 72h</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">SAFE Kerala highway enforcement</div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                      <div className="font-display text-2xl font-bold text-[#079fdf]">99%+</div>
                      <div className="text-xs font-semibold text-slate-800 mt-1">Extraction Accuracy</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">Complex public & medical IDP records</div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                      <div className="font-display text-2xl font-bold text-[#079fdf]">100%</div>
                      <div className="text-xs font-semibold text-slate-800 mt-1">Sovereign Isolation</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">Air-gapped on-premise & private cloud</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-200 bg-slate-50 p-4 sm:px-8 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  SRIT AI Engineering Whitepaper
                </span>
                <button
                  type="button"
                  onClick={() => setIsDrawerOpen(false)}
                  className="rounded-lg bg-[#102b50] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#092b55] transition-colors"
                >
                  Close Drawer
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
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
  const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string; typing?: boolean }[]>([
    {
      role: "bot",
      text: "👋 Hi! I'm SRIT's AI assistant. Ask me anything about our products, services, investors, certifications, projects, or careers.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const KB: { patterns: RegExp[]; answer: string }[] = [
    {
      patterns: [/hmis|his|hospital management|hospital information/i],
      answer:
        "SRIT's Hospital Management Information Suite (HMIS/HIS) is deployed across 2,000+ hospitals and OPD clinics in 20+ countries. It covers patient registration, OPD/IPD workflows, billing, pharmacy, lab, radiology, and more — NABH certified under the Government of India.",
    },
    {
      patterns: [/emr|electronic medical record/i],
      answer:
        "Our Electronic Medical Record (EMR) system is NABH certified and ABDM ready. It supports interoperability with FHIR, integrates with PACS, and is deployed across thousands of hospital beds. It is part of our Renaissance Health Enterprise Suite (RHES).",
    },
    {
      patterns: [/nabh|certification|accreditation|certified/i],
      answer:
        "SRIT's RHES (Renaissance Health Enterprise Suite) and EMR have received national quality accreditation — NABH certification — under the Government of India. This validates clinical-grade security, ABDM readiness, and full interoperability across our health platform.",
    },
    {
      patterns: [/kfon|kerala fiber|broadband|r-converge/i],
      answer:
        "SRIT powers the KFON Digital Highway — connecting 30,000+ government institutions across Kerala. Our R-Converge OSS/BSS platform manages subscriber onboarding, automated billing, and partner reconciliations for this statewide broadband grid, in consortium with BEL.",
    },
    {
      patterns: [/bsnl|telecom|noc|network operating|bss|oss/i],
      answer:
        "SRIT powers BSNL's Next-Generation Network Operating Centre (NOC). Our BSS/OSS network platforms manage core operations and inter-operator settlement for India's national telecom backbone. We are a key partner in India's sovereign telecom infrastructure.",
    },
    {
      patterns: [/safe|traffic|computer vision|cv|highway|violation|enforcement/i],
      answer:
        "The SAFE Kerala AI Traffic Network, built by SRIT, logged over 350,000 violations in just 72 hours using real-time edge computer-vision algorithms deployed across highway corridors. This benchmark is now being evaluated by neighboring states.",
    },
    {
      patterns: [/edge|inference|<20ms|latency/i],
      answer:
        "SRIT's edge AI achieves sub-20ms inference latency — enabling real-time computer vision for traffic enforcement, surveillance, and industrial monitoring without cloud round-trips. This ultra-low latency is benchmarked on the SAFE Kerala highway deployment.",
    },
    {
      patterns: [/mp|madhya pradesh|e-nagar|municipality|urban|ulb/i],
      answer:
        "SRIT built the MP e-Nagar Palika 2.0 platform, unifying municipal operations across all 417 Urban Local Bodies (ULBs) in Madhya Pradesh. This project won the prestigious National e-Governance Award for digital trust and delivery efficiency.",
    },
    {
      patterns: [/e-governance|egovernance|governance|agni|permit|district/i],
      answer:
        "SRIT's e-Governance suite includes platforms for urban local bodies, permit management (AgniPermit), e-District services, and state-level digital public infrastructure. Our MP e-Nagar Palika project won a National e-Governance Award.",
    },
    {
      patterns: [/ipo|nse|bse|listed|stock|share|218|public offering/i],
      answer:
        "SRIT India Limited made its historic debut on both the NSE and BSE on October 6, 2026, following an oversubscribed ₹218.40 crore IPO. The capital raised is being deployed toward next-gen healthcare platforms, public AI systems, and working capital scale.",
    },
    {
      patterns: [/investor|investment|annual report|financial|revenue|profit/i],
      answer:
        "SRIT is listed on NSE and BSE (October 2026, ₹218 Cr IPO). For investor information — financials, annual reports, management commentary, and ESG disclosures — visit the Investors section on our website or navigate to /investor.",
    },
    {
      patterns: [/iit|pravartak|r&d|research|academic|edge.*ai|forensic/i],
      answer:
        "SRIT has entered a strategic deep-tech partnership with IIT Pravartak Foundation to co-engineer sovereign databases and edge-AI modules for forensic analysis and healthcare diagnostics — advancing academic-industrial R&D at population scale.",
    },
    {
      patterns: [/l&t|larsen|toubro|cloud|sovereign cloud|srit cloud/i],
      answer:
        "SRIT partnered with Larsen & Toubro (L&T) to launch SRIT Cloud — a sovereign enterprise hosting backbone. Together we showcased automated computer vision and high-performance infrastructure solutions at the AI Impact Summit.",
    },
    {
      patterns: [/cmmi|cmmi level 5|process maturity|quality/i],
      answer:
        "SRIT holds CMMI Level 5 certification — the highest process maturity in software engineering. We also hold ISO 9001, ISO 27001, ISO 20000, ISO 14001, ISO 27034, and ISO 45001 certifications.",
    },
    {
      patterns: [/iso|certification|standard/i],
      answer:
        "SRIT is certified under CMMI Level 5, ISO 9001 (Quality), ISO 27001 (Information Security), ISO 20000 (IT Service Management), ISO 14001 (Environment), ISO 27034 (Application Security), and ISO 45001 (OH&S).",
    },
    {
      patterns: [/career|job|hiring|recruit|position|vacancy|work.*srit|join/i],
      answer:
        "SRIT is actively hiring across AI Engineering, Cloud Architecture, Computer Vision, Digital Health, Telecom BSS/OSS, and Enterprise Delivery. We are a CMMI Level 5 organisation with 20+ countries of reach. Email careers@sritindia.in or visit our Careers section.",
    },
    {
      patterns: [/contact|email|phone|address|office|reach/i],
      answer:
        "📧 info@sritindia.com\n🌐 www.sritindia.in\n📍 Hyderabad, India (HQ)\n\nFor sales enquiries, partnerships, or project discussions, visit our Contact Us page at /contact-us.",
    },
    {
      patterns: [/healthcare|health|hospital|patient|clinical|rhes|pacs/i],
      answer:
        "SRIT's Digital Health suite — RHES, HMIS/HIS, EMR, PACS — powers 2,000+ hospitals and OPD clinics across 20+ countries, with 300 million+ EMR experiences to date and 200,000+ active users. All products are NABH certified and ABDM ready.",
    },
    {
      patterns: [/nimhans|esic|ap health|west bengal|ck birla|railtel/i],
      answer:
        "SRIT serves major institutions including NIMHANS, ESIC, AP Health, West Bengal Health, CK Birla Hospitals, RailTel, BSNL, SBI, KFON, Keltron, Maharashtra DFSL, TÜV Rheinland, BCG, and Defence OFB — across healthcare, telecom, banking, and governance.",
    },
    {
      patterns: [/about|who.*srit|what.*srit|founded|1999|history/i],
      answer:
        "SRIT (Systems Research and Information Technology) India Limited was founded in 1999 and is headquartered in Hyderabad, India. For 25+ years, SRIT has built mission-critical platforms across Digital Health, e-Governance, Telecom, AI, and Cybersecurity — serving 20+ countries and listed on NSE & BSE.",
    },
    {
      patterns: [/product|solution|platform|suite/i],
      answer:
        "SRIT's key product suites include:\n• 🏥 RHES / HMIS / EMR — Digital Health\n• 🏛️ e-Nagar Palika / AgniPermit — e-Governance\n• 📡 R-Converge — Telecom OSS/BSS\n• 🤖 SAFE AI — Edge Computer Vision\n• ☁️ SRIT Cloud — Sovereign Hosting\n• 🛡️ Cyber Resilience Suite",
    },
    {
      patterns: [/cyber|security|cybersecurity|firewall|threat/i],
      answer:
        "SRIT's Cyber Resilience practice delivers sovereign security solutions for government and enterprise — covering threat intelligence, SOC operations, compliance (ISO 27001, 27034), and secure application architecture for population-scale platforms.",
    },
    {
      patterns: [/col.*oberoi|oberoi|board|director|governance|carnot/i],
      answer:
        "Col. Amit Oberoi, Co-Founder & CEO of Carnot Research, has joined SRIT's Board of Directors to guide the company's growth in autonomous enterprise AI and deep-tech government solutions.",
    },
    {
      patterns: [/hello|hi|hey|good morning|good afternoon|good evening/i],
      answer:
        "Hello! 👋 I'm SRIT's AI assistant. I can answer questions about our products (HMIS, EMR, KFON), services, investor relations, certifications, projects, or careers. What would you like to know?",
    },
    {
      patterns: [/thank|thanks|thank you/i],
      answer:
        "You're welcome! 😊 Feel free to ask anything else about SRIT's solutions, projects, or how we can help your organisation.",
    },
  ];

  const getAnswer = (query: string): string => {
    const q = query.toLowerCase();
    for (const entry of KB) {
      if (entry.patterns.some((p) => p.test(q))) {
        return entry.answer;
      }
    }
    return `I don't have a specific answer for "${query}" yet, but our team can help!\n\n📧 info@sritindia.com\n🌐 /contact-us\n\nOr try asking about: HMIS, EMR, KFON, BSNL, IPO, careers, certifications, or our AI projects.`;
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || isTyping) return;

    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setIsTyping(true);

    const delay = 400 + Math.random() * 500;
    setTimeout(() => {
      const answer = getAnswer(text);
      setIsTyping(false);
      setMessages((prev) => [...prev, { role: "bot", text: answer }]);
    }, delay);
  };

  const quickQuestions = [
    "What is HMIS?",
    "Tell me about KFON",
    "NABH certification",
    "Careers at SRIT",
    "IPO details",
  ];

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 flex h-[500px] w-[360px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between bg-gradient-to-r from-[#079fdf] to-[#0369a1] px-4 py-3 text-white">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-bold leading-none">SRIT AI Assistant</p>
                  <p className="mt-0.5 text-[10px] text-white/70">Powered by SRIT Knowledge Base</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close chat"
                  className="rounded-full p-1 transition hover:bg-white/20"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto bg-slate-50 p-4 text-sm">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {m.role === "bot" && (
                    <div className="mr-2 mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#079fdf]/15">
                      <Sparkles className="h-3.5 w-3.5 text-[#079fdf]" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 leading-relaxed whitespace-pre-line ${
                      m.role === "user"
                        ? "rounded-br-sm bg-[#079fdf] text-white"
                        : "rounded-bl-sm bg-white text-slate-700 shadow-sm border border-slate-100"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="mr-2 mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#079fdf]/15">
                    <Sparkles className="h-3.5 w-3.5 text-[#079fdf]" />
                  </div>
                  <div className="rounded-2xl rounded-bl-sm bg-white px-4 py-3 shadow-sm border border-slate-100">
                    <div className="flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="h-2 w-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="h-2 w-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {messages.length <= 1 && (
              <div className="flex flex-wrap gap-1.5 border-t border-slate-100 bg-white px-3 py-2">
                {quickQuestions.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => {
                      setInput(q);
                      setTimeout(() => {
                        setMessages((prev) => [...prev, { role: "user", text: q }]);
                        setInput("");
                        setIsTyping(true);
                        setTimeout(() => {
                          setIsTyping(false);
                          setMessages((prev) => [...prev, { role: "bot", text: getAnswer(q) }]);
                        }, 600);
                      }, 10);
                    }}
                    className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600 transition hover:border-[#079fdf]/50 hover:bg-[#eaf7fc] hover:text-[#079fdf]"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            <form onSubmit={send} className="flex items-center gap-2 border-t border-slate-200 bg-white p-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything about SRIT…"
                className="flex-1 rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none transition focus:border-[#079fdf] focus:ring-2 focus:ring-[#079fdf]/20"
                disabled={isTyping}
              />
              <button
                type="submit"
                disabled={isTyping || !input.trim()}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#079fdf] text-white transition hover:bg-[#0284c7] disabled:opacity-50 disabled:cursor-not-allowed"
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
  const [selectedStory, setSelectedStory] = useState<{
    storyNum: number;
    category: string;
    cardLabel: string;
    headline: string;
    summary: string;
  } | null>(null);

  const caseStudies = [
    {
      storyNum: 1,
      category: "Capital Markets / IPO",
      cardLabel: "SRIT India Makes Historic Debut on NSE & BSE Following ₹218 Cr IPO",
      headline: "Ringing the Bell: SRIT India Limited Officially Lists on NSE and BSE",
      summary:
        "Following an oversubscribed ₹218.40 crore public offering, SRIT celebrated its official listing on October 6, marking a landmark milestone to accelerate next-gen healthcare platforms, public AI systems, and working capital scale.",
    },
    {
      storyNum: 2,
      category: "e-Governance / Awards",
      cardLabel: "Madhya Pradesh e-Nagar Palika 2.0 Clinches National e-Governance Award",
      headline: "Transforming Urban Governance: Flagship MP e-Municipality Project Receives National Honors",
      summary:
        "Unifying municipal operations and citizen delivery across all 417 Urban Local Bodies (ULBs) in Madhya Pradesh, the SRIT-built integrated platform was honored with the prestigious National e-Governance Award for setting a new benchmark in digital trust and efficiency.",
    },
    {
      storyNum: 3,
      category: "Digital Health / Quality",
      cardLabel: "Government of India Endorsement: RHES & EMR Receive NABH Certification",
      headline: "Revolutionizing Healthcare Delivery: Flagship Suites Certified by NABH",
      summary:
        "SRIT’s Renaissance Health Enterprise Suite (RHES) and Electronic Medical Record (EMR) received national quality accreditation under the Government of India, validating their interoperability, ABDM readiness, and clinical-grade security across thousands of hospital beds.",
    },
    {
      storyNum: 4,
      category: "Strategic Alliances / Cloud & AI",
      cardLabel: "Larsen & Toubro and SRIT Form Strategic Alliance for Enterprise Cloud & AI",
      headline: "SRIT Joins Hands with L&T to Power Sovereign Cloud and Showcase at AI Impact Summit",
      summary:
        "Expanding high-performance computing and enterprise sovereign hosting, SRIT partnered with L&T to launch SRIT Cloud and showcased joint automated computer vision and infrastructure solutions at the AI Impact Summit.",
    },
    {
      storyNum: 5,
      category: "Telecom Infrastructure",
      cardLabel: "SRIT Powers BSNL’s Next-Gen Network Operating Centre (NOC)",
      headline: "Strengthening India’s Sovereign Telecom Backbone with Next-Gen NOC & BSS/OSS",
      summary:
        "Strengthening India’s sovereign telecom architecture, SRIT’s BSS/OSS network platforms now power core operations and inter-operator settlement for national telecom giant BSNL.",
    },
    {
      storyNum: 6,
      category: "Digital Public Infrastructure",
      cardLabel: "KFON Digital Highway Connects 30,000 Government Institutions",
      headline: "Bridging the Last-Mile Divide Across Kerala via R-Converge OSS/BSS",
      summary:
        "In consortium with BEL, SRIT’s R-Converge software actively manages subscriber onboarding, automated billing, and partner reconciliations across Kerala’s statewide broadband grid.",
    },
    {
      storyNum: 7,
      category: "AI & Smart Mobility",
      cardLabel: "SAFE Kerala AI Traffic Network Logs Over 350,000 Violations in 72 Hours",
      headline: "Edge Computer-Vision Surveillance Enhances Highway Discipline and Safety",
      summary:
        "Real-time computer-vision algorithms deployed across highway corridors curb traffic fatalities, prompting neighboring states to evaluate similar AI-driven enforcement frameworks.",
    },
    {
      storyNum: 8,
      category: "Academic-Industry R&D",
      cardLabel: "IIT Pravartak Foundation Enters Strategic Deep-Tech Partnership with SRIT",
      headline: "Co-Engineering Sovereign Databases and Edge-AI Modules for Public Scale",
      summary:
        "Fostering collaborative academic-industrial R&D to co-engineer specialized edge-AI modules for forensic analysis and healthcare diagnostics.",
    },
    {
      storyNum: 9,
      category: "Board Governance & Leadership",
      cardLabel: "SRIT Appoints AI Industry Pioneer Col. Amit Oberoi to Board of Directors",
      headline: "Strengthening Deep-Tech & Autonomous Enterprise AI Governance",
      summary:
        "Carnot Research Co-Founder and CEO Col. Amit Oberoi joins the Board to guide SRIT’s next growth phase in autonomous enterprise AI and deep-tech government solutions.",
    },
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(caseStudies.length / itemsPerPage);

  const nextSlide = () => setCurrentIndex((p) => (p >= totalPages ? 1 : p + 1));
  const prevSlide = () => setCurrentIndex((p) => (p <= 1 ? totalPages : p - 1));

  const visibleStudies = caseStudies.slice(
    (currentIndex - 1) * itemsPerPage,
    currentIndex * itemsPerPage
  );

  return (
    <section className="relative overflow-hidden bg-slate-50 py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/4 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#079fdf]/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-indigo-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Explore insights, success stories, and updates shared by our growing partner network.</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold text-[#102b50] md:text-5xl">
              Latest <span className="text-[#079fdf]">Case Studies</span>
            </h2>
          </div>
          <BtnLink href="#" className="bg-[#102b50] text-white hover:bg-[#079fdf] border-none">
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
            {visibleStudies.map((blog) => (
              <article
                key={blog.storyNum}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-white p-7 sm:p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#079fdf]/20 border border-slate-100"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-block rounded-md bg-[#142B50] px-3 py-1.5 text-xs font-bold tracking-wide text-cyan-300">
                      {blog.category}
                    </span>
                    <span className="text-xs font-bold text-slate-400">
                      #{blog.storyNum}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-bold leading-snug text-[#142B50] group-hover:text-[#079fdf] transition-colors">
                    {blog.headline}
                  </h3>

                  <div className="mt-2 text-xs font-semibold text-[#079fdf]">
                    {blog.cardLabel}
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    {blog.summary}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Key Proof Points
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedStory(blog)}
                    className="group/btn inline-flex items-center gap-2 rounded-md bg-[#1a1a1a] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#079fdf] cursor-pointer"
                  >
                    <span>I'm Curious</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                  </button>
                </div>
              </article>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 flex items-center justify-center gap-3">
          <button
            onClick={prevSlide}
            className="grid h-10 w-10 place-items-center rounded-md bg-[#1e293b] text-white transition-colors hover:bg-[#079fdf] cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2 px-3 font-display text-lg font-bold text-white">
            <span>{currentIndex}</span>
            <span className="text-slate-500">/</span>
            <span className="text-slate-400">{totalPages}</span>
          </div>
          <button
            onClick={nextSlide}
            className="grid h-10 w-10 place-items-center rounded-md bg-[#1e293b] text-white transition-colors hover:bg-[#079fdf] cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {selectedStory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStory(null)}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative z-10 flex flex-col max-h-[85vh] w-full max-w-2xl overflow-hidden rounded-2xl bg-white text-slate-800 shadow-2xl"
            >
              <div className="border-b border-slate-200 bg-[#102b50] px-6 py-5 text-white sm:px-8">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded bg-white/10 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-cyan-300">
                    {selectedStory.category}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedStory(null)}
                    className="rounded-lg p-1.5 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
                  {selectedStory.headline}
                </h3>
                <div className="mt-1 text-xs text-cyan-200">
                  {selectedStory.cardLabel}
                </div>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8 space-y-5">
                <div className="rounded-xl border border-sky-100 bg-sky-50/70 p-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
                    Summary Snippet & Key Proof Points
                  </h4>
                  <p className="mt-2 text-sm sm:text-base leading-relaxed text-[#102b50] font-medium">
                    {selectedStory.summary}
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-100 bg-slate-50 px-6 py-3.5 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  SRIT Case Study #{selectedStory.storyNum}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedStory(null)}
                  className="rounded-lg bg-[#102b50] px-4 py-2 text-xs font-semibold text-white hover:bg-[#092b55] transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}