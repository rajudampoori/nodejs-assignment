const mongoose = require('mongoose');

//  Your code goes here
const marioschema = mongoose.Schema({
    name:String, 
    weight: Number
})

const Mario = mongoose.model("Mario",marioschema)

module.exports = Mario;