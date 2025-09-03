import type { Section } from "../../types/types";

export const SECTIONS: Section[] = ["games", "promotions", "news"];
export const API_BASE_URL = "http://localhost:5000";
export const CASINO_CONTENT_ENDPOINT = `${API_BASE_URL}/api/content`;
export const ALL_CATEGORIES = [
  "slots",
  "live-casino",
  "table-games",
  "jackpot",
];
