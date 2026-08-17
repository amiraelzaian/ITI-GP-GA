// components/SearchBar.jsx
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function SearchBar({ initialValue = "", onSearch }) {
  const { t } = useTranslation();
  const [value, setValue] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (trimmed) onSearch(trimmed);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full ">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={t("home.searchPlaceholder")}
        className="flex-1 rounded-md border border-border bg-surface px-4 py-2.5 text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent"
      />
      <button
        type="submit"
        className="rounded-md bg-accent px-5 py-2.5 font-semibold text-accent-text hover:opacity-90 transition-opacity"
      >
        {t("home.search")}
      </button>
    </form>
  );
}
