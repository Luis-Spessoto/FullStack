import React from 'react';
// Requisito: Importa a Biblioteca Externa (React Hook Form)
import { useForm } from 'react-hook-form'; 
// Importa o hook para acessar a função de busca
import { useSearchContext } from '../API/SearchContextAPI'; 

// Componente de Formulário de Busca
const SearchForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  
  const { searchMovies } = useSearchContext();

  const onSubmit = (data) => {
    searchMovies(data.query);
  };

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className="flex flex-col gap-4 p-6 bg-white rounded-xl shadow-lg w-full max-w-xl mx-auto"
    >
      <label htmlFor="query" className="block text-lg font-semibold text-gray-700">
        Pesquisar Filmes - [Título]:
      </label>
      
      <input
        id="query"
        type="text"
        placeholder="Ex: Superman, Dune, Batman..."
        {...register("query", { required: "O campo de busca é obrigatório." })}
        className={`w-full p-3 border-2 rounded-lg transition duration-200 focus:outline-none focus:ring-2 ${
          errors.query ? 'border-red-500 focus:ring-red-500/50' : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500/50'
        }`}
        disabled={isSubmitting}
      />
      
      {errors.query && (
        <p className="text-red-600 text-sm font-medium mt-1 p-2 bg-red-50 rounded-lg">
          {errors.query.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 mt-2 bg-indigo-600 text-white font-bold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Buscando...' : 'Buscar Filmes'}
      </button>
    </form>
  );
};

export default SearchForm;
