
exports.up = async function (knex) {

  // await knex.schema.createTable("usersWorkouts", table => {
  //   table.
  //     uuid('user_id')
  //     .unsigned()
  //     .references('users.id');
  //   table.
  //     uuid('workout_id')
  //     .unsigned()
  //     .references('classes.id');
  // });


};

exports.down = function (knex) {
  // await knex.schema.dropTable("usersWorkouts")
};
