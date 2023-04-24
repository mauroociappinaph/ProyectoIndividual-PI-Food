import { useEffect , useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllRecipes } from "../../redux/actions/index";
import Header from "../../components/header/Header";
import Cards from "../../components/cards/Cards";
import Footer from "../../components/footer/Footer";

import styles from "./HomePage.module.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.getAllRecipes);
console.log(allRecipes);

const [currentPage, setCurrentPage] = useState(1)
const [recipesPerPage, setRecipesPerPage ] = useState(9)
const indexOfLastRecipes = currentPage * recipesPerPage
const indexOfFirstRecipes = indexOfLastRecipes - recipesPerPage
const currentRecipes = allRecipes.slice (indexOfLastRecipes, indexOfFirstRecipes)

const paginado = (pageNumber)=> {
  setCurrentPage (pageNumber)
}


  useEffect(() => {
    dispatch(getAllRecipes());
  }, [dispatch]);

  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.homeH1}>
        <img src="../../" alt="Logo" />
      </h1>

      <Header className={styles.homeHeader} />
      <Cards allRecipes={allRecipes} className={styles.homeCards} />
      <Footer className={styles.homeFooter} />
    </div>
  );
};

export default HomePage;
