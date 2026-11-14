import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Search,
  X,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Clock,
  Activity,
  Landmark,
  Building2,
  FileCheck2,
  Flame,
  Scale,
  Wifi,
  Cpu,
  ShieldCheck,
  CreditCard,
  Briefcase,
  TrendingUp,
  FileSpreadsheet,
  Award,
  BookOpen,
  Home,
  HelpCircle,
  Quote,
  type LucideIcon,
} from "lucide-react";
import type { SearchCategory, SearchItem, SearchResult } from "./types";
import { useSmartSearch } from "./useSmartSearch";

// Dynamic icon mapper matching SRIT domains
const ICON_MAP: Record<string, LucideIcon> = {
  Activity,
  Landmark,
  Building2,
  FileCheck2,
  Flame,
  Scale,
  Wifi,
  Cpu,
  ShieldCheck,
  CreditCard,
  Briefcase,
  TrendingUp,
  FileSpreadsheet,
  Award,
  BookOpen,
  Home,
  HelpCircle,
  Quote,
};

const CATEGORIES: { id: SearchCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "solutions", label: "Solutions" },
  { id: "services", label: "Services & Portals" },
  { id: "pages", label: "Pages" },
  { id: "investors", label: "Investors" },
  { id: "certifications", label: "Certifications" },
  { id: "resources", label: "FAQs & Case Studies" },
];

export interface SmartSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (item: SearchItem) => void;
}

export const SmartSearchModal: React.FC<SmartSearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const {
    query,
    setQuery,
    activeCategory,
    setActiveCategory,
    categoryCounts,
    results,
    selectedIndex,
    setSelectedIndex,
    recentSearches,
    clearRecent,
    quickSuggestions,
    executeAction,
    handleKeyDown,
  } = useSmartSearch({
    onNavigate,
    onClose,
  });

  const handleItemSelect = (item: SearchItem) => {
    onClose();
    executeAction(item);
  };

  // Focus input automatically when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 60);
    } else {
      setQuery("");
    }
  }, [isOpen, setQuery]);

  // Scroll active item into view during keyboard navigation
  useEffect(() => {
    const activeEl = listRef.current?.querySelector(`[data-index="${selectedIndex}"]`);
    if (activeEl) {
      activeEl.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, [selectedIndex]);

  // Highlight query term in string
  const renderHighlightedText = (text: string, highlight: string) => {
    if (!highlight.trim()) return text;

    const parts = text.split(new RegExp(`(${highlight.replace(/[^a-zA-Z0-9]/g, "")})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <mark
          key={i}
          className="rounded-xs bg-[#eaf7fc] font-semibold text-[#079fdf] px-0.5"
        >
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  // Render clean action icon based on action type
  const renderActionIcon = (actionType: SearchItem["actionType"]) => {
    if (actionType === "external") {
      return <ExternalLink className="h-4 w-4" />;
    }
    return <ArrowRight className="h-4 w-4" />;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-start justify-center p-3 sm:p-6 md:p-12 overflow-y-auto">
          {/* Backdrop with soft blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#07152f]/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -16 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            onKeyDown={handleKeyDown}
            className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-2xl"
          >
            {/* Top Search Input Bar */}
            <div className="flex items-center gap-3 border-b border-slate-200 px-4 py-3.5 sm:px-6">
              <Search className="h-5 w-5 shrink-0 text-[#079fdf]" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search solutions, services, portals, investor docs..."
                className="flex-1 bg-transparent font-sans text-base text-[#172b4d] placeholder-slate-400 outline-none sm:text-lg"
              />

              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="rounded-md px-2 py-1 text-xs font-medium text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
                  aria-label="Clear query"
                  title="Clear text"
                >
                  Clear
                </button>
              )}

              <button
                type="button"
                onClick={onClose}
                className="grid h-8 w-8 place-items-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
                aria-label="Close search"
                title="Close (Esc)"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Category Filter Pills with Live Match Counts */}
            <div className="flex items-center gap-1.5 overflow-x-auto border-b border-slate-100 bg-slate-50/70 px-4 py-2 sm:px-6 [&::-webkit-scrollbar]:hidden">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                const count = categoryCounts[cat.id] ?? 0;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`shrink-0 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-all ${
                      isActive
                        ? "bg-[#079fdf] text-white shadow-xs"
                        : "bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200/80"
                    }`}
                  >
                    <span>{cat.label}</span>
                    {cat.id !== "all" && (
                      <span
                        className={`rounded-full px-1.5 py-0.2 text-[10px] font-bold ${
                          isActive
                            ? "bg-white/25 text-white"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Search Content Body */}
            <div
              ref={listRef}
              className="max-h-[58vh] min-h-[260px] overflow-y-auto p-3 sm:p-4 divide-y divide-slate-100"
            >
              {/* Case 1: Results available (from active query or category filter) */}
              {results.length > 0 && (
                <div className="space-y-1">
                  <div className="px-2 py-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    <span>
                      {query.trim()
                        ? `Matches in ${CATEGORIES.find((c) => c.id === activeCategory)?.label || "All"} (${results.length})`
                        : `${CATEGORIES.find((c) => c.id === activeCategory)?.label} (${results.length})`}
                    </span>
                  </div>

                  {results.map((res: SearchResult, index: number) => {
                    const isSelected = index === selectedIndex;
                    const IconComponent =
                      (res.item.metadata?.iconName && ICON_MAP[res.item.metadata.iconName]) ||
                      Activity;

                    return (
                      <div
                        key={res.item.id}
                        data-index={index}
                        onClick={() => handleItemSelect(res.item)}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={`group flex cursor-pointer items-start justify-between gap-4 rounded-xl p-3 transition-colors ${
                          isSelected
                            ? "bg-[#eaf7fc] border border-[#079fdf]/40 shadow-xs"
                            : "hover:bg-slate-50 border border-transparent"
                        }`}
                      >
                        <div className="flex items-start gap-3 min-w-0">
                          <div
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors ${
                              isSelected
                                ? "bg-[#079fdf] text-white"
                                : "bg-slate-100 text-[#079fdf] group-hover:bg-[#eaf7fc]"
                            }`}
                          >
                            <IconComponent className="h-5 w-5" />
                          </div>

                          <div className="min-w-0">
                            <h4 className="font-display text-[15px] font-semibold text-[#172b4d]">
                              {renderHighlightedText(res.item.title, query)}
                            </h4>

                            <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-600">
                              {renderHighlightedText(res.item.description, query)}
                            </p>
                          </div>
                        </div>

                        <div className="shrink-0 flex items-center self-center pl-2">
                          <div
                            className={`flex h-7 w-7 items-center justify-center rounded-lg transition-colors ${
                              isSelected
                                ? "bg-[#079fdf]/20 text-[#079fdf]"
                                : "text-slate-400 group-hover:text-[#079fdf] group-hover:bg-[#eaf7fc]"
                            }`}
                          >
                            {renderActionIcon(res.item.actionType)}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Case 2: Active query with NO results */}
              {query.trim() && results.length === 0 && (
                <div className="flex flex-col items-center justify-center py-12 text-center px-4">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-slate-100 text-slate-400 mb-3">
                    <Search className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-slate-800">
                    No matching results found
                  </h3>
                  <p className="mt-1 max-w-sm text-xs text-slate-500 leading-relaxed">
                    We couldn't find anything matching &ldquo;{query}&rdquo;. Try
                    searching for broader keywords or check our popular suggestions below.
                  </p>

                  <div className="mt-5 flex flex-wrap justify-center gap-2">
                    {["Healthcare", "AgniPermit", "e-District", "Broadband", "Annual Report"].map(
                      (tag) => (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => setQuery(tag)}
                          className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 hover:border-[#079fdf] hover:text-[#079fdf]"
                        >
                          {tag}
                        </button>
                      )
                    )}
                  </div>
                </div>
              )}

              {/* Case 3: Empty query in 'All' - Quick suggestions & Recent Searches */}
              {!query.trim() && activeCategory === "all" && (
                <div className="space-y-5 py-2">
                  {/* Recent Searches */}
                  {recentSearches.length > 0 && (
                    <div>
                      <div className="flex items-center justify-between px-2 pb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" /> Recent Searches
                        </span>
                        <button
                          type="button"
                          onClick={clearRecent}
                          className="text-[11px] font-normal text-slate-400 hover:text-red-500"
                        >
                          Clear all
                        </button>
                      </div>

                      <div className="flex flex-wrap gap-2 px-2">
                        {recentSearches.map((rec) => (
                          <button
                            key={rec}
                            type="button"
                            onClick={() => setQuery(rec)}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-700 transition hover:border-[#079fdf] hover:bg-[#eaf7fc] hover:text-[#079fdf]"
                          >
                            <Clock className="h-3 w-3 text-slate-400" />
                            <span>{rec}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Top Popular Shortcuts */}
                  <div>
                    <div className="flex items-center gap-1.5 px-2 pb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      <Sparkles className="h-3.5 w-3.5 text-[#079fdf]" />
                      <span>Popular Shortcuts & Solutions</span>
                    </div>

                    <div className="space-y-1">
                      {quickSuggestions.map((item, idx) => {
                        const IconComponent =
                          (item.metadata?.iconName && ICON_MAP[item.metadata.iconName]) || Activity;
                        const isSelected = idx === selectedIndex;

                        return (
                          <div
                            key={item.id}
                            data-index={idx}
                            onClick={() => handleItemSelect(item)}
                            onMouseEnter={() => setSelectedIndex(idx)}
                            className={`flex cursor-pointer items-center justify-between rounded-xl p-2.5 transition-colors ${
                              isSelected
                                ? "bg-[#eaf7fc] border border-[#079fdf]/40"
                                : "hover:bg-slate-50 border border-transparent"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-[#079fdf]">
                                <IconComponent className="h-4 w-4" />
                              </div>
                              <div>
                                <h4 className="font-display text-sm font-semibold text-[#172b4d]">
                                  {item.title}
                                </h4>
                              </div>
                            </div>

                            <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#079fdf]" />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Keyboard Hint Bar */}
            <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50 px-4 py-2.5 text-xs text-slate-500 sm:px-6">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <kbd className="rounded bg-white border border-slate-200 px-1 py-0.5 text-[10px] font-semibold text-slate-600 shadow-2xs">
                    ↑
                  </kbd>
                  <kbd className="rounded bg-white border border-slate-200 px-1 py-0.5 text-[10px] font-semibold text-slate-600 shadow-2xs">
                    ↓
                  </kbd>{" "}
                  Navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="rounded bg-white border border-slate-200 px-1.5 py-0.5 text-[10px] font-semibold text-slate-600 shadow-2xs">
                    ↵
                  </kbd>{" "}
                  Select
                </span>
                <span className="hidden items-center gap-1 sm:flex">
                  <kbd className="rounded bg-white border border-slate-200 px-1.5 py-0.5 text-[10px] font-semibold text-slate-600 shadow-2xs">
                    esc
                  </kbd>{" "}
                  Close
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
