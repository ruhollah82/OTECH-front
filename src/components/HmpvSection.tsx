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
        background:
          "url('/media/GettyImages-1652856485-3000x2000.jpg') center/cover no-repeat fixed",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={5} />

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
          borderRadius="1rem 0 0 1rem"
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
            آزمایش RT-PCR برای ویروس HMPV
          </Typography>

          <Typography paragraph sx={{ textAlign: "justify" }}>
            آزمایش RT-PCR (واکنش زنجیره‌ای پلیمراز معکوس) برای شناسایی RNA ویروس
            متاپنوموویروس انسانی (HMPV) در نمونه‌های تنفسی بیمار استفاده می‌شود.
            این آزمایش با تبدیل RNA به DNA و سپس تقویت آن به میزان قابل شناسایی
            انجام می‌شود. این تست برای تشخیص عفونت‌های HMPV ضروری است.
          </Typography>

          <Typography paragraph sx={{ textAlign: "justify" }}>
            علائم عفونت با HMPV مشابه دیگر بیماری‌های تنفسی است و شامل تب، سرفه،
            خس‌خس سینه، گرفتگی بینی، گلودرد و دشواری در تنفس می‌شود. در موارد
            شدید، این ویروس می‌تواند منجر به برونکوئولیت یا{" "}
            <Link
              href="https://www.pacehospital.com/pneumonia-causes-symptoms-types-treatment-prevention"
              target="_blank"
              rel="noopener"
              color="inherit"
              underline="hover"
            >
              ذات‌الریه
            </Link>
            شود، به‌ویژه در نوزادان، سالمندان و افرادی که سیستم ایمنی ضعیفی
            دارند.
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
            اطلاعات بیشتر درباره آزمایش RT-PCR برای HMPV
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HmpvSection;
