import { PlusIcon, MinusIcon } from "../utils/icons";
import styles from "../styles/player.module.css";

export function Player({ score, aScore, index, increaseScore, decreaseScore }) {
  if (index != score.length - 1) {
    return (
      <div>
        <div className={styles.player} key={index}>
          <p className={styles.playerName}>{aScore.playerName}</p>
          <div className={styles.playerScore}>
            <button
              className={styles.playerButton}
              onClick={() => {
                decreaseScore(index);
              }}
            >
              <MinusIcon />
            </button>
            <p>{aScore.playerScore}</p>
            <button
              className={styles.playerButton}
              onClick={() => {
                increaseScore(index);
              }}
            >
              <PlusIcon />
            </button>
          </div>
        </div>
        <div className="divider"></div>
      </div>
    );
  } else {
    return (
      <div>
        <div className={styles.player} key={index}>
          <p className={styles.playerName}>{aScore.playerName}</p>
          <div className={styles.playerScore}>
            <button
              className={styles.playerButton}
              onClick={() => {
                decreaseScore(index);
              }}
            >
              <MinusIcon />
            </button>
            <p>{aScore.playerScore}</p>
            <button
              className={styles.playerButton}
              onClick={() => {
                increaseScore(index);
              }}
            >
              <PlusIcon />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
