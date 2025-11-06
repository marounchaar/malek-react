import React, { Suspense,lazy} from "react";
import "./Articles.css";
import bannerImage from "../../assets/carousel/mufti_carousel2.avif";
import Fade from "react-reveal/Fade";
const NehmeArticle = lazy(() => import("./NehmeArticle"));

const bannerContent = [
  {
    title: "VBS-REG-AI",
    subtitle:
      "When the Advanced AI Reads the Regulations, the Compliance Revolution Beyond Human Limits",
    description:
      "How Autonomous AI Agent Societies Are Transforming Financial Regulation From Existential Burden Into Unassailable Competitive Advantage, And Why You Have 3-5 Years to Lead or Be Left Behind",
  },
];
const Articles = () => {
  return (
    <div className="articles-pagee">
      {/* Banner Section */}
      <div
        className="articles-banner"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="articles-banner-content">
          <h1>{bannerContent[0].title}</h1>
          <h3>
            {bannerContent[0].subtitle}
          </h3>
          <p>
            {bannerContent[0].description}
          </p>
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
