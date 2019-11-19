const knexCleaner = require("knex-cleaner");

exports.seed = function(knex) {
  // Cleans tables after testing
  knexCleaner.clean(knex, {
    mode: "delete",
    ignoreTables: ["knex_migrations", "knex_migrations_lock"]
  });
};
