"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Button } from "@mui/material";

export const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Box sx={{ display: "flex", gap: 1, justifyContent: "center", mb: 2 }}>
      <Button
        variant={i18n.language === "en" ? "contained" : "outlined"}
        onClick={() => changeLanguage("en")}
      >
        {t("language.en")}
      </Button>
      <Button
        variant={i18n.language === "fa" ? "contained" : "outlined"}
        onClick={() => changeLanguage("fa")}
      >
        {t("language.fa")}
      </Button>
    </Box>
  );
};