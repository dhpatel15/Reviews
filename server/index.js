const express = require('express');
const parser = require('body-parser');
const path = require('path');
const router = require('./routes/routes.js');

const app = express();

app.use(parser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(router);

app.listen(3001, () => {
  console.log('Listening on port 3001...');
});