export interface HeroSolutionCard {
  id: string;
  cardNumber: string;
  title: string;
  cardTeaser: string;
  iconName: string;
  badge: string;
  // Detail Drawer Content (Unpacked from Column G - Tab 2)
  drawer: {
    headlineTitle: string;
    strategicNarrative: string;
    proprietarySuite: {
      name: string;
      description: string;
    }[];
    provenMetrics: string[];
    spotlightDeployments: {
      client: string;
      details: string;
    }[];
  };
}

export const HERO_SOLUTION_CARDS: HeroSolutionCard[] = [
  {
    id: "connected-care",
    cardNumber: "01",
    title: "The Future of Connected Care: ABHA & EMR Standards",
    cardTeaser: "Transforming fragmented hospital ecosystems into ABDM-compliant, unified patient health journeys at population scale.",
    iconName: "Activity",
    badge: "Digital Health",
    drawer: {
      headlineTitle: "Interoperable Digital Health Infrastructure at Population Scale",
      strategicNarrative:
        "Transforming fragmented, paper-heavy hospital ecosystems into standards-compliant, unified patient health journeys. Built natively for ABDM (Ayushman Bharat Digital Mission) compliance, national health insurance schemes, and multi-tier hospital networks.",
      proprietarySuite: [
        {
          name: "RHES (Renaissance Health Enterprise Suite)",
          description: "Comprehensive enterprise HMIS covering IPD, OPD, OT management, pharmacy, and hospital ERP.",
        },
        {
          name: "AbHIS & Clinical EMR",
          description: "Lightweight, NABH-certified Electronic Medical Record platform supporting SNOMED CT, ICD-10, and FHIR/HL7 standards.",
        },
        {
          name: "Infinity PACS & RIS",
          description: "DICOM 3.0 imaging pipeline with zero-downtime policy engines and advanced compression.",
        },
        {
          name: "SiaH (AI Health Analytics)",
          description: "NLP- and ML-based clinical decision support system (CDSS) for comorbidity risk modeling and disease prediction.",
        },
      ],
      provenMetrics: [
        "2,000+ hospitals and OPD facilities digitized globally.",
        "300M+ patient EMR encounters processed.",
        "20M+ secure patient health records under active management.",
      ],
      spotlightDeployments: [
        {
          client: "Andhra Pradesh Health Benefits System",
          details: "Managed digital insurance claims for 1M+ beneficiaries annually across 2,200+ hospitals.",
        },
        {
          client: "West Bengal State Health Department",
          details: "Deployed across 103 major state/district hospitals and 4,000+ PHCs, linked to centralized drug warehouses.",
        },
        {
          client: "NIMHANS Bengaluru & ESIC",
          details: "National-scale psychiatric and workforce hospital automation across India.",
        },
      ],
    },
  },
  {
    id: "urban-mobility",
    cardNumber: "02",
    title: "AI-First Public Administration & Urban Mobility",
    cardTeaser: "Replacing bureaucratic silos with automated citizen portals, municipal ERPs, and edge computer-vision highway enforcement.",
    iconName: "Landmark",
    badge: "Smart Governance",
    drawer: {
      headlineTitle: "Intelligent Governance Platforms & Real-Time Urban Analytics",
      strategicNarrative:
        "Replacing bureaucratic silos with automated citizen portals and computer-vision public surveillance. Automating revenue administration, regulatory approvals, and roadside enforcement without manual interference.",
      proprietarySuite: [
        {
          name: "eDistrict & eCivic Portals",
          description: "End-to-end G2C platform managing municipal permits, land-use approvals, birth/death registries, and welfare disbursements.",
        },
        {
          name: "Computer Vision AI Enforcement Engines",
          description: "Edge-deployed ML models for automatic number plate recognition (ANPR), speed tracking, and lane violations.",
        },
        {
          name: "Forensic & Legal ERP",
          description: "Specialized digital evidence tracking, chain-of-custody logging, and case workflows for state forensic laboratories.",
        },
        {
          name: "Automated Building Plan Approval (BPAS)",
          description: "Algorithmic scrutiny of architectural CAD designs against state bye-laws and fire safety regulations.",
        },
      ],
      provenMetrics: [
        "78+ government ICT transformation programs executed across Indian states.",
        "417 Urban Local Bodies (ULBs) unified under a single platform in Madhya Pradesh.",
        "350,000+ traffic infractions logged within 72 hours of go-live on state highway corridors.",
      ],
      spotlightDeployments: [
        {
          client: "SAFE Kerala Project",
          details: "State-wide automated AI traffic surveillance grid implemented in partnership with Keltron to improve road compliance and reduce accident fatalities.",
        },
        {
          client: "Madhya Pradesh e-Nagar Palika 2.0",
          details: "Unified citizen mobile app and municipal operations platform spanning all 417 ULBs statewide.",
        },
        {
          client: "Maharashtra DFSL Automation",
          details: "Cloud-connected laboratory information management across 13 state forensic labs.",
        },
      ],
    },
  },
  {
    id: "digital-highways",
    cardNumber: "03",
    title: "Statewide Digital Highways: Next-Gen OSS/BSS Networks",
    cardTeaser: "Carrier-grade BSS/OSS platforms powering open-access middle-mile and last-mile fiber and cellular connectivity.",
    iconName: "Network",
    badge: "Telecom & DPI",
    drawer: {
      headlineTitle: "Carrier-Grade BSS/OSS Platforms for Broadband Infrastructure",
      strategicNarrative:
        "Powering open-access middle-mile and last-mile connectivity. Managing millions of concurrent fiber/cellular subscribers, automated provisioning, and multi-tier revenue settlement for government and telecom operators.",
      proprietarySuite: [
        {
          name: "R-Converge BSS/OSS",
          description: "Carrier-grade subscription billing, partner settlement, CRM, and network orchestration engine.",
        },
        {
          name: "R-Connect Billing",
          description: "Inter-operator billing, tariff rating, and reconciliation engine (IOBAS/SPBAS).",
        },
        {
          name: "Network & Device Orchestration",
          description: "Automated integration with GPON EMS, ACS (TR-069), BNG routers, and AAA radius authentication.",
        },
        {
          name: "Banking IoT & Cell Infrastructure",
          description: "Enterprise 4G-LTE managed connectivity platforms for distributed ATM clusters.",
        },
      ],
      provenMetrics: [
        "30,000+ km statewide optical fiber networks lit and operational.",
        "15,000 bank ATM sites transitioned to high-availability 4G cellular links.",
        "510,000+ broadband subscribers managed on national rail networks.",
      ],
      spotlightDeployments: [
        {
          client: "KFON (Kerala Fibre Optic Network)",
          details: "Built in consortium with BEL to link 30,000 government offices and provide subsidized fiber to 2M+ households, fully orchestrated via R-Converge.",
        },
        {
          client: "RailTel RailWire",
          details: "Managed service operations powering ISP customer onboarding, recharge cycles, and localized cable operator revenue splits.",
        },
        {
          client: "BSNL National Interconnect",
          details: "Inter-operator accounting and call settlement engine spanning pan-India telecom circles.",
        },
      ],
    },
  },
  {
    id: "zero-trust-csoc",
    cardNumber: "04",
    title: "Zero-Trust CSOC Architectures for Critical Utilities",
    cardTeaser: "Hardened cybersecurity & resilient public infrastructure defense with 24/7 Security Operations Center oversight.",
    iconName: "ShieldAlert",
    badge: "Cyber Resilience",
    drawer: {
      headlineTitle: "Hardened Cybersecurity & Resilient Public Infrastructure Defense",
      strategicNarrative:
        "Protecting mission-critical state backbones, healthcare records, and public utilities against modern attack vectors. Combining Zero-Trust network segmentation with 24/7 Security Operations Center (CSOC) oversight.",
      proprietarySuite: [
        {
          name: "24/7 Managed CSOC (Cyber Security Operations Center)",
          description: "Real-time SIEM, telemetry aggregation, behavioral threat anomaly hunting, and instant incident response.",
        },
        {
          name: "Identity & Micro-Segmentation",
          description: "Role-Based Access Control (RBAC), multi-factor authentication (MFA/OTP), and least-privilege boundary rules.",
        },
        {
          name: "Data Defense & Privacy Compliance",
          description: "In-transit TLS 1.3 encryption, at-rest database tokenization, and strict compliance with ISO 27001, CERT-In, and DPDP Act.",
        },
        {
          name: "Vulnerability Assessment & Attack Surface Management (VAPT)",
          description: "Continuous automated pen-testing, endpoint compliance checks, and secure container runtimes.",
        },
      ],
      provenMetrics: [
        "100% Data Sovereignty: Architecture deployed on private government clouds and dual-zone data centers (Primary + Active DR).",
        "24/7 Continuous Defense: Defending petabyte-scale citizen records, payment gateways, and municipal databases against ransomware and breaches.",
      ],
      spotlightDeployments: [
        {
          client: "Defence OFB COMNET 2.0",
          details: "Secure IP-MPLS VPN communication network deployed across 59 defense manufacturing locations with centralized and redundant DR sites.",
        },
        {
          client: "Statewide Service Delivery Gateways (SSDG)",
          details: "Hardened API exchange protecting financial and demographic transactions between departments and external banking conduits.",
        },
      ],
    },
  },
];
