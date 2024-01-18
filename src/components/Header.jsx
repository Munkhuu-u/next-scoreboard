import { TrophyIcon } from "../utils/icons";
import styles from "../styles/header.module.css";

export function Header() {
  return (
    <div>
      <div className={styles.upper}>
        <h1>Play Score</h1>
        <TrophyIcon />
      </div>
      <p> Hidden in the middle of text</p>
    </div>
  );
}
