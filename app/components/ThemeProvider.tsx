"use client";

import { ReactNode } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

export function CustomThemeProvider({ children }: { children: ReactNode }) {
  const { i18n } = useTranslation();
  const isRtl = i18n.language === "fa";

  const theme = createTheme({
    direction: isRtl ? "rtl" : "ltr",
    typography: {
      fontFamily: "'IRANSansXV', sans-serif !important",
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}