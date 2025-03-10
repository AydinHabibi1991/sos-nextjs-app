// src/components/todo/AddTodoForm.tsx
import React from "react";
import { Box, TextField, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useTranslation } from "react-i18next";

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
}) => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "fa"; // Check if language is Farsi for RTL

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: isRtl ? "row-reverse" : "row" }, // Reverse for RTL
        gap: 2,
        mb: { xs: 3, sm: 4 },
        direction: isRtl ? "rtl" : "ltr", // RTL for Farsi
      }}
    >
      <TextField
        label={t("newTask")}
        value={newTodo}
        onChange={(e) => onNewTodoChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onAddTodo()}
        fullWidth
        variant="outlined"
        disabled={isLoading}
        aria-label={t("newTask")}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: 2,
            transition: "all 0.3s ease",
            "&:hover fieldset": {
              borderColor: "primary.main",
            },
            textAlign: isRtl ? "right" : "left", // Align text right for RTL
          },
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={onAddTodo}
        disabled={isLoading || !newTodo.trim()}
        startIcon={isRtl ? null : <AddIcon />} // Remove icon for RTL, or use an RTL-friendly icon
        endIcon={isRtl ? <AddIcon /> : null} // Add icon at the end for RTL
        aria-label={t("add")}
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
        {t("add")}
      </Button>
    </Box>
  );
};