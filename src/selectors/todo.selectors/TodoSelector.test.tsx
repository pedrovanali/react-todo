import { getAllTodos } from "./TodoSelectors";

describe("TodoSelector test suite", () => {
  it("should check if array is being parsed from hash", () => {
    const todos = {
      0: { id: 0, completed: false, name: "new Todo" },
      1: { id: 1, completed: false, name: "newer Todo" },
    };
    const todoArray = getAllTodos(todos);
    expect(todoArray).toEqual([
      { id: 0, completed: false, name: "new Todo" },
      { id: 1, completed: false, name: "newer Todo" },
    ]);
  });
});
