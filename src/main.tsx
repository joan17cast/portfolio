import React from "react";
import ReactDOM from "react-dom/client";


import "./index.css";
import "./i18n/i18n";

import { RouterProvider } from "@tanstack/react-router";

import { router } from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
