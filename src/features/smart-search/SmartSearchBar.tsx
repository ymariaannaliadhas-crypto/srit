import React from "react";
import { Search } from "lucide-react";

export interface SmartSearchBarProps {
  onClick?: () => void;
  placeholder?: string;
  className?: string;
  compact?: boolean;
}

export const SmartSearchBar: React.FC<SmartSearchBarProps> = ({
  onClick,
  placeholder = "Search solutions, services, portals, docs...",
  className = "",
  compact = false,
}) => {
  const isMac =
    typeof window !== "undefined" &&
    navigator.platform.toUpperCase().indexOf("MAC") >= 0;

  if (compact) {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-label="Open Smart Search"
        className={`group flex items-center gap-2 rounded-full border border-slate-200 bg-white/95 px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm backdrop-blur transition-all duration-200 hover:border-[#079fdf] hover:text-[#079fdf] hover:shadow-md ${className}`}
      >
        <Search className="h-3.5 w-3.5 text-slate-400 transition-colors group-hover:text-[#079fdf]" />
        <span className="hidden sm:inline">Search</span>
        <kbd className="ml-1 rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-semibold text-slate-500 transition-colors group-hover:bg-[#eaf7fc] group-hover:text-[#079fdf]">
          {isMac ? "⌘K" : "Ctrl+K"}
        </kbd>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative flex w-full max-w-md items-center justify-between rounded-xl border border-slate-200/90 bg-white px-4 py-2.5 text-left text-sm text-slate-500 shadow-soft transition-all duration-300 hover:border-[#079fdf] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#079fdf]/30 ${className}`}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#eaf7fc] text-[#079fdf] transition-colors group-hover:bg-[#079fdf] group-hover:text-white">
          <Search className="h-4 w-4" />
        </div>
        <span className="font-sans text-[14px] text-slate-500 group-hover:text-slate-700">
          {placeholder}
        </span>
      </div>

      <div className="flex items-center gap-1.5">
        <kbd className="hidden rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-semibold text-slate-500 shadow-xs sm:inline-block">
          {isMac ? "⌘K" : "Ctrl+K"}
        </kbd>
      </div>
    </button>
  );
};
