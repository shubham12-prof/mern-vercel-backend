const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  title: String,
  duration: String,
});

module.exports = mongoose.model('Course', CourseSchema);