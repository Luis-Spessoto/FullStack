/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import React, { useState, createContext, useContext, useCallback, useMemo } from 'react';

// Chave de API lida da variável de ambiente VITE_OMDB_API_KEY
const OMDB_API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const OMDB_BASE_URL = 'https://www.omdbapi.com/';
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const SearchContext = createContext(null);

//HOOK PERSONALIZADO
export const useSearchContext = () => {
  return useContext(SearchContext);
};

export const SearchProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //Implementação do Hook (useCallback) para memorizar a função de busca
  const searchMovies = useCallback(async (query) => {
    query = query.trim();
    if (!query) return;

    setLoading(true);
    setError(null);
    setResults([]);

    try {
      const url = `${OMDB_BASE_URL}?s=${encodeURIComponent(query)}&apikey=${OMDB_API_KEY}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Erro na busca: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();

      if (data.Response === 'False') {
        throw new Error(data.Error || "Nenhum filme encontrado para a pesquisa.");
      }

      const mappedResults = data.Search.map(item => ({
        id: item.imdbID,
        title: item.Title,
        year: item.Year, 
        poster: item.Poster !== 'N/A' ? item.Poster : null,
        director: item.Director,
      }));

      setResults(mappedResults);

    } catch (err) {
      console.error("Erro durante a busca de filmes:", err);
      setError(err.message || "Ocorreu um erro desconhecido ao buscar dados.");
    } finally {
      setLoading(false);
    }
  }, [OMDB_API_KEY]); 

  //Implementação do Hook (useMemo) para otimizar o objeto de contexto
  const contextValue = useMemo(() => ({
    results,
    loading,
    error,
    searchMovies,
    totalResults: results.length,
  }), [results, loading, error, searchMovies]);

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};