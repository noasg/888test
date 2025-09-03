import React, { useState } from "react";
import type { CasinoNews } from "../../types/types";

interface Props {
  news: CasinoNews;
}

const NewsCard: React.FC<Props> = ({ news }) => {
  const [expanded, setExpanded] = useState(false); // Tracks whether the full content is shown or just the snippet

  return (
    // Card container with shadow, rounded corners, padding, and hover effect
    <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{news.title}</h3>
      <p className="text-sm text-gray-500">{news.date}</p>
      {/* News content: shows snippet by default, fullContent if expanded */}
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
