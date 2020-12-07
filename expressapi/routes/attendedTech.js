const express = require('express');
const Player = require('../models/Player');
const router = express.Router();

router.get('/', async (req,res) => {    
    try {
        const roster = await Player.find(
            {
                "College.Univ":{$regex: /Tech/}
            },
            {
                _id:0,
                No:1,
                Name:1,
                Age:1,
                Pos:1,
                College:1,
                "Games Played":1
            }

        );
        res.json(roster);
    }catch{
        res.json({message:err});
    }

}); 

module.exports = router;