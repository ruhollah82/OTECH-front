import { Box, Typography, Button, Stack, Divider } from "@mui/material";

const ParallaxSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FEF9E1",
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

          border: "8px solid #FF8000",
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
          پلتفرم هوشمند بیماران MS
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
          ارائه راه حل های نوآورانه برای بیماران MS
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
          اولین مرکز ارائه خدمات هوشمند
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
          این پروژه بستری مبتنی بر هوش مصنوعی برای بیماران مبتلا به ام اس است که
          خدمات مورد نیاز انان را با استفاده از پردازش تصویر و یادگیری ماشین
          ارایه میدهد
        </Typography>
      </Box>
    </Box>
  );
};

export default ParallaxSection;
