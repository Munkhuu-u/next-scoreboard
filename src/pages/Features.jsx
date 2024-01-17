import { AddPlayerDiv } from "@/components";
import { useState } from "react";

export function Features({ score, setScore, tempDiv, setTempDiv }) {
  const [newName, setnewName] = useState("");
  let [clicked, setClicked] = useState(false);

  function ResetFn() {
    const resetScore = [...score];
    for (let i = 0; i < score.length; i++) {
      resetScore[i].playerScore = 0;
    }
    setScore(resetScore);
  }

  const check = (event) => {
    setnewName(event.target.value);
    console.log(event.target.value);
  };

  function Addfn() {
    const playerAdded = [...score];
    console.log("player nemsen huwilbar", playerAdded);
    playerAdded.push({
      id: playerAdded.length,
      playerName: newName,
      playerScore: 0,
    });
    setScore(playerAdded);
    showAddplayer();
  }

  function showAddplayer() {
    clicked = !clicked;
    setClicked(clicked);
  }

  return (
    <div className="features">
      <div className="feature1">
        <AddPlayerDiv
          Addfn={Addfn}
          check={check}
          bool={clicked}
          newName={newName}
        />
      </div>
      <div className="feature2">
        <button onClick={showAddplayer}>Add player</button>
        <button onClick={ResetFn}>Reset</button>
      </div>
    </div>
  );
}
//
