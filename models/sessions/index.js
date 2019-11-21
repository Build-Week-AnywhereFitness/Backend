const jwt = require('jsonwebtoken');
const knex = require('knex');



const getSessionsByClass = class_id => {
    return db('sessions')
        .where({ class_id })
        .select('id', 'class_id', 'dateTime');
};