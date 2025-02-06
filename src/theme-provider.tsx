import { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";

// Create RTL cache
const cacheRtl = createCache({
  key: "mui-rtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

interface Props {
  children: ReactNode;
}

export function ThemeProviderWrapper({ children }: Props) {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div dir="rtl">{children}</div> {/* Ensure text alignment */}
      </ThemeProvider>
    </CacheProvider>
  );
}
