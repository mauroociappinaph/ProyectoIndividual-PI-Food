import styles from "./searchbar.module.css";

function Searchbar() {
  return (
    <div className={styles.searchbox}>
      <form className={styles.form}>
        <input className={styles.input} type="text" placeholder="Búsqueda" />
        <button className={styles.button}>Buscar</button>
      </form>
    </div>
  );
}

export default Searchbar;
