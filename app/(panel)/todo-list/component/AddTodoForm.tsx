// src/components/todo/AddTodoForm.tsx
import React from "react";
import { Box, TextField, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface AddTodoFormProps {
  newTodo: string;
  onNewTodoChange: (value: string) => void;
  onAddTodo: () => void;
  isLoading: boolean;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({
  newTodo,
  onNewTodoChange,
  onAddTodo,
  isLoading,
}) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", sm: "row" },
      gap: 2,
      mb: { xs: 3, sm: 4 },
    }}
  >
    <TextField
      label="New Task"
      value={newTodo}
      onChange={(e) => onNewTodoChange(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && onAddTodo()}
      fullWidth
      variant="outlined"
      disabled={isLoading}
      aria-label="Enter new task"
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: 2,
          transition: "all 0.3s ease",
          "&:hover fieldset": {
            borderColor: "primary.main",
          },
        },
      }}
    />
    <Button
      variant="contained"
      color="primary"
      onClick={onAddTodo}
      disabled={isLoading || !newTodo.trim()}
      startIcon={<AddIcon />}
      aria-label="Add task"
      sx={{
        borderRadius: 2,
        px: { xs: 3, sm: 4 },
        py: 1,
        fontSize: { xs: "0.9rem", sm: "1rem" },
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
        },
        flexShrink: 0,
      }}
    >
      Add
    </Button>
  </Box>
);