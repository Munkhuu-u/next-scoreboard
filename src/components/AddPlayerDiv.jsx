export function AddPlayerDiv({ Addfn, check, bool, newName }) {
  if (bool) {
    return (
      <div className="addPlayerDiv">
        <p>+ div</p>
        <input onChange={check} value={newName} />
        <button onClick={Addfn}>nemchix</button>
      </div>
    );
  } else {
    <div></div>;
  }
}
