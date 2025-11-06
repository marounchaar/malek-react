import React from "react";
import { Link } from "react-router-dom";
import {
  FaYoutube,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const mail = `mailto:info@malikshaar.org`;
  const phone = `tel:+9613431200`;

  const quickLinks = [
    { name: "السيرة الذاتية", link: "/about" },
    { name: "المقالات", link: "/articles" },
    { name: "الكتب", link: "/books" },
  ];

  const resources = [
    { name: "الأنشطة والفعاليات", link: "/events" },
    { name: "الصور والفيديوهات", link: "/gallery" },
    { name: "اتصل بنا", link: "/contact" },
  ];

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Column 1 - About */}
          <div className="footer-col">
            <Link to="/" className="footer-logo">
              <h2>المفتي مالك الشعار</h2>
            </Link>
            <p className="footer-about">
              المفتي مالك الشعار، أحد أبرز العلماء اللبنانيين، كرّس حياته
              لخدمة الدين والوطن والدفاع عن قيم الوحدة والاعتدال.
            </p>

            <div className="footer-social">
              <Link
                to="https://www.youtube.com/channel/UC9GzwOFdgadgDeMJwoN3qNQ/videos"
                target="_blank"
                className="social_icon"
              >
                <FaYoutube size={24} />
              </Link>
              <Link
                to="https://www.linkedin.com/in/raed-h-charafeddine-7a105b324/"
                target="_blank"
                className="social_icon"
              >
                <FaLinkedin size={24} />
              </Link>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="footer-col">
            <h4 className="footer-title">روابط سريعة</h4>
            <ul className="footer-links">
              {quickLinks.map((item, i) => (
                <li key={i}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Resources */}
          <div className="footer-col">
            <h4 className="footer-title">روابط إضافية</h4>
            <ul className="footer-links">
              {resources.map((item, i) => (
                <li key={i}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div className="footer-col">
            <h4 className="footer-title">تواصل معنا</h4>
            <ul className="footer-contact">
              <li>
                <FaPhone size={18} />{" "}
                <Link to={phone} className="footer-link">
                  +961 3 431 200
                </Link>
              </li>
              <li>
                <FaEnvelope size={18} />{" "}
                <Link to={mail} className="footer-link">
                  info@malikshaar.org
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Bottom section */}
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} المفتي مالك الشعار. جميع الحقوق محفوظة.
          </span>
          <span>
            تصميم وتطوير{" "}
            <Link
              to="https://valoores.com"
              target="_blank"
              className="footer-link underline"
            >
              Valoores
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
