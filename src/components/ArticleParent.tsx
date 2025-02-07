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

interface BlogPost {
  id: string;
  imageUrl: string;
  title: string;
  href: string;
  author: string;
  date: string;
  description: string;
  tags: string[];
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
        backgroundColor: "#FEF9E1",
      }}
    >
      {sections.map((section) => (
        <Box key={section.id} sx={{ mb: 6 }}>
          <Box
            sx={{
              textAlign: "center",
              padding: { xs: "2rem 1rem", sm: "3rem 2rem", md: "4rem 3rem" }, // Adjust padding for responsiveness
              position: "relative",
            }}
          >
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Box
                  id="1912756758"
                  sx={{
                    transitionDuration: "1s",
                    transitionTimingFunction: "ease-in-out",
                    transitionDelay: "initial",
                    transitionProperty: "opacity",
                    lineHeight: "initial",
                  }}
                  data-element-type="paragraph"
                  data-version="5"
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: "27px", sm: "34px" },
                      fontWeight: 700,
                      color: "#FF8000", // White text for contrast against the blue background
                      display: "inline",
                    }}
                  >
                    تازه ها و مقالات سلامتی
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Grid
            container
            spacing={3}
            sx={{
              padding: "4rem",
              paddingTop: "0",
            }}
          >
            {section.posts.map((post, index) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <Box
                  component="a"
                  href={post.href}
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
                      image={post.imageUrl}
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

// Sample posts added to the blogSections array
const blogSections: BlogSection[] = [
  {
    id: "world-health-days",
    title: "World Health Days",
    posts: [
      {
        id: "ntd-day",
        imageUrl:
          "https://lirp.cdn-website.com/69c0b277/dms3rep/multi/opt/World+Neglected+Tropical+Diseases+Day-+30+January+2025+-+PACE+Hospitals-67387316-1920w.jpg",
        title:
          "روز جهانی بیماری‌های گرمسیری فراموش‌شده، ۳۰ ژانویه ۲۰۲۵ - موضوع، اهمیت و تاریخچه",
        href: "/world-ntd-day",
        author: "بیمارستان‌های پیس",
        date: "28 ژانویه 2025",
        description:
          "روز جهانی بیماری‌های گرمسیری فراموش‌شده (World NTD Day) یک رویداد بهداشتی جهانی است که هر سال در ۳۰ ژانویه برگزار می‌شود...",
        tags: ["روزهای سلامت جهانی"],
      },
      {
        id: "ntd-day",
        imageUrl:
          "https://lirp.cdn-website.com/69c0b277/dms3rep/multi/opt/World+Neglected+Tropical+Diseases+Day-+30+January+2025+-+PACE+Hospitals-67387316-1920w.jpg",
        title:
          "روز جهانی بیماری‌های گرمسیری فراموش‌شده، ۳۰ ژانویه ۲۰۲۵ - موضوع، اهمیت و تاریخچه",
        href: "/world-ntd-day",
        author: "بیمارستان‌های پیس",
        date: "28 ژانویه 2025",
        description:
          "روز جهانی بیماری‌های گرمسیری فراموش‌شده (World NTD Day) یک رویداد بهداشتی جهانی است که هر سال در ۳۰ ژانویه برگزار می‌شود...",
        tags: ["روزهای سلامت جهانی"],
      },
      {
        id: "ntd-day",
        imageUrl:
          "https://lirp.cdn-website.com/69c0b277/dms3rep/multi/opt/World+Neglected+Tropical+Diseases+Day-+30+January+2025+-+PACE+Hospitals-67387316-1920w.jpg",
        title:
          "روز جهانی بیماری‌های گرمسیری فراموش‌شده، ۳۰ ژانویه ۲۰۲۵ - موضوع، اهمیت و تاریخچه",
        href: "/world-ntd-day",
        author: "بیمارستان‌های پیس",
        date: "28 ژانویه 2025",
        description:
          "روز جهانی بیماری‌های گرمسیری فراموش‌شده (World NTD Day) یک رویداد بهداشتی جهانی است که هر سال در ۳۰ ژانویه برگزار می‌شود...",
        tags: ["روزهای سلامت جهانی"],
      },
      {
        id: "ntd-day",
        imageUrl:
          "https://lirp.cdn-website.com/69c0b277/dms3rep/multi/opt/World+Neglected+Tropical+Diseases+Day-+30+January+2025+-+PACE+Hospitals-67387316-1920w.jpg",
        title:
          "روز جهانی بیماری‌های گرمسیری فراموش‌شده، ۳۰ ژانویه ۲۰۲۵ - موضوع، اهمیت و تاریخچه",
        href: "/world-ntd-day",
        author: "بیمارستان‌های پیس",
        date: "28 ژانویه 2025",
        description:
          "روز جهانی بیماری‌های گرمسیری فراموش‌شده (World NTD Day) یک رویداد بهداشتی جهانی است که هر سال در ۳۰ ژانویه برگزار می‌شود...",
        tags: ["روزهای سلامت جهانی"],
      },
      {
        id: "ntd-day",
        imageUrl:
          "https://lirp.cdn-website.com/69c0b277/dms3rep/multi/opt/World+Neglected+Tropical+Diseases+Day-+30+January+2025+-+PACE+Hospitals-67387316-1920w.jpg",
        title:
          "روز جهانی بیماری‌های گرمسیری فراموش‌شده، ۳۰ ژانویه ۲۰۲۵ - موضوع، اهمیت و تاریخچه",
        href: "/world-ntd-day",
        author: "بیمارستان‌های پیس",
        date: "28 ژانویه 2025",
        description:
          "روز جهانی بیماری‌های گرمسیری فراموش‌شده (World NTD Day) یک رویداد بهداشتی جهانی است که هر سال در ۳۰ ژانویه برگزار می‌شود...",
        tags: ["روزهای سلامت جهانی"],
      },
      {
        id: "ntd-day",
        imageUrl:
          "https://lirp.cdn-website.com/69c0b277/dms3rep/multi/opt/World+Neglected+Tropical+Diseases+Day-+30+January+2025+-+PACE+Hospitals-67387316-1920w.jpg",
        title:
          "روز جهانی بیماری‌های گرمسیری فراموش‌شده، ۳۰ ژانویه ۲۰۲۵ - موضوع، اهمیت و تاریخچه",
        href: "/world-ntd-day",
        author: "بیمارستان‌های پیس",
        date: "28 ژانویه 2025",
        description:
          "روز جهانی بیماری‌های گرمسیری فراموش‌شده (World NTD Day) یک رویداد بهداشتی جهانی است که هر سال در ۳۰ ژانویه برگزار می‌شود...",
        tags: ["روزهای سلامت جهانی"],
      },
    ],
  },
];

const BlogComponent = () => <BlogPostsGrid sections={blogSections} />;

export default BlogComponent;
