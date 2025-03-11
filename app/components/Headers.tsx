"use client";

import React from "react";
import Image from "next/image";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#fff",
        boxShadow: 3,
        width: "100%",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link href="/" passHref>
            <Image src="/Group.svg" alt="Logo" width={200} height={50} />
          </Link>
        </Box>

        <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              gap: 2,
            }}
          >
            <Button color="primary" component={Link} href="/">
              {t("home", { defaultValue: "خانه" })}
            </Button>
            <Button color="primary" component={Link} href="/todo-list">
              {t("todoList", { defaultValue: "لیست وظایف" })}
            </Button>
            <Button color="primary" component={Link} href="/healthcare-centers">
              {t("healthcareCenters", {
                defaultValue: "مراکز خدمات درمانی",
              })}
            </Button>
            <Button color="primary" component={Link} href="/branches">
              {t("branches", { defaultValue: "شعبه‌های ما" })}
            </Button>
            <Button color="primary" component={Link} href="/faq">
              {t("faq", { defaultValue: "سوال‌‌های متداول" })}
            </Button>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", sm: "none" },
              alignItems: "center",
            }}
          >
            <Button color="primary" component={Link} href="/todo-list">
              {t("todoList", { defaultValue: "لیست وظایف" })}
            </Button>
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <Button variant="contained" color="primary" component={Link} href="/login">
              {t("loginActivation", { defaultValue: "ورود و فعالسازی" })}
            </Button>
          </Box>
          <Button
            color="primary"
            onClick={() => changeLanguage("en")}
            sx={{
              minWidth: "auto",
              px: 1,
              py: 0.5,
              fontSize: "1.2rem",
              bgcolor: i18n.language === "en" ? "rgba(0, 0, 0, 0.1)" : "transparent",
              borderRadius: 1,
              "&:hover": { bgcolor: "rgba(0, 0, 0, 0.15)" },
            }}
            aria-label={t("language.en", { defaultValue: "English" })}
          >
            🇬🇧
          </Button>
          <Button
            color="primary"
            onClick={() => changeLanguage("fa")}
            sx={{
              minWidth: "auto",
              px: 1,
              py: 0.5,
              fontSize: "1.2rem",
              bgcolor: i18n.language === "fa" ? "rgba(0, 0, 0, 0.1)" : "transparent",
              borderRadius: 1,
              "&:hover": { bgcolor: "rgba(0, 0, 0, 0.15)" },
            }}
            aria-label={t("language.fa", { defaultValue: "Farsi" })}
          >
            🇮🇷
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
