import { useState } from "react";
import { players } from "../utils/players";

export function Player({ player }) {
  const [score, setScore] = useState("");

  function updateScore(index, howUpdate) {
    return setScore();
  }

  return players.map((player, index) => {
    return (
      <div className="player" key={index}>
        <p>{player.playerName}</p>
        <div>
          <button>-</button>
          <span>{player.playerScore}</span>
          <button>+</button>
        </div>
      </div>
    );
  });
}
