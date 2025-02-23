import { Grid, Typography, Box, Button, Link, keyframes } from "@mui/material";
import {
  EmojiEmotions,
  LocalHospital,
  MedicalServices,
  EmojiEvents,
} from "@mui/icons-material";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import React from "react";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

const StatsComponent = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
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
              number: { value: 25 },
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

      {/* Stats Section */}
      <Box
        sx={{
          background:
            "radial-gradient(circle at center, #0f0c29 0%, #03001C 100%)",
          py: 8,
          position: "relative",
          zIndex: 2,
        }}
      >
        <Grid
          container
          justifyContent="center"
          spacing={6}
          sx={{ px: { xs: 2, md: 6 } }}
        >
          {[
            {
              icon: <EmojiEmotions />,
              value: "3,12,338",
              label: "بیماران راضی",
            },
            {
              icon: <LocalHospital />,
              value: "98,538",
              label: "تعداد کاربران فعال",
            },
            { icon: <MedicalServices />, value: "684", label: "کادر پزشکی" },
            { icon: <EmojiEvents />, value: "2011", label: "سال تأسیس" },
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(12px)",
                  borderRadius: 4,
                  padding: 4,
                  textAlign: "center",
                  animation: `${fadeIn} 0.6s ease-out ${index * 100}ms`,
                  animationFillMode: "both",
                  transition: "all 0.4s ease",
                  border: "1px solid rgba(96,239,255,0.15)",
                  boxShadow: "0 0 30px rgba(96,239,255,0.1)",
                  "&:hover": { transform: "translateY(-8px)" },
                }}
              >
                <Box
                  sx={{
                    display: "inline-flex",
                    padding: 2,
                    borderRadius: "50%",
                    background: "linear-gradient(45deg, #60efff, #0061ff)",
                    mb: 2,
                  }}
                >
                  {React.cloneElement(item.icon, {
                    sx: { fontSize: 48, color: "#fff" },
                  })}
                </Box>
                <Typography
                  variant="h2"
                  sx={{
                    background:
                      "linear-gradient(45deg, #60efff 30%, #fff 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontSize: { xs: 32, md: 42 },
                    fontWeight: 800,
                    mb: 1,
                  }}
                >
                  {item.value}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "rgba(255,255,255,0.9)",
                    fontSize: 18,
                    fontWeight: 500,
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* CTA Section */}
        <Box
          sx={{
            mt: 8,
            textAlign: "center",
            animation: `${float} 6s infinite ease-in-out`,
          }}
        >
          <Box
            sx={{
              maxWidth: 1200,
              margin: "0 auto",
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(12px)",
              borderRadius: 4,
              padding: 4,
              border: "1px solid rgba(96,239,255,0.15)",
              boxShadow: "0 0 30px rgba(96,239,255,0.1)",
              display: "inline-block",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                fontSize: { xs: 26, md: 34 },
                background: "linear-gradient(45deg, #00ff87 30%, #60efff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 3,
              }}
            >
              بازخورد شما دستاورد ماست.
            </Typography>

            <Button
              variant="contained"
              href="/patient-feedback"
              sx={{
                borderRadius: 2,
                background: "linear-gradient(45deg, #60efff 0%, #0061ff 100%)",
                color: "#fff",
                padding: "12px 32px",
                fontSize: 16,
                fontWeight: 700,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 10px 20px rgba(96,239,255,0.3)",
                },
              }}
            >
              ارائه بازخورد ارزشمند
            </Button>

            <Typography
              sx={{
                mt: 2,
                color: "rgba(255,255,255,0.8)",
                fontSize: 14,
                "& a": {
                  color: "#60efff",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                },
              }}
            >
              <Link href="/#reviews">مشاهده نظرات کاربران</Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StatsComponent;
