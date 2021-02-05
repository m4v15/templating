const {Pool} = require("pg");
require("env2")("config.env");

let {DB_URL, DB_URL_TEST, NODE_ENV} =process.env;

if (NODE_ENV === 'test'){
  DB_URL=DB_URL_TEST
  console.log(DB_URL)
}

if (!DB_URL){
  throw Error ("No Database URL");
}

const option = {
  connectionString : DB_URL
};
module.exports = new Pool (option);
