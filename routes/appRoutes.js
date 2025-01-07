// import express library
const express = require('express');
const appController = require('../controllers/appController');

// create a express router
const appRouter = express.Router();

appRouter.post("/", appController.createRecipe); 

appRouter.get('/', appController.getallRecipes);

appRouter.get("/:recipeId", appController.getRecipeById);

appRouter.put("/:recipeId", appController.updateRecipe,);

appRouter.delete("/:recipeId", appController.deleteRecipe);


module.exports = appRouter;