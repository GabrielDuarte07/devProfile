import React from "react";
import Home from "./src/pages/Home";
import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";

export default function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
