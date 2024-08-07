/* Job Hunting AI Tool: JobResults.tsx
 * Members: Masaki Nishi, Christian McKinnon, Susan Joh, and Alexander Wong
 * Project Partner: Professor Gates
 * CS 467 Portfolio Project */

/* JobResults.tsx represents page that displays job results
to our users by receiving a list of personalized jobs from the backend. */

import React from "react";
import { useLocation } from "react-router-dom";

// Assign Functional Component for assigning data received from backend
const JobResults: React.FC = () => {
  const location = useLocation();
  const { inputInfo, jobRankings } = location.state || {};
  // An array to avoid printing the textInput (exclude it)
  const inputDetails = [
    { label: "Job Type", value: inputInfo.jobType },
    { label: "Location", value: inputInfo.arrangement },
    { label: "Sector", value: inputInfo.sector },
    { label: "Experience", value: inputInfo.experience },
  ];

  // Do no proceed if no inputInfo or jobRankings are found
  if (!inputInfo || !jobRankings) {
    return (
      <div>No data available. Please go back and submit the form again.</div>
    );
  }

  // Tsx code to display the job results to user
  return (
    <div className="outer-container">
      <h1 id="results-title">Your Personalized Results</h1>
      <div className="input-details">
      <p id="selections">
        <strong>Based on your selections:</strong>
      </p>
      {/* Reproduce the inputData here from the inputDetails array*/}
        {inputDetails.map((detail, index) => (
          <span key={index} className="detail-item">
            <strong>{detail.label}:&nbsp; </strong>&nbsp;
            {Array.isArray(detail.value)
              ? detail.value.join(",    ")
              : detail.value}
          </span>
        ))}
      </div>
      <div className="main-text">
        <p id="result-title">
          Please find your 5 ranked job listing recommendations below!
        </p>
        {/* A temporary means to populate the data until AI integegration*/}
        <ol>
          {jobRankings.map((job: any, index: number) => (
            <li key={index} className="results-objects">
              &nbsp;<strong>{job.title}</strong>, &nbsp;{job.company}, &nbsp;
              {job.arrangement}, &nbsp;{job.jobType}, &nbsp;
              {job.location}, &nbsp;
              {job.sector}, &nbsp;{job.experience}, &nbsp;
              <a href={job.job_url} target="_blank" rel="noopener noreferrer">
                {job.url_site}
              </a>
              .
            </li>
          ))}
        </ol>
      <button onClick={() => window.history.back()}>Back to Form</button>
      </div>
    </div>
  );
};

export default JobResults;
