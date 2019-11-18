
exports.up = function(knex) {

  knex.schema.createTable("users", table => {
    table.uuid("id").primary();
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("username").notNullable().unique();
    table.string("password").notNullable();
    table.string("email").notNullable().unique();
    table.string("role").notNullable();
  });
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists("users");
  
};
