import React, { useEffect, useState } from "react";
import type { Character } from "../hooks/useCharacter";
import "../styles/CharacterDetail.css";

interface Episode {
  id: number;
  name: string;
  episode: string;
}

interface Props {
  character: Character;
}

const CharacterDetail: React.FC<Props> = ({ character }) => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEpisodes = async () => {
      const ids = character.episode.map((url) => url.split("/").pop()).join(",");
      const res = await fetch(`https://rickandmortyapi.com/api/episode/${ids}`);
      const data = await res.json();
      const episodesList = Array.isArray(data) ? data : [data];
      setEpisodes(episodesList);
      setLoading(false);
    };

    fetchEpisodes();
  }, [character]);

  return (
    <tr>
      <td colSpan={7}>
        <div className="character-detail">
          <div className="left-section">
            <img
              src={character.image}
              alt={character.name}
              className="character-image"
            />
            <div className="character-info">
              <p><strong>Name:</strong> {character.name}</p>
              <p><strong>Gender:</strong> {character.gender}</p>
              <p><strong>Status:</strong> {character.status}</p>
              <p><strong>Species:</strong> {character.species}</p>
              <p><strong>Origin:</strong> {character.origin.name}</p>
              <p><strong>Location:</strong> {character.location.name}</p>
            </div>
          </div>
          <div className="right-section">
            <p><strong>Episodes:</strong></p>
            {loading ? (
              <p>Loading episodes...</p>
            ) : (
              <ul className="episode-list">
                {episodes.map((ep) => (
                  <li key={ep.id}>
                    {ep.episode} - {ep.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </td>
    </tr>
  );
};

export default CharacterDetail;
