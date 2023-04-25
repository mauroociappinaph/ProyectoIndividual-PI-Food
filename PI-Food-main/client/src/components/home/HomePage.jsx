import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllRecipes } from "../../redux/actions/actions";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import Card from "../../components/card/card";
import { Fragment } from "react";
/*
import Paginator from "../paginador/Paginador";


;
*/
const HomePage = () => {
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.getAllRecipes);
  //console.log(allRecipes);

  /* const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(9);
  const indexOfLastRecipes = currentPage * recipesPerPage;
  const indexOfFirstRecipes = indexOfLastRecipes - recipesPerPage;
  const currentRecipes = allRecipes.slice(
    indexOfLastRecipes,
    indexOfFirstRecipes
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
*/
  useEffect(() => {
    dispatch(getAllRecipes());
  }, [dispatch]);

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(getAllRecipes());
  };

  return (
    <div className={styles.homeContainer}>
      <Link to="/recipe">Crear Recetas</Link>
      <h1 className={styles.homeH1}>
        <img src="../../" alt="Logo" />
      </h1>
      <button
        onClick={(event) => {
          handleClick(event);
        }}
      >
        Actualizar recetas
      </button>
      <div>
        <select>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
        <select>
          <option value="Tipo de dietas">Tipo de dietas</option>
          <option value="Gluten free">Gluten free</option>
          <option value="Dairy free">Dairy free </option>
          <option value="Paleolithic">Paleolithic</option>
          <option value="Primal">Primal</option>
          <option value="Whole 30">Whole 30</option>
          <option value="Pescatarian">Pescatarian</option>
        </select>
        <select>
          <option value="All">Todos</option>
          <option value="created">Creados</option>
          <option value="api">Existentes</option>
        </select>
        {allRecipes &&
          allRecipes.map((element) => {
            return (
              <Fragment>
                <Link to={"/home/" + element.id}>
                  <Card
                    title={element.title}
                    image={element.image}
                    summary={element.summary}
                  />
                </Link>
              </Fragment>
            );
          })}
      </div>
    </div>
  );
};

export default HomePage

/**"",
"dairy free",
"",
"primal",
"whole 30",
"pescatarian" */

/**
 * Botones/Opciones para filtrar por tipo de dieta, y por si su origen es de la API o de la base de datos (creados por nosotros desde el formulario).
Botones/Opciones para ordenar tanto ascendentemente como descendentemente las recetas por orden alfabético y por "comida saludable" (health score).
 */

/*  <Cards allRecipes={allRecipes} className={styles.homeCards} />

<Paginator
className={styles.Paginator}
recipesPerPage={recipesPerPage}
allRecipes={allRecipes.length}
paginado={paginado}
/>
{currentRecipes.map((c) => {
        return (
          <div>
          <Link to={"/home/" + c.id}>
              <Cards name={c.name} />
            </Link>
            
        })}
        </div>
        */
