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
            بیماری MS چیست
          </Typography>

          <Typography paragraph sx={{ textAlign: "justify" }}>
            بیماری ام‌اس (Multiple Sclerosis) یکی از رایج ترین اختلالات خود
            ایمنی در حوزه سلامت است که تاثیر مستقیم بر توانایی حرکتی و کیفیت
            زندگی بیماران دارد. نظارت مستمر بر وضعیت بیماران، ارائه خدمات
            توانبخشی و ارسال داده‌های تحلیلی به کاردرمانگر از نیازهای اساسی این
            بیماران محسوب می‌شود.
          </Typography>

          <Typography paragraph sx={{ textAlign: "justify" }}>
            با این حال، دسترسی محدود به خدمات تخصصی در مناطق مختلف، هزینه‌های
            بالای درمان، کمبود زمان کافی و تراکم کم جمعیت بیماران ام اس نسبت به
            هر منطقه و عدم امکان نظارت دقیق بر وضعیت بیماران، از مشکلات رایج این
            حوزه هستند.
          </Typography>

          <Button
            variant="contained"
            href="/rt-pcr-test-for-hmpv"
            component={motion.button}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            sx={{
              mt: 2,

              fontWeight: "bold",
              borderRadius: "24px",
              boxShadow: theme.shadows[2],
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                boxShadow: theme.shadows[6],
              },
            }}
          >
            بیشتر بخوانید ...
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HmpvSection;
