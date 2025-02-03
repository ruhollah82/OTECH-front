import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import { ReactElement } from "react";

interface SpecialityItem {
  href: string;
  icon: ReactElement;
  title: string;
}

interface SpecialityGridProps {
  specialities: SpecialityItem[];
}

const SpecialityGrid = ({ specialities }: SpecialityGridProps) => {
  return (
    <Grid
      container
      justifyContent="center"
      spacing={4}
      sx={{
        py: 8,
        px: 16,
        backgroundColor: "#f6f6f6",
        Width: "100%",
        // margin: "0 auto",
      }}
    >
      {specialities.map((speciality, index) => (
        <Grid item key={index} xs={6} md={3}>
          <Card
            elevation={4}
            sx={{
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(0, 0, 0, 0.05)",
              borderRadius: "2px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              minWidth: "18vw",
              minHeight: "18vw",
              display: "flex",
              alignItems: "center",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0px 10px 20px rgba(0,0,0,0.15)",
              },
            }}
          >
            <CardActionArea href={speciality.href} sx={{ p: 2 }}>
              <Grid
                container
                direction="column"
                alignItems="center"
                spacing={2}
              >
                <Grid item sx={{ color: "primary.main", fontSize: 48 }}>
                  {speciality.icon}
                </Grid>
                <Grid item>
                  <Typography
                    variant="h6"
                    align="center"
                    fontWeight="bold"
                    sx={{ color: "text.primary" }}
                  >
                    {speciality.title}
                  </Typography>
                </Grid>
              </Grid>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default SpecialityGrid;
