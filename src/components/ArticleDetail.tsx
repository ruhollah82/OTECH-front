import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Avatar,
  IconButton,
  AppBar,
  Toolbar,
  Button,
  Box,
  CircularProgress,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { Favorite, Share, Bookmark, ArrowBack } from "@mui/icons-material";
import { articlesAAR } from "./articles";
import MarkDownRendere from "./MarkDownRenderer";

interface Article {
  id: number;
  title: string;
  content: string;
  image: string;
  author: string;
  date: string;
  avatar: string;
}

const ArticleDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockArticles: Article[] = articlesAAR;

      const foundArticle = mockArticles.find((a) => a.id === Number(id));
      setArticle(foundArticle || null);
      setLoading(false);
    }, 1000);
  }, [id]);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!article) {
    return (
      <Container maxWidth="lg" sx={{ py: 4, textAlign: "center" }}>
        <Typography variant="h4">Article not found</Typography>
        <Button onClick={() => navigate("/")} sx={{ mt: 2 }}>
          Back to Home
        </Button>
      </Container>
    );
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => navigate(-1)}
            sx={{ mr: 2 }}
          >
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {article.title}
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Card>
          <CardMedia
            component="img"
            height="400"
            image={article.image}
            alt={article.title}
          />
          <CardContent>
            <Box display="flex" alignItems="center" mb={3}>
              <Avatar
                alt={article.author}
                src={article.avatar}
                sx={{ bgcolor: red[500], width: 56, height: 56, mr: 2 }}
              />
              <div>
                <Typography variant="h6">{article.author}</Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  {article.date}
                </Typography>
              </div>
            </Box>
            <Typography variant="h3" gutterBottom>
              {article.title}
            </Typography>
            <MarkDownRendere markdown={article.content} />
          </CardContent>
          <Box display="flex" justifyContent="space-between" p={2}>
            <div>
              <IconButton aria-label="add to favorites">
                <Favorite />
              </IconButton>
              <IconButton aria-label="share">
                <Share />
              </IconButton>
            </div>
            <IconButton aria-label="bookmark">
              <Bookmark />
            </IconButton>
          </Box>
        </Card>
      </Container>
    </div>
  );
};

export default ArticleDetail;
