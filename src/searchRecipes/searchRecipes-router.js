const express = require('express');

const searchRecipesRouter = express.Router();
const bodyParser = express.json();
const logger = require('../logger')
const searchRecipesService = require('./searchRecipes-service');
const xss = require('xss');

const recipeRouter = require('../recipes/recipe-router');

const serializeRecipe = recipe => ({
    ...recipe,
    recipename: xss(recipe.recipename),
    experience: xss(recipe.experience),
    preptime: xss(recipe.preptime),
    cooktime: xss(recipe.cooktime),
    servings: xss(recipe.servings),
    ingredients: xss(recipe.ingredients),
    directions: xss(recipe.directions),
    status: xss(recipe.status)
});

searchRecipesRouter
    .route('/')
    .get((req, res, next) => {
        const knexInstance = req.app.get('db');
        console.log(req.query, "my req.query")
        console.log("parts: ", req.query.recipename, req.query.ingredients);
        searchRecipesService
        .searchRecipes(
            req.app.get('db'),
            req.query.recipename,
            req.query.ingredients  
        )
        
        .then(recipes => {
            console.log(recipes, "Angela was here")
            if(!recipes) {
                return res.status(400).json({
                    error: {message: 'Error getting recipes.'}
                });
            }
            return res.json({recipes})
        })
    })
console.log('can you see me?')
    module.exports = searchRecipesRouter;