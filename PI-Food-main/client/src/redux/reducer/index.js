import { GET_RECIPES , GET_ALL_RECIPES, CREATE_RECIPE } from "../actions/actions";

const initialState = { allRecipes: [], detailRecipes: {}, createRecipe: null };

function rootReducer(state = initialState, { type, payload } = {}) {
  switch (type) {
    case GET_ALL_RECIPES:
      return {
        ...state,
        allRecipes: payload,
      };
    case GET_RECIPES:
      return {
        ...state,
        detailRecipes: payload,
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
