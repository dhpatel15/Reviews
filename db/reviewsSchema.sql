CREATE DATABASE IF NOT EXISTS tableOpenReviews;

USE tableOpenReviews;

DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS restaurants;

CREATE TABLE users
(
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(35) NOT NULL,
  hometown VARCHAR(35) NOT NULL,
  numOfReviews INT NOT NULL,
  vip BINARY NOT NULL,
  iconColor VARCHAR(35) NOT NULL,
  abbreviation VARCHAR(2) NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE restaurants
(
  id INT NOT NULL AUTO_INCREMENT,
  location VARCHAR(35) NOT NULL,
  lovedFor VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE reviews
(
  id INT NOT NULL AUTO_INCREMENT,
  userId INT NOT NULL,
  restaurantId INT NOT NULL,
  overallRating INT NOT NULL,
  foodRating INT NOT NULL,
  serviceRating INT NOT NULL,
  ambienceRating INT NOT NULL,
  valueRating INT NOT NULL,
  noiseLevel INT,
  dinedDate DATE NOT NULL,
  reviewText VARCHAR(2000),
  isRecommended BINARY,
  recommendFor VARCHAR(709),
  PRIMARY KEY (id),
  FOREIGN KEY (restaurantId) REFERENCES restaurants(id),
  FOREIGN KEY (userId) REFERENCES users(id)
);
