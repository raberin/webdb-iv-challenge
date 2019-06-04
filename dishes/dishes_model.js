const db = require("../data/dbConfig.js");

module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipes,
  addRecipe
};

function getDishes() {
  return db("dishes");
}

function addDish(dish) {
  return db("dishes")
    .insert(dish)
    .then(ids => {
      return getDish(ids[0]);
    });
}

function getDish(id) {
  return db("dishes")
    .where({ id })
    .first();
}

function getRecipes() {
  return db("recipes");
}

function getRecipe(id) {
  return db("recipes")
    .where({ id })
    .first();
}

function addRecipe(recipe) {
  return db("recipes")
    .insert(recipes)
    .then(ids => {
      return getRecipe(ids[0]);
    });
}
