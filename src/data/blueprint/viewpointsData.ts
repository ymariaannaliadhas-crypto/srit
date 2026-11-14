export interface ViewpointArticle {
  id: string;
  number: number;
  categoryBadge: string;
  readTime: string;
  topicHeadline: string;
  shortDescription: string;
  sections: {
    heading: string;
    content: string;
  }[];
  keyTakeaway: string;
}

export const VIEWPOINTS_DATA: ViewpointArticle[] = [
  {
    id: "vp-1",
    number: 1,
    categoryBadge: "INDUSTRY PERSPECTIVE",
    readTime: "3 Min Read",
    topicHeadline: "From Linear Headcount to Cognitive Code: How Enterprise AI is Reshaping IT Services",
    shortDescription: "Traditional T&M models face disruption as AI automates coding and QA workflows. Growth now belongs to platform-led integrators with proprietary vertical intellectual property.",
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
    id: "vp-2",
    number: 2,
    categoryBadge: "AI ARCHITECTURE",
    readTime: "4 Min Read",
    topicHeadline: "Why the Next Wave of Enterprise AI Belongs to Edge Compute, Not Public Cloud LLMs",
    shortDescription: "In heavily regulated sectors like healthcare and state administration, compliance, data sovereignty, and real-time edge processing take precedence over generic chatbots.",
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
        content: "SRIT’s deployments demonstrate how sovereign, edge-first architectures deliver measurable public outcomes:\n\n• Automated Mobility: Computer-vision enforcement networks implemented across state corridors process hundreds of thousands of real-time events reliably, reducing human bias and road fatalities.\n• Hardened Cloud & Forensics: Dedicated private cloud environments for state forensic laboratories and defense communication grids enforce Zero-Trust access and 100% data residency.",
      },
    ],
    keyTakeaway: "True enterprise AI does not live in a browser chat window—it runs silently at the network edge, securing public data and powering real-time physical infrastructure.",
  },
  {
    id: "vp-3",
    number: 3,
    categoryBadge: "STRATEGY & GROWTH",
    readTime: "4 Min Read",
    topicHeadline: "Capitalizing on the DPI Wave: How Proprietary IP and Post-Listing Capital Drive Future Scale",
    shortDescription: "Following its NSE and BSE listing, SRIT is embedding autonomous machine intelligence into population-scale platforms across ABDM health grids, telecom OSS/BSS, and smart mobility.",
    sections: [
      {
        heading: "1. India’s Digital Public Infrastructure (DPI) Supercycle",
        content: "India’s rapid digitization—spanning the Ayushman Bharat Digital Mission (ABDM), BharatNet/statewide fiber grids, and unified municipal portals—has created sustained institutional demand for mission-critical system integrators. Unlike short-term private pilots, DPI programs span 5- to 10-year lifecycles that combine upfront turnkey deployment with predictable operations and maintenance (O&M) annuities.",
      },
      {
        heading: "2. Post-Listing Financial Muscle & Execution Readiness",
        content: "Following its ₹218.40 crore fresh-issue IPO and debut on the NSE and BSE in October 2026, SRIT strengthened its balance sheet to execute large-scale transformation mandates:\n\n• Working Capital Acceleration: Allocating ₹124 crore toward working capital enhances execution velocity across multi-state government tenders.\n• Product Modernization & R&D: Dedicated capital expenditure supports continuous upgrades to RHES, R-Converge, and AI-native analytics modules.\n• Inorganic Expansion: Financial flexibility enables targeted acquisitions of niche deep-tech and AI capabilities.",
      },
      {
        heading: "3. Three Pillars of Future Growth",
        content: "With an active order book exceeding ₹1,200 crore across 100+ ongoing projects, SRIT’s forward growth strategy centers on three compounding levers:\n\n1. Connected Healthcare Networks: Scaling NABH-certified EMR and automated insurance claims platforms across state health departments and private hospital chains.\n2. Intelligent Urban & Civic Platforms: Replicating unified municipal ERP architectures (like MP e-Nagar Palika 2.0) and AI-driven mobility grids across emerging smart cities.\n3. Next-Gen Telecom Orchestration: Expanding R-Converge OSS/BSS deployments across state fiber highways and enterprise broadband networks.",
      },
    ],
    keyTakeaway: "Combining 26+ years of mission-critical delivery with fresh public capital and proprietary AI platforms, SRIT is transitioning from a trusted system integrator into a premier architect of cognitive public infrastructure.",
  },
  {
    id: "vp-4",
    number: 4,
    categoryBadge: "DIGITAL HEALTH AI",
    readTime: "4 Min Read",
    topicHeadline: "From Passive Records to Predictive Care: How AI Transforms Interoperable Hospital Ecosystems",
    shortDescription: "Embedding clinical AI inside NABH-certified EMRs turns patient data into proactive triage, automated risk stratification, and zero-leakage claims processing.",
    sections: [
      {
        heading: "1. Beyond Digital Filing Cabinets",
        content: "For years, hospital digitization meant replacing paper files with static Electronic Medical Records (EMRs). While digital records improved storage, doctors still faced information overload across fragmented lab reports, radiology scans, and discharge summaries. Today, AI-native clinical suites turn passive patient histories into active Clinical Decision Support Systems (CDSS).",
      },
      {
        heading: "2. Intelligence Inside the Clinical Workflow",
        content: "When machine intelligence is built natively into Hospital Management Information Suites (HMIS) and radiology pipelines (RIS/PACS), healthcare providers gain real-time operational leverage:\n\n• Automated Risk Stratification: Natural language processing scans longitudinal patient encounters to flag comorbidities, drug-to-drug interactions, and readmission risks during OPD consultations.\n• Intelligent Claims & Revenue Cycle Management: Automated coding validation checks clinical documentation against insurance rules before claim submission, drastically reducing rejection rates in state-sponsored health schemes.\n• Diagnostic Triage: AI-assisted imaging workflows prioritize critical scans for radiologists, cutting turnaround times in high-volume public hospitals.",
      },
      {
        heading: "3. Built for ABDM and Population Scale",
        content: "Interoperability is the foundation of clinical AI. Operating across 2,000+ hospitals and managing over 300 million patient encounters—from state-wide health grids in Andhra Pradesh and West Bengal to national networks like ESIC—SRIT’s NABH-certified RHES and EMR suites adhere to FHIR, HL7, and Ayushman Bharat Digital Mission (ABDM) standards. This ensures clinical AI scales safely across both tertiary medical colleges and rural primary health centers.",
      },
    ],
    keyTakeaway: "The true promise of healthcare AI is not replacing clinical judgment—it is eliminating administrative friction and surfacing life-saving insights at the exact moment of care.",
  },
  {
    id: "vp-5",
    number: 5,
    categoryBadge: "TELECOM & OSS/BSS",
    readTime: "3 Min Read",
    topicHeadline: "Self-Healing Networks: How AI Automates Statewide Broadband & Last-Mile Connectivity",
    shortDescription: "Managing millions of fiber subscribers requires autonomous fault detection, zero-touch provisioning, and dynamic load routing across statewide digital highways.",
    sections: [
      {
        heading: "1. The Complexity of Open-Access Fiber Grids",
        content: "Building nationwide and statewide broadband highways—linking tens of thousands of government schools, health centers, and rural households—introduces immense operational complexity. Managing multi-tier local cable operators, dynamic bandwidth allocation, and millions of concurrent billing cycles cannot scale on legacy manual spreadsheets or fragmented ticketing tools.",
      },
      {
        heading: "2. Cognitive OSS/BSS and Predictive Telemetry",
        content: "Modern telecommunications rely on AI-driven Operations and Business Support Systems (OSS/BSS) to keep digital highways resilient:\n\n• Predictive Fault Isolation: Machine learning models analyze optical line terminal (OLT) telemetry in real time to detect signal degradation and pinpoint fiber cuts before subscribers experience prolonged outages.\n• Zero-Touch Provisioning & Settlement: Automated workflows handle customer onboarding, dynamic quality-of-service (QoS) routing, and transparent revenue-sharing settlements across thousands of last-mile partners.\n• Churn & Demand Forecasting: Usage analytics help infrastructure operators anticipate regional bandwidth spikes and optimize middle-mile capacity.",
      },
      {
        heading: "3. Orchestrating Digital Inclusion at Scale",
        content: "Through its proprietary R-Converge OSS/BSS engine, SRIT powers mission-critical connectivity initiatives—including the Kerala Fibre-Optic Network (KFON) linking 30,000+ government offices and millions of households, alongside national rail broadband ecosystems. By pairing carrier-grade billing with automated network intelligence, broadband transforms into a reliable public utility.",
      },
    ],
    keyTakeaway: "A digital highway is only as strong as the intelligence managing it. Autonomous OSS/BSS platforms ensure high-speed connectivity reaches the last mile without operational bottlenecks.",
  },
  {
    id: "vp-6",
    number: 6,
    categoryBadge: "CYBER RESILIENCE",
    readTime: "4 Min Read",
    topicHeadline: "Securing the Sovereign Backbone: Zero-Trust Defense in an Era of Automated Cyber Threats",
    shortDescription: "As threat actors deploy automated attacks, critical utilities and public registries need 24/7 AI-driven CSOC monitoring and micro-segmented Zero-Trust defense.",
    sections: [
      {
        heading: "1. Why Perimeter Security is Obsolete",
        content: "Government portals, municipal utilities, defense communication networks, and state health registries are prime targets for ransomware and state-sponsored cyber intrusions. Traditional perimeter firewalls are no longer sufficient when distributed cloud environments, mobile citizen apps, and thousands of remote field terminals access centralized databases simultaneously.",
      },
      {
        heading: "2. AI-Driven Security Operations & Zero-Trust Design",
        content: "Defending mission-critical digital public infrastructure requires shifting from reactive patching to continuous, automated threat hunting:\n\n• 24/7 Cognitive CSOC: Modern Cyber Security Operations Centers combine SIEM telemetry with behavioral anomaly detection to identify lateral movement and credential abuse in seconds rather than days.\n• Strict Micro-Segmentation & Zero-Trust: Every user, API gateway, and edge device is continuously authenticated under least-privilege access policies, preventing a localized breach from compromising core databases.\n• Privacy-by-Design Compliance: End-to-end encryption, database tokenization, and air-gapped private cloud hosting ensure strict adherence to CERT-In directives and India’s Digital Personal Data Protection (DPDP) Act.",
      },
      {
        heading: "3. Hardening Mission-Critical National Infrastructure",
        content: "Drawing on decades of experience securing sensitive environments—from Defence OFB IP-MPLS communication grids across 59 locations to statewide service delivery gateways and forensic laboratories—SRIT embeds security directly into the software engineering lifecycle, ensuring public trust remains uncompromised.",
      },
    ],
    keyTakeaway: "In public digital infrastructure, cybersecurity is not an add-on feature—it is the bedrock of citizen trust and operational continuity.",
  },
  {
    id: "vp-7",
    number: 7,
    categoryBadge: "NATIONAL AI ECOSYSTEM",
    readTime: "4 Min Read",
    topicHeadline: "Co-Engineering Sovereign AI: Bridging Deep-Tech Research and Population-Scale Execution",
    shortDescription: "As the IndiaAI Mission accelerates indigenous AI across healthcare, governance, and regional languages, established system integrators provide the execution backbone to move AI from lab pilots to state deployments.",
    sections: [
      {
        heading: "1. The 'Last-Mile' Bottleneck in National AI Adoption",
        content: "With over ₹10,300 crore committed under the IndiaAI Mission to build domestic compute capacity (38,000+ GPUs), open datasets (AIKosh), and indigenous multimodal foundation models, India has catalyzed an unprecedented wave of AI innovation. Yet across public-sector technology, a recurring execution gap persists: bridging the divide between laboratory prototypes and mission-critical production.\n\nA model trained in an academic or startup sandbox faces vastly different demands when deployed inside a state health grid or municipal network:\n• Legacy System Interoperability: Integrating modern inference engines with existing hospital databases, ERP ledgers, and state identity gateways without disrupting live operations.\n• High-Availability Engineering: Guaranteeing 99.9%+ uptime, disaster recovery, and automated failover across thousands of distributed district offices and rural health centers.\n• Regulatory & Data Compliance: Enforcing strict audit trails, role-based access, and compliance with the Digital Personal Data Protection (DPDP) Act and Safe & Trusted AI guardrails.",
      },
      {
        heading: "2. The Tri-Party Ecosystem: Academia + Sovereign Infrastructure + System Integrators",
        content: "Realizing India’s 'Make AI in India and Make AI Work for India' vision requires tight collaboration across three specialized layers:\n• Deep-Tech Research & Startups: Algorithmic R&D, domain-specific models, and foundational databases (e.g., sovereign databases, forensic analytics, and vernacular NLP).\n• Sovereign Compute & Cloud: Domestic GPU clusters, private data centers, and DR sites ensuring 100% data residency, air-gapped security, and high-throughput inference without foreign cloud dependency.\n• Enterprise System Integrators: CMMI Level 5 engineering, statewide rollout, and multi-year O&M—hardening prototypes into production software and training thousands of field operators.",
      },
      {
        heading: "3. SRIT’s Sovereign Stack: From Indigenous Databases to Sovereign Cloud",
        content: "Rather than relying solely on foreign software stacks, SRIT actively co-engineers sovereign infrastructure with premier Indian institutional and industrial leaders:\n• Academic-Industrial Co-Innovation: Through its strategic partnership with the IIT Madras Pravartak Technologies Foundation, SRIT is commercializing and scaling indigenous core technologies—such as ShaktiDB (positioned as #IndiaDB), an Indian sovereign database built for high-security, mission-critical workloads.\n• Sovereign Cloud Hosting: Working alongside Larsen & Toubro (L&T) to deliver SRIT Cloud (#IndiaCloud) on enterprise DC-DR infrastructure, ensuring state governments and regulated enterprises run AI workloads on fully sovereign, compliant Indian infrastructure.",
      },
      {
        heading: "4. Democratizing Public Services Through Vernacular & Assistive AI",
        content: "For AI to create true socio-economic impact, it must reach citizens beyond English-speaking metropolitan hubs:\n• Multilingual Citizen Interfaces: Embedding regional-language speech-to-text and natural language understanding into e-District and municipal portals allows citizens in Tier-2, Tier-3, and rural regions to access land records, welfare schemes, and civic grievances using their native voice.\n• Clinical & Forensic Force Multiplication: Pairing indigenous diagnostic and analytical models with nationwide platforms like RHES/EMR and state forensic laboratory systems empowers frontline doctors and investigators to process complex cases faster and more accurately.",
      },
    ],
    keyTakeaway: "Breakthrough research sparks innovation, but disciplined engineering delivers public impact. By uniting indigenous academic IP, sovereign cloud infrastructure, and nationwide deployment mastery, SRIT turns India’s sovereign AI vision into everyday reality.",
  },
];
