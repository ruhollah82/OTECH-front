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
import theme from "../theme";

interface HeaderProps {
  toggleDrawer: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleDrawer }) => {
  return (
    <Box
      sx={{
        background: "background",
        display: "flex",
        alignItems: "center",
        maxWidth: "100",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <img
          src="/media/logo.jpeg"
          alt="OTECH-MS"
          style={{
            maxHeight: "10rem",
            width: "auto",
            objectFit: "contain",
          }}
        />
      </Box>

      <Box height="100%" sx={{ px: 0, py: 0, width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            bgcolor: "#000957",
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
                راهنمای بیمار
              </Button>
              <Button color="inherit" size="small">
                رزرو بسته سلامتی
              </Button>
              <Button href="/login" color="inherit" size="small">
                ورود بیمار
              </Button>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
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
                  placeholder="جستجو..."
                  inputProps={{ "aria-label": "Search" }}
                  sx={{ color: "white", width: 200 }}
                />
                <IconButton aria-label="Search" sx={{ color: "white" }}>
                  <Search fontSize="small" />
                </IconButton>
              </Box>

              <Button
                onClick={toggleDrawer}
                sx={{
                  color: "gray",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Typography variant="h6" sx={{ color: "white" }}>
                  یونس قرایی
                </Typography>
                <Avatar
                  alt="آواتار کاربر"
                  src="/media/_______.jpeg"
                  sx={{ width: 50, height: 50, marginBottom: "8px" }}
                />
              </Button>
            </Box>
          </Box>
        </Box>

        <AppBar
          position="static"
          color="transparent"
          sx={{
            backdropFilter: "blur(10px)",
            boxShadow: "none",
            width: "100%",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              px: 4,
              py: 1,
              bgcolor: "#F6F6F6",
            }}
          >
            <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
              <Button color="inherit">خانه</Button>
              <Button color="inherit">درباره ما</Button>
              <Button color="inherit">تخصص‌ها</Button>
              <Button color="inherit">پزشکان</Button>
              <Button color="inherit">رزرو نوبت</Button>
              <Button color="inherit">نظرات شما</Button>
              <Button color="inherit">بیشتر</Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  );
};

export default Header;
