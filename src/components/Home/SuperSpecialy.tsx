import { Box, Button, Typography, Stack, keyframes } from "@mui/material";
import { styled } from "@mui/system";

const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(3deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const GlassButton = styled(Button)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  borderRadius: "16px",
  padding: "1.5rem",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 32px rgba(0, 255, 135, 0.3)",
    background: "rgba(255, 255, 255, 0.15)",
  },
}));

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background:
          "radial-gradient(circle at center, #0f0c29 0%, #03001C 100%)",
        position: "relative",
        overflow: "hidden",
        p: 3,
      }}
    >
      {/* Animated Background Elements */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle, rgba(96,239,255,0.08) 0%, transparent 70%)",
          animation: `${float} 12s infinite ease-in-out`,
        }}
      />

      {/* Main Content Container */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          backdropFilter: "blur(16px)",
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: 4,
          border: "1px solid rgba(255, 255, 255, 0.1)",
          padding: 4,
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
          maxWidth: "1200px",
          width: "90%",
          // animation: `${float} 6s infinite ease-in-out`,
        }}
      >
        {/* Main Heading */}
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

        {/* Animated Divider */}
        <Box
          sx={{
            height: "2px",
            background:
              "linear-gradient(90deg, transparent 0%, #00ff87 50%, transparent 100%)",
            my: 4,
            mx: "auto",
            width: "60%",
            boxShadow: "0 0 15px rgba(0,255,135,0.3)",
          }}
        />

        <Typography
          variant="h2"
          sx={{
            color: "rgba(255,255,255,0.9)",
            fontSize: { xs: "1.5rem", md: "2.5rem" },
            fontWeight: 500,
            textAlign: "center",
            mb: 4,
            maxWidth: "800px",
            mx: "auto",
            lineHeight: 1.4,
          }}
        >
          پلتفرم هوشمند مراقبت از بیماران MS
        </Typography>

        {/* Interactive Button Grid */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          justifyContent="center"
          sx={{
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              borderRadius: 3,
              padding: "2px",
              background: "linear-gradient(45deg, #00ff87, #60efff)",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              zIndex: -1,
            },
          }}
        >
          {[
            "درمانگر من",
            "دانش افزایی MS",
            "انجام تست های روزانه",
            "جراحی رباتیک",
          ].map((text, index) => (
            <GlassButton
              key={index}
              variant="contained"
              sx={{
                width: { xs: "100%", md: "250px" },
                height: "100px",
                display: "flex",
                flexDirection: "column",
                gap: 1,
                "&:hover": {
                  transform: "rotateX(10deg) rotateY(-5deg)",
                  "& .icon": {
                    transform: "scale(1.2)",
                  },
                },
              }}
            >
              <Box
                component="span"
                className="icon"
                sx={{
                  width: "32px",
                  height: "32px",
                  background: "linear-gradient(45deg, #00ff87, #60efff)",
                  mask: `url(/icons/icon-${index + 1}.svg) center/contain`,
                  transition: "transform 0.3s ease",
                }}
              />
              <Typography
                variant="body1"
                sx={{ color: "white", fontWeight: 500 }}
              >
                {text}
              </Typography>
            </GlassButton>
          ))}
        </Stack>
      </Box>

      {/* Floating Particles */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 1,
          "& .particles": {
            position: "absolute",
            width: "100%",
            height: "100%",
            "& canvas": {
              opacity: 0.3,
            },
          },
        }}
      >
        {/* Add your preferred particle system here */}
      </Box>
    </Box>
  );
};

export default HeroSection;
