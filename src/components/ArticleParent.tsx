import React from "react";
import {
  Box,
  Grid,
  Typography,
  keyframes,
  Button,
  useTheme,
} from "@mui/material";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";
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

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

const BlogPostsGrid: React.FC<{ sections: BlogSection[] }> = ({ sections }) => {
  const theme = useTheme();
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        background:
          "radial-gradient(circle at center, #0f0c29 0%, #03001C 100%)",
        overflow: "hidden",
        py: 8,
      }}
    >
      {/* Particles Background */}
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

      {sections.map((section) => (
        <Box key={section.id} sx={{ position: "relative", zIndex: 2 }}>
          {/* Animated Section Title */}
          <Box
            sx={{
              textAlign: "center",
              mb: 8,
              animation: `${float} 6s infinite ease-in-out`,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                background: "linear-gradient(45deg, #00ff87 30%, #60efff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: 800,
                textShadow: "0 0 20px rgba(96,239,255,0.3)",
              }}
            >
              {section.title}
            </Typography>
          </Box>

          {/* Blog Grid with Glass-morphism */}
          <Grid
            container
            spacing={4}
            sx={{ px: { xs: 2, md: 6 }, position: "relative" }}
          >
            {section.posts.map((post, index) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <Box
                  component="a"
                  href={`/article/${post.id}`}
                  sx={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "block",
                    animation: `${fadeIn} 0.6s ease-out ${index * 100}ms`,
                    animationFillMode: "both",
                    transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      "& .media-container": { transform: "scale(1.05)" },
                    },
                  }}
                >
                  <Box
                    sx={{
                      background: "rgba(255,255,255,0.05)",
                      backdropFilter: "blur(12px)",
                      borderRadius: 4,
                      overflow: "hidden",
                      boxShadow: "0 0 30px rgba(96,239,255,0.1)",
                      border: "1px solid rgba(96,239,255,0.15)",
                      position: "relative",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        inset: 0,
                        borderRadius: 4,
                        padding: "2px",
                        background: "linear-gradient(45deg, #60efff, #0061ff)",
                        WebkitMask:
                          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        maskComposite: "exclude",
                        zIndex: -1,
                      },
                    }}
                  >
                    {/* Media Container */}
                    <Box
                      className="media-container"
                      sx={{
                        height: 280,
                        overflow: "hidden",
                        transition:
                          "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                      }}
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          filter: "grayscale(20%) contrast(110%)",
                        }}
                      />
                    </Box>

                    {/* Content */}
                    <Box sx={{ p: 3 }}>
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                          color: "#fff",
                          fontWeight: 600,
                          mb: 2,
                          background:
                            "linear-gradient(45deg, #60efff 30%, #fff 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {post.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "rgba(255,255,255,0.8)",
                          fontSize: "0.9rem",
                          lineHeight: 1.6,
                          mb: 2,
                        }}
                      >
                        {post.content.substring(0, 100)}...
                      </Typography>
                      <Button
                        variant="text"
                        size="small"
                        sx={{
                          color: "#60efff",
                          "&:hover": {
                            background: "rgba(96,239,255,0.1)",
                          },
                        }}
                      >
                        ادامه مطلب →
                      </Button>
                    </Box>
                  </Box>
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
