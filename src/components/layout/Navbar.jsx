// components/layout/Navbar.jsx
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/ThemeContext";
import { Heart, Menu, X, Sun, Moon, Globe, Sparkles } from "lucide-react";

const navLinkClass = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
    isActive
      ? "bg-accent-text/10 text-accent-text"
      : "text-accent-text/70 hover:text-accent-text hover:bg-accent-text/5"
  }`;

const mobileLinkClass = ({ isActive }) =>
  `block px-4 py-3 text-base font-semibold rounded-lg transition-colors ${
    isActive
      ? "bg-accent-text/10 text-accent-text"
      : "text-accent-text/80 hover:bg-accent-text/5"
  }`;

export default function Navbar({ wishlistCount = 0 }) {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const hasWishlistItems = wishlistCount > 0;

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
  };

  const links = [
    { to: "/", label: t("nav.movies"), end: true },
    { to: "/tv", label: t("nav.tvShows") },
    { to: "/assistant", label: t("nav.aiAssistant"), icon: Sparkles },
  ];

  return (
    <header className="sticky top-0 z-50 bg-accent shadow-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 text-lg font-extrabold tracking-tight text-accent-text"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-accent-text text-accent">
            🎬
          </span>
          Movie App
        </NavLink>

        {/* Desktop links */}
        <div className="hidden md:flex md:items-center md:gap-1">
          {links.map(({ to, label, end, icon: Icon }) => (
            <NavLink key={to} to={to} end={end} className={navLinkClass}>
              <span className="flex items-center gap-1.5">
                {Icon && <Icon size={15} />}
                {label}
              </span>
            </NavLink>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Language toggle */}
          <button
            type="button"
            onClick={toggleLang}
            aria-label="Toggle language"
            className="hidden items-center gap-1 rounded-md px-2.5 py-2 text-sm font-semibold text-accent-text/80 hover:bg-accent-text/10 md:flex"
          >
            <Globe size={16} />
            {i18n.language === "en" ? "EN" : "AR"}
          </button>

          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-md p-2 text-accent-text/80 hover:bg-accent-text/10"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {/* Wishlist — heart and badge now share one semantic color (accent-secondary) when active */}
          <NavLink
            to="/wishlist"
            className="flex items-center gap-1.5 rounded-md px-2.5 py-2 text-sm font-semibold text-accent-text hover:bg-accent-text/10"
          >
            <span className="relative">
              <Heart
                size={19}
                className={
                  hasWishlistItems
                    ? "fill-accent-secondary text-accent-secondary"
                    : "text-accent-text"
                }
              />
              {hasWishlistItems && (
                <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent-secondary px-1 text-[10px] font-bold text-accent-secondary-text">
                  {wishlistCount}
                </span>
              )}
            </span>
            <span className="hidden sm:inline">{t("nav.watchlist")}</span>
          </NavLink>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="rounded-md p-2 text-accent-text hover:bg-accent-text/10 md:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="border-t border-accent-text/10 bg-accent px-4 pb-4 pt-2 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map(({ to, label, end, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={mobileLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                <span className="flex items-center gap-2">
                  {Icon && <Icon size={16} />}
                  {label}
                </span>
              </NavLink>
            ))}
            <button
              type="button"
              onClick={toggleLang}
              className="mt-1 flex items-center gap-2 rounded-lg px-4 py-3 text-base font-semibold text-accent-text/80 hover:bg-accent-text/5"
            >
              <Globe size={16} />
              {i18n.language === "en"
                ? "Switch to Arabic"
                : "التبديل إلى الإنجليزية"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
