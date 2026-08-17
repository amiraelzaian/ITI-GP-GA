// layouts/Layout.jsx
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
// import { useWishlist } from "../context/WishlistContext.jsx"; // your existing context

function Layout() {
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("en");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  return (
    <>
      <Navbar
        wishlistCount={0}
        theme={theme}
        onToggleTheme={() =>
          setTheme((t) => (t === "light" ? "dark" : "light"))
        }
        lang={lang}
        onToggleLang={() => setLang((l) => (l === "en" ? "ar" : "en"))}
      />
      <Outlet />
    </>
  );
}

export default Layout;
