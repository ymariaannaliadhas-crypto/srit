import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import {
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";
import { SmartSearchBar, SmartSearchModal } from "../../features/smart-search";

const menus = [
  {
    title: "Solutions",
    items: [
      { label: "Healthcare", href: "/#connected-care" },
      { label: "e-Governance", href: "/#urban-mobility" },
      { label: "Telecom & Broadband", href: "/#digital-highways" },
      { label: "Cybersecurity", href: "/#zero-trust-csoc" },
    ],
  },
  {
    title: "Industries",
    items: [
      { label: "Healthcare IT", href: "/industries/healthcare" },
      { label: "e-Governance & Smart Cities", href: "/industries/egovernance" },
      { label: "Telecom & Broadband", href: "/industries/telecom" },
      { label: "Cyber Security & Sovereign Cloud", href: "/industries/cybersecurity" },
    ],
  },
  {
    title: "Sovereign AI",
    items: [
      { label: "AI-Native Engineering", href: "/#ai-native-engineering" },
      { label: "Edge Architecture", href: "/#the-thinking-edge" },
      { label: "Sovereign Cloud & ShaktiDB", href: "/#future-projects" },
    ],
  },
  {
    title: "Knowledge Center",
    items: [
      { label: "Executive Viewpoints", href: "/#the-thinking-edge" },
      { label: "Newsroom & Press", href: "/#newsroom" },
      { label: "Citizen Impact Stories", href: "/#citizen-touchpoints" },
    ],
  },
  {
    title: "Investors",
    items: [
      { label: "Listing & Overview", href: "/investor" },
      { label: "Financials & Filings", href: "/investors-information" },
      { label: "Corporate Governance", href: "/corporate-governance" },
      { label: "Annual Reports & Returns", href: "/annual-report" },
      { label: "IPO Documents", href: "/ipo-documents" },
    ],
  },
  {
    title: "About Us",
    items: [
      { label: "Leadership & Management", href: "/management" },
      { label: "Company Overview", href: "/company" },
      { label: "Careers", href: "/#careers" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
];

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  // Monitor scroll to only show header search after passing the hero search
  useEffect(() => {
    const handleScroll = () => {
      // Always show search if not on the homepage
      if (location.pathname !== "/") {
        setShowSearch(true);
        return;
      }

      // On homepage, detect if the hero search bar has been scrolled past
      const heroSearchBar = document.getElementById("hero-search-bar");
      if (heroSearchBar) {
        const rect = heroSearchBar.getBoundingClientRect();
        // Show header search when the hero search bar is scrolled above viewport (bottom < 75px)
        setShowSearch(rect.bottom < 75);
      } else {
        setShowSearch(window.scrollY > 380);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === "k" || e.key === "K")) {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200/80">
      {/* Top information bar */}
      <div className="bg-[#102b50] text-white">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-2 text-xs sm:px-6 lg:px-10">
          <p className="font-medium text-slate-200">Making IT Work Better</p>
          <a
            href="mailto:info@sritindia.com"
            className="rounded-sm transition-colors duration-150 ease-out hover:text-cyan-300 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079fdf]"
          >
            info@sritindia.com
          </a>
        </div>
      </div>

      {/* Main header */}
      <div className="mx-auto flex min-h-[80px] max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-10">
        {/* Left-anchored Group: Logo + Navigation (guarantees zero lateral shift) */}
        <div className="flex items-center gap-6 xl:gap-10 h-full">
          {/* Logo */}
          <a href="/" className="flex shrink-0 items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079fdf]">
            <img
              src="/images/srit logo.png"
              alt="SRIT India Limited"
              className="h-auto w-[155px] xl:w-[170px] object-contain"
            />
          </a>

          {/* Desktop navigation */}
          <nav className="hidden h-full items-center gap-5 xl:gap-7 lg:flex">
            <a
              href="/"
              className="whitespace-nowrap py-7 text-[14px] xl:text-[15px] font-semibold text-[#26364b] transition-colors duration-150 ease-out hover:text-[#168bc4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079fdf] rounded-sm"
            >
              Home
            </a>

            {menus.map((menu) => (
              <div
                key={menu.title}
                className="group relative flex h-full items-center"
                onMouseEnter={() => setActiveMenu(menu.title)}
                onMouseLeave={() => setActiveMenu("")}
              >
                <button
                  type="button"
                  onClick={() =>
                    setActiveMenu(
                      activeMenu === menu.title ? "" : menu.title
                    )
                  }
                  className={`flex items-center gap-1.5 whitespace-nowrap py-7 text-[14px] xl:text-[15px] font-semibold transition-colors duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079fdf] rounded-sm ${
                    activeMenu === menu.title
                      ? "text-[#168bc4]"
                      : "text-[#26364b] hover:text-[#168bc4]"
                  }`}
                >
                  {menu.title}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-150 ease-out ${
                      activeMenu === menu.title ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown menu */}
                <div
                  className={`absolute left-0 top-[72px] z-50 w-[265px] rounded-xl border border-slate-200/90 bg-white p-1.5 shadow-lg transition-all duration-150 ease-out ${
                    activeMenu === menu.title
                      ? "visible translate-y-0 opacity-100"
                      : "invisible translate-y-1 opacity-0"
                  }`}
                >
                  <div className="flex flex-col space-y-0.5">
                    {menu.items.map((item) => {
                      const isInternal = item.href.startsWith("/") && !item.href.startsWith("/#");
                      return isInternal ? (
                        <Link
                          key={item.label}
                          to={item.href}
                          onClick={() => setActiveMenu("")}
                          className="group/item flex items-center justify-between rounded-lg px-3 py-2 text-[14px] font-medium text-[#26364b] transition-colors duration-150 ease-out hover:bg-[#f1f8fc] hover:text-[#168bc4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079fdf]"
                        >
                          <span>{item.label}</span>
                          <ArrowUpRight
                            size={14}
                            className="opacity-0 transition-all duration-150 ease-out text-[#168bc4] group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 group-hover/item:opacity-100"
                          />
                        </Link>
                      ) : (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={() => setActiveMenu("")}
                          className="group/item flex items-center justify-between rounded-lg px-3 py-2 text-[14px] font-medium text-[#26364b] transition-colors duration-150 ease-out hover:bg-[#f1f8fc] hover:text-[#168bc4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079fdf]"
                        >
                          <span>{item.label}</span>
                          <ArrowUpRight
                            size={14}
                            className="opacity-0 transition-all duration-150 ease-out text-[#168bc4] group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 group-hover/item:opacity-100"
                          />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </nav>
        </div>

        {/* Desktop actions (Search + Contact) anchored to the far right */}
        <div className="hidden items-center gap-3.5 lg:flex ml-auto justify-end">
          <div
            className={`transition-opacity duration-150 ease-out ${
              showSearch
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <SmartSearchBar compact onClick={() => setSearchOpen(true)} />
          </div>
          <a
            href="/contact-us"
            className="inline-flex shrink-0 items-center justify-center rounded-lg bg-[#168bc4] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 ease-out hover:bg-[#102b50] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079fdf] focus-visible:ring-offset-2"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile controls (Search + Menu toggle) */}
        <div className="flex items-center gap-2 lg:hidden">
          <div
            className={`transition-opacity duration-150 ease-out ${
              showSearch
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <SmartSearchBar compact onClick={() => setSearchOpen(true)} />
          </div>
          <button
            type="button"
            onClick={() => {
              setMobileOpen(!mobileOpen);
              setActiveMenu("");
            }}
            className="rounded-lg p-2 text-[#102b50] transition-colors duration-150 ease-out hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079fdf]"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileOpen && (
        <nav className="border-t border-slate-200/80 bg-white px-6 py-5 lg:hidden">
          <a
            href="/"
            onClick={() => setMobileOpen(false)}
            className="block border-b border-slate-100 py-3.5 font-semibold text-[#26364b] transition-colors duration-150 ease-out hover:text-[#168bc4]"
          >
            Home
          </a>

          {menus.map((menu) => (
            <div key={menu.title} className="border-b border-slate-100">
              <button
                type="button"
                onClick={() =>
                  setActiveMenu(
                    activeMenu === menu.title ? "" : menu.title
                  )
                }
                className="flex w-full items-center justify-between py-3.5 font-semibold text-[#26364b] transition-colors duration-150 ease-out hover:text-[#168bc4]"
              >
                {menu.title}
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-150 ease-out ${
                    activeMenu === menu.title ? "rotate-180" : ""
                  }`}
                />
              </button>

              {activeMenu === menu.title && (
                <div className="pb-3 pl-3 space-y-1">
                  {menu.items.map((item) => {
                    const isInternal = item.href.startsWith("/") && !item.href.startsWith("/#");
                    return isInternal ? (
                      <Link
                        key={item.label}
                        to={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-2 text-sm font-medium text-slate-600 transition-colors duration-150 ease-out hover:text-[#168bc4]"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-2 text-sm font-medium text-slate-600 transition-colors duration-150 ease-out hover:text-[#168bc4]"
                      >
                        {item.label}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          ))}

          <a
            href="/contact-us"
            onClick={() => setMobileOpen(false)}
            className="mt-5 block rounded-lg bg-[#168bc4] px-5 py-3 text-center font-semibold text-white transition-colors duration-150 ease-out hover:bg-[#102b50]"
          >
            Contact Us
          </a>
        </nav>
      )}

      {/* Smart Search Modal */}
      <SmartSearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        navigate={navigate}
      />
    </header>
  );
}
