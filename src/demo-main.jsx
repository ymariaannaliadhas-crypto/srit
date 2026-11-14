import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import App from "./App.jsx";
import { SmartSearchOverlay } from "./features/smart-search";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Renders the unmodified real website */}
    <App />

    {/* Mounts the Smart Search overlay with floating trigger & Ctrl+K */}
    <SmartSearchOverlay position="bottom-left" />
  </StrictMode>
);
