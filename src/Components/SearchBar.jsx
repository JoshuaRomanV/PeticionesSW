import { useState } from "react";
import "./SearchBar.css"; // Importa el archivo CSS

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <div className="search-bar-container">
            {" "}
            {/* Aplica la clase CSS al contenedor */}
            <input
                className="search-input"
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-button" onClick={handleSearch}>
                {" "}
                {/* Aplica la clase CSS al botón */}
                Buscar
            </button>
        </div>
    );
}

export default SearchBar;
