import { useState, useEffect } from "react";
import { API_URL, API_KEY } from "../config";

export const useFetchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchMovies = async (endpoint) => {
    setError(false);
    setLoading(true);

    try {
      const result = await (await fetch(endpoint)).json();
      console.log(result);
      setMovies((prev) => ({
        ...prev,
        allMovies: [...result.results],
        heroImage: prev.heroImage || result.results[0],
        currentPage: result.page,
        totalPages: result.total_pages,
      }));
    } catch (err) {
      setError(true);
      console.log(err);
    }
    setLoading(false);
  };

  //  Busca pelo filme mais popular do mês
  useEffect(() => {
    fetchMovies(`${API_URL}movie/now_playing?api_key=${API_KEY}`);
  }, []);

  return [
    {
      movies,
      loading,
      error,
    },
    fetchMovies,
  ];
};
