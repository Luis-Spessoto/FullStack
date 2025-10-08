import React from 'react';
// Importa o hook para acessar os estados de busca (Comunicação de Componentes)
import { useSearchContext } from '../API/SearchContextAPI';
// Importa o componente que renderiza cada cartão de filme
import Movie from './Movie';

// Função para limpar a página (refresh)
const handleRefresh = () => {
  window.location.reload();
};

//1. Componente para exibir os resultados da busca
const SearchResult = () => {
  const { results, loading, error, totalResults } = useSearchContext();

  if (loading) {
    return (
      <div className="text-center p-8 mt-8">
        <div className="animate-spin inline-block w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full"></div>
        <p className="mt-4 text-xl font-medium text-indigo-700">Carregando resultados...</p>
      </div>
    );
  }

  //2. Mensagens de Erro da API/Busca Vazia (Requisito
  if (error) {
    return (
      <div className="text-center p-8 mt-8 bg-red-100 border-l-4 border-red-500 rounded-lg max-w-xl mx-auto">
        <p className="text-red-700 font-semibold text-lg">{error}</p>
        <p className="text-red-600 text-sm mt-2">Nenhum filme encontrado. Tente outra palavra-chave.</p>
      </div>
    );
  }

  //3. Estado Inicial/Nenhum Resultado
  if (results.length === 0) {
    return (
      <div className="text-center p-8 mt-8 bg-blue-100 border-l-4 border-blue-500 rounded-lg max-w-xl mx-auto">
        <p className="text-blue-700 font-semibold text-lg">Nenhuma pesquisa realizada ainda.</p>
        <p className="text-blue-600 text-sm mt-2">Utilize o formulário acima para começar a ver filmes.</p>
      </div>
    );
  }

  //4. Exibição dos Resultados
  return (
    <div className="mt-10 p-4">
      <div className="flex justify-between items-center mb-6 border-b-2 border-indigo-400 pb-2">
        <h2 className="text-2xl font-bold text-gray-800">
          Resultados ({totalResults} encontrados)
        </h2>

        <button
          onClick={handleRefresh}
          className="py-2 px-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
        >
          Limpar Resultados
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {results.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
