import React, { FC } from "react";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

const TodoPage: FC = () => {
  return (
    <div className="app">
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default TodoPage;
