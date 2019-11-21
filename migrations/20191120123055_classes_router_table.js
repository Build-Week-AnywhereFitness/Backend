exports.up = async function (knex) {
  await knex.schema.createTable('classes', table => {
    table.uuid("id").primary();
    table.string('name', 255).notNullable();
    table.string('intensity', 128);
    table.string('location', 255).notNullable();
    table
      .uuid('instructor_id')
      .unsigned()
      .references('users.id');
    table.datetime('dateTime', { precision: 6 }).notNullable();
    table.string('duration').notNullable();
    table.integer('max_class_size').notNullable();
    table.integer('attendee_size').notNullable();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTable('classes');
};