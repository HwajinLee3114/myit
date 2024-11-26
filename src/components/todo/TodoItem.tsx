import React from "react";
import { Todo } from "../../types/todo";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <div
      className={`flex gap-3 p-2 my-1 rounded-lg items-center`}
      style={{ backgroundColor: todo.bgColor }}
    >
      <div className="text-xl">{todo.emoji}</div>
      <div className="flex gap-2 w-full justify-between items-center">
        <div className="text-md break-words max-w-[250px] text-left">
          {todo.task}
        </div>
        <div className="text-sm text-gray-500">{todo.time}</div>
      </div>
    </div>
  );
};

export default TodoItem;
