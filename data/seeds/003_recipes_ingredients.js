exports.seed = function(knex, Promise) {
  return knex("recipes").insert([
    { amount: 20, name: "carbonara", ingredients_id: 1, dishes_id: 1 },
    { amount: 20, name: "hawaiian", ingredients_id: 2, dishes_id: 2 },
    { amount: 20, name: "fried", ingredients_id: 3, dishes_id: 3 }
  ]);
};
