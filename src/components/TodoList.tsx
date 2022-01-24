import React, { useContext } from "react";
import { TodoDispatchContext, TodoStateContext } from "../contexts/TodoContext";
import { toggleTodo } from "../reducers/todo.reducer/TodoActions";
import { getAllTodos } from "../selectors/todo.selectors/TodoSelectors";

const TodoList = () => {
  const dispatch = useContext(TodoDispatchContext);
  const state = useContext(TodoStateContext);
  const { todos } = state;
  const todosList = getAllTodos(todos);
  const toggleTodoItem = (id: number) => {
    dispatch(toggleTodo(id));
  };
  return (
    <div>
      {todosList.map((todoItem, index) => (
        <div
          key={index}
          data-testid={todoItem.id}
          onClick={() => {
            toggleTodoItem(todoItem.id);
          }}
        >
          <span>{todoItem.name}</span>
          <strong> {todoItem.completed ? "YES" : "NO"}</strong>
          <br />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
