const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const courseRoutes = require('./routes/course');

require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors({
  origin: [ 'https://mern-vercel-free.vercel.app',
    'https://mern-vercel-frontend.vercel.app',
    'http://localhost:3000'],
  credentials: true
}));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send("Welcome")
})
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);

app.get('/api/courses', (req, res) => {
  const courses = [
    { title: "(New) Responsive Web Design Certification", duration: "300" },
    { title: "Legacy Responsive Web Design Certification", duration: "300" },
    { title: "JavaScript Algorithms and Data Structures Certification", duration: "300" },
    { title: "Front End Development Libraries Certification", duration: "300" },
    { title: "Data Visualization Certification", duration: "300" },
    { title: "Back End Development and APIs Certification", duration: "300" },
    { title: "Quality Assurance Certification", duration: "300" }
  ];
  res.json(courses);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});