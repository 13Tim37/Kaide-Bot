const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const {
    userRoutes
} = require('./routes');

mongoose.connect(process.env.DATABASE_URL, { useCreateIndex: true, useNewUrlParser: true });

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./routes')(app);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('Kaide Bot database RESTful API server started on port: ' + port));
