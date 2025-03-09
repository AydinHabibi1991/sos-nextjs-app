"use client";

import { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export default function TodoListClient() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState<"all" | "completed" | "incomplete">("all");

  useEffect(() => {
    async function fetchTodos() {
      const res = await fetch("http://localhost:3001/todos");
      const data = await res.json();
      setTodos(data);
    }
    fetchTodos();
  }, []);

  const addTodo = async () => {
    if (!newTodo.trim()) return;
    const res = await fetch("http://localhost:3001/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTodo, completed: false }),
    });
    const data = await res.json();
    setTodos([...todos, data]);
    setNewTodo("");
  };

  const toggleTodo = async (id: number, completed: boolean) => {
    await fetch(`http://localhost:3001/todos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !completed }),
    });
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !completed } : todo)));
  };

  const deleteTodo = async (id: number) => {
    await fetch(`http://localhost:3001/todos/${id}`, {
      method: "DELETE",
    });
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
    return true;
  });

  return (
    <Box>
      <Box sx={{ mb: 4, display: "flex", gap: 2 }}>
        <TextField
          label="New Task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={addTodo}>
          Add
        </Button>
      </Box>
      <Box sx={{ mb: 2 }}>
        <FormControl fullWidth>
          <InputLabel>Filter</InputLabel>
          <Select
            value={filter}
            onChange={(e) => setFilter(e.target.value as "all" | "completed" | "incomplete")}
            label="Filter"
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="completed">Completed</MenuItem>
            <MenuItem value="incomplete">Incomplete</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {filteredTodos.length === 0 ? (
        <Typography>No tasks found.</Typography>
      ) : (
        <List>
          {filteredTodos.map((todo) => (
            <ListItem key={todo.id} divider>
              <Checkbox
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id, todo.completed)}
              />
              <ListItemText
                primary={todo.title}
                sx={{ textDecoration: todo.completed ? "line-through" : "none" }}
              />
              <IconButton edge="end" onClick={() => deleteTodo(todo.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
}