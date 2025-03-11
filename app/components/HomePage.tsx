import { Box, Container, Card, CardContent, CardMedia, Typography, CardActionArea } from "@mui/material";
import Link from "next/link";

async function fetchArticles() {
  const res = await fetch("http://localhost:3001/articles");
  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }
  return res.json();
}

export default async function Home() {
  const articles = await fetchArticles();

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
        width: "100%",
        minHeight: "100vh",
        py: 4,
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          px: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" gutterBottom>
            مقالات
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
          {articles.map(
            (article: { id: number; title: string; content: string; image: string }) => (
              <Box
                key={article.id}
                sx={{
                  width: {
                    xs: "100%",
                    sm: "calc((100% - 24px) / 2)", 
                    md: "calc((100% - 72px) / 4)",   
                  },
                }}
              >
                <Card>
                  <CardActionArea component={Link} href={`/articles/${article.id}`}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={article.image}
                      alt={article.title}
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {article.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {article.content.slice(0, 100)}...
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Box>
            )
          )}
        </Box>
      </Container>
    </Box>
  );
}
