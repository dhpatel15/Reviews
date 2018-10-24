const buildData = require('./dummyData.js');
const model = require('../server/models/reviewModel.js');
const db = require('./index.js');

for (let x = 0; x < 100; x++) {
  model.addUser(buildData.userDataMaker())
    .then(() => console.log('userAdded'))
    .done();
}

db.end();