import { Player } from "@/components";
import { players } from "@/utils/players";
import { useState } from "react";

const Players = () => {
  const [score, setScore] = useState(players);

  function increaseScore({ index }) {
    const scoreUpdater = [...score];
    scoreUpdater[index].playerScore += 1;
    setScore(scoreUpdater);
  }

  function decreaseScore({ index }) {
    const scoreUpdater = [...score];
    scoreUpdater[index].playerScore -= 1;
    setScore(scoreUpdater);
  }

  return (
    <div>
      {score.map((player, index) => {
        return (
          <Player
            player={player}
            index={index}
            increaseScore={increaseScore}
            decreaseScore={decreaseScore}
          />
        );
      })}
    </div>
  );
};
export default Players;
