// pages/Watchlist.jsx
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HeartOff } from "lucide-react";
import { useWatchlist } from "../hooks/useWatchlist.js";
import WatchlistGrid from "../components/Watchlist/WatchlistGrid.jsx";
import WatchlistTabs from "../components/Watchlist/WatchlistTabs.jsx";
import EmptyState from "../components/common/EmptyState.jsx";

function Watchlist() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { items } = useWatchlist();
  const [activeTab, setActiveTab] = useState("all");

  const counts = useMemo(
    () => ({
      all: items.length,
      movie: items.filter((i) => i.mediaType === "movie").length,
      tv: items.filter((i) => i.mediaType === "tv").length,
    }),
    [items],
  );

  const filteredItems = useMemo(() => {
    if (activeTab === "all") return items;
    return items.filter((item) => item.mediaType === activeTab);
  }, [items, activeTab]);

  return (
    <div className="bg-bg text-text min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold mb-6">{t("Watchlist.title")}</h1>

        {items.length === 0 ? (
          <EmptyState
            icon={
              <HeartOff size={120} className="text-border" strokeWidth={2} />
            }
            title={t("Watchlist.empty")}
            actionLabel={t("Watchlist.backHome")}
            onAction={() => navigate("/")}
          />
        ) : (
          <>
            <WatchlistTabs
              active={activeTab}
              onChange={setActiveTab}
              counts={counts}
            />

            {filteredItems.length === 0 ? (
              <p className="text-text-muted text-center py-16">
                {t("Watchlist.emptyTab")}
              </p>
            ) : (
              <WatchlistGrid items={filteredItems} />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Watchlist;
