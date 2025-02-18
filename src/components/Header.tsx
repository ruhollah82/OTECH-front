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
import { Search, Menu } from "@mui/icons-material";

interface HeaderProps {
  toggleDrawer: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleDrawer }) => {
  return (
    <AppBar
      position="sticky"
      sx={{
        background: "rgba(3, 0, 28, 0.7)",
        backdropFilter: "blur(10px)",
        boxShadow: "none",
        borderBottom: "1px solid rgba(96,239,255,0.2)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 2 }}>
        {/* Left Section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {/* <IconButton sx={{ color: "white" }}>
            <Menu fontSize="medium" />
          </IconButton> */}
          <img
            src="/media/logo.jpeg"
            alt="OTECH-MS"
            style={{ height: "40px", objectFit: "contain" }}
          />
          <Typography
            variant="h6"
            sx={{
              background: "linear-gradient(45deg, #00ff87, #60efff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 700,
              fontSize: "1.25rem",
            }}
          >
            OTech - MS
          </Typography>
        </Box>

        {/* Center Navigation */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {["خانه", "تخصص‌ها", "پزشکان", "رزرو نوبت", "نظرات شما"].map(
            (item) => (
              <Button
                key={item}
                size="small"
                sx={{
                  color: "white",
                  fontSize: "0.875rem",
                  textTransform: "none",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 2px 8px rgba(96,239,255,0.3)",
                  },
                }}
              >
                {item}
              </Button>
            )
          )}
        </Box>

        {/* Right Section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "rgba(255,255,255,0.1)",
              borderRadius: 20,
              px: 1,
              border: "1px solid rgba(96,239,255,0.3)",
              transition: "width 0.3s",
              width: { xs: 120, sm: 150, md: 200 },
              "&:focus-within": {
                width: { xs: 180, md: 250 },
              },
            }}
          >
            <InputBase
              placeholder="جستجو..."
              inputProps={{ "aria-label": "search" }}
              sx={{ color: "white", fontSize: "0.875rem", px: 1 }}
            />
            <IconButton size="small" sx={{ color: "white", p: 0.5 }}>
              <Search fontSize="small" />
            </IconButton>
          </Box>

          <IconButton onClick={toggleDrawer} sx={{ p: 0.5 }}>
            <Avatar
              alt="آواتار کاربر"
              src="/media/_______.jpeg"
              sx={{ width: 32, height: 32 }}
            />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
