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
      "Automated verification of building codes directly from CAD drawing files for issuance of building permits. Implemented across Karnataka, Haryana, Uttarakhand, and Bihar with 20,000+ architects and planners.",
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
  // 4. SERVICES & TOOLS
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
    synonyms: ["demo booking", "sales enquiry", "solution preview"],
    url: "/contact-us",
    actionType: "route",
    metadata: {
      iconName: "Sparkles"
    }
  },
  {
    id: "svc-ai-assistant",
    title: "SRIT AI Assistant Interactive Widget",
    category: "services",
    categoryLabel: "Services",
    subCategory: "AI Support",
    description:
      "Chat with SRIT's automated interactive AI assistant to answer queries about products, services, and company capabilities.",
    keywords: ["ai chat", "assistant", "chatbot", "help widget", "support chat", "talk to ai"],
    synonyms: ["virtual assistant", "live chat", "support bot"],
    badge: "Interactive AI",
    url: "#ai-chat",
    actionType: "action",
    metadata: {
      iconName: "Sparkles"
    }
  },
  {
    id: "svc-partner-alliance",
    title: "Partner & Strategic Alliance Program",
    category: "services",
    categoryLabel: "Services",
    subCategory: "Alliances",
    description:
      "Explore technology, channel, and strategic integration partnerships with SRIT India across healthcare and e-governance domains.",
    keywords: ["partner", "strategic alliances", "channel partner", "collaboration", "joint venture"],
    url: "/invest",
    actionType: "route",
    metadata: {
      iconName: "Briefcase"
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
    description:
      "SRIT official homepage showcasing our flagship healthcare, e-governance, telecom, and AI engineering offerings.",
    keywords: ["home", "main page", "start", "overview", "srit india limited"],
    url: "/",
    actionType: "route",
    metadata: { iconName: "Home" }
  },
  {
    id: "page-management",
    title: "Executive Management & Leadership",
    category: "pages",
    categoryLabel: "Pages",
    subCategory: "Leadership",
    description:
      "Meet the Board of Directors, executive management team, and technology advisory leadership driving SRIT.",
    keywords: ["management", "board of directors", "leadership", "executives", "directors", "team"],
    url: "/management",
    actionType: "route",
    metadata: { iconName: "Users" }
  },
  {
    id: "page-healthcare",
    title: "Healthcare Solutions Section",
    category: "pages",
    categoryLabel: "Pages",
    description:
      "Detailed view of SRIT's hospital suites, clinical modules, infrastructure, and case deployments.",
    keywords: ["healthcare page", "hospital solutions", "his page", "emr page"],
    url: "/#healthcare",
    actionType: "scroll",
    metadata: { iconName: "Activity", targetId: "healthcare" }
  },
  {
    id: "page-egov",
    title: "e-Governance Solutions Section",
    category: "pages",
    categoryLabel: "Pages",
    description:
      "Overview of SRIT's citizen and municipal platforms including e-District, eCIVIC, and PlanPermit.",
    keywords: ["egovernance page", "government solutions", "smart city page"],
    url: "/#e-governance",
    actionType: "scroll",
    metadata: { iconName: "Landmark", targetId: "e-governance" }
  },
  {
    id: "page-telecom",
    title: "Telecom & Network Services Section",
    category: "pages",
    categoryLabel: "Pages",
    description:
      "Details regarding SRIT managed telecom services, optical networks, and state operations.",
    keywords: ["telecom page", "broadband page", "network services"],
    url: "/#telecom",
    actionType: "scroll",
    metadata: { iconName: "Wifi", targetId: "telecom" }
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
    id: "page-contact",
    title: "Contact SRIT & Corporate Offices",
    category: "pages",
    categoryLabel: "Pages",
    description:
      "Get in touch with SRIT corporate headquarters in Bengaluru and regional support offices.",
    keywords: ["contact", "contact us", "email", "office address", "phone number", "info@sritindia.com"],
    synonyms: ["reach us", "customer care", "helpdesk"],
    url: "/contact-us",
    actionType: "route",
    metadata: { iconName: "PhoneCall" }
  },
  {
    id: "page-projects-wins",
    title: "Projects & Wins Showcase",
    category: "pages",
    categoryLabel: "Pages",
    description:
      "Comprehensive record of successful government and enterprise project deployments and contract wins.",
    keywords: ["projects", "wins", "case studies", "tenders", "deployments", "milestones"],
    url: "/project-wins",
    actionType: "route",
    metadata: { iconName: "Trophy" }
  },
  {
    id: "page-recognition",
    title: "Awards & Industry Recognition",
    category: "pages",
    categoryLabel: "Pages",
    description:
      "Awards, accolades, CMMI Level 5 benchmarks, and government recognitions achieved by SRIT.",
    keywords: ["recognition", "awards", "honors", "cmmi 5", "emram award"],
    url: "/recognition",
    actionType: "route",
    metadata: { iconName: "Award" }
  },
  {
    id: "page-media",
    title: "Media Releases & Press Coverage",
    category: "pages",
    categoryLabel: "Pages",
    description:
      "Official press releases, media coverage, event appearances, and public announcements.",
    keywords: ["media", "press", "news", "announcements", "coverage"],
    url: "/media",
    actionType: "route",
    metadata: { iconName: "Newspaper" }
  },

  // ==========================================
  // 6. LEADERSHIP PROFILES (MANAGEMENT)
  // ==========================================
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

  // ==========================================
  // 7. INVESTOR RELATIONS & GOVERNANCE
  // ==========================================
  {
    id: "inv-overview",
    title: "Investor Relations Overview",
    category: "investors",
    categoryLabel: "Investors",
    subCategory: "Investor Relations",
    description:
      "Investor relations portal for shareholders, analysts, financial reports, and corporate governance updates.",
    keywords: ["investor", "investors", "shareholders", "investor relations", "equity", "nse", "bse"],
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
    keywords: ["ipo", "ipo documents", "prospectus", "rhp", "listing date", "bse listing", "nse listing"],
    badge: "IPO",
    url: "/investors-information#ipo",
    actionType: "route",
    metadata: { iconName: "FileText" }
  },

  // ==========================================
  // 8. CERTIFICATIONS & COMPANY CREDENTIALS
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
    description:
      "SRIT India Limited is officially listed on both the National Stock Exchange (NSE) and Bombay Stock Exchange (BSE).",
    keywords: ["stock exchange", "nse", "bse", "listed company", "stock ticker", "market listing"],
    badge: "NSE/BSE",
    url: "#hero",
    actionType: "scroll",
    metadata: { iconName: "TrendingUp" }
  },

  // ==========================================
  // 9. RESOURCES, FAQS & CASE STUDIES
  // ==========================================
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
  },
  {
    id: "testimonial-baxter",
    title: "Client Testimonial: Baxter International Inc.",
    category: "resources",
    categoryLabel: "Testimonials",
    subCategory: "Testimonial",
    description:
      "Robert Seguy: 'SRIT brings the highest standards with respect to business ethics and technology. A reliable, dependable team exceeding expectations.'",
    keywords: ["baxter", "baxter international", "client review", "testimonial"],
    url: "#testimonials",
    actionType: "scroll",
    metadata: { iconName: "Quote", targetId: "testimonials" }
  },
  {
    id: "testimonial-bcg",
    title: "Client Testimonial: Boston Consulting Group (BCG)",
    category: "resources",
    categoryLabel: "Testimonials",
    subCategory: "Testimonial",
    description:
      "Günter Degitz: 'We have been pleased with SRIT's project delivery capabilities in terms of implementation cost and final quality of the systems.'",
    keywords: ["bcg", "boston consulting group", "client review", "testimonial"],
    url: "#testimonials",
    actionType: "scroll",
    metadata: { iconName: "Quote", targetId: "testimonials" }
  },
  {
    id: "faq-healthcare-standards",
    title: "FAQ: What healthcare standards and certifications does SRIT support?",
    category: "resources",
    categoryLabel: "FAQs",
    subCategory: "FAQ",
    description:
      "SRIT's HMIS/EMR suites comply with NABH certifications, HL7, DICOM, and ISO 27001 data protection standards for hospital networks.",
    keywords: ["healthcare standards", "nabh compliance", "hl7", "dicom", "emr compliance", "hospital cert"],
    url: "#faq",
    actionType: "scroll",
    metadata: { iconName: "HelpCircle" }
  },
  {
    id: "faq-icarkno-privacy",
    title: "FAQ: How does icarKno AI ensure enterprise data privacy?",
    category: "resources",
    categoryLabel: "FAQs",
    subCategory: "FAQ",
    description:
      "icarKno can be deployed completely on-premises with air-gapped security, zero external telemetry, and strict enterprise role-based access control.",
    keywords: ["icarkno privacy", "private ai", "on prem security", "air gapped ai", "enterprise privacy"],
    url: "#icarkno",
    actionType: "scroll",
    metadata: { iconName: "HelpCircle" }
  }
];
