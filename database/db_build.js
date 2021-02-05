const fs = require ("fs");
const dbConnection = require ("./db_connection");

const build_file =fs.readFileSync(__dirname + "/db_build.sql", "utf8");

// runDbBuild((error, result) =>{
//   if (error){
//     console.log ("failed", error);
//   } else {
//     console.log("Success!");
//     db_connection.end(()=>{
//       console.log('connection closed');
//     })
//   }
// })

const runDbBuild = cb => dbConnection.query(build_file, cb)

module.exports = runDbBuild
