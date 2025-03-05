import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AnimatePresence } from "framer-motion";
import "./styles/index.css";
import App from "./App";
import React from "react";

const container = document.getElementById("root");
if (container) {
  createRoot(container).render(
    <StrictMode>
      <AnimatePresence>
        <App />
      </AnimatePresence>
    </StrictMode>
  );
} else {
  console.error("Root container not found");
}
