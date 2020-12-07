const express = require('express');
const router = express.Router();
const Player = require('../models/Player');

router.patch('/:no/:name', async (req,res) => {    
    try {
        const updatedPlayer = await Player.updateOne(
            { $and: [{Name: req.params.name},{No: req.params.no}]},
            {
                $set : 
                {
                    "Games Played": req.body.GamesPlayed, 
                    "Games Started": req.body.GamesStarted,
                }
            }
        );
        res.json(updatedPlayer);
    }catch{
        res.json({message: err});
    }
});

module.exports = router;