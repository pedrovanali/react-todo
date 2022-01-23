import React, { useContext } from "react";
import { TodoDispatchContext, TodoStateContext } from "../contexts/TodoContext";
import { getAllTodos } from "../selectors/todo.selectors/TodoSelectors";

const TodoList = () => {
  const dispatch = useContext(TodoDispatchContext);
  const state = useContext(TodoStateContext);
  const { todos } = state;
  const todosList = getAllTodos(todos);
  return (
    <div>
      {todosList.map((todoItem) => (
        <div key={todoItem.id}>
          <span>{todoItem.name}</span>
          <strong> {todoItem.completed ? "YES" : "NO"}</strong>
          <br />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
