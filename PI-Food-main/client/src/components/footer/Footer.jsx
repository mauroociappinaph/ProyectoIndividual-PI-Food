
import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
    <nav>
      <h2 className={styles.h2}>Mi footer personalizado</h2>
      <ul>
        <li className={styles.li}><a className={styles.a} href="/home">Home</a></li>
        <li className={styles.li}><a className={styles.a} href="/enlace2">Enlace 2</a></li>
        <li className={styles.li}><a className={styles.a} href="./form">Form</a></li>
      </ul>
    </nav>
  </footer>
  );
}

export default Footer;
