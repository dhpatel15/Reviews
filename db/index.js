const mysql = require('mysql');
const info = require('../config.js');

const pool = mysql.createPool(info);

module.exports = pool;