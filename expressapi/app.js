const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());

require('dotenv').config();
//Middleware 
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


const MONGODB_URI = 'mongodb://localhost:27017/seahawks';
const HTTP_PORT = 3000;
 
 const addPlayerRouter        = require('./routes/addPlayer');
 const attendedTechRouter     = require('./routes/attendedTech');
 const deletePlayerRouter     = require('./routes/deletePlayer');
 const fiveGamesRouter        = require('./routes/fiveGames');
 const fullRosterRouter       = require('./routes/fullRoster');
 const getPlayerRouter        = require('./routes/getPlayer');
 const rookieRouter           = require('./routes/rookies');
 const rosterByAgeRouter      = require('./routes/rosterByAge');
 const rosterByAgeDescRouter  = require('./routes/rosterByAgeDesc');
 const updatePlayerRouter     = require('./routes/updatePlayer');
 
 
//Middleware: Route Handlers
app.use('/api/addPlayer',addPlayerRouter);
app.use('/api/attendedTech',attendedTechRouter);
app.use('/api/deletePlayer',deletePlayerRouter);
app.use('/api/fiveGames',fiveGamesRouter);
app.use('/api/fullRoster', fullRosterRouter);
app.use('/api/getPlayer', getPlayerRouter);
app.use('/api/rookies',rookieRouter);
app.use('/api/rosterByAge',rosterByAgeRouter);
app.use('/api/rosterByAgeDesc',rosterByAgeDescRouter);
app.use('/api/updatePlayer',updatePlayerRouter);

// Auth would be good to do in the future. 
//app.use(auth);



//Connect to MongoDB

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('connected to MongoDB');
});

// Uncomment to debug.
mongoose.set('debug', true);

// listen on port defined in by HTTP_PORT in .env


let server = app.listen(HTTP_PORT, () => {
    console.log('Express is listening on port: ', server.address().port)
  })

