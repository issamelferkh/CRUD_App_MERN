const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// init App
const app = express();
app.use(cors());

// parse application/json 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to Mongo
const db = process.env.mongoURI;
mongoose
	.connect(db)
	.then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Routes
const FoodModel = require('./models/foodModel');
app.get('/', async (req,res) => {
  

  // try {
    const foodName = req.body;
    console.log(foodName);
  //   const NewFood = FoodModel({
  //     foodName: foodName
  //   });
  //   await NewFood.save();
  // } catch (error) {
  //   console.log(error);
  // }
});

// Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`The server run on the port ${PORT}`)
});
