import { Box, Grid, Typography, Link, Button, useTheme } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { motion } from "framer-motion";

const HmpvSection = () => {
  const theme = useTheme();

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      sx={{
        textAlign: "center",
        width: "100%",
        overflow: "hidden",
        py: { xs: 4, md: 8 },
        // Fixed image path
        background:
          "url('/media/GettyImages-1652856485-3000x2000.jpg') center/cover no-repeat fixed",
      }}
    >
      <Grid container spacing={2}>
        {/* Spacer Column */}
        <Grid item xs={12} md={5} />

        {/* Content Column */}
        <Grid
          item
          xs={12}
          md={7}
          component={motion.div}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          sx={{
            textAlign: "left",
            padding: "4rem",
            bgcolor: "rgba(255,255,255,0.9)",
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              color: theme.palette.primary.main,
              fontWeight: "bold",
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            HMPV RT-PCR Test
          </Typography>

          <Typography paragraph sx={{ textAlign: "justify" }}>
            RT-PCR (Reverse Transcription Polymerase Chain Reaction) for HMPV is
            a molecular diagnostic test used to detect the presence of Human
            Metapneumovirus RNA in a patient's respiratory samples. It involves
            converting RNA into DNA, then amplifying it to detectable levels.
            This test is essential for diagnosing Human Metapneumovirus (HMPV)
            infections.
          </Typography>

          <Typography paragraph sx={{ textAlign: "justify" }}>
            <Link
              href="/human-metapneumovirus-hmpv-symptoms-causes-complications-treatment-prevention"
              color="inherit"
              underline="hover"
            >
              Symptoms of HMPV
            </Link>{" "}
            infection resemble those of other respiratory illnesses and may
            include fever, cough, wheezing, nasal congestion, sore throat, and
            difficulty breathing. In severe cases, HMPV can lead to
            bronchiolitis or{" "}
            <Link
              href="https://www.pacehospital.com/pneumonia-causes-symptoms-types-treatment-prevention"
              target="_blank"
              rel="noopener"
              color="inherit"
              underline="hover"
            >
              pneumonia
            </Link>
            , especially in infants, elderly individuals, and those with
            weakened immune systems.
          </Typography>

          <Button
            variant="contained"
            href="/rt-pcr-test-for-hmpv"
            startIcon={<StarIcon />}
            component={motion.button}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            sx={{
              mt: 2,
              backgroundImage:
                "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
              fontWeight: "bold",
              borderRadius: "24px",
              boxShadow: theme.shadows[2],
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                boxShadow: theme.shadows[6],
              },
            }}
          >
            Know More About HMPV RT-PCR Test
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HmpvSection;
