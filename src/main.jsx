import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom"; // not "react-router"
import router from "./routes/AppRoutes";
import "./index.css";
import "./il8n/il8n";
import { ThemeProvider } from "./context/ThemeContext";
import { MovieProvider } from "./context/MovieContext";
import { TvProvider } from "./context/TvContext";
import { WatchlistProvider } from "./context/WatchlistContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <MovieProvider>
        <TvProvider>
          <WatchlistProvider>
            <RouterProvider router={router} />
          </WatchlistProvider>
        </TvProvider>
      </MovieProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
