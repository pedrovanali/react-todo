import React, { FC, useContext, useState } from "react";
import { TodoDispatchContext } from "../contexts/TodoContext";
import { addTodo } from "../reducers/todo.reducer/TodoActions";

export interface AddTodoProps {}

const AddTodo: FC<AddTodoProps> = () => {
  const dispatch = useContext(TodoDispatchContext);
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const handleAddTodo = () => {
    dispatch(addTodo(inputValue));
    setInputValue("");
  };

  return (
    <div>
      <label htmlFor="add-todo-input">New todo item</label>
      <input
        type="text"
        id="add-todo-input"
        data-testid="add-todo-input"
        placeholder="Fill in your Todo"
        onChange={handleInputValue}
        value={inputValue}
      ></input>
      <button onClick={handleAddTodo}>Add todo</button>
    </div>
  );
};

export default AddTodo;
