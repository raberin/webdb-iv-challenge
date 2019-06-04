exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      return knex("recipes").insert([
        { instructions: "blah blah", name: "carbonara", dishes_id: 1 },
        { instructions: "blah blah", name: "hawaiian", dishes_id: 2 },
        { instructions: "blah blah", name: "fried", dishes_id: 3 }
      ]);
    });
};
