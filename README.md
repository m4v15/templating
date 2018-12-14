## Templating example

Example CMS app, client side rendering, rudimentary templating, handlebars & express handlebars versions.

### How to run

1. `git clone git@github.com:m4v15/templating.git && cd templating`
2. `npm i`
3. Make a `config.env` file and add a postgres database url as DB_URL
4. Build the database: `node src/database/db_build.js`

  "csr": "nodemon csr/server.js",
    "ssr": "nodemon ssr/server.js",
    "hbs": "nodemon hbs/server.js",
    "dev": "nodemon final/server.js"

### client side rendering

Client and server stored in the `/csr/` folder.

`npm run csr`

### rudimentary templating

Server stored in the `/ssr/` folder.

`npm run ssr`

### handlebars

Server stored in the `/hbs/` folder.

`npm run hbs`

### express handlebars versions.

Server stored in the `/final/` folder.

`npm run dev`
