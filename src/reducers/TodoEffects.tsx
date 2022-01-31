import { TodoAction } from "./todo.reducer/TodoActions";

const TodoEffects = (action: TodoAction) => {
  switch (action.type) {
    case "ADD_TODO":
      return true;
    default:
      break;
  }
};

export default TodoEffects;
