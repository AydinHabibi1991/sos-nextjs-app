// src/components/todo/TodoList.tsx
import React from "react";
import { Box, List, Typography, CircularProgress } from "@mui/material";
import { Todo, FilterOption } from "../../../../types/todo";
import { TodoItem } from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  filter: FilterOption;
  isLoading: boolean;
  onToggleTodo: (id: number, completed: boolean) => void;
  onDeleteClick: (id: number) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  filter,
  isLoading,
  onToggleTodo,
  onDeleteClick,
}) => {
  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
    return true;
  });

  return (
    <Box>
      {isLoading ? (
        <Box sx={{ display: "flex", justifyContent: "center", my: { xs: 4, sm: 6 } }}>
          <CircularProgress aria-label="Loading tasks" />
        </Box>
      ) : filteredTodos.length === 0 ? (
        <Typography
          sx={{
            textAlign: "center",
            color: "text.secondary",
            py: { xs: 4, sm: 6 }, // Fixed syntax: removed invalid text
            fontStyle: "italic",
            fontSize: { xs: "1rem", sm: "1.2rem" },
          }}
        >
          No tasks found. Add a new task to get started!
        </Typography>
      ) : (
        <List sx={{ px: { xs: 0, sm: 1 } }}>
          {filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggleTodo={onToggleTodo}
              onDeleteClick={onDeleteClick}
              isLoading={isLoading}
            />
          ))}
        </List>
      )}
    </Box>
  );
};