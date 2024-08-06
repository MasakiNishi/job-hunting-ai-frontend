/* Job Hunting AI Tool: App.tsx
 * Members: Masaki Nishi, Christian McKinnon, Susan Joh, and Alexander Wong
 * Project Partner: Professor Gates
 * CS 467 Portfolio Project */

/* App.tsx represents the "driver" file of our website that imports all pages
and components to facilitate the the job hunt for our users */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Help from "./pages/Help";
import Links from "./pages/Links";
import JobResults from "./pages/JobResults";
import Navigation from "./components/Navigation";
import "./App.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <header>
        {/* Let's add the jobs favicon and banner */}
        <section className="main-logo">
          <img src="jhaifavicon.png" alt="My favicon" />
        </section>
        <span className="main-title">Job Hunting AI Web Tool</span>
        <Navigation />
      </header>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/links" element={<Links />} />
          <Route path="/job-results" element={<JobResults />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </div>
      <footer>
        <p>
          &copy; 2024 Masaki Nishi, Christian McKinnon, Susan Joh, and Alexander
          Wong
        </p>
        <a href="/help">
          <label className="getHelp"> </label>
        </a>
      </footer>
    </BrowserRouter>
  );
};

export default App;
