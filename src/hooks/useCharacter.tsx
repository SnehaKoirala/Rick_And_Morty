import { useEffect, useState } from "react";

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  location: { name: string };
  origin: { name: string };
  image: string;
  episode: string[];
}

export const useCharacters = (searchTerm: string, page: number) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [info, setInfo] = useState<{ pages: number; next: string | null; prev: string | null } | null>(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        const url = searchTerm
          ? `https://rickandmortyapi.com/api/character/?name=${searchTerm}&page=${page}`
          : `https://rickandmortyapi.com/api/character?page=${page}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error("No characters found");
        const data = await res.json();
        setCharacters(data.results);
        setInfo(data.info);
        setError("");
      } catch {
        setCharacters([]);
        setError("No characters found");
      } finally {
        setLoading(false);
      }
    };

    const delay = setTimeout(() => {
      fetchCharacters();
    }, 500);

    return () => clearTimeout(delay);
  }, [searchTerm, page]);

  return { characters, loading, error, info };
};
