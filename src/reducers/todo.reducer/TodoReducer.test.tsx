import { addTodo, deleteTodo, TodoAction, toggleTodo } from "./TodoActions";
import TodoReducer from "./TodoReducer";

describe("Todo reducer test suite", () => {
  it("should add todo", () => {
    const initialState = { todos: {}, lastTodoId: -1 };

    const firstTodoAddedState = TodoReducer(initialState, addTodo("new Todo"));
    expect(firstTodoAddedState).toEqual({
      lastTodoId: 0,
      todos: {
        0: { id: 0, completed: false, name: "new Todo" },
      },
    });
    const secondTodoAddedState = TodoReducer(
      firstTodoAddedState,
      addTodo("newer Todo")
    );
    expect(secondTodoAddedState).toEqual({
      lastTodoId: 1,
      todos: {
        0: { id: 0, completed: false, name: "new Todo" },
        1: { id: 1, completed: false, name: "newer Todo" },
      },
    });
  });
  it("should toggle todo true", () => {
    const initialState = {
      lastTodoId: 1,
      todos: {
        0: { id: 0, completed: false, name: "new Todo" },
        1: { id: 1, completed: false, name: "newer Todo" },
      },
    };
    const toggledTodoState = TodoReducer(initialState, toggleTodo(1));
    expect(toggledTodoState.todos[1].completed).toBeTruthy();
  });
  it("should toggle todo false", () => {
    const initialState = {
      lastTodoId: 1,
      todos: {
        0: { id: 0, completed: false, name: "new Todo" },
        1: { id: 1, completed: true, name: "newer Todo" },
      },
    };
    const toggledTodoState = TodoReducer(initialState, toggleTodo(1));
    expect(toggledTodoState.todos[1].completed).toBeFalsy();
  });
  it("should delete todo", () => {
    const initialState = {
      lastTodoId: 1,
      todos: {
        0: { id: 0, completed: false, name: "new Todo" },
        1: { id: 1, completed: true, name: "newer Todo" },
      },
    };
    const deletedTodoState = TodoReducer(initialState, deleteTodo(1));
    expect(deletedTodoState).toEqual({
      lastTodoId: 1,
      todos: {
        0: { id: 0, completed: false, name: "new Todo" },
      },
    });
  });
  it("should not change the state when sending not matched action", () => {
    const initialState = { todos: {}, lastTodoId: -1 };

    const invalidAction = TodoReducer(initialState, {} as TodoAction);
    expect(invalidAction).toEqual(initialState);
  });
});
