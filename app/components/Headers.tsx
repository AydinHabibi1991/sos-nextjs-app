import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import Link from "next/link";

export default function Header() {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            شرکت کمک‌رسان SOS
          </Typography>
          <Button color="inherit" component={Link} href="/">
            خانه
          </Button>
          <Button color="inherit" component={Link} href="/todo-list">
            لیست وظایف
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}