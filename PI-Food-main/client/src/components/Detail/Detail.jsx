import "./Detail.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getRecipes } from "../../redux/actions/actions";
import { useEffect, useState } from "react";

function Detail() {
  const { id } = useState
  const dispatch = useDispatch();
  const recipesId = useSelector((state) => state.detailRecipes);

  useEffect(() => {
    dispatch(getRecipes(id));
  }, [dispatch, id]);
  
  
  console.log(recipesId);
  
  return (
    <div>
      <h1> Estoy en Detail</h1>
    </div>
  );
}

export default Detail;
