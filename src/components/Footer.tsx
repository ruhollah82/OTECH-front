import React from "react";
import {
  Box,
  Grid,
  IconButton,
  Typography,
  Divider,
  keyframes,
  alpha,
} from "@mui/material";
import {
  WhatsApp,
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  LinkedIn,
  Pinterest,
  Email,
} from "@mui/icons-material";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Footer: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        background:
          "radial-gradient(circle at center, #0f0c29 0%, #03001C 100%)",
        overflow: "hidden",
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

      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          padding: { xs: 4, md: 8 },
          color: "white",
        }}
      >
        <Grid container spacing={4} justifyContent="center">
          {/* Social Links with Hover Effects */}
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: { xs: 1, md: 2 },
                animation: `${fadeIn} 0.6s ease-out`,
              }}
            >
              {[
                {
                  Icon: WhatsApp,
                  link: "https://web.whatsapp.com/send?phone=918977889778",
                },
                {
                  Icon: Facebook,
                  link: "https://www.facebook.com/PaceHospitals",
                },
                { Icon: Twitter, link: "https://twitter.com/pacehospitals" },
                {
                  Icon: Instagram,
                  link: "https://instagram.com/pacehospitals/",
                },
                {
                  Icon: YouTube,
                  link: "https://www.youtube.com/c/PACEHospitals",
                },
                {
                  Icon: LinkedIn,
                  link: "https://in.linkedin.com/company/pace-hospitals",
                },
                {
                  Icon: Pinterest,
                  link: "https://in.pinterest.com/pacehospitals/",
                },
                { Icon: Email, link: "mailto:health@pacehospitals.in" },
              ].map(({ Icon, link }, index) => (
                <IconButton
                  key={link}
                  href={link}
                  target="_blank"
                  sx={{
                    color: "#60efff",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "#00ff87",
                      transform: "scale(1.2) translateY(-5px)",
                      background: alpha("#fff", 0.1),
                    },
                    animation: `${float} 4s infinite ${index * 0.2}s`,
                  }}
                >
                  <Icon sx={{ fontSize: { xs: 32, md: 40 } }} />
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Animated Divider */}
          <Grid item xs={12}>
            <Divider
              sx={{
                bgcolor: "rgba(96,239,255,0.3)",
                height: 2,
                width: "60%",
                margin: "0 auto",
                animation: `${fadeIn} 0.6s ease-out`,
              }}
            />
          </Grid>

          {/* Copyright Section */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                textAlign: "center",
                animation: `${fadeIn} 0.6s ease-out`,
                backdropFilter: "blur(8px)",
                background: "rgba(255,255,255,0.05)",
                borderRadius: 4,
                padding: 3,
                border: "1px solid rgba(96,239,255,0.2)",
                boxShadow: "0 0 20px rgba(96,239,255,0.1)",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: 14,
                  letterSpacing: 1,
                  "& span": {
                    background:
                      "linear-gradient(45deg, #00ff87 30%, #60efff 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: 600,
                  },
                }}
              >
                © 2025 <span>MS-OTech</span> تمامی حقوق محفوظ است
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
