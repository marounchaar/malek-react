import React from "react";
import "./Bio.css";

const SBiography = () => {
  const shortBiography = [
    {
      initials: "RC",
      title:
        "Central Banker | Commercial Banker | Strategist & Leadership Expert | Social & Economic Reformist",
      shortbio: `Thirty-five years in commercial and central banking. Seasoned finance professional with proven expertise in public and private sectors in the Middle East and Africa (MEA). International strategist in central banking, regulation, and supervision. Expert in financial markets, including direct operational experience in commercial banking in Lebanon and the United Arab Emirates. Board member of international and regional monetary and financial organizations. Work under challenging political and economic environments, mitigating risks, and fostering international regulatory compliance and efficient operations of local financial markets. Committed to the advancement of Lebanon - the Message as a home for diversity and a platform for universal solidarity through cooperation between its residents and its expatriates, as well as through creative interaction between its citizens beyond their affiliations. Social and economic reformist with established record in economic inclusion, poverty alleviation, women and community empowerment. University lecturer, writer and speaker on strategy, leadership, governance, pluralism, citizenship, organizational and personal development, monetary policy, finance, and economics.`,
    },
  ];

  return (
    <div className="container my-5 bio-wrapper">
      {/* Section header */}
      <div className="bio-section">
        <h2 className="section-title">Short Biography</h2>
        <div className="bio-divider-vert"></div>
        <p className="section-subtitle">
          Central Banker | Commercial Banker | Strategist & Leadership Expert | Social & Economic Reformist
        </p>
      </div>

      {/* Biography card */}
      {shortBiography.map((item, index) => (
        <div className="bio-card text-center p-5" key={index}>
          <div className="raed_icon mx-auto mb-3">
            <span className="raed_initials">{item.initials}</span>
          </div>

          <h5 className="bio-role mb-3">
            {item.title}
          </h5>

          <p className="bio-text">{item.shortbio}</p>

          <button className="bio-btn mt-4">Read More →</button>
        </div>
      ))}
    </div>
  );
};

export default SBiography;
