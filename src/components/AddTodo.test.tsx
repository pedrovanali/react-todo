import { fireEvent, render, screen } from "@testing-library/react";
import { TodoDispatchContext } from "../contexts/TodoContext";
import AddTodo from "./AddTodo";

describe("Test suite for AddTodo", () => {
  it("should have placeholder", () => {
    render(<AddTodo />);
    const addTodoInput = screen.getByPlaceholderText(
      "Fill in your Todo"
    ) as HTMLInputElement;
    expect(addTodoInput).toBeInTheDocument();
  });
  it("should have label", () => {
    render(<AddTodo />);
    const addTodoLabel = screen.getByText("New todo item") as HTMLLabelElement;
    expect(addTodoLabel).toBeInTheDocument();
  });
  it("should have button", () => {
    render(<AddTodo />);
    const addTodoButton = screen.getByText("Add todo") as HTMLLabelElement;
    expect(addTodoButton).toBeInTheDocument();
  });

  it("should check if the input value is being updated accordingly", () => {
    render(<AddTodo />);
    const addTodoInput = screen.getByTestId(
      "add-todo-input"
    ) as HTMLInputElement;
    fireEvent.change(addTodoInput, {
      target: { value: "test" },
    });

    expect(addTodoInput.value).toEqual("test");
  });

  it("should call the dispatch", () => {
    const mockFn = jest.fn();
    render(
      <TodoDispatchContext.Provider value={mockFn}>
        <AddTodo />
      </TodoDispatchContext.Provider>
    );
    const addTodoButton = screen.getByText("Add todo") as HTMLButtonElement;
    const addTodoInput = screen.getByTestId(
      "add-todo-input"
    ) as HTMLInputElement;
    fireEvent.change(addTodoInput, {
      target: { value: "test" },
    });
    fireEvent.click(addTodoButton);
    expect(mockFn).toHaveBeenCalled();
    expect(addTodoInput.value).toEqual("");
  });
});
