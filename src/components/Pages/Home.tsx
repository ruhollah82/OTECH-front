import React, { useState, useEffect } from "react";
import Header from "../Home/Header";
import ParallaxSection from "../Home/Parallaxsection";
import SpecialitiesSection from "../Home/SpecialitiesSection";
import HmpvSection from "../Home/HmpvSection";
import ArticleParent from "../Home/ArticleParent";
import StatsComponent from "../Home/StatsComponent";
import Footer from "../Home/Footer";
import DrawerComponent from "../Home/DrawerComponent";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

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
        <StatsComponent />
        <Footer />
      </Box>
    )
  );
};

export default Home;
