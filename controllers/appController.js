const Recipe = require('../models/recipe');
const app = require('../routes/appRoutes');

const appController = {
  createRecipe: async (request, response) => {
    try {
      // get the recipe data from request body
      const { title, ingredients, description } = request.body;

      // create a new recipe
      const newRecipe = new Recipe({
        title,
        ingredients,
        description,
      });

      // save the recipe
      await newRecipe.save();

      // send the response
      response.status(201).json({ message: "Recipe created successfully" });
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  },


  getallRecipes: async (request, response) => {
    try {
      //  get all recipes from the database
      const recipes = await Recipe.find().select("-__v -createdAt -updatedAt");

      // send the response
      response.status(200).json(recipes);
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  },

  getRecipeById: async (request, response) => {
    try {
      // get the recipeId from request params
      const { recipeId } = request.params;

      // get the recipe by Id
      const recipe = await Recipe.findById(recipeId);

    //  if recipe is not exist
      if (!recipe) {
        return response.status(404).json({ message: "Recipe not found" });
      }


      // send the response
      response.status(200).json(recipe);
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  },

  updateRecipe: async (request, response) => {
    try {
      // get the recipeId from request params
      const { recipeId } = request.params;

      // get the customer data from request body
      const { title, ingredients, description } = request.body;

      // update the recipe
      await Recipe.findByIdAndUpdate(recipeId, {
        title,
        ingredients,
        description,
      });

      // send the response
      response.status(200).json({ message: "Recipe updated successfully" });
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  },

  deleteRecipe: async (request, response) => {
    try {
      // get the recipeId from request params
      const { recipeId } = request.params;

      // get the customer data from request body
      const { title, ingredients, description } = request.body;

      // get the recipe by Id
      const recipe = await Recipe.findById(recipeId);

      // if recipe is not exist
      if (!recipe) {
        return response.status(400).json({ message: "Recipe not found" });
      }

      // update the recipe
      await Recipe.findByIdAndDelete(recipeId, {
        title,
        ingredients,
        description,
      });

      // send the response
      response.status(200).json({ message: "Recipe deleted successfully" });
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  },
};

module.exports = appController;