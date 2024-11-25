import React, { useState } from "react";
import AddTodo from "../components/todo/AddTodo";
import TodoList from "../components/todo/TodoList";
import ExportButton from "../components/common/ExportButton";
import { Todo } from "../types/todo";

export const TodoPage = () => {
  const today = new Date();

  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (newTodo: Todo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="flex flex-col gap-3 text-center">
      <h1 className="text-2xl font-bold mb-4">{today.toLocaleDateString()}</h1>
      <AddTodo onAdd={handleAddTodo} />
      <TodoList todos={todos} />
      {todos && todos.length > 0 && <ExportButton targetId="todo-list" />}
    </div>
  );
};
