import { useEffect, useState } from "react";
import type { CasinoContent } from "../types/types";
import { CASINO_CONTENT_ENDPOINT } from "../components/utils/constants";

export const useCasinoContent = () => {
  const [content, setContent] = useState<CasinoContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await fetch(CASINO_CONTENT_ENDPOINT);
        if (!res.ok) throw new Error("Failed to fetch content");
        const data: CasinoContent = await res.json();
        setContent(data);
      } catch (err: unknown) {
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
