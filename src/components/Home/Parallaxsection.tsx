import { Box, Typography, Button, keyframes } from "@mui/material";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const ParallaxSection = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(circle at center, #0f0c29 0%, #03001C 100%)",
        overflow: "hidden",
      }}
    >
      {/* Subtle Particles Layer */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          opacity: 0.3,
        }}
      >
        <Particles
          init={particlesInit}
          options={{
            fullScreen: false,
            particles: {
              number: { value: 40 },
              color: { value: "#60efff" },
              shape: { type: "circle" },
              opacity: { value: 0.4 },
              size: { value: { min: 1, max: 3 } },
              move: {
                enable: true,
                speed: 0.5,
                direction: "none",
                outModes: "bounce",
              },
            },
          }}
        />
      </Box>

      {/* Central Floating Element */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          animation: `${float} 6s infinite ease-in-out`,
        }}
      >
        {/* Glowing Border Effect */}
        <Box
          sx={{
            position: "relative",
            padding: 4,
            borderRadius: 4,
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 0 40px rgba(96,239,255,0.1)",
            border: "1px solid rgba(96,239,255,0.2)",
            transformStyle: "preserve-3d",
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              borderRadius: 4,
              padding: "2px",
              background: "linear-gradient(45deg, #60efff, #0061ff)",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            },
          }}
        >
          {/* Main Content */}
          <Typography
            variant="h1"
            sx={{
              background: "linear-gradient(45deg, #00ff87 30%, #60efff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontWeight: 800,
              textAlign: "center",
              mb: 2,
              textShadow: "0 0 20px rgba(96,239,255,0.3)",
            }}
          >
            OTech - MS
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontWeight: 800,
              background: "linear-gradient(45deg, #60efff 30%, #0061ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1.2,
              mb: 2,
              textShadow: "0 0 20px rgba(96,239,255,0.3)",
            }}
          >
            هوش مصنوعی در خدمت سلامت
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              fontSize: "1.2rem",
              color: "rgba(255,255,255,0.9)",
              maxWidth: "600px",
              mx: "auto",
              mb: 4,
            }}
          >
            اولین پلتفرم ترکیبی مدیریت بیماری MS با قابلیت‌های پیشرفته تشخیصی و
            تحلیل هوشمند تصاویر پزشکی
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{
              px: 6,
              py: 1.5,
              fontSize: "1.1rem",
              background: "linear-gradient(45deg, #60efff 0%, #0061ff 100%)",
              border: "1px solid rgba(255,255,255,0.3)",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 10px 20px rgba(96,239,255,0.3)",
              },
              transition: "all 0.3s ease",
            }}
          >
            کشف پلتفرم
          </Button>
        </Box>

        {/* Subtle Background Elements */}
        <Box
          sx={{
            position: "absolute",
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, rgba(96,239,255,0.08) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: -1,
          }}
        />
      </Box>
    </Box>
  );
};

export default ParallaxSection;
