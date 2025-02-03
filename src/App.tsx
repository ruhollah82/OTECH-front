import React, { useState, useEffect, useRef } from "react";
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

const App: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const drawerRef = useRef(null);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  // Close drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node) &&
        openDrawer
      ) {
        setOpenDrawer(false);
      }
    };

    // Add event listener on mount
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDrawer]);

  return (
    <Container>
      <Header toggleDrawer={toggleDrawer} />
      <DrawerComponent
        ref={drawerRef}
        open={openDrawer}
        toggleDrawer={toggleDrawer}
      />
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

export default App;
