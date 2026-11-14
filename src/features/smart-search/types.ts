export type SearchCategory =
  | "all"
  | "solutions"
  | "services"
  | "pages"
  | "investors"
  | "certifications"
  | "resources";

export type SearchActionType =
  | "scroll"      // In-page smooth scroll (e.g. #healthcare, #e-governance)
  | "route"       // In-app navigation (e.g. /company, /contact-us)
  | "external"    // External portal / CRM link (e.g. RailWire CRM, subscriber portal)
  | "action";     // Interactive tool/modal trigger (e.g. state selector, AI chat)

export interface SearchItem {
  id: string;
  title: string;
  category: SearchCategory;
  categoryLabel: string;
  subCategory?: string;
  description: string;
  keywords: string[];
  synonyms?: string[];
  badge?: string;
  url: string;
  actionType: SearchActionType;
  metadata?: {
    iconName?: string;
    highlights?: string[];
    stateOrRegion?: string;
    externalLabel?: string;
    targetId?: string;
  };
}

export interface SearchResult {
  item: SearchItem;
  score: number;
  matchedFields: {
    title?: boolean;
    description?: boolean;
    keywords?: boolean;
    category?: boolean;
  };
  highlightRanges?: {
    title?: [number, number][];
    description?: [number, number][];
  };
}

export interface SearchFilterOptions {
  category?: SearchCategory;
  limit?: number;
}

export interface ISearchService {
  search(query: string, options?: SearchFilterOptions): SearchResult[];
  getRecentSearches(): string[];
  saveRecentSearch(query: string): void;
  clearRecentSearches(): void;
  getQuickSuggestions(): SearchItem[];
}
