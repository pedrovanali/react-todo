import React from "react";
import { addTodo, TodoAction } from "./todo.reducer/TodoActions";
import TodoEffects from "./TodoEffects";

describe("Todo effects test suite", () => {
  it("should test todo add todo effects", () => {
    const effects = TodoEffects(addTodo("test"));
    expect(effects).toBe(true);
  });
  it("should test todo effects", () => {
    const effects = TodoEffects({ type: "DELETE_TODO", payload: 1 });
    expect(effects).toBe(undefined);
  });
});
