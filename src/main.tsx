import React from "react";
import ReactDOM from "react-dom/client";

import HomePage from "./pages/home";

import "./index.css";
import "./i18n/i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
);
