import React, { useState } from "react";
import type { Section } from "../types/types";

import Header from "../components/molecules/Header";

import { useCasinoContent } from "../hooks/useCasinoContent";
import CasinoGames from "../components/molecules/CasinoGames";
import Promotions from "../components/molecules/Promotions";
import News from "../components/molecules/News";

const App: React.FC = () => {
  //custom hook - useCasinoContent to get the data from the API custom bakckend service
  const { content, loading, error } = useCasinoContent();

  //state to see what page is selected
  // for now i saved the data as a constant
  // "games" | "promotions" | "news"
  const [section, setSection] = useState<Section>("games");

  // Show a loading message while content is being fetched
  if (loading) return <p className="text-center mt-10 text-lg">Loading...</p>;

  // Show error message if fetching content fails
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  // If content is null (should not happen if loading & error handled), return nothing
  if (!content) return null;

  return (
    <div className="min-h-screen bg-gray-100">
      <Header section={section} setSection={setSection} />

      <main className="p-6 max-w-6xl mx-auto">
        {/* rendering the CasinoGames  section */}
        {section === "games" && <CasinoGames games={content.casinoGames} />}

        {/* rendering the Promotions   section */}
        {section === "promotions" && (
          <Promotions promotions={content.promotions} />
        )}

        {/* rendering the News   section */}
        {section === "news" && <News newsList={content.casinoNews} />}
      </main>
    </div>
  );
};

export default App;
