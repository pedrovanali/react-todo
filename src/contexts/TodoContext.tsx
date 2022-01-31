import { createContext, Dispatch } from "react";
import HashMap from "../models/HashMap";
import { TodoAction } from "../reducers/todo.reducer/TodoActions";

export interface Todo {
  id: number;
  name: string;
  completed: boolean;
}

export interface PropsStateTodoContext {
  todos: HashMap<Todo>;
  lastTodoId: number;
}

export type PropsDispatchTodoContext = {
  dispatch: Dispatch<TodoAction> | ((action: TodoAction) => void);
};

const DEFAULT_STATE_VALUE = {
  todos: {} as HashMap<Todo>,
  lastTodoId: 0,
};

const TodoStateContext = createContext<
  PropsStateTodoContext
>(DEFAULT_STATE_VALUE);
const TodoDispatchContext = createContext<any>({});

export { TodoDispatchContext, TodoStateContext };
