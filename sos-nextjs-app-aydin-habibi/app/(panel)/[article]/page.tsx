'use client'

import { Box, Container, Typography, Card, CardMedia, CardContent } from "@mui/material";
import { notFound } from "next/navigation";

async function fetchArticle(articleId: string) {
  const res = await fetch(`http://localhost:3001/articles/${articleId}`);
  if (!res.ok) {
    return null;
  }
  return res.json();
}

export default async function ArticlePage({ params }: { params: { articleId: string } }) {
  const article = await fetchArticle(params.articleId);

  if (!article) {
    notFound();
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Card>
        <CardMedia
          component="img"
          height="400"
          image={article.image}
          alt={article.title}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {article.title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {article.content}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}