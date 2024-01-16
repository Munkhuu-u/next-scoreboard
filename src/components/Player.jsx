import { PlusIcon, MinusIcon } from "../utils/icons";

export function Player({ aScore, index, increaseScore, decreaseScore }) {
  return (
    <div className="player" key={index}>
      <p>{aScore.playerName}</p>
      <div className="playerScore">
        <button
          onClick={() => {
            console.log("checking from Player index :", index);
            decreaseScore(index);
          }}
        >
          <MinusIcon />
        </button>
        <span>{aScore.playerScore}</span>
        <button
          onClick={() => {
            increaseScore(index);
          }}
        >
          <PlusIcon />
        </button>
      </div>
    </div>
  );
}
