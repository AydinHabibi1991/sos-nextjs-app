
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
  const isRtl = i18n.language === "fa"; 

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: isRtl ? "row-reverse" : "row" }, 
        gap: 2,
        mb: { xs: 3, sm: 4 },
        direction: isRtl ? "rtl" : "ltr", 
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
            textAlign: isRtl ? "right" : "left", 
          },
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={onAddTodo}
        disabled={isLoading || !newTodo.trim()}
        startIcon={isRtl ? null : <AddIcon />} 
        endIcon={isRtl ? <AddIcon /> : null} 
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