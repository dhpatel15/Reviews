const router = require('express').Router();
const controller = require('../controllers/controller.js');
const path = require('path');

router.get('/restaurant/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

router.get('/restaurants', controller.getRestaurants);
router.get('/users', controller.getUsers);
router.get('/reviews', controller.getReviews);

module.exports = router;