const router = require('express').Router();
const controller = require('../controllers/controller.js');
const path = require('path');

router.all('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

router.get('/restaurant/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

router.get('/favicon', (req, res) => {
  res.send();
});

router.get('/restaurants', controller.getRestaurants);
router.get('/users', controller.getUsers);
router.get('/reviews', controller.getReviews);
router.get('/user/reviews', controller.getUserReviews);

module.exports = router;