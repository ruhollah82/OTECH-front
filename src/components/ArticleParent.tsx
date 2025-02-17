import React from "react";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  keyframes,
} from "@mui/material";
import theme from "../theme";
import { articlesAAR } from "./articles";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  image: string;
  author: string;
  date: string;
  avatar: string;
}

interface BlogSection {
  id: string;
  title: string;
  posts: BlogPost[];
}

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const BlogPostsGrid: React.FC<{ sections: BlogSection[] }> = ({ sections }) => {
  return (
    <Box
      sx={{
        maxWidth: "100vw",
        overflow: "hidden",
        backgroundColor: theme.palette.background.default,
      }}
    >
      {sections.map((section) => (
        <Box key={section.id} sx={{ mb: 6 }}>
          <Box
            sx={{ textAlign: "center", padding: "3rem", position: "relative" }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "27px", sm: "34px" },
                fontWeight: 700,
                color: theme.palette.primary.main,
              }}
            >
              {section.title}
            </Typography>
          </Box>
          <Grid container spacing={3} sx={{ padding: "4rem", paddingTop: "0" }}>
            {section.posts.map((post, index) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <Box
                  component="a"
                  href={`/article/${post.id}`}
                  sx={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "block",
                    animation: `${fadeIn} 0.6s ease-out ${(index + 1) * 200}ms`,
                    animationFillMode: "both",
                    transition: "transform 0.3s ease",
                    "&:hover": { transform: "translateY(-5px)" },
                  }}
                >
                  <Card sx={{ borderRadius: 3 }}>
                    <CardMedia
                      component="img"
                      image={post.image}
                      alt={post.title}
                      sx={{
                        height: 200,
                        transition: "transform 0.3s ease",
                        "&:hover": { transform: "scale(1.1)" },
                      }}
                    />
                    <CardContent>
                      <Typography variant="h6" component="h3" gutterBottom>
                        {post.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

const blogSections: BlogSection[] = [
  {
    id: "1",
    title: "تازه ها و مقالات سلامتی",
    posts: articlesAAR,
  },
];

const BlogComponent = () => <BlogPostsGrid sections={blogSections} />;

export default BlogComponent;
