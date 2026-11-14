export interface ClientItem {
  name: string;
  category: "Government & DPI" | "Telecom, Defence & PSU" | "Healthcare & Enterprise";
  shortDescription?: string;
  logoUrl?: string;
}

export const CLIENT_ROSTER_CATEGORIES = [
  "All Clients",
  "Government & DPI",
  "Telecom, Defence & PSU",
  "Healthcare & Enterprise",
] as const;

export const CLIENT_ROSTER: ClientItem[] = [
  // Government & DPI
  { name: "Kerala Fibre Optic Network (KFON)", category: "Government & DPI", shortDescription: "Statewide fiber broadband connecting 30,000 institutions" },
  { name: "Keltron", category: "Government & DPI", shortDescription: "State AI traffic surveillance infrastructure" },
  { name: "ESIC", category: "Government & DPI", shortDescription: "National healthcare & clinical EMR automation" },
  { name: "Govt. of Andhra Pradesh (eHealth)", category: "Government & DPI", shortDescription: "Statewide health benefits insurance platform" },
  { name: "Govt. of West Bengal (Health)", category: "Government & DPI", shortDescription: "103 hospitals & 4,000+ PHC network" },
  { name: "Govt. of Madhya Pradesh (e-Nagar Palika)", category: "Government & DPI", shortDescription: "Unified urban governance across 417 ULBs" },
  { name: "Maharashtra DFSL", category: "Government & DPI", shortDescription: "State forensic science laboratory cloud ERP" },
  { name: "Govt. of Odisha (eDistrict)", category: "Government & DPI", shortDescription: "Statewide citizen services across 30 districts" },
  { name: "Govt. of Chhattisgarh", category: "Government & DPI", shortDescription: "e-District citizen delivery network" },

  // Telecom, Defence & PSU
  { name: "Bharat Sanchar Nigam Limited (BSNL)", category: "Telecom, Defence & PSU", shortDescription: "Next-Gen Network Operating Centre & inter-operator settlement" },
  { name: "RailTel Corporation (RailWire)", category: "Telecom, Defence & PSU", shortDescription: "National retail broadband operations on rail network" },
  { name: "Bharat Electronics Limited (BEL)", category: "Telecom, Defence & PSU", shortDescription: "Consortium partner for statewide broadband DPI" },
  { name: "Defence Ordnance Factory Board (OFB COMNET)", category: "Telecom, Defence & PSU", shortDescription: "Hardened IP-MPLS defense grid across 59 locations" },
  { name: "State Bank of India (SBI)", category: "Telecom, Defence & PSU", shortDescription: "18,000 high-availability 4G ATM connections" },

  // Healthcare & Enterprise
  { name: "NIMHANS Bengaluru", category: "Healthcare & Enterprise", shortDescription: "National premier neuro-psychiatric HMIS automation" },
  { name: "CK Birla Hospitals", category: "Healthcare & Enterprise", shortDescription: "NABH-certified enterprise clinical EMR" },
  { name: "Birla Fertility & IVF", category: "Healthcare & Enterprise", shortDescription: "Specialized clinical workflows & patient EMR" },
  { name: "Starcare Health", category: "Healthcare & Enterprise", shortDescription: "Multi-specialty hospital management" },
  { name: "Universal Hospitals Group (Abu Dhabi)", category: "Healthcare & Enterprise", shortDescription: "International hospital information systems" },
  { name: "TÜV Rheinland AG & Japan", category: "Healthcare & Enterprise", shortDescription: "Quality standards & enterprise certification compliance" },
  { name: "Boston Consulting Group (BCG)", category: "Healthcare & Enterprise", shortDescription: "Strategic enterprise engagements" },
  { name: "Baxter International", category: "Healthcare & Enterprise", shortDescription: "Global healthcare systems integration" },
];
