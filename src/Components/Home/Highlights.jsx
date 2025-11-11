import React from "react";
import {Link} from "react-router-dom"
import "./Highlights.css";
import Library from "../../assets/highlights/mufti_carousel1.avif";
import Videos from "../../assets/highlights/videos.avif";
import News from "../../assets/highlights/news.avif";
import Articles from "../../assets/highlights/articles.avif";

const highlights = [
  {
    title: "المكتبة",
    titleEn: "Library",
    description:
      "تضم مؤلفات وكتب سماحة المفتي مالك الشعار التي تجسّد فكره الوسطي ورسائله في الإيمان والوحدة الوطنية.",
    descriptionEn:
      "A collection of books and writings by Mufti Malik Al-Shaar, reflecting his vision of faith, moderation, and national unity.",
    image: Library,
    link: "/Library",
  },
  // {
  //   title: "المعرض",
  //   titleEn: "Gallery",
  //   description:
  //     "صور توثّق محطات من حياة المفتي مالك الشعار ومسيرته الدينية والوطنية في لبنان والعالم العربي.",
  //   descriptionEn:
  //     "A visual journey through moments that shaped Mufti Malik Al-Shaar’s religious and national contributions in Lebanon and beyond.",
  //   image:
  //     "https://images.unsplash.com/photo-1581093588401-22e8f2d2ca02?auto=format&fit=crop&w=800&q=80",
  //   link: "#",
  // },
  {
    title: "الفيديوهات",
    titleEn: "Videos",
    description:
      "مختارات من الخطب والمحاضرات والمقابلات التي تعبّر عن فكر المفتي ورسالته في نشر قيم الاعتدال.",
    descriptionEn:
      "A curated selection of sermons, lectures, and interviews that convey the Mufti’s message of moderation and dialogue.",
    image: Videos,
    link: "/Videos",
  },
  {
    title: "الأخبار",
    titleEn: "News",
    description:
      "آخر الأخبار والأنشطة والمشاركات التي تواكب حضور المفتي واهتماماته الدينية والاجتماعية.",
    descriptionEn:
      "Latest news and updates on Mufti Al-Shaar’s activities, public engagements, and religious initiatives.",
    image: News,
    link: "#",
  },
  // {
  //   title: "العائلة",
  //   titleEn: "Family",
  //   description:
  //     "زاوية تُضيء على الجانب الإنساني من حياة المفتي، وتعرض روابط العائلة والقيم التي نشأ عليها.",
  //   descriptionEn:
  //     "A window into the personal and human side of the Mufti, highlighting family ties and the values that shaped his life.",
  //   image:
  //     "https://images.unsplash.com/photo-1581093588401-22e8f2d2ca02?auto=format&fit=crop&w=800&q=80",
  //   link: "#",
  // },
  {
    title: "المقالات",
    titleEn: "Articles",
    description:
      "مقالات فكرية ودينية كتبها سماحة المفتي تعالج قضايا المجتمع والإيمان بأسلوب علمي وهادئ.",
    descriptionEn:
      "A selection of intellectual and spiritual articles by the Mufti addressing social and religious issues with wisdom and clarity.",
    image: Articles,
    link: "/Articles",
  },
];

const HighlightsSection = () => {
  return (
    <section className="highlights-section container">
      <h2 className="highlights-title">محطات بارزة</h2>

      <div className="highlights-grid">
        {highlights.map((item, index) => (
          <Link to={item.link} key={index} className="highlight-card">
            <img
              src={item.image}
              alt={item.title}
              className="highlight-image"
            />

            <div className="highlight-content">
              <h3 className="highlight-heading">{item.title}</h3>
              <p className="highlight-description">{item.description}</p>
              <a href={item.link} className="highlight-link">
                اقرأ المزيد →
              </a>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HighlightsSection;
