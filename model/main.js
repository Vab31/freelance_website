const mongoose =require("mongoose");
const Schema =mongoose.Schema;
require('mongoose-type-url');

const mainSchema = new Schema({
  
   state:Boolean,
   image:String,
   details:String,
   
  });
  
  const Main = mongoose.model('Main', mainSchema);
  module.exports=Main