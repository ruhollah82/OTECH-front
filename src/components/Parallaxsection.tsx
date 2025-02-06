import { Box, Typography, Button, Stack, Divider } from "@mui/material";

const ParallaxSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f6f6f6",
        display: "flex",
        justifyContent: "center",
        px: 4,
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
          px: 5,
          py: 8,

          border: "8px solid #B7B7B7",
          backgroundImage: "url('/media/mm.jpg')",
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
          },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: 36, md: 56 },
            color: "white",
            fontWeight: "bold",
            position: "relative",
          }}
        >
          ما بیمارستان‌های PACE هستیم
        </Typography>

        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: 30, md: 40 },
            color: "#FFE9AA",
            mt: 3,
            textAlign: "center",
            position: "relative",
          }}
        >
          بهترین بیمارستان‌های چند تخصصی در حیدرآباد
        </Typography>

        <Divider
          sx={{ width: "70%", my: 4, borderWidth: "3px", borderColor: "grey" }}
        />

        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: 24, md: 36 },
            fontWeight: "bold",
            color: "white",
            position: "relative",
          }}
        >
          مرکز پیوند کبد و کلیه پیشرفته
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: 18, md: 22 },
            color: "white",
            textAlign: "center",
            maxWidth: "900px",
            mt: 3,
            position: "relative",
          }}
        >
          <strong>بیمارستان‌های PACE</strong> یکی از{" "}
          <strong>بهترین بیمارستان‌های حیدرآباد، هند</strong> است که با اعتبار
          اثبات‌شده در ارائه مراقبت‌های عالی در مجموعه‌ای از خدمات بهداشتی
          terciary با مراقبت‌های شخصی‌شده و پزشکی نسل آینده فعالیت می‌کند.
        </Typography>

        <Stack direction={{ xs: "column", md: "row" }} spacing={4} mt={5}>
          <Button
            variant="contained"
            href="/liver-transplant"
            sx={{
              bgcolor: "primary.main",
              color: "white",
              px: 5,
              py: 3,
              borderRadius: 3,
              position: "relative",
            }}
          >
            بخش پیوند کبد
          </Button>
          <Button
            variant="contained"
            href="/kidney-transplant"
            sx={{
              bgcolor: "primary.main",
              color: "white",
              px: 5,
              py: 3,
              borderRadius: 3,
              position: "relative",
            }}
          >
            بخش پیوند کلیه
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ParallaxSection;
