const express = require('express');
const Player = require('../models/Player');
const router = express.Router();

router.get('/:no/:name', async (req,res) => {    
    try {
        const player = await Player.find({ $and: [{Name: req.params.name},{No: req.params.no}]});
        res.json(player);
    }catch{
        res.json({message:err});
    }

});
    

module.exports = router;