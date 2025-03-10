import { useState, useEffect } from "react";
import { Todo } from "../types/todo";
import { fetchTodos, addTodo, toggleTodo, deleteTodo } from "../utils/api";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTodos = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchTodos();
        setTodos(data);
      } catch (err) {
        setError((err as Error).message || "An error occurred while fetching todos.");
      } finally {
        setIsLoading(false);
      }
    };
    loadTodos();
  }, []);

  const handleAddTodo = async (title: string) => {
    if (!title.trim()) return;
    setError(null);
    try {
      const newTodo = await addTodo(title);
      setTodos((prev) => [...prev, newTodo]);
    } catch (err) {
      setError((err as Error).message || "An error occurred while adding the todo.");
    }
  };

  const handleToggleTodo = async (id: number, completed: boolean) => {
    setError(null);
    try {
      await toggleTodo(id, completed);
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, completed: !completed } : todo
        )
      );
    } catch (err) {
      setError((err as Error).message || "An error occurred while updating the todo.");
    }
  };

  const handleDeleteTodo = async (id: number) => {
    setError(null);
    try {
      await deleteTodo(id);
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    } catch (err) {
      setError((err as Error).message || "An error occurred while deleting the todo.");
    }
  };

  return {
    todos,
    isLoading,
    error,
    handleAddTodo,
    handleToggleTodo,
    handleDeleteTodo,
  };
};