const tape = require("tape");
const runDbBuild = require("../database/db_build");
const {getBooks} = require("../queries");

tape("tape is working", t => {
    t.equals(1, 1, "one equals one");
    t.end();
  });

tape('what you are going to test', (t)=> {
    runDbBuild(function(err, res){
        getBooks().then(booksArray => {
            t.equal(booksArray.length, 8, 'The correct number of books were returned')
            t.end()
        })
    })
  })

  tape.onFinish(() => {
    process.exit()
})