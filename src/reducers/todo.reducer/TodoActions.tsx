import { Todo } from "../../contexts/TodoContext";

export const addTodo = (name: string): TodoAction => {
  return { type: "ADD_TODO", payload: { id: -1, name, completed: false } };
};

export const toggleTodo = (id: number): TodoAction => {
  return { type: "TOGGLE_TODO", payload: id };
};

export const deleteTodo = (id: number): TodoAction => {
  return { type: "DELETE_TODO", payload: id };
};

export type TodoAction =
  | { type: "ADD_TODO"; payload: Todo }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "DELETE_TODO"; payload: number };
