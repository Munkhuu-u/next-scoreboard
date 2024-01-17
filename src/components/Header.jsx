import { TrophyIcon } from "../utils/icons";
// import "../styles/header.css";

export function Header() {
  return (
    <div className="header">
      <div>
        <h1>Play Score</h1>
        <p> Hidden in the middle of text</p>
      </div>
      <TrophyIcon />
    </div>
  );
}
