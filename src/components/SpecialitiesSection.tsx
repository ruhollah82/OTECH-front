import React from "react";
import { Box, Typography, Grid, Card, styled, keyframes } from "@mui/material";
import theme from "../theme";
import {
  MedicalServices,
  HealthAndSafety,
  ConnectWithoutContact,
  Psychology,
} from "@mui/icons-material";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const GradientCard = styled(Card)(({ theme }) => ({
  background:
    "linear-gradient(145deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
  backdropFilter: "blur(12px)",
  borderRadius: "20px",
  padding: "2rem",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
  },
  cursor: "pointer",
}));

const SpecialitiesSection: React.FC = () => {
  const services = [
    {
      icon: <MedicalServices sx={{ fontSize: 50 }} />,
      title: "مراقبت هوشمند",
      description: "سیستم نظارت پیشرفته با قابلیت آنالیز لحظه‌ای وضعیت بیمار",
    },
    {
      icon: <HealthAndSafety sx={{ fontSize: 50 }} />,
      title: "پیشگیری پیشرفته",
      description:
        "تشخیص زودهنگام و پیشگیری از پیشرفت بیماری با الگوریتم‌های هوشمند",
    },
    {
      icon: <ConnectWithoutContact sx={{ fontSize: 50 }} />,
      title: "ارتباط مستقیم",
      description: "ارتباط بی‌واسطه با بهترین متخصصین ام اس در سراسر کشور",
    },
    {
      icon: <Psychology sx={{ fontSize: 50 }} />,
      title: "پشتیبانی روانشناسی",
      description: "برنامه‌های مراقبت روانی تخصصی برای بیماران و همراهان",
    },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        background: "linear-gradient(45deg, #0f0c29 0%, #302b63 100%)",
        py: 8,
        px: { xs: 2, md: 6 },
        overflow: "hidden",
      }}
    >
      {/* Animated Background Elements */}
      <Box
        sx={{
          position: "absolute",
          top: "-20%",
          left: "-10%",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(96,239,255,0.08) 0%, transparent 70%)",
          animation: `${float} 8s infinite ease-in-out`,
        }}
      />

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              background: "linear-gradient(45deg, #00ff87 30%, #60efff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 800,
              mb: 2,
              textShadow: "0 0 20px rgba(96,239,255,0.3)",
            }}
          >
            خدمات هوشمند پیشرفته
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "rgba(255,255,255,0.9)",
              textAlign: "center",
              maxWidth: "800px",
              mx: "auto",
              fontSize: "1.1rem",
              mb: 6,
            }}
          >
            پلتفرم جامع مدیریت و مراقبت از بیماران ام اس با بهره‌گیری از آخرین
            فناوری‌های هوش مصنوعی
          </Typography>
        </Grid>

        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <GradientCard>
              <Box
                sx={{
                  color: theme.palette.primary.main,
                  mb: 2,
                  animation: `${float} 4s infinite ease-in-out`,
                }}
              >
                {service.icon}
              </Box>
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                  fontWeight: 700,
                  mb: 1.5,
                }}
              >
                {service.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: 1.8,
                }}
              >
                {service.description}
              </Typography>
            </GradientCard>
          </Grid>
        ))}
      </Grid>

      {/* Floating Particles */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none",
          background: 'url("/media/particles.png")',
          opacity: 0.1,
        }}
      />
    </Box>
  );
};

export default SpecialitiesSection;
