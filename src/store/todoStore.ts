import { create } from "zustand";
import { Todo } from "../types/todo";

interface TodoStore {
  todos: Todo[];
  nextId: number;
  addTodo: (todo: Todo) => void;
  loadTodos: (date?: string) => void;
}

const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  nextId: 1,
  addTodo: (todo) => set((state) => {
    const updatedTodos = [...state.todos, todo];
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    return {
      todos: updatedTodos,
      nextId: state.nextId + 1
    };
  }),
  loadTodos: (date?: string) => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      set({ todos: JSON.parse(storedTodos) }); const todos = JSON.parse(storedTodos);
      const maxId = todos.reduce((max: number, todo: Todo) => Math.max(max, todo.id), 0);
      set({ todos, nextId: maxId + 1 });
    }
  }
}));

export default useTodoStore;