import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
  IconButton,
  AppBar,
  Toolbar,
  Button,
  keyframes,
  alpha,
  Box,
} from "@mui/material";
import { Favorite, Share, Bookmark } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { articlesAAR } from "./articles";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

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
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setArticles(articlesAAR);
    }, 1000);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        background:
          "radial-gradient(circle at center, #0f0c29 0%, #03001C 100%)",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          opacity: 0.2,
        }}
      >
        <Particles
          init={particlesInit}
          options={{
            fullScreen: false,
            particles: {
              number: { value: 30 },
              color: { value: "#60efff" },
              shape: { type: "circle" },
              opacity: { value: 0.3 },
              size: { value: { min: 1, max: 3 } },
              move: {
                enable: true,
                speed: 0.4,
                direction: "none",
                outModes: "bounce",
              },
            },
          }}
        />
      </Box>

      <AppBar
        position="static"
        sx={{
          backdropFilter: "blur(10px)",
          bgcolor: alpha("#0f0c29", 0.7),
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 6 } }}>
          <Typography
            variant="h6"
            sx={{
              background: "linear-gradient(45deg, #00ff87 30%, #60efff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 800,
            }}
          >
            MS-OTech Portal
          </Typography>
          <Button
            variant="outlined"
            sx={{
              color: "#60efff",
              borderColor: alpha("#60efff", 0.3),
              "&:hover": { borderColor: "#60efff" },
            }}
          >
            ورود کاربری
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="xl" sx={{ py: 6, position: "relative", zIndex: 2 }}>
        <Grid container spacing={4}>
          {articles.map((article, index) => (
            <Grid item key={article.id} xs={12} md={6} lg={4}>
              <Card
                sx={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(12px)",
                  borderRadius: 4,
                  border: "1px solid rgba(96,239,255,0.15)",
                  boxShadow: "0 0 30px rgba(96,239,255,0.1)",
                  transition: "all 0.4s ease",
                  animation: `${fadeIn} 0.6s ease-out ${index * 100}ms`,
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 0 40px rgba(96,239,255,0.2)",
                  },
                }}
              >
                <Box
                  sx={{
                    height: 240,
                    overflow: "hidden",
                    position: "relative",
                    "& img": {
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter: "grayscale(20%) contrast(110%)",
                    },
                  }}
                >
                  <img src={article.image} alt={article.title} />
                </Box>
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component={Link}
                    to={`/article/${article.id}`}
                    sx={{
                      textDecoration: "none",
                      background:
                        "linear-gradient(45deg, #60efff 30%, #fff 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontWeight: 700,
                      display: "block",
                      mb: 3,
                    }}
                  >
                    {article.title}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <Avatar
                      alt={article.author}
                      src={article.avatar}
                      sx={{
                        width: 40,
                        height: 40,
                        border: "2px solid",
                        borderColor: "secondary.main",
                        mr: 2,
                      }}
                    />
                    <Box>
                      <Typography variant="subtitle1" sx={{ color: "#60efff" }}>
                        {article.author}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ color: "rgba(255,255,255,0.7)" }}
                      >
                        {article.date}
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box>
                      <IconButton
                        sx={{
                          color: "#ff4081",
                          "&:hover": { color: "#ff80ab" },
                        }}
                      >
                        <Favorite fontSize="small" />
                      </IconButton>
                      <IconButton
                        sx={{
                          color: "#60efff",
                          "&:hover": { color: "#00ff87" },
                        }}
                      >
                        <Share fontSize="small" />
                      </IconButton>
                    </Box>
                    <IconButton sx={{ color: "rgba(255,255,255,0.7)" }}>
                      <Bookmark fontSize="small" />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ArticlePage;
