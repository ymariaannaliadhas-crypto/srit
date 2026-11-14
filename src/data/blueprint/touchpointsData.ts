export interface CitizenTouchpoint {
  id: string;
  number: number;
  domain: string;
  title: string;
  presenterScript: string;
  proofPoints: string;
  badge: string;
  videoPlaceholderUrl?: string;
}

export const CITIZEN_TOUCHPOINTS: CitizenTouchpoint[] = [
  {
    id: "touchpoint-1",
    number: 1,
    domain: "Traffic & Road Safety",
    title: "AI Highway Vision Curbing Fatalities in Real Time",
    presenterScript:
      "AI-enabled traffic enforcement cameras that automatically spot helmetless riders, speeding, or seatbelt violations—making highways safer without manual intervention.",
    proofPoints: "SAFE Kerala Project (in collaboration with Keltron); 3.5+ lakh automated violations detected in 72 hours.",
    badge: "Mobility AI",
  },
  {
    id: "touchpoint-2",
    number: 2,
    domain: "Broadband & Public Wi-Fi",
    title: "Carrier-Grade Fiber Reaching Every Citizen",
    presenterScript:
      "Carrier-grade OSS/BSS software managing everyday high-speed internet and fiber optic networks connecting government offices, schools, and households.",
    proofPoints: "RailTel's RailWire internet & Kerala's KFON fiber optic network connecting 30,000+ government offices and 2M+ homes.",
    badge: "Digital Inclusion",
  },
  {
    id: "touchpoint-3",
    number: 3,
    domain: "Hospitals & Medical Care",
    title: "Zero-Friction Clinical Care at Population Scale",
    presenterScript:
      "Digital hospital management systems (RHES / AbHIS) streamlining OPD/IPD care, electronic medical records, and cashless treatment for millions of patients.",
    proofPoints: "ESIC hospitals nationwide, medical colleges in West Bengal (103 hospitals, 4,000+ PHCs), and primary health centers in Tamil Nadu.",
    badge: "Connected Health",
  },
  {
    id: "touchpoint-4",
    number: 4,
    domain: "Government Citizen Portals",
    title: "Doorstep Civic Delivery Without Bureaucratic Queues",
    presenterScript:
      "Online e-District portals that let everyday citizens download birth certificates, land records, or income certificates locally without visiting government offices.",
    proofPoints: "State-wide e-District portals in Odisha (30 districts, 5,000+ CSCs) and Chhattisgarh.",
    badge: "e-Governance",
  },
  {
    id: "touchpoint-5",
    number: 5,
    domain: "Banking & Financial Access",
    title: "High-Availability 4G Connectivity for Rural ATMs",
    presenterScript:
      "High-availability 4G LTE enterprise network connectivity powering reliable ATM transactions and branch operations across urban and rural India.",
    proofPoints: "Setup and managed connectivity for 18,000 State Bank of India (SBI) locations and ATMs.",
    badge: "Financial Inclusion",
  },
];
