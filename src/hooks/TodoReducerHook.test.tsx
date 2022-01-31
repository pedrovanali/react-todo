import React from "react";
import { addTodo } from "../reducers/todo.reducer/TodoActions";
import TodoReducerHooks from "./TodoReducerHook";
import { renderHook, act } from "@testing-library/react-hooks";

describe("Todo reducer hooks", () => {
  it("should test todo reducer hook", () => {
    const mockMiddleware = jest.fn();
    const { result } = renderHook(() => TodoReducerHooks(mockMiddleware));
    const { state, dispatchWithMiddleWare } = result.current;
    act(() => {
      dispatchWithMiddleWare(addTodo("test"));
    });
    expect(mockMiddleware).toBeCalledTimes(1);
  });
});
