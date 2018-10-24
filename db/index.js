const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'tableOpenReviews'
});

module.exports = connection;