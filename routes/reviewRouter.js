const express =require(express);
const router = express.Router();
import  Signup from '../controller/userController.js'



router.post('/review/',Signup);
router.post('/save/:designid/:status',AcceptorReject);   //accept and reject
// router.post('/login',Login);

