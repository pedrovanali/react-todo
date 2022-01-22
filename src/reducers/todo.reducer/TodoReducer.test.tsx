import { PropsStateTodoContext } from "../../contexts/TodoContext";
import { addTodo, TodoAction } from "./TodoActions";
import TodoReducer from "./TodoReducer";

describe("Todo reducer test suite", () => {
  it("should add todo", () => {
    const initialState = { todos: {}, lastTodoId: -1 };

    const firstTodoAdded = TodoReducer(initialState, addTodo("new Todo"));
    expect(firstTodoAdded).toEqual({
      lastTodoId: 0,
      todos: {
        0: { id: 0, completed: false, name: "new Todo" },
      },
    });
    const secondTodoAdded = TodoReducer(firstTodoAdded, addTodo("newer Todo"));
    expect(secondTodoAdded).toEqual({
      lastTodoId: 1,
      todos: {
        0: { id: 0, completed: false, name: "new Todo" },
        1: { id: 1, completed: false, name: "newer Todo" },
      },
    });
  });
  it.todo("should toggle todo");
  it.todo("should delete todo");
  it("should not change the state when sending not matched action", () => {
    const initialState = { todos: {}, lastTodoId: -1 };

    const invalidAction = TodoReducer(initialState, {} as TodoAction);
    expect(invalidAction).toEqual(initialState);
  });
});
