/* Job Hunting AI Tool: index.tsx
Members: Masaki Nishi, Christian McKinnon, Susan Joh, and Alexander Wong
Project Partner: Professor Gates
CS 467 Portfolio Project */

/**
 * index.js imports necessary components for app, handles the root element
 * setup, and renders the application in strict mode.
 */
import React from "react";
import ReactDOM from "react-dom/client";
//import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
