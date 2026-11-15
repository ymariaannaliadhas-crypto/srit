import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { SmartSearchModal } from "./SmartSearchModal";

export interface SmartSearchOverlayProps {
  position?: "bottom-left" | "top-right" | "bottom-center";
}

export const SmartSearchOverlay: React.FC<SmartSearchOverlayProps> = ({
  position = "bottom-left",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMac =
    typeof window !== "undefined" &&
    navigator.platform.toUpperCase().indexOf("MAC") >= 0;

  // Global Ctrl+K / Cmd+K keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check for Ctrl+K (Windows/Linux) or Cmd+K (Mac)
      const isK = e.key === "k" || e.key === "K" || e.code === "KeyK";
      if ((e.ctrlKey || e.metaKey) && isK) {
        e.preventDefault();
        e.stopPropagation();
        setIsOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown, true);
    return () => window.removeEventListener("keydown", handleKeyDown, true);
  }, []);

  const positionClasses = {
    "bottom-left": "bottom-6 left-6",
    "top-right": "top-5 right-20",
    "bottom-center": "bottom-6 left-1/2 -translate-x-1/2",
  }[position];

  return (
    <>
      {/* Floating Smart Search Trigger */}
      <div className={`fixed z-50 ${positionClasses}`}>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2.5 rounded-xl border border-slate-200/80 bg-white px-3.5 py-2 text-xs font-semibold text-[#172b4d] shadow-xs transition-colors duration-150 ease-out hover:border-[#079fdf] hover:bg-[#fafbfc] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#079fdf]"
          aria-label="Open Smart Search"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#eaf7fc] text-[#079fdf] transition-colors duration-150 ease-out group-hover:bg-[#079fdf] group-hover:text-white">
            <Search className="h-3.5 w-3.5" />
          </div>

          <span className="font-display text-[13px] text-[#172b4d] transition-colors duration-150 group-hover:text-[#079fdf]">
            Smart Search
          </span>

          <kbd className="rounded-md border border-slate-200/80 bg-slate-50 px-1.5 py-0.5 text-[10px] font-bold tabular-nums text-slate-500 transition-colors duration-150 group-hover:bg-[#eaf7fc] group-hover:text-[#079fdf]">
            {isMac ? "⌘K" : "Ctrl+K"}
          </kbd>
        </button>
      </div>

      {/* Global Search Palette Modal */}
      <SmartSearchModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
