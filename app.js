const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Load environment variables with defaults
dotenv.config({ path: './config.env' });
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';
const DB_URL = process.env.DB_URL;


app.use(bodyParser.json()); // application/json


// Serve static files from the 'public' directory
app.use(express.static('public'));


// Importing and using route modules
const usersRoutes = require('./routes/users');
app.use('/api/v1/users', usersRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  // Handle errors here and send appropriate responses
  res.status(500).send('Internal Server Error');
});


mongoose
  .connect( DB_URL
  )
  .then(result => {
    console.log('I am inside the database');
    app.listen(PORT, ()=>{
      console.log(`connected to ${PORT} port in ${NODE_ENV} mode`);
    });
  })
  .catch(err => console.log(err));