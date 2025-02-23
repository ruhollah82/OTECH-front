import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ParallaxSection from "./components/Parallaxsection";
import SpecialitiesSection from "./components/SpecialitiesSection";
import HmpvSection from "./components/HmpvSection";
import ArticleParent from "./components/ArticleParent";
import StatsComponent from "./components/StatsComponent";
import Footer from "./components/Footer";
import DrawerComponent from "./components/DrawerComponent";
import { Box } from "@mui/material";
import CameraStreamer from "./components/GateTest";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

const Home: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { token } = useAuth();
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setOpenDrawer((prev) => !prev);
  };

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        openDrawer &&
        !document
          .querySelector(".MuiDrawer-paper")
          ?.contains(event.target as Node)
      ) {
        setOpenDrawer(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDrawer]);

  return (
    token && (
      <Box
        sx={{
          background:
            "url('/media/robotic-artificial-intelligence-digital-technology-concept-with-robot-free-vector.jpg') center/cover no-repeat fixed",
        }}
      >
        <Header toggleDrawer={toggleDrawer} />
        <DrawerComponent open={openDrawer} />
        <ParallaxSection />
        <SpecialitiesSection />
        <HmpvSection />
        <ArticleParent />
        <CameraStreamer />
        <StatsComponent />
        <Footer />
      </Box>
    )
  );
};

export default Home;
