import React from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import { TodoDispatchContext, TodoStateContext } from "./contexts/TodoContext";
import TodoReducerHooks from "./hooks/TodoReducerHooks";

function App() {
  const { state: todoState, dispatch: todoDispatch } = TodoReducerHooks();
  return (
    <TodoStateContext.Provider value={todoState}>
      <TodoDispatchContext.Provider value={todoDispatch}>
        <div className="App">
          <AddTodo />
        </div>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export default App;
