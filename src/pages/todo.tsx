import AddTodo from "../components/todo/AddTodo";
import TodoList from "../components/todo/TodoList";

export const TodoPage = () => {
  const today = new Date();

  return (
    <div className="flex flex-col gap-3 text-center items-center w-full">
      <h1 className="text-2xl font-bold mb-4">{today.toLocaleDateString()}</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};
