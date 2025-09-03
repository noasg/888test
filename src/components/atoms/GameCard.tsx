import React from "react";
import type { CasinoGame } from "../../types/types";

interface Props {
  game: CasinoGame;
}

const GameCard: React.FC<Props> = ({ game }) => (
  // Card container with shadow, rounded corners, and hover effect
  <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition">
    <img
      src={game.imageUrl}
      alt={game.title}
      className="w-full h-40 object-cover"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold">{game.title}</h3>
      {/* Game title */}
      <p className="text-gray-500 text-sm">{game.provider}</p>
      {/* Provider name */}
    </div>
  </div>
);

export default GameCard;
