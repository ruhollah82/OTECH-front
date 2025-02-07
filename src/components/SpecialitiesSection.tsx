import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const SpecialitiesSection: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          backgroundColor: "#79D7BE",
          padding: { xs: "2rem 1rem", sm: "3rem 2rem", md: "4rem 3rem" },
          position: "relative",
        }}
      >
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Box
              id="1912756758"
              sx={{
                transitionDuration: "1s",
                transitionTimingFunction: "ease-in-out",
                transitionProperty: "opacity",
                lineHeight: "initial",
              }}
              data-element-type="paragraph"
              data-version="5"
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "27px", sm: "34px" },
                  fontWeight: 700,
                  color: "#000957",
                  display: "inline",
                }}
              >
                تخصص‌های ما
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          textAlign: "center",
          backgroundColor: "#FEF9E1",
          padding: { xs: "2rem 1rem", sm: "3rem 2rem", md: "4rem 3rem" },
          boxShadow: 3,
        }}
      >
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Box
              sx={{
                transition: "opacity 1s ease-in-out",
                padding: 2,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  display: "unset",
                  fontSize: { xs: "1rem", sm: "1.25rem" },
                  color: "#333",
                }}
              >
                بیمارستان‌های PACE
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  display: "unset",
                  fontSize: { xs: "1rem", sm: "1.125rem" },
                  color: "#555",
                  lineHeight: 1.8,
                  textAlign: "justify",
                }}
              >
                بیمارستان‌های PACE یکی از بهترین بیمارستان‌های چندتخصصی در
                حیدرآباد، تلانگانا، هند هستند که خدمات پزشکی گسترده‌ای در
                زمینه‌های مختلف از جمله گاستروانتولوژی، جراحی گاستروانتولوژی،
                آنکولوژی، هپاتولوژی، اورولوژی، ارتوپدی، جراحی ستون فقرات،
                آنکولوژی، جراحی پلاستیک و ترمیمی، نورولوژی، جراحی مغز و اعصاب،
                پزشکی داخلی و مراقبت‌های ویژه، غدد درون‌ریز، زنان و زایمان و
                دیگر زمینه‌های پزشکی ارائه می‌دهند. در PACE، ما بر رفاه بیماران
                و بهبود کیفیت زندگی تمرکز داریم و همواره در تلاش هستیم تا خدمات
                بهداشتی شفاف، جامع و مقرون به صرفه را ارائه دهیم که با نیازهای
                روزافزون جامعه هماهنگ باشد.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SpecialitiesSection;
