var connection = require ('../config/connection.js');

var orm = {
  selectAll: function(tableInput) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  insertOne: function(tableInput) { 
    var queryString = "INSERT INTO " + tableInput;
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      console.log(result)
    });
  },
  updateOne: function(tableInput) { 
    var queryString = "UPDATE " + tableInput;
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      console.log(result)
    });
  },


};
module.exports = orm;
