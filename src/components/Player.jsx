export function Player({ player, index, increaseScore, decreaseScore }) {
  return (
    <div className="player" key={index}>
      <p>{player.playerName}</p>
      <div>
        <button onClick={() => decreaseScore(index)}>-</button>
        <span>{player.playerScore}</span>
        <button onClick={() => increaseScore(index)}>+</button>
      </div>
    </div>
  );
}
