import React from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../../types/todo";

interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <div id="todo-list" className="w-full p-3 ">
      <div className="min-h-64 bg-yellow-100 rounded-lg p-6">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
