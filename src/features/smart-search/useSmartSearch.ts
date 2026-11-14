import { useState, useEffect, useMemo, useCallback } from "react";
import type { SearchCategory, SearchItem, SearchResult } from "./types";
import { searchService } from "./searchService";
import { SEARCH_INDEX } from "./searchIndex";

export interface UseSmartSearchOptions {
  initialCategory?: SearchCategory;
  debounceMs?: number;
  onNavigate?: (item: SearchItem) => void;
  onClose?: () => void;
}

/**
 * Dynamically resolves target DOM element across the application
 * even if the original component lacks an explicit ID.
 */
function resolveTargetElement(item: SearchItem): HTMLElement | null {
  const targetId = item.metadata?.targetId || item.url.replace(/^#/, "");

  // 1. Check if direct ID exists (e.g. healthcare, e-governance, telecom, cyber-security, icarkno)
  const elById = document.getElementById(targetId);
  if (elById) return elById;

  // 2. Dynamic resolver for sections without IDs in unmodified codebase
  const sections = Array.from(document.querySelectorAll<HTMLElement>("section"));

  if (targetId === "investors" || item.category === "investors") {
    const investorSection = sections.find(
      (s) =>
        s.textContent?.includes("Investor Relations") ||
        s.textContent?.includes("Corporate Governance")
    );
    if (investorSection) return investorSection;
  }

  if (targetId === "certifications" || item.category === "certifications") {
    const certSection = sections.find(
      (s) => s.textContent?.includes("CMMI Level 5") || s.textContent?.includes("ISO 9001")
    );
    if (certSection) return certSection;
  }

  if (targetId === "testimonials" || item.id.includes("testimonial")) {
    const testimonialSection = sections.find(
      (s) =>
        s.textContent?.includes("TÜV Rheinland") ||
        s.textContent?.includes("met our expectations")
    );
    if (testimonialSection) return testimonialSection;
  }

  if (targetId === "blogs" || item.id.includes("blog")) {
    const blogSection = sections.find(
      (s) =>
        s.textContent?.includes("Latest Case Studies") ||
        s.textContent?.includes("RailWire Expands")
    );
    if (blogSection) return blogSection;
  }

  if (targetId === "faq") {
    const faqSection = sections.find(
      (s) =>
        s.textContent?.includes("Frequently Asked") ||
        s.textContent?.includes("RailWire connection")
    );
    if (faqSection) return faqSection;
  }

  return null;
}

/**
 * Automatically activates the corresponding e-Governance product tab
 * directly through DOM click without modifying Sections.tsx.
 */
function activateSubTabIfApplicable(itemId: string) {
  const tabLabelMap: Record<string, string> = {
    "sol-egov-edistrict": "E-District",
    "sol-egov-ecivic": "eCIVIC",
    "sol-egov-planpermit": "PlanPermit",
    "sol-egov-agnipermit": "AgniPermit",
    "sol-egov-litigation": "Litigation",
  };

  const targetLabel = tabLabelMap[itemId];
  if (!targetLabel) return;

  setTimeout(() => {
    const egovSection = document.getElementById("e-governance");
    if (!egovSection) return;

    const buttons = Array.from(egovSection.querySelectorAll<HTMLButtonElement>("button"));
    const matchBtn = buttons.find((btn) =>
      btn.textContent?.toLowerCase().includes(targetLabel.toLowerCase())
    );
    if (matchBtn) {
      matchBtn.click();
    }
  }, 100);
}

export function useSmartSearch(options: UseSmartSearchOptions = {}) {
  const { initialCategory = "all", debounceMs = 120, onNavigate, onClose } = options;

  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<SearchCategory>(initialCategory);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  // Refresh recent searches whenever modal opens
  const refreshRecent = useCallback(() => {
    setRecentSearches(searchService.getRecentSearches());
  }, []);

  useEffect(() => {
    refreshRecent();
  }, [refreshRecent]);

  // Debounce the query for high-performance typing
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, debounceMs);

    return () => clearTimeout(timer);
  }, [query, debounceMs]);

  // Dynamic counts for each category filter based on query or total catalog
  const categoryCounts = useMemo(() => {
    const counts: Record<SearchCategory, number> = {
      all: 0,
      solutions: 0,
      services: 0,
      pages: 0,
      investors: 0,
      certifications: 0,
      resources: 0,
    };

    if (debouncedQuery.trim()) {
      const allMatches = searchService.search(debouncedQuery, {
        category: "all",
        limit: 100,
      });
      counts.all = allMatches.length;
      allMatches.forEach((r) => {
        if (counts[r.item.category] !== undefined) {
          counts[r.item.category]++;
        }
      });
    } else {
      counts.all = SEARCH_INDEX.length;
      SEARCH_INDEX.forEach((item) => {
        if (counts[item.category] !== undefined) {
          counts[item.category]++;
        }
      });
    }

    return counts;
  }, [debouncedQuery]);

  // Execute search based on debounced query and active category
  // If query is empty but a category is selected, lists all items in that category for easy browsing
  const results: SearchResult[] = useMemo(() => {
    if (!debouncedQuery.trim()) {
      if (activeCategory !== "all") {
        return searchService.getAllByCategory(activeCategory).map((item) => ({
          item,
          score: 100,
          matchedFields: { category: true },
        }));
      }
      return [];
    }
    return searchService.search(debouncedQuery, {
      category: activeCategory,
      limit: 15,
    });
  }, [debouncedQuery, activeCategory]);

  // Reset selectedIndex whenever results or category changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [results, activeCategory]);

  // Quick suggestions for empty state
  const quickSuggestions = useMemo(() => {
    return searchService.getQuickSuggestions();
  }, []);

  // Action execution when user clicks or presses Enter on a result
  const executeAction = useCallback(
    (item: SearchItem) => {
      // 1. IMMEDIATELY CLOSE THE POPUP so user can see where they navigated
      setIsOpen(false);
      if (onClose) {
        onClose();
      }

      // 2. Save query in recent searches
      if (query.trim()) {
        searchService.saveRecentSearch(query);
        refreshRecent();
      }

      if (onNavigate) {
        onNavigate(item);
      }

      // 3. Switch sub-tab if e-governance item
      activateSubTabIfApplicable(item.id);

      // 4. Perform smooth scroll with header offset
      if (item.actionType === "scroll") {
        setTimeout(() => {
          const targetElement = resolveTargetElement(item);

          if (targetElement) {
            const headerOffset = 95;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: Math.max(0, offsetPosition),
              behavior: "smooth",
            });

            const id = targetElement.id || item.metadata?.targetId || item.url.replace(/^#/, "");
            if (id) {
              window.history.replaceState(null, "", `#${id}`);
            }

            // Visual highlight ring animation
            targetElement.classList.add(
              "transition-all",
              "duration-500",
              "ring-4",
              "ring-[#079fdf]",
              "ring-offset-4"
            );
            setTimeout(() => {
              targetElement.classList.remove("ring-4", "ring-[#079fdf]", "ring-offset-4");
            }, 2400);
          } else {
            const targetId = item.metadata?.targetId || item.url.replace(/^#/, "");
            window.location.href = `/#${targetId}`;
          }
        }, 60);
      } else if (item.actionType === "external") {
        window.open(item.url, "_blank", "noopener,noreferrer");
      } else if (item.actionType === "route") {
        window.location.href = item.url;
      } else if (item.actionType === "action") {
        if (item.url === "#ai-chat") {
          setTimeout(() => {
            const chatBtn =
              document.querySelector<HTMLButtonElement>('button[aria-label="Open chat"]') ||
              document.querySelector<HTMLButtonElement>('button[aria-label="SRIT AI Assistant"]') ||
              document.querySelector<HTMLButtonElement>(".fixed.bottom-6.right-6 button");
            chatBtn?.click();
          }, 150);
        } else if (item.url === "#subscriber-modal") {
          setTimeout(() => {
            const cards =
              document.getElementById("subscriber-portal") ||
              document.getElementById("telecom") ||
              document.querySelector("main");
            cards?.scrollIntoView({ behavior: "smooth" });
          }, 60);
        }
      }
    },
    [query, onNavigate, onClose, refreshRecent]
  );

  // Global Ctrl+K / Cmd+K keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Keyboard navigation within the search dialog
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const activeListLength = results.length > 0 ? results.length : quickSuggestions.length;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1 < activeListLength ? prev + 1 : 0));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 >= 0 ? prev - 1 : activeListLength - 1));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (results.length > 0 && results[selectedIndex]) {
          executeAction(results[selectedIndex].item);
        } else if (!query.trim() && quickSuggestions[selectedIndex]) {
          executeAction(quickSuggestions[selectedIndex]);
        }
      } else if (e.key === "Escape") {
        e.preventDefault();
        setIsOpen(false);
        if (onClose) {
          onClose();
        }
      }
    },
    [results, quickSuggestions, selectedIndex, query, executeAction, onClose]
  );

  const clearRecent = useCallback(() => {
    searchService.clearRecentSearches();
    setRecentSearches([]);
  }, []);

  return {
    query,
    setQuery,
    debouncedQuery,
    activeCategory,
    setActiveCategory,
    categoryCounts,
    results,
    selectedIndex,
    setSelectedIndex,
    isOpen,
    setIsOpen,
    recentSearches,
    clearRecent,
    quickSuggestions,
    executeAction,
    handleKeyDown,
  };
}
