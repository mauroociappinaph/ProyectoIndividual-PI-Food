const getDiets = require("../controllers/dietsControllers")


const dietsHandler  = async (req , res) => {
   try {
    const diets = await getDiets() 
     res.status(200).json(diets)
   } catch (error) {
    res.status(500).json({error: error.message}) 
   }
}

module.exports =  dietsHandler
