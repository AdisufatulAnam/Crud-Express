let mysql = require('mysql');
 ///koneksi ke db mysql
let connection = mysql.createConnection({
   host:        'localhost',
   user:        'root',
   password:    '',
   database:    'db_express_api'
 });
//cek koneksi error atau enggak.
connection.connect(function(error){
   if(!!error){
     console.log(error);
   }else{
     console.log('Connection Succuessfully!');
   }
 })

module.exports = connection;