import { PropsStateTodoContext } from "../../contexts/TodoContext";
import { TodoAction } from "./TodoActions";

export default function TodoReducer(
  state: PropsStateTodoContext,
  action: TodoAction
) {
  switch (action.type) {
    case "ADD_TODO":
      const { payload: addPayload } = action;
      let { lastTodoId } = state;
      const currentTodoId = lastTodoId + 1;

      return {
        ...state,
        lastTodoId: currentTodoId,
        todos: {
          ...state.todos,
          [currentTodoId]: { ...addPayload, id: currentTodoId },
        },
      };
    case "TOGGLE_TODO":
      const { payload: toggleTodoId } = action;
      const { todos } = state;
      return {
        ...state,
        todos: {
          ...todos,
          [toggleTodoId]: {
            ...todos[toggleTodoId],
            completed: !todos[toggleTodoId].completed,
          },
        },
      };
    case "DELETE_TODO":
      const { payload: deleteTodoId } = action;
      const { todos: todoItems } = state;
      const { [deleteTodoId]: deleted, ...remainingTodos } = todoItems;
      return {
        ...state,
        todos: {
          ...remainingTodos,
        },
      };
    default:
      return state;
  }
}
