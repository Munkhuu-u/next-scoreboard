import { Player } from "@/components";

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
    scoreUpdater[index].playerScore -= 1;
    const scoreUpdaterSorted = scoreUpdater.sort((a, b) => {
      return b.playerScore - a.playerScore;
    });
    setScore(scoreUpdaterSorted);
  }

  return (
    <div className="Scoreboard">
      {score.map((aScore, index) => {
        return (
          <Player
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
