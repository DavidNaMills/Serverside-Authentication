//main starting point

const express = require('express');
const http = require ('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const router = require('./routes/router');
const cors = require('cors');


const PORT = process.env.PORT || 3000;
const app = express();


//DB Setup
mongoose.connect('mongodb://localhost:auth/auth');

//App setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json('*/*'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());


const server = http.createServer(app);
router(app);





//server setup
//express talking to outside world

server.listen(PORT, ()=>{
     console.log(`server listening on port: ${PORT}`);
});