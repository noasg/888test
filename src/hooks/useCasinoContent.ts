import { useEffect, useState } from "react";
import type { CasinoContent } from "../types/types";
import { CASINO_CONTENT_ENDPOINT } from "../components/utils/constants";

export const useCasinoContent = () => {
  /**
   * Custom hook to fetch casino content from the custom backend API
   * Provides loading, error, and data states.
   */

  const [content, setContent] = useState<CasinoContent | null>(null); // Stores the fetched casino content
  const [loading, setLoading] = useState(true); // Tracks whether the data is still loading
  const [error, setError] = useState<string | null>(null); // Stores error message if fetch fails

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await fetch(CASINO_CONTENT_ENDPOINT); // Fetch data from API
        if (!res.ok) throw new Error("Failed to fetch content"); // Throw error if response is not OK
        const data: CasinoContent = await res.json(); // Parse JSON response
        setContent(data); // Store fetched data
      } catch (err: unknown) {
        //error handling
        if (err instanceof Error) {
          console.error("Error fetching content:", err.message);
          setError(err.message);
        } else {
          console.error("Unknown error fetching content:", err);
          setError("Unknown error");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  return { content, loading, error };
};
