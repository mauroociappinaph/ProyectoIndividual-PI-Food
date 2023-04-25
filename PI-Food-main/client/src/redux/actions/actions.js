import axios from "axios";

export const GET_ALL_RECIPES = "GET_ALL_RECIPES";

export function getAllRecipes() {
  return async (dispatch) => {
    const response = await axios(`http://localhost:3001/recipes`);
    const data = response.data;
    console.log(data);
    return dispatch({
      type: GET_ALL_RECIPES,
      payload: data,
    });
  };
}
export const GET_RECIPES = "GET_RECIPES";

export function getRecipes(id) {
  return async (dispatch) => {
    const response = await axios(`http://localhost:3001/recipes/${id}`);
    const data = response.data;
    return dispatch({
      type: GET_RECIPES,
      payload: data,
    });
  };
}


export const CREATE_RECIPE = "CREATE_RECIPE";

export function createRecipe() {
  return async (dispatch) => {
    const response = await axios.post(`http://localhost:3001/recipes`);
    const { data } = response;
    return dispatch({
      type: CREATE_RECIPE,
      payload: data,
    });
  };
}
