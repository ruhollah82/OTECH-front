import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Avatar,
  IconButton,
  AppBar,
  Toolbar,
  Button,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { Favorite, Share, Bookmark } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { articlesAAR } from "./articles";

interface Article {
  id: number;
  title: string;
  content: string;
  image: string;
  author: string;
  date: string;
  avatar: string;
}

const ArticlePage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setArticles(articlesAAR);
    }, 1000);
  }, []);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News Portal
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {articles.map((article) => (
            <Grid item key={article.id} xs={12} md={6}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={article.image}
                  alt={article.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component={Link}
                    to={`/article/${article.id}`}
                    sx={{
                      textDecoration: "none",
                      color: "inherit",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {article.title}
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 16,
                    }}
                  >
                    <Avatar
                      alt={article.author}
                      src={article.avatar}
                      sx={{ bgcolor: red[500], width: 40, height: 40 }}
                    />
                    <div style={{ marginLeft: 16 }}>
                      <Typography variant="subtitle1">
                        {article.author}
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        {article.date}
                      </Typography>
                    </div>
                  </div>
                </CardContent>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: 16,
                  }}
                >
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
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default ArticlePage;
