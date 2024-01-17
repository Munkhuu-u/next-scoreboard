import Players from "./Players";
import { Header, Features } from "@/components";
import { AddPlayerDiv } from "@/components/AddPlayerDiv";
import { useState } from "react";
import { players } from "../utils/players";

export default function Home() {
  const [score, setScore] = useState(players);
  const [tempDiv, settempDiv] = useState("");

  return (
    <div className="container">
      <Header />
      <Players score={score} setScore={setScore} />
      <Features
        score={score}
        setScore={setScore}
        tempDiv={tempDiv}
        setTempDiv={settempDiv}
      />
    </div>
  );
}
