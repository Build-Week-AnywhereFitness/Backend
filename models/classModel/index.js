const db = require("../../db");



// const getClassById = async id => {
//   const foundClass = db('classes')
//       .where({ id })
//       .first();

//   const sessions = db('sessions')
//       .where({ class_id: id })
//       .select('id', 'dateTime');

//   let result = await Promise.all([foundClass, sessions]);

//   return { ...result[0], sessions: result[1] };
// };

const getClassesByCoach = id => {
  return db('classes')
      .where({ instructor_id: id })
      .returning("*");
};

const addClass = workoutClass => {
  return db("classes")
  .insert(workoutClass)
  .returning("*");
}

const getClasses = () => {
  return db('classes');

}

const updateClass = (id, changes) => {
  return db('classes')
  .where({id})
  .update(changes)
  .returning("*");
}

const deleteClass = id => {
  return db('classes')
  .where({id})
  .del()
  .returning("*");
}

module.exports = {
  // getClassById, 
  getClassesByCoach,
  addClass,
  getClasses,
  updateClass,
  deleteClass
}