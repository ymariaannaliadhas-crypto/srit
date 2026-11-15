const capabilities = [
  {
    title: "Enterprise Knowledge Search",
    description:
      "Instantly search documents, policies, manuals, and enterprise knowledge with AI-powered semantic understanding.",
  },
  {
    title: "AI Document Intelligence",
    description:
      "Extract insights from PDFs, scanned files, reports, contracts, and structured documents with high accuracy.",
  },
  {
    title: "Verifiable Source Citations",
    description:
      "Every response includes trusted references, document sources, and contextual evidence for complete transparency.",
  },
  {
    title: "Secure On-Premises AI",
    description:
      "Deploy securely within your infrastructure with complete data sovereignty, privacy, and enterprise compliance.",
  },
];

export default function IcarKnoSection() {
  return (
    <section
      id="icarkno"
      className="border-b border-gray-200 bg-[#fafbfc] py-24 text-[#172b4d] sm:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          {/* Left Column: Heading & Summary */}
          <div className="lg:col-span-4">
            <p className="text-xs font-bold uppercase tracking-wider text-[#079fdf]">
              Enterprise Knowledge AI
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#102b50] sm:text-4xl">
              <span className="text-[#079fdf]">icarKno™</span> Enterprise Knowledge AI
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-600">
              <strong className="font-semibold text-[#102b50]">
                Turn institutional archives, policies, and clinical or governance records
              </strong>{" "}
              into verifiable answers inside your own secure boundary.
            </p>
          </div>

          {/* Center Column: Clean Media Frame */}
          <div className="flex justify-center lg:col-span-3">
            <div className="w-full max-w-[240px] overflow-hidden rounded-xl border border-gray-200 bg-[#0a192f]">
              <div className="border-b border-white/10 bg-[#102b50] px-3.5 py-2.5 text-xs font-semibold text-white">
                <span>icarKno™ Walkthrough</span>
              </div>
              <div className="aspect-[9/16] w-full overflow-hidden bg-[#0a192f]">
                <iframe
                  src="https://www.youtube.com/embed/NcEyfK66U6A?autoplay=1&mute=1&loop=1&playlist=NcEyfK66U6A&controls=0&rel=0&playsinline=1"
                  title="icarKno Enterprise Knowledge AI"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="block h-full w-full border-0"
                />
              </div>
            </div>
          </div>

          {/* Right Column: 2x2 Structured Bento Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-5">
            {capabilities.map((item) => (
              <article
                key={item.title}
                className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-5 transition-colors duration-200 hover:border-[#079fdf]/60"
              >
                <div>
                  <h3 className="font-display text-base font-bold leading-snug tracking-tight text-[#102b50]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
