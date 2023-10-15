import Main from '../model/main';


export async function Main(req,res){
    
        try {
            const allData = await Main.find({});
            res.json(allData);
          } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
          }
    
}