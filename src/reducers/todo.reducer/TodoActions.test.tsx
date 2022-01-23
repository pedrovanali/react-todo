import { addTodo, deleteTodo, toggleTodo } from "./TodoActions";

describe("Todo action generator test suite", () => {
  it("should check if addTodo is being generated accordingly", () => {
    const addTodoActionCreated = addTodo("test");
    expect(addTodoActionCreated).toEqual({
      type: "ADD_TODO",
      payload: { id: -1, name: "test", completed: false },
    });
  });
  it("should check if toggleTodo is being generated accordingly", () => {
    const toggleTodoActionCreated = toggleTodo(1);
    expect(toggleTodoActionCreated).toEqual({
      type: "TOGGLE_TODO",
      payload: 1,
    });
  });
  it("should check if deleteTodo is being generated accordingly", () => {
    const deleteTodoActionCreated = deleteTodo(1);
    expect(deleteTodoActionCreated).toEqual({
      type: "DELETE_TODO",
      payload: 1,
    });
  });
});
