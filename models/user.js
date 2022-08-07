const mongoose=require("mongoose");
const { stringify } = require("nodemon/lib/utils");
const detail = new mongoose.Schema({
    FirstName:{
        type: String,
        required :true
    },
    LastName:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    number:{
        type:String,
        required:true,
        unique:true

    }
    
})
const users=new mongoose.model("user",detail);
module.exports=users;