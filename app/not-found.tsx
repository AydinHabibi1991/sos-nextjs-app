import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

export default function Custom404() {
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
      <Container sx={{ textAlign: "center" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Image src="/11551765.jpg" alt="404 Not Found" width={300} height={300} />
        </Box>
        <Typography variant="h3" sx={{ mt: 2, color: "text.primary" }}>
            در دست ساخت
        </Typography>
        <Typography variant="body1" sx={{ mt: 1, color: "text.secondary" }}>
        این صفحه در حال حاضر در دست تعمیر و نگهداری برنامه‌ریزی شده می‌باشد.  به زودی بازخواهیم گشت.
        </Typography>
        <Link href="/" passHref>
          <Typography
            variant="button"
            sx={{
              mt: 3,
              display: "inline-block",
              color: "primary.main",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            بازگشت به صفحه اصلی
          </Typography>
        </Link>
      </Container>
    </Box>
  );
}
