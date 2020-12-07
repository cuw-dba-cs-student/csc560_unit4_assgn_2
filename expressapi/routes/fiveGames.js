const express = require('express');
const Player = require('../models/Player');
const router = express.Router();

router.get('/', async (req,res) => {    
    try {
        const roster = await Player.find({"Games Played": {$gte:5}});
        res.json(roster);
    }catch{
        res.json({message:err});
    }
}); 

module.exports = router;