import React from "react";
import {
  Box,
  Grid,
  IconButton,
  Typography,
  Link,
  Divider,
} from "@mui/material";
import {
  WhatsApp,
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  LinkedIn,
  Pinterest,
  Email,
} from "@mui/icons-material";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{ backgroundColor: "primary.dark", padding: "32px", color: "white" }}
    >
      <Grid container spacing={4} justifyContent="center">
        {/* Social Media Section */}
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <IconButton
              href="https://web.whatsapp.com/send?phone=918977889778"
              target="_blank"
              aria-label="Whatsapp"
              sx={{ color: "white" }}
            >
              <WhatsApp sx={{ fontSize: 40 }} />
            </IconButton>
            <IconButton
              href="https://www.facebook.com/PaceHospitals"
              target="_blank"
              aria-label="Facebook"
              sx={{ color: "white" }}
            >
              <Facebook sx={{ fontSize: 40 }} />
            </IconButton>
            <IconButton
              href="https://twitter.com/pacehospitals"
              target="_blank"
              aria-label="Twitter"
              sx={{ color: "white" }}
            >
              <Twitter sx={{ fontSize: 40 }} />
            </IconButton>
            <IconButton
              href="https://instagram.com/pacehospitals/"
              target="_blank"
              aria-label="Instagram"
              sx={{ color: "white" }}
            >
              <Instagram sx={{ fontSize: 40 }} />
            </IconButton>
            <IconButton
              href="https://www.youtube.com/c/PACEHospitals"
              target="_blank"
              aria-label="YouTube"
              sx={{ color: "white" }}
            >
              <YouTube sx={{ fontSize: 40 }} />
            </IconButton>
            <IconButton
              href="https://in.linkedin.com/company/pace-hospitals"
              target="_blank"
              aria-label="LinkedIn"
              sx={{ color: "white" }}
            >
              <LinkedIn sx={{ fontSize: 40 }} />
            </IconButton>
            <IconButton
              href="https://in.pinterest.com/pacehospitals/"
              target="_blank"
              aria-label="Pinterest"
              sx={{ color: "white" }}
            >
              <Pinterest sx={{ fontSize: 40 }} />
            </IconButton>
            <IconButton
              href="mailto:health@pacehospitals.in"
              target="_blank"
              aria-label="Email"
              sx={{ color: "white" }}
            >
              <Email sx={{ fontSize: 40 }} />
            </IconButton>
          </Box>
        </Grid>

        {/* Divider */}
        <Grid item xs={12}>
          <Divider sx={{ backgroundColor: "white", marginY: 3 }} />
        </Grid>

        {/* Copyright Section */}
        <Grid item xs={12} sm={5}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="body2" align="center" sx={{ marginBottom: 1 }}>
              © 2025 All Rights Reserved | PACE Hospitals
            </Typography>
            <Typography variant="body2" align="center">
              <Link
                href="https://www.pacehospitals.in"
                color="inherit"
                underline="hover"
              >
                Visit our website
              </Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
