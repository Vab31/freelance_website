const mongoose =require("mongoose");
const Schema =mongoose.Schema;
require('mongoose-type-url');

const userSchema = new Schema({
    paid:String,
    role:String,
    name:String,
    phoneNumber:String,
    email:String,
    password:String,
    country:String,
    state:String,
    city:String
  });
  
  const User = mongoose.model('User', userSchema);
  module.exports=User