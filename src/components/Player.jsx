export function Player({ player, index }) {
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
}
