const express = require('express');
const Player = require('../models/Player');
const router = express.Router();

router.get('/', async (req,res) => {    
    try {
        const roster = await Player.find({"Yrs in NFL": "Rook"});
        res.json(roster);
    }catch{
        res.json({message:err});
    }

}); 

module.exports = router;