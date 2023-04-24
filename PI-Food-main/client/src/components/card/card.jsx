import styles from "./card.module.css";

function Card({recipe}) {


console.log(recipe);

  return (
    <div className={styles.container}>
      <div className={styles["card-container"]}>
      
        <div className={styles["button"]}>
        <p>X</p>
        </div>
        <div className={styles["container--img"]}>
          <h1>Img</h1>
        </div>
        <div className={styles["container--info"]}>
          <h2>Nombre</h2>
          <p>Resumen del plato </p>
          <p>Health Score</p>
          <p>Paso a Paso </p>
          <p>Tipo de dietas</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
