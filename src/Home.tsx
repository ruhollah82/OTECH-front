import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Container from "./components/bgContainer";
import SpecialityCare from "./components/SuperSpecialy";
import ParallaxSection from "./components/Parallaxsection";
import SpecialitiesSection from "./components/SpecialitiesSection";
import AccordionGparent from "./components/AccordionGparent";
import HmpvSection from "./components/HmpvSection";
import ArticleParent from "./components/ArticleParent";
import StatsComponent from "./components/StatsComponent";
import Footer from "./components/Footer";
import DrawerComponent from "./components/DrawerComponent";

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
    <Container>
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
    </Container>
  );
};

export default Home;
