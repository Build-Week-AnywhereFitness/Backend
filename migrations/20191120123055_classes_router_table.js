exports.up = async function (knex) {
  await knex.schema.createTable('classes', table => {
    table.uuid("id").primary();
    table.string('name', 255).notNullable();
    table.string('type', 128);
    table.string('location', 255).notNullable();
    table
      .uuid('instructor_id')
      .unsigned()
      .references('users.id');
    table.datetime('dateTime', { precision: 6 }).notNullable();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTable('classes');
};