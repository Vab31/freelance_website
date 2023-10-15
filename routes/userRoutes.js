const express =require(express);
const router = express.Router();
import  Signup from '../controller/userController.js'



router.post('/signup',Signup);
router.post('/login',Login);

