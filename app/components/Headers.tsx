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
        {/* Left: Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link href="/" passHref>
            <Image src="/Group.svg" alt="Logo" width={200} height={50} />
          </Link>
        </Box>

        {/* Center: Navigation items */}
        <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
          {/* Desktop version */}
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
            <Button
              color="primary"
              component={Link}
              href="/todo-list"
              sx={{
                fontSize: { xs: "0.6rem", sm: "0.8rem" },
                px: { xs: 0.5, sm: 1 },
                py: { xs: 0.5, sm: 1 },
              }}
            >
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
          {/* Mobile version */}
          <Box
            sx={{
              display: { xs: "flex", sm: "none" },
              alignItems: "center",
            }}
          >
            <Button
              size="small"
              color="primary"
              component={Link}
              href="/todo-list"
              sx={{
                fontSize: "0.6rem",
                px: 0.5,
                py: 0.5,
              }}
            >
              {t("todoList", { defaultValue: "لیست وظایف" })}
            </Button>
          </Box>
        </Box>

        {/* Right: Login and language switchers */}
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
            <Image src="/icons8-us-flag-48.png" alt="English" width={24} height={24} />
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
            <Image src="/icons8-iran-48.png" alt="Farsi" width={24} height={24} />
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
