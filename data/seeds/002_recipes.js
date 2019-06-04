exports.seed = function(knex, Promise) {
  return knex("recipes").insert([
    { name: "carbonara", dishes_id: 1 },
    { name: "hawaiian", dishes_id: 2 },
    { name: "fried", dishes_id: 3 }
  ]);
};
