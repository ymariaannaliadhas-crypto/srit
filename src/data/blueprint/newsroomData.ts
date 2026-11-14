export interface NewsStory {
  id: string;
  storyNumber: number;
  category: string;
  cardLabel: string;
  displayHeadline: string;
  summarySnippet: string;
  date?: string;
}

export const NEWSROOM_STORIES: NewsStory[] = [
  {
    id: "story-1",
    storyNumber: 1,
    category: "Capital Markets / IPO",
    cardLabel: "SRIT India Makes Historic Debut on NSE & BSE Following ₹218 Cr IPO",
    displayHeadline: "Ringing the Bell: SRIT India Limited Officially Lists on NSE and BSE",
    summarySnippet:
      "Following an oversubscribed ₹218.40 crore public offering, SRIT celebrated its official listing on October 6, marking a landmark milestone to accelerate next-gen healthcare platforms, public AI systems, and working capital scale.",
    date: "October 2026",
  },
  {
    id: "story-2",
    storyNumber: 2,
    category: "e-Governance / Awards",
    cardLabel: "Madhya Pradesh e-Nagar Palika 2.0 Clinches National e-Governance Award",
    displayHeadline: "Transforming Urban Governance: Flagship MP e-Municipality Project Receives National Honors",
    summarySnippet:
      "Unifying municipal operations and citizen delivery across all 417 Urban Local Bodies (ULBs) in Madhya Pradesh, the SRIT-built integrated platform was honored with the prestigious National e-Governance Award for setting a new benchmark in digital trust and efficiency.",
    date: "2026",
  },
  {
    id: "story-3",
    storyNumber: 3,
    category: "Digital Health / Quality",
    cardLabel: "Government of India Endorsement: RHES & EMR Receive NABH Certification",
    displayHeadline: "Revolutionizing Healthcare Delivery: Flagship Suites Certified by NABH",
    summarySnippet:
      "SRIT’s Renaissance Health Enterprise Suite (RHES) and Electronic Medical Record (EMR) received national quality accreditation under the Government of India, validating their interoperability, ABDM readiness, and clinical-grade security across thousands of hospital beds.",
    date: "2026",
  },
  {
    id: "story-4",
    storyNumber: 4,
    category: "Strategic Alliances / Cloud & AI",
    cardLabel: "Larsen & Toubro and SRIT Form Strategic Alliance for Enterprise Cloud & AI",
    displayHeadline: "SRIT Joins Hands with L&T to Power Sovereign Cloud and Showcase at AI Impact Summit",
    summarySnippet:
      "Expanding high-performance computing and enterprise sovereign hosting, SRIT partnered with L&T to launch SRIT Cloud and showcased joint automated computer vision and infrastructure solutions at the AI Impact Summit.",
    date: "2026",
  },
  {
    id: "story-5",
    storyNumber: 5,
    category: "Telecom Infrastructure",
    cardLabel: "SRIT Powers BSNL’s Next-Gen Network Operating Centre (NOC)",
    displayHeadline: "Strengthening India’s Sovereign Telecom Backbone with Next-Gen NOC & BSS/OSS",
    summarySnippet:
      "Strengthening India’s sovereign telecom architecture, SRIT’s BSS/OSS network platforms now power core operations and inter-operator settlement for national telecom giant BSNL.",
    date: "2026",
  },
  {
    id: "story-6",
    storyNumber: 6,
    category: "Digital Public Infrastructure",
    cardLabel: "KFON Digital Highway Connects 30,000 Government Institutions",
    displayHeadline: "Bridging the Last-Mile Divide Across Kerala via R-Converge OSS/BSS",
    summarySnippet:
      "In consortium with BEL, SRIT’s R-Converge software actively manages subscriber onboarding, automated billing, and partner reconciliations across Kerala’s statewide broadband grid.",
    date: "2026",
  },
  {
    id: "story-7",
    storyNumber: 7,
    category: "AI & Smart Mobility",
    cardLabel: "SAFE Kerala AI Traffic Network Logs Over 350,000 Violations in 72 Hours",
    displayHeadline: "Edge Computer-Vision Surveillance Enhances Highway Discipline and Safety",
    summarySnippet:
      "Real-time computer-vision algorithms deployed across highway corridors curb traffic fatalities, prompting neighboring states to evaluate similar AI-driven enforcement frameworks.",
    date: "2026",
  },
  {
    id: "story-8",
    storyNumber: 8,
    category: "Academic-Industry R&D",
    cardLabel: "IIT Pravartak Foundation Enters Strategic Deep-Tech Partnership with SRIT",
    displayHeadline: "Co-Engineering Sovereign Databases and Edge-AI Modules for Public Scale",
    summarySnippet:
      "Fostering collaborative academic-industrial R&D to co-engineer specialized edge-AI modules for forensic analysis and healthcare diagnostics, including ShaktiDB (#IndiaDB).",
    date: "2026",
  },
  {
    id: "story-9",
    storyNumber: 9,
    category: "Board Governance & Leadership",
    cardLabel: "SRIT Appoints AI Industry Pioneer Col. Amit Oberoi to Board of Directors",
    displayHeadline: "Strengthening Deep-Tech & Autonomous Enterprise AI Governance",
    summarySnippet:
      "Carnot Research Co-Founder and CEO Col. Amit Oberoi joins the Board to guide SRIT’s next growth phase in autonomous enterprise AI and deep-tech government solutions.",
    date: "2026",
  },
];
