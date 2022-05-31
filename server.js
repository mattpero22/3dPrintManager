// get env vars
require('dotenv').config();
const PORT = process.env.PORT || 3000;

// get npm dependencies
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
const db = mongoose.connection;

// db connection
const MONGODB_URL = process.env.MONGODB_URL;
mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
db.on('error', (err) => console.log(err.message + ' is mongodb not running?'));
db.on('connected', () => console.log('mongodb connected'));
db.on('disconnected', () => console.log('mongodb disconnected'));

// middleware
app.use(express.static(__dirname + "/public")); // folder for static styles and assets referenced at public
app.use(express.urlencoded({ extended: false })); // body parser to access req.body
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form


// routes / controllers
app.get('/' , (req, res) => res.send('Hello World!'));

// app listener
app.listen(PORT, console.log('Welcome to the 3D print store.'))