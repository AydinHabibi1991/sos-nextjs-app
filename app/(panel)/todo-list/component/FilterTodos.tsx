// src/components/todo/FilterTodos.tsx
import React from "react";
import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { FilterOption } from "@/types/todo";

interface FilterTodosProps {
  filter: FilterOption;
  onFilterChange: (newFilter: FilterOption) => void;
  disabled: boolean;
}

export const FilterTodos: React.FC<FilterTodosProps> = ({
  filter,
  onFilterChange,
  disabled,
}) => {
  const handleFilterChange = (
    event: React.MouseEvent<HTMLElement>,
    newFilter: FilterOption | null
  ) => {
    if (newFilter !== null) {
      onFilterChange(newFilter);
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mb: { xs: 2, sm: 3 } }}>
      <ToggleButtonGroup
        value={filter}
        exclusive
        onChange={handleFilterChange}
        aria-label="Filter tasks"
        disabled={disabled}
        size="small"
        sx={{
          "& .MuiToggleButton-root": {
            px: { xs: 2, sm: 3 },
            py: 1,
            fontSize: { xs: "0.8rem", sm: "0.9rem" },
            fontWeight: "medium",
            borderRadius: 2,
            transition: "all 0.3s ease",
            "&.Mui-selected": {
              bgcolor: "primary.main",
              color: "white",
              "&:hover": {
                bgcolor: "primary.dark",
              },
            },
            "&:hover": {
              bgcolor: "action.hover",
            },
          },
        }}
      >
        <ToggleButton value="all" aria-label="Show all tasks">
          All
        </ToggleButton>
        <ToggleButton value="completed" aria-label="Show completed tasks">
          Completed
        </ToggleButton>
        <ToggleButton value="incomplete" aria-label="Show incomplete tasks">
          Incomplete
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};