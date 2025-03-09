import { Box, Container, Grid, Card, CardContent, CardMedia, Typography, CardActionArea } from "@mui/material";
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
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          مقالات
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {articles.map((article: { id: number; title: string; content: string; image: string }) => (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
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
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}