export interface ProofMetric {
  value: string;
  label: string;
  description: string;
  benchmarkHighlight: string;
}

export const AI_NATIVE_DATA = {
  headline: "AI-Native Engineering",
  subheadline: "Moving from reactive software to proactive intelligence.",
  intro:
    "We engineer resilient, low-latency AI backbones natively integrated into healthcare, governance, and telecom infrastructure.",
  longFormNarrative: {
    title: "Rethinking Enterprise Architecture Around Machine Intelligence",
    pullQuote:
      "In an era of cognitive automation, adding an AI feature on top of legacy code is no longer enough. SRIT’s AI-Native Engineering paradigm builds intelligence directly into the system layer.",
    paragraphs: [
      "From automated edge computer-vision cameras tracking state highway networks to deep-learning clinical decision engines assisting doctors across 2,000+ hospitals, our platforms continuously learn, self-correct, and optimize.",
      "Designed with 100% data residency and strict zero-leakage security, our architectures enable public and private enterprises to scale autonomous operations without compromising data sovereignty or system resilience.",
    ],
  },
  metricsRibbon: [
    {
      value: "<20ms",
      label: "Edge Inference Speed",
      description: "Edge Inference Response Time",
      benchmarkHighlight: "Real-time edge processing without WAN latency",
    },
    {
      value: "350,000+",
      label: "Computer Vision Scale",
      description: "Autonomous Computer-Vision Events in 72 Hours",
      benchmarkHighlight: "SAFE Kerala highway enforcement benchmark",
    },
    {
      value: "99%+",
      label: "Document Intelligence",
      description: "Structured Extraction on Public & Medical Records",
      benchmarkHighlight: "IDP & clinical record digitization accuracy",
    },
    {
      value: "100%",
      label: "Security & Residency",
      description: "Private On-Premise & Sovereign Cloud Data Isolation",
      benchmarkHighlight: "DPDP Act & sovereign cloud compliance",
    },
  ] as ProofMetric[],
};
