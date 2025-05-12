import React, { useState } from "react";
import { useCharacters } from "../hooks/useCharacter";
import CharacterRow from "../components/CharacterRow";
import CharacterDetail from "../components/CharacterDetail";
import "../styles/CharacterTable.css";

const CharacterTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const { characters, loading, error, info } = useCharacters(searchTerm, page);

  const handleNext = () => {
    if (info && page < info.pages) {
      setPage(page + 1);
    }
  };

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="container">
      <h1>Rick and Morty Characters</h1>
      <input
        type="text"
        className="search-input"
        placeholder="Search character by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {!loading && characters.length > 0 && (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Status</th>
                <th>Species</th>
                <th>Last Known Location</th>
                <th>No. of Episodes</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {characters.map((char) => (
                <React.Fragment key={char.id}>
                  <CharacterRow
                    character={char}
                    isExpanded={expandedId === char.id}
                    onToggle={() =>
                      setExpandedId(expandedId === char.id ? null : char.id)
                    }
                  />
                  {expandedId === char.id && (
                    <CharacterDetail character={char} />
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>

          <div className="pagination">
            <button
              onClick={handlePrevious}
              disabled={page === 1}
              className="pagination-button"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={info ? page === info.pages : true}
              className="pagination-button"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterTable;
