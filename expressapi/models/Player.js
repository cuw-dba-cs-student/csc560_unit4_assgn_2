const mongoose = require('mongoose');

const collegeSchema = mongoose.Schema(
    {Univ: String},
    {_id:false} 
);

const playerSchema = mongoose.Schema(
    {
        No: {type: Number,required: true},
        Name: String,
        Age: Number,
        Pos: String,
        "Games Played": Number,
        "Games Started": Number,
        Wt: Number ,
        College: collegeSchema,
        BirthDate: String,
        "Yrs in NFL": String, 
        "Salary": String
    },
    {collection: 'roster'});

// Mongoose will automatically looks for the plural, lowercased version of the model name
// that is why I set the "collection" option for the playerSchema above. Everything kept ending 
// up in a "Rosters" schema until I read the documentation and learneda about this behavior.
module.exports = mongoose.model('Roster',playerSchema);
