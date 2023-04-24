import  Card  from "../card/card";
import styles from "./cards.module.css"; // Import CSS file

function Cards({ allRecipes }) {


  return (
    <div className={styles.container}>
      {allRecipes?.map((recipe) => (
        <Card recipe={recipe} 
        key={recipe.id}
        title={recipe.title}
        image={recipe.image}
        

        
         />
      ))}
    </div>
  );
}

export default Cards;

// Imagne nombre y tipo de dieta.