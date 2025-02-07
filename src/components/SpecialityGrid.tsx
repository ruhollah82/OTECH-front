import { Grid, Card, CardActionArea, Typography, Box } from "@mui/material";
import { ReactElement } from "react";
import { useTheme } from "@mui/material/styles"; // To access the theme
import React from "react"; // Add this import to fix the warning

interface SpecialityItem {
  href: string;
  icon: ReactElement;
  title: string;
  iconColor?: string; // Optional prop to allow custom icon color
}

interface SpecialityGridProps {
  specialities: SpecialityItem[];
}

const SpecialityGrid = ({ specialities }: SpecialityGridProps) => {
  const theme = useTheme(); // Access the theme

  return (
    <Box overflow="hidden">
      <Grid
        container
        justifyContent="center"
        spacing={4}
        sx={{
          py: 8,
          px: 16,
          backgroundColor: theme.palette.background.default, // Cream background
        }}
      >
        {specialities.map((speciality, index) => (
          <Grid item key={index} xs={6} md={3}>
            <Card
              elevation={2}
              sx={{
                backgroundColor: "#ffff", // Clean white background for cards
                borderRadius: "16px", // Rounded corners
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                "&:hover": {
                  transform: "translateY(-5px)", // Subtle hover effect
                  boxShadow: `0 2px 20px ${theme.palette.info.main}`, // Slight shadow on hover
                },
              }}
            >
              <CardActionArea
                href={speciality.href}
                sx={{
                  p: 2,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Grid
                  item
                  sx={{
                    fontSize: 48,
                    color: speciality.iconColor || theme.palette.primary.main, // Default color or custom passed color
                  }}
                >
                  {React.cloneElement(speciality.icon, {
                    style: {
                      color:
                        speciality.iconColor || theme.palette.secondary.main,
                    }, // Apply custom color
                  })}
                </Grid>
                <Grid item>
                  <Typography
                    variant="h6"
                    align="center"
                    fontWeight="bold"
                    sx={{
                      color: theme.palette.secondary.main, // Dark text color
                      mt: 1, // Margin top for better spacing
                    }}
                  >
                    {speciality.title}
                  </Typography>
                </Grid>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SpecialityGrid;
