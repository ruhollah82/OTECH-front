import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "Vazir, Arial, sans-serif",
  },
  palette: {
    primary: {
      main: "#FF8000", // Orange
    },
    secondary: {
      main: "#000957", // Dark Blue
    },
    background: {
      default: "#FEF9E1", // Cream
    },
    info: {
      main: "#79D7BE", // Light Blue
    },
  },
});

export default theme;
