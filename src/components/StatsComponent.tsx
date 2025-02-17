import { Grid, Typography, Box, Divider, Button, Link } from "@mui/material";
import {
  EmojiEmotions,
  LocalHospital,
  MedicalServices,
  EmojiEvents,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles"; // Import useTheme to access the theme
import theme from "../theme";

const ContrastText = theme.palette.primary.contrastText;
const StatsComponent = () => {
  const theme = useTheme(); // Access the theme

  return (
    <Box sx={{ overflow: "hidden" }}>
      <Grid
        container
        justifyContent="center"
        spacing={4}
        sx={{
          py: "2rem",
          textAlign: "center",
          backgroundColor: theme.palette.secondary.main, // Using Dark Blue from the theme
          gap: "2rem",
          flexDirection: { xs: "column", md: "row" }, // Stack on small screens, row on medium and above
        }}
      >
        {/* Item 1 */}
        <Grid item xs={6} md={2}>
          <Box sx={{ color: "white" }}>
            <EmojiEmotions sx={{ fontSize: 64, color: ContrastText }} />
            <Typography
              variant="h2"
              sx={{
                mt: 2,
                color: ContrastText,
                fontSize: { xs: 24, md: 32 },
              }}
            >
              3,12,338
            </Typography>
            <Typography variant="body1" sx={{ color: ContrastText, mt: 1 }}>
              بیماران راضی
            </Typography>
          </Box>
        </Grid>

        <Divider orientation="vertical" variant="middle" flexItem />

        {/* Item 2 */}
        <Grid item xs={6} md={2}>
          <Box sx={{ color: "white" }}>
            <LocalHospital sx={{ fontSize: 64, color: ContrastText }} />
            <Typography
              variant="h2"
              sx={{
                mt: 2,
                color: ContrastText,
                fontSize: { xs: 24, md: 32 },
              }}
            >
              98,538
            </Typography>
            <Typography variant="body1" sx={{ color: ContrastText, mt: 1 }}>
              تعداد کاربران فعال
            </Typography>
          </Box>
        </Grid>

        <Divider orientation="vertical" variant="middle" flexItem />

        {/* Item 3 */}
        <Grid item xs={6} md={2}>
          <Box sx={{ color: "white" }}>
            <MedicalServices sx={{ fontSize: 64, color: ContrastText }} />
            <Typography
              variant="h2"
              sx={{
                mt: 2,
                color: ContrastText,
                fontSize: { xs: 24, md: 32 },
              }}
            >
              684
            </Typography>
            <Typography variant="body1" sx={{ color: ContrastText, mt: 1 }}>
              کادر پزشکی
            </Typography>
          </Box>
        </Grid>

        <Divider orientation="vertical" variant="middle" flexItem />

        {/* Item 4 */}
        <Grid item xs={6} md={2}>
          <Box sx={{ color: "white" }}>
            <EmojiEvents sx={{ fontSize: 64, color: ContrastText }} />
            <Typography
              variant="h2"
              sx={{
                mt: 2,
                color: ContrastText,
                fontSize: { xs: 24, md: 32 },
              }}
            >
              2011
            </Typography>
            <Typography variant="body1" sx={{ color: ContrastText, mt: 1 }}>
              سال تأسیس
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        justifyContent="center"
        sx={{
          py: 4,
          textAlign: "center",
          bgcolor: theme.palette.secondary.dark, // Using the orange color from the theme
        }}
      >
        <Grid item xs={12} md={8} sx={{ mb: { xs: 2, md: 0 } }}>
          <Typography
            variant="h3"
            component="h3"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: 26, md: 30 },
              lineHeight: 1.5,
              color: ContrastText,
              mb: 2,
            }}
          >
            بازخورد شما دستاورد ماست.
          </Typography>
          <Link
            href="/#reviews"
            sx={{
              color: ContrastText,
              fontSize: 18,
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            <Typography>
              بازخورد و پیشنهادات ارزشمند خود را برای ما ارسال کنید.
            </Typography>
          </Link>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            href="/patient-feedback"
            sx={{
              borderRadius: "4px",
              color: "white",
              bgcolor: theme.palette.secondary.main,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              py: 1.5,
              px: 4,
              fontSize: 16,
              fontWeight: "bold",
              textTransform: "none",
              boxShadow: 3,
              "&:hover": {
                boxShadow: 5,
                transform: "translateY(-2px)",
              },
            }}
          >
            برای ارائه بازخورد خود اینجا کلیک کنید
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StatsComponent;
