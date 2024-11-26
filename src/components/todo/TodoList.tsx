import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import useTodoStore from "../../store/todoStore";
import ExportButton from "../common/ExportButton";

const TodoList: React.FC = () => {
  const { todos, loadTodos } = useTodoStore();

  const sortedTodos = todos.sort((a, b) => {
    const timeA = a.time ? a.time.split(":").map(Number) : [Infinity, Infinity];
    const timeB = b.time ? b.time.split(":").map(Number) : [Infinity, Infinity];

    return timeA[0] === timeB[0] ? timeA[1] - timeB[1] : timeA[0] - timeB[0];
  });

  useEffect(() => {
    loadTodos();
  }, [loadTodos]);

  return (
    <>
      <div id="todo-list" className="w-full sm:w-96 p-3">
        <div className="min-h-64 bg-yellow-100 rounded-lg p-6">
          {sortedTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
      {todos && todos.length > 0 && <ExportButton targetId="todo-list" />}
    </>
  );
};

export default TodoList;
