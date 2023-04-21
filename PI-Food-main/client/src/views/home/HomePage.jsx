import Cards from "../../components/cards/Cards";
import Paginator from "../../components/paginator/Paginator";
import Footer from "../../components/footer/Footer";

import styles from "./HomePage.module.css";
import Header from "../../components/header/Header";

function HomePage() {
  return (
    <div className={styles.homeContainer}>
     <h1 className={styles.homeH1}><img src="../../" alt="Logo" /></h1>
      <Header className={styles.homeHeader} />
      <Cards className={styles.homeCards} />
      <Paginator className={styles.homePaginator} />
      <Footer className={styles.homeFooter} />
    </div>
  );
}

export default HomePage;

/*

*/
