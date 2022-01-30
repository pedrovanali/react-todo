import { render, screen } from "@testing-library/react";
import TodoPage from "./TodoPage";

describe("Todo Page test suite", () => {
  it("render todo page as expected", () => {
    render(<TodoPage />);
    const addTodo = screen.getByText("New todo item:");
    expect(addTodo).toBeInTheDocument();
  });
});
