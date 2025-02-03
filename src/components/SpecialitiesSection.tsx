import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const SpecialitiesSection: React.FC = () => {
  return (
    <>
      {/* First Section */}
      <Box
        sx={{
          textAlign: "center",
          backgroundColor: "#91AEFD", // Top section background color
          padding: { xs: "2rem 1rem", sm: "3rem 2rem", md: "4rem 3rem" }, // Adjust padding for responsiveness
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
                transitionDelay: "initial",
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
                  color: "#fff", // White text for contrast against the blue background
                  display: "inline",
                }}
              >
                Our Specialities
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Second Section */}
      <Box
        sx={{
          textAlign: "center",
          backgroundColor: "#fff", // Second section background color
          padding: { xs: "2rem 1rem", sm: "3rem 2rem", md: "4rem 3rem" }, // Padding for spacing
          boxShadow: 3, // Adding subtle shadow for depth
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
                  color: "#333", // Dark text for contrast on light background
                }}
              >
                PACE Hospitals
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  display: "unset",
                  fontSize: { xs: "1rem", sm: "1.125rem" },
                  color: "#555", // Slightly lighter text for readability
                  lineHeight: 1.8, // Increase line-height for better readability
                  textAlign: "justify", // Justify text for a cleaner appearance
                }}
              >
                is one of the{" "}
                <strong style={{ fontWeight: "bold" }}>
                  Best Multi-Super Speciality Hospital in Hyderabad
                </strong>
                , Telangana, India, focused on tertiary care services in the
                field of Medical Gastroenterology, Surgical Gastroenterology, GI
                &amp; HPB Oncology, Hepatology, Urology, Andrology, Nephrology
                &amp; Dialysis, Orthopaedics, Sports Medicine &amp; Joint
                Replacement, Spine Surgery, Medical &amp; Surgical Oncology,
                Pulmonology, Bariatrics &amp; Diabetology, Cardiology,
                Cardiothoracic Surgery, Plastic &amp; Reconstructive Surgery,
                Neurology, Neurosurgery, Internal Medicine &amp; Critical Care,
                Endocrinology, Obstetrics &amp; Gynaecology, ENT, Pediatrics,
                Dermatology, Psychiatry, Physiotherapy and Dentistry. At PACE,
                we are focused on wellness. We are striving to enhance the
                quality of life, not mere sickness management. Our healthcare
                delivery system is attuned to providing transparent, inclusive,
                cost-effective services that are in harmony with the growing
                local needs.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SpecialitiesSection;
