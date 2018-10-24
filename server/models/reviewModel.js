const db = require('../../db/index.js');
const Promise = require('bluebird');

const queryPromise = Promise.promisify(db.query.bind(db));

module.exports = {
  addUser: (user) => {
    return queryPromise(
      `INSERT INTO users
      (username, hometown, numOfReviews, VIP, iconColor, abbreviation)
      VALUES (?)`,
      [[user.username, user.hometown, user.numOfReviews, user.vip, user.iconColor, user.abbreviation]]
    )
      .catch((err) => {
        if (err) {
          console.error(err);
        }
      });
  },
  addRestaurant: (restaurant) => {
    return queryPromise(
      `INSERT INTO restaurants
      (location, lovedFor)
      VALUES (?)`,
      [[restaurant.location, restaurant.lovedFor]]
    )
      .catch((err) => {
        if (err) {
          console.error(err);
        }
      });
  },
  addReview: (review) => {
    return queryPromise(
      `INSERT INTO reviews
      (userId, restaurantId, overallRating, foodRating, serviceRating, ambienceRating, valueRating, noiseLevel, dinedDate, reviewText, isRecommended, recommendFor)
      VALUES (?)`,
      [[review.userId, review.restaurantId, review.overallRating, review.foodRating, review.serviceRating, review.ambienceRating, review.valueRating, review.noiseLevel, review.dinedDate, review.reviewText, review.isRecommended, review.recommendFor]]
    )
      .catch((err) => {
        if (err) {
          console.error(err);
        }
      });
  },
  getUserById: (id) => {
    return queryPromise(
      `SELECT * FROM users
      WHERE id=?`,
      [id]
    )
      .catch((err) => {
        if (err) {
          console.error(err);
        }
      });
  },
  getRestaurantById: (id) => {
    return queryPromise(
      `SELECT * FROM restuarants
      WHERE id=?`,
      [id]
    )
      .catch((err) => {
        if (err) {
          console.error(err);
        }
      });
  },
  getReviewsByRestaurantId: (id) => {
    return queryPromise(
      `SELECT * FROM reviews
      WHERE restaurantId=?`,
      [id]
    )
      .catch((err) => {
        if (err) {
          console.error(err);
        }
      });
  }
};