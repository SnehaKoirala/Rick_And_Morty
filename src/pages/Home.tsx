import React, { useState, useEffect } from "react";
import "../styles/HomePage.css"; 

const Home: React.FC = () => {
  const [characters, setCharacters] = useState<any[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setCharacters(data.results);
    };

    fetchCharacters();
  }, []);

  return (
    <div className="home-page">
      <h1>Welcome to the Rick and Morty World!</h1>
      <div className="image-gallery">
        {characters.slice(0, 6).map((character) => (
          <div key={character.id} className="image-card">
            <img src={character.image} alt={character.name} />
            <p>{character.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
