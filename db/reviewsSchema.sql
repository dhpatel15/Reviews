CREATE DATABASE IF NOT EXISTS tableOpenReviews;

USE tableOpenReviews;

DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS restaurants;

CREATE TABLE reviews
(
  id INT NOT NULL AUTO_INCREMENT,
  userId INT NOT NULL,
  restaurantId INT NOT NULL,
  overallRating DECIMAL(2, 1) NOT NULL,
  foodRating DECIMAL(2, 1) NOT NULL,
  serviceRating DECIMAL(2, 1) NOT NULL,
  ambienceRating DECIMAL(2, 1) NOT NULL,
  dinedDate DATE NOT NULL,
  text VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE users
(
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(35) NOT NULL,
  hometown VARCHAR(35) NOT NULL,
  numOfReviews INT NOT NULL,
  VIP BINARY NOT NULL
  iconColor VARCHAR(35) NOT NULL,
  abbreviation VARCHAR(2) NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE restaurants
(
  id INT NOT NULL AUTO_INCREMENT,
  noise INT NOT NULL,
  recommend INT NOT NULL,
  lovedFor VARCHAR(255) NOT NULL,
  filters VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);
