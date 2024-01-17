export function Features({ score, setScore, tempDiv, setTempDiv }) {
  function ResetFn() {
    const resetScore = [...score];
    for (let i = 0; i < score.length; i++) {
      console.log("for ajillaj baina", resetScore[0]);
      resetScore[i].playerScore = 0;
    }
    setScore(resetScore);
  }

  return (
    <div className="features">
      <button
        onClick={() => {
          ResetFn();
        }}
      >
        Reset
      </button>
      <button>Add player</button>
    </div>
  );
}
