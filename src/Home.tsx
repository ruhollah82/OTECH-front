import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SpecialityCare from "./components/SuperSpecialy";
import ParallaxSection from "./components/Parallaxsection";
import SpecialitiesSection from "./components/SpecialitiesSection";
import AccordionGparent from "./components/AccordionGparent";
import HmpvSection from "./components/HmpvSection";
import ArticleParent from "./components/ArticleParent";
import StatsComponent from "./components/StatsComponent";
import Footer from "./components/Footer";
import DrawerComponent from "./components/DrawerComponent";
import { Box, Container } from "@mui/material";

const Home: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer((prev) => !prev);
  };

  // Close drawer when clicking outside
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
    <Box
      sx={{
        background:
          "url('/media/Surgical-Technologist-blog-image-1.png') center/cover no-repeat fixed",
      }}
    >
      <Header toggleDrawer={toggleDrawer} />
      <DrawerComponent open={openDrawer} />
      <SpecialityCare />
      <ParallaxSection />
      <SpecialitiesSection />
      <AccordionGparent />
      <HmpvSection />
      <ArticleParent />
      <StatsComponent />
      <Footer />
    </Box>
  );
};

export default Home;
