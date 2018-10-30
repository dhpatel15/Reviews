const express = require('express');
const parser = require('body-parser');
const path = require('path');
const router = require('./routes/routes.js');
const compression = require('compression');

const app = express();

app.use(parser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(router);
app.use(compression);

app.listen(3020, () => {
  console.log('Listening on port 3020...');
});