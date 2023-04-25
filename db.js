const mongoose = require('mongoose');

// connecting to Mongo using Mongoose
mongoose.connect('mongodb://127.0.0.1:27017/cats', {}).then(() => console.log('yay')).catch(() => console.log('boo'));

const catSchema = new mongoose.Schema({
  name: { type: String, require: true },
  color: String,
  evil: Boolean
});

const catModel = mongoose.model("cat", catSchema); //name of the collection first argument


module.exports = { catModel };