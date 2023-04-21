import styles from "./header.module.css";
import Searchbar from "../../components/searchbar/Searchbar";

function Header() {
  return (
    <div className={styles.header}>
     <Searchbar className={styles.homeSearchBar} />
    </div>
  );
}

export default Header;