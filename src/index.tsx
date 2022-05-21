import React from "react";
import ReactDOM from "react-dom/client";
import GryphRouter from "./components/GryphRouter";
import theme from "./styles/theme";
import { ThemeProvider } from "@mui/material/styles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <GryphRouter />
    </React.StrictMode>
  </ThemeProvider>
);
