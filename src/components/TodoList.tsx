import React, { useContext } from "react";
import { TodoDispatchContext, TodoStateContext } from "../contexts/TodoContext";
import { getAllTodos } from "../selectors/todo.selectors/TodoSelectors";

const TodoList = () => {
  const dispatch = useContext(TodoDispatchContext);
  const state = useContext(TodoStateContext);
  console.log(state);
  const { todos } = state;
  const todosList = getAllTodos(todos);
  return (
    <div>
      {todosList.map((todoItem) => (
        <>
          <strong>
            {todoItem.name} - {todoItem.completed ? "YES" : "NO"}
          </strong>
          <br />
        </>
      ))}
    </div>
  );
};

export default TodoList;
