import React from "react";
import type { Promotion } from "../../types/types";
import PromotionCard from "../atoms/PromotionCard";

interface Props {
  promotions: Promotion[]; // Array of promotion objects to display
}

const Promotions: React.FC<Props> = ({ promotions }) => {
  return (
    <div className="space-y-6">
      {/* Map through the promotions array and render a PromotionCard for each */}
      {promotions.map((promo) => (
        <PromotionCard key={promo.id} promo={promo} />
      ))}
    </div>
  );
};

export default Promotions;
