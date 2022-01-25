import React from "react";
import "./App.scss";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import ContextsWrapper from "./contexts/ContextsWrapper";

function App() {
  return ContextsWrapper(
    <div className="app">
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
