import React from "react";
import "./Banner.css";

const bannerContent = [
  {
    title: "القيادة في الإيمان",
    subtitle: "تمكين التغيير بالنزاهة والرؤية",
    description:
      "كرجل دين ومصلح اجتماعي، تجاوزت رسالة الشيخ مالك الشعار حدود المنبر، فدعا إلى المسؤولية المدنية والتعليم والقيادة الأخلاقية في خدمة المجتمع.",
  },
];
const Banner = ({img}) => {
  return (
    <div className="articles-banner" style={{ backgroundImage: `url(${img})` }}>
      <div className="articles-banner-content">
        <h1>{bannerContent[0].title}</h1>
        <h3>{bannerContent[0].subtitle}</h3>
        <p>{bannerContent[0].description}</p>
      </div>
    </div>
  );
};
export default Banner;
