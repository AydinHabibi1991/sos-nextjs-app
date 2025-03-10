import React from "react";
import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { FilterOption } from "@/types/todo";
import { useTranslation } from "react-i18next";

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
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "fa"; 

  const handleFilterChange = (
    event: React.MouseEvent<HTMLElement>,
    newFilter: FilterOption | null
  ) => {
    if (newFilter !== null) {
      onFilterChange(newFilter);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mb: { xs: 2, sm: 3 },
        direction: isRtl ? "rtl" : "ltr", 
      }}
    >
      <ToggleButtonGroup
        value={filter}
        exclusive
        onChange={handleFilterChange}
        aria-label={t("filterTasks")}
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
        <ToggleButton value="all" aria-label={t("all")}>
          {t("all")}
        </ToggleButton>
        <ToggleButton value="completed" aria-label={t("completed")}>
          {t("completed")}
        </ToggleButton>
        <ToggleButton value="incomplete" aria-label={t("incomplete")}>
          {t("incomplete")}
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};