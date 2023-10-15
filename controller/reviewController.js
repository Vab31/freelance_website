const Review= require('../model/review')

export default async function Review (req,res) { 
      

    try{
    
        const {category,desc,designImage,designFiles,userId}=req.body;
        
     const newReview=new ({

            category,
            desc,
            designImage,
            designFiles,
            userId

         });

    await newReview.save();
    res.json({message:'Data saved registered successfully'});


    }catch(error){
        console.log('error ', error );
        res.status(500).json({error:'Server error'});

    }

 }


export default async function AcceptorReject(req,res){
    try{
        const designId = req.params.designid;
  const status = req.params.status;

  if(status=="approved"){
    

  }else{

  }

    }catch(error){

    }
}