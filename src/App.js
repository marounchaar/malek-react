import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header";

// Lazy-loaded components
const Home = lazy(() => import("./Components/Home/Home"));
const Articles = lazy(() => import("./Components/Articles/Articles"));
const Youtube = lazy(() => import("./Components/Youtube/Youtube"));

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Articles" element={<Articles />} />
          <Route path="/Youtube" element={<Youtube />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
