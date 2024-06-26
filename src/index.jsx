import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import theme from "./theme";
import ToastContainerCondition from "./components/shared/ToastContainerWrapper/ToastContainerWrapper";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
        <ToastContainerCondition />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
