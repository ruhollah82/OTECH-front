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
  keyframes,
} from "@mui/material";
import { Search } from "@mui/icons-material";

interface HeaderProps {
  toggleDrawer: () => void;
}

// A subtle floating animation for interactive elements
const floatUp = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
  100% { transform: translateY(0); }
`;

const Header: React.FC<HeaderProps> = ({ toggleDrawer }) => {
  return (
    <Box sx={{ position: "relative", zIndex: 10 }}>
      <AppBar
        position="sticky"
        sx={{
          background: "rgba(3, 0, 28, 0.8)",
          backdropFilter: "blur(10px)",
          boxShadow: "none",
          borderBottom: "1px solid rgba(96,239,255,0.2)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo & Title */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              sx={{
                position: "relative",
                padding: "1rem",
                borderRadius: 2,
                // background: "rgba(255,255,255,0.05)",
                // backdropFilter: "blur(12px)",
                // boxShadow: "0 0 20px rgba(96,239,255,0.3)",
                // border: "1px solid rgba(96,239,255,0.2)",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  borderRadius: 2,
                  padding: "2px",
                  // background: "linear-gradient(45deg, #60efff, #0061ff)",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                },
                // animation: `${floatUp} 3s ease-in-out infinite`,
              }}
            >
              <img
                src="/media/logo.jpeg"
                alt="OTECH-MS"
                style={{
                  maxHeight: "60px",
                  width: "auto",
                  objectFit: "contain",
                }}
              />
            </Box>
            <Typography
              variant="h6"
              sx={{
                background: "linear-gradient(45deg, #00ff87, #60efff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 700,
              }}
            >
              OTech - MS
            </Typography>
          </Box>
          {/* Utility Links, Search Bar & User Info */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            {/* Utility Links */}
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              {["راهنمای بیمار", "رزرو بسته سلامتی", "ورود بیمار"].map(
                (item, index) => (
                  <Button
                    key={index}
                    href={item === "ورود بیمار" ? "/login" : undefined}
                    sx={{
                      color: "white",
                      fontWeight: 500,
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: "0 4px 10px rgba(96,239,255,0.3)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    {item}
                  </Button>
                )
              )}
            </Box>
            {/* Search Box */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                background: "rgba(255,255,255,0.1)",
                borderRadius: "24px",
                pl: 2,
                pr: 1,
                border: "1px solid rgba(96,239,255,0.3)",
                backdropFilter: "blur(6px)",
                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow: "0 0 10px rgba(96,239,255,0.5)",
                },
              }}
            >
              <InputBase
                placeholder="جستجو..."
                inputProps={{ "aria-label": "search" }}
                sx={{ color: "white", width: 200 }}
              />
              <IconButton aria-label="search" sx={{ color: "white" }}>
                <Search fontSize="small" />
              </IconButton>
            </Box>
            {/* User Info Button */}
            <Button
              onClick={toggleDrawer}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                p: 1,
                borderRadius: "16px",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(96,239,255,0.3)",
                backdropFilter: "blur(6px)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 0 10px rgba(96,239,255,0.5)",
                },
              }}
            >
              <Typography variant="body1" sx={{ color: "white" }}>
                یونس قرایی
              </Typography>
              <Avatar
                alt="آواتار کاربر"
                src="/media/_______.jpeg"
                sx={{ width: 40, height: 40 }}
              />
            </Button>
          </Box>
        </Toolbar>
        {/* Main Navigation */}
        <Toolbar
          sx={{
            justifyContent: "center",
            gap: 3,
            borderTop: "1px solid rgba(96,239,255,0.2)",
            bgcolor: "rgba(3, 0, 28, 0.9)",
            py: 1,
          }}
        >
          {[
            "خانه",
            "درباره ما",
            "تخصص‌ها",
            "پزشکان",
            "رزرو نوبت",
            "نظرات شما",
            "بیشتر",
          ].map((item, index) => (
            <Button
              key={index}
              sx={{
                color: "white",
                fontWeight: 500,
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 10px rgba(96,239,255,0.3)",
                },
                transition: "all 0.3s ease",
              }}
            >
              {item}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
