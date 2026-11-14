import type { SearchItem } from "./types";

export const SEARCH_INDEX: SearchItem[] = [
  // ==========================================
  // 1. SOLUTIONS: HEALTHCARE
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
      highlights: ["2000+ Hospitals & OPD Clinics", "300M+ EMR experiences", "20+ Countries"],
      targetId: "healthcare"
    }
  },
  {
    id: "sol-healthcare-emr",
    title: "Electronic Medical Records (EMR) & PACS",
    category: "solutions",
    categoryLabel: "Healthcare",
    subCategory: "Clinical Tech",
    description:
      "Standardized, secure digital patient health records and Picture Archiving and Communication System (PACS) with seamless multi-specialty workflows.",
    keywords: [
      "emr",
      "electronic medical records",
      "ehr",
      "pacs",
      "medical imaging",
      "patient records",
      "clinical documentation",
      "prescriptions"
    ],
    synonyms: ["digital health record", "electronic health file", "imaging pacs"],
    badge: "NABH Certified",
    url: "#healthcare",
    actionType: "scroll",
    metadata: {
      iconName: "FileText",
      targetId: "healthcare"
    }
  },
  {
    id: "sol-healthcare-analytics",
    title: "Clinical & Population Analytics",
    category: "solutions",
    categoryLabel: "Healthcare",
    subCategory: "Data & ML",
    description:
      "Specialized healthcare practices in Clinical, Population, Disease, and Machine-Learning based analytics to improve patient care and hospital efficiency.",
    keywords: [
      "analytics",
      "clinical analytics",
      "population health",
      "disease analytics",
      "machine learning",
      "health ai",
      "medical insights"
    ],
    synonyms: ["health bi", "medical big data", "predictive care"],
    badge: "AI Powered",
    url: "#healthcare",
    actionType: "scroll",
    metadata: {
      iconName: "TrendingUp",
      targetId: "healthcare"
    }
  },
  {
    id: "sol-healthcare-infra-migration",
    title: "Healthcare Infrastructure & Data Migration",
    category: "solutions",
    categoryLabel: "Healthcare",
    subCategory: "Infrastructure",
    description:
      "Management of 200+ servers with 65TB+ patient data. Successfully migrated 2 to 18 years of clinical and demographic legacy data across major healthcare enterprises.",
    keywords: [
      "data migration",
      "server management",
      "onconet",
      "data centers",
      "disaster recovery",
      "legacy migration",
      "patient data security"
    ],
    synonyms: ["cloud migration", "ehr transfer", "server hosting"],
    url: "#healthcare",
    actionType: "scroll",
    metadata: {
      iconName: "Layers",
      targetId: "healthcare"
    }
  },

  // ==========================================
  // 2. SOLUTIONS: E-GOVERNANCE
  // ==========================================
  {
    id: "sol-egov-edistrict",
    title: "E-District G2C Platform",
    category: "solutions",
    categoryLabel: "e-Governance",
    subCategory: "Citizen Services",
    description:
      "Digital Government-to-Citizen (G2C) platform used by state and district administrations to deliver citizen statutory certificates and administrative services online with workflow processing.",
    keywords: [
      "edistrict",
      "e-district",
      "g2c",
      "government to citizen",
      "statutory certificates",
      "district portal",
      "citizen services",
      "e-governance",
      "online certificates"
    ],
    synonyms: ["government portal", "district services", "public service platform"],
    badge: "Gov Solution",
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
      "Comprehensive ERP for municipalities and urban development agencies. Covers works, projects, procurement, stores, revenue, property management, assets, payroll, and finance.",
    keywords: [
      "ecivic",
      "e-civic",
      "municipal erp",
      "urban development",
      "property tax",
      "procurement",
      "revenue management",
      "municipal administration",
      "city corporation"
    ],
    synonyms: ["urban erp", "city municipal system", "town council software"],
    badge: "Gov Solution",
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
      "Automated verification of building codes directly from CAD drawing files for issuance of building permits. Active in Karnataka, Haryana, Uttarakhand, and Bihar with 20,000+ architects and planners.",
    keywords: [
      "planpermit",
      "plan permit",
      "building permit",
      "building code",
      "drawing verification",
      "cad inspection",
      "architects",
      "town planning",
      "karnataka",
      "haryana",
      "bihar",
      "uttarakhand"
    ],
    synonyms: ["building sanction", "cad plan approval", "construction license"],
    badge: "Smart City",
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
      "Automated verification of fire safety codes for issuance of building fire NOCs and fire permits directly from drawing files, with citizen portal and mobile inspection app. Live statewide in Karnataka.",
    keywords: [
      "agnipermit",
      "agni permit",
      "fire noc",
      "fire permit",
      "fire safety code",
      "drawing verification",
      "site inspection app",
      "fire department",
      "karnataka"
    ],
    synonyms: ["fire clearance", "fire certificate", "fire license"],
    badge: "Public Safety",
    url: "#e-governance",
    actionType: "scroll",
    metadata: {
      iconName: "Flame",
      targetId: "e-governance"
    }
  },
  {
    id: "sol-egov-litigation",
    title: "Litigation Management Software for Government",
    category: "solutions",
    categoryLabel: "e-Governance",
    subCategory: "Legal Tech",
    description:
      "A dedicated, workflow-driven legal workspace and case tracking system built specifically for Government Bodies and public sector enterprises.",
    keywords: [
      "litigation",
      "litigation management",
      "legal software",
      "court cases",
      "government legal",
      "case tracking",
      "advocate management",
      "legal workspace"
    ],
    synonyms: ["court case manager", "government lawsuit tracking", "legal erp"],
    url: "/litigation-management",
    actionType: "route",
    metadata: {
      iconName: "Scale"
    }
  },

  // ==========================================
  // 3. SOLUTIONS: TELECOM, AI & CYBER SECURITY
  // ==========================================
  {
    id: "sol-telecom-broadband",
    title: "Telecom & High-Speed Broadband Services",
    category: "solutions",
    categoryLabel: "Telecom",
    subCategory: "Network Services",
    description:
      "Managed service provider for nationwide high-speed broadband and telecom networks, managing millions of subscribers, revenue cycles, network operations, and partner ecosystems.",
    keywords: [
      "telecom",
      "broadband",
      "railwire",
      "fiber",
      "high speed internet",
      "managed network",
      "isp",
      "subscribers",
      "wifi"
    ],
    synonyms: ["fiber broadband", "internet service", "optical fiber network"],
    badge: "RailWire MSP",
    url: "#telecom",
    actionType: "scroll",
    metadata: {
      iconName: "Wifi",
      targetId: "telecom"
    }
  },
  {
    id: "sol-icarkno-ai",
    title: "icarKno™ Enterprise Knowledge AI Platform",
    category: "solutions",
    categoryLabel: "AI & Digital",
    subCategory: "Artificial Intelligence",
    description:
      "AI-powered enterprise knowledge search, document intelligence, verifiable citations, and secure on-premises AI deployment with complete data sovereignty.",
    keywords: [
      "icarkno",
      "icar kno",
      "enterprise ai",
      "knowledge search",
      "document intelligence",
      "private ai",
      "on premises ai",
      "rag",
      "semantic search",
      "pdf intelligence"
    ],
    synonyms: ["ai search", "enterprise gpt", "knowledge base ai", "document scanner ai"],
    badge: "Enterprise AI",
    url: "#icarkno",
    actionType: "scroll",
    metadata: {
      iconName: "Cpu",
      targetId: "icarkno"
    }
  },
  {
    id: "sol-cyber-security",
    title: "Cyber Security Practice & Threat Resiliency",
    category: "solutions",
    categoryLabel: "Cyber Security",
    subCategory: "Security",
    description:
      "Proactive enterprise threat defense, cyber resiliency frameworks, and incident recovery strategies aligned with corporate and government priorities.",
    keywords: [
      "cyber security",
      "cybersecurity",
      "threat defense",
      "resiliency",
      "iso 27001",
      "soc",
      "data protection",
      "ransomware protection",
      "network security"
    ],
    synonyms: ["infosec", "cyber defense", "security audit"],
    url: "#cyber-security",
    actionType: "scroll",
    metadata: {
      iconName: "ShieldCheck",
      targetId: "cyber-security"
    }
  },

  // ==========================================
  // 4. SERVICES & TOOLS (APPLY, PARTNER, STATE PORTALS)
  // ==========================================
  {
    id: "svc-apply-connection",
    title: "Apply for New RailWire Connection",
    category: "services",
    categoryLabel: "Services",
    subCategory: "Online Application",
    description:
      "Submit an online application for new high-speed optical fiber RailWire broadband connection for homes, offices, and institutions.",
    keywords: [
      "apply online",
      "new connection",
      "get railwire",
      "broadband application",
      "new wifi",
      "install connection",
      "customer registration"
    ],
    synonyms: ["buy broadband", "request connection", "order wifi"],
    badge: "Online Service",
    url: "https://crm.railwire.co.in/Portalcntl/rlwr_apply_online_customer",
    actionType: "external",
    metadata: {
      iconName: "ExternalLink",
      externalLabel: "RailWire CRM Portal"
    }
  },
  {
    id: "svc-become-partner",
    title: "Become a RailWire Partner / MSP / AGNP",
    category: "services",
    categoryLabel: "Services",
    subCategory: "Partnership",
    description:
      "Join the RailWire partner network as a Local Cable Operator (LCO), Access Network Provider (AGNP), or MSP to deliver high-speed broadband.",
    keywords: [
      "partner",
      "become a partner",
      "agnp",
      "lco",
      "franchise",
      "cable operator",
      "railwire partner",
      "business opportunity"
    ],
    synonyms: ["partner registration", "distributor application", "isp franchise"],
    badge: "Partner Program",
    url: "https://crm.railwire.co.in/Portalcntl/rlwr_apply_online_partner",
    actionType: "external",
    metadata: {
      iconName: "Users",
      externalLabel: "Partner Application"
    }
  },
  {
    id: "svc-subscriber-portal-hub",
    title: "Subscriber Portal State Hub",
    category: "services",
    categoryLabel: "Services",
    subCategory: "Subscriber Access",
    description:
      "Select your state to recharge your account, pay broadband bills, test speeds, or log service requests across 24+ Indian states.",
    keywords: [
      "subscriber portal",
      "recharge",
      "bill payment",
      "railwire login",
      "state login",
      "account recharge",
      "broadband bill"
    ],
    synonyms: ["customer portal", "account dashboard", "user login"],
    url: "#subscriber-modal",
    actionType: "action",
    metadata: {
      iconName: "CreditCard",
      highlights: ["Karnataka", "Kerala", "Tamil Nadu", "Maharashtra", "Andhra Pradesh", "Delhi", "UP"]
    }
  },
  {
    id: "svc-portal-karnataka",
    title: "Karnataka RailWire Subscriber Portal",
    category: "services",
    categoryLabel: "Services",
    subCategory: "State Portal",
    description: "Official subscriber login, recharge, and support portal for RailWire users in Karnataka.",
    keywords: ["karnataka railwire", "bangalore wifi", "ka subscriber portal", "karnataka broadband"],
    url: "https://ka.railwire.co.in/",
    actionType: "external",
    metadata: {
      stateOrRegion: "Karnataka",
      externalLabel: "ka.railwire.co.in"
    }
  },
  {
    id: "svc-portal-kerala",
    title: "Kerala RailWire Subscriber Portal",
    category: "services",
    categoryLabel: "Services",
    subCategory: "State Portal",
    description: "Official subscriber login, recharge, and support portal for RailWire users in Kerala.",
    keywords: ["kerala railwire", "kochi internet", "kl subscriber portal", "kerala broadband"],
    url: "https://kl.railwire.co.in/",
    actionType: "external",
    metadata: {
      stateOrRegion: "Kerala",
      externalLabel: "kl.railwire.co.in"
    }
  },
  {
    id: "svc-portal-tamilnadu",
    title: "Tamil Nadu RailWire Subscriber Portal",
    category: "services",
    categoryLabel: "Services",
    subCategory: "State Portal",
    description: "Official subscriber login, bill payment, and support portal for RailWire users in Tamil Nadu.",
    keywords: ["tamil nadu railwire", "chennai internet", "tn subscriber portal", "tamil nadu broadband"],
    url: "https://tn.railwire.co.in/",
    actionType: "external",
    metadata: {
      stateOrRegion: "Tamil Nadu",
      externalLabel: "tn.railwire.co.in"
    }
  },
  {
    id: "svc-portal-maharashtra",
    title: "Maharashtra & Goa RailWire Subscriber Portal",
    category: "services",
    categoryLabel: "Services",
    subCategory: "State Portal",
    description: "Official subscriber login, bill payment, and support portal for RailWire users in Maharashtra and Goa.",
    keywords: ["maharashtra railwire", "mumbai internet", "pune wifi", "goa broadband", "mh subscriber portal"],
    url: "https://mh.railwire.co.in/",
    actionType: "external",
    metadata: {
      stateOrRegion: "Maharashtra & Goa",
      externalLabel: "mh.railwire.co.in"
    }
  },
  {
    id: "svc-portal-delhi",
    title: "Delhi RailWire Subscriber Portal",
    category: "services",
    categoryLabel: "Services",
    subCategory: "State Portal",
    description: "Official subscriber login and account management portal for RailWire users in Delhi NCR.",
    keywords: ["delhi railwire", "dl subscriber portal", "delhi broadband login", "ncr wifi"],
    url: "https://dl.railwire.co.in/",
    actionType: "external",
    metadata: {
      stateOrRegion: "Delhi",
      externalLabel: "dl.railwire.co.in"
    }
  },
  {
    id: "svc-ai-assistant",
    title: "SRIT AI Assistant Interactive Widget",
    category: "services",
    categoryLabel: "Services",
    subCategory: "AI Support",
    description: "Chat with SRIT's automated interactive AI assistant to answer queries about products, plans, and company services.",
    keywords: ["ai chat", "assistant", "chatbot", "help widget", "support chat", "talk to ai"],
    synonyms: ["virtual assistant", "live chat", "support bot"],
    badge: "Interactive AI",
    url: "#ai-chat",
    actionType: "action",
    metadata: {
      iconName: "Sparkles"
    }
  },

  // ==========================================
  // 5. SITE NAVIGATION & PAGES
  // ==========================================
  {
    id: "page-home",
    title: "SRIT Home Page",
    category: "pages",
    categoryLabel: "Pages",
    description: "SRIT official homepage showcasing our flagship healthcare, e-governance, telecom, and AI engineering offerings.",
    keywords: ["home", "main page", "start", "overview", "srit india limited"],
    url: "/",
    actionType: "route",
    metadata: { iconName: "Home" }
  },
  {
    id: "page-healthcare",
    title: "Healthcare Solutions Page",
    category: "pages",
    categoryLabel: "Pages",
    description: "Dedicated page detailing SRIT's hospital suites, clinical modules, infrastructure, and case deployments.",
    keywords: ["healthcare page", "hospital solutions", "his page", "emr page"],
    url: "/healthcare",
    actionType: "route",
    metadata: { iconName: "Activity" }
  },
  {
    id: "page-egov",
    title: "e-Governance Solutions Page",
    category: "pages",
    categoryLabel: "Pages",
    description: "In-depth overview of SRIT's citizen and municipal platforms including e-District, eCIVIC, and PlanPermit.",
    keywords: ["egovernance page", "government solutions", "smart city page"],
    url: "/egovernance",
    actionType: "route",
    metadata: { iconName: "Landmark" }
  },
  {
    id: "page-telecom",
    title: "Telecom & Broadband Page",
    category: "pages",
    categoryLabel: "Pages",
    description: "Details regarding SRIT managed telecom services, optical networks, and state operations.",
    keywords: ["telecom page", "broadband page", "railwire info"],
    url: "/telecom",
    actionType: "route",
    metadata: { iconName: "Wifi" }
  },
  {
    id: "page-insurance",
    title: "Insurance IT Solutions Page",
    category: "pages",
    categoryLabel: "Pages",
    description: "Enterprise IT solutions for insurance claim management, underwriting workflows, and policy administration.",
    keywords: ["insurance page", "claims software", "policy tech", "tpa erp"],
    url: "/insurance",
    actionType: "route",
    metadata: { iconName: "Shield" }
  },
  {
    id: "page-projects-wins",
    title: "Projects & Wins Showcase",
    category: "pages",
    categoryLabel: "Pages",
    description: "Comprehensive record of successful government and enterprise project deployments and industry contracts.",
    keywords: ["projects", "wins", "case studies", "tenders", "deployments", "milestones"],
    url: "/project-wins",
    actionType: "route",
    metadata: { iconName: "Trophy" }
  },
  {
    id: "page-company",
    title: "About SRIT Company",
    category: "pages",
    categoryLabel: "Pages",
    description: "SRIT history since 1999, vision, corporate philosophy, executive leadership, and global footprint.",
    keywords: ["about us", "company", "who we are", "history", "leadership", "mission"],
    url: "/company",
    actionType: "route",
    metadata: { iconName: "Building" }
  },
  {
    id: "page-management",
    title: "Executive Management & Leadership",
    category: "pages",
    categoryLabel: "Pages",
    description: "Profile of the Board of Directors, executive management team, and technology advisory leadership.",
    keywords: ["management", "board of directors", "leadership", "executives", "ceo", "directors"],
    url: "/management",
    actionType: "route",
    metadata: { iconName: "Users" }
  },
  {
    id: "page-invest-partner",
    title: "Invest & Partner with SRIT",
    category: "pages",
    categoryLabel: "Pages",
    description: "Strategic investment opportunities, institutional partnerships, and alliance frameworks with SRIT.",
    keywords: ["invest", "partner with us", "strategic alliances", "joint ventures"],
    url: "/invest",
    actionType: "route",
    metadata: { iconName: "Handshake" }
  },
  {
    id: "page-recognition",
    title: "Awards & Industry Recognition",
    category: "pages",
    categoryLabel: "Pages",
    description: "Awards, accolades, CMMI Level 5 benchmarks, and government recognitions achieved by SRIT.",
    keywords: ["recognition", "awards", "honors", "cmmi 5", "emram award"],
    url: "/recognition",
    actionType: "route",
    metadata: { iconName: "Award" }
  },
  {
    id: "page-contact",
    title: "Contact SRIT & Corporate Offices",
    category: "pages",
    categoryLabel: "Pages",
    description: "Get in touch with SRIT sales, enterprise support, and regional office locations across India.",
    keywords: ["contact", "contact us", "email", "office address", "phone number", "info@sritindia.com"],
    synonyms: ["reach us", "customer care", "helpdesk"],
    url: "/contact-us",
    actionType: "route",
    metadata: { iconName: "PhoneCall" }
  },
  {
    id: "page-media",
    title: "Media Releases & Press Coverage",
    category: "pages",
    categoryLabel: "Pages",
    description: "Official press releases, media coverage, event appearances, and public announcements.",
    keywords: ["media", "press", "news", "announcements", "coverage"],
    url: "/media",
    actionType: "route",
    metadata: { iconName: "Newspaper" }
  },

  // ==========================================
  // 6. INVESTOR RELATIONS & GOVERNANCE
  // ==========================================
  {
    id: "inv-overview",
    title: "Investor Relations Overview",
    category: "investors",
    categoryLabel: "Investors",
    subCategory: "Investor Relations",
    description: "Investor relations portal for shareholders, analysts, financial reports, and corporate governance updates.",
    keywords: ["investor", "investors", "shareholders", "investor relations", "equity", "nse", "bse"],
    badge: "Listed (NSE/BSE)",
    url: "/investor",
    actionType: "route",
    metadata: { iconName: "Briefcase" }
  },
  {
    id: "inv-financials",
    title: "Financial Statements & Quarterly Results",
    category: "investors",
    categoryLabel: "Investors",
    subCategory: "Financials",
    description: "Quarterly and annual financial results, balance sheets, audited statements, and revenue growth metrics.",
    keywords: ["financials", "quarterly results", "q1", "q2", "q3", "q4", "balance sheet", "p&l", "profit", "revenue"],
    url: "/investors-information",
    actionType: "route",
    metadata: { iconName: "TrendingUp" }
  },
  {
    id: "inv-annual-report",
    title: "Annual Reports & Filings",
    category: "investors",
    categoryLabel: "Investors",
    subCategory: "Reports",
    description: "Download published annual reports, auditor commentary, and performance reviews.",
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
    description: "Corporate governance policies, Board committee charters, stakeholder relationship protocols, and ethics codes.",
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
    description: "Official company policies including Whistleblower policy, Insider Trading code, CSR, and Fair Disclosure guidelines.",
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
    description: "Initial Public Offering (IPO) prospectus, red herring prospectus, allocation details, and listing documents.",
    keywords: ["ipo", "ipo documents", "prospectus", "rhp", "listing date", "bse listing", "nse listing"],
    badge: "IPO",
    url: "/investors-information#ipo",
    actionType: "route",
    metadata: { iconName: "FileText" }
  },

  // ==========================================
  // 7. CERTIFICATIONS & COMPANY CREDENTIALS
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
    title: "NSE & BSE Stock Exchange Listing",
    category: "certifications",
    categoryLabel: "Certifications",
    subCategory: "Corporate Credential",
    description: "SRIT India Limited is officially listed on both the National Stock Exchange (NSE) and Bombay Stock Exchange (BSE).",
    keywords: ["stock exchange", "nse", "bse", "listed company", "stock ticker", "market listing"],
    badge: "NSE/BSE",
    url: "#hero",
    actionType: "scroll",
    metadata: { iconName: "TrendingUp" }
  },

  // ==========================================
  // 8. RESOURCES, FAQS & CASE STUDIES
  // ==========================================
  {
    id: "faq-new-connection",
    title: "FAQ: How to get a new RailWire connection?",
    category: "resources",
    categoryLabel: "FAQs & Guides",
    subCategory: "FAQ",
    description:
      "Apply through the online portal or reach out to your nearest local partner for quick site survey, fiber installation, and same-day activation.",
    keywords: ["how to apply", "installation procedure", "new connection steps", "quick activation", "faq connection"],
    url: "#faq",
    actionType: "scroll",
    metadata: { iconName: "HelpCircle" }
  },
  {
    id: "faq-documents-required",
    title: "FAQ: What documents are required for installation?",
    category: "resources",
    categoryLabel: "FAQs & Guides",
    subCategory: "FAQ",
    description:
      "Valid ID proof (such as Aadhaar card, Voter ID), passport photograph, and an active registered mobile number.",
    keywords: ["documents required", "id proof", "aadhaar", "address proof", "documents for wifi"],
    url: "#faq",
    actionType: "scroll",
    metadata: { iconName: "FileText" }
  },
  {
    id: "faq-unlimited-plans",
    title: "FAQ: Are RailWire broadband plans unlimited?",
    category: "resources",
    categoryLabel: "FAQs & Guides",
    subCategory: "FAQ",
    description:
      "Yes, RailWire offers unlimited high-speed fiber broadband plans subject to fair usage policies (FUP) with high speed data tiers.",
    keywords: ["unlimited data", "fup policy", "data cap", "fair usage", "broadband plans"],
    url: "#faq",
    actionType: "scroll",
    metadata: { iconName: "Wifi" }
  },
  {
    id: "blog-rural-india",
    title: "Case Study: RailWire High-Speed Connectivity Across Rural India",
    category: "resources",
    categoryLabel: "Case Studies",
    subCategory: "Case Study",
    description:
      "How SRIT and RailWire expanded optical fiber high-speed connectivity to underserved and rural communities across India.",
    keywords: ["rural connectivity", "digital india", "case study", "rural broadband", "high speed expansion"],
    badge: "Case Study",
    url: "/railwire-expands-rural-india",
    actionType: "route",
    metadata: { iconName: "BookOpen" }
  },
  {
    id: "blog-fiber-future",
    title: "Insight: Why Fiber Broadband is the Future of Internet",
    category: "resources",
    categoryLabel: "Insights",
    subCategory: "Blog",
    description:
      "An analytical look at FTTH (Fiber-to-the-Home) symmetric speeds, low latency, and reliability compared to copper and legacy wireless networks.",
    keywords: ["fiber broadband", "ftth", "future of internet", "fiber optics", "high speed bandwidth"],
    url: "/why-fiber-broadband-is-the-future",
    actionType: "route",
    metadata: { iconName: "Sparkles" }
  },
  {
    id: "testimonial-universal-hospitals",
    title: "Client Testimonial: Universal Hospitals Group, Abu Dhabi",
    category: "resources",
    categoryLabel: "Testimonials",
    subCategory: "Testimonial",
    description:
      "Dr. Shabeer Nellikode (Managing Director): 'We chose SRIT's RHES suite through a rigorous evaluation to automate both existing & future hospitals.'",
    keywords: ["universal hospitals", "abu dhabi", "hospital client", "rhes review", "testimonial"],
    url: "#testimonials",
    actionType: "scroll",
    metadata: { iconName: "Quote", targetId: "testimonials" }
  },
  {
    id: "testimonial-tuv-rheinland",
    title: "Client Testimonial: TÜV Rheinland Japan Ltd",
    category: "resources",
    categoryLabel: "Testimonials",
    subCategory: "Testimonial",
    description:
      "David Preuss (CIO Group Asia): 'SRIT met our expectations on time and budget. Delivering the 110 man-months project in 3 months with no budget escalation.'",
    keywords: ["tuv rheinland", "japan", "david preuss", "client feedback", "testimonial"],
    url: "#testimonials",
    actionType: "scroll",
    metadata: { iconName: "Quote", targetId: "testimonials" }
  }
];
