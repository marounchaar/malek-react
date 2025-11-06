import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Lazy-loaded Home component
import Navbar from "./Components/Home/Navbar";
const Home = lazy(() => import("./Components/Home/Home"));
const Articles = lazy(() => import("./Components/Articles/Articles"));
const Library = lazy(() => import("./Components/Library/Library"));
const Footer = lazy(() => import("./Components/Footer/Footer"));
function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Articles" element={<Articles />} />
          <Route path="/Library" element={<Library />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
