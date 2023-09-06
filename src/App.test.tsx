import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders click handleIncrement", () => {
  render(<App />);
  const increaseButton = screen.getByText("Increase");
  const countDisplay = screen.getByRole("react");
  fireEvent.click(increaseButton);
  expect(countDisplay).toHaveTextContent("Learn React2");
});
