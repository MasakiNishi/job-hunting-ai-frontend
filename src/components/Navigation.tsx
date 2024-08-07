/* Job Hunting AI Tool: Navigation.tsx
 * Members: Masaki Nishi, Christian McKinnon, Susan Joh, and Alexander Wong
 * Project Partner: Professor Gates
 * CS 467 Portfolio Project */

/* Naviation.tsx implements the 3-button navigation bar which is imported
to App.tsx. */

import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  // Get the current location using the useLocation hook
  return (
    <nav>
      <Link to="/" className="nav-link" id="job-search">
        Job Search
      </Link>
      <Link to="/about" className="nav-link">
        About
      </Link>
      <Link to="/links" className="nav-link">
        Links
      </Link>
    </nav>
  );
}

export default Navigation;
