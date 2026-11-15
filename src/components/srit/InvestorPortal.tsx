import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { 
  Download, 
  ExternalLink, 
  Search, 
  ArrowRight,
} from "lucide-react";
import {
  INVESTOR_LISTING_INFO,
  INVESTOR_TABS,
  FINANCIAL_DOCUMENTS,
  GOVERNANCE_DOCUMENTS,
  ANNUAL_REPORT_DOCUMENTS,
  IPO_DOCUMENTS,
  InvestorDocument,
} from "../../data/blueprint/investorData";

interface InvestorPortalProps {
  defaultTab?: "overview" | "financials" | "governance" | "annual_reports" | "ipo" | "contact";
}

export function InvestorPortal({ defaultTab = "overview" }: InvestorPortalProps) {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string>(defaultTab);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Sync tab with URL path or query params
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tabParam = params.get("tab");

    if (tabParam && INVESTOR_TABS.some((t) => t.id === tabParam)) {
      setActiveTab(tabParam);
    } else if (location.pathname.includes("investors-information")) {
      setActiveTab("financials");
    } else if (location.pathname.includes("corporate-governance")) {
      setActiveTab("governance");
    } else if (location.pathname.includes("annual-report")) {
      setActiveTab("annual_reports");
    } else if (location.pathname.includes("ipo-documents")) {
      setActiveTab("ipo");
    } else if (defaultTab) {
      setActiveTab(defaultTab);
    }
  }, [location, defaultTab]);

  // Reset search and category filter on tab switch
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setSearchQuery("");
    setSelectedCategory("All");
  };

  // Helper filter function
  const filterDocuments = (docs: InvestorDocument[]) => {
    return docs.filter((doc) => {
      const matchesSearch = 
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (doc.category && doc.category.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (doc.year && doc.year.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === "All" || doc.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  };

  const filteredFinancialDocs = filterDocuments(FINANCIAL_DOCUMENTS);

  return (
    <main className="min-h-screen bg-[#fafbfc] text-[#172b4d]">
      
      {/* Editorial Page Header */}
      <section className="border-b border-slate-200/80 bg-white pt-14 pb-12 sm:pt-16 sm:pb-14">
        <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav className="mb-4 flex items-center gap-2 text-xs font-medium text-[#172b4d]/55">
            <Link to="/" className="hover:text-[#079fdf] transition-colors duration-150 ease-out">Home</Link>
            <span>/</span>
            <span className="text-[#102b50] font-semibold">Investor Relations</span>
          </nav>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#079fdf]">
                Regulatory Disclosures & Shareholder Information
              </span>
              <h1 className="mt-2 font-display text-3xl font-bold tracking-[-0.025em] text-[#102b50] sm:text-4xl lg:text-5xl">
                Investor Relations
              </h1>
              <p className="mt-3 text-base text-[#172b4d]/75 leading-[1.6] sm:text-lg">
                Official statutory disclosures under SEBI (LODR) Regulations, audited financial statements, corporate governance charters, and stock exchange filings for SRIT India Limited.
              </p>
            </div>

            {/* Live Exchange Ticker Snapshot */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={INVESTOR_LISTING_INFO.nseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-lg border border-slate-200/80 bg-[#fafbfc] px-4 py-2.5 transition-colors duration-150 ease-out hover:border-[#079fdf] hover:bg-white"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#172b4d]/45">NSE Main Board</span>
                  <span className="font-mono text-sm font-bold tabular-nums text-[#102b50] transition-colors duration-150 ease-out group-hover:text-[#079fdf]">
                    {INVESTOR_LISTING_INFO.nseSymbol}
                  </span>
                </div>
                <ExternalLink className="h-4 w-4 text-[#172b4d]/40 transition-colors duration-150 ease-out group-hover:text-[#079fdf]" />
              </a>

              <a
                href={INVESTOR_LISTING_INFO.bseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-lg border border-slate-200/80 bg-[#fafbfc] px-4 py-2.5 transition-colors duration-150 ease-out hover:border-[#079fdf] hover:bg-white"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#172b4d]/45">BSE Scrip Code</span>
                  <span className="font-mono text-sm font-bold tabular-nums text-[#102b50] transition-colors duration-150 ease-out group-hover:text-[#079fdf]">
                    {INVESTOR_LISTING_INFO.bseScripCode}
                  </span>
                </div>
                <ExternalLink className="h-4 w-4 text-[#172b4d]/40 transition-colors duration-150 ease-out group-hover:text-[#079fdf]" />
              </a>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="mt-8 grid grid-cols-2 divide-y divide-slate-200/80 sm:grid-cols-4 sm:divide-x sm:divide-y-0 rounded-xl border border-slate-200/80 bg-[#fafbfc] overflow-hidden">
            <div className="p-4 sm:p-5">
              <span className="text-xs text-[#172b4d]/55 font-medium">Listing Date</span>
              <p className="mt-1 font-display text-base font-bold tabular-nums text-[#102b50]">
                {INVESTOR_LISTING_INFO.listingDate}
              </p>
            </div>
            <div className="p-4 sm:p-5">
              <span className="text-xs text-[#172b4d]/55 font-medium">Issue Size (100% Fresh)</span>
              <p className="mt-1 font-display text-base font-bold tabular-nums text-[#102b50]">
                ₹218.40 Cr
              </p>
            </div>
            <div className="p-4 sm:p-5">
              <span className="text-xs text-[#172b4d]/55 font-medium">Active Order Book</span>
              <p className="mt-1 font-display text-base font-bold tabular-nums text-[#102b50]">
                ₹1,200+ Crore
              </p>
            </div>
            <div className="p-4 sm:p-5">
              <span className="text-xs text-[#172b4d]/55 font-medium">ISIN Number</span>
              <p className="mt-1 font-mono text-base font-bold tabular-nums text-[#102b50]">
                {INVESTOR_LISTING_INFO.isin}
              </p>
            </div>
          </div>

          {/* Tab Bar */}
          <div className="mt-10 flex overflow-x-auto border-b border-slate-200/80 no-scrollbar">
            <div className="flex gap-1.5">
              {INVESTOR_TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => handleTabChange(tab.id)}
                    className={`whitespace-nowrap px-4 py-3 text-sm font-semibold transition-colors duration-150 ease-out border-b-2 ${
                      isActive
                        ? "border-[#079fdf] text-[#102b50] bg-[#fafbfc] rounded-t-lg"
                        : "border-transparent text-[#172b4d]/60 hover:text-[#102b50] hover:border-slate-300"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* Main Tab Content */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">

          {/* 1. OVERVIEW TAB */}
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
              {/* Left 7 Columns: Strategic Profile & Capital Summary */}
              <div className="lg:col-span-7 rounded-xl border border-slate-200/80 bg-white p-7 sm:p-9">
                <span className="text-xs font-bold uppercase tracking-wider text-[#079fdf]">
                  Capital Market Profile
                </span>
                <h2 className="mt-2 font-display text-2xl font-bold tracking-[-0.02em] text-[#102b50] sm:text-3xl">
                  Public Listing on the National Stock Exchange & Bombay Stock Exchange
                </h2>
                <p className="mt-4 text-base leading-[1.6] tabular-nums text-[#172b4d]/75">
                  On October 6, 2026, SRIT India Limited successfully transitioned from a closely-held digital infrastructure pioneer into a publicly listed sovereign tech leader. The ₹218.40 crore initial public offering was 100% fresh issue—with zero offer for sale (OFS) from existing promoters—earmarking all capital directly into debt retirement, product modernization (RHES 2.0, R-Converge AI, SiaH), and sovereign data infrastructure execution.
                </p>

                <dl className="mt-8 divide-y divide-slate-200/80 border-t border-slate-200/80">
                  <div className="grid grid-cols-1 gap-2 py-4 sm:grid-cols-12 sm:items-baseline">
                    <dt className="text-xs font-bold uppercase tracking-wider text-[#172b4d]/50 sm:col-span-4">
                      Order Book
                    </dt>
                    <dd className="sm:col-span-8">
                      <span className="font-display text-lg font-bold tabular-nums text-[#102b50]">
                        ₹1,200+ Cr
                      </span>
                      <p className="mt-1 text-xs leading-[1.6] text-[#172b4d]/70">
                        Multi-year sovereign contracts across ABDM state rollouts, municipal utilities, and state optical fiber grids.
                      </p>
                    </dd>
                  </div>

                  <div className="grid grid-cols-1 gap-2 py-4 sm:grid-cols-12 sm:items-baseline">
                    <dt className="text-xs font-bold uppercase tracking-wider text-[#172b4d]/50 sm:col-span-4">
                      Fresh Capital
                    </dt>
                    <dd className="sm:col-span-8">
                      <span className="font-display text-lg font-bold tabular-nums text-[#102b50]">
                        ₹218.40 Cr
                      </span>
                      <p className="mt-1 text-xs tabular-nums leading-[1.6] text-[#172b4d]/70">
                        100% equity issue at ₹123–₹130 per share. Dedicated to debt retirement and high-margin product modernization.
                      </p>
                    </dd>
                  </div>

                  <div className="grid grid-cols-1 gap-2 pt-4 sm:grid-cols-12 sm:items-baseline">
                    <dt className="text-xs font-bold uppercase tracking-wider text-[#172b4d]/50 sm:col-span-4">
                      Listing Status
                    </dt>
                    <dd className="sm:col-span-8">
                      <span className="font-display text-lg font-bold text-[#102b50]">
                        NSE & BSE Main Board
                      </span>
                      <p className="mt-1 text-xs tabular-nums leading-[1.6] text-[#172b4d]/70">
                        Symbol: SRIT | Scrip: 544256 | Compliant with SEBI (Listing Obligations and Disclosure Requirements).
                      </p>
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Right 5 Columns: Quick-Access Statutory Directory */}
              <div className="lg:col-span-5 rounded-xl border border-slate-200/80 bg-white overflow-hidden">
                <div className="border-b border-slate-200/80 bg-[#fafbfc] px-6 py-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#102b50]">
                    Statutory Filings Directory
                  </span>
                </div>

                <div className="divide-y divide-slate-200/80">
                  <button
                    type="button"
                    onClick={() => handleTabChange("financials")}
                    className="group w-full cursor-pointer p-6 text-left transition-colors duration-150 ease-out hover:bg-[#fafbfc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#079fdf]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-display text-base font-bold tracking-[-0.015em] text-[#102b50] transition-colors duration-150 ease-out group-hover:text-[#079fdf]">
                          Financial Statements & Results
                        </h3>
                        <p className="mt-1.5 text-sm text-[#172b4d]/70 leading-[1.55]">
                          Access Q1 & Q2 FY27 results, audited annual statements from FY23 to FY25, and subsidiary disclosures.
                        </p>
                      </div>
                      <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-[#172b4d]/40 transition-all duration-150 ease-out group-hover:translate-x-0.5 group-hover:text-[#079fdf]" />
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleTabChange("governance")}
                    className="group w-full cursor-pointer p-6 text-left transition-colors duration-150 ease-out hover:bg-[#fafbfc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#079fdf]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-display text-base font-bold tracking-[-0.015em] text-[#102b50] transition-colors duration-150 ease-out group-hover:text-[#079fdf]">
                          Corporate Governance
                        </h3>
                        <p className="mt-1.5 text-sm text-[#172b4d]/70 leading-[1.55]">
                          SEBI Regulation 46 disclosures, committee composition, codes of conduct, and statutory board policies.
                        </p>
                      </div>
                      <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-[#172b4d]/40 transition-all duration-150 ease-out group-hover:translate-x-0.5 group-hover:text-[#079fdf]" />
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleTabChange("ipo")}
                    className="group w-full cursor-pointer p-6 text-left transition-colors duration-150 ease-out hover:bg-[#fafbfc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#079fdf]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-display text-base font-bold tracking-[-0.015em] text-[#102b50] transition-colors duration-150 ease-out group-hover:text-[#079fdf]">
                          IPO & Prospectus Documents
                        </h3>
                        <p className="mt-1.5 text-sm text-[#172b4d]/70 leading-[1.55]">
                          Download official Red Herring Prospectus (RHP), DRHP, and regulatory capital issue filings.
                        </p>
                      </div>
                      <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-[#172b4d]/40 transition-all duration-150 ease-out group-hover:translate-x-0.5 group-hover:text-[#079fdf]" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 2. FINANCIALS & FILINGS TAB */}
          {activeTab === "financials" && (
            <div className="space-y-6">
              
              {/* Filter & Search Bar */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-xl border border-slate-200/80 bg-white p-4">
                {/* Category Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {["All", "Quarterly Results", "Audited Financials", "Exchange Filings", "Subsidiary Disclosures"].map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors duration-150 ease-out ${
                        selectedCategory === cat
                          ? "bg-[#102b50] text-white"
                          : "bg-slate-100 text-[#172b4d]/70 hover:bg-slate-200/80 hover:text-[#102b50]"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Search input */}
                <div className="relative w-full sm:w-72">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#172b4d]/40" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search filings or year..."
                    className="w-full rounded-lg border border-slate-200/80 bg-[#fafbfc] py-1.5 pl-9 pr-3 text-xs text-[#102b50] placeholder-[#172b4d]/40 transition-colors duration-150 ease-out focus:border-[#079fdf] focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              {/* Document List */}
              {filteredFinancialDocs.length > 0 ? (
                <div className="divide-y divide-slate-200/80 rounded-xl border border-slate-200/80 bg-white overflow-hidden">
                  {filteredFinancialDocs.map((doc, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between transition-colors duration-150 ease-out hover:bg-[#fafbfc]"
                    >
                      <div>
                        <div className="flex flex-wrap items-center gap-2 text-xs tabular-nums text-[#172b4d]/60">
                          <span className="font-semibold text-[#079fdf]">
                            {doc.category}
                          </span>
                          {doc.year && (
                            <>
                              <span className="text-[#172b4d]/25">&bull;</span>
                              <span className="font-medium text-[#172b4d]/70">{doc.year}</span>
                            </>
                          )}
                          {doc.date && (
                            <>
                              <span className="text-[#172b4d]/25">&bull;</span>
                              <span className="text-[#172b4d]/50">{doc.date}</span>
                            </>
                          )}
                        </div>
                        <h4 className="mt-1 font-display text-base font-bold text-[#102b50]">
                          {doc.title}
                        </h4>
                      </div>

                      <a
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          if (doc.url === "#") e.preventDefault();
                        }}
                        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-slate-200/80 bg-white px-4 py-2 text-xs font-semibold text-[#102b50] transition-colors duration-150 ease-out hover:border-[#079fdf] hover:bg-[#079fdf] hover:text-white self-start sm:self-center"
                      >
                        <Download className="h-3.5 w-3.5" />
                        <span>Download PDF</span>
                      </a>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rounded-xl border border-slate-200/80 bg-white p-12 text-center">
                  <p className="font-display text-base font-semibold text-[#102b50]">
                    No matching disclosures found
                  </p>
                  <p className="mt-1.5 text-sm text-[#172b4d]/60">
                    Try adjusting your search query or clearing the active category filter.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("All");
                    }}
                    className="mt-5 rounded-lg border border-slate-200/80 bg-[#fafbfc] px-4 py-2 text-xs font-semibold text-[#102b50] transition-colors duration-150 ease-out hover:border-[#079fdf] hover:text-[#079fdf]"
                  >
                    Reset filters
                  </button>
                </div>
              )}

            </div>
          )}

          {/* 3. CORPORATE GOVERNANCE TAB */}
          {activeTab === "governance" && (
            <div className="space-y-8">
              
              <div className="rounded-xl border border-slate-200/80 bg-white p-6 sm:p-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[#079fdf]">
                  Regulatory Compliance
                </span>
                <h3 className="mt-1.5 font-display text-xl font-bold tracking-[-0.02em] text-[#102b50]">
                  Disclosure under Regulation 46 of SEBI (LODR) Regulations
                </h3>
                <p className="mt-2.5 text-sm text-[#172b4d]/75 leading-[1.6]">
                  SRIT India Limited is dedicated to upholding the highest standards of transparency, corporate integrity, and shareholder accountability. Below are the mandatory statutory disclosures and board-approved corporate policies.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-px md:grid-cols-2 bg-slate-200/80 border border-slate-200/80 rounded-xl overflow-hidden">
                {GOVERNANCE_DOCUMENTS.map((doc, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col justify-between bg-white p-6 transition-colors duration-150 ease-out hover:bg-[#fafbfc]"
                  >
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#079fdf]">
                        {doc.category}
                      </span>
                      <h4 className="mt-2 font-display text-base font-bold text-[#102b50] leading-snug">
                        {doc.title}
                      </h4>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-medium text-[#172b4d]/45">PDF Policy Filing</span>
                      <a
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          if (doc.url === "#") e.preventDefault();
                        }}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#079fdf] hover:text-[#102b50] transition-colors duration-150 ease-out"
                      >
                        <Download className="h-3.5 w-3.5" /> View Policy
                      </a>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* 4. ANNUAL REPORTS & RETURNS TAB */}
          {activeTab === "annual_reports" && (
            <div className="space-y-8">
              
              <div className="rounded-xl border border-slate-200/80 bg-white p-6 sm:p-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[#079fdf]">
                  Statutory Reporting
                </span>
                <h3 className="mt-1.5 font-display text-xl font-bold tracking-[-0.02em] text-[#102b50]">
                  Annual Reports & Form MGT-7 Returns
                </h3>
                <p className="mt-2.5 text-sm text-[#172b4d]/75 leading-[1.6]">
                  Comprehensive performance reports covering audited consolidated balance sheets, profit and loss statements, cash flow disclosures, auditor opinions, and corporate sustainability metrics.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {["FY 2025-26", "FY 2024-25", "FY 2023-24", "FY 2022-23"].map((fy) => {
                  const report = ANNUAL_REPORT_DOCUMENTS.find(
                    (d) => d.year === fy && d.category === "Annual Reports"
                  );
                  const ret = ANNUAL_REPORT_DOCUMENTS.find(
                    (d) => d.year === fy && d.category === "Annual Returns"
                  );

                  return (
                    <div
                      key={fy}
                      className="rounded-xl border border-slate-200/80 bg-white p-6 transition-colors duration-150 ease-out hover:border-[#079fdf]/60 flex flex-col justify-between"
                    >
                      <div>
                        <h4 className="font-display text-xl font-bold tabular-nums text-[#102b50]">
                          {fy}
                        </h4>
                        <p className="mt-1.5 text-xs text-[#172b4d]/55">
                          Audited Corporate Performance Filing
                        </p>
                      </div>

                      <div className="mt-6 space-y-2.5 pt-4 border-t border-slate-100">
                        {report && (
                          <a
                            href={report.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => {
                              if (report.url === "#") e.preventDefault();
                            }}
                            className="flex items-center justify-between rounded-lg border border-slate-200/80 bg-[#fafbfc] px-3.5 py-2 text-xs font-semibold text-[#102b50] transition-colors duration-150 ease-out hover:border-[#079fdf] hover:bg-white hover:text-[#079fdf]"
                          >
                            <span>Annual Report</span>
                            <Download className="h-3.5 w-3.5" />
                          </a>
                        )}
                        {ret && (
                          <a
                            href={ret.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => {
                              if (ret.url === "#") e.preventDefault();
                            }}
                            className="flex items-center justify-between rounded-lg border border-slate-200/80 bg-[#fafbfc] px-3.5 py-2 text-xs font-semibold text-[#102b50] transition-colors duration-150 ease-out hover:border-[#079fdf] hover:bg-white hover:text-[#079fdf]"
                          >
                            <span>MGT-7 Return</span>
                            <Download className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          )}

          {/* 5. IPO DOCUMENTS TAB */}
          {activeTab === "ipo" && (
            <div className="space-y-8">
              
              <div className="rounded-xl border border-slate-200/80 bg-white p-6 sm:p-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[#079fdf]">
                  Primary Market Offering
                </span>
                <h3 className="mt-1.5 font-display text-xl font-bold tracking-[-0.02em] text-[#102b50]">
                  Initial Public Offering (IPO) Filings
                </h3>
                <p className="mt-2.5 text-sm tabular-nums text-[#172b4d]/75 leading-[1.6]">
                  Official statutory prospectuses approved by SEBI, National Stock Exchange (NSE), and Bombay Stock Exchange (BSE) for the ₹218.40 crore fresh capital offering of SRIT India Limited.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {IPO_DOCUMENTS.map((doc, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col justify-between rounded-xl border border-slate-200/80 bg-white p-7 transition-colors duration-150 ease-out hover:border-[#079fdf]/60"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="rounded-md bg-[#eaf7fc] px-2.5 py-0.5 text-xs font-bold text-[#079fdf]">
                          Official Filing
                        </span>
                        <span className="text-xs font-semibold tabular-nums text-[#172b4d]/45">
                          {doc.year}
                        </span>
                      </div>
                      <h4 className="mt-4 font-display text-xl font-bold tracking-[-0.02em] text-[#102b50]">
                        {doc.title}
                      </h4>
                      <p className="mt-2 text-xs leading-[1.6] text-[#172b4d]/65">
                        Statutory offer document detailing business fundamentals, risk factors, financial statements, and capital utilization structure.
                      </p>
                    </div>

                    <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-[#172b4d]/45 font-medium">Verified SEBI Filing</span>
                      <a
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          if (doc.url === "#") e.preventDefault();
                        }}
                        className="inline-flex items-center gap-2 rounded-lg bg-[#102b50] px-4 py-2 text-xs font-semibold text-white transition-colors duration-150 ease-out hover:bg-[#079fdf]"
                      >
                        <Download className="h-3.5 w-3.5" />
                        Download Document
                      </a>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* 6. SHAREHOLDER SERVICES & CONTACT TAB */}
          {activeTab === "contact" && (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              
              {/* Compliance & Grievance Cell */}
              <div className="rounded-xl border border-slate-200/80 bg-white p-7 sm:p-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[#079fdf]">
                  Grievance Redressal
                </span>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-[-0.02em] text-[#102b50]">
                  Compliance & Investor Relations Officer
                </h3>
                <p className="mt-3 text-sm text-[#172b4d]/75 leading-[1.6]">
                  Designated nodal authority for investor grievances, share transfer queries, dividend communications, and regulatory compliance.
                </p>

                <div className="mt-8 divide-y divide-slate-100 border-t border-slate-100 text-sm">
                  <div className="py-3.5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#172b4d]/45">Company Secretary & Compliance Officer</p>
                    <p className="mt-1 font-semibold text-[#102b50]">SRIT India Limited</p>
                  </div>

                  <div className="py-3.5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#172b4d]/45">Designated Grievance Email</p>
                    <a href={`mailto:${INVESTOR_LISTING_INFO.complianceEmail}`} className="mt-1 inline-block font-medium text-[#079fdf] hover:underline">
                      {INVESTOR_LISTING_INFO.complianceEmail}
                    </a>
                  </div>

                  <div className="py-3.5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#172b4d]/45">Telephone Desk</p>
                    <p className="mt-1 tabular-nums text-[#102b50]">{INVESTOR_LISTING_INFO.contactPhone}</p>
                  </div>

                  <div className="pt-3.5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#172b4d]/45">Registered Office</p>
                    <p className="mt-1 tabular-nums text-[#172b4d]/75 leading-[1.6]">{INVESTOR_LISTING_INFO.registeredOffice}</p>
                  </div>
                </div>
              </div>

              {/* Registrar & Share Transfer Agent (RTA) */}
              <div className="rounded-xl border border-slate-200/80 bg-white p-7 sm:p-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[#079fdf]">
                  Share Transfer Agent
                </span>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-[-0.02em] text-[#102b50]">
                  Registrar & Transfer Agent (RTA)
                </h3>
                <p className="mt-3 text-sm text-[#172b4d]/75 leading-[1.6]">
                  For matters relating to share certificates, dematerialisation of physical shares, transfer or transmission of equity, and address changes.
                </p>

                <div className="mt-8 divide-y divide-slate-100 border-t border-slate-100 text-sm">
                  <div className="py-3.5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#172b4d]/45">Bigshare Services Private Limited</p>
                    <p className="mt-1 tabular-nums font-medium text-[#102b50]">SEBI Reg No: INR000001385</p>
                  </div>

                  <div className="py-3.5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#172b4d]/45">RTA Support Email</p>
                    <a href="mailto:investor@bigshareonline.com" className="mt-1 inline-block font-medium text-[#079fdf] hover:underline">
                      investor@bigshareonline.com
                    </a>
                  </div>

                  <div className="pt-3.5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#172b4d]/45">RTA Office Address</p>
                    <p className="mt-1 tabular-nums text-[#172b4d]/75 leading-[1.6]">
                      Office No S6-2, 6th Floor, Pinnacle Business Park, Next to Ahura Centre, Mahakali Caves Road, Andheri (East) Mumbai - 400093, Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>
      </section>

    </main>
  );
}
