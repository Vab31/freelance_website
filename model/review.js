require('mongoose-type-url');

const reviewSchema = new Schema({

    category:String,
    desc:String,
    designImage:String,
    designFiles:String,
    userId:String,
    state:Boolean,
      
    

  });
  
  const Review = mongoose.model('Review', reviewSchema);
  module.exports=Review;