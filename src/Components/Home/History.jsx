import React, { useEffect, useRef } from "react";
import "./History.css";
import historyarray from "./HistroyArray";

const NewHistory = () => {
  const historyRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    historyRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      historyRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      <div className="history-container container my-5">
        <div className="history-header">
          <h1>Our History</h1>
          <p>Journey through the milestones that shaped our organization</p>
        </div>

        <div className="newhistory">
          {historyarray.map((item, index) => (
            <div
              key={index}
              ref={(el) => (historyRef.current[index] = el)}
              className={`newhistory-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="newhistory-content">
                <div className="newhistory-year">{item.year}</div>
                <div className="newhistory-card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewHistory;