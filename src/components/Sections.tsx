import { createContext, useContext, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";
import {
  Activity,
  ArrowUpRight,
  Award,
  BookOpen,
  BrainCircuit,
  Calendar,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  Compass,
  Cpu,
  Globe,
  Hexagon,
  Layers,
  MessageCircle,
  Minus,
  Plus,
  Quote,
  Rocket,
  Router,
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
    <div className={`group flex items-center gap-3 border-b border-border py-2 lg:py-2.5 ${r ? "flex-row-reverse" : ""}`}>
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-secondary text-primary transition group-hover:bg-primary group-hover:text-primary-foreground lg:h-11 lg:w-11">
        <f.i className="h-4 w-4 lg:h-5 lg:w-5" />
      </span>
      <div className={`min-w-0 flex-1 ${r ? "text-right" : "text-left"}`}>
        <span className="text-[9px] lg:text-[10px] font-bold tracking-wider uppercase text-primary/80 block mb-0.5">
          {f.category}
        </span>
        <h4 className="font-display text-sm lg:text-[15px] font-normal text-ink leading-tight group-hover:text-primary transition-colors line-clamp-2">

          {f.title}
        </h4>
        <button
          type="button"
          onClick={() => setSelectedArticle(f)}
          className={`mt-1 inline-flex items-center gap-1 text-[10px] lg:text-[11px] font-semibold text-primary transition-all duration-300 hover:text-primary/80 group-hover:underline ${
            r ? "flex-row-reverse" : ""
          }`}
        >
          <span>Read more</span>
          <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </div>
  );

  return (
    <section className="relative overflow-hidden py-6 lg:py-10 flex items-center min-h-[85vh]">
      <img
        src={img("bg feature.png")}
        alt=""
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-center opacity-70"
      />
      <div className="relative z-10 mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          animate={{ y: [0, -5, 0], scale: [1, 1.01, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="text-center mb-6 lg:mb-8"
        >
          <Eyebrow center both>AI-Driven</Eyebrow>
          <Heading pre="The Thinking" hl="Edge" className="mt-2 lg:mt-3" />
        </motion.div>

        {/* Grid Layout */}
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
          
          {/* Left Column */}
          <div>
            {left.map((f, n) => (
              <Reveal key={f.k} delay={n * 0.08} x={-40} y={0}>
                <Item f={f} />
              </Reveal>
            ))}
          </div>

          {/* Center Image - Constrained Height to show head */}
          <div className="hidden lg:flex justify-center items-center">
            <Reveal className="relative mx-auto flex justify-center">
              <img 
                src={img("ai-feature.png")} 
                alt="AI Feature" 
                className="w-auto h-[380px] xl:h-[420px] max-w-[300px] object-contain opacity-60" 
              />
            </Reveal>
          </div>

          {/* Right Column */}
          <div>
            {right.map((f, n) => (
              <Reveal key={f.k} delay={n * 0.08} x={40} y={0}>
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

const ProjectGrowContext = createContext(false);
const PROJ_LINE = "border-[#168bc4]/70 border-dotted";

interface FutureProjectItem {
  id: string;
  domain: string;
  title: string;
  timeline: string;
  status: string;
  statusColor: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  milestones: string[];
  impact: string;
}

function ProjectNodeCard({
  project,
  delay = 0,
  onSelect,
}: {
  project: FutureProjectItem;
  delay?: number;
  onSelect: (p: FutureProjectItem) => void;
}) {
  const go = useContext(ProjectGrowContext);
  const IconComp = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, y: 15 }}
      animate={go ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.6, y: 15 }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
      className="shrink-0"
    >
      <button
        type="button"
        onClick={() => onSelect(project)}
        title={`${project.title} (${project.timeline}) — Click to view roadmap spec`}
        className="group flex min-w-[210px] sm:min-w-[230px] items-center gap-2.5 overflow-hidden rounded-lg border border-white/40 bg-[#2a2480] px-3 py-2 text-left transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-[0_0_15px_rgba(45,211,238,.35)] cursor-pointer"
      >
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#168bc4]/30 text-cyan-300 transition-colors group-hover:bg-[#168bc4] group-hover:text-white">
          <IconComp className="h-4 w-4" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="truncate text-[12px] font-semibold text-white transition-colors group-hover:text-cyan-200">
            {project.title}
          </div>
          <div className="mt-0.5 flex items-center gap-1.5 text-[10px] text-cyan-300/80">
            <span className="font-medium text-cyan-200">{project.timeline}</span>
            <span>•</span>
            <span className="truncate">{project.status}</span>
          </div>
        </div>
      </button>
    </motion.div>
  );
}

function ProjectHierarchyLabel({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const go = useContext(ProjectGrowContext);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={go ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      className="shrink-0 rounded-md bg-[#168bc4] px-4 py-2 text-center text-xs font-semibold text-white shadow-[0_0_18px_rgba(22,139,196,.35)]"
    >
      {children}
    </motion.div>
  );
}

function ProjectGroup({
  delay = 0,
  className = "",
  children,
}: {
  delay?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const go = useContext(ProjectGrowContext);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={go ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.5, delay }}
      className={`flex flex-wrap justify-center gap-2 rounded-xl border border-indigo-400/20 bg-[#13194a] p-3 ${className}`}
    >
      {children}
    </motion.div>
  );
}

function ProjectVLine({
  h = "h-8",
  delay = 0,
  className = "",
}: {
  h?: string;
  delay?: number;
  className?: string;
}) {
  const go = useContext(ProjectGrowContext);
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: go ? 1 : 0 }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
      style={{ originY: 0 }}
      className={`mx-auto w-0 shrink-0 border-l ${h} ${PROJ_LINE} ${className}`}
    />
  );
}

function ProjectHLine({
  origin = "left",
  delay = 0,
}: {
  origin?: "left" | "right";
  delay?: number;
}) {
  const go = useContext(ProjectGrowContext);
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: go ? 1 : 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      style={{ originX: origin === "left" ? 0 : 1 }}
      className={`hidden h-0 min-w-6 flex-1 border-t xl:block ${PROJ_LINE}`}
    />
  );
}

export function FutureProjects() {
  const ref = useRef<HTMLElement>(null);
  const go = useInView(ref, { once: true, amount: 0.15 });
  const [selectedProject, setSelectedProject] = useState<FutureProjectItem | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setSelectedProject(null);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [selectedProject]);

  const healthProjects: FutureProjectItem[] = [
    {
      id: "abdm-mesh",
      domain: "Digital Health AI",
      title: "ABDM 2.0 Health Mesh",
      timeline: "Q3 2026",
      status: "Pipeline Architecture",
      statusColor: "bg-emerald-50 text-emerald-700",
      icon: Activity,
      description:
        "Extending hospital EMR interoperability into autonomous clinical triage, federated predictive diagnostics, and real-time ABDM health data exchange across state grids.",
      milestones: [
        "Federated Clinical Decision Engine",
        "ABDM M3 Certified Health Grid",
        "Cross-Hospital FHIR Interoperability Mesh",
      ],
      impact: "50M+ Patient Records Target",
    },
    {
      id: "clinical-ai",
      domain: "Digital Health AI",
      title: "Predictive Clinical EMR",
      timeline: "Q4 2026",
      status: "Architecture Phase",
      statusColor: "bg-sky-50 text-sky-700",
      icon: BrainCircuit,
      description:
        "Embedding clinical AI natively into NABH-certified EMRs to automate risk stratification, bedside deterioration alerts, and intelligent dosage calculation.",
      milestones: [
        "Real-Time ICU Vital Anomaly Detection",
        "Automated Clinical Summarization",
        "SNOMED CT Semantic Entity Mapper",
      ],
      impact: "Zero-Leakage Diagnostic Triage",
    },
    {
      id: "tele-radiology",
      domain: "Digital Health AI",
      title: "Ayushman Tele-Radiology Grid",
      timeline: "2027 Roadmap",
      status: "R&D Stage",
      statusColor: "bg-blue-50 text-blue-700",
      icon: Cpu,
      description:
        "Cloud-native, edge-accelerated DICOM radiology workflow automating stroke, trauma, and tuberculosis screening for remote district public hospitals.",
      milestones: [
        "Sub-15s AI Radiology Screening",
        "DICOM-Web Edge Streaming Node",
        "District Hospital Tele-Consultation Hub",
      ],
      impact: "200+ Rural Diagnostic Centers",
    },
    {
      id: "claims-ai",
      domain: "Digital Health AI",
      title: "Zero-Leakage Claims AI",
      timeline: "2027",
      status: "In Pipeline",
      statusColor: "bg-indigo-50 text-indigo-700",
      icon: Check,
      description:
        "Automated insurance pre-authorization and claims audit engine matching medical records with government PM-JAY tariff packages in real time.",
      milestones: [
        "Auto Pre-Auth Approval Engine",
        "Fraud & Double-Billing Neutralizer",
        "Real-Time State Health Authority Reconciliation",
      ],
      impact: "100% Audit Compliance",
    },
  ];

  const cyberProjects: FutureProjectItem[] = [
    {
      id: "quantum-csoc",
      domain: "Cyber Resilience",
      title: "Post-Quantum Cyber CSOC",
      timeline: "Q4 2026",
      status: "Pilot Validation",
      statusColor: "bg-purple-50 text-purple-700",
      icon: ShieldCheck,
      description:
        "Next-generation 24/7 autonomous CSOC operations featuring post-quantum cryptography, agentic threat containment, and zero-trust sovereign defensive fabrics.",
      milestones: [
        "Quantum-Resistant Key Exchange (Kyber/Dilithium)",
        "Autonomous Micro-Segment Threat Isolation",
        "Air-Gapped Sovereign Cloud Bastion",
      ],
      impact: "Zero-Trust Sovereign Fabric",
    },
    {
      id: "sovereign-identity",
      domain: "Cyber Resilience",
      title: "Zero-Trust Sovereign Shield",
      timeline: "2027 Roadmap",
      status: "In Pipeline",
      statusColor: "bg-indigo-50 text-indigo-700",
      icon: Award,
      description:
        "Cryptographic identity mesh providing continuous biometric authentication, least-privilege role propagation, and tamper-evident audit trails for critical public registries.",
      milestones: [
        "Continuous Contextual Risk Scoring",
        "Decentralized Sovereign Credential Vault",
        "Hardware-Rooted HSM Attestation",
      ],
      impact: "Critical Infrastructure Hardening",
    },
  ];

  const telecomProjects: FutureProjectItem[] = [
    {
      id: "broadband-6g",
      domain: "Telecom & OSS/BSS",
      title: "Carrier 6G & Satellite Grid",
      timeline: "2027 Roadmap",
      status: "Strategic Scoping",
      statusColor: "bg-cyan-50 text-cyan-700",
      icon: Wifi,
      description:
        "Self-healing carrier-grade optical network automation paired with low-earth orbit (LEO) satellite backhaul for last-mile digital connectivity across remote terrains.",
      milestones: [
        "Autonomous Fault Recovery Engine",
        "LEO Satellite Low-Latency Backhaul Sync",
        "Multi-Tenancy OSS/BSS Revenue Engine",
      ],
      impact: "10,000+ Smart GPON Nodes",
    },
    {
      id: "self-healing-fiber",
      domain: "Telecom & OSS/BSS",
      title: "Autonomous Fiber OSS",
      timeline: "Q1 2027",
      status: "In Pipeline",
      statusColor: "bg-teal-50 text-teal-700",
      icon: Router,
      description:
        "AI-driven optical line supervisory system identifying fiber degradation, power dips, and localized physical cuts before service interruption occurs.",
      milestones: [
        "Dynamic Signal Re-Routing AI",
        "Zero-Touch Customer Onboarding Hub",
        "Statewide FTTH Telemetry Dashboard",
      ],
      impact: "99.999% Network Availability",
    },
  ];

  const mobilityProjects: FutureProjectItem[] = [
    {
      id: "edge-traffic",
      domain: "Smart Mobility & Transit",
      title: "Edge Vision Traffic Hub",
      timeline: "Q1 2027",
      status: "Pilot Deployment",
      statusColor: "bg-blue-50 text-blue-700",
      icon: Rocket,
      description:
        "Real-time edge computer vision for statewide intelligent transit management (ITMS), dynamic signal optimization, and automated speed infraction detection.",
      milestones: [
        "Edge ANPR & High-Speed Incident Sensing",
        "Adaptive Traffic Light Coordination",
        "Integrated Transit Command & Control Center",
      ],
      impact: "99.4% Edge Vision Accuracy",
    },
    {
      id: "green-corridor",
      domain: "Smart Mobility & Transit",
      title: "Adaptive Green Corridor",
      timeline: "2027",
      status: "Conceptual Spec",
      statusColor: "bg-sky-50 text-sky-700",
      icon: Compass,
      description:
        "Autonomous preemption routing system syncing emergency ambulance and fire transit with city-wide municipal traffic light controllers.",
      milestones: [
        "Vehicle-to-Infrastructure (V2I) Beaconing",
        "Zero-Latency Emergency Preemption",
        "Hospital Trauma Ward Transit Sync",
      ],
      impact: "50% Ambulance Transit Reduction",
    },
  ];

  const governanceProjects: FutureProjectItem[] = [
    {
      id: "citizen-ai",
      domain: "Smart E-Governance & Cloud",
      title: "Indic Citizen AI Assistant",
      timeline: "Q2 2027",
      status: "Conceptual Wireframe",
      statusColor: "bg-amber-50 text-amber-700",
      icon: MessageCircle,
      description:
        "Multimodal 22-language voice and text AI platform for automated citizen grievance redressal, welfare scheme discovery, and certificate issuance.",
      milestones: [
        "Voice-First Vernacular NLP Pipeline",
        "Direct Benefit Transfer (DBT) Verification",
        "Unified Municipal Service Integration",
      ],
      impact: "100M+ Citizens Reach",
    },
    {
      id: "land-blockchain",
      domain: "Smart E-Governance & Cloud",
      title: "Land Registry Blockchain",
      timeline: "2027",
      status: "In Pipeline",
      statusColor: "bg-orange-50 text-orange-700",
      icon: Layers,
      description:
        "Immutable cadastral map and title deed ledger preventing duplicate land encumbrance and enabling friction-free property conveyance.",
      milestones: [
        "Geo-Spatial Survey Hash Verification",
        "Smart-Contract Conveyance Deed Escrow",
        "Revenue Court Case Registry Sync",
      ],
      impact: "Zero-Fraud Land Records",
    },
    {
      id: "green-cloud",
      domain: "Smart E-Governance & Cloud",
      title: "Net-Zero Sovereign Cloud",
      timeline: "2027+",
      status: "R&D Initiative",
      statusColor: "bg-emerald-50 text-emerald-700",
      icon: Globe,
      description:
        "Carbon-aware high-performance computing clusters designed for national AI workloads with automated thermal balancing and renewable micro-grid synergy.",
      milestones: [
        "Dynamic Clean-Energy Workload Dispatch",
        "PUE < 1.15 Target Efficiency",
        "Sovereign DPDP Data Isolation",
      ],
      impact: "40% Energy Footprint Reduction",
    },
  ];

  return (
    <ProjectGrowContext.Provider value={go}>
      <section
        ref={ref}
        id="future-projects"
        className="relative overflow-hidden border-b border-white/10 bg-[#102b50] py-20 text-white"
      >
        <style>{`
          .org-grid-fp {
            background-image: radial-gradient(rgba(22,139,196,0.25) 1px, transparent 1px);
            background-size: 22px 22px;
          }
        `}</style>
        <div className="org-grid-fp pointer-events-none absolute inset-0 opacity-80" />

        <div className="relative mx-auto flex max-w-[1600px] flex-col items-center px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold text-cyan-300">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Upcoming Initiatives & Strategic Roadmap</span>
            </div>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Our Future <span className="text-[#168bc4]">Projects</span>
            </h2>
            <p className="mt-2 text-sm text-cyan-100/70 max-w-2xl mx-auto">
              Interactive architectural ecosystem of upcoming project pipelines, deep-tech research initiatives, and next-generation platforms.
            </p>
          </div>

          {/* STAGE 1: TOP (Digital Health AI) */}
          <ProjectGroup delay={0} className="max-w-[1100px]">
            {healthProjects.map((p, i) => (
              <ProjectNodeCard
                key={p.id}
                project={p}
                delay={0.2 + i * 0.1}
                onSelect={setSelectedProject}
              />
            ))}
          </ProjectGroup>
          <ProjectVLine h="h-8" delay={1.0} />
          <ProjectHierarchyLabel delay={1.4}>Digital Health AI</ProjectHierarchyLabel>
          <ProjectVLine h="h-10" delay={1.7} />

          {/* STAGE 2: SRIT CENTER + SIDE BRANCHES */}
          <div className="flex w-full flex-col items-center xl:flex-row">
            {/* LEFT: Cyber Resilience */}
            <div className="flex flex-col items-center xl:flex-1 xl:flex-row">
              <ProjectGroup delay={3.7} className="shrink-0">
                {cyberProjects.map((p, i) => (
                  <ProjectNodeCard
                    key={p.id}
                    project={p}
                    delay={3.9 + i * 0.1}
                    onSelect={setSelectedProject}
                  />
                ))}
              </ProjectGroup>
              <ProjectVLine h="h-8" delay={3.4} className="xl:hidden" />
              <ProjectHLine origin="right" delay={3.4} />
              <ProjectHierarchyLabel delay={3.0}>Cyber Resilience</ProjectHierarchyLabel>
              <ProjectHLine origin="right" delay={2.5} />
              <ProjectVLine h="h-8" delay={2.5} className="xl:hidden" />
            </div>

            {/* CENTER HUB */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={go ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.8, delay: 2.0, type: "spring" }}
              className="my-4 flex h-32 w-44 shrink-0 flex-col items-center justify-center rounded-2xl border border-cyan-200/40 bg-gradient-to-br from-[#168bc4] to-[#0c2140] shadow-[0_0_35px_rgba(22,139,196,.35)] xl:my-0"
            >
              <strong className="text-3xl font-extrabold text-white tracking-wider">SRIT</strong>
              <span className="mt-1 text-[11px] font-bold uppercase tracking-[.2em] text-cyan-100">
                FUTURE PROJECTS
              </span>
              <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-widest text-cyan-300">
                ROADMAP
              </span>
            </motion.div>

            {/* RIGHT: Telecom & 6G Broadband */}
            <div className="flex flex-col items-center xl:flex-1 xl:flex-row">
              <ProjectVLine h="h-8" delay={2.5} className="xl:hidden" />
              <ProjectHLine origin="left" delay={2.5} />
              <ProjectHierarchyLabel delay={3.0}>Telecom & 6G Broadband</ProjectHierarchyLabel>
              <ProjectHLine origin="left" delay={3.4} />
              <ProjectVLine h="h-8" delay={3.4} className="xl:hidden" />
              <ProjectGroup delay={3.7} className="shrink-0">
                {telecomProjects.map((p, i) => (
                  <ProjectNodeCard
                    key={p.id}
                    project={p}
                    delay={3.9 + i * 0.1}
                    onSelect={setSelectedProject}
                  />
                ))}
              </ProjectGroup>
            </div>
          </div>

          {/* STAGE 3: BOTTOM T-SPLIT */}
          <ProjectVLine h="h-12" delay={4.6} />

          <div className="relative grid w-full grid-cols-1 gap-y-4 xl:grid-cols-2">
            {/* Horizontal bar spreading from the centre */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: go ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 5.1, ease: "easeOut" }}
              style={{ originX: 0.5 }}
              className={`pointer-events-none absolute left-1/4 right-1/4 top-0 hidden border-t xl:block ${PROJ_LINE}`}
            />

            {/* BOTTOM-LEFT: Smart Mobility */}
            <div className="flex flex-col items-center">
              <ProjectVLine h="h-8" delay={5.7} />
              <ProjectHierarchyLabel delay={6.1}>Smart Mobility & Transit</ProjectHierarchyLabel>
              <ProjectVLine h="h-8" delay={6.4} />
              <ProjectGroup delay={6.8}>
                {mobilityProjects.map((p, i) => (
                  <ProjectNodeCard
                    key={p.id}
                    project={p}
                    delay={7.0 + i * 0.1}
                    onSelect={setSelectedProject}
                  />
                ))}
              </ProjectGroup>
            </div>

            {/* BOTTOM-RIGHT: Smart E-Governance & Cloud */}
            <div className="flex flex-col items-center">
              <ProjectVLine h="h-8" delay={5.7} />
              <ProjectHierarchyLabel delay={6.1}>Smart E-Governance & Cloud</ProjectHierarchyLabel>
              <ProjectVLine h="h-8" delay={6.4} />
              <ProjectGroup delay={6.8} className="max-w-[720px]">
                {governanceProjects.map((p, i) => (
                  <ProjectNodeCard
                    key={p.id}
                    project={p}
                    delay={7.0 + i * 0.08}
                    onSelect={setSelectedProject}
                  />
                ))}
              </ProjectGroup>
            </div>
          </div>

          {/* Status Note */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-lg border border-cyan-400/20 bg-[#13194a]/90 px-4 py-2 text-xs text-cyan-200 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>
                <strong>Placeholder Wireframe Active:</strong> Click any initiative node to explore roadmap specifications. Detailed pipeline inputs pending from SRIT Strategy Team.
              </span>
            </div>
          </div>
        </div>

        {/* Modal for Project Detail */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 15 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative z-10 flex flex-col max-h-[85vh] w-full max-w-2xl overflow-hidden rounded-2xl bg-white text-slate-800 shadow-2xl"
              >
                {/* Modal Header */}
                <div className="border-b border-slate-200 bg-[#102b50] px-6 py-5 text-white sm:px-8">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2.5">
                      <span className="rounded bg-white/10 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-cyan-300">
                        {selectedProject.domain}
                      </span>
                      <span className="rounded border border-cyan-400/40 bg-cyan-900/40 px-2 py-0.5 text-[11px] font-semibold text-cyan-200">
                        {selectedProject.timeline}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(null)}
                      className="rounded-lg p-1.5 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
                    {selectedProject.title}
                  </h3>
                  <div className="mt-1 text-xs text-cyan-200">
                    Status: <span className="font-semibold text-white">{selectedProject.status}</span>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8 space-y-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Architectural Overview
                    </h4>
                    <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-700">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#102b50]">
                      Key Milestones & Focus Areas
                    </h4>
                    <div className="mt-3 space-y-2">
                      {selectedProject.milestones.map((m, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <Check className="h-4 w-4 text-[#168bc4] shrink-0 mt-0.5" />
                          <span>{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-sky-50 border border-sky-100 p-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                      Target Scale / Impact
                    </span>
                    <span className="font-display text-sm font-bold text-[#102b50]">
                      {selectedProject.impact}
                    </span>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="border-t border-slate-100 bg-slate-50 px-6 py-3.5 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">
                    SRIT Strategy & Project Pipeline
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
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
    </ProjectGrowContext.Provider>
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
        {/* Decorative background grid and gradients */}
        <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(#079fdf_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-[#079fdf]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-[#102b50]/10 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
          {/* PART A: SPLIT FEATURE SECTION */}
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Column: Headline & Intro */}
            <Reveal x={-40} y={0}>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#079fdf]/30 bg-[#079fdf]/10 px-3.5 py-1 text-xs font-semibold text-[#079fdf]">
                <BrainCircuit className="h-3.5 w-3.5" />
                <span>AI-Native Engineering</span>
              </div>

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

            {/* Right Column: Interactive Feature Card Preview */}
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

                {/* Quote Teaser */}
                <blockquote className="mt-6 border-l-4 border-[#079fdf] bg-slate-50/80 p-4 rounded-r-xl">
                  <p className="font-display text-sm font-semibold italic text-[#102b50] leading-snug">
                    "In an era of cognitive automation, adding an AI feature on top of legacy code is no longer enough. SRIT builds intelligence directly into the system layer."
                  </p>
                </blockquote>

                {/* Mini capabilities matrix */}
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

      {/* PART B: PROOF METRICS RIBBON (FULL BLEED EDGE-TO-EDGE, NO WHITE ON SIDES) */}
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

      {/* LONG-FORM DETAIL DRAWER / 'KNOW MORE' MODAL */}
      <AnimatePresence>
        {isDrawerOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-end p-0">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDrawerOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            {/* Slide-out Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative z-10 flex h-full w-full max-w-2xl flex-col bg-white shadow-2xl"
            >
              {/* Drawer Header */}
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

              {/* Drawer Content */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-slate-700">
                {/* Executive Pull-Quote */}
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

                {/* Proof Metrics Snapshot inside Drawer */}
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

              {/* Drawer Footer */}
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
    <section className="relative isolate overflow-hidden bg-[#f4f9fd] py-20">
{/* Soft light background with animated rays */}
<div className="pointer-events-none absolute inset-0 overflow-hidden">

  {/* Soft blue ambient glow */}
  <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-sky-200/40 blur-[120px]" />

  <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-100/50 blur-[120px]" />

  {/* Moving sunlight rays */}
  <motion.div
    animate={{ x: ["-15%", "15%", "-15%"], opacity: [0.3, 0.6, 0.3] }}
    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
    className="absolute -top-1/2 left-1/4 h-[200%] w-[35%] rotate-[25deg] bg-gradient-to-r from-transparent via-white/80 to-transparent blur-2xl"
  />

  <motion.div
    animate={{ x: ["15%", "-15%", "15%"], opacity: [0.2, 0.45, 0.2] }}
    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
    className="absolute -top-1/2 right-1/4 h-[200%] w-[25%] rotate-[25deg] bg-gradient-to-r from-transparent via-sky-200/50 to-transparent blur-2xl"
  />

</div>

      <div className="relative z-10 mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Explore insights, success stories, and updates shared by our growing partner network.</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold text-[#142B50] md:text-5xl">
              Latest <span className="text-[#079fdf]">Case Studies</span>
            </h2>
          </div>
          <BtnLink href="#" className="bg-[#142B50] text-white hover:bg-[#079fdf] border-none">
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
            className="grid h-10 w-10 place-items-center rounded-md bg-[#142B50] text-white transition-colors hover:bg-[#079fdf] cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2 px-3 font-display text-lg font-bold text-[#142B50]">
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

      {/* Story Detail Modal */}
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

export function ClientLogoWall() {
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
  const marqueeLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section id="clients-logo-wall" className="relative overflow-hidden bg-slate-50/70 pt-10 pb-10 sm:pt-12 sm:pb-12 border-t border-slate-200/80">
      <style>{`
        @keyframes scroll-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: scroll-marquee 45s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Section Header */}
      <div className="relative mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8 mb-6">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#079fdf]/30 bg-[#079fdf]/10 px-3.5 py-1 text-xs font-semibold text-[#079fdf]">
            <Award className="h-3.5 w-3.5" />
            <span>Trusted by Industry Leaders & Governments</span>
          </div>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-[#102b50] sm:text-4xl">
            Our <span className="text-[#079fdf]">Clients</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Powering mission-critical platforms across population scale for sovereign departments, national telecom operators, state healthcare grids, and Fortune 500 enterprises.
          </p>
        </div>
      </div>

      {/* Infinite Logo Marquee Strip - ZERO EXCESS TOP/BOTTOM GAP, BIGGER LOGOS */}
      <div className="relative flex h-[76px] sm:h-[86px] md:h-[96px] w-full items-center overflow-hidden border-y border-slate-200/80 bg-white shadow-xs">
        <div className="flex w-max animate-marquee items-center gap-4 sm:gap-6 md:gap-8">
          {marqueeLogos.map((logo, index) => (
            <div
              key={`${logo}-${index}`}
              className="flex h-full w-[150px] sm:w-[180px] md:w-[210px] shrink-0 items-center justify-center px-1"
            >
              <img
                src={img(logo)}
                alt={`SRIT client partner ${index + 1}`}
                className="h-[110px] sm:h-[125px] md:h-[135px] w-auto max-w-[150px] sm:max-w-[180px] md:max-w-[200px] object-contain transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-28 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-28 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
}

export const TrustedIndustries = ClientLogoWall;

// ─────────────────────────────────────────────────────────────
// CAREERS SECTION  — Infosys-inspired enterprise design
// ─────────────────────────────────────────────────────────────
export function CareersSection() {
  const tracks = [
    {
      icon: BrainCircuit,
      title: "AI & Deep-Tech",
      desc: "Build sovereign AI, edge computer-vision, and LLM pipelines powering real India.",
      roles: "AI Engineer · CV Engineer · ML Ops",
      cta: "Explore AI Roles",
      accent: "#079fdf",
    },
    {
      icon: Layers,
      title: "Cloud & Infrastructure",
      desc: "Architect and operate SRIT Cloud — India's sovereign enterprise hosting backbone.",
      roles: "Cloud Architect · DevOps · SRE",
      cta: "Explore Cloud Roles",
      accent: "#0ea5e9",
    },
    {
      icon: Globe,
      title: "Enterprise Delivery",
      desc: "Lead mission-critical programmes across healthcare, telecom, and e-governance.",
      roles: "Delivery Lead · BA · Programme Mgr",
      cta: "Explore Delivery Roles",
      accent: "#38bdf8",
    },
    {
      icon: Activity,
      title: "Digital Health",
      desc: "Transform clinical workflows and patient outcomes across 2,000+ hospitals.",
      roles: "Health-Tech Analyst · ABDM Specialist",
      cta: "Explore Health Roles",
      accent: "#079fdf",
    },
  ];

  const stats = [
    { value: "CMMI L5",  label: "Process Maturity" },
    { value: "20+",      label: "Countries" },
    { value: "₹218 Cr", label: "NSE & BSE Listed" },
    { value: "350K+",    label: "CV Events / 72 hrs" },
  ];

  return (
    <section id="careers" className="relative overflow-hidden bg-white">

      {/* ══════════════════════════════════════════════
          HERO — Full-width photo + dark overlay + left-aligned text
          (Infosys-style: big image, bold white headline, single CTA)
      ══════════════════════════════════════════════ */}
      <div className="relative h-[520px] sm:h-[580px] md:h-[640px] w-full overflow-hidden">
        {/* Background photo */}
        <img
          src={img("ai-feature.jpeg")}
          alt="SRIT Careers — Engineering India's Digital Future"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        {/* Dark gradient overlay — heavier on left for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050e1f]/90 via-[#050e1f]/65 to-[#050e1f]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050e1f]/60 via-transparent to-transparent" />

        {/* Hero text — left-aligned, vertically centred */}
        <div className="relative flex h-full items-center">
          <div className="mx-auto w-full max-w-[1300px] px-6 sm:px-8 lg:px-12">
            <div className="max-w-[600px]">
              {/* Eyebrow */}
              <div className="mb-5 inline-flex items-center gap-2 rounded-sm border-l-2 border-[#079fdf] bg-[#079fdf]/10 pl-3 pr-4 py-1.5 backdrop-blur-sm">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#79d4f7]">
                  Careers at SRIT India
                </span>
              </div>

              {/* Headline */}
              <h2 className="font-display text-4xl sm:text-5xl md:text-[3.5rem] font-extrabold leading-[1.06] tracking-tight text-white">
                If engineering India&rsquo;s future<br className="hidden sm:block" />
                <span className="text-[#38bdf8]"> is your calling —</span>
                <br />you belong here.
              </h2>

              <p className="mt-5 text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-[500px]">
                Join a CMMI Level&nbsp;5 powerhouse building sovereign AI, healthcare, telecom and e-governance at population scale across 20+ countries.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://sritindia.in/careers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#079fdf] px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-[#0284c7] hover:-translate-y-0.5 shadow-lg shadow-[#079fdf]/30"
                >
                  Explore Careers
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="mailto:careers@sritindia.in"
                  className="inline-flex items-center gap-2 border border-white/30 bg-white/8 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/15 hover:border-white/50 hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4 w-4" />
                  Contact Talent Team
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stat bar — floated over the bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#079fdf]">
          <div className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-2 divide-x divide-white/20 sm:grid-cols-4">
              {stats.map(({ value, label }) => (
                <div key={label} className="flex flex-col items-center py-4 px-4 text-center">
                  <span className="text-xl sm:text-2xl font-extrabold text-white leading-none">{value}</span>
                  <span className="mt-1 text-[11px] font-semibold uppercase tracking-widest text-white/70">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          AUDIENCE / TRACK CARDS — Infosys-style 4-column grid
          Clean white background, card with coloured top border
      ══════════════════════════════════════════════ */}
      <div className="bg-[#f5f7fa] border-b border-slate-200">
        <div className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-12 py-16 md:py-20">

          {/* Section label */}
          <div className="mb-10 flex items-center gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#079fdf]">What you&rsquo;ll build</p>
              <h3 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#102b50] tracking-tight">
                Choose your impact area
              </h3>
            </div>
            <div className="ml-auto hidden sm:flex items-center gap-2 text-sm text-slate-500">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Actively hiring across all tracks
            </div>
          </div>

          {/* Track cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {tracks.map(({ icon: Icon, title, desc, roles, cta, accent }) => (
              <a
                key={title}
                href="https://sritindia.in/careers"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col bg-white border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-transparent overflow-hidden"
              >
                {/* Coloured top bar */}
                <div className="h-1 w-full" style={{ background: accent }} />

                <div className="flex flex-col flex-1 p-6">
                  {/* Icon */}
                  <div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${accent}18` }}
                  >
                    <Icon className="h-6 w-6" style={{ color: accent }} />
                  </div>

                  {/* Title */}
                  <h4 className="text-base font-extrabold text-[#102b50] leading-tight group-hover:text-[#079fdf] transition-colors duration-200">
                    {title}
                  </h4>

                  {/* Description */}
                  <p className="mt-2 text-[13px] text-slate-500 leading-relaxed flex-1">
                    {desc}
                  </p>

                  {/* Roles pills */}
                  <p className="mt-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                    {roles}
                  </p>

                  {/* CTA link */}
                  <div className="mt-5 flex items-center gap-1 text-[13px] font-bold transition-colors duration-200" style={{ color: accent }}>
                    {cta}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          BOTTOM BANNER — "Don't see your role?" light strip
      ══════════════════════════════════════════════ */}
      <div className="bg-white border-b border-slate-100">
        <div className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-12 py-10 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="text-sm font-bold text-[#102b50]">Don&rsquo;t see the right role?</p>
            <p className="mt-0.5 text-[13px] text-slate-500">
              Send your CV to our talent team — we hire for character and craft.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href="mailto:careers@sritindia.in"
              className="inline-flex items-center gap-2 border border-[#079fdf] px-5 py-2.5 text-sm font-bold text-[#079fdf] transition-all duration-200 hover:bg-[#079fdf] hover:text-white"
            >
              <MessageCircle className="h-4 w-4" />
              Email Talent Team
            </a>
            <a
              href="https://sritindia.in/careers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#102b50] px-5 py-2.5 text-sm font-bold text-white transition-all duration-200 hover:bg-[#0d2240]"
            >
              All Open Positions
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

    </section>
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