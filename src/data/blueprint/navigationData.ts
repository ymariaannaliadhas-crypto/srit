export interface NavMenuItem {
  label: string;
  href: string;
  badge?: string;
}

export interface NavMenu {
  title: string;
  items: NavMenuItem[];
}

export const TOP_NAV_LINKS: NavMenuItem[] = [
  { label: "Our Next Technology Direction (Sovereign AI)", href: "/#sovereign-ai", badge: "New" },
  { label: "Investor", href: "/investor" },
  { label: "Knowledge Center", href: "/#the-thinking-edge" },
  { label: "Careers", href: "/#careers" },
];

export const FOOTER_SITEMAP = {
  menuLinks: [
    { label: "Our Next Technology Direction (Sovereign AI)", href: "/#sovereign-ai" },
    { label: "Industries", href: "/#industries" },
    { label: "Products & Solutions", href: "/#solutions" },
    { label: "Projects", href: "/#projects" },
    { label: "About SRIT", href: "/company" },
    { label: "Investor Relations", href: "/investor" },
    { label: "Careers", href: "/#careers" },
    { label: "Media (Events Photos & Video)", href: "/media" },
    { label: "Newsroom / Blogs / Knowledge Centre", href: "/#newsroom" },
  ],
  corporateOffice: {
    name: "SRIT India Limited",
    registeredOffice: "SRIT House, #113/1B, ITPL Main Road, Brookefield, Bengaluru - 560 037, Karnataka, India",
    email: "info@sritindia.com",
    phone: "+91 80 41951999",
    listingStatus: "Officially listed on NSE & BSE (Symbol: SRIT / Scrip Code: 544256)",
  },
  complianceLinks: [
    { label: "Corporate Governance", href: "/investor" },
    { label: "Codes & Policies", href: "/investor" },
    { label: "DPDP Act & Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};
