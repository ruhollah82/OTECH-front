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
  IconButton,
  styled,
  keyframes,
  Button,
} from "@mui/material";
import {
  AccountCircle,
  Assignment,
  ExitToApp,
  ChevronLeft,
} from "@mui/icons-material";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
`;

const GradientDivider = styled(Divider)(({ theme }) => ({
  background: `linear-gradient(90deg, transparent 0%, ${theme.palette.primary.main} 50%, transparent 100%)`,
  height: "2px",
}));

interface DrawerComponentProps {
  open: boolean;
}

const DrawerComponent = forwardRef<HTMLDivElement, DrawerComponentProps>(
  ({ open }, ref) => {
    return (
      <Drawer
        sx={{
          width: 300,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 300,
            background: "rgba(15, 13, 41, 0.95)",
            backdropFilter: "blur(12px)",
            borderLeft: `1px solid rgba(255,255,255,0.1)`,
            boxShadow: "0 0 40px rgba(96,239,255,0.1)",
            "&:hover": {
              boxShadow: "0 0 60px rgba(96,239,255,0.2)",
            },
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
        ref={ref}
      >
        {/* Header Section */}
        <Box sx={{ p: 3, position: "relative" }}>
          <IconButton
            sx={{
              position: "absolute",
              left: 16,
              top: 16,
              color: "rgba(255,255,255,0.8)",
            }}
          >
            <ChevronLeft fontSize="large" />
          </IconButton>
          <Avatar
            alt="User Avatar"
            src="/media/younes.jpeg"
            sx={{
              width: 100,
              height: 100,
              border: "3px solid",
              borderColor: "primary.main",
              boxShadow: "0 0 20px rgba(96,239,255,0.3)",
              "&:hover": {
                animation: `${float} 2s infinite ease-in-out`,
              },
            }}
          />
          <Typography
            variant="h6"
            sx={{
              mt: 2,
              background: "linear-gradient(45deg, #00ff87 30%, #60efff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 700,
            }}
          >
            یونس قرایی
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255,255,255,0.7)",
              mt: 0.5,
            }}
          >
            RRPM14035456
          </Typography>
        </Box>

        <GradientDivider />

        {/* Navigation Items */}
        <List sx={{ p: 2 }}>
          {[
            { text: "اطلاعات بیمار", icon: <AccountCircle sx={{ ml: 1 }} /> },
            { text: "فعالیت های بیمار", icon: <Assignment sx={{ ml: 1 }} /> },
            { text: "خروج از حساب", icon: <ExitToApp sx={{ ml: 1 }} /> },
          ].map((item, index) => (
            <ListItem
              key={item.text}
              component={Button}
              sx={{
                borderRadius: 2,
                mb: 1,
                transition: "all 0.3s ease",
                "&:hover": {
                  background:
                    "linear-gradient(90deg, rgba(96,239,255,0.1) 0%, transparent 100%)",
                  transform: "translateX(-5px)",
                },
                ...(index === 2 && {
                  background:
                    "linear-gradient(90deg, rgba(255,0,87,0.1) 0%, transparent 100%)",
                  "&:hover": {
                    background:
                      "linear-gradient(90deg, rgba(255,0,87,0.2) 0%, transparent 100%)",
                  },
                }),
              }}
            >
              {item.icon}
              <ListItemText
                primary={item.text}
                sx={{
                  "& .MuiTypography-root": {
                    color: index === 2 ? "#ff0057" : "rgba(255,255,255,0.9)",
                    fontWeight: 500,
                    fontSize: "1.1rem",
                  },
                }}
              />
            </ListItem>
          ))}
        </List>

        {/* Footer */}
        <Box sx={{ mt: "auto", p: 2, textAlign: "center" }}>
          <Typography
            variant="caption"
            sx={{
              color: "rgba(255,255,255,0.5)",
              display: "block",
            }}
          >
            نسخه ۲.۴.۱
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: "rgba(255,255,255,0.3)",
              display: "block",
            }}
          >
            © ۲۰۲۳ OTECH-MS
          </Typography>
        </Box>
      </Drawer>
    );
  }
);

export default DrawerComponent;
