import React, { forwardRef } from "react";
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
  toggleDrawer: () => void;
}

const DrawerComponent = forwardRef<HTMLDivElement, DrawerComponentProps>(
  ({ open, toggleDrawer }, ref) => {
    return (
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
        ref={ref} // Attach the ref to the drawer
      >
        {/* Account Info */}
        <Box sx={{ padding: "16px", textAlign: "center" }}>
          <Avatar
            alt="User Avatar"
            src="https://i.pravatar.cc/150?img=3" // Replace with actual user image URL
            sx={{ width: 100, height: 100, marginBottom: "8px" }}
          />
          <Typography variant="h6">User Name</Typography>
        </Box>
        <Divider />

        {/* Dashboard Links */}
        <List>
          <ListItem button>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
    );
  }
);

export default DrawerComponent;
