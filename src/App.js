import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header";

const Home = lazy(() => import("./Components/Home/Home"));
const Articles = lazy(() => import("./Components/Articles/Articles"));
const Library = lazy(() => import("./Components/Library/Library"));
const Footer = lazy(() => import("./Components/Footer/Footer"));
const ContactUs = lazy(() => import("./Components/Contact/ContactUs"));
const Youtube = lazy(() => import("./Components/Youtube/Youtube"));

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Articles" element={<Articles />} />
          <Route path="/Library" element={<Library />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Videos" element={<Youtube />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
