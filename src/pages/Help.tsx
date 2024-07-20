/* Job Hunting AI Tool: Help.tsx
Members: Masaki Nishi, Christian McKinnon, Susan Joh, and Alexander Wong
Project Partner: Professor Gates
CS 467 Portfolio Project */

/* Help.tsx is a page that helps users understand how to use our website
through a list of FAQs. */

import React from "react";

const Help: React.FC = () => {
  return (
    <div className="outer-container">
      <h2>Get Help: FAQs</h2>
      <p className="about-para">
        <strong>Q:</strong> How can I use this website?<br></br>
        <br></br>
        <strong>A:</strong> Simply provide at least one answer to each of the
        first 4 questions found on the “My Search” page, then click “Submit”
        (the 5th question is optional).<br></br>
        <br></br>
        <strong>Q:</strong> Why do I need to provide my information?<br></br>
        <br></br>
        <strong>A:</strong> We use your information strictly to provide you with
        personalized job listings.<br></br>
        <br></br>
        <strong>Q:</strong> Where can I learn more about your website?<br></br>
        <br></br>
        <strong>A:</strong> More information about our website and project can
        be found on the “About” page.
      </p>
    </div>
  );
};

export default Help;
