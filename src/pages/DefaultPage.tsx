import React, { useState } from "react";
import type { Section } from "../types/types";

import Header from "../components/molecules/Header";

import { useCasinoContent } from "../hooks/useCasinoContent";
import CasinoGames from "../components/molecules/CasinoGames";
import Promotions from "../components/molecules/Promotions";
import News from "../components/molecules/News";

const App: React.FC = () => {
  const { content, loading, error } = useCasinoContent();
  const [section, setSection] = useState<Section>("games");

  if (loading) return <p className="text-center mt-10 text-lg">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (!content) return null;

  return (
    <div className="min-h-screen bg-gray-100">
      <Header section={section} setSection={setSection} />

      <main className="p-6 max-w-6xl mx-auto">
        {section === "games" && <CasinoGames games={content.casinoGames} />}

        {section === "promotions" && (
          <Promotions promotions={content.promotions} />
        )}
        {section === "news" && <News newsList={content.casinoNews} />}
      </main>
    </div>
  );
};

export default App;
