import { Player } from "@/components";
import { players } from "@/utils/players";

export function Players() {
  function UpdateScore() {}

  return (
    <div>
      {players.map((player, index) => {
        return <Player player={player} index={index} />;
      })}
    </div>
  );
}
