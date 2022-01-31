import { useReducer } from "react";
import { TodoAction } from "../reducers/todo.reducer/TodoActions";

import TodoReducer from "../reducers/todo.reducer/TodoReducer";

export default function TodoReducerHooks(middlewareFn: Function) {
  const initialState = { todos: {}, lastTodoId: -1 };
  const [state, dispatch] = useReducer(TodoReducer, initialState);
  const dispatchWithMiddleWare = (action: TodoAction) => {
    middlewareFn(action);
    dispatch(action);
  };
  return { state, dispatchWithMiddleWare };
}
