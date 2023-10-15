const Main= require('../model/main');


const Maincon  = async  (req,res)=>{
    
        try {
            const allData = await Main.find({});
            res.json(allData);
          } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
          }
    
}



module.exports=Maincon;