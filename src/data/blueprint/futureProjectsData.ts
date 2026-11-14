export interface FutureProject {
  id: string;
  title: string;
  tagline: string;
  description: string;
  partner: string;
  status: "Under Deployment" | "Active Pilot" | "Upcoming Rollout";
  badge: string;
}

export const FUTURE_PROJECTS_DATA: FutureProject[] = [
  {
    id: "fp-1",
    title: "Sovereign AI Cloud Expansion (#IndiaCloud)",
    tagline: "Enterprise DC-DR hosting for high-throughput AI workloads",
    description:
      "Partnering with Larsen & Toubro (L&T) to scale SRIT Cloud across enterprise data centers, ensuring 100% data residency and DPDP Act compliance for state governments and regulated banks.",
    partner: "Larsen & Toubro (L&T)",
    status: "Under Deployment",
    badge: "Sovereign Infrastructure",
  },
  {
    id: "fp-2",
    title: "ShaktiDB (#IndiaDB) Sovereign Database Rollout",
    tagline: "Next-gen indigenous high-security database for national defense and governance",
    description:
      "In strategic deep-tech alliance with IIT Madras Pravartak Technologies Foundation, commercializing and scaling ShaktiDB for population-scale mission-critical registries.",
    partner: "IIT Madras Pravartak",
    status: "Active Pilot",
    badge: "Deep-Tech R&D",
  },
  {
    id: "fp-3",
    title: "Next-Gen ABDM Unified State Health Interoperability",
    tagline: "Extending clinical decision AI & ABHA health IDs across multi-tier state health grids",
    description:
      "Integrating predictive triage, comorbidity risk modeling (SiaH AI), and automated insurance claims adjudication into upcoming state health transformations.",
    partner: "National Health Authority (ABDM)",
    status: "Upcoming Rollout",
    badge: "Digital Health AI",
  },
];
