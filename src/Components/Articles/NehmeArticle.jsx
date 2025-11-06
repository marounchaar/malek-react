import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import "./Articles.css";
import NehmeArticleArray from "./NehmeArticleArray";

const Content = () => {
  const [activeItem, setActiveItem] = useState(NehmeArticleArray[0]?.domain || "");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const activeData = NehmeArticleArray.find((part) => part.domain === activeItem);

  return (
    <div className="content-container">
      {/* Top Menu */}
      <div className="risk_bar-btns mb-4 mt-4">
        <ul
          className="d-flex risk_bar-list-regai gap-1 p-0 m-0 risk_bar-list"
          style={{ listStyle: "none" }}
        >
          {NehmeArticleArray.map((part, idx) => (
            <li
              key={idx}
              className={activeItem === part.domain ? "active" : ""}
              onClick={() => handleItemClick(part.domain)}
            >
              {part.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Fade-in content */}
      {activeData && (
        // <Fade direction="up" triggerOnce>
        // <Fade bottom>
          <div className="regai-overview_section">
            <h3 className="regai-overview_title" style={{ margin: 0 }}>
              {activeData.title}
            </h3>

            {activeData.subtitle && (
              <h5 className="regai-overview_subtitle">{activeData.subtitle}</h5>
            )}

            <div className="regai-overview_title-el-divider mb-2"></div>

            {/* Arabic description */}
            {activeData.description && (
              <p className="regai-overview_description mb-3" dir="rtl">
                {activeData.description}
              </p>
            )}

            {/* Optional sections */}
            {activeData.section?.length > 0 &&
              activeData.section.map((sec, sIndex) => (
                <div key={sIndex} className="mb-5">
                  <h4 className="regai-overview_tit" dir="rtl">
                    {String.fromCharCode(65 + sIndex)}. {sec.title}
                  </h4>

                  {sec.img && (
                    <div className="d-flex align-items-center justify-content-end">
                      <img
                        src={sec.img}
                        alt=""
                        loading="lazy"
                        className="image-kifak"
                      />
                    </div>
                  )}

                  {sec.description && (
                    <p className="regai-overview_description mb-3" dir="rtl">
                      {sec.description}
                    </p>
                  )}

                  {sec.list?.length > 0 && (
                    <ul className="m-0 px-3" dir="rtl">
                      {sec.list.map((item, iIndex) => (
                        <li key={iIndex} className="mb-3">
                          <h6 className="fw-bold">{item.title}</h6>
                          <p>{item.description}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
          </div>
      )}
    </div>
  );
};

export default Content;
