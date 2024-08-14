const mongoose = require('mongoose');
const Course = require('./models/Course');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const seedCourses = async () => {
  try {
    await Course.deleteMany({});
    await Course.insertMany(courses);
    console.log('Courses seeded');
  } catch (error) {
    console.error('Error seeding courses:', error);
  } finally {
    mongoose.disconnect();
  }
};

seedCourses();
