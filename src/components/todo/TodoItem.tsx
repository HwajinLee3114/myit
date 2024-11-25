import React from "react";
import { Todo } from "../../types/todo";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <div className={`flex gap-3 p-2 my-1 rounded-lg bg-${todo.bgColor}`}>
      <span className="text-xl">{todo.emoji}</span>
      <div className="flex w-full justify-between items-center">
        <div className="text-lg">{todo.task}</div>
        <div className="text-sm text-gray-500">{todo.time}</div>
      </div>
    </div>
  );
};

export default TodoItem;
