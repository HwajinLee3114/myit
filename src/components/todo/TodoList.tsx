import React from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../../types/todo";

interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  const sortedTodos = todos.sort((a, b) => {
    const timeA = a.time ? a.time.split(":").map(Number) : [Infinity, Infinity];
    const timeB = b.time ? b.time.split(":").map(Number) : [Infinity, Infinity];

    return timeA[0] === timeB[0] ? timeA[1] - timeB[1] : timeA[0] - timeB[0];
  });

  return (
    <div id="todo-list" className="w-full sm:w-96 p-3">
      <div className="min-h-64 bg-yellow-100 rounded-lg p-6">
        {sortedTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
