"use client";

import React from "react";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {t("companyName", { defaultValue: "شرکت کمک‌رسان SOS" })}
          </Typography>
          <Button color="inherit" component={Link} href="/">
            {t("home", { defaultValue: "خانه" })}
          </Button>
          <Button color="inherit" component={Link} href="/todo-list">
            {t("todoList", { defaultValue: "لیست وظایف" })}
          </Button>
          <Button
            color="inherit"
            onClick={() => changeLanguage("en")}
            sx={{
              minWidth: "auto",
              px: 1,
              py: 0.5,
              fontSize: "1.2rem", 
              bgcolor: i18n.language === "en" ? "rgba(255, 255, 255, 0.2)" : "transparent",
              borderRadius: 1,
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 0.3)",
              },
            }}
            aria-label="Switch to English"
          >
            🇬🇧
          </Button>
          <Button
            color="inherit"
            onClick={() => changeLanguage("fa")}
            sx={{
              minWidth: "auto",
              px: 1,
              py: 0.5,
              fontSize: "1.2rem",
              bgcolor: i18n.language === "fa" ? "rgba(255, 255, 255, 0.2)" : "transparent",
              borderRadius: 1,
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 0.3)",
              },
            }}
            aria-label="Switch to Farsi"
          >
            🇮🇷
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}