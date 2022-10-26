# Reelz

The back-end (an api) of a full-stack app for creating watchlists of movies, rating and reviewing previously watched movies, and reading reviews from other users. 

This is a database of movie reviews which is readable for any user and accessible/writeable to registered users. This project is for users who want a place online to share and view movie reviews.

![image](https://user-images.githubusercontent.com/110881795/198110051-5a3edce3-ee7c-4cc7-8531-d13794721fb1.png)

## Completed Features
API Endpoints Currently Supported:

Reviews:
1. GET `/reviews` which will list out all reviews
2. GET `/reviews/movie/:movieId` which will list out all the reviews for a specific movie
3. POST `/reviews` which will add a new review and return a list of all reviews
4. PUT `/reviews/:reviewID` which will update a review and return the specific review
5. DELETE `/reviews/:reviewID` which will delete a review and return the specifi review

Users (Stretch):
1. GET `/users` which will list out all users
2. GET `/users/:userId` which will list a specific user
3. POST `/users/signup` which will add a new user and return the created user
4. POST `/users/signin` which will sign in the user and return a token
5. PATCH `/users/:userId` which will update a user and return a specific user
6. DELETE `/users/:userId` which will delete a user and return a specific user
7. GET `/users/reviews/:userId` which will list out all the reviews for a specific user
8. GET `/users/movies/:userId` which will list out all the movies for a specific user
9. PATCH `/users/:userId/movie/:movieId` which will add or update a movie on a specific user's watchlist and return the updated user
10. DELETE `/users/:userId/movie/:movieId` which will delete a movie from the user's watchlist and return the specific user.

## Technologies Used

React, Express (Passport.js), MongoDB (Mongoose)

## Getting Started / Installation Instructions

1. Fork and clone both the front-end and the back-end repository.
2. Run npm install on both repositories.
3. Run nodemon on back-end repository.
4. Run npm start on front-end repository

## User stories
### MVP:
- aauiwlt: Compile a library of movies I've seen and/or movies I would like to watch in the future.
- aauiwlt: Create, read, update, and delete reviews for specific movies.
- aauiwlt: See all the reviews for specific movies.

### Stretch:
- aauiwlt: See all reviews written by specific users. 
- aauiwlt: See the library of movies I've built.

## Wireframes
[The MIRO board.](https://miro.com/app/board/uXjVPNFJ2Pc=/) 

<img width="803" alt="Screen Shot 2022-10-19 at 5 06 06 PM" src="https://user-images.githubusercontent.com/107736662/196813779-051cc19a-0c5d-4384-8b9c-e6da381cf2a1.png">

<img width="707" alt="Screen Shot 2022-10-19 at 5 07 29 PM" src="https://user-images.githubusercontent.com/107736662/196813875-469b44d5-d15d-44d2-9d10-d79e6b023f6e.png">

<img width="916" alt="Screen Shot 2022-10-19 at 5 08 13 PM" src="https://user-images.githubusercontent.com/107736662/196813946-6260e46f-edd1-4f11-826d-26b618d521fd.png">
