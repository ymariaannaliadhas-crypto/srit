import type {
  ISearchService,
  SearchFilterOptions,
  SearchItem,
  SearchResult,
} from "./types";
import { SEARCH_INDEX } from "./searchIndex";

const RECENT_SEARCHES_KEY = "srit_smart_search_recent";
const MAX_RECENT_SEARCHES = 6;

/**
 * Calculates Levenshtein distance between two strings
 */
function levenshteinDistance(a: string, b: string): number {
  const an = a.length;
  const bn = b.length;
  if (an === 0) return bn;
  if (bn === 0) return an;

  const matrix: number[][] = [];
  for (let i = 0; i <= bn; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= an; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= bn; i++) {
    for (let j = 1; j <= an; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          Math.min(
            matrix[i][j - 1] + 1,     // insertion
            matrix[i - 1][j] + 1      // deletion
          )
        );
      }
    }
  }

  return matrix[bn][an];
}

/**
 * Checks if candidate word matches target token fuzzily
 */
function isFuzzyMatch(candidate: string, token: string): boolean {
  if (candidate === token) return true;
  if (candidate.startsWith(token)) return true;

  // Allow 1 typo for words of length 4-6, 2 typos for length > 6
  const maxDistance = token.length > 6 ? 2 : token.length >= 4 ? 1 : 0;
  if (maxDistance === 0) return candidate.includes(token);

  if (Math.abs(candidate.length - token.length) > maxDistance) {
    return candidate.includes(token);
  }

  return levenshteinDistance(candidate, token) <= maxDistance;
}

export class SmartSearchService implements ISearchService {
  private items: SearchItem[];

  constructor(customIndex?: SearchItem[]) {
    this.items = customIndex || SEARCH_INDEX;
  }

  /**
   * Search across the entire site index
   */
  public search(query: string, options: SearchFilterOptions = {}): SearchResult[] {
    const rawQuery = query.trim().toLowerCase();
    if (!rawQuery) {
      return [];
    }

    const tokens = rawQuery
      .split(/\s+/)
      .filter((t) => t.length > 0)
      .map((t) => t.replace(/[^a-z0-9]/gi, ""));

    if (tokens.length === 0) return [];

    const { category = "all", limit = 15 } = options;

    const filteredIndex =
      category === "all"
        ? this.items
        : this.items.filter((item) => item.category === category);

    const scoredResults: SearchResult[] = [];

    for (const item of filteredIndex) {
      let score = 0;
      const matchedFields: SearchResult["matchedFields"] = {};

      const titleLower = item.title.toLowerCase();
      const descLower = item.description.toLowerCase();
      const catLower = item.categoryLabel.toLowerCase();
      const subCatLower = (item.subCategory || "").toLowerCase();
      const allKeywords = [
        ...(item.keywords || []),
        ...(item.synonyms || []),
      ].map((k) => k.toLowerCase());

      // 1. Exact or whole-query matches
      if (titleLower === rawQuery) {
        score += 120;
        matchedFields.title = true;
      } else if (titleLower.includes(rawQuery)) {
        score += 65;
        matchedFields.title = true;
      }

      if (allKeywords.includes(rawQuery)) {
        score += 50;
        matchedFields.keywords = true;
      }

      if (descLower.includes(rawQuery)) {
        score += 25;
        matchedFields.description = true;
      }

      // 2. Token-by-token evaluation
      let tokensMatched = 0;

      for (const token of tokens) {
        let tokenMatchedThisItem = false;

        // Check Title
        const titleWords = titleLower.split(/\s+/);
        for (const tw of titleWords) {
          if (tw === token) {
            score += 25;
            tokenMatchedThisItem = true;
            matchedFields.title = true;
            break;
          } else if (isFuzzyMatch(tw, token)) {
            score += 15;
            tokenMatchedThisItem = true;
            matchedFields.title = true;
            break;
          }
        }

        // Check Keywords and Synonyms
        for (const kw of allKeywords) {
          if (kw === token || kw.split(/\s+/).includes(token)) {
            score += 20;
            tokenMatchedThisItem = true;
            matchedFields.keywords = true;
            break;
          } else if (isFuzzyMatch(kw, token)) {
            score += 12;
            tokenMatchedThisItem = true;
            matchedFields.keywords = true;
            break;
          }
        }

        // Check Category & SubCategory
        if (catLower.includes(token) || subCatLower.includes(token)) {
          score += 15;
          tokenMatchedThisItem = true;
          matchedFields.category = true;
        }

        // Check Description
        if (descLower.includes(token)) {
          score += 8;
          tokenMatchedThisItem = true;
          matchedFields.description = true;
        }

        if (tokenMatchedThisItem) {
          tokensMatched++;
        }
      }

      // Penalize items that only match some of multi-term queries
      if (tokens.length > 1 && tokensMatched < tokens.length) {
        score = score * (tokensMatched / tokens.length);
      }

      // Boost items with badges (flagship solutions, NABH, Listed, etc.)
      if (item.badge && score > 0) {
        score += 5;
      }

      if (score > 10) {
        scoredResults.push({
          item,
          score: Math.round(score),
          matchedFields,
        });
      }
    }

    // Sort descending by relevance score
    scoredResults.sort((a, b) => b.score - a.score);

    return scoredResults.slice(0, limit);
  }

  /**
   * Returns recent searches from localStorage
   */
  public getRecentSearches(): string[] {
    try {
      if (typeof window === "undefined" || !window.localStorage) return [];
      const stored = localStorage.getItem(RECENT_SEARCHES_KEY);
      if (!stored) return [];
      const parsed = JSON.parse(stored);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  /**
   * Saves a query into recent searches
   */
  public saveRecentSearch(query: string): void {
    const trimmed = query.trim();
    if (!trimmed || trimmed.length < 2) return;

    try {
      if (typeof window === "undefined" || !window.localStorage) return;
      const recent = this.getRecentSearches().filter(
        (q) => q.toLowerCase() !== trimmed.toLowerCase()
      );
      recent.unshift(trimmed);
      localStorage.setItem(
        RECENT_SEARCHES_KEY,
        JSON.stringify(recent.slice(0, MAX_RECENT_SEARCHES))
      );
    } catch {
      // Storage unavailable or disabled
    }
  }

  /**
   * Clears recent searches
   */
  public clearRecentSearches(): void {
    try {
      if (typeof window === "undefined" || !window.localStorage) return;
      localStorage.removeItem(RECENT_SEARCHES_KEY);
    } catch {
      // Storage unavailable
    }
  }

  /**
   * Returns quick suggestion shortcuts for empty search state
   */
  public getQuickSuggestions(): SearchItem[] {
    const ids = [
      "sol-healthcare-suite",
      "sol-egov-edistrict",
      "sol-egov-agnipermit",
      "svc-apply-connection",
      "svc-subscriber-portal-hub",
      "inv-annual-report",
      "cert-cmmi-level-5",
    ];

    return ids
      .map((id) => this.items.find((item) => item.id === id))
      .filter((item): item is SearchItem => Boolean(item));
  }
}

// Export singleton instance for convenience
export const searchService = new SmartSearchService();
