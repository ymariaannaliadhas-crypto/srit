import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight } from "lucide-react";
import {
  boardOfDirectors,
  keyManagerial,
  strategicPartners,
  leadershipTeam,
} from "../data/managementData";

const directorsOnly = boardOfDirectors.filter(
  (p) => p.role !== "Independent Director"
);
const independentDirectors = boardOfDirectors.filter(
  (p) => p.role === "Independent Director"
);

const TABS = [
  { id: "directors", label: "Directors", people: directorsOnly },
  { id: "independent", label: "Independent Directors", people: independentDirectors },
  { id: "kmp", label: "Key Managerial Personnel", people: keyManagerial },
  { id: "partners", label: "Strategic Partners", people: strategicPartners },
  { id: "leadership", label: "Leadership and Senior Managers", people: leadershipTeam },
];

function PersonCard({ person }) {
  const imageMap = {
    "rangan-thiyagarajan": "Rangan-Thiyagarajan.webp",
    "madhu-nambiar": "Madhu-Nambiar.webp",
    "prasaktha-vn": "prasaktha.webp",
    "pc-martin": "pc-martin.webp",
    "chandan-dash": "Chandan-Dash.webp",
    "amit-oberoi": "Amit-Oberoi.webp",
    "r-ravichandran": "ravichandran.webp",
    "suresh-b-menon": "Suresh-B-Menon.webp",
    "karthick-varadarajan": "Karthick-Varadarajan.webp",
    "thiruvengadam-ashok": "Thiruvengadam-Ashok.webp",
    "manesh-george": "Manesh-George.webp",
    "nidhi-vaswani": "Nidhi-Vaswani.webp",
    "anil-ramachandran": "Anil-Ramachandran.webp",
    "chandan-dash-partner": "Chandan-Dash.webp",
    "amit-oberoi-partner": "Amit-Oberoi.webp",
    "k-narayana-swamy": "narayana-Smy.webp",
    "sunitha-palayekari": "Sunitha.jpeg",
    "rajesh-ponnan": "Rajesh-Ponnan.webp",
    "pradeep-v": "Pradeep.webp",
    "surendra-kumar": "Surendra-Kumar,.webp",
    "john-joshy": "John-Joshy.webp",
    "jithesh-p-menon": "Jithesh-P-Menon.webp",
    "vishal-madane": "Vishal-Madane.webp",
    "sunil-jones": "Sunil-Jones.webp",
    "k-vijay-iyer": "Vijay-Iyer.webp",
    "arunava-d-roy": "Arunava-D-Roy.webp",
    "srikanth-s": "Srikanth.webp",
    "vinu-r": "Vinu.webp",
    "sudipta-b-mullick": "Sudipta-B-Mullick.webp",
    "ajith-p": "Ajith.webp",
    "prabath-gk": "Prabath.webp",
    "babu-s": "Babu.webp",
    "harish-kumar-m": "Harish-Kumar.webp",
    "asgarulla-khan-ib": "Asgarulla-Khan.webp",
    "pallab-sharma": "Pallab-Sharma.webp",
    "santosh-kumar": "Santosh-Kumar.webp",
    "binoy-kp": "Binoy.webp",
    "ganapathy-bb": "Ganapathy.webp",
    "sebash-carmel": "Sebash-Carmel.webp",
  };
    const fileName = imageMap[person.slug];
  const imageSrc = fileName ? `/images/${fileName}` : null;

  const initials = person.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-white p-2 transition-colors duration-150 ease-out hover:border-[#079fdf]/60">
      
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-[#102b50]">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-bold text-white/90">{initials}</span>
        </div>
        
        {imageSrc && (
          <img
            src={imageSrc}
            alt={person.name}
            loading="lazy"
            className="relative z-10 h-full w-full object-cover object-[center_20%]"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        )}
      </div>

       <div className="flex flex-1 flex-col p-4 pt-5 text-left">
        <h3 className="font-display text-base font-bold tracking-[-0.015em] text-[#102b50]">{person.name}</h3>
        <p className="mt-1.5 text-xs font-medium leading-[1.55] text-[#168bc4] mb-4">
          {person.role}
        </p>
        
        <div className="mt-auto pt-3 border-t border-slate-100">
          <Link
            to={`/management/${person.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#102b50] hover:text-[#168bc4] transition-colors duration-150 ease-out"
          >
            Read Bio
            <svg className="w-3.5 h-3.5 transition-transform duration-150 ease-out group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}

{/*const hierarchy = [
  {
    person: boardOfDirectors[0],
    children: [
      {
        person: boardOfDirectors[1],
        children: [
          {
            person: boardOfDirectors[2],
            children: [],
          },
          {
            person: boardOfDirectors[3],
            children: [],
          },
        ],
      },
    ],
  },
];*/}

const hierarchyImageMap = {
  "rangan-thiyagarajan": "Rangan-Thiyagarajan.webp",
  "madhu-nambiar": "Madhu-Nambiar.webp",
  "prasaktha-vn": "prasaktha.webp",
  "pc-martin": "pc-martin.webp",
  "chandan-dash": "Chandan-Dash.webp",
  "amit-oberoi": "Amit-Oberoi.webp",
  "r-ravichandran": "ravichandran.webp",
  "suresh-b-menon": "Suresh-B-Menon.webp",
  "karthick-varadarajan": "Karthick-Varadarajan.webp",
  "thiruvengadam-ashok": "Thiruvengadam-Ashok.webp",
  "manesh-george": "Manesh-George.webp",
  "nidhi-vaswani": "Nidhi-Vaswani.webp",
  "anil-ramachandran": "Anil-Ramachandran.webp",
  "chandan-dash-partner": "Chandan-Dash.webp",
  "amit-oberoi-partner": "Amit-Oberoi.webp",
  "k-narayana-swamy": "narayana-Smy.webp",
  "sunitha-palayekari": "Sunitha.jpeg",
  "rajesh-ponnan": "Rajesh-Ponnan.webp",
  "pradeep-v": "Pradeep.webp",
  "surendra-kumar": "Surendra-Kumar,.webp",
  "john-joshy": "John-Joshy.webp",
  "jithesh-p-menon": "Jithesh-P-Menon.webp",
  "vishal-madane": "Vishal-Madane.webp",
  "sunil-jones": "Sunil-Jones.webp",
  "k-vijay-iyer": "Vijay-Iyer.webp",
  "arunava-d-roy": "Arunava-D-Roy.webp",
  "srikanth-s": "Srikanth.webp",
  "vinu-r": "Vinu.webp",
  "sudipta-b-mullick": "Sudipta-B-Mullick.webp",
  "ajith-p": "Ajith.webp",
  "prabath-gk": "Prabath.webp",
  "babu-s": "Babu.webp",
  "harish-kumar-m": "Harish-Kumar.webp",
  "asgarulla-khan-ib": "Asgarulla-Khan.webp",
  "pallab-sharma": "Pallab-Sharma.webp",
  "santosh-kumar": "Santosh-Kumar.webp",
  "binoy-kp": "Binoy.webp",
  "ganapathy-bb": "Ganapathy.webp",
  "sebash-carmel": "Sebash-Carmel.webp",
};

function HierarchyTreeNode({ person, isSelected, onSelect }) {
  const src = hierarchyImageMap[person.slug];
  const initials = person.name
    .split(" ")
    .map((x) => x[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <button
      type="button"
      onClick={() => onSelect(person)}
      className={`group flex w-full items-center gap-3.5 rounded-lg border border-l-2 p-3.5 sm:p-4 text-left transition-colors duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079fdf] cursor-pointer ${
        isSelected
          ? "border-white/25 border-l-[#38bdf8] bg-[#173663]"
          : "border-white/12 border-l-cyan-400/40 bg-[#122b50] hover:border-white/25 hover:border-l-[#38bdf8] hover:bg-[#16335e]"
      }`}
    >
      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-[#1a2f5c] text-xs font-bold tracking-wide text-white/90">
        <span>{initials}</span>
        {src && (
          <img
            src={`/images/${src}`}
            alt={person.name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-[center_18%]"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        )}
      </div>

      <div className="min-w-0 flex-1">
        <p
          className={`truncate font-display text-[13.5px] sm:text-sm font-semibold leading-snug transition-colors duration-150 ease-out ${
            isSelected
              ? "text-cyan-100"
              : "text-white group-hover:text-cyan-200"
          }`}
        >
          {person.name}
        </p>
        <p className="mt-0.5 line-clamp-2 text-[11.5px] leading-relaxed text-slate-300/80">
          {person.role}
        </p>
      </div>

      <span
        aria-hidden="true"
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border transition-colors duration-150 ease-out ${
          isSelected
            ? "border-[#38bdf8]/40 bg-[#38bdf8]/15 text-[#38bdf8]"
            : "border-white/10 bg-white/[0.03] text-slate-300/60 group-hover:border-[#38bdf8]/30 group-hover:bg-[#38bdf8]/10 group-hover:text-cyan-200"
        }`}
      >
        <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </button>
  );
}

function TreeBranchCard({ title, count, isExpanded, onToggle, children }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/15 bg-[#0d2244]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isExpanded}
        className="flex w-full items-center justify-between gap-3 px-5 py-4 sm:px-6 text-left transition-colors duration-150 ease-out hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#079fdf] cursor-pointer"
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <h3 className="truncate font-display text-xs font-bold uppercase tracking-wider text-cyan-200">
            {title}
          </h3>
          <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] font-semibold tabular-nums text-white/75 shrink-0">
            {count}
          </span>
        </div>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-white/60 transition-transform duration-150 ease-out ${
            isExpanded ? "rotate-0" : "-rotate-90"
          }`}
        />
      </button>

      {isExpanded && (
        <div className="border-t border-white/10 p-5 sm:p-6">{children}</div>
      )}
    </div>
  );
}

function AnimatedManagementHierarchy() {
  const [expandedBranches, setExpandedBranches] = useState({
    directors: true,
    independent: true,
    partners: true,
    kmp: true,
    leadership: true,
  });
  const [selectedPerson, setSelectedPerson] = useState(
    directorsOnly[0] || boardOfDirectors[0]
  );

  const toggleBranch = (key) => {
    setExpandedBranches((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const allExpanded = Object.values(expandedBranches).every(Boolean);

  const handleToggleAll = () => {
    const nextState = !allExpanded;
    setExpandedBranches({
      directors: nextState,
      independent: nextState,
      partners: nextState,
      kmp: nextState,
      leadership: nextState,
    });
  };

  const selectedSrc = selectedPerson
    ? hierarchyImageMap[selectedPerson.slug]
    : null;
  const selectedInitials = selectedPerson
    ? selectedPerson.name
        .split(" ")
        .map((x) => x[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "";
  const bioPreview = selectedPerson?.bio
    ? selectedPerson.bio.replace(/\s+/g, " ").trim()
    : "Leadership profile details.";

  return (
    <section className="border-t border-white/10 bg-[#102b50] py-16 sm:py-20 text-white">
      <div className="mx-auto max-w-[1360px] px-6 md:px-12">
        {/* Header & Expand/Collapse Control */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
              Governance Architecture
            </span>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-[-0.025em] text-white">
              Institutional Governance &amp; Leadership Structure
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-[1.6] text-slate-300/80">
              Explore SRIT’s reporting and governance hierarchy. Click any member in the tree to preview their background, or toggle branches to inspect specific tiers.
            </p>
          </div>

          <button
            type="button"
            onClick={handleToggleAll}
            className="self-start md:self-auto shrink-0 rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition-colors duration-150 ease-out hover:border-[#079fdf] hover:bg-[#079fdf] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079fdf] cursor-pointer"
          >
            {allExpanded ? "Collapse All Branches" : "Expand All Branches"}
          </button>
        </div>

        {/* Interactive Member Inspector Bar */}
        {selectedPerson && (
          <div className="mt-8 flex flex-col gap-5 rounded-xl border border-[#079fdf]/40 bg-[#0b1f3d] p-5 sm:p-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4 min-w-0">
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-white/15 bg-[#1a2f5c] text-base font-bold text-white">
                <span>{selectedInitials}</span>
                {selectedSrc && (
                  <img
                    src={`/images/${selectedSrc}`}
                    alt={selectedPerson.name}
                    className="absolute inset-0 h-full w-full object-cover object-top"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                )}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display text-lg font-bold tracking-[-0.02em] text-white">
                    {selectedPerson.name}
                  </h3>
                  <span className="text-xs font-semibold text-cyan-300">
                    {selectedPerson.role}
                  </span>
                </div>
                <p className="mt-1.5 line-clamp-2 max-w-3xl text-xs sm:text-sm leading-[1.6] text-slate-300/80">
                  {bioPreview}
                </p>
              </div>
            </div>

            <Link
              to={`/management/${selectedPerson.slug}`}
              className="inline-flex shrink-0 items-center gap-2 self-start md:self-center rounded-lg bg-[#079fdf] px-4 py-2.5 text-xs sm:text-sm font-semibold text-white transition-colors duration-150 ease-out hover:bg-[#168bc4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              <span>Read Full Profile</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}

        {/* Interactive Organizational Tree Canvas */}
        <div className="mt-10 flex flex-col items-center">
          {/* LEVEL 1: ROOT GOVERNANCE NODE (BOARD OF DIRECTORS) */}
          <div className="w-full max-w-5xl">
            <TreeBranchCard
              title="Board of Directors"
              count={directorsOnly.length}
              isExpanded={expandedBranches.directors}
              onToggle={() => toggleBranch("directors")}
            >
              <div className="grid grid-cols-1 gap-3.5 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
                {directorsOnly.map((person) => (
                  <HierarchyTreeNode
                    key={person.slug}
                    person={person}
                    isSelected={selectedPerson?.slug === person.slug}
                    onSelect={setSelectedPerson}
                  />
                ))}
              </div>
            </TreeBranchCard>
          </div>

          {/* Vertical Trunk Connector: Level 1 -> Level 2 */}
          <div className="mx-auto h-10 w-px bg-cyan-400/45 sm:h-12" />

          {/* LEVEL 2: LATERAL GOVERNANCE & ADVISORY WINGS + CENTRAL HUB */}
          <div className="grid w-full grid-cols-1 xl:grid-cols-[1fr_auto_1fr]">
            {/* Left Wing: Independent Directors */}
            <div className="flex flex-col xl:flex-row xl:items-center xl:self-center xl:py-3">
              <div className="w-full xl:flex-1">
                <TreeBranchCard
                  title="Independent Directors"
                  count={independentDirectors.length}
                  isExpanded={expandedBranches.independent}
                  onToggle={() => toggleBranch("independent")}
                >
                  <div className="grid grid-cols-1 gap-3.5 sm:gap-4 md:grid-cols-2 xl:grid-cols-1">
                    {independentDirectors.map((person) => (
                      <HierarchyTreeNode
                        key={person.slug}
                        person={person}
                        isSelected={selectedPerson?.slug === person.slug}
                        onSelect={setSelectedPerson}
                      />
                    ))}
                  </div>
                </TreeBranchCard>
              </div>
              <div className="mx-auto h-8 w-px bg-cyan-400/45 xl:hidden" />
              <div className="hidden h-px w-10 shrink-0 bg-cyan-400/45 xl:block 2xl:w-12" />
            </div>

            {/* Center Statutory & Executive Hub with Self-Stretching Trunk */}
            <div className="flex flex-col items-center self-stretch">
              <div className="hidden min-h-[24px] w-px flex-1 bg-cyan-400/45 xl:block" />
              <div className="relative z-10 mx-auto flex w-48 shrink-0 flex-col items-center justify-center rounded-xl border border-[#38bdf8]/40 bg-[#168bc4] px-5 py-5 text-center">
                <strong className="font-display text-2xl font-bold tracking-[-0.02em] text-white">
                  SRIT
                </strong>
                <span className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-cyan-50">
                  Executive &amp; Statutory Hub
                </span>
              </div>
              <div className="hidden min-h-[24px] w-px flex-1 bg-cyan-400/45 xl:block" />
            </div>

            {/* Right Wing: Strategic Partners */}
            <div className="flex flex-col xl:flex-row xl:items-center xl:self-center xl:py-3">
              <div className="mx-auto h-8 w-px bg-cyan-400/45 xl:hidden" />
              <div className="hidden h-px w-10 shrink-0 bg-cyan-400/45 xl:block 2xl:w-12" />
              <div className="w-full xl:flex-1">
                <TreeBranchCard
                  title="Strategic Partners"
                  count={strategicPartners.length}
                  isExpanded={expandedBranches.partners}
                  onToggle={() => toggleBranch("partners")}
                >
                  <div className="grid grid-cols-1 gap-3.5 sm:gap-4 md:grid-cols-2 xl:grid-cols-1">
                    {strategicPartners.map((person) => (
                      <HierarchyTreeNode
                        key={person.slug}
                        person={person}
                        isSelected={selectedPerson?.slug === person.slug}
                        onSelect={setSelectedPerson}
                      />
                    ))}
                  </div>
                </TreeBranchCard>
              </div>
            </div>
          </div>

          {/* Vertical Trunk + Horizontal T-Split Connector: Level 2 -> Level 3 */}
          <div className="mx-auto h-10 w-px bg-cyan-400/45 sm:h-12" />
          <div className="relative hidden h-10 w-full lg:block">
            <div className="absolute left-[16.667%] right-[33.333%] top-0 border-t border-cyan-400/45" />
            <div className="absolute bottom-0 left-[16.667%] top-0 w-px bg-cyan-400/45" />
            <div className="absolute bottom-0 right-[33.333%] top-0 w-px bg-cyan-400/45" />
          </div>

          {/* LEVEL 3: OPERATIONAL & DELIVERY SUB-TREES */}
          <div className="grid w-full grid-cols-1 gap-y-0 lg:grid-cols-12 lg:items-start lg:gap-8 xl:gap-10">
            {/* Left Sub-Tree: Key Managerial Personnel */}
            <div className="lg:col-span-4">
              <TreeBranchCard
                title="Key Managerial Personnel"
                count={keyManagerial.length}
                isExpanded={expandedBranches.kmp}
                onToggle={() => toggleBranch("kmp")}
              >
                <div className="grid grid-cols-1 gap-3.5 sm:gap-4 md:grid-cols-2 lg:grid-cols-1">
                  {keyManagerial.map((person) => (
                    <HierarchyTreeNode
                      key={person.slug}
                      person={person}
                      isSelected={selectedPerson?.slug === person.slug}
                      onSelect={setSelectedPerson}
                    />
                  ))}
                </div>
              </TreeBranchCard>
            </div>

            <div className="mx-auto h-8 w-px bg-cyan-400/45 lg:hidden" />

            {/* Right Sub-Tree: Leadership & Senior Management */}
            <div className="lg:col-span-8">
              <TreeBranchCard
                title="Leadership & Senior Management"
                count={leadershipTeam.length}
                isExpanded={expandedBranches.leadership}
                onToggle={() => toggleBranch("leadership")}
              >
                <div className="grid grid-cols-1 gap-3.5 sm:gap-4 md:grid-cols-2">
                  {leadershipTeam.map((person) => (
                    <HierarchyTreeNode
                      key={person.slug}
                      person={person}
                      isSelected={selectedPerson?.slug === person.slug}
                      onSelect={setSelectedPerson}
                    />
                  ))}
                </div>
              </TreeBranchCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}





export default function Management() {
  const [activeTab, setActiveTab] = useState("directors");

  const active = TABS.find((t) => t.id === activeTab) || TABS[0];

  return (
    <main className="min-h-screen bg-white">

      {/* HERO + TABS */}
      <section
        className="relative border-b border-slate-200/80 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/management.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-white/90" />
        <div className="relative mx-auto max-w-[1300px] px-6 py-10 md:px-12 md:py-14">

          <nav className="mb-4 flex items-center gap-2 text-xs font-medium text-[#172b4d]/60">
            <Link to="/" className="hover:text-[#079fdf] transition-colors duration-150 ease-out">Home</Link>
            <span>/</span>
            <Link to="/company" className="hover:text-[#079fdf] transition-colors duration-150 ease-out">About Us</Link>
            <span>/</span>
            <span className="font-semibold text-[#102b50]">Management</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="font-display text-3xl font-bold tracking-[-0.025em] text-[#102b50] sm:text-4xl md:text-5xl">
              Management
            </h1>
            <p className="mt-3 text-sm sm:text-base leading-[1.6] text-[#172b4d]/75">
              Meet the Directors, Key Managerial Personnel, Strategic Partners,
              and our Leadership & Senior Management team.
            </p>
          </div>

          {/* TABS */}
          <div className="mt-8 flex justify-start">
            <div className="inline-flex max-w-full overflow-x-auto rounded-lg border border-slate-200/80 bg-white p-1">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`whitespace-nowrap rounded-md px-4 py-2 text-xs font-semibold transition-colors duration-150 ease-out sm:px-5 sm:text-sm ${
                    activeTab === tab.id
                      ? "bg-[#102b50] text-white"
                      : "text-[#172b4d]/70 hover:bg-slate-100 hover:text-[#102b50]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* MANAGEMENT CARDS */}
      <section className="bg-[#fafbfc]">
        <div className="mx-auto max-w-[1300px] px-6 py-16 md:px-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {active.people.map((p) => (
              <PersonCard key={p.slug} person={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ORGANIZATION HIERARCHY */}
      <AnimatedManagementHierarchy />

      {/* CONTACT CTA */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundImage: "url('/images/management.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-[#102b50]/92" />
        <div className="relative mx-auto flex max-w-[1300px] flex-col items-start justify-between gap-6 px-6 py-14 md:flex-row md:items-center md:px-12">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-[-0.02em] md:text-3xl">
              Want to work with our leadership?
            </h2>
            <p className="mt-2 text-sm sm:text-base text-white/75">
              Reach out to discuss partnerships, investments or careers.
            </p>
          </div>

          <a
            href="/contact-us"
            className="inline-flex items-center gap-2 rounded-lg bg-[#168bc4] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 ease-out hover:bg-white hover:text-[#102b50]"
          >
            Contact Us →
          </a>
        </div>
      </section>

    </main>
  );
}
