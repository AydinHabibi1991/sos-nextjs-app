// src/components/todo/TodoListClient.tsx
"use client";

import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Alert,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { FilterTodos } from "./FilterTodos";
import { AddTodoForm } from "./AddTodoForm";
import { TodoList } from "./TodoList";
import { DeleteDialog } from "./DeleteDialog";
import { FilterOption } from "@/types/todo";
import { useTodos } from "@/hooks/useTodos";

export default function TodoListClient() {
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState<FilterOption>("all");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState<number | null>(null);

  const { t, i18n } = useTranslation();
  const { todos, isLoading, error, handleAddTodo, handleToggleTodo, handleDeleteTodo } =
    useTodos();

  const isRtl = i18n.language === "fa"; // Check if language is Farsi for RTL

  const onAddTodo = () => {
    handleAddTodo(newTodo);
    setNewTodo("");
  };

  const onDeleteClick = (id: number) => {
    setDeleteDialogOpen(true);
    setTodoToDelete(id);
  };

  const onDeleteConfirm = () => {
    if (todoToDelete !== null) {
      handleDeleteTodo(todoToDelete);
      setDeleteDialogOpen(false);
      setTodoToDelete(null);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 800,
        margin: "0 auto",
        p: { xs: 2, sm: 4 },
        bgcolor: "grey.100",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: { xs: 2, sm: 3 },
        direction: isRtl ? "rtl" : "ltr", // RTL for Farsi
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: { xs: 2, sm: 4 },
          borderRadius: 4,
          bgcolor: "white",
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: { sm: "translateY(-5px)" },
          },
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{
            fontWeight: "bold",
            color: "primary.main",
            fontSize: { xs: "1.5rem", sm: "2rem" },
          }}
        >
          {t("taskManager")}
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: { xs: 2, sm: 3 } }}>
            {error}
          </Alert>
        )}

        <AddTodoForm
          newTodo={newTodo}
          onNewTodoChange={setNewTodo}
          onAddTodo={onAddTodo}
          isLoading={isLoading}
        />

        <FilterTodos filter={filter} onFilterChange={setFilter} disabled={isLoading} />

        <TodoList
          todos={todos}
          filter={filter}
          isLoading={isLoading}
          onToggleTodo={handleToggleTodo}
          onDeleteClick={onDeleteClick}
        />
      </Paper>

      <DeleteDialog
        open={deleteDialogOpen}
        onClose={() => {
          setDeleteDialogOpen(false);
          setTodoToDelete(null);
        }}
        onDelete={onDeleteConfirm}
      />
    </Box>
  );
}