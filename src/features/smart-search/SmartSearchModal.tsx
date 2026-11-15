import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Search,
  X,
  ArrowRight,
  ExternalLink,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { SearchCategory, SearchItem, SearchResult } from "./types";
import { useSmartSearch } from "./useSmartSearch";

const CATEGORIES: { id: SearchCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "solutions", label: "Solutions" },
  { id: "knowledge", label: "Knowledge Center" },
  { id: "investors", label: "Investors" },
  { id: "pages", label: "Leadership & Pages" },
  { id: "certifications", label: "Certifications" },
  { id: "resources", label: "Impact & Clients" },
];

export interface SmartSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuery?: string;
  onNavigate?: (item: SearchItem) => void;
  navigate?: (to: string) => void;
}

export const SmartSearchModal: React.FC<SmartSearchModalProps> = ({
  isOpen,
  onClose,
  initialQuery,
  onNavigate,
  navigate,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

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
    navigate,
    initialQuery,
  });

  const handleItemSelect = (item: SearchItem) => {
    onClose();
    executeAction(item);
  };

  // Focus input automatically when modal opens
  useEffect(() => {
    if (isOpen) {
      if (initialQuery !== undefined) {
        setQuery(initialQuery);
      }
      setTimeout(() => {
        inputRef.current?.focus();
        inputRef.current?.select();
      }, 60);
    } else {
      setQuery("");
    }
  }, [isOpen, initialQuery, setQuery]);

  // Scroll active item into view during keyboard navigation
  useEffect(() => {
    const activeEl = listRef.current?.querySelector(`[data-index="${selectedIndex}"]`);
    if (activeEl) {
      activeEl.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, [selectedIndex]);

  const updateTabScrollState = useCallback(() => {
    const el = tabsRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const rafId = requestAnimationFrame(updateTabScrollState);
    const timerId = setTimeout(updateTabScrollState, 180);
    window.addEventListener("resize", updateTabScrollState);
    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timerId);
      window.removeEventListener("resize", updateTabScrollState);
    };
  }, [isOpen, categoryCounts, updateTabScrollState]);

  const scrollTabs = (dir: "left" | "right") => {
    tabsRef.current?.scrollBy({
      left: dir === "left" ? -180 : 180,
      behavior: "smooth",
    });
  };

  const handleTabsWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const el = tabsRef.current;
    if (!el) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      el.scrollLeft += e.deltaY;
    }
  };

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
            initial={{ opacity: 0, scale: 0.98, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -8 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            onKeyDown={handleKeyDown}
            className="relative z-10 w-full max-w-2xl overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-xl"
          >
            {/* Top Search Input Bar */}
            <div className="flex items-center gap-2.5 border-b border-slate-200/80 bg-white px-4 py-3.5 sm:px-5 sm:py-4">
              <div className="group flex flex-1 items-center gap-2.5 rounded-lg border border-slate-200/90 bg-[#fafbfc] px-3.5 py-2.5 transition-colors duration-150 ease-out focus-within:border-[#079fdf]/60 focus-within:bg-white">
                <Search className="h-4 w-4 shrink-0 text-slate-400 transition-colors duration-150 group-focus-within:text-[#079fdf]" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search solutions, services, portals, investor docs..."
                  className="w-full bg-transparent font-sans text-sm text-[#172b4d] placeholder-slate-400 outline-none focus:outline-none focus-visible:outline-none"
                />

                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="shrink-0 rounded px-2 py-0.5 text-xs font-medium text-slate-400 transition-colors duration-150 hover:bg-slate-100 hover:text-slate-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#079fdf]"
                    aria-label="Clear query"
                    title="Clear text"
                  >
                    Clear
                  </button>
                )}
              </div>

              <button
                type="button"
                onClick={onClose}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-slate-200/80 bg-[#fafbfc] text-slate-500 transition-colors duration-150 hover:bg-slate-100 hover:text-[#102b50] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079fdf]"
                aria-label="Close search"
                title="Close (Esc)"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Category Filter Tabs */}
            <div className="relative border-b border-slate-200/80 bg-[#fafbfc]">
              {canScrollLeft && (
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 flex items-center bg-gradient-to-r from-[#fafbfc] via-[#fafbfc]/95 to-transparent pl-2 pr-5">
                  <button
                    type="button"
                    onClick={() => scrollTabs("left")}
                    aria-label="Scroll categories left"
                    className="pointer-events-auto flex h-7 w-7 items-center justify-center rounded-md border border-slate-200/80 bg-white text-slate-600 transition-colors duration-150 ease-out hover:border-[#079fdf] hover:text-[#079fdf] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079fdf]"
                  >
                    <ChevronLeft className="h-3.5 w-3.5" />
                  </button>
                </div>
              )}

              <div
                ref={tabsRef}
                onScroll={updateTabScrollState}
                onWheel={handleTabsWheel}
                className="flex items-center gap-5 overflow-x-auto px-4 sm:px-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              >
                {CATEGORIES.map((cat) => {
                  const isActive = activeCategory === cat.id;
                  const count = categoryCounts[cat.id] ?? 0;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={(e) => {
                        setActiveCategory(cat.id);
                        e.currentTarget.scrollIntoView({
                          behavior: "smooth",
                          inline: "nearest",
                          block: "nearest",
                        });
                      }}
                      className={`relative shrink-0 scroll-mx-10 inline-flex items-center gap-1.5 border-b-2 py-2.5 text-xs font-semibold transition-colors duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079fdf] ${
                        isActive
                          ? "border-[#079fdf] text-[#102b50]"
                          : "border-transparent text-slate-500 hover:text-[#172b4d]"
                      }`}
                    >
                      <span>{cat.label}</span>
                      {cat.id !== "all" && (
                        <span className="text-[11px] font-medium tabular-nums text-slate-400">
                          {count}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {canScrollRight && (
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 flex items-center bg-gradient-to-l from-[#fafbfc] via-[#fafbfc]/95 to-transparent pr-2 pl-5">
                  <button
                    type="button"
                    onClick={() => scrollTabs("right")}
                    aria-label="Scroll categories right"
                    className="pointer-events-auto flex h-7 w-7 items-center justify-center rounded-md border border-slate-200/80 bg-white text-slate-600 transition-colors duration-150 ease-out hover:border-[#079fdf] hover:text-[#079fdf] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079fdf]"
                  >
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              )}
            </div>

            {/* Search Content Body */}
            <div
              ref={listRef}
              className="max-h-[58vh] min-h-[260px] overflow-y-auto p-3 sm:p-4 divide-y divide-slate-100"
            >
              {/* Case 1: Results available (from active query or category filter) */}
              {results.length > 0 && (
                <div className="space-y-1">
                  <div className="px-2 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 tabular-nums">
                    <span>
                      {query.trim()
                        ? `Matches in ${CATEGORIES.find((c) => c.id === activeCategory)?.label || "All"} (${results.length})`
                        : `${CATEGORIES.find((c) => c.id === activeCategory)?.label} (${results.length})`}
                    </span>
                  </div>

                  {results.map((res: SearchResult, index: number) => {
                    const isSelected = index === selectedIndex;

                    return (
                      <div
                        key={res.item.id}
                        data-index={index}
                        onClick={() => handleItemSelect(res.item)}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={`group flex cursor-pointer items-center justify-between gap-4 rounded-lg border px-3.5 py-3 transition-colors duration-150 ease-out ${
                          isSelected
                            ? "border-[#079fdf]/35 bg-[#eaf7fc]/75"
                            : "border-transparent hover:bg-slate-50"
                        }`}
                      >
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-0.5">
                            <h4 className="font-display text-[15px] font-semibold text-[#172b4d]">
                              {renderHighlightedText(res.item.title, query)}
                            </h4>
                            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#079fdf]">
                              {res.item.badge || res.item.categoryLabel}
                            </span>
                          </div>

                          <p className="mt-1 line-clamp-2 text-xs leading-[1.6] text-slate-600 text-pretty">
                            {renderHighlightedText(res.item.description, query)}
                          </p>
                        </div>

                        <div
                          className={`shrink-0 transition-colors duration-150 ${
                            isSelected
                              ? "text-[#079fdf]"
                              : "text-slate-400 group-hover:text-[#079fdf]"
                          }`}
                        >
                          {renderActionIcon(res.item.actionType)}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Case 2: Active query with NO results */}
              {query.trim() && results.length === 0 && (
                <div className="flex flex-col items-center justify-center px-4 py-12 text-center">
                  <div className="mb-3 grid h-11 w-11 place-items-center rounded-lg border border-slate-200/80 bg-[#fafbfc] text-slate-400">
                    <Search className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-[#172b4d]">
                    No matching results found
                  </h3>
                  <p className="mt-1 max-w-sm text-xs leading-[1.6] text-slate-500 text-pretty">
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
                          className="rounded-md border border-slate-200/80 bg-white px-3 py-1 text-xs font-medium text-slate-600 transition-colors duration-150 hover:border-[#079fdf] hover:text-[#079fdf] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#079fdf]"
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
                    <div className="flex items-center gap-1.5 px-2 pb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                      <span>Popular Shortcuts & Solutions</span>
                    </div>

                    <div className="space-y-1">
                      {quickSuggestions.map((item, idx) => {
                        const isSelected = idx === selectedIndex;

                        return (
                          <div
                            key={item.id}
                            data-index={idx}
                            onClick={() => handleItemSelect(item)}
                            onMouseEnter={() => setSelectedIndex(idx)}
                            className={`group flex cursor-pointer items-center justify-between gap-4 rounded-lg border px-3.5 py-2.5 transition-colors duration-150 ease-out ${
                              isSelected
                                ? "border-[#079fdf]/35 bg-[#eaf7fc]/75"
                                : "border-transparent hover:bg-slate-50"
                            }`}
                          >
                            <div className="min-w-0 flex flex-wrap items-baseline gap-x-2.5 gap-y-0.5">
                              <h4 className="font-display text-sm font-semibold text-[#172b4d]">
                                {item.title}
                              </h4>
                              <span className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
                                {item.badge || item.categoryLabel}
                              </span>
                            </div>

                            <ArrowRight
                              className={`h-4 w-4 shrink-0 transition-colors duration-150 ${
                                isSelected
                                  ? "text-[#079fdf]"
                                  : "text-slate-400 group-hover:text-[#079fdf]"
                              }`}
                            />
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
