import React from "react";
import { render, screen } from "@testing-library/react";
import Scoreboard from "../components/Scoreboard";

test("Scoreboard displays score and high score", () => {
  render(<Scoreboard score={5} highScore={10} />);
  expect(screen.getByText(/Score: 5/i)).toBeInTheDocument();
  expect(screen.getByText(/High Score: 10/i)).toBeInTheDocument();
});
