import { useTranslation } from "react-i18next";

export default function WishlistTabs({ active, onChange, counts }) {
  const { t } = useTranslation();

  const tabs = [
    { key: "all", label: t("wishlist.tabs.all") },
    { key: "movie", label: t("wishlist.tabs.movies") },
    { key: "tv", label: t("wishlist.tabs.tvShows") },
  ];

  return (
    <div className="flex items-center gap-2 mb-6 border-b border-border">
      {tabs.map((tab) => {
        const isActive = active === tab.key;
        return (
          <button
            key={tab.key}
            type="button"
            onClick={() => onChange(tab.key)}
            className={`relative px-4 py-2.5 text-sm font-semibold transition-colors ${
              isActive ? "text-accent" : "text-text-muted hover:text-text"
            }`}
          >
            {tab.label}
            {counts && (
              <span className="ml-1.5 text-xs text-text-muted">
                ({counts[tab.key] ?? 0})
              </span>
            )}
            {isActive && (
              <span className="absolute left-0 right-0 -bottom-px h-0.5 bg-accent rounded-full" />
            )}
          </button>
        );
      })}
    </div>
  );
}
