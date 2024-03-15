
exports.up = (knex) => {
  return  knex.schema.createTable("loans", (table)=>{
    table.increments("idLoan").primary();
    table.integer("user_id").unsigned().index().references("idUser").inTable("users");
    table.integer("book_id").unsigned().index().references("idBook").inTable("books")
  })
};

exports.down = (knex) => {
    return  knex.schema.dropTableIfExist("loans")
};
