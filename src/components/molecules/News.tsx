// src/components/organisms/News.tsx
import React from "react";
import type { CasinoNews } from "../../types/types";
import NewsCard from "../atoms/NewsCard";

interface Props {
  newsList: CasinoNews[];
}

const News: React.FC<Props> = ({ newsList }) => {
  return (
    <div className="space-y-6">
      {newsList.map((news) => (
        <NewsCard key={news.id} news={news} />
      ))}
    </div>
  );
};

export default News;
