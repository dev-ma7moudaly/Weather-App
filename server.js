//install express to run server 
const express = require('express');
// make instance from express
const app = express();
// CORS allows us to manage a Cross-origin resource sharing policy so that our front end can talk to the server.
const cors = require('cors');
//use cors on app
app.use(cors());
//body-parser allow the backend to access JSON data sent from the client using request.body in POST route handler.
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());
// Setup empty JS object to act as endpoint for all routes
projectData = {};
//location of main project folder 
app.use(express.static('website'));
// Callback function to complete GET '/all'
const getAll = (req, res) => res.status(200).send(projectData);
// GET Route
app.get("/all", getAll);
// Callback function to complete POST '/add'
const postData = (req, res) => {
    projectData = req.body;
    console.log(projectData);
    res.status(200).send(projectData);
  }
// POST Route
app.post("/add", postData);
//make variable for port and hostname
const port = 4000;
const hostname = '127.0.0.1';
//test server
const listening = ()=> console.log(`server running at http://${hostname}:${port}/`);
//run the server 
app.listen(port,listening);


