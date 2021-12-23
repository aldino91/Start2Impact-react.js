import axios from "axios";

export default function getRecipes(req, res) {
  console.log(
    "https://api.spoonacular.com/recipes/complexSearch?query=legumes&diet=vegetarian&fillIngredients=true&addRecipeInformation=true&number=35&apiKey=c0547327528a443d81b1c9c2ef9667b0",
    req.query
  );
  return axios(
    /* "https://api.spoonacular.com/recipes/complexSearch?query=legumes&diet=vegetarian&fillIngredients=true&addRecipeInformation=true&number=35&apiKey=c0547327528a443d81b1c9c2ef9667b0" */
    /* `https://api.spoonacular.com/recipes/complexSearch?${req.query}` */
    `https://api.spoonacular.com/recipes/complexSearch?query=legumes&diet=vegetarian&fillIngredients=true&addRecipeInformation=true&number=35&apiKey=c0547327528a443d81b1c9c2ef9667b0`
  )
    .then((result) => {
      console.log(result);

      return res.status(200).json({ data: result.data });
    })
    .catch((error) => {
      console.log(error.message);
      return res.status(500).json({ message: error.message });
    });
}

/* query=pasta&diet=vegetarian&fillIngredients=true&addRecipeInformation=true&number=35&apiKey=1324f882eb35412b91b6262320c14334 */
