import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/ThemeContext";
import { Heart, Menu, X, Sun, Moon, Globe, Sparkles } from "lucide-react";

const navLinkClass = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
    isActive
      ? "bg-white/10 text-accent-text"
      : "text-white/85 hover:text-white hover:bg-white/5"
  }`;

const mobileLinkClass = ({ isActive }) =>
  `block px-4 py-3 text-base font-semibold rounded-lg transition-colors ${
    isActive
      ? "bg-white/10 text-accent"
      : "text-white/85 hover:text-white hover:bg-white/5"
  }`;

export default function Navbar({ watchlistCount = 0 }) {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const hasWatchlistItems = watchlistCount > 0;

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";

    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
  };

  const links = [
    {
      to: "/",
      label: t("nav.movies"),
      end: true,
    },
    {
      to: "/tv",
      label: t("nav.tvShows"),
    },
    {
      to: "/assistant",
      label: t("nav.aiAssistant"),
      icon: Sparkles,
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-accent text-white shadow-lg">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 text-lg font-extrabold tracking-tight text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#211d18] text-white shadow-sm">
            🎬
          </span>

          <span>Movie App</span>
        </NavLink>

        {/* Desktop navigation */}
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
        <div className="flex items-center gap-1.5 sm:gap-2 ">
          {/* Language */}
          <button
            type="button"
            onClick={toggleLang}
            aria-label="Toggle language"
            className="hidden items-center gap-1 rounded-md px-2.5 py-2 text-sm font-semibold text-white/80 transition-colors hover:bg-white/10 hover:text-white md:flex"
          >
            <Globe size={16} />

            {i18n.language === "en" ? "EN" : "AR"}
          </button>

          {/* Theme */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-md p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {/* Watchlist */}
          <NavLink
            to="/watchlist"
            aria-label={t("nav.watchlist")}
            className="flex items-center gap-1.5 rounded-md px-2.5 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <span className="relative">
              <Heart
                size={20}
                className={
                  hasWatchlistItems
                    ? "fill-accent-secondary text-accent-secondary"
                    : "text-white/85"
                }
              />

              {hasWatchlistItems && (
                <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent-secondary px-1 text-[10px] font-bold text-white">
                  {watchlistCount}
                </span>
              )}
            </span>

            <span className="hidden sm:inline">{t("nav.watchlist")}</span>
          </NavLink>

          {/* Mobile menu */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="rounded-md p-2 text-white/85 transition-colors hover:bg-white/10 hover:text-white md:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-accent px-4 transition-all duration-500 ease-in-out md:hidden ${
          menuOpen
            ? "max-h-125 translate-y-0 pb-4 pt-2 opacity-100"
            : "max-h-0 -translate-y-2 pb-0 pt-0 opacity-0"
        }`}
      >
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

          {/* Mobile language */}
          <button
            type="button"
            onClick={toggleLang}
            className="mt-1 flex items-center gap-2 rounded-lg px-4 py-3 text-base font-semibold text-white/80 transition-colors hover:bg-white/5 hover:text-white"
          >
            <Globe size={16} />
            {i18n.language === "en"
              ? "Switch to Arabic"
              : "التبديل إلى الإنجليزية"}
          </button>
        </div>
      </div>
    </header>
  );
}
