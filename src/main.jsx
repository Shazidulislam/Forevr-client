import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./router/router.jsx";
import ShopContextProvider from "./Context/Shop/ShopContextProvider.jsx";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ShopContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </ShopContextProvider>
  </StrictMode>
);
