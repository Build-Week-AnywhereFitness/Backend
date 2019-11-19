const uuid = require("uuid/v4");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: uuid(),
          first_name: "Dwight",
          last_name: "Smith",
          username: "dSmith",
          password: "12345678",
          email: "dSmith@example.com",
          role: "coach"
        },
        {
          id: uuid(),
          first_name: "Jim",
          last_name: "Howard",
          username: "jHoward",
          password: "12345678",
          email: "jHoward@example.com",
          role: "client"
        },
        {
          id: uuid(),
          first_name: "Sally",
          last_name: "Diaz",
          username: "sDiaz",
          password: "12345678",
          email: "sDiaz@example.com",
          role: "client"
        },
      ]);
    });
};
