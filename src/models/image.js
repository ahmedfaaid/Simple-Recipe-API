const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  filename: String,
  mimetype: String,
  path: String,
});

module.exports = mongoose.model('Image', imageSchema);
