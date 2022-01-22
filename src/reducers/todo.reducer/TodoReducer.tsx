import { PropsStateTodoContext } from "../../contexts/TodoContext";
import { TodoAction } from "./TodoActions";

export default function TodoReducer(
  state: PropsStateTodoContext,
  action: TodoAction
) {
  switch (action.type) {
    case "ADD_TODO":
      const { payload } = action;
      let { lastTodoId } = state;
      const currentTodoId = lastTodoId + 1;

      return {
        ...state,
        lastTodoId: currentTodoId,
        todos: {
          ...state.todos,
          [currentTodoId]: { ...payload, id: currentTodoId },
        },
      };
    default:
      return state;
  }
}
