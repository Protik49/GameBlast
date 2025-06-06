import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./router/Routes";
import Contexts from "./contexts/Contexts";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Contexts>
      <RouterProvider router={router} />
    </Contexts>
  </StrictMode>
);
