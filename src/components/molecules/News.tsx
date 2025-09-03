import React from "react";
import type { CasinoNews } from "../../types/types";
import NewsCard from "../atoms/NewsCard";

interface Props {
  newsList: CasinoNews[]; // Array of news items to display
}

const News: React.FC<Props> = ({ newsList }) => {
  return (
    <div className="space-y-6">
      {/* Map through the newsList array and render a NewsCard for each item */}
      {newsList.map((news) => (
        <NewsCard key={news.id} news={news} />
      ))}
    </div>
  );
};

export default News;
