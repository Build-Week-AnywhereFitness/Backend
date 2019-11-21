
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sessions').insert([
      {
          class_id: 1,
          dateTime: '2019-11-30 16:30:00'
      },
      {
          class_id: 2,
          dateTime: '2019-12-04 18:00:00'
      },
      {
          class_id: 3,
          dateTime: '2019-12-15 16:30:00'
      }
  ]);
};