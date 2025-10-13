import React, { useEffect } from 'react';
import { SearchProvider } from './context/SearchContextAPI'; 
import SearchForm from './components/SearchForm';             
import SearchResult from './components/SearchResult';         

const App = () => {
  //Implementação do Hook (useEffect) para configurar o título da página
  useEffect(() => {
    document.title = "FilmSearch";
  }, []);

  return (
    //SearchProvider envolve toda a aplicação para fornecer o Contexto (Requisito: Context API)
    <SearchProvider>
      <div className="App min-h-screen bg-gray-50 py-10 font-sans 
                      bg-gradient-to-br from-indigo-900 to-gray-500" >
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap');
            body { font-family: 'Inter', sans-serif; }
          `}
        </style>
        
        <header className="text-center mb-10 px-4">
          <h1 className="text-4xl font-extrabold text-black-900 mb-2">
            FilmSearch - Movie Search Engine 🎞️
          </h1>
          <p className="text-xl text-black font-bold">
            Pesquise filmes na barra abaixo e veja algumas informações
          </p>
        </header>
        
        <main className="container mx-auto px-4">
          <SearchForm />    
          <SearchResult /> 
        </main>

          
        <footer className="fixed bottom-0 w-full bg-indigo-700/90 text-white pt-4 pb-4 text-center text-sm z-10 shadow-lg">
            <p className="text-xs opacity-85 font-semibold">Projeto 01 - FullStack UTFPR [2025.02]</p>
            <p className="text-xs mt-1 font-bold">© ®Spessoto - FilmSearch: {new Date().getFullYear()}® ©</p>
        </footer>
      </div>
    </SearchProvider>
  );
};

export default App;
