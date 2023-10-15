
const bcrypt = require('bcryptjs');
const User= require('../model/auth');
const jwt =require('jsonwebtoken')



const  Signup = async (req, res) =>{ 

  console.log("inside signup");

try{
    const {paid,role,name,phoneNumber,email,password,country,state,city}=req.body;
    const user= await User.findOne({email,phoneNumber});
    if(user){
        return res.status(400).json({error:'User already exists'});

    }


    //Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword= await bcrypt.hash(password,salt);

    //create a new user
  const newUser=new User({
    paid,
    role,
    name,
    phoneNumber,
    email,
    password:hashedPassword,
    country,
    state,
    city

  });
  await newUser.save();

  res.json({message:'User registered successfully'});

}catch(error){
    console.log('error ', error );
    res.status(500).json({error:'Server error'});

}




 }

 

 
 
//   async function Login(req, res) {
//  const { email, password } = req.body;
  
//     try {
//       const user = await User.findOne({ email });
//       if (!user) {
//         return res.status(401).json({ error: 'Invalid email or password' });
//       }
  
//       const passwordMatch = await bcrypt.compare(password, user.password);
//       if (!passwordMatch) {
//         return res.status(401).json({ error: 'Invalid email or password' });
//       }
  
//       const token = jwt.sign({ userId: user._id }, 'mysecretkey');
//       return res.json({ token });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//  }

async function Login(req, res) {
  // const { logincred, password } = req.body;
  // console.log(req.body.email)
  if(req.body.email){

    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }
  
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }
  
      const token = jwt.sign({ userId: user._id }, 'mysecretkey');
      return res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }else{
    const { phoneNumber, password } = req.body;
  
    try {
      const user = await User.findOne({ phoneNumber });
      if (!user) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }
  
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }
  
      const token = jwt.sign({ userId: user._id }, 'mysecretkey');
      return res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  
}
 

 module.exports = { Signup ,Login};