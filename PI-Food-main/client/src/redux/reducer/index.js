import { GET_RECIPES , GET_ALL_RECIPES, CREATE_RECIPE } from "../actions/index";

let initialState = { allRecipes: [], detailRecipes: {}, createRecipe: null };

function rootReducer(state = initialState, { type, payload } = {}) {
  switch (type) {
    case GET_RECIPES:
      return {
        ...state,
        detailRecipes: payload,
        allRecipes: payload,
      };
    case GET_ALL_RECIPES:
      return {
        ...state,
        allRecipes: payload,
      };
    case CREATE_RECIPE:
      return {
        ...state,
        createRecipe: payload,
      };
    default:
      return {
       ...state
      }
  }
}

export default rootReducer;
