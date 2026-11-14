import type { SearchItem } from "./types";

export const SEARCH_INDEX: SearchItem[] = [
  // ==========================================
  // 1. THE 4 FLAGSHIP SOLUTION ARCHITECTURES
  // ==========================================
  {
    id: "flagship-connected-care",
    title: "Connected Care: ABHA & EMR Standards (RHES & SiaH)",
    category: "solutions",
    categoryLabel: "Flagship Solution",
    subCategory: "Digital Health DPI",
    description:
      "Interoperable Digital Health Infrastructure at Population Scale. NABH-certified RHES, AbHIS, Infinity PACS/RIS, and SiaH AI Health Analytics.",
    keywords: [
      "connected care",
      "abha",
      "emr",
      "rhes",
      "abhis",
      "pacs",
      "siah",
      "clinical ai",
      "abdm",
      "digital health",
      "andhra health",
      "west bengal health",
      "esic",
      "nimhans"
    ],
    synonyms: ["hospital software", "ayushman bharat", "health records", "clinical decision support"],
    badge: "ABDM Ready",
    url: "#connected-care",
    actionType: "scroll",
    metadata: {
      iconName: "Activity",
      highlights: ["2,000+ Hospitals", "300M+ Encounters", "20M+ Records"],
      targetId: "connected-care"
    }
  },
  {
    id: "flagship-urban-mobility",
    title: "AI-First Public Administration & Urban Mobility (SAFE Kerala)",
    category: "solutions",
    categoryLabel: "Flagship Solution",
    subCategory: "Smart Governance",
    description:
      "Intelligent governance platforms & real-time urban analytics. MP e-Nagar Palika 2.0 (417 ULBs), SAFE Kerala automated AI traffic vision, and digital forensic laboratory ERP.",
    keywords: [
      "urban mobility",
      "safe kerala",
      "mp e-nagar palika",
      "traffic ai",
      "anpr",
      "forensic erp",
      "bpas",
      "keltron",
      "smart city",
      "e-governance",
      "ulb"
    ],
    synonyms: ["traffic enforcement", "municipal erp", "smart city ai", "public administration"],
    badge: "National Award",
    url: "#urban-mobility",
    actionType: "scroll",
    metadata: {
      iconName: "Landmark",
      highlights: ["417 ULBs Unified", "350,000+ Violations in 72h", "78+ State Programs"],
      targetId: "urban-mobility"
    }
  },
  {
    id: "flagship-digital-highways",
    title: "Statewide Digital Highways: Next-Gen OSS/BSS Networks (KFON)",
    category: "solutions",
    categoryLabel: "Flagship Solution",
    subCategory: "Telecom & DPI",
    description:
      "Carrier-grade BSS/OSS platforms for broadband infrastructure. R-Converge engine powering KFON, BSNL Network Operating Centre, and 18,000 SBI ATM cellular links.",
    keywords: [
      "digital highways",
      "kfon",
      "r-converge",
      "broadband",
      "railtel",
      "bsnl",
      "oss",
      "bss",
      "telecom",
      "sbi atm",
      "fiber network",
      "optical fiber"
    ],
    synonyms: ["state broadband", "isp billing", "network orchestration", "middle mile"],
    badge: "Carrier Grade",
    url: "#digital-highways",
    actionType: "scroll",
    metadata: {
      iconName: "Network",
      highlights: ["30,000+ km Fiber", "30,000 Institutions", "18,000 ATMs"],
      targetId: "digital-highways"
    }
  },
  {
    id: "flagship-zero-trust-csoc",
    title: "Zero-Trust CSOC Architectures for Critical Utilities",
    category: "solutions",
    categoryLabel: "Flagship Solution",
    subCategory: "Cyber Defense",
    description:
      "Hardened cybersecurity & resilient public infrastructure defense with 24/7 Managed CSOC, micro-segmentation, DPDP Act compliance, and Defence OFB COMNET 2.0.",
    keywords: [
      "zero-trust",
      "csoc",
      "cyber security",
      "dpdp act",
      "ofb comnet",
      "siem",
      "defense security",
      "sovereignty",
      "vapt",
      "encryption",
      "data protection"
    ],
    synonyms: ["security operations center", "data sovereignty", "hardened defense", "cyber resilience"],
    badge: "24/7 Defense",
    url: "#zero-trust-csoc",
    actionType: "scroll",
    metadata: {
      iconName: "ShieldAlert",
      highlights: ["100% Data Sovereignty", "59 Defense Sites", "DPDP Compliant"],
      targetId: "zero-trust-csoc"
    }
  },

  // ==========================================
  // 2. KNOWLEDGE CENTER: THE THINKING EDGE (7 VIEWPOINTS)
  // ==========================================
  {
    id: "vp-sovereign-ai-viewpoints",
    title: "The Thinking Edge: 7 Executive Viewpoints on Sovereign AI",
    category: "knowledge",
    categoryLabel: "Knowledge Center",
    subCategory: "Executive Insights",
    description:
      "Deep-dive viewpoints on Post-Linear IT services, Edge Compute vs Public LLMs, DPI wave, ShaktiDB #IndiaDB, and Sovereign Cloud.",
    keywords: ["the thinking edge", "viewpoints", "sovereign ai", "edge compute", "cognitive code", "shaktidb", "indiadb"],
    synonyms: ["articles", "whitepapers", "strategic outlook", "thought leadership"],
    badge: "7 Viewpoints",
    url: "#the-thinking-edge",
    actionType: "scroll",
    metadata: {
      iconName: "BookOpen",
      highlights: ["7 Articles", "Executive Research", "Edge AI Focus"],
      targetId: "the-thinking-edge"
    }
  },
  {
    id: "vp-1",
    title: "Viewpoint 1: From Linear Headcount to Cognitive Code",
    category: "knowledge",
    categoryLabel: "Knowledge Center",
    subCategory: "Industry Perspective",
    description:
      "How Enterprise AI is reshaping IT services: moving away from the billable headcount pyramid toward proprietary vertical IP and platform-led automation.",
    keywords: ["linear headcount", "cognitive code", "t&m disruption", "it pyramid", "outcome-linked pricing", "proprietary ip", "automation"],
    synonyms: ["it services disruption", "billable hours vs platforms", "generative ai coding"],
    badge: "3 Min Read",
    url: "#vp-1",
    actionType: "scroll",
    metadata: { iconName: "Cpu", targetId: "vp-1" }
  },
  {
    id: "vp-2",
    title: "Viewpoint 2: Next Wave of Enterprise AI Belongs to Edge Compute",
    category: "knowledge",
    categoryLabel: "Knowledge Center",
    subCategory: "AI Architecture",
    description:
      "Why public cloud LLMs fail in regulated public sectors: the necessity of sovereign edge compute, air-gapped clinical models, offline deterministic latency, and DPDP compliance.",
    keywords: ["edge compute", "public cloud llm", "data sovereignty", "dpdp act", "air-gapped ai", "computer vision", "sovereign edge"],
    synonyms: ["on-premise ai", "edge inference", "private cloud llm"],
    badge: "4 Min Read",
    url: "#vp-2",
    actionType: "scroll",
    metadata: { iconName: "Cpu", targetId: "vp-2" }
  },
  {
    id: "vp-3",
    title: "Viewpoint 3: Capitalizing on the DPI Wave & Post-Listing Capital",
    category: "knowledge",
    categoryLabel: "Knowledge Center",
    subCategory: "Strategy & Growth",
    description:
      "How SRIT's ₹218.40 Cr IPO and ₹1,200+ Cr active order book drive long-term annuity execution across ABDM health grids, municipal ERPs, and state broadband.",
    keywords: ["dpi wave", "digital public infrastructure", "ipo", "post-listing", "order book", "working capital", "annuity model"],
    synonyms: ["growth strategy", "public capital", "infrastructure annuity"],
    badge: "4 Min Read",
    url: "#vp-3",
    actionType: "scroll",
    metadata: { iconName: "TrendingUp", targetId: "vp-3" }
  },
  {
    id: "vp-4",
    title: "Viewpoint 4: From Passive Records to Predictive Care (Clinical AI)",
    category: "knowledge",
    categoryLabel: "Knowledge Center",
    subCategory: "Digital Health AI",
    description:
      "Embedding clinical decision support (CDSS) inside NABH-certified EMRs: automated comorbidity risk stratification, zero-leakage claims, and ABDM interoperability.",
    keywords: ["predictive care", "clinical ai", "cdss", "rhes", "emr", "claims validation", "risk stratification", "abdm scale"],
    synonyms: ["ai in healthcare", "hospital clinical ai", "intelligent claims"],
    badge: "4 Min Read",
    url: "#vp-4",
    actionType: "scroll",
    metadata: { iconName: "Activity", targetId: "vp-4" }
  },
  {
    id: "vp-5",
    title: "Viewpoint 5: Self-Healing Networks in Statewide Broadband",
    category: "knowledge",
    categoryLabel: "Knowledge Center",
    subCategory: "Telecom & OSS/BSS",
    description:
      "Managing millions of fiber subscribers with cognitive OSS/BSS: predictive fiber cut isolation, zero-touch partner provisioning, and dynamic load routing via R-Converge.",
    keywords: ["self-healing networks", "oss", "bss", "predictive telemetry", "fiber cuts", "zero touch provisioning", "r-converge", "kfon"],
    synonyms: ["autonomous telecom", "fiber fault detection", "telecom network ai"],
    badge: "3 Min Read",
    url: "#vp-5",
    actionType: "scroll",
    metadata: { iconName: "Network", targetId: "vp-5" }
  },
  {
    id: "vp-6",
    title: "Viewpoint 6: Securing the Sovereign Backbone (Zero-Trust CSOC)",
    category: "knowledge",
    categoryLabel: "Knowledge Center",
    subCategory: "Cyber Resilience",
    description:
      "Defending critical public utilities with 24/7 AI-driven CSOC, micro-segmented Zero-Trust boundaries, and continuous CERT-In & DPDP privacy compliance.",
    keywords: ["securing sovereign backbone", "zero-trust", "csoc", "threat hunting", "micro-segmentation", "cert-in", "ofb comnet"],
    synonyms: ["cyber defense", "critical utility security", "government security operations"],
    badge: "4 Min Read",
    url: "#vp-6",
    actionType: "scroll",
    metadata: { iconName: "ShieldAlert", targetId: "vp-6" }
  },
  {
    id: "vp-7",
    title: "Viewpoint 7: Co-Engineering Sovereign AI: ShaktiDB & Sovereign Cloud",
    category: "knowledge",
    categoryLabel: "Knowledge Center",
    subCategory: "National AI Ecosystem",
    description:
      "Bridging deep-tech research and public scale: commercializing ShaktiDB (#IndiaDB) with IIT Madras Pravartak and scaling SRIT Cloud (#IndiaCloud) with Larsen & Toubro.",
    keywords: [
      "co-engineering sovereign ai",
      "shaktidb",
      "indiadb",
      "indiacloud",
      "iit madras pravartak",
      "larsen toubro",
      "l&t",
      "sovereign cloud",
      "vernacular ai",
      "indiaai mission"
    ],
    synonyms: ["indigenous database", "indian sovereign ai", "iit madras partnership"],
    badge: "4 Min Read",
    url: "#vp-7",
    actionType: "scroll",
    metadata: { iconName: "Cpu", targetId: "vp-7" }
  },

  // ==========================================
  // 3. OUR FUTURE PROJECTS
  // ==========================================
  {
    id: "fp-sovereign-cloud",
    title: "Future Project: Sovereign AI Cloud (#IndiaCloud with L&T)",
    category: "knowledge",
    categoryLabel: "Future Projects",
    subCategory: "Sovereign Infrastructure",
    description:
      "Partnering with Larsen & Toubro (L&T) to scale SRIT Cloud across enterprise data centers with active disaster recovery (DR) and 100% data residency.",
    keywords: ["future project", "sovereign cloud", "indiacloud", "larsen toubro", "l&t", "datacenter", "dr site", "data residency"],
    badge: "Under Deployment",
    url: "#future-projects",
    actionType: "scroll",
    metadata: { iconName: "Cloud", targetId: "future-projects" }
  },
  {
    id: "fp-shaktidb",
    title: "Future Project: ShaktiDB (#IndiaDB) Sovereign Database Rollout",
    category: "knowledge",
    categoryLabel: "Future Projects",
    subCategory: "Deep-Tech R&D",
    description:
      "Strategic deep-tech alliance with IIT Madras Pravartak Technologies Foundation to commercialize and scale ShaktiDB for national defense and governance registries.",
    keywords: ["shaktidb", "indiadb", "iit madras", "pravartak", "sovereign database", "defense database", "secure db"],
    badge: "Active Pilot",
    url: "#future-projects",
    actionType: "scroll",
    metadata: { iconName: "Database", targetId: "future-projects" }
  },
  {
    id: "fp-abdm-interop",
    title: "Future Project: Next-Gen ABDM Unified State Health Interoperability",
    category: "knowledge",
    categoryLabel: "Future Projects",
    subCategory: "Digital Health AI",
    description:
      "Integrating predictive clinical triage, comorbidity risk modeling (SiaH AI), and automated claims adjudication into upcoming state health transformations.",
    keywords: ["abdm interoperability", "abha id", "siah ai", "predictive triage", "state health grid", "claims adjudication"],
    badge: "Upcoming Rollout",
    url: "#future-projects",
    actionType: "scroll",
    metadata: { iconName: "Activity", targetId: "future-projects" }
  },

  // ==========================================
  // 4. TOP STORIES & CORPORATE NEWSROOM
  // ==========================================
  {
    id: "news-ipo-listing",
    title: "NSE & BSE Historic Listing Debut (₹218.40 Cr IPO)",
    category: "investors",
    categoryLabel: "Investor Relations",
    subCategory: "Corporate Milestone",
    description:
      "SRIT celebrated its official listing on NSE and BSE following an oversubscribed ₹218.40 crore public offering to accelerate healthcare & AI scale.",
    keywords: ["ipo", "nse", "bse", "listing", "capital markets", "stock exchange", "public offering", "investor", "544256"],
    synonyms: ["share price", "listing date", "equity capital", "stock symbol"],
    badge: "NSE/BSE Listed",
    url: "/investor",
    actionType: "route",
    metadata: {
      iconName: "TrendingUp",
      highlights: ["₹218.40 Cr Raised", "₹124 Cr Working Capital", "October 2026 Listing"],
      targetId: "investor"
    }
  },
  {
    id: "news-national-egov-award",
    title: "National e-Governance Award: MP e-Nagar Palika 2.0 (417 ULBs)",
    category: "knowledge",
    categoryLabel: "Newsroom",
    subCategory: "National Award",
    description:
      "Unifying municipal operations and citizen delivery across all 417 Urban Local Bodies in Madhya Pradesh, honored with the National e-Governance Award.",
    keywords: ["national e-governance award", "mp e-nagar palika", "madhya pradesh", "417 ulb", "municipal award", "govtech"],
    badge: "National Award",
    url: "#newsroom",
    actionType: "scroll",
    metadata: { iconName: "Award", targetId: "newsroom" }
  },
  {
    id: "news-rhes-nabh-cert",
    title: "Government of India Endorsement: RHES & EMR Receive NABH Accreditation",
    category: "knowledge",
    categoryLabel: "Newsroom",
    subCategory: "Digital Health Accreditation",
    description:
      "SRIT's flagship hospital suite (RHES) and Electronic Medical Record (EMR) received national quality accreditation under the Government of India.",
    keywords: ["nabh accreditation", "rhes certified", "emr certified", "government endorsement", "clinical quality"],
    badge: "NABH Certified",
    url: "#newsroom",
    actionType: "scroll",
    metadata: { iconName: "ShieldCheck", targetId: "newsroom" }
  },
  {
    id: "news-lt-partnership",
    title: "Strategic Alliance: Larsen & Toubro (L&T) and SRIT for Cloud & AI",
    category: "knowledge",
    categoryLabel: "Newsroom",
    subCategory: "Strategic Alliance",
    description:
      "Expanding high-performance computing and enterprise sovereign hosting, SRIT partnered with L&T to launch SRIT Cloud and showcased joint solutions at AI Impact Summit.",
    keywords: ["larsen toubro", "l&t", "srit cloud", "ai impact summit", "enterprise cloud", "sovereign cloud"],
    badge: "Alliance",
    url: "#newsroom",
    actionType: "scroll",
    metadata: { iconName: "Cloud", targetId: "newsroom" }
  },
  {
    id: "news-bsnl-noc",
    title: "SRIT Powers BSNL’s Next-Gen Network Operating Centre (NOC)",
    category: "knowledge",
    categoryLabel: "Newsroom",
    subCategory: "Telecom Infrastructure",
    description:
      "Strengthening India's sovereign telecom backbone with Next-Gen NOC and BSS/OSS inter-operator settlement for national operator BSNL.",
    keywords: ["bsnl", "noc", "network operating centre", "bss/oss", "telecom backbone", "interconnect billing"],
    badge: "Telecom NOC",
    url: "#newsroom",
    actionType: "scroll",
    metadata: { iconName: "Network", targetId: "newsroom" }
  },
  {
    id: "news-kfon-dpi",
    title: "KFON Digital Highway Connects 30,000 Government Institutions",
    category: "knowledge",
    categoryLabel: "Newsroom",
    subCategory: "Digital Public Infrastructure",
    description:
      "In consortium with BEL, SRIT's R-Converge software manages subscriber onboarding, automated billing, and partner reconciliations across Kerala.",
    keywords: ["kfon", "bel", "kerala fiber", "r-converge", "30000 institutions", "broadband dpi"],
    badge: "State Broadband",
    url: "#newsroom",
    actionType: "scroll",
    metadata: { iconName: "Wifi", targetId: "newsroom" }
  },
  {
    id: "news-safe-kerala-ai",
    title: "SAFE Kerala AI Traffic Network Logs Over 350,000 Violations in 72 Hours",
    category: "knowledge",
    categoryLabel: "Newsroom",
    subCategory: "AI & Smart Mobility",
    description:
      "Real-time computer-vision algorithms deployed across highway corridors curb traffic fatalities and eliminate manual roadside bias.",
    keywords: ["safe kerala", "traffic violations", "computer vision", "highway safety", "keltron", "traffic ai"],
    badge: "Smart Mobility",
    url: "#newsroom",
    actionType: "scroll",
    metadata: { iconName: "Landmark", targetId: "newsroom" }
  },
  {
    id: "news-iit-pravartak",
    title: "IIT Pravartak Foundation Deep-Tech Partnership for ShaktiDB (#IndiaDB)",
    category: "knowledge",
    categoryLabel: "Newsroom",
    subCategory: "Academic-Industry R&D",
    description:
      "Fostering collaborative academic-industrial R&D to co-engineer specialized edge-AI modules for forensic analysis and healthcare diagnostics.",
    keywords: ["iit pravartak", "shaktidb", "indiadb", "academic r&d", "deep tech", "sovereign db"],
    badge: "R&D Alliance",
    url: "#newsroom",
    actionType: "scroll",
    metadata: { iconName: "Database", targetId: "newsroom" }
  },
  {
    id: "news-amit-oberoi-board",
    title: "SRIT Appoints AI Pioneer Col. Amit Oberoi to Board of Directors",
    category: "knowledge",
    categoryLabel: "Newsroom",
    subCategory: "Board Governance",
    description:
      "Carnot Research Co-Founder and CEO Col. Amit Oberoi joins the Board to guide SRIT’s autonomous enterprise AI and deep-tech initiatives.",
    keywords: ["amit oberoi", "board appointment", "carnot research", "ai governance", "defense tech"],
    badge: "Board Leadership",
    url: "/management/amit-oberoi",
    actionType: "route",
    metadata: { iconName: "Users" }
  },

  // ==========================================
  // 5. EVERYDAY CITIZEN TOUCHPOINTS
  // ==========================================
  {
    id: "tp-highway-vision",
    title: "Citizen Touchpoint: AI Highway Vision Curbing Fatalities in Real Time",
    category: "resources",
    categoryLabel: "Citizen Touchpoints",
    subCategory: "Traffic & Road Safety",
    description:
      "AI-enabled traffic enforcement cameras detecting helmetless riders, speeding, and seatbelt violations via SAFE Kerala (in collaboration with Keltron).",
    keywords: ["traffic safety", "safe kerala", "helmetless detection", "speed enforcement", "keltron touchpoint"],
    badge: "Mobility AI",
    url: "#citizen-touchpoints",
    actionType: "scroll",
    metadata: { iconName: "Landmark", targetId: "citizen-touchpoints" }
  },
  {
    id: "tp-statewide-broadband",
    title: "Citizen Touchpoint: Carrier-Grade Fiber Reaching Every Citizen",
    category: "resources",
    categoryLabel: "Citizen Touchpoints",
    subCategory: "Broadband & Public Wi-Fi",
    description:
      "Carrier-grade OSS/BSS software managing broadband connectivity across 30,000+ government offices, schools, and 2M+ households via KFON and RailWire.",
    keywords: ["broadband touchpoint", "kfon fiber", "railwire wifi", "schools internet", "public wifi"],
    badge: "Digital Inclusion",
    url: "#citizen-touchpoints",
    actionType: "scroll",
    metadata: { iconName: "Wifi", targetId: "citizen-touchpoints" }
  },
  {
    id: "tp-hospital-care",
    title: "Citizen Touchpoint: Zero-Friction Clinical Care at Population Scale",
    category: "resources",
    categoryLabel: "Citizen Touchpoints",
    subCategory: "Hospitals & Medical Care",
    description:
      "Digital hospital management systems (RHES/AbHIS) streamlining OPD/IPD care, electronic medical records, and cashless treatment across ESIC and state hospitals.",
    keywords: ["hospital touchpoint", "rhes", "abhis", "esic patient", "cashless treatment", "opd registration"],
    badge: "Connected Health",
    url: "#citizen-touchpoints",
    actionType: "scroll",
    metadata: { iconName: "Activity", targetId: "citizen-touchpoints" }
  },
  {
    id: "tp-civic-portals",
    title: "Citizen Touchpoint: Doorstep Civic Delivery Without Queues (e-District)",
    category: "resources",
    categoryLabel: "Citizen Touchpoints",
    subCategory: "Government Citizen Portals",
    description:
      "Online citizen portals allowing download of birth certificates, income proofs, and land records without visiting government offices across Odisha and MP.",
    keywords: ["citizen portal touchpoint", "edistrict", "certificates download", "odisha edistrict", "doorstep services"],
    badge: "e-Governance",
    url: "#citizen-touchpoints",
    actionType: "scroll",
    metadata: { iconName: "FileCheck", targetId: "citizen-touchpoints" }
  },
  {
    id: "tp-banking-connectivity",
    title: "Citizen Touchpoint: High-Availability 4G Connectivity for 18,000 SBI ATMs",
    category: "resources",
    categoryLabel: "Citizen Touchpoints",
    subCategory: "Banking & Financial Access",
    description:
      "Enterprise 4G-LTE managed connectivity powering reliable, secure cash dispensing and banking transactions across 18,000 State Bank of India ATM locations.",
    keywords: ["atm connectivity", "sbi atm", "banking 4g", "rural atm", "cash dispensing network"],
    badge: "Financial Access",
    url: "#citizen-touchpoints",
    actionType: "scroll",
    metadata: { iconName: "CreditCard", targetId: "citizen-touchpoints" }
  },

  // ==========================================
  // 6. KEY CLIENTS ROSTER
  // ==========================================
  {
    id: "client-kfon",
    title: "Client: Kerala Fibre Optic Network (KFON)",
    category: "resources",
    categoryLabel: "Key Clients",
    subCategory: "Government & DPI",
    description: "Statewide fiber broadband connecting 30,000 public institutions and 2M+ households, fully orchestrated via SRIT R-Converge.",
    keywords: ["kfon client", "kerala fiber optic", "statewide broadband", "bel consortium"],
    url: "#clients",
    actionType: "scroll",
    metadata: { iconName: "Network", targetId: "clients" }
  },
  {
    id: "client-keltron",
    title: "Client: Keltron (SAFE Kerala AI Highway Grid)",
    category: "resources",
    categoryLabel: "Key Clients",
    subCategory: "Government & DPI",
    description: "Automated edge computer-vision highway enforcement grid deployed statewide to curb accidents and fatalities.",
    keywords: ["keltron client", "safe kerala partner", "traffic surveillance", "ai highway"],
    url: "#clients",
    actionType: "scroll",
    metadata: { iconName: "Landmark", targetId: "clients" }
  },
  {
    id: "client-esic",
    title: "Client: Employees' State Insurance Corporation (ESIC)",
    category: "resources",
    categoryLabel: "Key Clients",
    subCategory: "Healthcare DPI",
    description: "Pan-India hospital management and electronic medical record (EMR) automation across ESIC medical colleges and hospitals.",
    keywords: ["esic client", "esic hospitals", "workforce health", "national clinical emr"],
    url: "#clients",
    actionType: "scroll",
    metadata: { iconName: "Activity", targetId: "clients" }
  },
  {
    id: "client-sbi",
    title: "Client: State Bank of India (SBI)",
    category: "resources",
    categoryLabel: "Key Clients",
    subCategory: "Banking & Enterprise",
    description: "High-availability managed 4G-LTE cellular connectivity infrastructure across 18,000 ATM clusters nationwide.",
    keywords: ["sbi client", "state bank of india", "atm connectivity", "banking network"],
    url: "#clients",
    actionType: "scroll",
    metadata: { iconName: "CreditCard", targetId: "clients" }
  },
  {
    id: "client-bsnl",
    title: "Client: Bharat Sanchar Nigam Limited (BSNL)",
    category: "resources",
    categoryLabel: "Key Clients",
    subCategory: "Telecom & PSU",
    description: "Next-Gen Network Operating Centre (NOC) and inter-operator billing settlement engines across pan-India telecom circles.",
    keywords: ["bsnl client", "bharat sanchar nigam", "telecom noc", "interconnect billing"],
    url: "#clients",
    actionType: "scroll",
    metadata: { iconName: "Wifi", targetId: "clients" }
  },

  // ==========================================
  // 7. SOLUTIONS: HEALTHCARE
  // ==========================================
  {
    id: "sol-healthcare-suite",
    title: "Healthcare Solutions & HMIS/HIS Suite",
    category: "solutions",
    categoryLabel: "Healthcare",
    subCategory: "Core Solution",
    description:
      "Enterprise Hospital Management Information Suite (HMIS) designed for 250 to 1800+ bed hospitals and hospital chains. Certified by NABH under Government of India.",
    keywords: [
      "healthcare",
      "hospital",
      "hmis",
      "his",
      "hospital management",
      "emr",
      "nabh",
      "opd",
      "ipd",
      "bed management",
      "patient records",
      "clinical software"
    ],
    synonyms: ["medical software", "hospital erp", "clinic system", "hospital tech"],
    badge: "NABH Certified",
    url: "#healthcare",
    actionType: "scroll",
    metadata: {
      iconName: "Activity",
      targetId: "healthcare"
    }
  },
  {
    id: "sol-rhes",
    title: "RHES - Renaissance Hospital Enterprise Suite",
    category: "solutions",
    categoryLabel: "Healthcare",
    subCategory: "Product",
    description:
      "Integrated software suite providing automation of Clinical, Administrative, and Financial functional areas for large hospital enterprises.",
    keywords: [
      "rhes",
      "renaissance",
      "hospital suite",
      "clinical automation",
      "hospital admin",
      "doctor portal",
      "nurse station",
      "pharmacy module",
      "laboratory module"
    ],
    synonyms: ["hospital information system", "enterprise his"],
    badge: "Flagship HMIS",
    url: "#healthcare",
    actionType: "scroll",
    metadata: {
      iconName: "Activity",
      targetId: "healthcare"
    }
  },
  {
    id: "sol-abhis",
    title: "AbHIS - Advanced Hospital Information System",
    category: "solutions",
    categoryLabel: "Healthcare",
    subCategory: "Product",
    description:
      "Cloud-ready, scalable hospital information system tailored for regional hospital networks and multi-specialty healthcare facilities.",
    keywords: ["abhis", "cloud hospital", "hospital erp", "patient billing", "radiology"],
    badge: "Cloud Ready",
    url: "#healthcare",
    actionType: "scroll",
    metadata: {
      iconName: "Activity",
      targetId: "healthcare"
    }
  },
  {
    id: "sol-emr",
    title: "Electronic Medical Records (EMR) Platform",
    category: "solutions",
    categoryLabel: "Healthcare",
    subCategory: "Clinical Core",
    description:
      "Comprehensive digital patient health records with clinical decision support, prescription management, lab integration, and NABH compliance.",
    keywords: [
      "emr",
      "electronic medical records",
      "ehr",
      "patient history",
      "e-prescription",
      "clinical notes",
      "icd-10",
      "diagnostics"
    ],
    synonyms: ["digital patient chart", "health records system", "clinical database"],
    badge: "NABH Aligned",
    url: "#healthcare",
    actionType: "scroll",
    metadata: {
      iconName: "FileCheck2",
      targetId: "healthcare"
    }
  },

  // ==========================================
  // 8. SOLUTIONS: E-GOVERNANCE & SMART CITY
  // ==========================================
  {
    id: "sol-egov-edistrict",
    title: "E-District Digital Citizen Services Platform",
    category: "solutions",
    categoryLabel: "e-Governance",
    subCategory: "G2C Services",
    description:
      "Digital Government-to-Citizen (G2C) platform used by State and District administrations to deliver statutory certificates, social welfare benefits, and administrative workflows online.",
    keywords: [
      "edistrict",
      "e-district",
      "citizen services",
      "g2c",
      "certificates",
      "caste certificate",
      "income certificate",
      "statutory permits",
      "district portal",
      "online governance"
    ],
    synonyms: ["e-seva", "citizen portal", "government services", "service plus"],
    badge: "Active in 30+ Districts",
    url: "#e-governance",
    actionType: "scroll",
    metadata: {
      iconName: "Landmark",
      targetId: "e-governance"
    }
  },
  {
    id: "sol-egov-ecivic",
    title: "eCIVIC Municipal & Urban ERP",
    category: "solutions",
    categoryLabel: "e-Governance",
    subCategory: "Urban Governance",
    description:
      "Comprehensive ERP for municipalities and urban development agencies covering revenue collection, property tax, public works, stores, asset registers, and payroll.",
    keywords: [
      "ecivic",
      "municipal erp",
      "property tax",
      "urban development",
      "water billing",
      "trade license",
      "municipal corporation",
      "urban local bodies",
      "ulb"
    ],
    synonyms: ["municipality software", "urban governance erp", "city administration"],
    badge: "Urban ERP",
    url: "#e-governance",
    actionType: "scroll",
    metadata: {
      iconName: "Building2",
      targetId: "e-governance"
    }
  },
  {
    id: "sol-egov-planpermit",
    title: "PlanPermit Automated Building Code Verification",
    category: "solutions",
    categoryLabel: "e-Governance",
    subCategory: "Smart City",
    description:
      "Automated verification of building codes directly from CAD drawing files for issuance of building permits. Implemented across Karnataka, Haryana, Uttarakhand, and Bihar with 20,000+ architects and planners.",
    keywords: [
      "planpermit",
      "plan permit",
      "building permit",
      "building plan approval",
      "cad verification",
      "auto dcr",
      "bye laws",
      "architect portal",
      "site inspection",
      "construction permit"
    ],
    synonyms: ["bpas", "building approval", "cad scrutiny", "building bye-laws"],
    badge: "20,000+ Users",
    url: "#e-governance",
    actionType: "scroll",
    metadata: {
      iconName: "FileCheck2",
      targetId: "e-governance"
    }
  },
  {
    id: "sol-egov-agnipermit",
    title: "AgniPermit Automated Fire Code & NOC System",
    category: "solutions",
    categoryLabel: "e-Governance",
    subCategory: "Public Safety",
    description:
      "Automated verification of fire safety codes directly from architectural drawings for issuance of Fire NOCs and permits. Full statewide production deployment across Karnataka.",
    keywords: [
      "agnipermit",
      "fire noc",
      "fire permit",
      "fire safety",
      "fire code verification",
      "karnataka fire",
      "fire clearance",
      "noc portal"
    ],
    synonyms: ["fire department noc", "fire safety certificate", "fire compliance"],
    badge: "Live Statewide",
    url: "#e-governance",
    actionType: "scroll",
    metadata: {
      iconName: "Flame",
      targetId: "e-governance"
    }
  },
  {
    id: "sol-egov-litigation",
    title: "Litigation Management System (LMS)",
    category: "solutions",
    categoryLabel: "e-Governance",
    subCategory: "Legal Tech",
    description:
      "End-to-end case tracking and legal monitoring solution for state departments, PSUs, and municipal bodies to track court proceedings, hearings, compliance, and advocate assignments.",
    keywords: [
      "litigation",
      "lms",
      "court cases",
      "legal software",
      "case tracking",
      "advocate management",
      "legal compliance",
      "government litigation"
    ],
    synonyms: ["court case monitoring", "legal erp", "case information system"],
    badge: "Enterprise Legal",
    url: "#e-governance",
    actionType: "scroll",
    metadata: {
      iconName: "Scale",
      targetId: "e-governance"
    }
  },

  // ==========================================
  // 9. SOLUTIONS: TELECOM & AI PLATFORM
  // ==========================================
  {
    id: "sol-telecom-broadband",
    title: "Telecom & Managed Network Infrastructure Solutions",
    category: "solutions",
    categoryLabel: "Telecom",
    subCategory: "Network Services",
    description:
      "Managed service provider for telecom networks and high-speed optical broadband infrastructure, managing large-scale subscriber ecosystems, operations, and network reliability.",
    keywords: [
      "telecom",
      "broadband",
      "network infrastructure",
      "fiber optics",
      "managed network",
      "noc",
      "isp operations",
      "optical network",
      "telecom services"
    ],
    synonyms: ["managed service provider", "network operations", "optical fiber infrastructure"],
    url: "#digital-highways",
    actionType: "scroll",
    metadata: {
      iconName: "Wifi",
      targetId: "digital-highways"
    }
  },
  {
    id: "sol-icarkno-ai",
    title: "icarKno™ Enterprise Knowledge AI Platform",
    category: "solutions",
    categoryLabel: "AI & Innovation",
    subCategory: "AI Engine",
    description:
      "Proprietary cognitive knowledge management and conversational AI system enabling structured data extraction, institutional intelligence, and automated enterprise workflows.",
    keywords: [
      "icarkno",
      "ai",
      "artificial intelligence",
      "knowledge management",
      "llm",
      "enterprise ai",
      "machine learning",
      "cognitive platform",
      "neural search"
    ],
    synonyms: ["enterprise chatgpt", "internal ai", "ai search", "knowledge base ai"],
    badge: "Proprietary AI",
    url: "#icarkno",
    actionType: "scroll",
    metadata: {
      iconName: "Cpu",
      targetId: "icarkno"
    }
  },
  {
    id: "sol-cyber-defense",
    title: "Cyber Security & Critical Infrastructure Defense",
    category: "solutions",
    categoryLabel: "Cyber Security",
    subCategory: "Security Services",
    description:
      "Enterprise threat detection, proactive vulnerability defense, compliance auditing, zero-trust network architectures, and SOC managed monitoring.",
    keywords: [
      "cyber security",
      "cyber defense",
      "soc",
      "security operations",
      "threat monitoring",
      "vapt",
      "penetration testing",
      "firewall",
      "iso 27001",
      "data protection",
      "zero trust"
    ],
    synonyms: ["information security", "infosec", "network defense"],
    badge: "Zero Trust",
    url: "#zero-trust-csoc",
    actionType: "scroll",
    metadata: {
      iconName: "ShieldCheck",
      targetId: "zero-trust-csoc"
    }
  },
  {
    id: "sol-insurance",
    title: "Insurance IT Solutions & Claims Automation",
    category: "solutions",
    categoryLabel: "Insurance",
    subCategory: "Financial Tech",
    description:
      "Enterprise insurance claim management, hospital provider network settlement, policy administration, and automated adjudication platforms for state and private health schemes.",
    keywords: [
      "insurance",
      "claims",
      "policy administration",
      "tpa",
      "cashless insurance",
      "health insurance",
      "adjudication",
      "provider network"
    ],
    synonyms: ["insurance software", "claim processing", "health scheme automation"],
    url: "/insurance",
    actionType: "route",
    metadata: {
      iconName: "CreditCard"
    }
  },

  // ==========================================
  // 10. SERVICES & TOOLS
  // ==========================================
  {
    id: "svc-schedule-demo",
    title: "Request a Solution Demo & Consultation",
    category: "services",
    categoryLabel: "Services",
    subCategory: "Consultation",
    description:
      "Get in touch with SRIT enterprise solution architects to schedule a live product demonstration or technical evaluation.",
    keywords: [
      "request demo",
      "schedule demo",
      "solution consultation",
      "product demo",
      "book consultation",
      "architect meeting"
    ],
    badge: "Consultation",
    url: "/contact-us",
    actionType: "route",
    metadata: {
      iconName: "Calendar"
    }
  },
  {
    id: "svc-icarkno-consultation",
    title: "icarKno™ Enterprise AI Deployment Assessment",
    category: "services",
    categoryLabel: "Services",
    subCategory: "AI Advisory",
    description:
      "Evaluate private on-premise or cloud cognitive AI deployment across institutional knowledge bases, legal archives, and operational datasets.",
    keywords: ["icarkno consultation", "ai assessment", "enterprise ai deployment", "custom llm"],
    badge: "AI Assessment",
    url: "#icarkno",
    actionType: "scroll",
    metadata: { iconName: "Cpu", targetId: "icarkno" }
  },
  {
    id: "svc-ai-assistant",
    title: "SRIT Interactive AI Assistant",
    category: "services",
    categoryLabel: "Interactive Tool",
    subCategory: "Smart Tool",
    description:
      "Interactive AI chatbot available 24/7 to answer questions regarding solutions, project track record, and business partnerships.",
    keywords: ["ai assistant", "chatbot", "chat", "virtual assistant", "interactive ai", "help"],
    badge: "Interactive AI",
    url: "#ai-chat",
    actionType: "action",
    metadata: {
      iconName: "MessageSquare"
    }
  },

  // ==========================================
  // 11. NAVIGATION & SITE PAGES
  // ==========================================
  {
    id: "page-home",
    title: "SRIT India Official Homepage",
    category: "pages",
    categoryLabel: "Pages",
    description:
      "SRIT official homepage showcasing our flagship healthcare, e-governance, telecom, and AI engineering offerings.",
    keywords: ["home", "main page", "start", "overview", "srit india limited"],
    url: "/",
    actionType: "route",
    metadata: { iconName: "Home" }
  },
  {
    id: "page-sovereign-ai",
    title: "Next Technology Direction: Sovereign AI & Architecture",
    category: "pages",
    categoryLabel: "Pages",
    subCategory: "Next Tech",
    description:
      "SRIT's strategic sovereign AI direction spanning edge compute, ShaktiDB #IndiaDB, and SRIT Sovereign Cloud with L&T.",
    keywords: ["sovereign ai", "next tech", "technology direction", "edge ai", "shaktidb", "indiacloud"],
    badge: "Next Tech",
    url: "/#sovereign-ai",
    actionType: "scroll",
    metadata: { iconName: "Cpu", targetId: "ai-native-engineering" }
  },
  {
    id: "page-ai-native",
    title: "AI-Native Engineering & Performance Proof",
    category: "pages",
    categoryLabel: "Pages",
    subCategory: "Engineering",
    description:
      "Under 20ms edge inference speed, 350,000+ computer vision events in 72 hours, and 100% data residency compliance.",
    keywords: ["ai-native engineering", "performance proof", "edge inference", "20ms", "metrics", "data residency"],
    badge: "<20ms Edge",
    url: "/#ai-native-engineering",
    actionType: "scroll",
    metadata: { iconName: "Cpu", targetId: "ai-native-engineering" }
  },
  {
    id: "page-industries",
    title: "Industries & Verticals Overview",
    category: "pages",
    categoryLabel: "Pages",
    subCategory: "Verticals",
    description:
      "Comprehensive breakdown of Healthcare IT, e-Governance, Telecom & Broadband, and Cyber Security & Sovereign Cloud.",
    keywords: ["industries", "verticals", "sectors", "domains", "services overview"],
    url: "/#industries",
    actionType: "scroll",
    metadata: { iconName: "Briefcase", targetId: "industries" }
  },
  {
    id: "page-careers",
    title: "Careers at SRIT - AI & Digital Public Infrastructure",
    category: "pages",
    categoryLabel: "Pages",
    subCategory: "Careers",
    description:
      "Join our CMMI Level 5 engineering organization. Open positions for AI architects, software engineers, and cloud leads.",
    keywords: ["careers", "jobs", "hiring", "open positions", "work at srit", "life at srit", "engineering jobs"],
    badge: "Hiring",
    url: "/#careers",
    actionType: "scroll",
    metadata: { iconName: "Briefcase", targetId: "careers" }
  },
  {
    id: "page-management",
    title: "Executive Management & Leadership Directory",
    category: "pages",
    categoryLabel: "Pages",
    subCategory: "Leadership",
    description:
      "Meet the Board of Directors, Key Managerial Personnel (KMP), Strategic Partners, and Senior Management leadership.",
    keywords: ["management", "board of directors", "leadership", "executives", "directors", "team", "kmp"],
    url: "/management",
    actionType: "route",
    metadata: { iconName: "Users" }
  },
  {
    id: "page-company",
    title: "About SRIT Company & History",
    category: "pages",
    categoryLabel: "Pages",
    description:
      "SRIT track record since 1999, vision, corporate philosophy, executive leadership, and global footprint.",
    keywords: ["about us", "company", "who we are", "history", "leadership", "mission"],
    url: "/company",
    actionType: "route",
    metadata: { iconName: "Building" }
  },
  {
    id: "page-recognition",
    title: "Awards & Industry Recognition",
    category: "pages",
    categoryLabel: "Pages",
    description:
      "Awards, accolades, CMMI Level 5 benchmarks, National e-Governance Awards, and government recognitions achieved by SRIT.",
    keywords: ["recognition", "awards", "honors", "cmmi 5", "national egovernance award"],
    url: "/recognition",
    actionType: "route",
    metadata: { iconName: "Award" }
  },
  {
    id: "page-media",
    title: "Media Releases & Event Coverage",
    category: "pages",
    categoryLabel: "Pages",
    description:
      "Official press releases, media coverage, event appearances, and public announcements.",
    keywords: ["media", "press", "news", "announcements", "coverage"],
    url: "/media",
    actionType: "route",
    metadata: { iconName: "Newspaper" }
  },
  {
    id: "page-contact",
    title: "Contact SRIT Corporate Headquarters",
    category: "pages",
    categoryLabel: "Pages",
    description:
      "SRIT House, ITPL Main Road, Brookefield, Bengaluru. Phone: +91 80 41951999. Email: info@sritindia.com.",
    keywords: ["contact", "address", "phone", "email", "office", "bengaluru", "headquarters", "location"],
    url: "/contact-us",
    actionType: "route",
    metadata: { iconName: "Phone" }
  },

  // ==========================================
  // 12. COMPLETE LEADERSHIP PROFILES (MANAGEMENT)
  // ==========================================
  // A. Board of Directors
  {
    id: "leader-rangan-thiyagarajan",
    title: "Rangan Thiyagarajan - Chairman",
    category: "pages",
    categoryLabel: "Leadership",
    subCategory: "Board of Directors",
    description:
      "Chartered Accountant with over 35 years of financial leadership across industry conglomerates. Former CFO and Director at VST Tillers Tractors.",
    keywords: ["rangan thiyagarajan", "chairman", "board", "director", "finance leadership"],
    url: "/management/rangan-thiyagarajan",
    actionType: "route",
    metadata: { iconName: "Users" }
  },
  {
    id: "leader-madhu-nambiar",
    title: "Dr. Madhu Nambiar - Managing Director & CEO",
    category: "pages",
    categoryLabel: "Leadership",
    subCategory: "Board of Directors",
    description:
      "Ph.D. from Washington State University with 37+ years of experience in ICT. Former India Director & Country Head for American MNC AEI. Founder of SRIT.",
    keywords: ["madhu nambiar", "ceo", "managing director", "founder", "executive leader"],
    url: "/management/madhu-nambiar",
    actionType: "route",
    metadata: { iconName: "Users" }
  },
  {
    id: "leader-prasaktha-vn",
    title: "Prasaktha V N - Wholetime Director",
    category: "pages",
    categoryLabel: "Leadership",
    subCategory: "Board of Directors",
    description:
      "Heads Corporate Affairs, Corporate Governance, and oversees Human Resources Management at SRIT with over 22 years of experience.",
    keywords: ["prasaktha vn", "wholetime director", "corporate affairs", "governance", "hr leadership"],
    url: "/management/prasaktha-vn",
    actionType: "route",
    metadata: { iconName: "Users" }
  },
  {
    id: "leader-pc-martin",
    title: "P C Martin - Wholetime Director",
    category: "pages",
    categoryLabel: "Leadership",
    subCategory: "Board of Directors",
    description:
      "Engineering rank holder with 24 years at SRIT and 32 total years of experience, overseeing business process alignment and delivery.",
    keywords: ["pc martin", "wholetime director", "operations", "engineering leader"],
    url: "/management/pc-martin",
    actionType: "route",
    metadata: { iconName: "Users" }
  },
  {
    id: "leader-chandan-dash",
    title: "Dr. Chandan Dash - Director",
    category: "pages",
    categoryLabel: "Leadership",
    subCategory: "Board of Directors",
    description:
      "Founder and CEO of Blossom Hospitals and Orthopedic Surgeon, driving digital healthcare and mobile health infrastructure initiatives.",
    keywords: ["chandan dash", "doctor", "blossom hospitals", "healthcare director"],
    url: "/management/chandan-dash",
    actionType: "route",
    metadata: { iconName: "Users" }
  },
  {
    id: "leader-amit-oberoi",
    title: "Dr. Amit Oberoi - Director",
    category: "pages",
    categoryLabel: "Leadership",
    subCategory: "Board of Directors",
    description:
      "Co-founder & CEO of Carnot Research, PhD in NLP from IIT Delhi, and former Indian Army Colonel leading Satcom, cyber and AI platforms.",
    keywords: ["amit oberoi", "director", "carnot research", "ai researcher", "defense satcom"],
    url: "/management/amit-oberoi",
    actionType: "route",
    metadata: { iconName: "Users" }
  },
  {
    id: "leader-r-ravichandran",
    title: "R. Ravichandran - Director",
    category: "pages",
    categoryLabel: "Leadership",
    subCategory: "Board of Directors",
    description:
      "Engineering stream leader with over a decade of experience heading government tenders, PSU collaborations, and urban IT projects.",
    keywords: ["r ravichandran", "ravichandran", "director", "government tenders", "psu projects"],
    url: "/management/r-ravichandran",
    actionType: "route",
    metadata: { iconName: "Users" }
  },
  {
    id: "leader-suresh-menon",
    title: "Suresh B Menon - Independent Director",
    category: "pages",
    categoryLabel: "Leadership",
    subCategory: "Board of Directors",
    description:
      "Public Independent Director at NSE International Exchange (NSE IX) with 30 years as a career regulator at SEBI heading investigations.",
    keywords: ["suresh menon", "independent director", "sebi", "nse ix", "regulator"],
    url: "/management/suresh-b-menon",
    actionType: "route",
    metadata: { iconName: "Users" }
  },
  {
    id: "leader-karthick-varadarajan",
    title: "Karthick Varadarajan - Independent Director",
    category: "pages",
    categoryLabel: "Leadership",
    subCategory: "Board of Directors",
    description:
      "Practicing Company Secretary since 2002 specializing in Secretarial Audit, Internal Audit, Due Diligence, and Corporate Advisory.",
    keywords: ["karthick varadarajan", "independent director", "company secretary", "audit"],
    url: "/management/karthick-varadarajan",
    actionType: "route",
    metadata: { iconName: "Users" }
  },
  {
    id: "leader-thiruvengadam-ashok",
    title: "Thiruvengadam Ashok - Independent Director",
    category: "pages",
    categoryLabel: "Leadership",
    subCategory: "Board of Directors",
    description:
      "Founder CEO of STAG Software and creator of HyBIST testing methodology with 35+ years of software quality and testing leadership.",
    keywords: ["thiruvengadam ashok", "ashok", "independent director", "stag software", "hybist", "qa leader"],
    url: "/management/thiruvengadam-ashok",
    actionType: "route",
    metadata: { iconName: "Users" }
  },

  // B. Key Managerial Personnel (KMP)
  {
    id: "leader-manesh-george",
    title: "Manesh George - Chief Financial Officer (CFO – Corporate)",
    category: "pages",
    categoryLabel: "Leadership",
    subCategory: "Key Managerial Personnel",
    description:
      "20+ years of corporate finance leadership overseeing financial strategy, capital allocation, risk management, budgeting, and investor relations.",
    keywords: ["manesh george", "cfo", "chief financial officer", "finance", "treasury", "budgeting", "kmp"],
    url: "/management/manesh-george",
    actionType: "route",
    metadata: { iconName: "Briefcase" }
  },
  {
    id: "leader-nidhi-vaswani",
    title: "Nidhi Vaswani - Company Secretary & Compliance Officer",
    category: "pages",
    categoryLabel: "Leadership",
    subCategory: "Key Managerial Personnel",
    description:
      "Over 14 years of experience in legal compliance, corporate governance, board administration, and statutory SEBI disclosures.",
    keywords: ["nidhi vaswani", "company secretary", "compliance officer", "sebi regulations", "governance", "kmp"],
    url: "/management/nidhi-vaswani",
    actionType: "route",
    metadata: { iconName: "FileCheck" }
  },

  // C. Strategic Partners
  {
    id: "leader-anil-ramachandran",
    title: "Dr. Anil Ramachandran - Director, Bio-Medical Equipment",
    category: "pages",
    categoryLabel: "Leadership",
    subCategory: "Strategic Partners",
    description:
      "Widely recognized as the 'Medical Laser Man of India', Harvard alumnus, and Founder of AMT Group with 32 years of medical laser innovation.",
    keywords: ["anil ramachandran", "medical laser", "amt group", "biomedical equipment", "cancer technology"],
    url: "/management/anil-ramachandran",
    actionType: "route",
    metadata: { iconName: "Activity" }
  },

  // D. Senior Management & Domain Heads
  {
    id: "leader-k-narayana-swamy",
    title: "K Narayana Swamy - Board Advisory",
    category: "pages",
    categoryLabel: "Leadership",
    subCategory: "Senior Management",
    description:
      "Practicing Company Secretary, former ICSI Chairman, and corporate restructuring advisor for PSUs and public enterprises.",
    keywords: ["k narayana swamy", "narayana swamy", "board advisory", "icsi", "corporate legal"],
    url: "/management/k-narayana-swamy",
    actionType: "route",
    metadata: { iconName: "Users" }
  },
  {
    id: "leader-sunitha-palayekari",
    title: "Sunitha Palayekari - Chief Solution Architect – Healthcare ICT",
    category: "pages",
    categoryLabel: "Leadership",
    subCategory: "Senior Management",
    description:
      "Defines and guides the technical vision, architectural integrity, and clinical system design for SRIT Healthcare solutions.",
    keywords: ["sunitha palayekari", "sunitha", "solution architect", "healthcare architect", "his architect"],
    url: "/management/sunitha-palayekari",
    actionType: "route",
    metadata: { iconName: "Activity" }
  },
  {
    id: "leader-rajesh-ponnan",
    title: "Rajesh Ponnan - Executive Vice President – GovTech",
    category: "pages",
    categoryLabel: "Leadership",
    subCategory: "Senior Management",
    description:
      "P&L Head of e-Governance Business Unit with 30 years in software products and services overseeing statewide civic programs.",
    keywords: ["rajesh ponnan", "govtech", "evp", "egovernance head", "smart city lead"],
    url: "/management/rajesh-ponnan",
    actionType: "route",
    metadata: { iconName: "Landmark" }
  },
  {
    id: "leader-pradeep-v",
    title: "Pradeep V - General Manager – Technical | IP-MPLS & Internet Networks",
    category: "pages",
    categoryLabel: "Leadership",
    subCategory: "Senior Management",
    description:
      "Technical lead for high-speed IP-MPLS and broadband internet technologies, managing KFON O&M and statewide network infrastructure.",
    keywords: ["pradeep v", "pradeep", "ip mpls", "network engineer", "kfon operations"],
    url: "/management/pradeep-v",
    actionType: "route",
    metadata: { iconName: "Wifi" }
  },
  {
    id: "leader-surendra-kumar",
    title: "Surendra Kumar, FCA - Head of Finance & Accounts",
    category: "pages",
    categoryLabel: "Leadership",
    subCategory: "Senior Management",
    description:
      "Fellow Chartered Accountant with 15+ years overseeing fiscal management, compliance, financial analysis, and accounting.",
    keywords: ["surendra kumar", "fca", "finance head", "accounts", "fiscal management"],
    url: "/management/surendra-kumar",
    actionType: "route",
    metadata: { iconName: "Briefcase" }
  },
  {
    id: "leader-john-joshy",
    title: "John Joshy - EVP & Chief Solutions Architect",
    category: "pages",
    categoryLabel: "Leadership",
    subCategory: "Senior Management",
    description:
      "16+ years in software, networking, and cyber security leading technology-focused project deliveries across enterprises.",
    keywords: ["john joshy", "chief solutions architect", "evp", "software architecture", "cybersecurity lead"],
    url: "/management/john-joshy",
    actionType: "route",
    metadata: { iconName: "Cpu" }
  },
  {
    id: "leader-jithesh-p-menon",
    title: "Jithesh P Menon - CEO – HealthTech ICT",
    category: "pages",
    categoryLabel: "Leadership",
    subCategory: "Senior Management",
    description:
      "Over 21 years of healthcare technology leadership driving revenue, strategy, and operations for the Healthcare ICT business unit.",
    keywords: ["jithesh p menon", "jp menon", "healthtech ceo", "healthcare business head"],
    url: "/management/jithesh-p-menon",
    actionType: "route",
    metadata: { iconName: "Activity" }
  },
  {
    id: "leader-vishal-madane",
    title: "Dr. Vishal Madane - Strategic Business Partner",
    category: "pages",
    categoryLabel: "Leadership",
    subCategory: "Senior Management",
    description:
      "Leads government tenders and special technology projects contributing to national-scale public infrastructure.",
    keywords: ["vishal madane", "tenders", "special projects", "business partner"],
    url: "/management/vishal-madane",
    actionType: "route",
    metadata: { iconName: "Briefcase" }
  },
  {
    id: "leader-sunil-jones",
    title: "Sunil Jones - EVP & Strategic Accounts",
    category: "pages",
    categoryLabel: "Leadership",
    subCategory: "Senior Management",
    description:
      "30+ years in revenue growth and system integration, driving strategic accounts in enterprise applications and systems integration.",
    keywords: ["sunil jones", "strategic accounts", "evp", "systems integration", "enterprise applications"],
    url: "/management/sunil-jones",
    actionType: "route",
    metadata: { iconName: "Briefcase" }
  },
  {
    id: "leader-k-vijay-iyer",
    title: "K Vijay Iyer - EVP & State Head – KFON Managed Service Provider",
    category: "pages",
    categoryLabel: "Leadership",
    subCategory: "Senior Management",
    description:
      "ACMA qualified cost accountant and business head managing KFON MSP operations and state-wide ICT implementations.",
    keywords: ["k vijay iyer", "vijay iyer", "kfon msp", "kfon head", "state head"],
    url: "/management/k-vijay-iyer",
    actionType: "route",
    metadata: { iconName: "Network" }
  },
  {
    id: "leader-prabath-gk",
    title: "Prabath G K - Sr. Technical Architect – Broadband & Internet",
    category: "pages",
    categoryLabel: "Leadership",
    subCategory: "Senior Management",
    description:
      "Principal architect for broadband network management systems, designing scalable software architectures since 2005.",
    keywords: ["prabath gk", "prabath", "broadband architect", "internet architect", "technical architect"],
    url: "/management/prabath-gk",
    actionType: "route",
    metadata: { iconName: "Wifi" }
  },
  {
    id: "leader-babu-s",
    title: "Babu S - Head of MSP Business – Broadband & Internet",
    category: "pages",
    categoryLabel: "Leadership",
    subCategory: "Senior Management",
    description:
      "Business head for high-speed broadband and internet operations, overseeing strategy, daily network execution, and partner ecosystems.",
    keywords: ["babu s", "msp business", "broadband head", "internet business head"],
    url: "/management/babu-s",
    actionType: "route",
    metadata: { iconName: "Wifi" }
  },
  {
    id: "leader-harish-kumar",
    title: "Harish Kumar M - Head of Corporate Affairs & Corporate HR",
    category: "pages",
    categoryLabel: "Leadership",
    subCategory: "Senior Management",
    description:
      "Oversees end-to-end government bid and proposal processes while leading corporate human resources and compliance.",
    keywords: ["harish kumar", "corporate affairs", "bid management", "hr head", "tender proposals"],
    url: "/management/harish-kumar-m",
    actionType: "route",
    metadata: { iconName: "Users" }
  },
  {
    id: "leader-asgarulla-khan",
    title: "Asgarulla Khan IB - Program Management – Telecoms & R-Connect",
    category: "pages",
    categoryLabel: "Leadership",
    subCategory: "Senior Management",
    description:
      "Oversees development lifecycle of R-Connect telecom software products for national operators including BSNL.",
    keywords: ["asgarulla khan", "r-connect", "telecom program", "bsnl project lead"],
    url: "/management/asgarulla-khan-ib",
    actionType: "route",
    metadata: { iconName: "Network" }
  },
  {
    id: "leader-pallab-sharma",
    title: "Pallab Sharma - Engineering Head – Healthcare ICT",
    category: "pages",
    categoryLabel: "Leadership",
    subCategory: "Senior Management",
    description:
      "13 years of core software engineering and UX leadership translating clinical workflows into high-performance software code.",
    keywords: ["pallab sharma", "engineering head", "healthcare engineering", "software lead"],
    url: "/management/pallab-sharma",
    actionType: "route",
    metadata: { iconName: "Activity" }
  },
  {
    id: "leader-santosh-kumar",
    title: "Santosh Kumar - Design Lead – Healthcare ICT",
    category: "pages",
    categoryLabel: "Leadership",
    subCategory: "Senior Management",
    description:
      "13 years of software design and UX leadership ensuring clinical usability and robust frontend architecture.",
    keywords: ["santosh kumar", "design lead", "ui/ux", "healthcare design"],
    url: "/management/santosh-kumar",
    actionType: "route",
    metadata: { iconName: "Activity" }
  },
  {
    id: "leader-binoy-kp",
    title: "Binoy KP - Head of Ops – KFON (Broadband & Internet)",
    category: "pages",
    categoryLabel: "Leadership",
    subCategory: "Senior Management",
    description:
      "Optimizes sales processes, operational data, and technology supporting the statewide KFON MSP team.",
    keywords: ["binoy kp", "kfon ops", "broadband operations", "sales ops"],
    url: "/management/binoy-kp",
    actionType: "route",
    metadata: { iconName: "Wifi" }
  },
  {
    id: "leader-ganapathy-bb",
    title: "Ganapathy BB - Finance Controller",
    category: "pages",
    categoryLabel: "Leadership",
    subCategory: "Senior Management",
    description:
      "Oversees financial reporting, budgeting analysis, audit compliance, and accounting controls across business verticals.",
    keywords: ["ganapathy bb", "finance controller", "accounts manager", "financial reporting"],
    url: "/management/ganapathy-bb",
    actionType: "route",
    metadata: { iconName: "Briefcase" }
  },
  {
    id: "leader-sebash-carmel",
    title: "Sebash Carmel - Senior Designer & Marcom Lead",
    category: "pages",
    categoryLabel: "Leadership",
    subCategory: "Senior Management",
    description:
      "Leads marketing communication strategies, public relations, branding, and digital design across corporate platforms.",
    keywords: ["sebash carmel", "marcom lead", "branding", "marketing communications", "senior designer"],
    url: "/management/sebash-carmel",
    actionType: "route",
    metadata: { iconName: "Briefcase" }
  },

  // ==========================================
  // 13. INVESTOR RELATIONS & GOVERNANCE
  // ==========================================
  {
    id: "inv-overview",
    title: "Investor Relations Overview",
    category: "investors",
    categoryLabel: "Investors",
    subCategory: "Investor Relations",
    description:
      "Investor relations portal for shareholders, analysts, financial reports, and corporate governance updates.",
    keywords: ["investor", "investors", "shareholders", "investor relations", "equity", "nse", "bse", "symbol srit"],
    badge: "Listed (NSE/BSE)",
    url: "/investor",
    actionType: "route",
    metadata: { iconName: "Briefcase" }
  },
  {
    id: "inv-financials",
    title: "Financial Statements & Results",
    category: "investors",
    categoryLabel: "Investors",
    subCategory: "Financials",
    description:
      "Quarterly and annual financial results, balance sheets, audited statements, and revenue growth metrics.",
    keywords: ["financials", "quarterly results", "balance sheet", "p&l", "profit", "revenue"],
    url: "/investors-information",
    actionType: "route",
    metadata: { iconName: "TrendingUp" }
  },
  {
    id: "inv-annual-report",
    title: "Annual Reports & Statutory Filings",
    category: "investors",
    categoryLabel: "Investors",
    subCategory: "Reports",
    description:
      "Published annual reports, auditor commentary, and statutory annual filings for shareholders.",
    keywords: ["annual report", "annual reports", "statutory filings", "auditor report", "financial year"],
    badge: "Reports",
    url: "/annual-report",
    actionType: "route",
    metadata: { iconName: "FileSpreadsheet" }
  },
  {
    id: "inv-corp-governance",
    title: "Corporate Governance & Board Committees",
    category: "investors",
    categoryLabel: "Investors",
    subCategory: "Governance",
    description:
      "Corporate governance policies, Board committee charters, stakeholder relationship protocols, and ethics codes.",
    keywords: ["corporate governance", "governance", "board committee", "audit committee", "ethics", "transparency"],
    url: "/investors-information#governance",
    actionType: "route",
    metadata: { iconName: "Building" }
  },
  {
    id: "inv-codes-policies",
    title: "Codes, Policies & Code of Conduct",
    category: "investors",
    categoryLabel: "Investors",
    subCategory: "Policies",
    description:
      "Official company policies including Whistleblower policy, Insider Trading code, CSR, and Fair Disclosure guidelines.",
    keywords: ["codes and policies", "whistleblower", "insider trading", "csr", "fair disclosure", "code of conduct"],
    url: "/investors-information#policies",
    actionType: "route",
    metadata: { iconName: "FileCheck" }
  },
  {
    id: "inv-ipo-documents",
    title: "IPO Documents & Prospectus",
    category: "investors",
    categoryLabel: "Investors",
    subCategory: "Public Offering",
    description:
      "Initial Public Offering (IPO) prospectus, red herring prospectus, allocation details, and listing documents.",
    keywords: ["ipo", "ipo documents", "prospectus", "rhp", "listing date", "bse listing", "nse listing", "544256"],
    badge: "IPO",
    url: "/investors-information#ipo",
    actionType: "route",
    metadata: { iconName: "FileText" }
  },

  // ==========================================
  // 14. CERTIFICATIONS & COMPANY CREDENTIALS
  // ==========================================
  {
    id: "cert-cmmi-level-5",
    title: "CMMI Level 5 Certification",
    category: "certifications",
    categoryLabel: "Certifications",
    subCategory: "Quality Benchmark",
    description:
      "Highest maturity rating for software development and process optimization, demonstrating world-class software engineering rigor.",
    keywords: ["cmmi", "cmmi level 5", "cmmi-dev", "quality appraisal", "software maturity"],
    badge: "Top Maturity",
    url: "#certifications",
    actionType: "scroll",
    metadata: { iconName: "Award", targetId: "certifications" }
  },
  {
    id: "cert-iso-suite",
    title: "ISO Certifications (ISO 9001, 27001, 20000, 14001, 27034, 45001)",
    category: "certifications",
    categoryLabel: "Certifications",
    subCategory: "Compliance",
    description:
      "Certified across Quality Management (9001), Information Security (27001), IT Service Management (20000), Environmental (14001), Application Security (27034), and Occupational Health (45001).",
    keywords: [
      "iso",
      "iso 9001",
      "iso 27001",
      "iso 20000",
      "iso 14001",
      "iso 27034",
      "iso 45001",
      "information security",
      "it compliance"
    ],
    badge: "ISO Certified",
    url: "#certifications",
    actionType: "scroll",
    metadata: { iconName: "ShieldCheck", targetId: "certifications" }
  },
  {
    id: "cert-nabh-emr",
    title: "NABH Accreditation for HMIS & EMR",
    category: "certifications",
    categoryLabel: "Certifications",
    subCategory: "Healthcare Standard",
    description:
      "Certified by the National Accreditation Board for Hospitals (NABH) under the Government of India, endorsing SRIT's healthcare software quality and security.",
    keywords: ["nabh", "nabh accreditation", "hospital accreditation", "government of india", "certified emr"],
    badge: "Gov Endorsed",
    url: "#certifications",
    actionType: "scroll",
    metadata: { iconName: "Shield", targetId: "certifications" }
  },
  {
    id: "cert-nse-bse-listing",
    title: "NSE & BSE Stock Exchange Listing Credential",
    category: "certifications",
    categoryLabel: "Certifications",
    subCategory: "Corporate Credential",
    description:
      "SRIT India Limited is officially listed on both the National Stock Exchange (NSE) and Bombay Stock Exchange (BSE) under Symbol SRIT and Scrip 544256.",
    keywords: ["stock exchange", "nse", "bse", "listed company", "stock ticker", "market listing", "544256", "srit"],
    badge: "NSE/BSE",
    url: "/investor",
    actionType: "route",
    metadata: { iconName: "TrendingUp" }
  }
];
