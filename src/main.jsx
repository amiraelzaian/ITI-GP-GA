import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom"; // not "react-router"
import router from "./routes/AppRoutes";
import "./index.css";
import "./il8n/il8n";
import { ThemeProvider } from "./context/ThemeContext";
import { MovieProvider } from "./context/MovieContext";
import { TvProvider } from "./context/TvContext";
import { WishlistProvider } from "./context/WishlistContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <MovieProvider>
        <TvProvider>
          <WishlistProvider>
            <RouterProvider router={router} />
          </WishlistProvider>
        </TvProvider>
      </MovieProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
