const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'dbuser',
  password: 'himitsu',
  database: 'cine-aurora'
})

//connection.connect()
function selectAllSala(connection){
connection.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM sala", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
connection.end()
}
function insertSala(connection){
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO sala (has_dolby, has_aircon) VALUES ('0', '0')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
connection.end()
}

function updateSala(connection, id, dolby, aircon){
  connection.connect(function(err) {
    if (err) throw err;
    var sql = "UPDATE sala SET has_dolby = "+ dolby +", has_aircon "+ aircon +" WHERE id_sala = "+ id +"";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record updated");
    });
  });
}

function deleteSala(connection, id){

  connection.connect(function(err) {
    if (err) throw err;
    var sql = "DELETE FROM sala WHERE id_sala = "+ id +"";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Number of records deleted: " + result.affectedRows);
    });
  });
}

//connection.end()
