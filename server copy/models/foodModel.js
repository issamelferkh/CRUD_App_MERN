let mongoose = require('mongoose');

// Food Schema
let FoodSchema = mongoose.Schema({
  foodName: {
    type: String,
    required: true
	},
  created_at:{
    type: Date,
    default: Date.now()
  }
});

module.exports = Food = mongoose.model('Food', FoodSchema);