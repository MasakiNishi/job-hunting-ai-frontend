/* Job Hunting AI Tool: JobResults.tsx
Members: Masaki Nishi, Christian McKinnon, Susan Joh, and Alexander Wong
Project Partner: Professor Gates
CS 467 Portfolio Project */

/* JobResults.tsx represents page that will ultimately display job results
to our users and will receive a list of personalized jobs from the backend. */

import React from "react";
import { useNavigate } from "react-router-dom";
//import { useLocation } from "react-router-dom";

// Assign Functional Component for Go Back button
const JobResults: React.FC = () => {
  const navigate = useNavigate();
  //const location = useLocation();
  //const { jobRankings } = location.state || { jobRankings: [] };

  return (
    <div className="results-container">
      {/* For now we will fill with text and navigate to HomePage*/}
      <h1>Your Job Rankings</h1>
      <p> Will work on this later</p>
      <button onClick={() => navigate("/")}>Back to Form</button>
    </div>
  );
};

export default JobResults;
