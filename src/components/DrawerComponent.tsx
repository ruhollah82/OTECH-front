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
            sx={{ width: 100, height: 100, marginBottom: "8px" }}
          />
          <Typography variant="h6">User Name</Typography>
        </Box>
        <Divider />

        {/* Dashboard Links */}
        <List>
          <ListItem component="button">
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem component="button">
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem component="button">
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
    );
  }
);

export default DrawerComponent;
