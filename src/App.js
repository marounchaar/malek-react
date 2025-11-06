import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Lazy-loaded Home component
const Home = lazy(() => import("./Components/Home/Home"));
const Articles = lazy(() => import("./Components/Articles/Articles"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Articles" element={<Articles />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
