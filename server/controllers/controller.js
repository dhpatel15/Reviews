const model = require('../models/reviewModel.js');

exports.getRestaurants = (req, res) => {
  model.getRestaurantById(req.query.id)
    .then((restaurant) => {
      res.send(restaurant);
    });
};

exports.getUsers = (req, res) => {
  model.getUserById(req.query.id)
    .then((user) => {
      res.send(user);
    });
};

exports.getReviews = (req, res) => {
  model.getReviewsByRestaurantId(req.query.id)
    .then((reviews) => {
      res.send(reviews);
    });
};