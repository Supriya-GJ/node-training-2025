const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/products.route');
const dotenv = require('dotenv');

dotenv.config();

// A middlewear to convert the json
const app = express();
app.use(express.json());

// routes
app.use('/api/products',productRoute);

app.listen(3000, () => {
    console.log('We used nodemon');
  });
 

app.get('/', (req, res) => {
    res.send('This is the node response sent');
});


mongoose.connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log('Connected to MongoDB Successfully');
  })
  .catch((err) => {
    console.log('Connection Failed',err);
  });
