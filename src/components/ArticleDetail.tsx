import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  CardMedia,
  CardContent,
  Typography,
  Avatar,
  IconButton,
  AppBar,
  Toolbar,
  Button,
  CircularProgress,
  Container,
} from "@mui/material";
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
    setTimeout(() => {
      const foundArticle = articlesAAR.find((a) => a.id === Number(id));
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
        height="100vh"
        bgcolor="#f5f5f5"
      >
        <CircularProgress size={60} />
      </Box>
    );
  }

  if (!article) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        flexDirection="column"
        bgcolor="#f5f5f5"
      >
        <Typography variant="h4" fontWeight="bold">
          مقاله پیدا نشد
        </Typography>
        <Button
          onClick={() => navigate("/")}
          sx={{
            mt: 3,
            px: 4,
            py: 1,
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: 3,
          }}
          variant="contained"
          color="primary"
        >
          بازگشت به خانه
        </Button>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(to bottom, #f5f5f5, #ffffff)",
      }}
    >
      {/* Fixed AppBar */}
      <AppBar
        position="static"
        sx={{
          background: "linear-gradient(45deg, #6200ea, #b388ff)",
          width: "100vw",
        }}
      >
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={() => navigate(-1)}>
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            {article.title}
          </Typography>
          <Button color="inherit" variant="outlined" sx={{ borderRadius: 3 }}>
            ورود
          </Button>
        </Toolbar>
      </AppBar>

      {/* Full-Screen Article Content */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          pt: 10, // Offset for AppBar
        }}
      >
        {/* Article Image - Full Width */}
        <Box sx={{ width: "100%", height: "50vh", overflow: "hidden" }}>
          <CardMedia
            component="img"
            image={article.image}
            alt={article.title}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

        {/* Article Content - Full Width */}
        <Box
          sx={{
            px: { xs: 4, md: 12 },
            py: 6,
            maxWidth: "100vw",
            textAlign: "justify",
          }}
        >
          {/* Author Info */}
          <Box display="flex" alignItems="center" mb={3}>
            <Avatar
              alt={article.author}
              src={article.avatar}
              sx={{ width: 60, height: 60, mr: 2 }}
            />
            <Box>
              <Typography variant="h6" fontWeight="bold">
                {article.author}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                {article.date}
              </Typography>
            </Box>
          </Box>

          {/* Article Title
          <Typography
            variant="h3"
            fontWeight="bold"
            gutterBottom
            textAlign="center"
          >
            {article.title}
          </Typography> */}

          {/* Article Content */}
          <MarkDownRendere markdown={article.content} />

          {/* Actions */}
          <Box display="flex" justifyContent="space-between" mt={4}>
            <Box>
              <IconButton
                aria-label="add to favorites"
                sx={{ color: "#e91e63" }}
              >
                <Favorite />
              </IconButton>
              <IconButton aria-label="share" sx={{ color: "#2196f3" }}>
                <Share />
              </IconButton>
            </Box>
            <IconButton aria-label="bookmark" sx={{ color: "#ff9800" }}>
              <Bookmark />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ArticleDetail;
