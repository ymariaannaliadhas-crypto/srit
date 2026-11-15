export type Plan = {
  name: string;
  description: string;
  features: string[];
};

export const PLAN_TABS: { label: string; plans: Plan[] }[] = [
  {
    label: "E-District",
    plans: [
      {
        name: "E-District",
        description:
          "E-District is a digital Government-to-Citizen (G2C) platform used by State and district administrations to deliver citizen services online. It enables access to statutory certificates and administrative services, workflow-based processing and service monitoring.",
        features: [],
      },
    ],
  },
  {
    label: "eCIVIC",
    plans: [
      {
        name: "eCIVIC",
        description:
          "ERP for municipalities and urban development agencies. Covers diverse functions including works, projects, contracts, procurement, stores, revenue, property management, assets, human resources, payroll, finance, etc.",
        features: [],
      },
    ],
  },
  {
    label: "PlanPermit",
    plans: [
      {
        name: "PlanPermit",
        description:
          "Automated verification of building code directly from the drawing file for issuance of building permits, including a citizen portal and site inspection mobile app. Implemented in Karnataka, Haryana, Uttarakhand and Bihar, with 20,000 users including architects, designers and town-planners.",
        features: [],
      },
    ],
  },
  {
    label: "AgniPermit",
    plans: [
      {
        name: "AgniPermit",
        description:
          "Automated verification of fire code for issuance of building fire NOCs and fire permits, directly from the drawing file, including a citizen portal and site inspection mobile app. The product has gone LIVE and into full production statewide in Karnataka.",
        features: [],
      },
    ],
  },
  {
    label: "Litigation Management Software",
    plans: [
      {
        name: "Litigation Management Software",
        description:
          "A dedicated legal workspace specifically built for Government Bodies.",
        features: [],
      },
    ],
  },
];

export const TESTIMONIALS = [
  {
    q: `SRIT met our expectations on both time and budget. Delivering the 110 man-months project in a 3 month time-frame with no escalation of budget, indeed, was commendable.`,
    n: "David Preuss",
    r: "CIO Group Asia, TÜV Rheinland Japan Ltd",
    img: "",
  },
  {
    q: `SRIT is mature and has very robust systems in place. SRIT brings the highest standards with respect to business ethics and technology. If there is open communication and commitment from all members of your team to ensure the project is "win-win", SRIT will not let you down but rather exceed your expectations.`,
    n: "Robert Seguy",
    r: "Corporate Environment, Health and Safety Director – EHS Information Systems and Industrial Hygiene, Baxter International Inc.",
    img: "",
  },
  {
    q: `I have found SRIT consistently delivering quality software at affordable prices and maintaining delivery schedules. I have found SRIT to be a reliable, dependable, process-oriented company.`,
    n: "Arndt Lehmann",
    r: "TÜV Rheinland AG",
    img: "",
  },
  {
    q: `We have been pleased with SRIT's project delivery capabilities in terms of implementation cost and final quality of the systems. Their offshore project management team has been highly engaged and focused on continuously improving overall delivery quality.`,
    n: "Günter Degitz",
    r: "Director, Worldwide Information Systems, Boston Consulting Group (BCG)",
    img: "",
  },
  {
    q: `We chose SRIT's RHES system through a rigorous evaluation process and found the system fit to automate both our existing & future hospitals. Its robust technical components were useful in our strategy for growth as well as our day to day operations.`,
    n: "Dr. Shabeer Nellikode",
    r: "Managing Director, Universal Hospitals Group, Abu Dhabi",
    img: "",
  },
  {
    q: `In implementing the RHES suite at our hospitals, SRITians have demonstrated the highest standards with respect to business ethics, quality and technology. By implementing their system, we got qualified for an award for IT adoption – the EMRAM award for the Most Improved Hospital.`,
    n: "Sameer S",
    r: "Chief Operating Officer, Overseas International Modern Hospital",
    img: "",
  },
];

export const FAQS = [
  {
    q: "How can I get a new RailWire connection?",
    a: "You can apply for a new connection through our website or contact your nearest local partner. Our team will assist you with quick installation and activation based on your location.",
  },
  {
    q: "What documents are required for installation?",
    a: "To get a new connection, you need a valid ID proof (such as Aadhar card), a passport-size photograph, and an active mobile number for registration.",
  },
  {
    q: "Are there any installation charges?",
    a: "Yes, installation charges may apply depending on your location and plan. Our team will inform you about the exact cost before proceeding.",
  },
  {
    q: "Is the internet plan unlimited?",
    a: "Yes, RailWire offers unlimited broadband plans. However, speeds may be adjusted as per Fair Usage Policy (FUP) after a certain limit.",
  },
];