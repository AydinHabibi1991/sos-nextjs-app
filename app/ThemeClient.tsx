// src/ThemeClient.tsx
"use client";

import { useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useTranslation } from "react-i18next";
import theme from "./styles/theme";

export default function ThemeClient({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();
  const isRtl = i18n.language === "fa";

  // Create a dynamic theme based on the language direction
  const dynamicTheme = createTheme({
    ...theme,
    direction: isRtl ? "rtl" : "ltr",
    typography: {
      ...theme.typography,
      fontFamily: isRtl
        ? "'Vazirmatn', sans-serif"
        : "'Geist', 'Geist Mono', sans-serif",
    },
  });

  // Update the document direction dynamically
  useEffect(() => {
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [isRtl, i18n.language]);

  return (
    <ThemeProvider theme={dynamicTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}