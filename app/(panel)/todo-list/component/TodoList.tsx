import React from "react";
import { Box, List, Typography, CircularProgress } from "@mui/material";
import { Todo, FilterOption } from "../../../../types/todo";
import { TodoItem } from "./TodoItem";
import { useTranslation } from "react-i18next";

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
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "fa"; 

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
    return true;
  });

  return (
    <Box sx={{ direction: isRtl ? "rtl" : "ltr" }}>
      {isLoading ? (
        <Box sx={{ display: "flex", justifyContent: "center", my: { xs: 4, sm: 6 } }}>
          <CircularProgress aria-label={t("loadingTasks")} />
        </Box>
      ) : filteredTodos.length === 0 ? (
        <Typography
          sx={{
            textAlign: "center",
            color: "text.secondary",
            py: { xs: 4, sm: 6 },
            fontStyle: "italic",
            fontSize: { xs: "1rem", sm: "1.2rem" },
          }}
        >
          {t("noTasks")}
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