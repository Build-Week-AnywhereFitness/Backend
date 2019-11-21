const db = require("../../db");


// const getSessionsByClass = class_id => {
//     return db('sessions')
//         .where({ class_id })
//         .select('id', 'class_id', 'dateTime');
// };

const getClientsWorkouts = id => {
  return db('clientWorkouts')
  .where({client_id : id})
  .returning("*");
}


const addClientToWorkout = workoutInfo => {
  return db('clientWorkouts')
  .insert(workoutInfo)
  .returning("*");
}

const removeClientFromWorkout = id => {
  return db('clientWorkouts')
  .where({id})
  .del()
  .returning("*");
}

const getAllClientsForWorkout = workoutId => {
  return db('clientWorkouts')
  .where({workout_id : workoutId})
  .returning("*");
}

module.exports = {
  addClientToWorkout,
  getClientsWorkouts,
  removeClientFromWorkout,
  getAllClientsForWorkout
}