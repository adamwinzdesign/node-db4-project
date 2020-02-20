const express = require('express');

const RecipeRouter = require('./recipes/recipe-router.js');

const server = express();

server.use(express.json());
server.use('/api/recipes', RecipeRouter);

server.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to the recipe manager app!</h1>
  `)
})

module.exports = server;
