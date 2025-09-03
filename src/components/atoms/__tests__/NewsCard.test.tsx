import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import type { CasinoNews } from "../../../types/types";
import NewsCard from "../NewsCard";

const dummyNews: CasinoNews = {
  id: "news_1",
  title: "Big Win!",
  snippet: "Player won big...",
  fullContent: "Player won big in our casino!",
  date: "2025-07-01",
};

test("renders NewsCard and toggles content", () => {
  render(<NewsCard news={dummyNews} />);

  // Check title and snippet
  expect(screen.getByText(/Big Win!/i)).toBeInTheDocument();
  expect(screen.getByText(/Player won big\.\.\./i)).toBeInTheDocument();

  // Initially shows "Read Article"
  const button = screen.getByRole("button", { name: /Read Article/i });
  expect(button).toBeInTheDocument();

  // Click to expand
  fireEvent.click(button);
  expect(
    screen.getByText(/Player won big in our casino!/i)
  ).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: /Show Less/i })
  ).toBeInTheDocument();
});
