exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      return knex("ingredients").insert([
        { name: "tomato" },
        { name: "pineapple" },
        { name: "chicken" },
        { name: "pepporoni" },
        { name: "cheese" },
        { name: "bread" }
      ]);
    });
};
