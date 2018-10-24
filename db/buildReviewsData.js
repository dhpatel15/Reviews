const buildData = require('./dummyData.js');
const model = require('../server/models/reviewModel.js');
const db = require('./index.js');

for (let x = 0; x < 1000; x++) {
  model.addReview(buildData.reviewDataMaker())
    .then(() => console.log('reviewAdded'))
    .done();
}

db.end();