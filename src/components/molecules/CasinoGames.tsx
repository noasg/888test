// src/components/organisms/CasinoGames.tsx
import React, { useState, useMemo } from "react";
import type { CasinoGame } from "../../types/types";
import GameCard from "../atoms/GameCard";
import SearchInput from "../atoms/SearchInput";
import { ALL_CATEGORIES } from "../utils/constants";

interface Props {
  games: CasinoGame[];
}

const CasinoGames: React.FC<Props> = ({ games }) => {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const filteredGames = useMemo(() => {
    return games.filter((game) => {
      const matchesSearch = game.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        selectedCategories.length === 0 ||
        game.categories.some((cat: string) => selectedCategories.includes(cat));

      return matchesSearch && matchesCategory;
    });
  }, [games, search, selectedCategories]);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div>
      {/* Search Bar */}
      <SearchInput
        value={search}
        onChange={setSearch}
        placeholder="Search games..."
      />

      {/* Category Filters */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {ALL_CATEGORIES.map((cat: string) => (
          <button
            key={cat}
            onClick={() => toggleCategory(cat)}
            className={`px-3 py-1 rounded-full border ${
              selectedCategories.includes(cat)
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-gray-200 text-gray-900 border-gray-300"
            }`}
          >
            {cat.replace("-", " ")}
          </button>
        ))}
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
        {filteredGames.length === 0 && (
          <p className="text-center col-span-full text-gray-500">
            No games match your search/filter.
          </p>
        )}
      </div>
    </div>
  );
};

export default CasinoGames;
