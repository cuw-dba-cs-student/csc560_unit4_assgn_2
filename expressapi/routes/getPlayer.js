const express = require('express');
const Player = require('../models/Player');
const router = express.Router();

router.get('/:name', async (req,res) => {    
    try {
        const player = await Player.find({ Name: req.params.name });
        res.json(player);
    }catch{
        res.json({message:err});
    }

});
    

module.exports = router;