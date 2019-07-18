var mysql = require("mysql");

// MySQL DB Connection Information (remember to change this with our specific credentials)
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'burgers_db'
  });
};

connection.connect();
module.exports = connection;