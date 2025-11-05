import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [overlay, setOverlay] = useState(true); // true when over the carousel/hero

  const toggle = () => setOpen((s) => !s);
  const close = () => setOpen(false);

  useEffect(() => {
    const nav = document.getElementById("navbar");
    const hero = document.getElementById("home"); // your carousel/hero section should have id="home"

    const compute = () => {
      const navH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--nav-height")) || 64;
      const heroBottom = (hero?.getBoundingClientRect().bottom ?? 0);
      // If bottom of hero is still below the navbar, keep overlay mode
      setOverlay(heroBottom > navH);
    };

    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, []);

  // When navigating via hash links, also close the drawer and re-evaluate
  const onNavClick = (e) => {
    close();
    // Allow default anchor jump, then recompute overlay on next frame
    requestAnimationFrame(() => {
      const evt = new Event("scroll");
      window.dispatchEvent(evt);
    });
  };

  return (
    <header
      className={`navbar ${overlay ? "navbar--overlay" : "navbar--solid"}`}
      id="navbar"
    >
      <div className="navbar__container">
        <a href="#home" className="navbar__brand" onClick={onNavClick}>
          <span className="navbar__logo">MalekShaar</span>
        </a>

        <button
          className="navbar__toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={toggle}
        >
          <span className="hamburger" />
        </button>

        <nav className={`navbar__nav ${open ? "navbar__nav--open" : ""}`}>
          <a href="#home" className="navbar__link" onClick={onNavClick}>
            Home
          </a>
          <a href="#bio" className="navbar__link" onClick={onNavClick}>
            Bio
          </a>
          <a href="#history" className="navbar__link" onClick={onNavClick}>
            History
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
