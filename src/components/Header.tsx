import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  InputBase,
  Box,
} from "@mui/material";
import { Search } from "@mui/icons-material";

const Header: React.FC = () => {
  return (
    // Outer container for logo and ribbons
    <Box
      sx={{
        background: "rgb(255, 255, 255)",
        display: "flex",
        // justifyContent: "space-between",
        alignItems: "center",
        px: 0,
        py: 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src="/src/assets/logo.jpeg"
          alt="Pace Hospitals"
          style={{
            maxHeight: "10rem", // Adjust this value as needed
            width: "auto",
            objectFit: "contain",
          }}
        />
      </Box>

      {/* Top Ribbon */}
      <Box width="100%" height="100%" sx={{ px: 0, py: 0 }}>
        <Box
          sx={{
            width: "100%", // Ensure it spans full width if needed
            height: "5rem",
            bgcolor: "black",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
            <Button color="inherit" size="small">
              Patient Guide
            </Button>
            <Button color="inherit" size="small">
              Book Health Packages
            </Button>
            <Button color="inherit" size="small">
              Patient Login
            </Button>
          </Box>

          {/* Right Section */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {/*  Helpline */}
            <Box
              sx={{
                bgcolor: "error.main",
                px: 1.5,
                py: 0.5,
                height: "100%",
                borderRadius: 1,
                fontWeight: "bold",
              }}
            >
              24x7 Helpline: 040 4848 6868
            </Box>
            {/* Search */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                borderRadius: 24,
                bgcolor: "rgba(255, 255, 255, 0.2)",
                pl: 2,
                pr: 1,
              }}
            >
              <InputBase
                placeholder="Search..."
                inputProps={{ "aria-label": "Search" }}
                sx={{ color: "white", width: 200 }}
              />
              <IconButton aria-label="Search" sx={{ color: "white" }}>
                <Search fontSize="small" />
              </IconButton>
            </Box>
          </Box>
        </Box>

        {/* Main Navigation */}
        <AppBar
          position="static"
          color="transparent"
          sx={{
            backdropFilter: "blur(10px)",
            boxShadow: "none",
            borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
            width: "100%", // Make sure it takes full width
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              px: 4,
              py: 1,
            }}
          >
            {/* Navigation Links */}
            <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
              <Button color="inherit">Home</Button>
              <Button color="inherit">About Us</Button>
              <Button color="inherit">Specialties</Button>
              <Button color="inherit">Our Doctors</Button>
              <Button color="inherit">Book Appointment</Button>
              <Button color="inherit">Second Opinion</Button>
              <Button color="inherit">More</Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  );
};

export default Header;
