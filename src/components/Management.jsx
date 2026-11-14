import { useState, useRef, createContext, useContext } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "motion/react";
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
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(16,43,80,0.13)]">
      
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-[#102b50] to-[#168bc4]">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl font-bold text-white/90">{initials}</span>
        </div>
        
        {imageSrc && (
          <img
            src={imageSrc}
            alt={person.name}
            loading="lazy"
            className="relative z-10 h-full w-full object-cover object-[center_20%] transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        )}
      </div>

       <div className="flex flex-1 flex-col p-5 text-center">
        <h3 className="text-base font-bold text-[#102b50]">{person.name}</h3>
        <p className="mt-1.5 text-xs font-medium leading-relaxed text-[#168bc4] mb-4">
          {person.role}
        </p>
        
        {/* 👇 ADDED READ BIO LINK */}
        <div className="mt-auto">
          <Link
            to={`/management/${person.slug}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-[#1a1a1a] border-b border-[#1a1a1a] pb-0.5 hover:text-[#168bc4] hover:border-[#168bc4] transition-colors"
          >
            Read Bio
            <svg className="w-3.5 h-3.5 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

const GrowContext = createContext(false);
const LINE = "border-[#168bc4]/70 border-dotted";

function HierarchyPerson({ person, compact = false, delay = 0 }) {
  const go = useContext(GrowContext);
  const src = hierarchyImageMap[person.slug];
  const initials = person.name
    .split(" ")
    .map((x) => x[0])
    .join("")
    .slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, y: 15 }}
      animate={go ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.6, y: 15 }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
      className="shrink-0"
    >
      <Link
        to={`/management/${person.slug}`}
        title={`${person.name} — View bio`}
        className={`group flex overflow-hidden rounded-lg border border-white/40 bg-[#2a2480] transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-[0_0_15px_rgba(45,211,238,.35)] ${
          compact ? "h-12 w-12" : "min-w-0 items-center gap-2 px-2 py-1.5"
        }`}
      >
        {compact ? (
          <img
            src={src ? `/images/${src}` : ""}
            alt={person.name}
            className="h-full w-full object-cover object-top"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.parentElement.textContent = initials;
            }}
          />
        ) : (
          <>
            <img
              src={src ? `/images/${src}` : ""}
              alt={person.name}
              className="h-7 w-7 shrink-0 rounded-md object-cover object-top"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <span className="truncate text-[11px] font-semibold text-white">
              {person.name}
            </span>
          </>
        )}
      </Link>
    </motion.div>
  );
}

function HierarchyLabel({ children, delay = 0 }) {
  const go = useContext(GrowContext);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={go ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      className="shrink-0 rounded-md bg-[#168bc4] px-4 py-2 text-center text-xs font-semibold text-white shadow-[0_0_18px_rgba(22,139,196,.35)]"
    >
      {children}
    </motion.div>
  );
}

/* Group box (rounded dark container) that fades in */
function Group({ delay = 0, className = "", children }) {
  const go = useContext(GrowContext);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={go ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.5, delay }}
      className={`flex flex-wrap justify-center gap-2 rounded-xl border border-indigo-400/20 bg-[#13194a] p-3 ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* Vertical line that grows downward */
function VLine({ h = "h-8", delay = 0, className = "" }) {
  const go = useContext(GrowContext);
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: go ? 1 : 0 }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
      style={{ originY: 0 }}
      className={`mx-auto w-0 shrink-0 border-l ${h} ${LINE} ${className}`}
    />
  );
}

/* Horizontal line that grows from the SRIT side outward.
   origin="right" for the left side, origin="left" for the right side */
function HLine({ origin = "left", delay = 0 }) {
  const go = useContext(GrowContext);
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: go ? 1 : 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      style={{ originX: origin === "left" ? 0 : 1 }}
      className={`hidden h-0 min-w-6 flex-1 border-t xl:block ${LINE}`}
    />
  );
}





function AnimatedManagementHierarchy() {
  const board = boardOfDirectors.slice(0, 7);
  const independent = boardOfDirectors.slice(7);
  const partners = strategicPartners;
  const leaders = leadershipTeam;

  // starts the whole growth once the section is visible
  const ref = useRef(null);
  const go = useInView(ref, { once: true, amount: 0.15 });

  return (
    <GrowContext.Provider value={go}>
      <section ref={ref} className="relative overflow-hidden border-b border-white/10 bg-[#102b50] py-16 text-white">
        <style>{`
          .org-grid {
            background-image: radial-gradient(rgba(22,139,196,0.25) 1px, transparent 1px);
            background-size: 22px 22px;
          }
        `}</style>
        <div className="org-grid absolute inset-0 opacity-80" />

        <div className="relative mx-auto flex max-w-[1600px] flex-col items-center px-6">

          {/* STAGE 1: DIRECTORS (0s – 1.5s) */}
          <Group delay={0} className="max-w-[1100px]">
            {board.map((p, i) => (
              <HierarchyPerson key={p.slug} person={p} delay={0.2 + i * 0.1} />
            ))}
          </Group>
          <VLine h="h-8" delay={1.0} />
          <HierarchyLabel delay={1.4}>Directors</HierarchyLabel>
          <VLine h="h-10" delay={1.7} />

          {/* STAGE 2: SRIT + SIDE BRANCHES (2.1s – 4.2s) */}
          <div className="flex w-full flex-col items-center xl:flex-row">

            {/* LEFT: INDEPENDENT DIRECTORS */}
            <div className="flex flex-col items-center xl:flex-1 xl:flex-row">
              <Group delay={3.7} className="shrink-0">
                {independent.map((p, i) => (
                  <HierarchyPerson key={p.slug} person={p} compact delay={3.9 + i * 0.1} />
                ))}
              </Group>
              <VLine h="h-8" delay={3.4} className="xl:hidden" />
              <HLine origin="right" delay={3.4} />
              <HierarchyLabel delay={3.0}>Independent Directors</HierarchyLabel>
              <HLine origin="right" delay={2.5} />
              <VLine h="h-8" delay={2.5} className="xl:hidden" />
            </div>

            {/* CENTER */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={go ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.8, delay: 2.0, type: "spring" }}
              className="flex h-32 w-40 shrink-0 flex-col items-center justify-center rounded-2xl border border-cyan-200/40 bg-gradient-to-br from-[#168bc4] to-[#0c2140] shadow-[0_0_35px_rgba(22,139,196,.35)]"
>
  <strong className="text-3xl font-extrabold">SRIT</strong>
  <span className="mt-2 text-xs tracking-[.2em] text-cyan-100">LEADERSHIP</span>
            </motion.div>

            {/* RIGHT: STRATEGIC PARTNERS */}
            <div className="flex flex-col items-center xl:flex-1 xl:flex-row">
              <VLine h="h-8" delay={2.5} className="xl:hidden" />
              <HLine origin="left" delay={2.5} />
              <HierarchyLabel delay={3.0}>Strategic Partners</HierarchyLabel>
              <HLine origin="left" delay={3.4} />
              <VLine h="h-8" delay={3.4} className="xl:hidden" />
              <Group delay={3.7} className="shrink-0">
                {partners.map((p, i) => (
                  <HierarchyPerson key={p.slug} person={p} compact delay={3.9 + i * 0.1} />
                ))}
              </Group>
            </div>
          </div>

          {/* STAGE 3: BOTTOM T-SPLIT (4.6s – 8s) */}
          <VLine h="h-12" delay={4.6} />

          <div className="relative grid w-full grid-cols-1 gap-y-2 xl:grid-cols-2">
            {/* horizontal bar spreading from the centre */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: go ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 5.1, ease: "easeOut" }}
              style={{ originX: 0.5 }}
              className={`pointer-events-none absolute left-1/4 right-1/4 top-0 hidden border-t xl:block ${LINE}`}
            />

            {/* KMP */}
            <div className="flex flex-col items-center">
              <VLine h="h-8" delay={5.7} />
              <HierarchyLabel delay={6.1}>Key Managerial Personnel</HierarchyLabel>
              <VLine h="h-8" delay={6.4} />
              <Group delay={6.8}>
                {keyManagerial.map((p, i) => (
                  <HierarchyPerson key={p.slug} person={p} compact delay={7.0 + i * 0.1} />
                ))}
              </Group>
            </div>

            {/* SENIOR MANAGERS */}
            <div className="flex flex-col items-center">
              <VLine h="h-8" delay={5.7} />
              <HierarchyLabel delay={6.1}>Senior Managers</HierarchyLabel>
              <VLine h="h-8" delay={6.4} />
              <Group delay={6.8} className="max-w-[720px]">
                {leaders.map((p, i) => (
                  <HierarchyPerson key={p.slug} person={p} compact delay={7.0 + i * 0.05} />
                ))}
              </Group>
            </div>
          </div>
        </div>
      </section>
    </GrowContext.Provider>
  );
}





export default function Management() {
  const [activeTab, setActiveTab] = useState("directors");

  const active = TABS.find((t) => t.id === activeTab) || TABS[0];

  return (
    <main className="min-h-screen bg-white">

      {/* HERO + TABS */}
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/management.jpeg')",
        }}
      >
        <div className="mx-auto max-w-[1300px] px-6 py-8 md:px-12 md:py-12">

          <nav className="mb-4 text-sm">
            <a href="/" className="text-black">Home</a>
            <span className="mx-2 text-black">/</span>
            <a href="/company" className="text-black">About Us</a>
            <span className="mx-2 text-black">/</span>
            <span className="text-black">Management</span>
          </nav>

<h1 className="text-black font-normal tracking-normal md:text-5xl">
  Management
  <span className="mx-2">/</span>
<span className="text-sm tracking-normal leading-relaxed">
  Meet the Directors, Key Managerial Personnel, Strategic Partners,
  and our Leadership & Senior Management team.
</span>
</h1>

          {/* TABS */}
          <div className="mt-5 flex justify-center">
            <div className="inline-flex max-w-full overflow-x-auto rounded-full bg-white/80 p-1.5">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 sm:px-8 sm:text-base ${
                    activeTab === tab.id
                      ? "bg-gray-300 text-black shadow-md"
                      : "text-black hover:bg-gray-100"
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
      <section className="bg-white">
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
        <div className="mx-auto flex max-w-[1300px] flex-col items-start justify-between gap-6 px-6 py-14 md:flex-row md:items-center md:px-12">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">
              Want to work with our leadership?
            </h2>
            <p className="mt-2 text-gray-300">
              Reach out to discuss partnerships, investments or careers.
            </p>
          </div>

          <a
            href="/contact-us"
            className="inline-flex items-center gap-2 rounded-full bg-[#168bc4] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#102b50]"
          >
            Contact Us →
          </a>
        </div>
      </section>

    </main>
  );
}
