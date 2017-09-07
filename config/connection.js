// Set up MySQL connection.
var mysql = require("mysql");

// var connection = mysql.createConnection({
//   port:  3000,
//   host: "localhost",
//   user: "root",
//   password: "12345",
//   database: "meds_db"
// });

// //heroku stuff
var connection;
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
  connection = mysql.createConnection({
  port:  process.env.PORT || 3000,
  host: "localhost",
  user: "root",
  password: "12345",
  database: "meds_db"
  })
}


// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
