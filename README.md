# <h1 align="center">🍿🎞️ FilmSearch 🎞️🍿</h1>
# <p align="center"> Projeto da matéria - Web Fullstack 2025/02 </p>

<div align="center">
 <figure>
  <img src="public/Screenshot.png" alt="Imagem WebSite">
  <figcaption>Layout do website</figcaption>
 </figure>
</div>

# Integrantes do grupo: <br>
<markdown-accessiblity-table data-catalyst=""><table tabindex="0">
<thead>
  <tr>
    <th align="center"><a href="https://github.com/Luis-Spessoto"><img src="https://avatars.githubusercontent.com/u/77413441?s=400&u=144e3f496c44706fe9f3d5b9be8c631a8044af71&v=4" alt="foto-Luis"width="110" style="max-width: 100%;"><br><sub>Luís Felipe Spessoto</sub></a></th>
  </tr>
</thead>
</table></markdown-accessiblity-table>

# Descrição do projeto: 
Website criado na matéria Web Fullstack 2025/02 utlizando React.js

- Hook: <a href="https://www.w3schools.com/react/react_usememo.asp">useMemo</a> -> Utilizado no arquivo 'SearchContextAPI.jsx' para memorizar o objeto 'contextValue', previnindo que os componentes consumidores (SearchForm, SearchResult) sejam re-renderizados desnecessariamente, pois garante que o objeto do Contexto só será recriado quando o estado fundamental (como results, loading, ou error) for atualizado.
  <br>
- Biblioteca React.js: <a href="https://react-hook-form.com/">React Hook Form</a> -> Utilizada para otimizar a criação e gerenciamento de formulários. A biblioteca implementa o controle de estado e a validação do campo de busca, garantindo que a requisição de API só seja disparada quando os dados de entrada forem válidos.
  <br>
- API: <a href="https://www.omdbapi.com/">OMDB Public API</a> -> Utilizada para extrair informações sobre diversos filmes requiridos pelo formulário de input da aplicação

<div align="center">
 <figure>
  <img src="public/MovieCards.png" alt="Movie Cards">
  <figcaption>Exemplo de pesquisa na aplicação [Requisição do input para a API]</figcaption>
 </figure>
</div>

## Estrutura do projeto

FullStack/
├── dist
├── node_modules/
├── public/
│   ├── iconPop.png
│   ├── MovieCards.png
│   └── Screenshot.png
├── src/
│   ├── API/
│   │   └── SearchContextAPI.jsx
│   ├── components/       
│   │   ├── SearchForm.jsx
│   │   ├── SearchResult.jsx
│   │   └── Movie.jsx
│   ├── App.jsx 
│   ├── App.css
│   ├── main.css
│   └── main.jsx          
├── index.html     
├── README.md
├── package-lock.json
├── vite.config.js
└── package.json
