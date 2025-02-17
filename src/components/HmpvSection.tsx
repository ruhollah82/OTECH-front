import { Box, Grid, Typography, Button, useTheme, alpha } from "@mui/material";
import { motion } from "framer-motion";
import { KeyboardArrowLeft } from "@mui/icons-material";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { Engine } from "tsparticles-engine";

const HmpvSection = () => {
  const theme = useTheme();
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        py: 8,
        background: alpha("rgb(15,12,41)", 0.97),
      }}
    >
      {/* Animated Particles Background */}
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
            particles: {
              number: { value: 80 },
              color: { value: theme.palette.secondary.main },
              opacity: { value: 0.5 },
              size: { value: { min: 1, max: 3 } },
              move: {
                enable: true,
                speed: { min: 0.5, max: 1.5 },
                direction: "none",
                outModes: "bounce",
              },
              links: {
                enable: true,
                color: theme.palette.primary.light,
                opacity: 0.2,
                distance: 150,
              },
            },
          }}
        />
      </Box>

      {/* Floating DNA Strand Animation */}
      <Box
        component={motion.div}
        animate={{
          y: [-100, 100, -100],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        sx={{
          position: "absolute",
          right: "-10%",
          width: "400px",
          height: "800px",
          background: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 15px,
            ${alpha("#ffff", 0.3)} 15px,
            ${alpha(theme.palette.secondary.main, 0.3)} 30px
          )`,
          opacity: 0.2,
          transform: "skewX(-20deg)",
        }}
      />

      <Grid container spacing={4} sx={{ position: "relative", zIndex: 2 }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 4,
          }}
        >
          <Box
            component={motion.div}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            sx={{
              position: "relative",
              maxWidth: "600px",
              p: 4,
              background: alpha(theme.palette.background.paper, 0.1),
              backdropFilter: "blur(12px)",
              borderRadius: "24px",
              border: `1px solid ${alpha(theme.palette.secondary.main, 0.2)}`,
              boxShadow: `0 0 40px ${alpha(theme.palette.primary.main, 0.2)}`,
            }}
          >
            {/* Interactive Neuro Animation */}
            <Box
              component={motion.div}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%"],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: -1,
                borderRadius: "24px",
                background: `linear-gradient(
                  45deg,
                  ${alpha(theme.palette.primary.main, 0.1)},
                  ${alpha(theme.palette.secondary.main, 0.1)},
                  ${alpha(theme.palette.primary.main, 0.1)}
                )`,
                backgroundSize: "400% 400%",
                opacity: 0.5,
              }}
            />

            <Typography
              variant="h2"
              component={motion.div}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              sx={{
                color: theme.palette.secondary.main,
                fontWeight: 800,
                fontSize: { xs: "2rem", md: "2.5rem" },
                mb: 3,
                textShadow: `0 0 15px ${alpha(
                  theme.palette.secondary.main,
                  0.3
                )}`,
              }}
            >
              <Box
                component="span"
                sx={{
                  background: `linear-gradient(45deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                بیماری MS
              </Box>{" "}
              و چالش‌های آن
            </Typography>

            <Typography
              component={motion.div}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              paragraph
              sx={{
                textAlign: "justify",
                color: alpha(theme.palette.common.white, 0.9),
                fontSize: "1.1rem",
                lineHeight: 2,
                position: "relative",
                pl: 3,
                "&::before": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  height: "70%",
                  width: "3px",
                  background: `linear-gradient(to bottom, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                  borderRadius: "2px",
                },
              }}
            >
              بیماری ام‌اس (Multiple Sclerosis) به عنوان یکی از پیچیده‌ترین
              اختلالات سیستم عصبی مرکزی، نیازمند رویکردهای نوین در مدیریت و
              نظارت مستمر بر وضعیت بیماران است.
            </Typography>

            <Button
              variant="contained"
              href="/rt-pcr-test-for-hmpv"
              component={motion.a}
              whileHover={{
                x: 10,
                background: `linear-gradient(45deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
              }}
              whileTap={{ scale: 0.95 }}
              sx={{
                mt: 3,
                px: 4,
                py: 1.5,
                borderRadius: "12px",
                fontWeight: 700,
                background: alpha(theme.palette.secondary.main, 0.8),
                color: theme.palette.common.white,
                display: "flex",
                alignItems: "center",
                gap: 1,
                transition: "all 0.3s ease",
                boxShadow: `0 0 25px ${alpha(
                  theme.palette.secondary.main,
                  0.3
                )}`,
              }}
            >
              کشف راهکارها
              <KeyboardArrowLeft fontSize="large" />
            </Button>
          </Box>
        </Grid>

        {/* Interactive 3D Brain Model Area */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            height: "70vh",
            position: "relative",
            display: { xs: "none", md: "block" },
          }}
        >
          <Box
            component={motion.div}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            sx={{
              width: "100%",
              height: "100%",
              background: `url('/media/brain-network.gif') center/contain no-repeat`,
              filter: `drop-shadow(0 0 30px ${alpha(
                theme.palette.secondary.main,
                0.3
              )})`,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HmpvSection;
