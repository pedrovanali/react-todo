import React from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import ContextsWrapper from "./contexts/ContextsWrapper";
import { TodoDispatchContext, TodoStateContext } from "./contexts/TodoContext";
import TodoReducerHooks from "./hooks/TodoReducerHooks";

function App() {
  return ContextsWrapper(
    <div className="App">
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
