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
        Super-Specialty Tertiary Care
      </Typography>

      <Divider
        sx={{
          borderWidth: "2px",
          borderTopStyle: "solid",
          color: "white",
          my: 3,
        }}
      />

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
            Book an appointment
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
            Video / Phone consultation
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
            Online Lab Reports
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
            Robotic Surgery
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default HeroSection;
