import React from "react";
import ReactDOM from "react-dom/client";
import GryphRouter from "./components/GryphRouter";
import Provider from "./states/Provider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider>
    <React.StrictMode>
      <GryphRouter />
    </React.StrictMode>
  </Provider>
);
