import Card from "../card/card";
import styles from "./cards.module.css"; // Import CSS file

function Cards() {
  return (
    <div className={styles.container}>
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Cards;
