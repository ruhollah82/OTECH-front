import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProviderWrapper } from "./theme-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProviderWrapper>
      <App />
    </ThemeProviderWrapper>
  </StrictMode>
);
