import React, { FormEvent, useState } from "react";
import { addtodo } from "./types";

interface addTodoFormProps {
  addTodo: addtodo;
}

export const AddTodo: React.FC<addTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setTodo] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const HandleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setTodo("");
  };
  return (
    <form>
      <input
        onChange={handleChange}
        type="text"
        value={newTodo}
        placeholder="Añadir Todo"
      ></input>
      <button onClick={HandleSubmit} type="submit">
        X
      </button>
    </form>
  );
};
