import { Todo } from "../../contexts/TodoContext";

export const addTodo = (name: string): TodoAction => {
  return { type: "ADD_TODO", payload: { id: -1, name, completed: false } };
};

export type TodoAction =
  | { type: "ADD_TODO"; payload: Todo }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "DELETE_TODO"; payload: number };
