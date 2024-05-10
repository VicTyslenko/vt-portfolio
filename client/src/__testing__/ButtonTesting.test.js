import Button from "../components/Button/Button";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Button Component", () => {
  test("renders its children", () => {
    render(<Button>Click me!</Button>);
    const button = screen.getByText("Click me!");
    expect(button).toBeInTheDocument();
  });
});
