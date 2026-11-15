export interface InvestorDocument {
  title: string;
  url: string;
  category?: string;
  year?: string;
  date?: string;
  type?: "pdf" | "link";
}

export interface InvestorTabConfig {
  id: "overview" | "financials" | "governance" | "annual_reports" | "ipo" | "contact";
  label: string;
  description: string;
}

export const INVESTOR_LISTING_INFO = {
  companyName: "SRIT India Limited",
  cin: "U72200KA1998PLC024240",
  nseSymbol: "SRIT",
  bseScripCode: "544256",
  isin: "INE0U2O01017",
  listingDate: "October 6, 2026",
  exchanges: "NSE & BSE Main Board",
  issueSize: "₹218.40 Crores (100% Fresh Issue, 1.68 Crore Equity Shares)",
  priceBand: "₹123 – ₹130 per share (Face Value: ₹5)",
  orderBook: "₹1,200+ Crore Active Order Book",
  registeredOffice: "SRIT House, #113/1B, ITPL Main Road, Brookefield, Bengaluru - 560 037, Karnataka, India",
  complianceEmail: "investors@sritindia.com",
  contactPhone: "+91 80 41951999",
  bseUrl: "https://www.bseindia.com/stock-share-price/srit-india-ltd/srit/544256/",
  nseUrl: "https://www.nseindia.com/get-quotes/equity?symbol=SRIT",
};

export const INVESTOR_TABS: InvestorTabConfig[] = [
  {
    id: "overview",
    label: "Overview & Listing",
    description: "Capital market profile, exchange ticker details, listing prospectus highlights, and order book strength.",
  },
  {
    id: "financials",
    label: "Financials & Filings",
    description: "Audited consolidated and standalone financial statements, quarterly reports, and stock exchange disclosures.",
  },
  {
    id: "governance",
    label: "Corporate Governance",
    description: "SEBI (LODR) Regulation 46 disclosures, board committee charters, independent director policies, and codes of conduct.",
  },
  {
    id: "annual_reports",
    label: "Annual Reports & Returns",
    description: "Comprehensive Annual Reports, audited balance sheets, and Annual Returns (Form MGT-7).",
  },
  {
    id: "ipo",
    label: "IPO Documents",
    description: "Red Herring Prospectus (RHP), Draft Red Herring Prospectus (DRHP), and public issue disclosures.",
  },
  {
    id: "contact",
    label: "Shareholder Services",
    description: "Investor grievance redressal mechanism, Registrar & Share Transfer Agent (RTA), and compliance officers.",
  },
];

export const FINANCIAL_DOCUMENTS: InvestorDocument[] = [
  // Quarterly Results
  {
    title: "SRIT - Financial Statements (Q2 FY 2026-27)",
    url: "https://www.sritindia.com/s/SRIT-Financial-Statements-Q2-2026-2027.pdf",
    category: "Quarterly Results",
    year: "FY 2026-27",
    type: "pdf",
  },
  {
    title: "SRIT - Financial Statements (Q1 FY 2026-27)",
    url: "https://www.sritindia.com/s/SRIT-Financial-Statements-Q1-2026-2027.pdf",
    category: "Quarterly Results",
    year: "FY 2026-27",
    type: "pdf",
  },
  {
    title: "Management Commentary on Financial Results (Q2 & H1 FY 2026-27)",
    url: "https://www.sritindia.com/s/Intimation_of_Management_Commentary_Signed.pdf",
    category: "Quarterly Results",
    year: "FY 2026-27",
    type: "pdf",
  },
  {
    title: "Newspaper Publication of Financial Results (September Quarter 2026)",
    url: "https://www.sritindia.com/s/Newspaper_Advertisement_Signed.pdf",
    category: "Quarterly Results",
    year: "FY 2026-27",
    type: "pdf",
  },
  {
    title: "Newspaper Publication of Financial Results (June Quarter 2026)",
    url: "https://www.sritindia.com/s/SRIT_28102026154315_Newspaper_Publication_Q1_Results_Signed.pdf",
    category: "Quarterly Results",
    year: "FY 2026-27",
    type: "pdf",
  },
  // Annual Audited Statements
  {
    title: "SRIT - Consolidated Financial Statements (FY 2024-2025)",
    url: "https://www.sritindia.com/s/SRIT-Consoldiated-Financials-2024-2025-mnjw.pdf",
    category: "Audited Financials",
    year: "FY 2024-25",
    type: "pdf",
  },
  {
    title: "SRIT - Standalone Financial Statements (FY 2024-2025)",
    url: "https://www.sritindia.com/s/SRIT-Standalone-Financials-2024-2025-x8sz.pdf",
    category: "Audited Financials",
    year: "FY 2024-25",
    type: "pdf",
  },
  {
    title: "SRIT - Consolidated Financial Statements (FY 2023-2024)",
    url: "https://www.sritindia.com/s/SRIT-Consolidated-Financials-2023-2024-7xjx.pdf",
    category: "Audited Financials",
    year: "FY 2023-24",
    type: "pdf",
  },
  {
    title: "SRIT - Standalone Financial Statements (FY 2023-2024)",
    url: "https://www.sritindia.com/s/SRIT-Standalone-Financials-2023-2024.pdf",
    category: "Audited Financials",
    year: "FY 2023-24",
    type: "pdf",
  },
  {
    title: "SRIT - Consolidated Financial Statements (FY 2022-2023)",
    url: "https://www.sritindia.com/s/SRIT-Consoldiated-Financials-2022-2023.pdf",
    category: "Audited Financials",
    year: "FY 2022-23",
    type: "pdf",
  },
  {
    title: "SRIT - Standalone Financial Statements (FY 2022-2023)",
    url: "https://www.sritindia.com/s/SRIT-Standalone-Financials-2022-2023.pdf",
    category: "Audited Financials",
    year: "FY 2022-23",
    type: "pdf",
  },
  // Stock Exchange Filings & Intimations
  {
    title: "Intimation of Award of Contract",
    url: "https://www.sritindia.com/s/Intimation_of_Award_of_Contract_Final_Signed.pdf",
    category: "Exchange Filings",
    date: "November 2026",
    type: "pdf",
  },
  {
    title: "Board Meeting Intimation – November 12, 2026",
    url: "https://www.sritindia.com/s/BM_Intimation_12112026_Signed.pdf",
    category: "Exchange Filings",
    date: "November 2026",
    type: "pdf",
  },
  {
    title: "Board Meeting Intimation – October 26, 2026",
    url: "https://www.sritindia.com/s/BM_Intimation_20102026_Signed.pdf",
    category: "Exchange Filings",
    date: "October 2026",
    type: "pdf",
  },
  {
    title: "Closure of Trading Window",
    url: "https://www.sritindia.com/s/SRIT_06102026134801_Intimation_Trading_Window_Closure_s.pdf",
    category: "Exchange Filings",
    date: "October 2026",
    type: "pdf",
  },
  {
    title: "Intimation of Participation in Podcast featuring Mr. Nikunj Dalmia",
    url: "https://www.sritindia.com/s/Intimation-of-Participation-in-Podcast-featuring-Mr-Nikunj-Dalmia.pdf",
    category: "Exchange Filings",
    date: "October 2026",
    type: "pdf",
  },
  {
    title: "Notice of Extraordinary General Meeting (EGM)",
    url: "https://www.sritindia.com/s/SRIT-NOTICE-OF-EGM-27022026.pdf",
    category: "Exchange Filings",
    date: "February 2026",
    type: "pdf",
  },
  // Subsidiary Financial Disclosures
  {
    title: "OJUS Healthcare - Financial Statements (FY 2024-2025)",
    url: "https://www.sritindia.com/s/OJUS-Financials-FY-2024-2025.pdf",
    category: "Subsidiary Disclosures",
    year: "FY 2024-25",
    type: "pdf",
  },
  {
    title: "OJUS Healthcare - Financial Statements (FY 2023-2024)",
    url: "https://www.sritindia.com/s/OJUS-Financials-FY-2023-2024.pdf",
    category: "Subsidiary Disclosures",
    year: "FY 2023-24",
    type: "pdf",
  },
  {
    title: "OJUS Healthcare - Financial Statements (FY 2022-2023)",
    url: "https://www.sritindia.com/s/OJUS-Financials-FY-2022-2023.pdf",
    category: "Subsidiary Disclosures",
    year: "FY 2022-23",
    type: "pdf",
  },
  {
    title: "RICT - Financial Statements (FY 2024-2025)",
    url: "https://www.sritindia.com/s/RICT-Financials-FY-2024-2025.pdf",
    category: "Subsidiary Disclosures",
    year: "FY 2024-25",
    type: "pdf",
  },
  {
    title: "RICT - Financial Statements (FY 2023-2024)",
    url: "https://www.sritindia.com/s/RICT-Financials-FY-2023-2024.pdf",
    category: "Subsidiary Disclosures",
    year: "FY 2023-24",
    type: "pdf",
  },
  {
    title: "RICT - Financial Statements (FY 2022-2023)",
    url: "https://www.sritindia.com/s/RICT-Financials-FY-2022-2023.pdf",
    category: "Subsidiary Disclosures",
    year: "FY 2022-23",
    type: "pdf",
  },
];

export const GOVERNANCE_DOCUMENTS: InvestorDocument[] = [
  {
    title: "Board of Directors and Key Managerial Personnel (KMP)",
    url: "https://www.sritindia.com/s/Board-of-Directors-KMPs.pdf",
    category: "Board Composition",
    type: "pdf",
  },
  {
    title: "Composition of Board Committees",
    url: "https://www.sritindia.com/s/Composition-of-Committees.pdf",
    category: "Board Composition",
    type: "pdf",
  },
  {
    title: "Independent Directors Roster & Terms",
    url: "https://www.sritindia.com/s/Independant-Directors.pdf",
    category: "Board Composition",
    type: "pdf",
  },
  {
    title: "Composition of Various Committees of Board of Directors",
    url: "https://www.sritindia.com/s/Composition-of-Various-Committees.pdf",
    category: "Board Composition",
    type: "pdf",
  },
  {
    title: "Memorandum and Articles of Association (MOA & AOA)",
    url: "https://www.sritindia.com/s/Memorandum-and-Articles-of-Association-MOA-A0A.pdf",
    category: "Constitutional Documents",
    type: "pdf",
  },
  {
    title: "Code of Conduct of Board of Directors & Senior Management Personnel",
    url: "https://www.sritindia.com/s/Code-of-conduct-of-Board-of-Directors-and-Senior-Management-Personnel.pdf",
    category: "Codes & Policies",
    type: "pdf",
  },
  {
    title: "Policy for Determination of Material Subsidiaries",
    url: "https://www.sritindia.com/s/Policy-for-determining-Material-Subsidiaries.pdf",
    category: "Codes & Policies",
    type: "pdf",
  },
  {
    title: "Policy on Dealing with Related Party Transactions (RPT)",
    url: "https://www.sritindia.com/s/Policy-on-dealing-with-Related-Party-Transactions.pdf",
    category: "Codes & Policies",
    type: "pdf",
  },
  {
    title: "Materiality Policy as per SEBI LODR Regulation 30(4)",
    url: "https://www.sritindia.com/s/Materiality-Policy-as-per-Regulation-304.pdf",
    category: "Codes & Policies",
    type: "pdf",
  },
  {
    title: "Terms and Conditions of Appointment of Independent Directors",
    url: "https://www.sritindia.com/s/Terms-of-Appointment-of-Independent-Directors.pdf",
    category: "Codes & Policies",
    type: "pdf",
  },
  {
    title: "Criteria for Making Payments to Non-Executive Directors",
    url: "https://www.sritindia.com/s/Criteria-for-making-payment-to-Non-Executive-Directors.pdf",
    category: "Codes & Policies",
    type: "pdf",
  },
  {
    title: "Details of Familiarization Programmes Imparted to Independent Directors",
    url: "https://www.sritindia.com/s/Familarization-Programme-for-Independent-Directors-ghw3.pdf",
    category: "Codes & Policies",
    type: "pdf",
  },
  {
    title: "Details of Establishment of Vigil Mechanism / Whistle Blower Policy",
    url: "https://www.sritindia.com/s/Vigil-Mechanism-or-Whistle-Blower-Policy.pdf",
    category: "Codes & Policies",
    type: "pdf",
  },
  {
    title: "Credit Rating Certificate",
    url: "https://www.sritindia.com/s/Credit-Rating-x2gl.pdf",
    category: "Statutory Disclosures",
    type: "pdf",
  },
  {
    title: "Disclosure of Contact Details of KMP Authorised under Regulation 30(5)",
    url: "https://www.sritindia.com/s/Contact-details-of-KMP-for-determining-materiality-lsw9.pdf",
    category: "Statutory Disclosures",
    type: "pdf",
  },
  {
    title: "Contact Details for Investor Grievance Redressal",
    url: "https://www.sritindia.com/s/Contact-details-for-Grievance-Redressal.pdf",
    category: "Statutory Disclosures",
    type: "pdf",
  },
];

export const ANNUAL_REPORT_DOCUMENTS: InvestorDocument[] = [
  {
    title: "SRIT - Annual Report (FY 2025-2026)",
    url: "https://www.sritindia.com/s/SRIT-Annual-Report-2025-26.pdf",
    category: "Annual Reports",
    year: "FY 2025-26",
    type: "pdf",
  },
  {
    title: "Annual Return (Form MGT-7) for FY 2025-2026",
    url: "https://www.sritindia.com/s/Annual-Return-for-2025-26-24hr.pdf",
    category: "Annual Returns",
    year: "FY 2025-26",
    type: "pdf",
  },
  {
    title: "SRIT - Annual Report (FY 2024-2025)",
    url: "https://www.sritindia.com/s/SRIT-Annual-Report-FY25-02112025.pdf",
    category: "Annual Reports",
    year: "FY 2024-25",
    type: "pdf",
  },
  {
    title: "Annual Return (Form MGT-7) for FY 2024-2025",
    url: "https://www.sritindia.com/s/Annual-Return-for-2024-25-atym.pdf",
    category: "Annual Returns",
    year: "FY 2024-25",
    type: "pdf",
  },
  {
    title: "SRIT - Annual Report (FY 2023-2024)",
    url: "https://www.sritindia.com/s/SRIT-ANNUAL-REPORT-2023-2024.pdf",
    category: "Annual Reports",
    year: "FY 2023-24",
    type: "pdf",
  },
  {
    title: "Annual Return (Form MGT-7) for FY 2023-2024",
    url: "https://www.sritindia.com/s/Annual-Return-for-2023-24.pdf",
    category: "Annual Returns",
    year: "FY 2023-24",
    type: "pdf",
  },
  {
    title: "SRIT - Annual Report (FY 2022-2023)",
    url: "https://www.sritindia.com/s/SRIT-ANNUAL-REPORT-2022-2023.pdf",
    category: "Annual Reports",
    year: "FY 2022-23",
    type: "pdf",
  },
  {
    title: "Annual Return (Form MGT-7) for FY 2022-2023",
    url: "https://www.sritindia.com/s/Annual-Return-for-2022-23.pdf",
    category: "Annual Returns",
    year: "FY 2022-23",
    type: "pdf",
  },
];

export const IPO_DOCUMENTS: InvestorDocument[] = [
  {
    title: "Red Herring Prospectus (RHP)",
    url: "https://www.sritindia.com/s/Red-Herring-ProspectusRHP.pdf",
    category: "Prospectus",
    year: "October 2026",
    type: "pdf",
  },
  {
    title: "Final Prospectus",
    url: "https://www.sritindia.com/s/Prospectus.pdf",
    category: "Prospectus",
    year: "October 2026",
    type: "pdf",
  },
  {
    title: "Abridged Prospectus",
    url: "https://www.sritindia.com/s/Abridged-Prospectus.pdf",
    category: "Prospectus",
    year: "October 2026",
    type: "pdf",
  },
  {
    title: "Draft Red Herring Prospectus (DRHP)",
    url: "https://www.sritindia.com/s/SRIT-India-Limited_DRHP.pdf",
    category: "Prospectus",
    year: "2026",
    type: "pdf",
  },
];
