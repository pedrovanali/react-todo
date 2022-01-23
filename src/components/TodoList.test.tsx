import { render, screen } from "@testing-library/react";
import { TodoStateContext } from "../contexts/TodoContext";
import TodoList from "./TodoList";

describe("Todo List test suite", () => {
  it("should render list with not finished todos", () => {
    const todos = {
      0: { id: 0, completed: false, name: "new Todo" },
      1: { id: 1, completed: false, name: "newer Todo" },
    };
    render(
      <TodoStateContext.Provider value={{ lastTodoId: 1, todos }}>
        <TodoList />
      </TodoStateContext.Provider>
    );

    const newTodo = screen.getByText("new Todo") as HTMLLabelElement;
    const newerTodo = screen.getByText("newer Todo") as HTMLLabelElement;
    expect(newTodo).toBeInTheDocument();
    expect(newerTodo).toBeInTheDocument();
  });

  it("should render list with finished todos", () => {
    const todos = {
      0: { id: 0, completed: true, name: "new Todo" },
      1: { id: 1, completed: false, name: "newer Todo" },
    };
    render(
      <TodoStateContext.Provider value={{ lastTodoId: 1, todos }}>
        <TodoList />
      </TodoStateContext.Provider>
    );

    const newTodo = screen.getByText("YES") as HTMLLabelElement;
    const newerTodo = screen.getByText("NO") as HTMLLabelElement;
    expect(newTodo).toBeInTheDocument();
    expect(newerTodo).toBeInTheDocument();
  });
});
