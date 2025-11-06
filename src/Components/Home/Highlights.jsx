import React from "react";
import "./Highlights.css"; // <-- we'll add the CSS below

const highlights = [
  {
    title:"المكتبة",
    titleEn: "Library",
    description:
      "Introducing targeted reforms to stabilize inflation while supporting sustainable growth across key sectors.",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    title: "المعرض",
    titleEn:"Gallery",
    description:
      "Accelerating renewable energy projects to ensure long-term economic and environmental sustainability.",
    image:
      "https://images.unsplash.com/photo-1581093588401-22e8f2d2ca02?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    title: "الفيديوهات",
    titleEn: "Videos",
    description:
      "Building a modern digital infrastructure to enhance connectivity and empower local industries.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    title: "الأخبار",
    titleEn: "News",
    description:
      "Introducing targeted reforms to stabilize inflation while supporting sustainable growth across key sectors.",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    title: "العائلة",
    titleEn: "Family",
    description:
      "Accelerating renewable energy projects to ensure long-term economic and environmental sustainability.",
    image:
      "https://images.unsplash.com/photo-1581093588401-22e8f2d2ca02?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    title: "المقالات",
    titleEn: "Articles",
    description:
      "Building a modern digital infrastructure to enhance connectivity and empower local industries.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    link: "/Articles",
  },
];

const HighlightsSection = () => {
  return (
    <section className="highlights-section container">
      <h2 className="highlights-title">محطات بارزة</h2>

      <div className="highlights-grid">
        {highlights.map((item, index) => (
          <div key={index} className="highlight-card">
            <img src={item.image} alt={item.title} className="highlight-image" />

            <div className="highlight-content">
              <h3 className="highlight-heading">{item.title}</h3>
              <p className="highlight-description">{item.description}</p>
              <a href={item.link} className="highlight-link">
                اقرأ المزيد →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HighlightsSection;
