require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const {CLIENT_ORIGIN} = require('./config')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const recipeRouter = require('./recipes/recipe-router')
const recipeService = require('./recipes/recipe-service')
const searchRecipesRouter = require('./searchRecipes/searchRecipes-router')
const searchRecipesService = require('./searchRecipes/searchRecipes-service')

const app = express()

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption))
app.use(cors())
app.use(helmet())
app.options('*', cors());  // enable pre-flight

app.use('/api/myrecipes', recipeRouter);
app.use('/api/search', searchRecipesRouter);
app.get('/api/*', cors(), (req, res) => {
  res.json({ok: true});
  console.log("res.json")
});

  app.use(function errorHandler(error, req, res, next) {
      let response
      if (NODE_ENV === 'production') {
        response = { error: { message: 'server error' } }
      } else {
        console.error(error, "error")
        response = { message: error.message, error }
      }
      res.status(500).json(response)
    })

module.exports = app