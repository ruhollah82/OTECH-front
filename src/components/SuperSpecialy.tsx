import { Box, Button, Divider, Typography, Stack } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        p: 6,
        borderRadius: 4,
        backdropFilter: "blur(2px)",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        margin: "5rem",
        mb: "10rem",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: "white",
          fontSize: { xs: 36, md: 48 },
          fontWeight: "bold",
        }}
      >
        OTech - MS
      </Typography>

      <Divider
        sx={{
          borderWidth: "2px",
          borderTopStyle: "solid",
          color: "white",
          my: 3,
        }}
      />
      <Typography
        variant="h2"
        sx={{
          color: "white",
          fontSize: { xs: 36, md: 48 },
          fontWeight: "bold",
          marginBottom: "3rem",
        }}
      >
        پلتفرم هوشمند مراقبت از بیماران MS
      </Typography>

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={3}
        justifyContent="center"
        alignItems="center"
      >
        <Stack spacing={3} sx={{ width: { xs: "100%", md: "40%" } }}>
          <Button
            variant="contained"
            href="#"
            fullWidth
            sx={{
              bgcolor: "primary.main",
              color: "white",
              borderRadius: 3,
              p: 2,
              fontSize: "1.2rem",
            }}
          >
            درمانگر من
          </Button>
          <Button
            variant="contained"
            href="#"
            fullWidth
            sx={{
              bgcolor: "primary.main",
              color: "white",
              borderRadius: 3,
              p: 2,
              fontSize: "1.2rem",
            }}
          >
            دانش افزایی MS
          </Button>
        </Stack>

        <Stack spacing={3} sx={{ width: { xs: "100%", md: "40%" } }}>
          <Button
            variant="contained"
            href="#"
            fullWidth
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              bgcolor: "primary.main",
              color: "white",
              borderRadius: 3,
              p: 2,
              fontSize: "1.2rem",
            }}
          >
            انجام تست های روزانه
          </Button>
          <Button
            variant="contained"
            href="#"
            fullWidth
            sx={{
              bgcolor: "primary.main",
              color: "white",
              borderRadius: 3,
              p: 2,
              fontSize: "1.2rem",
            }}
          >
            جراحی رباتیک
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default HeroSection;
