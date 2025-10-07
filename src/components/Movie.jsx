import React from 'react';

//Componente para exibir um cartão de filme individual (MovieCard)
const Movie = ({ movie }) => {
  const imageUrl = movie.poster 
    ? movie.poster 
    : 'https://placehold.co/500x750/1f2937/ffffff?text=Poster+Não+Disp.';
  
  const releaseYear = movie.year 
    ? movie.year 
    : 'Ano Desconhecido';

  /*
  const diretor = movie.director
    ? movie.Director
    : 'N/A';
  */
  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition duration-300">
      <img
        src={imageUrl}
        alt={`Poster de ${movie.title}`}
        className="w-full h-72 object-cover object-center"
        onError={(e) => {
          e.target.onerror = null; 
          e.target.src = 'https://placehold.co/500x750/1f2937/ffffff?text=Poster+Não+Disp.';
        }}
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2 truncate" title={movie.title}>
          {movie.title}
        </h3>
        <p className="text-sm text-gray-600 mb-2">
          Lançamento: <span className="font-semibold">{releaseYear}</span>
        </p>
        {
        /*
        <p className="text-sm text-gray-600 mb-2">
          Diretor: <span className="font-semibold">{diretor}</span>
        </p>
        */
        }
        <div className="flex items-center justify-between h-6">
             {/*Este espaço fica vazio para layout */}
        </div>
        
      </div>
    </div>
  );
};

export default Movie;
