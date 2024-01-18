import { Player } from "@/components";
import { players } from "@/utils/players";

const Players = ({ score, setScore }) => {
  const scoreUpdaterSorted = score.sort((a, b) => {
    return b.playerScore - a.playerScore;
  });

  function increaseScore(index) {
    const scoreUpdater = [...score];
    console.log("index: ", index);
    console.log("scoreUpdater: ", scoreUpdater);
    scoreUpdater[index].playerScore += 1;
    const scoreUpdaterSorted = scoreUpdater.sort((a, b) => {
      return b.playerScore - a.playerScore;
    });
    setScore(scoreUpdaterSorted);
  }

  function decreaseScore(index) {
    const scoreUpdater = [...score];
    if (scoreUpdater[index].playerScore <= 0) {
      scoreUpdater[index].playerScore;
    } else {
      scoreUpdater[index].playerScore -= 1;
    }

    const scoreUpdaterSorted = scoreUpdater.sort((a, b) => {
      return b.playerScore - a.playerScore;
    });
    setScore(scoreUpdaterSorted);
  }
  // score.filter((element) => {
  //   if (element.playerName !== newName) {
  //     return [...element];
  //   } else {
  //     return [...element, {}];
  //   }
  // });

  return (
    <div className="Scoreboard">
      {score.map((aScore, index) => {
        return (
          <Player
            score={score}
            aScore={aScore}
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
