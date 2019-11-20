# Backend API

## Users Endpoints
---
Endpoints to create, login, get, edit, delete users.

### Register
`axios.post("https://anywhere--fitness.herokuapp.com/register", {
  first_name : "Joe",
  last_name : "Smith",
  username : "jSmith",
  password : "12345678",
  email : "jSmith@example.com",
  authCode : ""
})`

or 

`axios.post("https://anywhere--fitness.herokuapp.com/register", userObj)`

IMPORTANT: Key values are expected as strings.
All of these keys are required. "authCode" can be empty though, if authCode is empty the user will automatically become a client. To make a user that is a coach use authCode "AFcoach". "username" and "email" must be unique for each user. More edgecase testing is still being done on the backend so any error messages you get will possibly not be helpful.


### Login

`axios.post("https://anywhere--fitness.herokuapp.com/login", {
  username : "jSmith",
  password : "12345678"
})`

IMPORTANT: Key values are expected as strings. If post is successful, will return an object with message saying "You have logged in!", along with the user obj inside of a data key. The password field was modified to return as an empty string.

## Workouts Endpoints

## Get All Workouts

### Get User's Workouts

### Create Workouts

### Edit Workouts

### Delete Workouts

