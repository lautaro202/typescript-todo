import React from "react";
import { Todo } from "./Todo";
import { TodoType, ToggleTodo } from "./types";

interface TodoListProps {
  todos: Array<TodoType>;
  toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return <Todo key={todo.text} todo={todo} toggleTodo={toggleTodo} />;
      })}
    </ul>
  );
};
