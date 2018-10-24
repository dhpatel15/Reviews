const buildData = require('./dummyData.js');
const model = require('../server/models/reviewModel.js');
const db = require('./index.js');

for (let x = 0; x < 100; x++) {
  model.addRestaurant(buildData.restaurantDataMaker())
    .then(() => console.log('restaurantAdded'))
    .done();
}

db.end();