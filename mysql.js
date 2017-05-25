var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'zhangrh0722',
    database: 'lt_db'
});

connection.connect();

connection.query('select * from user', function(error, results, fields) {
    if (error) throw error;
    console.log('The results is: ', results);
});

connection.end();