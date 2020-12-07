const express = require('express');
const router = express.Router();
const Player = require('../models/Player');

router.delete('/:no/:name', async (req,res) => {    
    try {
        const deletedPlayer = await Player.deleteOne({ $and: [{Name: req.params.name},{No: req.params.no}]});
        res.json(deletedPlayer);
    }catch{
        res.json({message: err});
    }

});

module.exports = router;