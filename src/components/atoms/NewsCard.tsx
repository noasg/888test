// src/components/molecules/NewsCard.tsx
import React, { useState } from "react";
import type { CasinoNews } from "../../types/types";

interface Props {
  news: CasinoNews;
}

const NewsCard: React.FC<Props> = ({ news }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{news.title}</h3>
      <p className="text-sm text-gray-500">{news.date}</p>
      <p className="mt-2 text-gray-700">
        {expanded ? news.fullContent : news.snippet}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-2 text-red-600 font-medium"
      >
        {expanded ? "Show Less" : "Read Article"}
      </button>
    </div>
  );
};

export default NewsCard;
