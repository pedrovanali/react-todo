import { useReducer } from "react";

import TodoReducer from "../reducers/todo.reducer/TodoReducer";

export default function TodoReducerHooks() {
  const initialState = { todos: {}, lastTodoId: -1 };
  const [state, dispatch] = useReducer(TodoReducer, initialState);
  return { state, dispatch };
}
