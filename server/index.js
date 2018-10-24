const express = require('express');
const parser = require('body-parser');
const path = require('path');

const app = express();

app.use(parser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(3001, () => {
  console.log('Listening on port 3001...');
});