import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "@arcgis/core/assets/esri/themes/dark/main.css";
import { DarkModeContext, DarkModeContextProvider } from "./context/DarkModeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </React.StrictMode>
);
