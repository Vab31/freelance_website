


//signupform
const bcrypt = require('bcryptjs');
const User= require('../model/auth')
export async function Signup(req,res) { 

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



 export default async function Login(req,res){
   const {logincred,password}=req.body;
   try{
const mail = await User.findone({email:logincred});
const phonenum = await User.findone({phoneNumber:logincred})

if(!mail && !phonenum ){
  return res.status(401).json({error:'Invalid email or password'});
}


const passwd= await bcrypt.compare(password,mail.password);

if (!passwd) {
  return res.status(401).json({ error: 'Invalid email or password' });
}

  





const token =jwt.sgin({userId:user._id},'mysecretkey');
return token;
   }catch(error){
    console.error(error);
    res.status(500).json({error:'Internal server error'})
   }

 }