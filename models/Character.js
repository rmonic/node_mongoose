const mongoose=require("mongoose");
const CharacterSchema= new mongoose.Schema({
    name:String,
    age:Number,
    rank:String,
    employment:Boolean

});

const Character =new mongoose.model("CharacterSchema", CharacterSchema);

module.exports=Character;