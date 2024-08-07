/* Job Hunting AI Tool: About.tsx
 * Members: Masaki Nishi, Christian McKinnon, Susan Joh, and Alexander Wong
 * Project Partner: Professor Gates
 * CS 467 Portfolio Project */

/* About.tsx is a page that briefly describes the purpose and requirements
of our project to those seeking more information about it. */

import React from "react";

const About: React.FC = () => {
  return (
    <div className="main-text">
      <h1>Learn More!</h1>
      <p className="about-para">
        In the modern job market, finding the right job can be a daunting task,
        especially for students and new job seekers. Our project aims to
        simplify this process by developing an intelligent job search website
        powered by AI and machine learning, guided by a series of questions from
        the user. What sets our project apart is its dual focus on providing
        highly personalized job recommendations and leveraging advanced data
        analytics to understand and predict job market trends. By combining web
        scraping, APIs, text mining, and machine learning, we aim to create a
        platform that not only matches users with relevant job opportunities,
        but also provides insights into the factors that influence job success.
        <br></br>
        <br></br>
        Our platform is designed to bridge the gap between job seekers and
        employers by offering a seamless, data-driven job search experience.
        Through user-friendly interfaces and powerful backend analytics, we
        aspire to make job searching more efficient and effective. Whether it's
        understanding the correlation between certain skills and job
        availability or predicting the best locations for specific job roles,
        our project is geared towards making informed job searching a reality.
      </p>
    </div>
  );
};

export default About;
