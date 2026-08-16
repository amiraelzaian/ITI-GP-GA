import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import { WishlistProvider } from "./context/WishlistContext.jsx";
import "./index.css";
import "./styles/styleTags.css";

// Provider order matters: Theme/Language are app-wide "settings" and should
// wrap everything, Wishlist is app data, Router lets pages navigate.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <LanguageProvider>
          <WishlistProvider>
            <App />
          </WishlistProvider>
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
