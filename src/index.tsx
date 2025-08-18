import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import "./assets/font/better_yesterday/Better-Yesterday.eot";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error('Failed to find the root element');

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  const root = createRoot(rootElement);
  root.render(app);
}
