import React, { Suspense, lazy, useEffect } from "react";
import "./Articles.css";
import bannerImage from "../../assets/carousel/mufti_carousel2.avif";
import Fade from "react-reveal/Fade";
const NehmeArticle = lazy(() => import("./NehmeArticle"));

const bannerContent = [
  {
    title: "القيادة في الإيمان",
    subtitle: "تمكين التغيير بالنزاهة والرؤية",
    description:
      "كرجل دين ومصلح اجتماعي، تجاوزت رسالة الشيخ مالك الشعار حدود المنبر، فدعا إلى المسؤولية المدنية والتعليم والقيادة الأخلاقية في خدمة المجتمع.",
  },
];
const Articles = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="articles-pagee">
      {/* Banner Section */}
      <div
        className="articles-banner"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="articles-banner-content">
          <h1>{bannerContent[0].title}</h1>
          <h3>{bannerContent[0].subtitle}</h3>
          <p>{bannerContent[0].description}</p>
        </div>
      </div>
      <div
        className="articles-main-content articles-overview_content container"
        style={{ flex: "4" }}
      >
        {/* {overview === "yes" && <h6>OVERVIEW</h6>} */}
        <NehmeArticle />
      </div>
    </div>
  );
};

export default Articles;
