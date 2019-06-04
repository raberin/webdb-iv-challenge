exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes_ingredients")
    .del()
    .then(function() {
      return knex("recipes_ingredients").insert([
        { recipes_id: 1, amount: 10, ingredients_id: 1 },
        { recipes_id: 2, amount: 10, ingredients_id: 2 },
        { recipes_id: 3, amount: 10, ingredients_id: 3 }
      ]);
    });
};
