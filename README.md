# Reviews Component
This component displays the reviews for each restaurant in the TableOpen application.

<img src="https://github.com/hrnyc18-TableOpen/Reviews/blob/master/TableOpenGIF1.gif" width="65%" height="65%">
<img src="https://github.com/hrnyc18-TableOpen/Reviews/blob/master/TableOpenGIF2.gif" width="65%" height="65%">


## Related Projectts

  - https://github.com/hrnyc18-tableOpen/MattProxyServer
  - https://github.com/hrnyc18-tableOpen/Overview
  - https://github.com/hrnyc18-tableOpen/Reservations-2
  - https://github.com/hrnyc18-tableOpen/Header

## Development

### Setting up database
Before the microservice can be run, a MySQL database needs to be set up to store the restaurants, users and reviews. Set up the local database with username 'root' and follow the steps below to populate it:

```sh
# download dependencies
npm install

# populate database
npm run seed
```

### Launching the application locally
From within the root directory:

```sh
# run webpack to build client bundle
npm run react-prod

# start server on localhost
npm start
```

Then access the microservice at: http://localhost:3020/restaurants/#, replacing # with any number from 1 to 100, corresponding to the restaurant ID. For example, listing 32 would be http://localhost:3020/restaurants/32.

## API

### GET /reviews

```sh
# Parameters
id: restaurant id
```

Will return all reviews for restaurant with queried id

Example data from GET /reviews?id=45

```sh
[
    {
        "id": 51,
        "userId": 59,
        "restaurantId": 45,
        "overallRating": 2,
        "foodRating": 5,
        "serviceRating": 4,
        "ambienceRating": 3,
        "valueRating": 5,
        "noiseLevel": 1,
        "dinedDate": "2018-09-26T04:00:00.000Z",
        "reviewText": "Everybody loved the building! His favorite item was the salad! My girfriend may not eat here next year.",
        "isRecommended": null,
        "recommendFor": null
    },
    {
        "id": 101,
        "userId": 85,
        "restaurantId": 45,
        "overallRating": 2,
        "foodRating": 3,
        "serviceRating": 4,
        "ambienceRating": 1,
        "valueRating": 3,
        "noiseLevel": 1,
        "dinedDate": "2013-01-31T05:00:00.000Z",
        "reviewText": "We all liked the location! His favorite item was the burger. My friends can come back never!",
        "isRecommended": 0,
        "recommendFor": null
    },
    {
        "id": 110,
        "userId": 28,
        "restaurantId": 45,
        "overallRating": 1,
        "foodRating": 5,
        "serviceRating": 1,
        "ambienceRating": 1,
        "valueRating": 2,
        "noiseLevel": null,
        "dinedDate": "2012-05-15T04:00:00.000Z",
        "reviewText": "My children loved the waiter. Our least-liked item was the chicken fingers! Everyone can't come back soon!",
        "isRecommended": 1,
        "recommendFor": null
    }
]
```
