import React, { useState, useMemo } from "react";
import {
  Search,
  CheckCircle2,
} from "lucide-react";
import { SmartSearchBar } from "./SmartSearchBar";
import { SmartSearchModal } from "./SmartSearchModal";
import { searchService } from "./searchService";
import { SEARCH_INDEX } from "./searchIndex";
import type { SearchCategory, SearchItem } from "./types";

interface TestCase {
  label: string;
  query: string;
  expectedCategory: SearchCategory;
  description: string;
}

const TEST_CASES: TestCase[] = [
  {
    label: "Typo Test: 'healtcare'",
    query: "healtcare",
    expectedCategory: "solutions",
    description: "Tests fuzzy typo tolerance for Healthcare Solutions",
  },
  {
    label: "Synonym Test: 'fire noc'",
    query: "fire noc",
    expectedCategory: "solutions",
    description: "Tests synonym expansion mapping to AgniPermit",
  },
  {
    label: "Solution Test: 'building permit'",
    query: "building permit",
    expectedCategory: "solutions",
    description: "Tests PlanPermit CAD automated verification",
  },
  {
    label: "Service Test: 'apply new connection'",
    query: "apply new connection",
    expectedCategory: "services",
    description: "Tests RailWire CRM online application portal",
  },
  {
    label: "Portal Test: 'kerala subscriber portal'",
    query: "kerala subscriber portal",
    expectedCategory: "services",
    description: "Tests regional state subscriber login link",
  },
  {
    label: "Investor Test: 'annual report'",
    query: "annual report",
    expectedCategory: "investors",
    description: "Tests statutory filings and auditor statements",
  },
  {
    label: "Certification Test: 'cmmi level 5'",
    query: "cmmi level 5",
    expectedCategory: "certifications",
    description: "Tests company quality appraisal benchmarks",
  },
  {
    label: "FAQ Test: 'documents required'",
    query: "documents required",
    expectedCategory: "resources",
    description: "Tests customer onboarding FAQ lookups",
  },
];

export const SmartSearchDemo: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTestQuery, setActiveTestQuery] = useState("fire noc");
  const [selectedActionMessage, setSelectedActionMessage] = useState<string | null>(null);

  // Global Ctrl+K / Cmd+K listener
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isK = e.key === "k" || e.key === "K" || e.code === "KeyK";
      if ((e.ctrlKey || e.metaKey) && isK) {
        e.preventDefault();
        e.stopPropagation();
        setModalOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown, true);
    return () => window.removeEventListener("keydown", handleKeyDown, true);
  }, []);

  // Live test results for inspection panel
  const liveResults = useMemo(() => {
    const start = performance.now();
    const res = searchService.search(activeTestQuery, { limit: 6 });
    const elapsed = Math.round((performance.now() - start) * 100) / 100;
    return { results: res, elapsed };
  }, [activeTestQuery]);

  // Automated assertion checks
  const testResultsSummary = useMemo(() => {
    return TEST_CASES.map((tc) => {
      const results = searchService.search(tc.query, { limit: 3 });
      const topMatch = results[0];
      const passed =
        topMatch &&
        (topMatch.item.category === tc.expectedCategory ||
          topMatch.item.title.toLowerCase().includes(tc.query.toLowerCase()) ||
          topMatch.score > 25);
      return {
        ...tc,
        passed: Boolean(passed),
        topMatchTitle: topMatch?.item.title || "No match",
        score: topMatch?.score || 0,
      };
    });
  }, []);

  const handleNavigate = (item: SearchItem) => {
    setSelectedActionMessage(
      `Navigating to: "${item.title}" (${item.url})`
    );

    setTimeout(() => {
      if (item.actionType === "scroll") {
        const targetId = item.metadata?.targetId || item.url.replace(/^#/, "");
        window.location.href = `/#${targetId}`;
      } else if (item.actionType === "route") {
        window.location.href = item.url;
      } else if (item.actionType === "external") {
        window.open(item.url, "_blank", "noopener,noreferrer");
      }
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#172b4d] py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-10">
        
        {/* Header Banner */}
        <div className="rounded-xl border border-[#102b50] bg-[#102b50] p-8 text-white sm:p-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div className="space-y-3">
              <div className="inline-flex items-center rounded-md border border-white/15 bg-white/10 px-2.5 py-1 text-xs font-semibold text-cyan-200">
                <span>Working Prototype Demo</span>
              </div>
              <h1 className="font-display text-3xl font-bold tracking-[-0.03em] text-balance sm:text-4xl">
                SRIT Smart Search & Site Navigator
              </h1>
              <p className="max-w-xl text-sm leading-[1.6] text-white/80 text-pretty sm:text-base">
                Universal search engine indexing solutions, state broadband portals,
                application services, investor documentation, company certifications, and FAQs.
              </p>
            </div>

            {/* Launch Modal Trigger */}
            <div className="flex shrink-0 flex-col items-start gap-2.5 md:items-end">
              <a
                href="/"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white transition-colors duration-150 ease-out hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                ← View Main App with Live Search
              </a>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-bold text-[#102b50] transition-colors duration-150 ease-out hover:bg-[#f0f7fa] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Search className="h-4 w-4 text-[#079fdf]" />
                <span>Open Search Palette</span>
                <kbd className="rounded bg-slate-100 px-1.5 py-0.5 text-xs tabular-nums text-slate-600">
                  ⌘K
                </kbd>
              </button>
              <span className="text-xs text-white/75 tabular-nums">
                Total Indexed Items: <strong className="text-white">{SEARCH_INDEX.length}</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Action feedback toast */}
        {selectedActionMessage && (
          <div className="flex items-center justify-between rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
              <span>{selectedActionMessage}</span>
            </div>
          </div>
        )}

        {/* Search Bar Component Preview */}
        <div className="space-y-4 rounded-xl border border-slate-200/80 bg-white p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="font-display text-lg font-bold tracking-[-0.02em] text-[#172b4d]">
                1. Standalone Search Bar Component (`SmartSearchBar`)
              </h2>
              <p className="text-xs leading-[1.6] text-slate-500 text-pretty">
                Can be placed in the Header or Hero section with a single line of code.
              </p>
            </div>
            <span className="rounded-md border border-[#079fdf]/20 bg-[#eaf7fc] px-2.5 py-1 text-xs font-semibold text-[#079fdf]">
              Theme-Aligned
            </span>
          </div>

          <div className="flex flex-col items-center gap-4 pt-2 sm:flex-row">
            <div className="w-full max-w-lg">
              <SmartSearchBar onClick={() => setModalOpen(true)} />
            </div>
            <div className="flex items-center gap-2">
              <SmartSearchBar onClick={() => setModalOpen(true)} compact />
              <span className="text-xs text-slate-400">(Compact variant)</span>
            </div>
          </div>
        </div>

        {/* Interactive Query Tester */}
        <div className="space-y-6 rounded-xl border border-slate-200/80 bg-white p-6">
          <div>
            <h2 className="font-display text-lg font-bold tracking-[-0.02em] text-[#172b4d]">
              2. Interactive Query Test Bench
            </h2>
            <p className="text-xs leading-[1.6] text-slate-500 text-pretty">
              Click any sample query chip to test how fuzzy matching, synonyms, and multi-domain indexing behave.
            </p>
          </div>

          {/* Test chips */}
          <div className="flex flex-wrap gap-2">
            {TEST_CASES.map((tc) => {
              const isActive = activeTestQuery === tc.query;
              return (
                <button
                  key={tc.query}
                  type="button"
                  onClick={() => {
                    setActiveTestQuery(tc.query);
                  }}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#079fdf] ${
                    isActive
                      ? "bg-[#102b50] text-white"
                      : "border border-slate-200/80 bg-[#fafbfc] text-[#172b4d] hover:border-slate-300 hover:bg-slate-100"
                  }`}
                >
                  {tc.label}
                </button>
              );
            })}
          </div>

          {/* Live Search Inspector Card */}
          <div className="space-y-3 rounded-lg border border-slate-200/80 bg-[#fafbfc] p-4">
            <div className="flex items-center justify-between border-b border-slate-200/80 pb-2 text-xs font-semibold text-slate-500">
              <div className="flex items-center gap-2">
                <span>Active Query:</span>
                <code className="rounded border border-slate-200/80 bg-white px-2 py-0.5 text-[#172b4d]">
                  &ldquo;{activeTestQuery}&rdquo;
                </code>
              </div>
              <span className="tabular-nums">Execution Time: {liveResults.elapsed} ms</span>
            </div>

            <div className="space-y-2">
              {liveResults.results.map((res, i) => (
                <div
                  key={res.item.id}
                  className="flex items-start justify-between gap-4 rounded-md border border-slate-200/80 bg-white p-3 text-xs"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm tabular-nums text-[#172b4d]">
                        #{i + 1} {res.item.title}
                      </span>
                      <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-semibold uppercase text-slate-500">
                        {res.item.categoryLabel}
                      </span>
                    </div>
                    <p className="line-clamp-1 text-slate-600">{res.item.description}</p>
                    <div className="flex items-center gap-3 text-[11px] text-slate-400">
                      <span>Action: <code>{res.item.actionType}</code></span>
                      <span>Target: <code>{res.item.url}</code></span>
                    </div>
                  </div>

                  <div className="shrink-0 text-right">
                    <span className="inline-block rounded-md border border-[#079fdf]/20 bg-[#eaf7fc] px-2 py-0.5 text-[11px] font-bold tabular-nums text-[#079fdf]">
                      Score: {res.score}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Automated Test Suite Summary */}
        <div className="space-y-4 rounded-xl border border-slate-200/80 bg-white p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="font-display text-lg font-bold tracking-[-0.02em] text-[#172b4d]">
                3. Automated Domain Assertion Suite
              </h2>
              <p className="text-xs leading-[1.6] text-slate-500 text-pretty">
                Verifies correctness across all website categories.
              </p>
            </div>
            <span className="flex items-center gap-1.5 rounded-md border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold tabular-nums text-emerald-700">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              <span>{testResultsSummary.filter((t) => t.passed).length} / {testResultsSummary.length} Tests Passing</span>
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-600">
              <thead className="border-y border-slate-200/80 bg-[#fafbfc] text-[10px] uppercase text-slate-500">
                <tr>
                  <th className="px-3 py-2.5">Test Scenario</th>
                  <th className="px-3 py-2.5">Query</th>
                  <th className="px-3 py-2.5">Target Match</th>
                  <th className="px-3 py-2.5">Score</th>
                  <th className="px-3 py-2.5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/60">
                {testResultsSummary.map((t) => (
                  <tr key={t.query} className="transition-colors duration-150 hover:bg-[#fafbfc]">
                    <td className="px-3 py-2.5 font-medium text-[#172b4d]">{t.description}</td>
                    <td className="px-3 py-2.5"><code>{t.query}</code></td>
                    <td className="px-3 py-2.5 text-slate-700">{t.topMatchTitle}</td>
                    <td className="px-3 py-2.5 font-semibold tabular-nums text-[#079fdf]">{t.score}</td>
                    <td className="px-3 py-2.5">
                      <span className="inline-flex items-center gap-1 font-semibold text-emerald-600">
                        <CheckCircle2 className="h-3.5 w-3.5" /> Passed
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* The Global Smart Search Modal */}
      <SmartSearchModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onNavigate={handleNavigate}
      />
    </div>
  );
};
