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
        className={`group flex min-h-[40px] items-center gap-2.5 rounded-lg border border-slate-200/80 bg-slate-50/80 px-3.5 py-2 text-sm font-medium text-slate-500 transition-colors duration-150 ease-out hover:border-[#079fdf] hover:bg-white hover:text-[#172b4d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#079fdf] ${className}`}
      >
        <Search className="h-4 w-4 text-slate-400 transition-colors duration-150 group-hover:text-[#079fdf]" />
        <span className="text-sm font-normal text-slate-500 transition-colors duration-150 group-hover:text-[#172b4d]">Search...</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative flex w-full max-w-md items-center justify-between rounded-xl border border-slate-200/80 bg-white px-4 py-2.5 text-left text-sm text-slate-500 transition-colors duration-150 ease-out hover:border-[#079fdf] hover:bg-[#fafbfc] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#079fdf] ${className}`}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#eaf7fc] text-[#079fdf] transition-colors duration-150 ease-out group-hover:bg-[#079fdf] group-hover:text-white">
          <Search className="h-4 w-4" />
        </div>
        <span className="font-sans text-[14px] text-slate-500 transition-colors duration-150 group-hover:text-[#172b4d]">
          {placeholder}
        </span>
      </div>

      <div className="flex items-center gap-1.5">
        <kbd className="hidden rounded-md border border-slate-200/80 bg-slate-50 px-2 py-0.5 text-[11px] font-semibold tabular-nums text-slate-500 sm:inline-block">
          {isMac ? "⌘K" : "Ctrl+K"}
        </kbd>
      </div>
    </button>
  );
};
