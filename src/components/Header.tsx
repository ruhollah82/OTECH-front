import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  InputBase,
  Box,
  Avatar,
  Typography,
} from "@mui/material";
import { Search } from "@mui/icons-material";

interface HeaderProps {
  toggleDrawer: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleDrawer }) => {
  return (
    <Box
      sx={{
        background: "rgb(255, 255, 255)",
        display: "flex",
        alignItems: "center",
        maxWidth: "100",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <img
          src="/media/logo.jpeg"
          alt="Pace Hospitals"
          style={{
            maxHeight: "10rem",
            width: "auto",
            objectFit: "contain",
          }}
        />
      </Box>

      {/* Top Ribbon */}
      <Box height="100%" sx={{ px: 0, py: 0, width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            // height: "5rem",
            bgcolor: "black",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              padding: "1rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              width: "100%",
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
              {/* Search */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  borderRadius: 24,
                  bgcolor: "rgba(255, 255, 255, 0.2)",
                  pl: 2,
                  pr: 1,
                  ml: 2,
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

              {/* Drawer Toggle Button */}
              {/* <IconButton
                aria-label="Open menu"
                sx={{ color: "white", ml: 2 }}
                onClick={toggleDrawer}
              >
                <Menu />
              </IconButton> */}
              <Button
                onClick={toggleDrawer}
                sx={{
                  // padding: "16px",
                  color: "gray",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Typography variant="h6">User ID</Typography>
                <Avatar
                  alt="User Avatar"
                  src="https://i.pravatar.cc/150?img=3"
                  sx={{ width: 50, height: 50, marginBottom: "8px" }}
                />
              </Button>
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
            width: "100%",
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
