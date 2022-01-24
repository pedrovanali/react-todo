import React, { useContext } from "react";
import { TodoDispatchContext, TodoStateContext } from "../contexts/TodoContext";
import { deleteTodo, toggleTodo } from "../reducers/todo.reducer/TodoActions";
import { getAllTodos } from "../selectors/todo.selectors/TodoSelectors";

const TodoList = () => {
  const dispatch = useContext(TodoDispatchContext);
  const state = useContext(TodoStateContext);
  const { todos } = state;
  const todosList = getAllTodos(todos);
  const toggleTodoItem = (id: number) => {
    dispatch(toggleTodo(id));
  };
  const deleteTodoItem = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(deleteTodo(id));
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
          <button
            type="button"
            data-testid={`delete-${todoItem.id}`}
            onClick={(e) => {
              deleteTodoItem(e, todoItem.id);
            }}
          >
            delete
          </button>
          <br />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
