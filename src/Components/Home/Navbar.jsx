import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/logo_white.png";
import logoscrolled from "../../assets/logo_black.png";
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
  const scrollToSection = (selector) => {
    // Using querySelector instead of getElementById for more flexibility
    const element = document.querySelector(selector);
    if (element) {
      const navbarHeight = 80; // Approximate navbar height
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setMenuOpen(false);
      setActiveSubmenu(null);
    }
  };

  const buttons = [
    { 
      title: "الرئيسية", 
      action: () => scrollToSection('.carousel-container') 
    },
    { 
      title: "السيرة الذاتية", 
      action: () => scrollToSection('.bio-wrapper') 
    },
    { 
      title: "السيرة", 
      action: () => scrollToSection('.history-container') 
    },
    { 
      title: "أبرز المحطات", 
      action: () => scrollToSection('.threeup') 
    }
  ];

  return (
    <div className={`navbarr ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img
            src={scrolled ? logoscrolled : logo}
            alt="logo"
            style={{ width: "5rem" }}
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
          {buttons.map((item, index) => (
            <li key={index} className="navItem">
              <div 
                className="navLink"
                onClick={item.action}
                style={{ cursor: 'pointer' }}
              >
                {item.title}
              </div>
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
