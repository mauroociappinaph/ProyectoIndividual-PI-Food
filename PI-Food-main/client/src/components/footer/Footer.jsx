import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <h2 className={styles.h2}>Mi footer personalizado</h2>
        <ul>
          <li className={styles.li}><a className={styles.a} href="/home">Home</a></li>
          <li className={styles.li}><a className={styles.a} href="#">Enlace 2</a></li>
          <li className={styles.li}><a className={styles.a} href="#">Form</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
