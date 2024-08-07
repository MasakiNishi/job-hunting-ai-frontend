/* Job Hunting AI Tool: HomePage.tsx
 * Members: Masaki Nishi, Christian McKinnon, Susan Joh, and Alexander Wong
 * Project Partner: Professor Gates
 * CS 467 Portfolio Project */

/* HomePage.tsx represents the "My Search" page and contains the form that collects
our user data that is sent to the Backend via the axios HTTP client. */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ConfirmationModal from "../components/ConfirmationModal";

// Create variables for user input as str or arrays that are sent to backend
const HomePage: React.FC = () => {
  const [jobType, setJobType] = useState<string[]>([]);
  const [arrangement, setArrangement] = useState<string[]>([]);
  const [sector, setSector] = useState<string[]>([]);
  const [experience, setExperience] = useState<string>("");
  const [textInput, setTextInput] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const navigate = useNavigate();

  // Functional component to handle state change in Job Type Check Box
  const handleJobTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setJobType((prevJobType) =>
      prevJobType.includes(value)
        ? prevJobType.filter((job) => job !== value)
        : [...prevJobType, value],
    );
  };

  // Functional component to handle state changein Arrangement Check Box
  const handleArrangementChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setArrangement((prevArrangement) =>
      prevArrangement.includes(value)
        ? prevArrangement.filter((arr) => arr !== value)
        : [...prevArrangement, value],
    );
  };

  // Functional component to handle state change in Sector Check Box
  const handleSectorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSector((prevSector) =>
      prevSector.includes(value)
        ? prevSector.filter((sector) => sector !== value)
        : [...prevSector, value],
    );
  };

  // Functional component to handle state change in Work Experience Check Box
  const handleExperienceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExperience(e.target.value);
  };

  /* Functional component to ensure the required data is inputted by user,
   * otherwise an error message presents at the bottom of the page. */
  const validateForm = () => {
    if (jobType.length === 0) {
      window.alert("Please select at least one job type.");
      return false;
    }
    if (arrangement.length === 0) {
      window.alert("Please select at least one job arrangement.");
      return false;
    }
    if (sector.length === 0) {
      window.alert("Please select at least one sector.");
      return false;
    }
    if (!experience) {
      window.alert("Please select your work experience.");
      return false;
    }
    return true;
  };

  // Functional component that prompts Confirmation Pop-up Window
  const handleSubmit = () => {
    // Checks if any question is unanswered
    if (!validateForm()) {
      setShowModal(false);
    } else {
      // Only display pop-up when questions = answered
      setShowModal(true);
    }
    return;
  };

  /* handleConfirm is an async component which takes in the user input
   * data from the below form and sends it to the Flask backend via
   * a try-catch statement */
  const handleConfirm = async () => {
    try {
      const info = { jobType, arrangement, sector, experience, textInput };
      // Set the PORT for the Flask backend to 5001
      const backendAPI = process.env.REACT_APP_BACKEND_API;
      // Set our PORT to match the Cloud configuration
      const response = await axios.post(`${backendAPI}/api/submit`, info);
      const data = response.data;
      // A confirmation message that will print to browser inspect window
      console.log("Jobs info transferred to Flask backend:", info);
      navigate("/job-results", {
        // state defines how the response from backend is stored in the frontend
        state: { inputInfo: info, jobRankings: data },
      });
    } catch (error: any) {
      // An error message in the event the form submission fails
      console.error("Failed to submit form due to error.", error);
      window.alert("Error encountered, please try again later.");
    }
    setShowModal(false);
  };

  // Variable for canceling submission
  const handleCancel = () => {
    setShowModal(false);
  };

  // Form Data:
  return (
    <div className="outer-container">
      <h1 id="home-title">Find Your Dream Job!</h1>
      <p className="instructions">
        Please answer the below questions to discover personalized job
        recommendations.
      </p>
      <form id="home-form">
        <p>
          <strong>1. What type of job are you looking for? [Required]</strong>
        </p>
        <input
          type="checkbox"
          value="Full-time"
          checked={jobType.includes("Full-time")}
          onChange={handleJobTypeChange}
        />
        Full-time&nbsp;&nbsp;&nbsp;
        <input
          type="checkbox"
          value="Part-time"
          checked={jobType.includes("Part-time")}
          onChange={handleJobTypeChange}
        />
        Part-time&nbsp;&nbsp;&nbsp;
        <input
          type="checkbox"
          value="Freelance"
          checked={jobType.includes("Freelance")}
          onChange={handleJobTypeChange}
        />
        Freelance&nbsp;&nbsp;&nbsp;
        <input
          type="checkbox"
          value="Internship"
          checked={jobType.includes("Internship")}
          onChange={handleJobTypeChange}
        />
        Internship&nbsp;&nbsp;&nbsp;
        <p>
          <strong>
            2. Please tell us about your job arrangement preferences. [Required]
          </strong>
        </p>
        <input
          type="checkbox"
          value="Remote"
          checked={arrangement.includes("Remote")}
          onChange={handleArrangementChange}
        />
        Remote&nbsp;&nbsp;&nbsp;
        <input
          type="checkbox"
          value="On-site"
          checked={arrangement.includes("On-site")}
          onChange={handleArrangementChange}
        />
        On-site&nbsp;&nbsp;&nbsp;
        <input
          type="checkbox"
          value="Hybrid"
          checked={arrangement.includes("Hybrid")}
          onChange={handleArrangementChange}
        />
        Hybrid&nbsp;&nbsp;&nbsp;
        <p>
          <strong>
            3. Which of the following sector interests you most? [Required]
          </strong>
        </p>
        <input
          type="checkbox"
          value="Technology"
          checked={sector.includes("Technology")}
          onChange={handleSectorChange}
        />
        Technology&nbsp;&nbsp;&nbsp;
        <input
          type="checkbox"
          value="Finance"
          checked={sector.includes("Finance")}
          onChange={handleSectorChange}
        />
        Finance&nbsp;&nbsp;&nbsp;
        <input
          type="checkbox"
          value="Healthcare"
          checked={sector.includes("Healthcare")}
          onChange={handleSectorChange}
        />
        Healthcare&nbsp;&nbsp;&nbsp;
        <input
          type="checkbox"
          value="Retail"
          checked={sector.includes("Retail")}
          onChange={handleSectorChange}
        />
        Retail&nbsp;&nbsp;&nbsp;
        <input
          type="checkbox"
          value="Energy"
          checked={sector.includes("Energy")}
          onChange={handleSectorChange}
        />
        Energy&nbsp;&nbsp;&nbsp;
        <input
          type="checkbox"
          value="Education"
          checked={sector.includes("Education")}
          onChange={handleSectorChange}
        />
        Education&nbsp;&nbsp;&nbsp;
        <p>
          <strong>
            4. How would you characterize your work experience? [Required]
          </strong>
        </p>
        <label>
          <input
            type="radio"
            name="experience"
            value="Entry-level"
            checked={experience === "Entry-level"}
            onChange={handleExperienceChange}
          />
          Entry-level&nbsp;&nbsp;&nbsp;
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="Junior-level"
            checked={experience === "Junior-level"}
            onChange={handleExperienceChange}
          />
          Junior-level&nbsp;&nbsp;&nbsp;
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="Intermediate-level"
            checked={experience === "Intermediate-level"}
            onChange={handleExperienceChange}
          />
          Intermediate-level&nbsp;&nbsp;&nbsp;
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="Senior-level"
            checked={experience === "Senior-level"}
            onChange={handleExperienceChange}
          />
          Senior-level&nbsp;&nbsp;&nbsp;
        </label>
        <p>
          <strong>
            5. Please tell us anything else to help with your job search:
            [Optional]
          </strong>
        </p>
        <textarea
          className="textbox-container"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          maxLength={200}
          placeholder="Limit: 200 characters"
        />
        <div className="button-container">
          <button type="button" onClick={() => handleSubmit()}>
            Submit
          </button>
          <button
            type="button"
            onClick={() => {
              setJobType([]);
              setArrangement([]);
              setSector([]);
              setExperience("");
              setTextInput("");
            }}
          >
            Reset
          </button>
        </div>
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
