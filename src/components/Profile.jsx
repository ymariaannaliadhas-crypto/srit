import { useParams, Link } from "react-router-dom";
// 👇 Import the exported arrays
import { boardOfDirectors, keyManagerial, strategicPartners, leadershipTeam } from "../data/managementData";

export default function Profile() {
  const { slug } = useParams();

  // Combine all arrays to find the person
  const allPeople = [...boardOfDirectors, ...keyManagerial, ...strategicPartners, ...leadershipTeam];
  const person = allPeople.find((p) => p.slug === slug);

  if (!person) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-[#102b50]">Profile Not Found</h1>
        <Link to="/management" className="mt-4 text-[#168bc4] hover:underline">
          ← Back to Management
        </Link>
      </div>
    );
  }

  // The exact same image map from Management.jsx
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
  
  const imageSrc = imageMap[person.slug] ? `/images/${imageMap[person.slug]}` : null;

  const paragraphs = (person.bio || "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const initials = person.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="bg-[#102b50] text-white">
        <div className="mx-auto max-w-[1300px] px-6 py-20 md:px-12 md:py-24">
          <nav className="mb-4 text-sm text-cyan-200">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/company" className="hover:text-white">About Us</Link>
            <span className="mx-2">/</span>
            <Link to="/management" className="hover:text-white">Management</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{person.name}</span>
          </nav>

          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-200">
            Management Profiles
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            {person.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-200">
            {person.role}
          </p>
        </div>
      </section>

      {/* PHOTO + BIO */}
      <section className="mx-auto max-w-[1300px] px-6 py-16 md:px-12">
        <div className="grid gap-10 md:grid-cols-[300px_1fr] md:gap-16 lg:grid-cols-[360px_1fr]">
          {/* photo */}
          <div className="md:sticky md:top-28 md:self-start">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#102b50] to-[#168bc4] shadow-[0_20px_60px_rgba(16,43,80,0.15)]">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-7xl font-bold text-white/90">{initials}</span>
              </div>
              {imageSrc && (
                <img
                  src={imageSrc}
                  alt={person.name}
                  className="relative z-10 h-full w-full object-cover object-[center_20%]"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              )}
            </div>
          </div>

          {/* bio */}
          <div className="space-y-5 text-base leading-8 text-gray-700 md:text-[17px]">
            {paragraphs.length > 0 ? (
              paragraphs.map((line, i) =>
                line.startsWith("•") ? (
                  <p key={i} className="pl-5 -indent-3">{line}</p>
                ) : (
                  <p key={i}>{line}</p>
                )
              )
            ) : (
              <p>Biography coming soon.</p>
            )}

            <div className="pt-6">
              <Link
                to="/management"
                className="inline-flex items-center gap-2 rounded-full bg-[#168bc4] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#102b50]"
              >
                ← Back to Management
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}