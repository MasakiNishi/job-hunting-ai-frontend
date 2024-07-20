/* Job Hunting AI Tool: HomePage.tsx
Members: Masaki Nishi, Christian McKinnon, Susan Joh, and Alexander Wong
Project Partner: Professor Gates
CS 467 Portfolio Project */

/* HomePage.tsx represents the "My Search" page and contains the form that collects
our user data that is sent to the Backend via the axios HTTP client. */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ConfirmationModal from "../components/ConfirmationModal";

const HomePage: React.FC = () => {
  const [jobType, setJobType] = useState<string[]>([]);
  const [location, setLocation] = useState<string[]>([]);
  const [sector, setSector] = useState<string[]>([]);
  const [experience, setExperience] = useState<string>("");
  const [textInput, setTextInput] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const navigate = useNavigate();

  // FORM SUBMISSION VARIABLES / FUNCTIONAL COMPONENTS
  // Functional component to handle data in Job Type Check Box
  const handleJobTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setJobType((prevJobType) =>
      prevJobType.includes(value)
        ? prevJobType.filter((job) => job !== value)
        : [...prevJobType, value],
    );
  };

  // Functional component to handle data in Location Check Box
  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocation((prevLocation) =>
      prevLocation.includes(value)
        ? prevLocation.filter((loc) => loc !== value)
        : [...prevLocation, value],
    );
  };

  // Functional component to handle data in Sector Check Box
  const handleSectorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSector((prevSector) =>
      prevSector.includes(value)
        ? prevSector.filter((sector) => sector !== value)
        : [...prevSector, value],
    );
  };

  // Functional component to handle data in Work Experience Check Box
  const handleExperienceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExperience(e.target.value);
  };

  // Functional component to ensure the required data is inputted by user
  const validateForm = () => {
    if (jobType.length === 0) {
      setErrorMessage("Please select at least one job type.");
      return false;
    }
    if (location.length === 0) {
      setErrorMessage("Please select at least one job location.");
      return false;
    }
    if (sector.length === 0) {
      setErrorMessage("Please select at least one sector.");
      return false;
    }
    if (!experience) {
      setErrorMessage("Please select your work experience.");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  // Functional component to handle data transfer to backend
  const handleSubmit = () => {
    if (!validateForm()) {
      setShowModal(false);
      return;
    }
    const data = { jobType, location, sector, experience, textInput };
    axios
      .post("/submit", data)
      .then((response: { data: any }) => {
        navigate("/job-results", { state: { jobRankings: response.data } });
      })
      .catch((error: any) => {
        console.error("Failed to submit form due to error.", error);
      });
  };

  // Variable for confirming submission
  const handleConfirm = () => {
    setShowModal(false);
    handleSubmit();
  };

  // Variable for canceling submission
  const handleCancel = () => {
    setShowModal(false);
  };

  // Form Data:
  return (
    <div className="outer-container">
      <h2>Find Your Dream Job!</h2>
      <p className="instructions">
        Please answer the below questions to discover personalized job
        recommendations.
      </p>
      <form>
        <p>
          <strong>1.) What type of job are you looking for?</strong>
        </p>
        <input
          type="checkbox"
          value="Full time"
          checked={jobType.includes("Full time")}
          onChange={handleJobTypeChange}
        />
        Full time
        <input
          type="checkbox"
          value="Part time"
          checked={jobType.includes("Part time")}
          onChange={handleJobTypeChange}
        />
        Part time
        <input
          type="checkbox"
          value="Freelance"
          checked={jobType.includes("Freelance")}
          onChange={handleJobTypeChange}
        />
        Freelance
        <input
          type="checkbox"
          value="Internship"
          checked={jobType.includes("Internship")}
          onChange={handleJobTypeChange}
        />
        Internship
        <p>
          <strong>
            2.) Please tell us about your job location preferences.
          </strong>
        </p>
        <input
          type="checkbox"
          value="Remote"
          checked={location.includes("Remote")}
          onChange={handleLocationChange}
        />
        Remote
        <input
          type="checkbox"
          value="On-site"
          checked={location.includes("On-site")}
          onChange={handleLocationChange}
        />
        On-site
        <input
          type="checkbox"
          value="Hybrid"
          checked={location.includes("Hybrid")}
          onChange={handleLocationChange}
        />
        Hybrid
        <input
          type="checkbox"
          value="Any"
          checked={location.includes("Any")}
          onChange={handleLocationChange}
        />
        Any
        <p>
          <strong>3.) Which of the following sector interests you most?</strong>
        </p>
        <input
          type="checkbox"
          value="Technology"
          checked={sector.includes("Technology")}
          onChange={handleSectorChange}
        />
        Technology
        <input
          type="checkbox"
          value="Finance"
          checked={sector.includes("Finance")}
          onChange={handleSectorChange}
        />
        Finance
        <input
          type="checkbox"
          value="Healthcare"
          checked={sector.includes("Healthcare")}
          onChange={handleSectorChange}
        />
        Healthcare
        <input
          type="checkbox"
          value="Retail"
          checked={sector.includes("Retail")}
          onChange={handleSectorChange}
        />
        Retail
        <input
          type="checkbox"
          value="Energy"
          checked={sector.includes("Energy")}
          onChange={handleSectorChange}
        />
        Energy
        <input
          type="checkbox"
          value="Education"
          checked={sector.includes("Education")}
          onChange={handleSectorChange}
        />
        Education
        <p>
          <strong>4.) How would you characterize your work experience?</strong>
        </p>
        <label>
          <input
            type="radio"
            name="experience"
            value="Entry-level"
            checked={experience === "Entry-level"}
            onChange={handleExperienceChange}
          />
          Entry-level
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="1-3 years"
            checked={experience === "1-3 years"}
            onChange={handleExperienceChange}
          />
          1-3 years
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="3-5 years"
            checked={experience === "3-5 years"}
            onChange={handleExperienceChange}
          />
          3-5 years
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="5+ years"
            checked={experience === "5+ years"}
            onChange={handleExperienceChange}
          />
          5+ years
        </label>
        <p>
          <strong>
            5.) Please tell us anything else to help with your job search:
            (optional)
          </strong>
        </p>
        <textarea
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          maxLength={200}
        />
        <div>
          <button type="button" onClick={() => setShowModal(true)}>
            Submit
          </button>
          <button
            type="button"
            onClick={() => {
              setJobType([]);
              setLocation([]);
              setSector([]);
              setExperience("");
              setTextInput("");
            }}
          >
            Reset
          </button>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
      <ConfirmationModal
        show={showModal}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default HomePage;
