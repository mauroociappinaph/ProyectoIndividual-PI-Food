const getDiets = async (recipeID) => {
  
  //? Realiza una verificación en el valor del parámetro recipeID 
  //? para asegurarse de que sea un número entero positivo.

    if (!Number.isInteger(recipeID) || recipeID <= 0) {
    throw new Error(`Recipe ID must be a positive integer. Received: ${recipeID}`);
  }
  try {

//? Se almacena la respuesta en data

    const { data } = await axios.get(
      "https://apimocha.com/n.s.recipes/allrecipes"
    );
    
    //? Busca en la matriz de objetos data el objeto que tenga un ID igual al recipeID 
    //? proporcionado como parámetro. Si se encuentra un objeto que coincida, se almacena 
    //? en una constante llamada recipe.


    const recipe = data.find((r) => r.id === parseInt(recipeID));
    if (!recipe) {
        throw new Error(`Recipe with ID ${recipeID} not found in API response`);
    }
    return recipe.diets;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
