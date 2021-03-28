export type TodoType = {
  text: string;
  complete: boolean;
};

export type ToggleTodo = (selectedTodo: TodoType) => void;

export type addtodo = (newTodo: string) => void;
