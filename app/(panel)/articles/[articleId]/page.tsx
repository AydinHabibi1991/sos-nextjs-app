import { Container, Typography, Card, CardMedia, CardContent } from "@mui/material";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

async function fetchArticle(articleId: string) {
  const res = await fetch(`http://localhost:3001/articles/${articleId}`, {
    cache: 'no-store'
  });

  if (!res.ok) return null;

  return res.json();
}

interface ArticlePageProps {
  params: {
    articleId: string;
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { articleId } = await params; 

  if (!articleId) {
    notFound();
  }

  const article = await fetchArticle(articleId);

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
