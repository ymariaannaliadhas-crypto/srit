import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
      { label: "Healthcare", href: "/healthcare" },
      { label: "eGovernance", href: "/egovernance" },
      { label: "Telecom", href: "/telecom" },
      { label: "Insurance", href: "/insurance" },
    ],
  },
  {
    title: "Projects",
    items: [
      { label: "Projects & Wins", href: "/project-wins" },
    ],
  },
  {
    title: "Investors",
    items: [
      { label: "Overview", href: "/investor" },
      { label: "Management Commentary", href: "/investor" },
      { label: "Financials", href: "/investors-information" },
      { label: "News & Events", href: "/investors-information" },
      { label: "ESG", href: "/investor" },
      { label: "Resources", href: "/investor" },
      { label: "Annual Reports", href: "/annual-report" },
    ],
  },
  {
    title: "About Us",
    items: [
      { label: "Company", href: "/company" },
      { label: "Management", href: "/management" },
      { label: "Invest / Partner", href: "/invest" },
      { label: "Recognition", href: "/recognition" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
  {
    title: "Media",
    items: [
      { label: "Media", href: "/media" },
    ],
  },
];


export function Header() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

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
    <header className="sticky top-0 z-50 w-full bg-white">
      {/* Top information bar */}
      <div className="bg-[#102b50] text-white">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-2 text-xs md:px-12">
          <p>Making IT Work Better</p>
          <a
            href="mailto:info@sritindia.com"
            className="transition-colors hover:text-cyan-300"
          >
            info@sritindia.com
          </a>
        </div>
      </div>

      {/* Main header */}
      <div className="mx-auto flex min-h-[88px] max-w-[1440px] items-center justify-between px-6 md:px-12">
        {/* Logo */}
<a href="/" className="flex shrink-0 items-center">
  <img
    src="/images/srit logo.png"
    alt="SRIT India Limited"
    className="h-auto w-[180px] object-contain"
  />
</a>

        {/* Desktop navigation */}
        <nav className="hidden h-full items-center gap-8 lg:flex">
          <a
            href="/"
            className="py-8 text-[15px] font-semibold text-[#26364b] transition-colors hover:text-[#168bc4]"
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
                className={`flex items-center gap-2 py-8 text-[15px] font-semibold transition-colors ${
                  activeMenu === menu.title
                    ? "text-[#168bc4]"
                    : "text-[#26364b] hover:text-[#168bc4]"
                }`}
              >
                {menu.title}
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-300 ${
                    activeMenu === menu.title ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Animated dropdown */}
              <div
                className={`absolute left-0 top-[78px] z-50 w-[270px] rounded-xl border border-gray-100 bg-white p-3 shadow-[0_20px_60px_rgba(16,43,80,0.13)] transition-all duration-200 ${
                  activeMenu === menu.title
                    ? "visible translate-y-0 opacity-100"
                    : "invisible translate-y-3 opacity-0"
                }`}
              >
                <div className="px-3 pb-3 pt-2 text-xs font-bold uppercase tracking-widest text-gray-400">
                  Explore {menu.title}
                </div>

                {menu.items.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group/item flex items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-[#26364b] transition-all hover:bg-[#f1f8fc] hover:text-[#168bc4]"
                  >
                    {item.label}
                    <ArrowUpRight
                      size={15}
                      className="opacity-0 transition-all group-hover/item:translate-x-1 group-hover/item:opacity-100"
                    />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* Desktop actions (Search + Contact) */}
        <div className="hidden items-center gap-4 lg:flex">
          <SmartSearchBar compact onClick={() => setSearchOpen(true)} />
          <a
            href="/contact-us"
            className="inline-flex items-center gap-2 rounded-full bg-[#168bc4] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#102b50]"
          >
            Contact Us
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Mobile controls (Search + Menu toggle) */}
        <div className="flex items-center gap-2 lg:hidden">
          <SmartSearchBar compact onClick={() => setSearchOpen(true)} />
          <button
            type="button"
            onClick={() => {
              setMobileOpen(!mobileOpen);
              setActiveMenu("");
            }}
            className="rounded-lg p-2 text-[#102b50] transition hover:bg-gray-100"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={27} /> : <Menu size={27} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileOpen && (
        <nav className="border-t border-gray-100 bg-white px-6 py-5 shadow-lg lg:hidden">
          <a
            href="/"
            onClick={() => setMobileOpen(false)}
            className="block border-b border-gray-100 py-4 font-semibold text-[#26364b]"
          >
            Home
          </a>

          {menus.map((menu) => (
            <div key={menu.title} className="border-b border-gray-100">
              <button
                type="button"
                onClick={() =>
                  setActiveMenu(
                    activeMenu === menu.title ? "" : menu.title
                  )
                }
                className="flex w-full items-center justify-between py-4 font-semibold text-[#26364b]"
              >
                {menu.title}
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${
                    activeMenu === menu.title ? "rotate-180" : ""
                  }`}
                />
              </button>

              {activeMenu === menu.title && (
                <div className="pb-3 pl-4">
                  {menu.items.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 text-sm text-gray-600 transition-colors hover:text-[#168bc4]"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          <a
            href="/contact-us"
            onClick={() => setMobileOpen(false)}
            className="mt-5 block rounded-full bg-[#168bc4] px-5 py-3 text-center font-semibold text-white"
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
