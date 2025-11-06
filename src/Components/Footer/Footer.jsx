import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaChevronRight,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import "./Footer.css";
import axios from "axios";

const Footer = ({ Ip }) => {
  const [raedTitle, setRaedTitle] = useState([]);
  const mail = `mailto:raed@raedcharafeddine.net`;
  const phone = `tel:+961 3 431 200`;
  const  divLists =[
    {
        disabled:1,
        item:"",
        itemEn:"",
    },
    {
        disabled:1,
        item:"",
        itemEn:"",
    },
    {
        disabled:1,
        item:"",
        itemEn:"",
    },
  ]

  return (
    <div
      className="container-fluid footer wow fadeIn mt-5"
      data-wow-delay=".3s"
    >
      <div className="pt-3 pb-3">
        <div className="row g-1">
          <div className="col-lg-3 col-md-6">
            <Link to="index.html">
              <h1
                className="text-white fw-bold d-block"
                style={{ fontSize: "2rem" }}
              >
                المفتي مالك الشعار
              </h1>
            </Link>
            {raedTitle.map((data) => (
              <p
                className="mt-4 text-light"
                key={data.id}
                style={{ fontSize: "1.2rem" }}
                dangerouslySetInnerHTML={{ __html: data.title }}
              >
                مفتي طرابلس والشمال
              </p>
            ))}
            <div className="d-flex hightech-link d-flex align-items-center gap-3">
              <Link
                to="https://www.youtube.com/channel/UC9GzwOFdgadgDeMJwoN3qNQ/videos"
                target="_blank"
                className="social_icon"
              >
                <FaYoutube size={30} />
              </Link>
              <Link
                to="https://www.linkedin.com/in/raed-h-charafeddine-7a105b324/"
                target="_blank"
                className="social_icon"
              >
                <FaLinkedin size={30} />
              </Link>
            </div>
          </div>
          {divLists.map(
            (resource, idx) => (
              // resource.title !== "Societal Transformation" && (
              <div key={idx} className="col-lg-3 col-md-6">
                <Link to="#" className="h3 text-light footer_title">
                  {resource.title}
                </Link>
                <div className="d-flex flex-column gap-2 mt-3 footer_links">
                  {resource.list.map(
                    (eco, i) =>
                      Number(eco.disabled) === 1 && (
                        <Link
                          key={i}
                          to={`/Page?data=${eco.item}&lang=En`}
                          className="text-white footer_links-link"
                        >
                          {eco.item} | {eco.itemAr}
                        </Link>
                      )
                  )}
                </div>
              </div>
            )
            // )
          )}
        </div>
        <hr className="text-light" />
        <div className="row align-items-center text-white">
          {/* Left Section */}
          <div className="col-md-3 text-start text-md-start">
            <span>
              <Link to="#" className="text-white">
                <i className="fas fa-copyright me-2"></i>
                Raed Charafeddine
              </Link>
              , All rights reserved.
            </span>
          </div>

          {/* Center Section */}
          {/* <div className="col-md-6 d-flex flex-column flex-md-row justify-content-center gap-3"> */}
          <Link to={phone} className="col-md-3 text-light border-primary py-2">
            <FaPhone size={20} /> +961 3 431 200
          </Link>
          <Link to={mail} className="col-md-3 text-light border-primary py-2">
            <FaEnvelope size={20} /> raed@raedcharafeddine.net
          </Link>
          {/* </div> */}

          {/* Right Section */}
          <div className="col-md-3 text-center text-md-end">
            <span className="d-flex align-items-center justify-content-md-end gap-1">
              Designed By
              <Link
                to="https://valoores.com"
                target="_blank"
                className="text-white text-decoration-underline"
              >
                Valoores
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
