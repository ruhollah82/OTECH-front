import { Box, Typography, Button, Stack, Divider, Grid } from "@mui/material";

const ParallaxSection = () => {
  return (
    <Box
      sx={{
        // position: "relative",
        // textAlign: "center",
        backgroundColor: "#f6f6f6",
        // minHeight: "100vh",
        display: "flex",
        // alignItems: "center",
        justifyContent: "center",
        px: 4, // Increased padding
        paddingTop: "8rem",
      }}
    >
      <Box
        sx={{
          position: "relative",
          top: "-12rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          px: 5, // Increased padding
          py: 8, // Increased padding

          //   borderRadius: 4,
          border: "8px solid #B7B7B7",
          backgroundImage: "url('/src/assets/mm.jpg')",
          backgroundSize: "100vw",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center -5rem",

          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            // borderRadius: 4,
          },
        }}
      >
        {/* Content remains the same */}
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: 36, md: 56 }, // Increased font size
            color: "white",
            fontWeight: "bold",
            position: "relative",
          }}
        >
          We are PACE Hospitals
        </Typography>

        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: 30, md: 40 }, // Increased font size
            color: "#FFE9AA",
            mt: 3, // Adjusted margin-top
            textAlign: "center",
            position: "relative",
          }}
        >
          Best Multi-Super Speciality Hospitals in Hyderabad
        </Typography>

        <Divider
          sx={{ width: "70%", my: 4, borderWidth: "3px", borderColor: "grey" }} // Adjusted width and margin
        />

        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: 24, md: 36 }, // Increased font size
            fontWeight: "bold",
            color: "white",
            position: "relative",
          }}
        >
          State-of-the-art Liver and Kidney Transplant Centre
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: 18, md: 22 }, // Increased font size
            color: "white",
            textAlign: "center",
            maxWidth: "900px", // Increased max-width
            mt: 3, // Adjusted margin-top
            position: "relative",
          }}
        >
          <strong>PACE Hospitals</strong> is one of the{" "}
          <strong>Best Hospitals in Hyderabad, India</strong> with proven
          credentials in delivering excellent care for a wide range of tertiary
          healthcare services with personalized and ethical Next Gen Medicare.
        </Typography>

        <Stack direction={{ xs: "column", md: "row" }} spacing={4} mt={5}>
          {" "}
          {/* Increased spacing */}
          <Button
            variant="contained"
            href="/liver-transplant"
            sx={{
              bgcolor: "primary.main",
              color: "white",
              px: 5, // Increased padding
              py: 3, // Increased padding
              borderRadius: 3,
              position: "relative",
            }}
          >
            Dept of Liver Transplant
          </Button>
          <Button
            variant="contained"
            href="/kidney-transplant"
            sx={{
              bgcolor: "primary.main",
              color: "white",
              px: 5, // Increased padding
              py: 3, // Increased padding
              borderRadius: 3,
              position: "relative",
            }}
          >
            Dept of Kidney Transplant
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ParallaxSection;
