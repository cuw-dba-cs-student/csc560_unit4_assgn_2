const express = require('express');
const Player = require('../models/Player');
const router = express.Router();
const player = require('../models/Player');

router.post('/', (req,res) => {    
    const player = new Player({
        No: req.body.No,
        Name: req.body.Name ,
        Age: req.body.Age,
        Pos: req.body.Pos,
        "Games Played": req.body.GamesPlayed,
        "Games Started": req.body.GamesStarted,
        Wt: req.body.Wt,
        College: req.body.College,
        BirthDate: req.body.BirthDate,
        "Yrs in NFL": req.body.YrsinNFL, 
        "Salary": req.body.Salary
    });
    
    player.save()    
    .then(data => {
        res.json(data);        
    })
    .catch(err => {
        res.statusMessage();
    });
});

module.exports = router;