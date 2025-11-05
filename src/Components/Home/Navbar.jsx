import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/law.png";
import logoscrolled from "../../assets/law.png";
import "./Navbar.css";

const Navbar = ({ Ip }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [home, setHome] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setHome(true);
    } else {
      setHome(false);
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const carouselHeight = document.querySelector('.carousel-container')?.offsetHeight || 100;
      if (window.scrollY > carouselHeight - 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const buttons = [
    { title: "Home", link: "/" },
    { title: "The Firm", link: "/TheFirm" },
    { title: "Our Team", link: "/OurTeam" },
    {
      title: "Practice Areas",
      link: "practice/litigation",
      submenu: [
        {
          title: "Litigation & Alternative Dispute Resolution",
          link: "/practice/litigation",
        },
        { title: "Corporate & Commercial Law", link: "/practice/corporate" },
        { title: "Corporate Structure", link: "/practice/structure" },
        { title: "Contract Drafting", link: "/practice/contract" },
        {
          title: "International Trade & Investment",
          link: "/practice/international",
        },
        { title: "Intellectual Property", link: "/practice/intellectual" },
        { title: "Maritime & Aviation", link: "/practice/maritime" },
        { title: "Property & Real Estate", link: "/practice/property" },
        { title: "Banking & Finance", link: "/practice/banking" },
        { title: "Labour & Employment", link: "/practice/labour" },
      ],
    },
    { title: "Our Partners", link: "/OurPartners" },
    {
      title: "Legal Insights",
      link: "/LegalInights",
      submenu: [
        { title: "News", link: "/LegalInights?category=news" },
        { title: "Case Laws in Brief", link: "/LegalInights?category=case" },
        { title: "Legal Tips", link: "/LegalInights?category=tips" },
      ],
    },
    { title: "Contact", link: "/ContactUs" },
  ];

  return (
    <div className={`navbarr ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img
            src={scrolled ? logoscrolled : logo}
            alt="logo"
            style={{ width: "13rem" }}
            loading="lazy"
          />
        </Link>
        <div className="menuIcon" onClick={() => setMenuOpen(!menuOpen)}>
          <GiHamburgerMenu size={24} color={scrolled ? "#1b2b57" : "white"} />
        </div>

        <ul
          className={`navList ${menuOpen ? "open" : ""} ${
            scrolled ? "scrolled" : ""
          }`}
        >
          {buttons.map((label, index) => (
            <li key={index} className={`navItem ${activeSubmenu === index ? 'open' : ''}`}>
              {label.submenu ? (
                <div 
                  className="navLink"
                  onClick={() => {
                    if (window.innerWidth <= 1220) {
                      setActiveSubmenu(activeSubmenu === index ? null : index);
                    }
                  }}
                >
                  {label.title}
                </div>
              ) : (
                <Link 
                  to={label.link} 
                  className="navLink"
                  onClick={() => {
                    setMenuOpen(false);
                    setActiveSubmenu(null);
                  }}
                >
                  {label.title}
                </Link>
              )}

              {label.submenu && (
                <ul className="submenu">
                  {label.submenu.map((sub, subIndex) => (
                    <li key={subIndex} className="submenuItem">
                      <Link 
                        to={sub.link} 
                        className="submenuLink"
                        onClick={() => {
                          setMenuOpen(false);
                          setActiveSubmenu(null);
                        }}
                      >
                        {sub.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>



        {menuOpen && (
          <div className="navbar-overlay" onClick={() => setMenuOpen(false)} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
