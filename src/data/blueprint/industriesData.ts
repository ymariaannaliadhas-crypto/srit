export interface IndustryVertical {
  id: string;
  name: string;
  tagline: string;
  description: string;
  products: string[];
  keyOutcomes: string[];
  imageAsset: string;
}

export const INDUSTRIES_DATA: IndustryVertical[] = [
  {
    id: "healthcare",
    name: "Healthcare IT",
    tagline: "NABH-certified, interoperable digital health for national and state health grids.",
    description:
      "Transforming fragmented clinical workflows into unified, ABDM-compliant patient journeys. Built for multi-specialty hospitals, psychiatric institutes, and statewide health insurance programs.",
    products: [
      "RHES (HMIS/HIS)",
      "NABH-certified EMR",
      "Infinity RIS/PACS (DICOM 3.0)",
      "SiaH AI Health Analytics (CDSS)",
      "Statewide Health Insurance Claim Engines",
    ],
    keyOutcomes: [
      "2,000+ hospitals & OPD facilities digitized globally",
      "300M+ patient encounters managed",
      "National deployments: ESIC, NIMHANS, AP Health, West Bengal Health",
    ],
    imageAsset: "healthcare.webp",
  },
  {
    id: "egovernance",
    name: "e-Governance & Smart Cities",
    tagline: "Intelligent citizen portals, statewide municipal ERPs, and automated highway mobility.",
    description:
      "Eliminating bureaucratic friction through automated citizen service delivery, CAD-based building plan scrutiny, computer-vision traffic enforcement, and digital forensic tracking.",
    products: [
      "eDistrict & eCivic G2C Portals",
      "MP e-Nagar Palika 2.0 (417 ULBs)",
      "SAFE Kerala Computer-Vision Traffic Grid",
      "Forensic & Legal Laboratory ERP",
      "Automated Building Plan Approval (BPAS)",
    ],
    keyOutcomes: [
      "78+ government ICT transformation programs",
      "417 Urban Local Bodies unified under 1 cloud platform in MP",
      "National e-Governance Award recipient",
    ],
    imageAsset: "e-gov.jpg",
  },
  {
    id: "telecom",
    name: "Telecom & Broadband",
    tagline: "Carrier-grade BSS/OSS platforms powering state fiber highways and open-access networks.",
    description:
      "Managing millions of broadband and cellular subscribers, automated provisioning, optical line fault telemetry, and multi-tier revenue settlement for government networks and telcos.",
    products: [
      "R-Converge BSS/OSS Orchestration Engine",
      "R-Connect Billing & Inter-operator Settlement",
      "GPON EMS, ACS (TR-069) & BNG Integration",
      "Banking IoT & 4G-LTE ATM Cluster Connectivity",
    ],
    keyOutcomes: [
      "30,000+ km statewide optical fiber networks operational",
      "KFON: 30,000 govt institutions & 2M+ households connected",
      "18,000 SBI ATMs on high-availability cellular links",
    ],
    imageAsset: "telecom.jpg",
  },
  {
    id: "cybersecurity",
    name: "Cyber Security & Sovereign Cloud",
    tagline: "Zero-Trust defenses and 24/7 CSOC protecting mission-critical national utilities.",
    description:
      "Hardening public infrastructure against automated threats through micro-segmentation, continuous behavioral SIEM monitoring, VAPT, and 100% data residency under the DPDP Act.",
    products: [
      "24/7 Managed CSOC (Cyber Security Operations Center)",
      "Zero-Trust Micro-segmentation & Identity (RBAC/MFA)",
      "Data Defense, Tokenization & DPDP Compliance",
      "Vulnerability Assessment & Attack Surface Management (VAPT)",
      "SRIT Sovereign Cloud (#IndiaCloud with L&T)",
    ],
    keyOutcomes: [
      "100% Data Sovereignty on sovereign Indian cloud backbones",
      "Defending petabyte-scale citizen records and payment gateways",
      "Secured Defence OFB COMNET 2.0 across 59 locations",
    ],
    imageAsset: "cyber.jpg",
  },
];
