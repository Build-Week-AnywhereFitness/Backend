
exports.up = async function (knex) {

  await knex.schema.createTable("clientWorkouts", table => {
    table.
      uuid('client_id')
      .unsigned()
      .references('users.id');
    table.
      uuid('workout_id')
      .unsigned()
      .references('classes.id');
  });


};

exports.down = function (knex) {
  await knex.schema.dropTable("clientWorkouts")
};
