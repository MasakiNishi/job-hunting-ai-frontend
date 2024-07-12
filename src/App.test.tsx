/* Job Hunting AI Tool: App.test.tsx
Members: Masaki Nishi, Alexander Wong, Susan Joh, and Christian McKinnon
Project Parter: Professor Gates
CS 467 Portfolio Project */

import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
