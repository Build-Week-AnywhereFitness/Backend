require("dotenv").config();

module.exports = {

  //use for local server
  development: {
    client: 'postgresql',
    connection: {
      database: process.env.DEV_DB,
      user: process.env.DEV_USER,
      password: process.env.PW
    }
  },
  testing: {
    client:'postgresql',
    connection:{
      filename:'./test.db3',
    },
    useNullAsDefault:true,
    migrations:{
      directory:'./migrations',
    },
    seeds:{
      directory:'./seeds',
    },
   },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  //use for heroku postgres server
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    ssl: true,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
