const knex = require("knex");
const config = require("../knexfile");

const environment = "production";

module.exports = knex(config[environment]);