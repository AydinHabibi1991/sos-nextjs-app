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

  const isRtl = i18n.language === "fa";

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
        width: "100%",
        background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
        minHeight: "100vh",
        py: { xs: 2, sm: 4 },
      }}
    >
      <Box
        sx={{
          maxWidth: 800,
          mx: "auto",
          px: { xs: 2, sm: 4 },
          display: "flex",
          flexDirection: "column",
          gap: { xs: 2, sm: 3 },
          direction: isRtl ? "rtl" : "ltr",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: { xs: 2, sm: 4 },
            borderRadius: 4,
            bgcolor: "white",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: 6,
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
    </Box>
  );
}
