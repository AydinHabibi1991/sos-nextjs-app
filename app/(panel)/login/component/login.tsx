"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Paper,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";

export default function LoginForm() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "fa";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

  };

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: { xs: 2, sm: 4 },
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={3}
          sx={{
            p: { xs: 2, sm: 4 },
            borderRadius: 2,
            direction: isRtl ? "rtl" : "ltr",
          }}
        >
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ color: "primary.main", fontWeight: "bold" }}
          >
            {t("loginActivation", { defaultValue: "Login & Activation" })}
          </Typography>
          <Box component="form" onSubmit={handleLogin} sx={{ mt: 2 }}>
            <TextField
              label={t("email", { defaultValue: "Email" })}
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              inputProps={{
                dir: isRtl ? "rtl" : "ltr",
              }}
            />
            <TextField
              label={t("password", { defaultValue: "Password" })}
              variant="outlined"
              fullWidth
              margin="normal"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              inputProps={{
                dir: isRtl ? "rtl" : "ltr",
              }}
            />
            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{ mt: 2, py: 1 }}
            >
              {t("loginActivation", { defaultValue: "Login & Activation" })}
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
