import React, { useState } from "react";
import { Fade } from "react-awesome-reveal"; // ✅ correct import for react-awesome-reveal
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
        <Fade direction="up" triggerOnce>
          <div className="regai-overview_section" dir="rtl">
            {/* Title */}
            {activeData.title && (
              <h3 className="regai-overview_title my-2">
                {activeData.title}
              </h3>
            )}

            {/* Subtitle (render only if exists and not empty) */}
            {activeData.subtitle && activeData.subtitle.trim() !== "" && (
              <h5 className="regai-overview_subtitle my-2">{activeData.subtitle}</h5>
            )}

            {/* Divider */}
            <div className="regai-overview_title-el-divider mb-2"></div>

            {/* Description (render only if not empty) */}
            {activeData.description && activeData.description.trim() !== "" && (
              <p className="regai-overview_description mb-3">
                {activeData.description}
              </p>
            )}

            {/* If "list" exists, render each item */}
            {activeData.list?.length > 0 && (
              <ul className="m-3 px-3">
                {activeData.list.map((item, iIndex) => (
                  <li key={iIndex} className="mb-3">
                    {item.title && <h6 className="fw-bold">{item.title}</h6>}
                    {item.description && <p dangerouslySetInnerHTML={{__html:item.description}}></p>}
                  </li>
                ))}
              </ul>
            )}

            {activeData.section?.length > 0 &&
              activeData.section.map((sec, sIndex) => (
                <div key={sIndex} className="mb-5">
                  {sec.title && (
                    <h4 className="regai-overview_tit">
                      {String.fromCharCode(65 + sIndex)}. {sec.title}
                    </h4>
                  )}

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
                    <p className="regai-overview_description mb-3">
                      {sec.description}
                    </p>
                  )}

                  {sec.list?.length > 0 && (
                    <ul className="m-0 px-3">
                      {sec.list.map((item, iIndex) => (
                        <li key={iIndex} className="mb-3">
                          {item.title && <h6 className="fw-bold">{item.title}</h6>}
                          {item.description && <p>{item.description}</p>}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
          </div>
        </Fade>
      )}
    </div>
  );
};

export default Content;
