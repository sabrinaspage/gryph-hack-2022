import React from "react";
import ReactDOM from "react-dom/client";
import GryphRouter from "./components/GryphRouter";
import theme from "./styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import Provider from "./states/Provider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <Provider>
        <GryphRouter />
      </Provider>
    </React.StrictMode>
  </ThemeProvider>
);
