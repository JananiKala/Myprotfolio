import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders portfolio content", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { name: /janani/i, level: 1 }),
  ).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /^projects$/i })).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /projects/i, level: 2 }),
  ).toBeInTheDocument();
});
