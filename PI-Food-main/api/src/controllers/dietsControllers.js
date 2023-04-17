


const { default: axios } = require("axios")


const getDiets = async (req, res) => {
    const dietsAPI = (await axios.get ("https://apimocha.com/n.s.recipes/allrecipes") ).data
    //
} 

module.exports = getDiets