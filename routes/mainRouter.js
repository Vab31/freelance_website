// mainRoutes.js
const express = require('express');
const router = express.Router();
const Maincon = require('../controller/mainController.js');

router.get('/', Maincon); 

module.exports = router;
