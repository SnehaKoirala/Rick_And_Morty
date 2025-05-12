import React from "react";
import type { Character } from "../hooks/useCharacter";

interface Props {
  character: Character;
  isExpanded: boolean;
  onToggle: () => void;
}

const CharacterRow: React.FC<Props> = ({ character, isExpanded, onToggle }) => (
  <tr>
    <td>{character.name}</td>
    <td>{character.gender}</td>
    <td>{character.status}</td>
    <td>{character.species}</td>
    <td>{character.location.name}</td>
    <td>{character.episode.length}</td>
    <td>
      <button onClick={onToggle}>{isExpanded ? "Hide" : "View"}</button>
    </td>
  </tr>
);

export default CharacterRow;
