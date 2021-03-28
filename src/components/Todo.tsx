import React from "react";
import { TodoType, ToggleTodo } from "./types";

interface TodoListItemProps {
  todo: TodoType;
  toggleTodo: ToggleTodo;
}

export const Todo: React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => toggleTodo(todo)}
        ></input>
        {todo.text}
      </label>
    </li>
  );
};
