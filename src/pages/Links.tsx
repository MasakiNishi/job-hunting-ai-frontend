/* Job Hunting AI Tool: Links.tsx
Members: Masaki Nishi, Christian McKinnon, Susan Joh, and Alexander Wong
Project Partner: Professor Gates
CS 467 Portfolio Project */

/* Links.tsx represents a simple page that contains links to some 
popular job websites that might be helpful to users */

import React from "react";

const Links: React.FC = () => {
  return (
    <div className="outer-container">
      <h2>Top Jobs Websites</h2>
      <p>
        <a href="https://www.linkedin.com">LinkedIn</a>
      </p>
      <p>
        <a href="https://www.indeed.com">Indeed</a>
      </p>
      <p>
        <a href="https://www.ziprecruiter.com">ZipRecruiter</a>
      </p>
      <p>
        <a href="https://www.glassdoor.com">GlassDoor</a>
      </p>
      <p>
        <a href="https://www.fiverr.com">Fiverr</a>
      </p>
    </div>
  );
};

export default Links;
