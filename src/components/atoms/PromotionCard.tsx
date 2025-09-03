// src/components/molecules/PromotionCard.tsx
import React, { useState } from "react";
import type { Promotion } from "../../types/types";

interface Props {
  promo: Promotion;
}

const PromotionCard: React.FC<Props> = ({ promo }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition">
      <img
        src={promo.imageUrl}
        alt={promo.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{promo.title}</h3>
        <p className="text-gray-600">
          {expanded ? promo.fullTerms : promo.snippet}
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 text-red-600 font-medium"
        >
          {expanded ? "Show Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default PromotionCard;
