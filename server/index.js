const express = require('express')
const mongoose = require('mongoose')
const path = require('path');
const app = express()
app.use(express.json());

const cors = require('cors');
app.use(cors());

const dotenv = require('dotenv');//ייבוא כמשתנה
dotenv.config();//הפעלתו

const connectdb = require('./db');

connectdb();

// הגדרת נתיב לתיקיית הסטטיים
app.use(express.static(path.join(__dirname, '..', 'client')));

//משמש לקריאת טפסים שאינם json
const bodyParser = require('body-parser')

//מאפשר להשתמש באובייקטים מורכבים
app.use(bodyParser.urlencoded({ extended: true }))

// הגדרת נתיב לבית
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'homePage.html'));
});

//  ייבוא הראוטים
const userRoutes = require('./routes/userRoutes');
const perfumeRoutes = require('./routes/perfumeRoutes');


//  חיבור הראוטים
app.use('/api/users', userRoutes);
app.use('/api/perfumes', perfumeRoutes);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("server is running")
})


