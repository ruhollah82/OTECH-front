import { forwardRef } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Avatar,
  Typography,
  Box,
} from "@mui/material";

const drawerWidth = 240;

interface DrawerComponentProps {
  open: boolean;
}

const DrawerComponent = forwardRef<HTMLDivElement, DrawerComponentProps>(
  ({ open }, ref) => {
    return (
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRadius: "0px",
            background: "rgba(0, 0, 0, 0.9)",
            backdropFilter: "blur(8px)",
            boxShadow: "0 2px 12px rgba(0, 0, 0, 0.3)",
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
        ref={ref}
      >
        {/* Account Info */}
        <Box sx={{ padding: "16px", textAlign: "center" }}>
          <Avatar
            alt="User Avatar"
            src="https://i.pravatar.cc/150?img=3"
            sx={{
              width: 100,
              height: 100,
              marginBottom: "8px",
              borderRadius: "50%",
              border: "3px solid #fff",
            }}
          />
          <Typography variant="h6" sx={{ color: "#fff", fontWeight: 500 }}>
            نام بیمار
          </Typography>
        </Box>
        <Divider sx={{ margin: "8px 0", backgroundColor: "#444" }} />

        {/* Dashboard Links */}
        <List>
          <ListItem
            component="button"
            sx={{
              padding: "12px 16px",
              borderRadius: "8px",
              backgroundColor: "transparent",
              color: "#ddd",
              marginBottom: "12px", // فاصله بین آیتم‌ها
              display: "flex",
              alignItems: "center",
              "&:hover": {
                backgroundColor: "#333",
                color: "#fff",
              },
            }}
          >
            <ListItemText
              primary="داشبورد"
              sx={{ fontWeight: 500, fontSize: "16px" }}
            />
          </ListItem>
          <ListItem
            component="button"
            sx={{
              padding: "12px 16px",
              borderRadius: "8px",
              backgroundColor: "transparent",
              color: "#ddd",
              marginBottom: "12px",
              display: "flex",
              alignItems: "center",
              "&:hover": {
                backgroundColor: "#333",
                color: "#fff",
              },
            }}
          >
            <ListItemText
              primary="تنظیمات"
              sx={{ fontWeight: 500, fontSize: "16px" }}
            />
          </ListItem>
          <ListItem
            component="button"
            sx={{
              padding: "12px 16px",
              borderRadius: "8px",
              backgroundColor: "transparent",
              color: "#ddd",
              marginBottom: "12px",
              display: "flex",
              alignItems: "center",
              "&:hover": {
                backgroundColor: "#333",
                color: "#fff",
              },
            }}
          >
            <ListItemText
              primary="خروج از حساب"
              sx={{ fontWeight: 500, fontSize: "16px" }}
            />
          </ListItem>
        </List>
      </Drawer>
    );
  }
);

export default DrawerComponent;
