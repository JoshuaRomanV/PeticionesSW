import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddTaskButton from "./components/AddTaskButton";
import SearchBar from "./Components/SearchBar";
SearchBar;
function App() {
  const [count, setCount] = useState(0);

  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchTerm) => {
    // Realiza la búsqueda utilizando el término ingresado y actualiza los resultados
    // En este ejemplo, setSearchResults se usa para actualizar los resultados de búsqueda.
    // Puedes reemplazar esta lógica con la lógica de búsqueda real de tu aplicación.

    // Ejemplo de búsqueda simulada:
    const results = ["Resultado 1", "Resultado 2", "Resultado 3"];

    setSearchResults(results);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <AddTaskButton />
      <div>
        <h1>Aplicación de Búsqueda</h1>
        <SearchBar onSearch={handleSearch} />
        <ul>
          {searchResults.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
