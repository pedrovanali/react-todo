import React, { ReactNode } from "react";
import TodoReducerHook from "../hooks/TodoReducerHook";
import TodoEffects from "../reducers/TodoEffects";
import { TodoStateContext, TodoDispatchContext } from "./TodoContext";

function ContextsWrapper(children: ReactNode) {
  const {state: todoState, dispatchWithMiddleWare: todoDispatch} = TodoReducerHook(TodoEffects);

  return (
    <TodoStateContext.Provider value={todoState}>
      <TodoDispatchContext.Provider value={todoDispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export default ContextsWrapper;
