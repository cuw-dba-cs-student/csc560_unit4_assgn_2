const express = require('express');
const Player = require('../models/Player');
const router = express.Router();

router.get('/', async (req,res) => {    
    try {
        const roster = await Player.find(
            {
                $and:[
                    {"Games Played": {$gte:5}},
                    {"Yrs in NFL":{$gte:"5"}},
                    {"Age":{$lt:30}}
                ]
            },
            {Name:1,Age:1,"Games Played":1,_id:0}
        );
        res.json(roster);
    }catch{
        res.json({message:err});
    }
}); 

module.exports = router;