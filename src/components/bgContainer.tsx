import React, { FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  const backgroundImageUrl =
    "/src/assets/Surgical-Technologist-blog-image-1.png"; // Adjust the path if needed

  const containerStyle: React.CSSProperties = {
    backgroundImage: `url(${backgroundImageUrl})`,

    backgroundSize: "cover",
    backgroundPosition: "center 2rem",
    backgroundRepeat: "no-repeat",
    height: "100%",
    backgroundAttachment: "fixed",
  };

  return <div style={containerStyle}>{children}</div>;
};

export default Container;
