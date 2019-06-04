exports.seed = function(knex, Promise) {
  return knex("dishes").insert([
    { name: "pasta" },
    { name: "pizza" },
    { name: "chicken" }
  ]);
};
