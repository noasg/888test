export interface CasinoGame {
  categories: Array<string>;
  id: string;
  title: string;
  provider: string;
  imageUrl: string;
}

export interface Promotion {
  id: string;
  title: string;
  snippet: string;
  imageUrl: string;
  fullTerms: string;
}

export interface CasinoNews {
  id?: string;
  title?: string;
  snippet?: string;
  date?: string;
  news?: string;
  fullContent?: string;
}

export interface CasinoContent {
  casinoGames: CasinoGame[];
  promotions: Promotion[];
  casinoNews: CasinoNews[];
}

export type Section = "games" | "promotions" | "news";
