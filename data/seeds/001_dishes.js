exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("dishes")
    .del()
    .then(function() {
      return knex("dishes").insert([
        { name: "pasta" },
        { name: "pizza" },
        { name: "chicken" }
      ]);
    });
};
