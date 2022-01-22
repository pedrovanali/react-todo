import { addTodo } from "./TodoActions";

describe("Todo action generator test suite", () => {
  it("should check if addTodo is being generated accordingly", () => {
    const addTodoResult = addTodo("test");
    expect(addTodoResult).toEqual({
      type: "ADD_TODO",
      payload: { id: -1, name: "test", completed: false },
    });
  });
  it.todo("should check if toggleTodo is being generated accordingly");
  it.todo("should check if deleteTodo is being generated accordingly");
});
