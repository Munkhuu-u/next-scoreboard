import { useState } from "react";
import { players } from "@/utils/players";

export function Features({ score, setScore, tempDiv, setTempDiv }) {
  function ResetFn() {
    const resetScore = [...score];
    for (let i = 0; i < score.length; i++) {
      console.log("for ajillaj baina", resetScore[0]);
      resetScore[i].playerScore = 0;
    }
    setScore(resetScore);
  }

  function AddplayerFirst(setTempDiv) {
    let tempDivVer = [...tempDiv];
    tempDivVer = (
      <div>
        <input>Шинэ тоглогчийн нэр</input>
        <button>Add new player</button>
      </div>
    );
    setTempDiv(tempDivVer);
  }

  return (
    <div className="features">
      <button
        onClick={() => {
          console.log(score);
          ResetFn();
          console.log(score);
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          AddplayerFirst(setTempDiv);
        }}
      >
        Add player
      </button>
    </div>
  );
}
