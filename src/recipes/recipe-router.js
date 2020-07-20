const express = require('express');

const recipeRouter = express.Router();
const bodyParser = express.json();
const logger = require('../logger');
const recipeService = require('./recipe-service');
const xss = require('xss');

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

recipeRouter
 .route('/')
 .get((req, res, next) => {
     const knexInstance = req.app.get("db");
     console.log(knexInstance)
     recipeService
        .getAllRecipes(knexInstance)
        .then((recipes) => {
            res.json(recipes.map((recipe)=> serializeRecipe(recipe)));
        })
        .catch((err) => {
            console.log(err);
            next(err);
        });
 })

 .post(bodyParser, (req, res, next) => {
     const {recipename, experience, preptime, cooktime, servings, ingredients, directions} = req.body;
     const newRecipe = {recipename, experience, preptime, cooktime, servings, ingredients, directions};
     recipeService
        .insertRecipe(req.app.get("db"), newRecipe)
        .then((recipe) => {
            res 
            .status(201)
            .location(req.originalUrl + `${recipe.id}`)
            .json(serializeRecipe(recipe));
        })
        .catch((err) => {
            console.log(err);
            next(err);
        });
 });

 recipeRouter
    .route('/:id')
    .all((req, res, next) => {
        recipeService.getById(
            req.app.get('db'),
            req.params.id
        )

        .then(recipe => {
            if(!recipe) {
                return res.status(404).json({
                    error: {message:'Recipe does not exist.'}
                });
            }
            res.recipe = recipe;
            next();
        })
        .catch(next);
    })
    
    .get((req, res, next) => {
        return res.json(serializeRecipe(res.recipe));
    })

    .put(bodyParser, (req, res, next) => {
        const {recipename, experience, preptime, cooktime, servings, ingredients, directions, status} = req.body;
        const recipeToUpdate = {recipename, experience, preptime, cooktime, servings, ingredients, directions, status};
        const numberOfValues = Object.values(recipeToUpdate).filter(Boolean).length;

        if (numberOfValues === 0) {
            return res.status(400).json({
              error: {
                message: "request body must contain 'recipename', 'preptime', or 'cooktime'",
              },
            });
          }
  
    recipeService
    .editRecipe(req.app.get('db'), req.params.id, recipeToUpdate)
    .then(() => {
        res.status(204).end();
    })
    .catch(next)
});

    
 module.exports = recipeRouter;