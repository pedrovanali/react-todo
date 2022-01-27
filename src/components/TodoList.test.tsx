import { createEvent, fireEvent, render, screen } from "@testing-library/react";
import { TodoDispatchContext, TodoStateContext } from "../contexts/TodoContext";
import { deleteTodo, toggleTodo } from "../reducers/todo.reducer/TodoActions";
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
  it("should toggle todo when clicked on todo item", () => {
    const todos = {
      0: { id: 0, completed: true, name: "new Todo" },
      1: { id: 1, completed: false, name: "newer Todo" },
    };
    const dispatch = jest.fn();
    render(
      <TodoStateContext.Provider value={{ lastTodoId: 1, todos }}>
        <TodoDispatchContext.Provider value={dispatch}>
          <TodoList />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    );
    const newTodoItem = screen.getByTestId(0);
    fireEvent.click(newTodoItem);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith(toggleTodo(0));
  });
  it("should check if delete button exists", () => {
    const todos = {
      0: { id: 0, completed: true, name: "new Todo" },
      1: { id: 1, completed: false, name: "newer Todo" },
    };

    render(
      <TodoStateContext.Provider value={{ lastTodoId: 1, todos }}>
        <TodoList />
      </TodoStateContext.Provider>
    );
    const deleteButton0 = screen.getByTestId("delete-0");
    const deleteButton1 = screen.getByTestId("delete-1");
    expect(deleteButton0).toBeInTheDocument();
    expect(deleteButton1).toBeInTheDocument();
  });
  it("should delete todo when clicked on todo delete button", () => {
    const todos = {
      0: { id: 0, completed: true, name: "new Todo" },
      1: { id: 1, completed: false, name: "newer Todo" },
    };
    const dispatch = jest.fn();
    render(
      <TodoStateContext.Provider value={{ lastTodoId: 1, todos }}>
        <TodoDispatchContext.Provider value={dispatch}>
          <TodoList />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    );
    const deleteButton0 = screen.getByTestId("delete-0");
    const clickEvent = createEvent.click(deleteButton0);
    clickEvent.preventDefault();
    clickEvent.stopPropagation();
    fireEvent.click(deleteButton0, clickEvent);

    expect(clickEvent.defaultPrevented).toBe(true);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith(deleteTodo(0));
  });
});

describe("Todo list styles and classes test suite", () => {
  it("should check if have class todo-list", () => {
    render(<TodoList />);
    const todoListContainer = screen.getByTestId("todo-list");
    expect(todoListContainer).toHaveClass("todo-list");
  });

  it("should check if have class todo-item", () => {
    const todos = {
      0: { id: 0, completed: true, name: "new Todo" },
      1: { id: 1, completed: false, name: "newer Todo" },
    };
    const dispatch = jest.fn();
    render(
      <TodoStateContext.Provider value={{ lastTodoId: 1, todos }}>
        <TodoDispatchContext.Provider value={dispatch}>
          <TodoList />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    );
    const newTodoItem = screen.getByTestId(0);
    expect(newTodoItem).toHaveClass("todo-item");
  });
});
