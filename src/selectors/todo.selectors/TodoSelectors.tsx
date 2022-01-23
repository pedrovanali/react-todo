import { Todo } from "../../contexts/TodoContext";
import HashMap from "../../models/HashMap";

export const getAllTodos = (todos: HashMap<Todo>): Array<Todo> => {
  return Object.keys(todos).map((todoKey) => todos[todoKey]);
};
