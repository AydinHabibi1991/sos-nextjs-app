import { Todo } from "../types/todo";

export const fetchTodos = async (): Promise<Todo[]> => {
  const res = await fetch("http://localhost:3001/todos");
  if (!res.ok) throw new Error("Failed to fetch todos");
  return res.json();
};

export const addTodo = async (title: string): Promise<Todo> => {
  const res = await fetch("http://localhost:3001/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, completed: false }),
  });
  if (!res.ok) throw new Error("Failed to add todo");
  return res.json();
};

export const toggleTodo = async (id: number, completed: boolean): Promise<void> => {
  const res = await fetch(`http://localhost:3001/todos/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed: !completed }),
  });
  if (!res.ok) throw new Error("Failed to update todo");
};

export const deleteTodo = async (id: number): Promise<void> => {
  const res = await fetch(`http://localhost:3001/todos/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete todo");
};