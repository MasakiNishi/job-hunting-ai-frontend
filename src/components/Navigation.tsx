/* Job Hunting AI Tool: Navigation.tsx
Members: Masaki Nishi, Christian McKinnon, Susan Joh, and Alexander Wong
Project Partner: Professor Gates
CS 467 Portfolio Project */

/* Naviation.tsx implements the 3-button navigation bar which is imported
to App.tsx. */

import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  // Get the current location using the useLocation hook
  return (
    <nav>
      <Link to="/">My Search</Link>
      <Link to="/about">About</Link>
      <Link to="/links">Links</Link>
    </nav>
  );
}

export default Navigation;
