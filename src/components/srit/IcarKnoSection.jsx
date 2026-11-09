import React from "react";
import "./icarKnoSection.css";
import { img } from "./assets";

const capabilities = [
  {
    number: "01",
    title: "Enterprise Knowledge Search",
    description:
      "Instantly search documents, policies, manuals, and enterprise knowledge with AI-powered semantic understanding.",
    icon: "⌕",
  },
  {
    number: "02",
    title: "AI Document Intelligence",
    description:
      "Extract insights from PDFs, scanned files, reports, contracts, and structured documents with high accuracy.",
    icon: "▤",
  },
  {
    number: "03",
    title: "Verifiable Source Citations",
    description:
      "Every response includes trusted references, document sources, and contextual evidence for complete transparency.",
    icon: "↗",
  },
  {
    number: "04",
    title: "Secure On-Premises AI",
    description:
      "Deploy securely within your infrastructure with complete data sovereignty, privacy, and enterprise compliance.",
    icon: "◈",
  },
];

export default function IcarKnoSection() {
  return (
    <section
      className="ick-section"
      id="icarkno"
      style={{
        // THIS creates the transparent white layer over the image!
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.40)), url(${img("icarkno-bg.png")})`,
      }}
    >
      <div className="ick-container">
        {/* Heading */}
        <div className="ick-heading">
          <span className="ick-eyebrow">OUR AI PLATFORM</span>
          <h2>
            <span>icarKno™</span> Enterprise Knowledge AI
          </h2>
        </div>

        {/* Video and Features */}
        <div className="ick-content">
          {/* Video */}
          <div className="ick-visual">
            <div className="ick-phone-frame">
              <div className="ick-phone-screen">
                <iframe
                  src="https://www.youtube.com/embed/NcEyfK66U6A?autoplay=1&mute=1&loop=1&playlist=NcEyfK66U6A&controls=0&rel=0&playsinline=1"
                  title="icarKno Enterprise Knowledge AI"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="ick-features">
            {capabilities.map((item) => (
              <article className="ick-feature" key={item.number}>
                <div className="ick-feature-icon" aria-hidden="true">
                  {item.icon}
                </div>

                <div className="ick-feature-copy">
                  <span className="ick-feature-number">{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}