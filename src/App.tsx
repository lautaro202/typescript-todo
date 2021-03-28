import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Todo } from "./components/Todo";
import { addtodo, TodoType, ToggleTodo } from "./components/types";
import { TodoList } from "./components/TodoList";
import { AddTodo } from "./components/AddTodo";
const initialTodos: Array<TodoType> = [];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const addtodo: addtodo = (newTodo) => {
    newTodo.trim() && setTodos([...todos, { text: newTodo, complete: false }]);
  };

  return (
    <div className="container">
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodo addTodo={addtodo} />
    </div>
  );
}

export default App;
