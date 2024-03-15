
exports.up = (knex) => {
    return knex.schema.createTable("books", (table) => {
        table.increments("idBook").primary();
        table.string("author").notNullable();
        table.string("title").notNullable();
        table.string("category").notNullable();
        table.integer("pages").notNullable();
        table.boolean("isAvailable").defaultTo("true");
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now())
    });
}

exports.down = (knex) => {
  return knex.schema.dropTableIfExist("books")
};
