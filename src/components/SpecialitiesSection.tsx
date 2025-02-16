import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import theme from "../theme";

const SpecialitiesSection: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          backgroundColor: theme.palette.info.main,
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
                  color: theme.palette.secondary.main,
                  display: "inline",
                }}
              >
                خدمات هوشمند
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
                variant="body1"
                sx={{
                  display: "unset",
                  fontSize: { xs: "1rem", sm: "1.125rem" },
                  color: "#555",
                  lineHeight: 1.8,
                  textAlign: "justify",
                }}
              >
                این پلتفرم بستری برای دسترسی آسان و راحت بیماران مبتلا و ام اس و
                همراهان بیمار برای مراقبت هرچه بهتر و دقیق تر در حوزه پزشکی است
                و برای تمامی افراد با کمترین امکانات در هر جای ایران امکان پذیر
                است
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SpecialitiesSection;
