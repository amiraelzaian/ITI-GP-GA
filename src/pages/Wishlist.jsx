// pages/Wishlist.jsx
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HeartOff } from "lucide-react";
import { useWishlist } from "../hooks/useWishlist.js";
import WishlistGrid from "../components/wishlist/WishlistGrid.jsx";
import EmptyState from "../components/common/EmptyState.jsx";

function Wishlist() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { items } = useWishlist();

  return (
    <div className="bg-bg text-text min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold mb-6">{t("wishlist.title")}</h1>

        {items.length === 0 ? (
          <EmptyState
            icon={
              <HeartOff size={64} className="text-border" strokeWidth={1.5} />
            }
            title={t("wishlist.empty")}
            actionLabel={t("wishlist.backHome")}
            onAction={() => navigate("/")}
          />
        ) : (
          <WishlistGrid items={items} />
        )}
      </div>
    </div>
  );
}

export default Wishlist;
