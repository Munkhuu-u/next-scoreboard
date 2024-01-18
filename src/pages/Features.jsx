import { AddPlayerDiv } from "@/components";
import { useState } from "react";
import styles from "../styles/features.module.css";

export function Features({ score, setScore, tempDiv, setTempDiv }) {
  const [newName, setnewName] = useState("");
  let [clicked, setClicked] = useState(false);
  let [nameBlank, setNameBlank] = useState(false);

  function ResetFn() {
    const resetScore = [...score];
    for (let i = 0; i < score.length; i++) {
      resetScore[i].playerScore = 0;
    }
    setScore(resetScore);
  }

  const tempName = (event) => {
    setnewName(event.target.value);
    console.log("tempName ajillaj biana");
  };

  function Addfn() {
    const playerAdded = [...score];
    console.log("Add fn ajilllaj baina");
    console.log(newName, "newName in Addfn");
    console.log(newName != "");
    if (newName != "") {
      playerAdded.push({
        id: playerAdded.length,
        playerName: newName,
        playerScore: 0,
      });
      setScore(playerAdded);
      showAddplayer();
      setNameBlank(false);
      setnewName("");
    } else {
      setNameBlank(true);
    }
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
          tempName={tempName}
          bool={clicked}
          newName={newName}
          nameBlank={nameBlank}
        />
      </div>
      <div className={styles.features}>
        <button class={styles.featureButton} onClick={showAddplayer}>
          Add player
        </button>
        <button class={styles.featureButton} onClick={ResetFn}>
          Reset
        </button>
      </div>
    </div>
  );
}
