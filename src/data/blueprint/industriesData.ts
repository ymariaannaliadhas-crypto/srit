export interface IndustrySubProduct {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  brochureUrl?: string;
}

export interface IndustryPracticeHighlight {
  title: string;
  summary: string;
}

export interface IndustryAccreditationLink {
  label: string;
  url: string;
}

export interface IndustryVertical {
  id: string;
  name: string;
  blueprintScope: string;
  officialSummary: string;
  brochureUrl?: string;
  accreditations?: IndustryAccreditationLink[];
  subProducts: IndustrySubProduct[];
  practiceHighlights: IndustryPracticeHighlight[];
}

export const INDUSTRIES_DATA: IndustryVertical[] = [
  {
    id: "healthcare",
    name: "Healthcare IT",
    blueprintScope:
      "RHES (HMIS), NABH-certified EMR, Infinity RIS/PACS, SiaH AI Health Analytics, and state-wide health insurance management.",
    officialSummary:
      "Under the healthcare vertical, we provide integrated healthcare information technology solutions, including hospital information systems, revenue cycle management, digital health platforms and related system integration, implementation and maintenance services. Our solutions typically comprise implementation and deployment of healthcare IT systems such as RHES suites, hospital management systems, radiology information systems (“RIS”), picture archiving and communication systems (“PACS”), and other digital health modules. Our healthcare offerings also include customization, integration, data migration, and annual maintenance services for healthcare IT platforms, as well as deployment of connected health ecosystems and point-of-care device integration.",
    accreditations: [
      {
        label: "Validate in NABH (HMIS/HIS & EMR Certified)",
        url: "https://nabh.co/software/srit-india-limited/",
      },
      {
        label: "Validate in ABDM (ABHA M1, M2, M3 Certified)",
        url: "https://abdm.gov.in/certified-software",
      },
    ],
    subProducts: [
      {
        id: "abhis",
        name: "AbHIS",
        subtitle: "Advanced Hospital Information System",
        description:
          "Comprehensive, NABH-compliant hospital management information system designed for multi-specialty hospitals, teaching institutions, and corporate hospital chains.",
        brochureUrl: "https://www.sritindia.com/s/AbHIS.pdf",
      },
      {
        id: "rhes",
        name: "RHES",
        subtitle: "Renaissance / Rural Health Electronic Suite",
        description:
          "Scalable digital health platform and enterprise HMIS tailored for public health systems, medical colleges, primary health centres, and hospital networks.",
        brochureUrl: "https://www.sritindia.com/s/RHES.pdf",
      },
      {
        id: "homing",
        name: "Homing",
        subtitle: "Home Healthcare & Remote Monitoring",
        description:
          "Connected health solution enabling remote patient monitoring, post-discharge follow-ups, and telemedicine consultations.",
        brochureUrl: "https://www.sritindia.com/s/Homing.pdf",
      },
      {
        id: "infinity-pacs",
        name: "Infinity PACS",
        subtitle: "Picture Archiving & Communication System",
        description:
          "High-performance enterprise medical imaging platform with integrated DICOM viewer, RIS integration, and cloud-enabled archiving.",
        brochureUrl: "https://www.sritindia.com/s/Infinity-PACS.pdf",
      },
      {
        id: "siah",
        name: "SiaH",
        subtitle: "Smart Intelligence for Allied Healthcare",
        description:
          "AI-driven clinical intelligence and analytics platform empowering clinicians with diagnostic assistance and decision support.",
        brochureUrl: "https://www.sritindia.com/s/SiaH.pdf",
      },
    ],
    practiceHighlights: [
      {
        title: "Solutioning",
        summary:
          "Designed and deployed solutions for 250 to 1,800 bed hospitals, up to 150+ hospital chains, and 12–56 module stacks.",
      },
      {
        title: "Infrastructure",
        summary:
          "Actively managing 200+ servers with over 20 million patient records (>65 TB) across national networks, state data centers, and DR grids.",
      },
      {
        title: "Data Migration",
        summary:
          "Successfully migrated 2 to 18 years of legacy demographic, clinical, and financial data across 8+ large healthcare enterprises.",
      },
      {
        title: "Clinical Analytics",
        summary:
          "Dedicated practices in clinical, population, disease surveillance, and machine-learning based healthcare analytics.",
      },
    ],
  },
  {
    id: "egovernance",
    name: "e-Governance & Smart Cities",
    blueprintScope:
      "eDistrict G2C portals, MP e-Nagar Palika municipal ERP, SAFE Kerala AI traffic enforcement, Forensic & Legal ERP, and BPAS.",
    officialSummary:
      "Under the electronic governance vertical, we provide technology solutions and system integration services to Government clients, and Enterprises to enable digital governance, automation and secure IT infrastructure. Our services include design, development, implementation and maintenance of e-governance platforms, cybersecurity solutions, enterprise software, and integrated digital service delivery systems. Our solutions have supported digital transformation initiatives such as automated traffic enforcement systems, billing and revenue cycle management systems, and integrated IT platforms aimed at improving operational efficiency, transparency and service delivery for Government clients and Enterprises.",
    subProducts: [
      {
        id: "e-district",
        name: "E-District",
        subtitle: "Government-to-Citizen (G2C) Portal",
        description:
          "Digital Government-to-Citizen (G2C) platform used by State and district administrations to deliver statutory certificates, workflow-based processing, and service monitoring online.",
        brochureUrl: "https://www.sritindia.com/s/e-District.pdf",
      },
      {
        id: "ecivic",
        name: "eCIVIC",
        subtitle: "Municipal & Urban Administration Suite",
        description:
          "ERP for municipalities and urban development agencies covering works, projects, contracts, procurement, stores, revenue, property management, assets, HR, payroll, and finance.",
        brochureUrl: "https://www.sritindia.com/s/e-CIVIC.pdf",
      },
      {
        id: "planpermit",
        name: "PlanPermit",
        subtitle: "Automated Building Plan Approval",
        description:
          "Automated verification of building code directly from CAD drawing files for issuance of building permits, including a citizen portal and site inspection app across Karnataka, Haryana, Uttarakhand, and Bihar.",
        brochureUrl: "https://www.sritindia.com/s/PlanPermit.pdf",
      },
      {
        id: "agnipermit",
        name: "AgniPermit",
        subtitle: "Automated Fire Safety & NOC Platform",
        description:
          "Automated verification of fire code for issuance of building fire NOCs and fire permits directly from drawing files, including citizen portal and inspection app live statewide in Karnataka.",
        brochureUrl: "https://www.sritindia.com/s/AgniPermit.pdf",
      },
      {
        id: "litigation-management",
        name: "Litigation Management Software",
        subtitle: "Government Legal Workspace",
        description:
          "Dedicated legal workspace built for government bodies to track court cases, manage deadlines, organize documents, automate workflows, and collaborate efficiently.",
        brochureUrl: "https://www.sritindia.com/s/Provakil-SRIT.pdf",
      },
    ],
    practiceHighlights: [
      {
        title: "Citizen Service Automation",
        summary:
          "Paperless end-to-end G2C workflow automation across districts and Common Service Centres (CSCs).",
      },
      {
        title: "Urban Local Body ERP",
        summary:
          "Unified municipal revenue, property tax, utility billing, and civic grievance redressal.",
      },
      {
        title: "Automated CAD Scrutiny",
        summary:
          "Direct-from-drawing building bye-law and fire safety code verification for rapid permit issuance.",
      },
      {
        title: "Smart Mobility & Enforcement",
        summary:
          "Automated traffic enforcement, ANPR surveillance, and integrated command-and-control platforms.",
      },
    ],
  },
  {
    id: "telecom",
    name: "Telecom & Broadband",
    blueprintScope:
      "R-Converge OSS/BSS, R-Connect inter-operator billing, SWAN/IP-MPLS networks, and optical fiber orchestration (KFON, RailWire).",
    officialSummary:
      "Under the telecommunications and broadband vertical, we provide networking, connectivity, system integration and managed services for telecommunications, broadband and digital infrastructure projects. Our offerings include deployment and management of state-wide area networks, IP-MPLS networks, fibre optic infrastructure, broadband connectivity solutions and smart city digital infrastructure. Our services in this vertical include supply, installation, integration and maintenance of networking equipment and communication systems, as well as planning and deployment of optical fibre cable networks and associated infrastructure.",
    subProducts: [
      {
        id: "r-converge",
        name: "R-Converge BSS / OSS",
        subtitle: "Subscriber & Partner Management",
        description:
          "Carrier-grade software for managing networks, subscribers, LCO partners, revenue cycles, operations, and customer service across millions of broadband subscribers.",
      },
      {
        id: "r-connect",
        name: "R-Connect Billing",
        subtitle: "Inter-Operator Settlement Engine",
        description:
          "High-volume interconnect billing, tariff rating, and multi-operator revenue reconciliation engine (IOBAS/SPBAS) for national telecom carriers.",
      },
      {
        id: "swan-ip-mpls",
        name: "SWAN & IP-MPLS Networks",
        subtitle: "State Wide Area Networks",
        description:
          "End-to-end design, supply, installation, and management of State Wide Area Networks and secure IP-MPLS backbone infrastructure.",
      },
      {
        id: "turnkey-ofc",
        name: "Turnkey OFC & BharatNet Infrastructure",
        subtitle: "Optical Fibre Engineering",
        description:
          "Survey, civil engineering, trenching, ducting, optical fibre cable (OFC) laying, splicing, OTDR testing, and commissioning for statewide fiber grids.",
      },
    ],
    practiceHighlights: [
      {
        title: "BharatNet & NOFN Rollouts",
        summary:
          "Large-scale optical fibre network implementation connecting blocks, gram panchayats, and public institutions.",
      },
      {
        title: "State Wide Area Networks",
        summary:
          "Multi-tier IP-MPLS connectivity linking state headquarters, district collectorates, and taluk offices.",
      },
      {
        title: "Turnkey OFC Deployment",
        summary:
          "End-to-end survey, trenching, ducting, splicing, and commissioning of middle-mile and last-mile fiber.",
      },
      {
        title: "24x7 NOC & SLA Operations",
        summary:
          "Continuous Network Operating Centre monitoring, fault isolation, and managed service level enforcement.",
      },
    ],
  },
  {
    id: "cybersecurity",
    name: "Cyber Security & Sovereign Cloud",
    blueprintScope:
      "24/7 Managed CSOC, Zero-Trust micro-segmentation, VAPT, Sovereign Cloud hosting, and DPDP Act compliance.",
    officialSummary:
      "In an increasingly interconnected digital world, SRIT offers robust, end-to-end cybersecurity solutions and services to protect critical national infrastructure, government systems, financial networks, and enterprise data assets against evolving cyber threats. SRIT's Cyber Security Practice team helps organizations develop a proactive strategy to stay ahead of threats, establish cyber resiliency, and recover quickly from incidents.",
    brochureUrl: "https://www.sritindia.com/s/CyberSecurity-SRIT.pdf",
    subProducts: [
      {
        id: "security-products",
        name: "Security Products",
        subtitle: "Perimeter, Endpoint & Data Defense",
        description:
          "Next-Generation Firewalls (NGFW), Endpoint Detection & Response (EDR), Intrusion Detection & Prevention Systems (IDPS), Security Information & Event Management (SIEM), and Data Loss Prevention (DLP).",
        brochureUrl: "https://www.sritindia.com/s/CyberSecurity-SRIT.pdf",
      },
      {
        id: "managed-security-services",
        name: "Managed Security Services",
        subtitle: "VAPT, Red Teaming & SOC-as-a-Service",
        description:
          "Vulnerability Assessment & Penetration Testing (VAPT), Red Teaming, Cyber Threat Intelligence, Incident Response & Forensics, and 24/7 Security Operations Center (SOC) as a Service.",
        brochureUrl: "https://www.sritindia.com/s/CyberSecurity-SRIT.pdf",
      },
      {
        id: "governance-compliance",
        name: "Governance & Compliance Consulting",
        subtitle: "ISO 27001, CERT-In & DPDP Act",
        description:
          "ISO 27001 compliance, CERT-In compliance audits, Digital Personal Data Protection (DPDP) Act privacy governance, security architecture review, and risk management.",
        brochureUrl: "https://www.sritindia.com/s/CyberSecurity-SRIT.pdf",
      },
      {
        id: "cyber-defense-sovereign-cloud",
        name: "Cyber Defense Training & Sovereign Cloud",
        subtitle: "Simulation & #IndiaCloud Hosting",
        description:
          "Cyber defense simulation, employee security awareness training, executive cyber crisis management workshops, and sovereign cloud hosting with 100% domestic data residency.",
      },
    ],
    practiceHighlights: [
      {
        title: "Critical Infrastructure Defense",
        summary:
          "Protecting power grids, public utilities, defense networks, and state registries against targeted intrusions.",
      },
      {
        title: "24/7 SOC-as-a-Service",
        summary:
          "Continuous SIEM telemetry correlation, threat intelligence, and rapid incident containment.",
      },
      {
        title: "Regulatory & DPDP Audits",
        summary:
          "Full-lifecycle compliance consulting aligned with CERT-In directives, ISO 27001, and the DPDP Act.",
      },
      {
        title: "Sovereign Cloud Hosting",
        summary:
          "Tier-III primary data center and active disaster recovery hosting with strict data isolation.",
      },
    ],
  },
];
