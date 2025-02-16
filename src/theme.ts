import { createTheme } from "@mui/material/styles";
import "./App.css";

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "Vazirmatn, Arial, sans-serif",
    htmlFontSize: 16,
  },
  palette: {
    primary: {
      main: "#D84315", // Darker orange (better contrast)
      dark: "#BF360C",
      light: "#FF5722",
      contrastText: "#FFFFFF", // Explicit white text for better readability
    },
    secondary: {
      main: "#1565C0", // Adjusted blue for better harmony
      dark: "#0D47A1",
      light: "#42A5F5",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#F5F5F5", // Light gray instead of blue for better neutrality
      paper: "#FFFFFF", // Added paper color for surfaces
    },
    text: {
      primary: "#1A202C", // High contrast dark gray
      secondary: "#4A5568", // Slightly lighter for secondary text
    },
    error: {
      main: "#D32F2F", // Standard error red
    },
    warning: {
      main: "#ED6C02", // Standard warning orange
    },
    success: {
      main: "#2E7D32", // Standard success green
    },
    info: {
      main: "#0288D1", // Darker info blue for better visibility
    },
  },
  components: {
    // Add component-specific overrides if needed
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // Disable uppercase transformation
        },
      },
    },
  },
});

export default theme;
