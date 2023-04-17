const { default: axios } = require("axios")


const getDiets = async (req, res) => {
    const dietsAPI = (await axios.get ("") ).data 
    //
} 

module.exports = getDiets