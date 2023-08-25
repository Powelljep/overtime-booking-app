const express = require("express");
const cors = require("cors");

//create express app
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//connect to MongoDB

//use the routes
//app.use('/api', routes);

//Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

module.exports = app;
