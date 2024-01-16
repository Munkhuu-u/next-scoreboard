import Players from "./Players";
import { Header } from "./Header";
import { Features } from "./Features";
import { useState } from "react";
import { players } from "../utils/players";

export default function Home() {
  const [score, setScore] = useState(players);
  const [tempDiv, settempDiv] = useState("");

  return (
    <div>
      <Header />
      <Players score={score} setScore={setScore} />
      <Features
        score={score}
        setScore={setScore}
        tempDiv={tempDiv}
        settempDiv={settempDiv}
      />
    </div>
  );
}
