const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('handlebars');
const fs = require('fs');
const queries = require('../queries.js')

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  queries.getBooks()
    .then(booksArray => {
      fs.readFile(path.join(__dirname, './main.hbs'), 'utf-8', (err, source) => {
        if (err) console.log(err)
        const template = handlebars.compile(source);
        const html = template({
          title: "My Books",
          header: "Here is a list of books",
          books: booksArray
        });
        res.send(html)
      })
    });
})

const port = 3335
app.listen(port, () => {
  console.log(`Our app is running on http://localhost:${port}`);
});