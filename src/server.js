/* eslint-disable no-console */
require('dotenv').config();

const app = require('./app');
const { PORT, DB_URL } = require('./config');
const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: DB_URL,
});

//setting db variable to use throughout express files
app.set('db', db);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});