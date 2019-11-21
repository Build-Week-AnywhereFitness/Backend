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

### Coach Create Workouts

`axios.post("https://anywhere--fitness.herokuapp.com/classes", {
	"name" : "Powerlifting",
	"intensity" : "High Intensity",
	"location" : " Intense Barbell ",
	"instructor_id" : "ae116945-0778-4f12-9c0f-80aeac336bde",
	"dateTime" : "11/20/19",
  "duration" : '1h',
  "max_class_size" : 32,
  "attendee_size" : 20
})`

Make sure to send an obj with these keys. name, location, instructor_id, and dateTime are not nullable. max_class_size and attendee_size are integers. 

### Get All Workouts

`axios.get("https://anywhere--fitness.herokuapp.com/classes")`

Will return all current workouts in the database. This will be used for the client, so they can see all they workouts on the database that they can choose from.



## Get Coach's Workouts

`axios.get("https://anywhere--fitness.herokuapp.com/classes/coach/:id")`


This will get all the workouts that the coach has created.
You will get the id as a response from the server once you have logged in successfully. You can then use that id as an argument to send in this url.


### Get Client's Workouts

Still finishing


### Coach Edit Workouts

`axios.put("https://anywhere--fitness.herokuapp.com/classes/:id", {
  "name" : "Powerlifting",
	"intensity" : "High Intensity",
	"location" : " Garreg Mach Monastery",
	"dateTime" : "11/20/19",
  "duration" : '2h',
  "max_class_size" : 32,
  "attendee_size" : 2
})`

"id" here is the workout id. You can grab that id when you get a list of either the coach's workouts or client's workouts. You can save that id in state and then map it to the indivual cards as a prop.

You will get the instructor_id from the login post response once you have logged in successfully.


### Coach Delete Workouts

`axios.delete("https://anywhere--fitness.herokuapp.com/classes/:id")`

"id" here is the workout id. You can grab that id when you get a list of the coach's workouts. You can save that id in state and then map it to the indivual cards as a prop.

