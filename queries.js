const db = require('./database/db_connection')

const getBooks = () => {
  return db.query(`SELECT name FROM BOOKS;`)
    .then(res => res.rows)
    .catch(err => {
      console.log({ err })
    })
}

module.exports = {
  getBooks
}