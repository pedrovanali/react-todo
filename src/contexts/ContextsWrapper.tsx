import React, { FC, ReactNode } from "react";
import TodoReducerHooks from "../hooks/TodoReducerHooks";
import { TodoStateContext, TodoDispatchContext } from "./TodoContext";

interface Props {
  children: ReactNode;
}

function ContextsWrapper(children: ReactNode) {
  const { state: todoState, dispatch: todoDispatch } = TodoReducerHooks();

  return (
    <TodoStateContext.Provider value={todoState}>
      <TodoDispatchContext.Provider value={todoDispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export default ContextsWrapper;
