import styles from "../styles/add.module.css";

export function AddPlayerDiv({ nameBlank, Addfn, tempName, bool, newName }) {
  if (bool) {
    return (
      <div className={styles.container}>
        <h2>Add new player</h2>
        <div className={styles.inputAndButton}>
          <input onChange={tempName} value={newName} />
          <button onClick={Addfn}>Add player</button>
        </div>
        <p className={nameBlank ? styles.textRed : styles.textCrystal}>
          Нэр оруулаагүй эсвэл нэр давхардаж байгаа эсэхээ шалгана уу?
        </p>
      </div>
    );
  } else {
    <div></div>;
  }
}
