const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/database');

const items = require('./routes/api/items');

const app = express();

// body parser
app.use(bodyParser.json());


// mongoose
mongoose.connect(config.mongoURI, { useNewUrlParser: true });

const db = mongoose.connection;

// on connect
db.on('connected', () => {
    console.log('connected');
});

// on error
db.on('error', () => {
    console.log(error);
});


// routes
app.use('/items/api', items);

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`server run on ${PORT}`);
});