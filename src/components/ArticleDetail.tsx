import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  CardMedia,
  Typography,
  Avatar,
  IconButton,
  AppBar,
  Toolbar,
  Button,
  CircularProgress,
  keyframes,
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

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const floatUp = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
`;

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
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          background: "radial-gradient(circle at center, #0f0c29, #03001C)",
        }}
      >
        <CircularProgress size={60} sx={{ color: "#60efff" }} />
      </Box>
    );
  }

  if (!article) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          flexDirection: "column",
          background: "radial-gradient(circle at center, #0f0c29, #03001C)",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            background: "linear-gradient(45deg, #00ff87, #60efff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: 800,
            mb: 4,
          }}
        >
          مقاله پیدا نشد
        </Typography>
        <Button
          onClick={() => navigate("/")}
          sx={{
            px: 4,
            py: 1.5,
            fontSize: "1.1rem",
            background: "linear-gradient(45deg, #60efff, #0061ff)",
            color: "white",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 10px 20px rgba(96,239,255,0.3)",
            },
          }}
        >
          بازگشت به خانه
        </Button>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "98.9vw",
        background: "radial-gradient(circle at center, #0f0c29, #03001C)",
        color: "rgba(255,255,255,0.95)",
        backgroundColor: "rgba(3, 0, 28, 0.8)",
      }}
    >
      <AppBar
        position="sticky"
        sx={{
          background: "rgba(3, 0, 28, 0.8)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(96,239,255,0.3)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            sx={{
              background: "linear-gradient(45deg, #00ff87, #60efff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 700,
            }}
          >
            {article.title}
          </Typography>
          <IconButton
            onClick={() => navigate(-1)}
            sx={{
              color: "#60efff",
              "&:hover": { bgcolor: "rgba(96,239,255,0.1)" },
            }}
          >
            <ArrowBack />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          pt: 2,
          pb: 4,
          animation: `${fadeInUp} 0.8s ease`,
          maxWidth: 1200,
          mx: "auto",
          px: { xs: 2, md: 4 },
        }}
      >
        <Box
          sx={{
            height: { xs: "40vh", md: "50vh" },
            borderRadius: 2,
            overflow: "hidden",
            position: "relative",
            animation: `${floatUp} 4s ease-in-out infinite`,
            border: "2px solid",
            borderImage: "linear-gradient(45deg, #60efff, #0061ff) 1",
          }}
        >
          <CardMedia
            component="img"
            image={article.image}
            alt={article.title}
            sx={{ height: "100%", objectFit: "cover" }}
          />
        </Box>

        <Box
          sx={{
            mt: 4,
            p: 4,
            background: "rgba(255,255,255,0.1)",
            borderRadius: 2,
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(96,239,255,0.2)",
            "& p": {
              fontSize: "1.1rem",
              lineHeight: 1.8,
              mb: 3,
              textShadow: "0 1px 2px rgba(0,0,0,0.3)",
            },
            "& h1, h2, h3": {
              color: "#60efff",
              my: 3,
              fontWeight: 600,
            },
            "& code": {
              bgcolor: "rgba(96,239,255,0.1)",
              px: 0.5,
              borderRadius: 1,
              fontFamily: "monospace",
            },
            "& pre": {
              bgcolor: "rgba(0,0,0,0.3)",
              p: 2,
              borderRadius: 2,
              overflowX: "auto",
              my: 3,
            },
            "& blockquote": {
              borderLeft: "3px solid #60efff",
              pl: 2,
              my: 3,
              color: "rgba(255,255,255,0.8)",
            },
            "& ul, & ol": {
              pl: 4,
              my: 2,
            },
            "& li": {
              mb: 1.5,
              lineHeight: 1.7,
            },
            "& table": {
              width: "100%",
              my: 3,
              borderCollapse: "collapse",
            },
            "& th": {
              bgcolor: "rgba(96,239,255,0.1)",
              p: 1.5,
            },
            "& td": {
              p: 1.5,
              border: "1px solid rgba(96,239,255,0.2)",
            },
          }}
        >
          <Box display="flex" alignItems="center" mb={4}>
            <Avatar
              alt={article.author}
              src={article.avatar}
              sx={{
                width: 60,
                height: 60,
                mr: 2,
                border: "2px solid #60efff",
              }}
            />
            <Box>
              <Typography
                variant="h6"
                sx={{
                  background: "linear-gradient(45deg, #00ff87, #60efff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: 600,
                }}
              >
                {article.author}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "rgba(255,255,255,0.7)" }}
              >
                {article.date}
              </Typography>
            </Box>
          </Box>

          <MarkDownRendere markdown={article.content} />

          <Box
            sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 4 }}
          >
            <IconButton sx={{ color: "#e91e63" }}>
              <Favorite />
            </IconButton>
            <IconButton sx={{ color: "#2196f3" }}>
              <Share />
            </IconButton>
            <IconButton sx={{ color: "#ff9800" }}>
              <Bookmark />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ArticleDetail;
