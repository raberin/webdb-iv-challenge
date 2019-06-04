exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("dishes", tbl => {
      tbl.increments();

      tbl
        .string("name", 128)
        .notNullable()
        .unique();
    })
    .createTable("recipes", tbl => {
      tbl.increments();

      tbl
        .string("name", 128)
        .notNullable()
        .unique();

      tbl.text("instructions");

      tbl
        .integer("dishes_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("dishes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })

    .createTable("recipes_ingredients", tbl => {
      tbl.increments();

      tbl
        .integer("recipes_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      tbl
        .integer("ingredients_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      tbl.float("amount");
    })

    .createTable("ingredients", tbl => {
      tbl.increments();

      tbl
        .string("name", 128)
        .notNullable()
        .unique();
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists("dishes")
    .dropTableIfExists("recipes")
    .dropTableIfExists("recipes_ingredients")
    .dropTableIfExists("ingredients");
};
