// src/components/todo/TodoItem.tsx
import React from "react";
import {
  Paper,
  ListItem,
  Checkbox,
  ListItemText,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Todo } from "@/types/todo";
import { useTranslation } from "react-i18next";

interface TodoItemProps {
  todo: Todo;
  onToggleTodo: (id: number, completed: boolean) => void;
  onDeleteClick: (id: number) => void;
  isLoading: boolean;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggleTodo,
  onDeleteClick,
  isLoading,
}) => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "fa"; // Check if language is Farsi for RTL

  return (
    <Paper
      elevation={2}
      sx={{
        mb: 2,
        borderRadius: 3,
        overflow: "hidden",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
        },
      }}
    >
      <ListItem
        sx={{
          py: { xs: 1, sm: 2 },
          px: { xs: 2, sm: 3 },
          bgcolor: todo.completed ? "grey.100" : "white",
          display: "flex",
          alignItems: "center",
          gap: 1,
          flexDirection: isRtl ? "row-reverse" : "row", // Reverse for RTL
          direction: isRtl ? "rtl" : "ltr", // RTL for Farsi
        }}
      >
        <Checkbox
          checked={todo.completed}
          onChange={() => onToggleTodo(todo.id, todo.completed)}
          disabled={isLoading}
          aria-label={t("toggleTask", { title: todo.title })}
          sx={{
            color: todo.completed ? "success.main" : "primary.main",
            p: { xs: 0, sm: 1 },
            order: isRtl ? 2 : 0, // Move checkbox to the end for RTL
          }}
        />
        <ListItemText
          primary={todo.title}
          sx={{
            textDecoration: todo.completed ? "line-through" : "none",
            color: todo.completed ? "text.secondary" : "text.primary",
            fontSize: { xs: "1rem", sm: "1.1rem" },
            fontWeight: "medium",
            wordBreak: "break-word",
            textAlign: isRtl ? "right" : "left", // Align text right for RTL
          }}
        />
        <IconButton
          edge="end"
          onClick={() => onDeleteClick(todo.id)}
          disabled={isLoading}
          aria-label={t("deleteTask", { title: todo.title })}
          sx={{
            transition: "all 0.3s ease",
            "&:hover": {
              color: "error.main",
              transform: "scale(1.1)",
            },
            p: { xs: 0, sm: 1 },
            order: isRtl ? -1 : 0, // Move delete button to the start for RTL
          }}
        >
          <DeleteIcon />
        </IconButton>
      </ListItem>
    </Paper>
  );
};